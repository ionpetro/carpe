import re, json, unicodedata, collections, sys

def norm(s):
    s=unicodedata.normalize('NFD',s)
    return ''.join(c for c in s if unicodedata.category(c)!='Mn').lower()
def fixlook(s): return s.replace('ο','o').replace('Ο','O')
def strip_inf(s):
    s=norm(s)
    for e in ('ere','are','ire','eri','ari','iri'):
        if s.endswith(e): return s[:-len(e)]
    if s.endswith('re'): return s[:-2]
    if s.endswith('i'): return s[:-1]
    return s
def prefix_for(lemma,inf):
    L=norm(lemma)
    st=strip_inf(inf.lstrip('-'))
    if st in ('','es'):
        for end in ('eo','sum'):
            if L.endswith(end): return lemma[:len(lemma)-len(end)]
        return None
    pos=L.rfind(st)
    if pos<0: return None
    return lemma[:pos]
def parse_verb(head):
    h0=head
    voice='act'
    if 'ημιαπ' in h0: voice='semi'
    elif 'αποθ' in h0: voice='dep'
    defect = any(w in h0 for w in ('ελλειπτ','απρόσ','γ΄ πρόσ'))
    h0=re.sub(r'(?<=\w)\(([a-z]+)\)(?=\w)',r'\1',h0)
    h=re.sub(r'\s+',' ',h0)
    variants=re.findall(r'\(([^)]*)\)',h)
    blank=lambda mm:' '*len(mm.group(0))
    hb=re.sub(r'\([^)]*\)',blank,h)
    ds=list(re.finditer(r'(?<![\w\d-])([1-4l])(\*?)(?![\w\d])',hb))
    conj=None; io=False
    if ds:
        d=ds[-1]; conj=1 if d.group(1)=='l' else int(d.group(1)); io=d.group(2)=='*'
    core=re.sub(r'(ημιαποθ\.?|ημιαπ\.?|αποθ\.?|ρήμ\.|ελλειπτ\.|απαρ\.|απρόσ\.|γ΄ πρόσ\.|\+\s*[^,]*)',blank,hb)
    if ds:
        core=core[:ds[-1].start()]+' '+core[ds[-1].end():]
    parts=[p.strip() for p in core.split(',') if p.strip()]
    parts=[fixlook(p.replace('*','')) for p in parts]
    if not parts: return None
    # lemma may carry variants in parentheses in original; keep first token
    lemma=parts[0]
    # reinsert parenthetical variants for lemma e.g. 'affero (adfero)'
    return dict(lemma=lemma,parts=parts,conj=conj,io=io,voice=voice,defect=defect,variants=variants)
def expand_parts(pv):
    parts=pv['parts']; lemma=parts[0]
    if len(parts)==1: return parts, False
    inf=None
    for p in reversed(parts[1:]):
        if re.search(r'(re|ri|i|esse)$',norm(p)) and not p.endswith('sum'): inf=p;break
    out=[lemma]; ok=True
    pre=None
    if any(p.startswith('-') for p in parts[1:]):
        pre=prefix_for(lemma,inf) if inf else None
        if pre is None:
            # try with simplex stem from lemma minus prefix guess
            ok=False
    for p in parts[1:]:
        if p.startswith('-'):
            if pre is not None:
                # handle variants like -īvi(abii)
                out.append(pre+p[1:])
            else:
                out.append(p); ok=False
        else:
            out.append(p)
    return out, ok
