# Vocabulary research: Latin Γ΄ Λυκείου (Πανελλαδικές 2027)

Compiled 2026-11-01. Everything below comes from the official textbook (read as PDF, not summarised from memory) and from the 2022-2026 Panhellenic papers. Files:

| File | What it is |
|---|---|
| `research/vocab.jsonl` | **1514** vocabulary entries, one JSON object per line (schema below) |
| `research/vocab_names.jsonl` | 212 proper names (Cicero, Camillus, Alba Longa ...) kept apart from the vocabulary |
| `research/vocab_pipeline/` | the scripts that produced both files from the textbook PDFs (re-runnable, rough) |

## 1. Bottom line

1. **The vocabulary is already defined by the textbook.** Every lesson of Πασχάλης-Σαββαντίδης has a `ΛΕΞΙΛΟΓΙΟ` next to its Latin text, and Τεύχος Β΄ ends with a cumulative Latin-Greek glossary (pp. 168-212 of the PDF, about 1,760 entries covering lessons 1-50, with the lesson numbers where each word occurs). I parsed that glossary. It is the closest thing to an official word list. No separate Ministry vocabulary list exists (I searched ebooks.edu.gr, IEP, the Ministry decisions and teacher sites).
2. **Official scope for the June 2027 exams** (ΥΑ 90176/Δ2/06-07-2026, ΦΕΚ Β΄ 4210): texts = Τεύχος Α΄ lessons XVI-XX and Τεύχος Β΄ lessons XXI-L (35 lessons), plus the grammar and syntax of Β΄ Λυκείου (lessons I-XV) and of Γ΄, plus the Introduction and the Latin phrases used in Modern Greek. Reference grammar: Τζάρτζανος. Lessons I-XV are **not** examinable texts any more, but their grammar is.
3. **The exam Latin is the textbook Latin, almost word for word.** I matched every Latin passage of the 2022-2026 papers against the 50 lesson texts: each one is a lesson text (overlap of word forms 0.88-1.00). So the words that matter most are the words of the printed texts of lessons XVI-L. See section 3.
4. **Exam questions that depend on vocabulary** (2022-2026): Α1 translation of two passages (20 marks), Β2 etymology (10 marks: match 5 Latin words from the passages to Greek relatives, or find a Latin relative in the passages for 5 Greek words), Γ1 forms of 10-12 words (cases, plural, comparative/superlative of adjectives and adverbs), Γ2 verb forms. For these the app needs not just meanings but full dictionary forms, genders, declension/conjugation and the official etymology links, which are in the file.

## 2. Numbers

| | |
|---|---|
| Entries in `vocab.jsonl` | **1514** (nouns 508, verbs 510, adjectives 223, adverbs 133, conjunctions 48, pronouns 35, prepositions 23, numerals 12, phrases 13, particles 5, interjections 4) |
| Tier 1 (word is glossed next to a text of lessons XVI-L, or occurs in those printed texts) | **1038** |
| of which `core: true` (tier 1 and at least one of: 2+ exam lessons, 3+ occurrences in the texts, appeared in a 2022-26 exam passage, or a function word) | **532** |
| Tier 2 (only in the remarks/exercises/epimythia of lessons XVI-L) | 184 |
| Tier 3 (only in lessons I-XV, Β΄ Λυκείου) | 292 |
| Proper names (separate file) | 212 |
| Verbs: deponent / semi-deponent | 43 / 5 (tier 1 deponents: 42) |
| Entries linked to the official 2026-27 etymology list | 135 (68 are `core`) |
| Entries flagged `uncertain: true` | 9 |

The target was 400-700 entries. `core` (532) is the 400-700 list to teach first; the rest is there so nothing the exam texts use is missing.

Coverage test: of the 3,257 word tokens in the printed Latin texts of lessons XVI-L (as extracted from the PDF), **87.6%** are matched by a generated form of a vocabulary entry or a proper name. The rest are mostly page-header words (`lectio`, Roman numerals), hyphenation fragments, and comparative/superlative/imperative/subjunctive forms my form generator does not produce (nobilissimi, mementote, imitemur). Genuine gaps in the book's glossary that I noticed: `ter`, `nec` (variant of neque), `inquit` (listed under inquam), `hi`. So the glossary does cover the texts.

## 3. Evidence: exam passages are textbook lessons

Matching each Latin passage of the papers (text extracted from the official PDFs) to the lesson text with the highest share of identical word forms:

| Year | Lessons the passages come from |
|---|---|
| 2022 | XVI, XXXVI, XLV |
| 2023 | XXIII, XXXVIII |
| 2024 | XIX, XLII |
| 2025 | XXIV, XXXIX |
| 2026 | XXXV, XLIX |

