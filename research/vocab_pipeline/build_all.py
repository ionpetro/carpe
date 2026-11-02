import re, json, unicodedata, collections, sys
sys.path.insert(0,'.')
from lib_verbs import norm, parse_verb, expand_parts, fixlook
rows=json.load(open('rows3.json',encoding='utf8'))
def plain(s):
    s=unicodedata.normalize('NFD',s)
    return ''.join(c for c in s if unicodedata.category(c)!='Mn')
def nb(s): return s.replace('ĕ','e').replace('ă','a').replace('ĭ','i').replace('ŏ','o').replace('ŭ','u')
HEAD_FIX={
 'prorumpro, -rūpi, -ruptum, -rumpĕre, 3':'prorumpo, -rūpi, -ruptum, -rumpĕre, 3',
 'circumdo, -dĕdi, -dătum, -dăre, l':'circumdo, -dĕdi, -dătum, -dăre, 1',
 'militāris -ris -e':'militāris -is -e',
 'prorēpo, -repsi, -reptum, - repĕre, 3':'prorēpo, -repsi, -reptum, -repĕre, 3',
 'consequor, -secūtus sum, -sĕqui αποθ. 3':'consequor, -secūtus sum, -sĕqui, αποθ. 3',
 'experior, -pertus sum, -perīri αποθ. 4':'experior, -pertus sum, -perīri, αποθ. 4',
 'primus -a um':'primus -a -um',
}
VERB_MAN={
 'adsum':(['adsum','adfui','adesse'],'irreg','act'),
 'praesum':(['praesum','praefui','praeesse'],'irreg','act'),
 'aperio':(['aperio','aperui','apertum','aperīre'],4,'act'),
 'bibo':(['bibo','bibi','—','bibĕre'],3,'act'),
 'consequor':(['consequor','consecūtus sum','consĕqui'],3,'dep'),
 'experior':(['experior','expertus sum','experīri'],4,'dep'),
 'prorēpo':(['prorēpo','prorepsi','proreptum','prorepĕre'],3,'act'),
 'affero':(['affero','attuli','allātum','afferre'],'irreg','act'),
 'confero':(['confero','contuli','collātum','conferre'],'irreg','act'),
 'defero':(['defero','detuli','delātum','deferre'],'irreg','act'),
 'refero':(['refero','rettuli','relātum','referre'],'irreg','act'),
 'transfero':(['transfero','transtuli','translātum','transferre'],'irreg','act'),
 'offero':(['offero','obtuli','oblātum','offerre'],'irreg','act'),
}
GENDER={'αρσ':'m','θηλ':'f','θ':'f','ουδ':'n'}
def gender_from(h):
    m=re.search(r'\(([^)]*?(?:αρσ|θηλ|(?<!πλη)θ\.|ουδ)[^)]*)\)',h)
    if not m: return None
    t=m.group(1)
    if 'και' in t: return 'c'
    for k,v in (('αρσ','m'),('θηλ','f'),('ουδ','n')):
        if k in t: return v
    if re.search(r'(?<!πλη)θ\.',t): return 'f'
def reg_verb(lemma,conj,voice):
    L=lemma
    if voice=='dep':
        if conj==1: return [L,L[:-2]+'ātus sum',L[:-2]+'āri']
        if conj==4: return [L,L[:-2]+'ītus sum',L[:-2]+'īri']
        return [L]
    if conj==1: return [L,L[:-1]+'āvi',L[:-1]+'ātum',L[:-1]+'āre']
    if conj==4: return [L,L[:-2]+'īvi',L[:-2]+'ītum',L[:-2]+'īre']
    if conj==2 and L.endswith('leo'): return [L,L[:-2]+'ēvi',L[:-2]+'ētum',L[:-2]+'ēre']
    return [L]
def lemma_clean(l):
    l=fixlook(l)
    l=re.sub(r'\(([a-z]+)\)',r'\1',l)  # a(d)gnosco -> adgnosco
    return l
