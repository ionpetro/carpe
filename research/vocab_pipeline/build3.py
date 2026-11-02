import re, json, unicodedata, collections
R=json.load(open('gloss_struct.json',encoding='utf8'))
def norm(s):
    s=unicodedata.normalize('NFD',s)
    return ''.join(c for c in s if unicodedata.category(c)!='Mn').lower()
REFRX=re.compile(r'(?<![\w])\d{1,2}\s*[ΠΑΕE]?(?:\s*,\s*\d{1,2}\s*[ΠΑΕE]?)*(?![\w])')
def clean_meaning(m):
    m=REFRX.sub('',m); m=re.sub(r'\s+',' ',m)
    return [s.strip(' ,;·\u0387=') for s in re.split('[·\u0387]',m) if s.strip(' ,;·\u0387=')]
ADJ=re.compile(r'-a -um|-a, -um|-is -e\b|-era -erum|-gra -grum|-tra -trum|-cris -cre|-stris -stre|-eris -ere|-ris -re\b|-a -ud|-ae -a|-a um')
G=re.compile(r'\((αρσ|θηλ|ουδ|θ\.|αρ\.)')
NOUN=re.compile(r'^[^\s,(]+(?:\s*\([^)]*\))?\s*-(i|ae|ii|ii\(i\)|us|ei|ēi|ĕi|ōrum|ārum|ium|um|ūs|ēi|ei)\b')
def strip_paren(h): return re.sub(r'\([^)]*\)','',h)
def kind(h):
    hp=strip_paren(h)
    if h[0].isupper(): return 'proper'
    if 'επίρρ' in h: return 'adv'
    if '(πρόθ' in h or 'πρόθ.' in h: return 'prep'
    if '(σύνδ' in h or 'σύνδ.' in h: return 'conj'
    if '(αντ' in h or 'αντ. ' in h: return 'pron'
    if '(αριθμ' in h or 'αριθμ.' in h: return 'num'
    if 'επιφ' in h: return 'interj'
    if 'μόριο' in h: return 'particle'
    if 'αποθ' in h or 'ημιαπ' in h or 'ελλειπτ' in h or 'απρόσ' in h: return 'verb'
    if re.search(r'(?<![\w\d(-])[1-4l]\*?\s*$',hp.strip()): return 'verb'
    parts=[p.strip() for p in hp.split(',')]
    if len(parts)>=3 and re.search(r'(re|ri|esse|ī|i)$',parts[-1]) and not ADJ.search(hp): return 'verb'
    if len(parts)==2 and re.search(r'(esse|[^r]re|velle|nolle|malle|fieri)$',parts[-1].strip()) : return 'verb'
    if ADJ.search(h): return 'adj'
    if G.search(h) or NOUN.match(h): return 'noun'
    return 'other'
rows=[]
for x in R:
    h=x['head']; m=x['meaning']
    if m.startswith('βλ.') or m=='': continue
    k=kind(h)
    rows.append(dict(raw=x['raw'],head=h.strip(),kind=k,senses=clean_meaning(m),lessons=x['lessons'],refraw=x['refraw'],meaning_raw=m))
json.dump(rows,open('rows3.json','w'),ensure_ascii=False,indent=0)
print(collections.Counter(r['kind'] for r in rows))
for r in rows:
    if r['kind']=='verb': 
        pass