That is 11 lessons out of 35 in five years; the other 24 (XVII, XVIII, XX-XXII, XXV-XXXIV, XXXVII, XL, XLI, XLIII, XLIV, XLVI-XLVIII, L) have not appeared in 2022-26, which says nothing about 2027. Because every lesson text is fair game, `tier 1` treats them all alike. I read only these five papers for this analysis; the sibling file `research/pastpapers.md` covers older years. In the extracted text of all five papers, the box headed `ΠΑΡΑΤΗΡΗΣΕΙΣ` after Α1 is empty (no vocabulary glosses are visible). This may be an extraction limit, so treat "no glosses" as **uncertain** until someone checks a printed paper.

Real examples of vocabulary-dependent tasks (from the papers): 2022 Β2 `cernitur, fugiunt, magna, cognoscantur, amentum` vs Greek relatives; 2025 Β2 `domi, cognosco, imperitos, agunt, premi`; 2026 Β2 `dotem, reliquerat, conferre, unguium, secreto`; 2023/2024 Β2 give Greek words (μετάδοση, ναυάγιο, ...; ρεαλιστής, στραγγαλίζω, φίρμα, ρήγας) and ask for the Latin relative in the texts. Γ1 asks for e.g. `pondus` nominative plural, `celeriter` the other degrees, `viliorem` the other two degrees, `rus` accusative plural, `dotem` genitive plural.

## 4. Field dictionary (`vocab.jsonl`)

| Field | Meaning |
|---|---|
| `id` | unique, e.g. `mitto-verb` |
| `lemma` | headword as in the book (macrons kept; breves kept on a few words) |
| `forms` | full dictionary form: nouns `lemma, genitive`; adjectives all gender forms; verbs all four principal parts (αρχικοί χρόνοι); deponents `lemma, perfect-participle sum, infinitive`; `—` marks a part that does not exist |
| `pos` | noun, verb, adj, adv, prep, conj, pron, num, particle, interj, phrase |
| `gender` | m, f, n, c (αρσ. και θηλ.). `null` for non-nouns |
| `decl_or_conj` | nouns `1`-`5` (α΄-ε΄ κλίση); adjectives `1-2`, `3 (2 καταλήξεις)` etc.; verbs `1`, `2`, `3`, `3-io`, `4`, `irreg`, `irreg (eo)`, `irreg (sum)`, `defective`, with `(dep.)` / `(semi-dep.)` / `(pass.)` |
| `el` | the book's Greek meaning(s), senses joined by `;` (`senses` is the same as a list) |
| `lessons` | every lesson number where the book's glossary lists the word. `lessons_text`: only where it is glossed next to the lesson text (bare number). `lessons_other`: with a suffix, Π = remarks, Α = exercises, Ε = epimythion |
| `seen_in_lessons` | lessons whose printed Latin text contains a form of the word (my form generator, approximate) |
| `tier`, `core` | see section 2 |
| `freq_text` | number of tokens in the 50 lesson texts that match a form of the word. **Approximate**: a form shared by two entries (e.g. `bellum` noun/adjective, `qui` pronoun/adverb) is counted for both. The 50 texts hold only about 4,260 tokens, so the best predictor of exam relevance is lesson membership, not frequency |
| `exam_years_2022_2026` | years in which a form of the word appears in a Panhellenic Latin passage |
| `etym_official_2026_27` | official IEP etymology links for this word (lesson, Greek meaning, Greek derivatives, starred or not). `*` means the word is not in that lesson's etymology footnotes but is a usual relation |
| `plural_only` | present on pluralia tantum |
| `notes`, `uncertain` | corrections and doubts, see section 6 |

## 5. What is verbatim and what I added

- **Verbatim from the book:** the lemma, the Greek meanings, the gender when printed (all 3rd-5th declension nouns and neuters carry it), the genitive suffix, the lesson numbers, the principal parts that are printed.
- **Reconstructed by rule (standard Latin, not printed in the glossary):** (a) compound verbs are printed with a hyphen (`abicio, -iēci, -iectum, -icĕre`); I expanded them to `abicio, abiēci, abiectum, abicĕre`, and for the compounds of fero and eo I used the correct assimilated forms (attuli, allātum; rettuli, relātum; abii); (b) regular 1st and 4th conjugation verbs (and `compleo`, `deleo`) are printed with just the conjugation number, e.g. `amo, 1`; I wrote the regular parts `amo, amāvi, amātum, amāre`; (c) full genitives from the printed suffix (`admiratio -ōnis` → `admiratio, admirationis`); (d) the plural genitive of pluralia tantum; (e) the declension number and the adjective class.
- **Gender not printed:** 1st-declension nouns (feminine, except poeta, nauta, incola etc.), 2nd (-us/-er masculine, -um neuter), and a few 3rd-declension nouns (`-tas`, `-tudo`, `-io` feminine) were assigned by rule. They are marked in `notes`; the 3rd-declension ones are also `uncertain: true`.
- **Frequencies, exam years, tiers:** computed by me (section 7). They are real counts, but approximate for the reasons given.

