import re, json
GR=re.compile(r'[Ͱ-Ͽἀ-῿]')
def lat_ratio(l):
    letters=[c for c in l if c.isalpha()]
    if not letters: return 0
    g=sum(1 for c in letters if GR.match(c))
    return 1-g/len(letters)
def extract(path, heads):
    lines=open(path,encoding='utf8').read().split('\n')
    idx=[]
    for i,l in enumerate(lines):
        m=re.match(r'^\s*ΜΑΘΗΜΑ\s+([IVXLΧΙΤ]+|1)\b',l) or (re.match(r'^\s*(LECTIO UNDEQUINQUAGESIMA)',l) and re.match('(XLIX)','XLIX'))
        if m: idx.append((i,m.group(1)))
    return lines,idx
def roman(s):
    if s=='1': return 1
    s=s.replace('Χ','X').replace('Ι','I').replace('Ν','N').replace('Ο','O').replace('Α','A').replace('Τ','T').replace('Ε','E')
    vals={'I':1,'V':5,'X':10,'L':50}
    t=0
    for i,c in enumerate(s):
        v=vals.get(c,0)
        if i+1<len(s) and vals.get(s[i+1],0)>v: t-=v
        else: t+=v
    return t
corp={}
for path in ['tA1.txt','tB.txt']:
    lines,idx=extract(path,None)
    for k,(i,r) in enumerate(idx):
        n=roman(r)
        if not 1<=n<=50: continue
        j=idx[k+1][0] if k+1<len(idx) else len(lines)
        seg=lines[i:j]
        # find vocab header
        vi=next((t for t,l in enumerate(seg) if l.strip().startswith('ΛΕΞΙΛΟΓΙΟ') or l.strip().startswith('ΑΤΟΚΕΙΜΕΝΟ') and False),None)
        if vi is None: vi=min(len(seg),80)
        text=[l for l in seg[:vi] if lat_ratio(l)>0.9 and len([c for c in l if c.isalpha()])>12 and not l.startswith('=====')]
        if n in corp and len(' '.join(text))<len(' '.join(corp[n])): continue
        corp[n]=text
for n in sorted(corp): print(n,len(corp[n]),len(' '.join(corp[n]).split()))
json.dump({str(n):corp[n] for n in corp},open('corpus.json','w',encoding='utf8'),ensure_ascii=False)
