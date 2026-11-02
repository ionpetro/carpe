#!/usr/bin/env python3
"""Extract the Latin reading text of each lesson (XVI-L) from the two official
school-book PDFs (digital copies on ebooks.edu.gr), for LOCAL, PRIVATE use.

Why a script and not a data file: the book is (c) Hellenic Ministry of Education / ITYE
Diophantos ("reproduction without written permission is prohibited"), and this repo may
be published. So the full Latin texts are NOT committed; regenerate them locally:

  curl -L -o A.pdf "https://ebooks.edu.gr/ebooks/v/pdf/8547/2528/22-0286-01-V1_Latinika-Teuchos-A_B-Lykeiou_Vivlio-Mathiti/"
  curl -L -o B.pdf "https://ebooks.edu.gr/ebooks/v/pdf/8547/2538/22-0165-02_V3_Latinika-Teuchos-B_G-Lykeiou_Vivlio-Mathiti/"
  python3 -m venv .venv && .venv/bin/pip install pymupdf
  .venv/bin/python extract_textbook_latin.py A.pdf B.pdf private/latin_full.json

Output: {"16": "<text>", ..., "50": "<text>"}  (asterisks removed; macrons kept as printed).
Always eyeball the result against the PDF: the book has a few typos (see research/texts.md).
"""
import json
import re
import sys

import pymupdf

# The PDFs contain Greek look-alike letters inside Latin words (e.g. Greek omicron in "quo").
HOMO = str.maketrans({
    'ο': 'o', 'Ο': 'O', 'Α': 'A', 'Β': 'B', 'Ε': 'E', 'Ζ': 'Z', 'Η': 'H', 'Ι': 'I',
    'Κ': 'K', 'Μ': 'M', 'Ν': 'N', 'Ρ': 'P', 'Τ': 'T', 'Υ': 'Y', 'Χ': 'X',
})
GREEK = re.compile(r'[Ͱ-Ͽἀ-῿]')
LOWER_LATIN = re.compile(r'[a-zāēīōūăĕĭŏŭ]')
SIMPLE_HOMO = 'οΟΑΒΕΖΗΙΚΜΝΡΤΥΧ'


def pdf_lines(path):
    doc = pymupdf.open(path)
    out = []
    for p in doc:
        out.extend(p.get_text().split('\n'))
    return out


def is_greek_line(line):
    non = [c for c in GREEK.findall(line) if c not in SIMPLE_HOMO]
    return len(non) >= 2


def clean_block(lines):
    keep = []
    for raw in lines:
        l = raw.strip()
        if not l or re.fullmatch(r'[\d\s]+', l) or l.startswith('====='):
            continue
        if l.startswith(('LECTIO', 'LΕCTIΟ')) or is_greek_line(l):
            continue
        if not LOWER_LATIN.search(l):      # headers, Greek capitals, numerals, epitaphs
            continue
        keep.append(l)
    txt = re.sub(r'\u00ad\s*', '', ' '.join(keep))   # soft hyphen (+ line break) inside words
    txt = re.sub(r'(\w)-\s+(?=[a-zāēīōūăĕĭŏŭ])', r'\1', txt)   # de-hyphenate line breaks
    txt = re.sub(r'\s+', ' ', txt).replace('*', '')
    txt = txt.translate(HOMO)          # only Latin lines remain here, so any Greek look-alike is a typo-glyph
    return txt.strip()


def lessons(path, first_no, header_re):
    lines = pdf_lines(path)
    starts = [i for i, l in enumerate(lines) if re.match(header_re, l) and 'ΜΑΘΗΜΑΤΑ' not in l]
    res = {}
    for k, i in enumerate(starts):
        j = starts[k + 1] if k + 1 < len(starts) else len(lines)
        blk = lines[i:j]
        cut = [x for x, l in enumerate(blk) if 'ΛΕΞΙΛΟΓΙΟ' in l]
        res[first_no + k] = clean_block(blk[:cut[0]] if cut else blk[:60])
    return res


if __name__ == '__main__':
    a_pdf, b_pdf, out_path = sys.argv[1:4]
    a = lessons(a_pdf, 1, r'ΜΑΘΗΜΑ [XIVL]+')          # lessons I-XX
    b = lessons(b_pdf, 21, r'(ΜΑΘΗΜΑ|MAΘHMA) ')       # lessons XXI-L (XLIX is spelt with Latin letters)
    merged = {n: t for n, t in {**a, **b}.items() if n >= 16}
    assert sorted(merged) == list(range(16, 51)), sorted(merged)
    json.dump({str(n): merged[n] for n in sorted(merged)}, open(out_path, 'w'), ensure_ascii=False, indent=1)
    print('wrote', out_path, len(merged), 'lessons')