## 6. Corrections, doubts and decisions

**Typos in the book's glossary that I corrected:** `mitto, misi, misum` → `missum` (confirmed by the official etymology list, which writes σουπίνο missum); `prorumpro` → `prorumpo`; `circumdo ... l` → `1`; `militāris -ris -e` → `-is -e`; `primus -a um` → `-a -um`; `puter -is -e` → `puter, putris, putre`; the missing hyphens in `occīdo ... cīdĕre` and `praesūmo ... sumĕre`; lookalike letters (Greek `ο` inside Latin words, Latin `o` inside Greek words), which are PDF artefacts.

**Doubtful, marked `uncertain: true`:**

- `quamvis-conj` : quamvis - η ελληνική απόδοση λείπει από το λεξιλόγιο του βιβλίου· προστέθηκε από τον ερευνητή
- `metuo-verb` : metuo, metui, metūtum, metuĕre - το βιβλίο δίνει supine metūtum· στα λεξικά το metuo συνήθως δεν έχει σουπίνο — έλεγξε
- `antecello-verb` : antecello, antecellĕre (άλλοι χρόνοι δεν δίνονται στο βιβλίο)
- `diffluo-verb` : diffluo, difflūxi, difflūctum, diffluĕre - το βιβλίο δίνει difflūctum· στα λεξικά το diffluo συνήθως δεν έχει σουπίνο — έλεγξε
- `medeor-verb` : medeor, medēri - αποθετικό ρήμα; το λεξιλόγιο του βιβλίου δίνει μόνο ενεστώτα και απαρέμφατο
- `quaeso-verb` : quaeso, quaesĕre - το λεξιλόγιο του βιβλίου δίνει μόνο ενεστώτα και απαρέμφατο
- `immineo-verb` : immineo, imminēre - το λεξιλόγιο του βιβλίου δίνει μόνο ενεστώτα και απαρέμφατο
- `remollesco-verb` : remollesco, remollescĕre - το λεξιλόγιο του βιβλίου δίνει μόνο ενεστώτα και απαρέμφατο
- `langueo-verb` : langueo, languēre - το λεξιλόγιο του βιβλίου δίνει μόνο ενεστώτα και απαρέμφατο

**Other decisions:**
- `quamvis` has no Greek gloss in the book's glossary; I added `όσο κι αν, αν και` (my addition, flagged).
- `ex sententiā` (lesson XLIX) was listed in the book as `sententiā = κατ' ευχήν`; I stored it as the phrase `ex sententiā`.
- Impersonal and passive uses that the glossary lists as separate lines (`accĭdit`, `fertur`, `consequitur`, `relinquitur`, `positus sum`, `ipsum`, `ac`) were folded into the main verb or pronoun as notes. `consequitur` also stays as its own entry because the book lists it.
- Homographs stay separate (`ut` adverb/conjunction, `qui` pronoun/adverb, `eo` adverb/verb, `fundo` ×2, `natus` noun/adjective).
- Entries with no lesson number in the book (`auxilium`, `mors`, `servus`, `iter`, ...) have `lessons: []` and a note.
- The book spells some words in older forms (`adgnosco`, `adporto`, `exsul`, `conloquor`); I kept the book's spelling and left the usual variant in parentheses or in `forms`.

## 7. Method

1. Downloaded the student books: Τεύχος Α΄ (accessible edition from prosvasimo.iep.edu.gr, lessons I-XX) and Τεύχος Β΄ (ebooks.edu.gr PDF, lessons XXI-L plus the cumulative glossary); extracted text with PyMuPDF.
2. Cut the glossary (pp. 168-212), joined broken lines, split into entries, and merged continuation lines that start with a Latin word. 1,763 raw entries → 212 proper names, about 37 cross-references, fold-ins and merged duplicates, 1,514 vocabulary entries.
3. Parsed each head into lemma / forms / gender / declension, with the rules in section 5, then read all 510 verb entries, the nouns, the adjectives and every function word by eye against Latin grammar, which found the typos above.
4. Extracted the Latin text of each of the 50 lessons, generated the inflected forms of every entry (strict ending sets, no loose prefix matching), and counted matches per lesson, over the lesson texts and over the five exam papers.
5. Attached the official 2026-27 etymology list from the sibling file `research/official-2026-27-etymology-by-lesson.txt` (191 lines for lessons XVI-L, none for XXIV): 135 entries linked; four lines could not be linked because the word is not in the glossary (`vita` ×3, `futurus`).

