import re, json, unicodedata
lines=open('tB.txt',encoding='utf8').read().split('\n')
start=next(i for i,l in enumerate(lines) if l.strip()=='ΛΕΞΙΛΟΓΙΟ' and i>5700 and lines[i+1].startswith('(Οι αριθμοί'))
end=next(i for i,l in enumerate(lines) if l.startswith('ΕΥΡΕΤΗΡΙΟ') and i>start)
p168=max(i for i,l in enumerate(lines[:start]) if l.startswith('=====PAGE 168'))
seg=[l for i,l in enumerate(lines[p168:end],p168) if not (start<=i<start+4)]
out=[]
skip_next_num=False
for l in seg:
    if l.startswith('====='):
        skip_next_num=True; continue
    if skip_next_num and re.fullmatch(r'\s*\d{1,3}\s*',l):
        skip_next_num=False; continue
    skip_next_num=False
    l=l.replace('­','').rstrip()
    if not l.strip(): continue
    out.append(l.strip())
GR=re.compile(r'[Ͱ-Ͽἀ-῿]')
LAT=re.compile(r'^[A-Za-zĀ-ſḀ-ỿ]')
entries=[]; cur=''
def flush():
    global cur
    if cur.strip(): entries.append(cur.strip())
    cur=''
for l in out:
    if cur and LAT.match(l) and (GR.search(cur) or '=' in cur):
        flush(); cur=l
    else:
        if cur:
            # dehyphenate greek split
            if re.search(r'[Ͱ-Ͽἀ-῿]-$',cur) and not l.startswith('-'):
                cur=cur[:-1]+l
            else: cur=cur+' '+l
        else: cur=l
flush()
MERGE=re.compile(r'^(bonus\)|parvus\)|superus\)|die |aliquem |afficio θαν|Agrippa$|Aemilius βλ|Atilius βλ)')
ent2=[]
for e in entries:
    if ent2 and MERGE.match(e): ent2[-1]=ent2[-1]+' '+e
    else: ent2.append(e)
entries=ent2
json.dump(entries,open('gloss_raw.json','w',encoding='utf8'),ensure_ascii=False,indent=0)
print(len(entries))
for e in entries[:40]: print(e)
