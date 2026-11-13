import re, json, unicodedata
R='/Users/ionpetro/Documents/learning-apps/latin-panhellenic/research/'
def norm(s):
    s=unicodedata.normalize('NFD',s); return ''.join(c for c in s if unicodedata.category(c)!='Mn').lower()
lines=open(R+'official-2026-27-etymology-by-lesson.txt',encoding='utf8').read().split('\n')
ent=[]; lesson=None; cur=None
HEAD=re.compile(r'^\*?\s*[\(A-Za-zāēīōū][^:–]{0,60}:\s')
for l in lines:
    l=l.rstrip()
    m=re.match(r'^Μάθημα\s+(\d+)',l)
    if m: lesson=int(m.group(1)); cur=None; continue
    if not l.strip(): continue
    if HEAD.match(l) and lesson:
        star=l.startswith('*')
        h,rest=l.lstrip('* ').split(':',1)
        cur=dict(lesson=lesson,latin_raw=h.strip(),starred=star,text=rest.strip()); ent.append(cur)
    elif cur: cur['text']+=' '+l.strip()
for e in ent:
    parts=re.split(r'––|–',e['text'],maxsplit=1)
    e['meaning_el']=parts[0].strip(); e['derivatives_el']=parts[1].strip() if len(parts)>1 else ''
    h=e['latin_raw']
    e['sup']=re.search(r'σουπίνο:?\s*(\w+)',h).group(1) if re.search(r'σουπίνο:?\s*(\w+)',h) else None
    h2=re.sub(r'\([^)]*(σουπίνο|γεν)[^)]*\)','',h)
    h2=h2.replace('(','').replace(')','')
    e['latin']=re.sub(r'\s+',' ',h2).strip()
json.dump(ent,open('etym_official.json','w'),ensure_ascii=False,indent=0)
print(len(ent)); print(ent[:3]); print(sorted({e['lesson'] for e in ent}))