## 8. Lists the app will want

**Irregular, defective and impersonal verbs (42):** sum, fui, —, esse; possum, potui, —, posse; fio, factus sum, fieri; eo, ii; volo, volui, —, velle; fero, tuli, lātum, ferre; affero; malo, malui, —, malle; nolo, nolui, —, nolle; pereo, perii; fore; offero, obtuli, oblātum, offerre; paenitet, paenituit, paenitēre; refero, rettuli, relātum, referre; absum, afui, —, abesse; licet, licuit, licēre; redeo, redii; abeo, abii; adeo, adii; confero, contuli, collātum, conferre; decet, decuit, decēre; defero, detuli, delātum, deferre; exeo, exii; praesum, praefui, —, praeesse; adsum, adfui, —, adesse; aio, ais, ait; coepi, coepisse, coeptum; interest, interfuit, interesse; memini, meminisse; contingit, contigit, contingĕre; intereo, interii; miseret, miseruit, miserēre; odi, odisse; piget, piguit, pigēre; pluit, pluit, pluĕre; pudet, puduit, pudēre; refert, retulit, referre; taedet, taesum est, taedēre; transeo, transii; inquam, inquis, inquit; obtingit, obtigit, obtingĕre; transfero, transtuli, translātum, transferre.

**Tier-1 deponents (42):** nascor, natus sum, nasci; morior, mortuus sum, mori; utor, usus sum, uti; miseror, miserātus sum, miserāri; soleo, solitus sum, solēre; consequor, consecūtus sum, consĕqui; loquor, locūtus sum, loqui; proelior, proeliātus sum, proeliāri; sequor, secūtus sum, sequi; egredior, egressus sum, egrĕdi; elābor, elapsus sum, elābi; fateor, fassus sum, fatēri; indignor, indignātus sum, indignāri; mentior, mentītus sum, mentīri; miror, mirātus sum, mirāri; patior, passus sum, pati; queror, questus sum, queri; vereor, veritus sum, verēri; molior, molītus sum, molīri; complector, complexus sum, complecti; confīdo, confīsus sum, confidĕre; minitor, minitātus sum, minitāri; orior, ortus sum, orīri; adhortor, adhortātus sum, adhortāri; admīror, admīrātus sum, admīrāri; audeo, ausus sum, audēre; conloquor, conlocūtus sum, conloqui; conor, conātus sum, conāri; dilābor, dilāpsus sum, dilābi; experior, expertus sum, experīri; glorior, gloriātus sum, gloriāri; imitor, imitātus sum, imitāri; ingredior, ingressus sum, ingredi; intueor, intuitus sum, intuēri; medeor, medēri; obsequor, obsecūtus sum, obsĕqui; osculor, osculātus sum, osculāri; populor, populātus sum, populāri; revertor, reverti (reversus sum), reverti; tutor, tutātus sum, tutāri; veneror, venerātus sum, venerāri; congredior, congressus sum, congrĕdi.

**Semi-deponents:** audeo, ausus sum; confīdo, confīsus sum; gaudeo, gavīsus sum; soleo, solitus sum; revertor, reverti (reversus sum) (the book calls the last one semi-deponent or deponent).

**Pluralia tantum:** arma, castra, copiae, divitiae, hiberna, insidiae, līberi, manes, moenia, opes, penātes, pugillāres, tenebrae, thermae, domestici, cervīces.

**Highest-count core nouns, verbs and adjectives in the 50 texts (approximate):** sum (158), dico (26), res (23), omnis (20), bellum (18), bellus (18), hostis (18), pater (18), facio (15), possum (15), venio (14), video (14), fio (13), habeo (13), multus (13), patria (13), filius (12), homo (12), miles (12), vir (12), dies (11), lex (11), animus (10), castra (10), magnus (10), audio (9), do (9), eo (9), mitto (9), salus (9), urbs (9), videor (9), vis (9), annus (8), consulo (8), dux (8), epistula (8), filia (8), nascor (8), nomen (8), publicus (8), puella (8), salūto (8), tertius (8), cerva (7).

**Words with the same form but different entries to watch:** bellum/bellus, sedes (noun)/sedeo, ut, qui, quo, quin, eo, natus, fundo.

## 9. Gaps and next steps