GEN_SIMPLE={'-ae':('a','ae'),'-i':None,'-ii':None,'-ii(i)':None}
def gen_from(lemma,suf):
    s=fixlook(suf.strip()).replace('ii(i)','ii').replace('(','').replace(')','')
    L=lemma
    if s=='-ae': return L[:-1]+'ae' if L.endswith('a') else None
    if s in ('-i','-ii'):
        if s=='-ii':
            for e in ('ius','ium'):
                if L.endswith(e): return L[:-3]+'ii'
            return None
        for e in ('us','um'):
            if L.endswith(e): return L[:-2]+'i'
        if L.endswith('er') or L.endswith('ir'): return L+'i' if False else L+'i'
        return None
    if s in ('-us','-ūs'):
        if L.endswith('us'): return L[:-2]+'ūs'
        if L.endswith('u'): return L[:-1]+'ūs'
        return None
    if s in ('-ei','-ēi','-ĕi'):
        if L.endswith('es'): return L[:-2]+s[1:]
        return None
    if s in ('-ōrum','-ārum','-ium','-um'): return None
    ss=s[1:]
    n=norm(L); ns=norm(ss)
    for k in range(min(len(n),len(ns)),0,-1):
        if n[-k:]==ns[:k]: return L[:-k]+ss
    if ns[0] not in 'aeiou':
        p=n.rfind(ns[0])
        if p>=0 and p<len(n)-0: return L[:p]+ss
    if n.endswith('ens') and ns.startswith('ent'): return L[:-3]+ss
    if n.endswith(('eps','ops')) and ns[0] in 'aeiou': return L[:-3]+ss
    if L.endswith('o'): return L[:-1]+ss
    for e in ('us','ur','er','ar','ut','es','en','ex','ix','ox','or','as','os','ap','ut','ax','ux','ex'):
        if n.endswith(e) and ns[0] in 'aeiou' : return L[:-2]+ss
    if ns[0] not in 'aeiou': return L[:-1]+ss
    return L+ss
def noun(r):
    h=r['head']; hp=h
    g=gender_from(h)
    pl_only=('μόνο πληθ' in h) or ('μόνον πληθ' in h)
    hb=re.sub(r'\([^)]*\)','',h).strip()
    m=re.match(r'^([^\s,]+)\s*,?\s*(.*)$',hb)
    lemma=lemma_clean(m.group(1)).rstrip(','); rest=m.group(2).strip(' ,')
    gen=None
    if rest:
        tok=rest.split()[0].strip(',')
        if tok.startswith('-'): gen=gen_from(lemma,tok)
        else: gen=tok
        if gen is None and tok.startswith('-'): gen=tok  # leave abbreviated
    return lemma,gen,g,pl_only
res=[]
for r in rows:
    h=HEAD_FIX.get(r['head'].strip(),r['head'].strip()); r['head']=h
    k=r['kind']; E={}
    E['senses']=r['senses']; E['raw']=r['raw']; E['head']=h
    # lessons
    txt=[];oth=[]
    for tok in r['refraw']:
        n=int(re.match(r'\d+',tok).group(0))
        suf=tok[len(str(n)):].strip()
        (txt if suf=='' else oth).append((n,suf))
    E['lessons_text']=sorted({n for n,s in txt}); E['lessons_other']=sorted({f"{n}{s}" for n,s in oth}, key=lambda x:int(re.match(r'\d+',x).group(0)))
    E['lessons']=sorted({n for n,s in txt}|{n for n,s in oth})
    if k=='verb':
        pv=parse_verb(h)
        lem=lemma_clean(pv['parts'][0]); lp=plain(nb(lem)).lower()
        if lp in VERB_MAN:
            parts,conj,voice=VERB_MAN[lp]; ok=True
        else:
            parts,ok=expand_parts(pv); conj=pv['conj']; voice=pv['voice']
            if len(parts)==1 and conj in (1,2,4) and not pv['defect']:
                p2=reg_verb(parts[0],conj,voice)
                if len(p2)>1: parts=p2; ok=True
        parts=[lemma_clean(p) for p in parts]
        E.update(pos='verb',lemma=lem,forms=', '.join(parts),conj=conj,voice=voice,io=pv['io'],defect=pv['defect'],variants=pv['variants'],forms_ok=ok,parts=parts)
    elif k=='adj':
        hb=re.sub(r'\([^)]*\)','',h).strip()
        E.update(pos='adj',lemma=lemma_clean(hb.split()[0].strip(',')),forms=hb)
    elif k=='noun':
        lem,gen,g,pl=noun(r)
        E.update(pos='noun',lemma=lem,gen=gen,gender=g,plonly=pl)
    else:
        E.update(pos=k,lemma=lemma_clean(re.sub(r'\([^)]*\)','',h).strip().split(',')[0]))
    res.append(E)
json.dump(res,open('stage2.json','w'),ensure_ascii=False,indent=0)
c=collections.Counter(e['pos'] for e in res); print(c)
print('verbs not ok:',[e['head'] for e in res if e['pos']=='verb' and not e['forms_ok'] and e['conj'] in (1,2,3,4) and len(e['parts'])==1][:60])
