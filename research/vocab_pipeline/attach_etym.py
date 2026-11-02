import json,re,unicodedata,collections
def plain(s):
    s=unicodedata.normalize('NFD',s); return ''.join(c for c in s if unicodedata.category(c)!='Mn').lower()
rows=[json.loads(l) for l in open('vocab.jsonl')]
ent=json.load(open('etym_official.json'))
ALIAS={'muri':'murus','milia/mille':'mille','honor/s':'honos','intelligo/intellego':'intellego','intelligo':'intellego'}
idx=collections.defaultdict(list)
for i,r in enumerate(rows):
    keys={plain(r['lemma']).split(' (')[0].split(',')[0].strip()}
    keys.add(plain(r['forms'] or '').split(',')[0].split(' ')[0].strip())
    for k in keys: idx[k].append(i)
unm=[]; matched=0
for e in ent:
    k=plain(e['latin']).strip(); k=ALIAS.get(k,k)
    k1=k.split()[0] if k else k
    cand=idx.get(k) or idx.get(k1) or []
    if not cand:
        for alt in (k.replace('ae','e'),k+'o'):
            cand=idx.get(alt,[])
            if cand: break
    if not cand: unm.append(dict(lesson=e['lesson'],latin=e['latin'],meaning_el=e['meaning_el'],derivatives_el=e['derivatives_el'])); continue
    matched+=1
    for i in cand:
        rows[i].setdefault('etym_official_2026_27',[]).append(dict(lesson=e['lesson'],meaning_el=e['meaning_el'],derivatives_el=e['derivatives_el'],starred=e['starred']))
with open('vocab.jsonl','w',encoding='utf8') as f:
    for r in rows: f.write(json.dumps(r,ensure_ascii=False)+'\n')
json.dump(unm,open('etym_unmatched.json','w'),ensure_ascii=False)
print('matched',matched,'unmatched',unm and [u['latin'] for u in unm],'entries with etym',sum(1 for r in rows if 'etym_official_2026_27' in r))
