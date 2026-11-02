import re, json, unicodedata
E0=json.load(open('gloss_raw.json',encoding='utf8'))
E=[]
for e in E0:
    if e.startswith('quattuor (αριθμ.)'):
        E+=['quattuor (αριθμ.) = τέσσερις 7','que (σύνδ. συμπλεκτ.) = και 5']; continue
    if e.startswith('nē (σύνδ. τελ.)'):
        E+=['nē (σύνδ. τελ.) = για να μη 36','ne (εγκλιτ. ερωτ. μόριο) = μήπως (ή δε μεταφράζεται) 24,43,44']; continue
    if e.startswith('spes -ei'):
        E+=['spes -ei = ελπίδα 12']; continue
    if e.startswith('possum, potui'):
        E+=['possum, potui, posse = μπορώ 6,13']; continue
    if e.startswith('filius -ii'):
        E+=['filius -ii = γιος 10,2Π']; continue
    E.append(e)
GRc=r'Ͱ-Ͽἀ-῿'
GRW=re.compile(r'[%s]+'%GRc)
LABELS={'αποθ','ημιαπ','ελλειπτ','αρσ','θηλ','ουδ','αντ','και','εν','μόνο','πληθ','ρήμ','αόρ','επιθ','ουσ','κτητ','δεικτ','αορ'}
def split(e):
    # find '=' at depth0 first
    depth=0
    for i,ch in enumerate(e):
        if ch=='(':depth+=1
        elif ch==')':depth=max(0,depth-1)
        elif ch=='=' and depth==0:
            return e[:i].strip(), e[i+1:].strip()
    depth=0
    i=0
    while i<len(e):
        ch=e[i]
        if ch=='(':depth+=1
        elif ch==')':depth=max(0,depth-1)
        elif depth==0:
            m=GRW.match(e,i)
            if m:
                w=m.group(0)
                if w in LABELS or (i+len(w)<len(e) and e[i+len(w)]=='.' and w in LABELS):
                    i+=len(w); continue
                return e[:i].strip(), e[i:].strip()
        i+=1
    return e.strip(),''
REF=re.compile(r'(?<![\w\d])(\d{1,2})\s*([ΠΑΕΕAE])?(?![\w\d])')
def refs(m):
    out=[];raw=[]
    for x in REF.finditer(m):
        n=int(x.group(1))
        if 1<=n<=50:
            out.append(n); raw.append(x.group(0).replace(' ',''))
    return sorted(set(out)),raw
res=[]
for e in E:
    h,m=split(e)
    r,raw=refs(m)
    res.append(dict(raw=e,head=h,meaning=m,lessons=r,refraw=raw))
json.dump(res,open('gloss_struct.json','w',encoding='utf8'),ensure_ascii=False,indent=0)
import collections
print(sum(1 for x in res if not x['meaning']),'no meaning')
for x in res[:0]: print(x)