- **Comparative/superlative and adverb degrees are not in this file.** The exam asks for them (Γ1: `celeriter`, `viliōrem`, `clari`, `aperte`, `certissimum`). The superlative is introduced in lesson XIX and the rest of the degrees later; see `research/morphology.md` for the rules. The app should compute degrees from the adjective forms here.
- **Etymology** is only linked for the 135 entries in the official list. The exam's Β2 can also use words outside that list; the textbook's lesson footnotes (`Ετυμολογικά:`) give Latin-Latin relatives, not Greek ones, so more Greek derivatives would have to be written and checked by a person who knows the field. I did not invent any.
- **Frequency** is weak evidence on a 4,260-token corpus. If the app wants a spaced-repetition order, use: `core` first, then lesson order, then `tier` 2.
- **Check against a printed paper** whether exams print glosses under the passages (section 3).
- **A human check** of the 9 flagged entries and a random 50-entry spot check against the printed book would be the next quality step. I read the whole list once for Latin correctness but I am not a substitute for a Latin teacher.

## 10. Sources

- Official exam scope 2027: https://www.minedu.gov.gr/publications/90176_%CE%942_06_07_26_%CE%95%CE%9E%CE%95%CE%A4%CE%91%CE%A3%CE%A4%CE%95%CE%91_%CE%A5%CE%9B%CE%97_2027.pdf (also https://alfavita.gr/sites/default/files/2026-07/90176_%CE%942_06_07_26_%CE%95%CE%9E%CE%95%CE%A4%CE%91%CE%A3%CE%A4%CE%95%CE%91_%CE%A5%CE%9B%CE%97_2027.pdf)
- Same ΥΑ for Α΄, Β΄, Γ΄ ΓΕΛ 2026-27 (Β΄ Λυκείου Latin = lessons I-XV): https://filologikos-istotopos.gr/wp-content/uploads/2026/07/yli-%CE%91_%CE%92_%CE%93__%CE%93%CE%95%CE%9B_%CE%A4%CE%A1%CE%91%CE%A0_%CE%98%CE%95%CE%9C_2026_27.pdf
- Textbook Τεύχος Β΄ (lessons XXI-L, glossary, index): https://ebooks.edu.gr/ebooks/v/pdf/8547/2538/22-0165-02_Latinika_G-Lykeiou-Epilogis_Vivlio-Mathiti-T2/ ; interactive: https://ebooks.edu.gr/ebooks/v/html/8547/2708/Latinika-B_G-Lykeiou-AnthrSp_html-empl/ ; record: https://ebooks.edu.gr/ebooks/handle/8547/2400
- Textbook Τεύχος Α΄ (lessons I-XX), accessible edition: https://prosvasimo.iep.edu.gr/Books/Eidikh-Agwgh-PI/books/c_likeiou/l_c_arial-18b/l_c_latinika_18b/ (two PDFs: `l_c_latinika a_bm_1-148_18b.pdf` and `l_c_latinika a_ 149-214_18b.pdf`); interactive: https://ebooks.edu.gr/ebooks/v/html/8547/2706/Latinika-A_G-Lykeiou-AnthrSp_html-empl/index01.htm
- Older scope (2021-22, confirms XVI-L): https://Stadiodromia.gr/enhmer2sh/20_21/latinika_1.pdf
- Curriculum (Πρόγραμμα Σπουδών 2021): https://lb2.ebooks.edu.gr/ebooks/d/8547/5480/FEK-2021_Latinika_G_Lykeiou_Programma-Spoudon.pdf
- Past papers 2022-2026 (official PDFs, via the sibling research): https://alfavita.gr/sites/default/files/2022-06/LATINIKA_OP_HM_2022_15.pdf , https://alfavita.gr/sites/default/files/2023-06/LATINIKA_OP_HM_2023_07.pdf , https://alfavita.gr/sites/default/files/2024-06/them_latin_gel_240606.pdf , https://alfavita.gr/sites/default/files/2025-06/them_latin_gel_250604.pdf , https://img.cnngreece.gr/attachments/2026/06/05/1780643542631-447375140-them_latin_gel_260605.pdf
- Official etymology list 2026-27: section IV 'Ενδεικτικές ετυμολογικές συσχετίσεις' of the official 2026-27 teaching guidelines, as saved by the sibling research in `research/source-data/official-teaching-guidelines-2026-27.txt` and `research/official-2026-27-etymology-by-lesson.txt` (I did not fetch the original URL myself)
- Study-guide sample used only to see how the glossary is presented: https://a.scdn.gr/ds/product_guides/61561/20250807171154_85bd61e0.pdf
