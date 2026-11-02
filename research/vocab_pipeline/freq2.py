import re, json, unicodedata, collections, sys
sys.path.insert(0,'.')
from forms_gen import *
exec(open('freq.py').read().split("SUM={")[0].split("M=json.load")[0])  # imports/defs
M=json.load(open('stage5.json',encoding='utf8'))
src=open('freq.py').read()
a=src.index("def toks(text):"); b=src.index("SUM={")
exec(src[a:b].replace("lesson_tokens=","lesson_tokens=") if False else src[a:b].split("lesson_tokens=")[0])
corp=json.load(open('corpus.json',encoding='utf8')); exam=json.load(open('exam_passages.json',encoding='utf8'))
lesson_tokens={int(k):toks(' '.join(v)) for k,v in corp.items()}
exam_tokens={int(y):toks(t) for y,t in exam.items()}
exec("EXACT="+src.split("EXACT=")[1].split("\ndef exact_set")[0].replace("SUM","SUMSET")) if False else None
# reuse EXACT and SUM from freq.py text
ns={}
exec("import re\n"+src[src.index("SUM={"):src.index("def exact_set")],ns)
EXACT=ns['EXACT']
def pron_forms(r):
    h=unicodedata.normalize('NFC',r['head'])
    L=N(r['lemma']).split()[0]
    F={L}
    if re.search(r'-a -um|-era -erum|-tra -trum|-stra -strum|-a -ud',h):
        if '-a -ud' in h: base=L[:-2]; F|={base+e for e in ('us','a','ud','i','ae','o','am','um','os','as','orum','arum','is','ius')}
        elif L.endswith('us'): base=L[:-2]; F|={base+e for e in ('us','a','um','i','ae','o','am','os','as','orum','arum','is','ius','e')}
        elif L.endswith(('ter','er')):
            m=re.search(r'-(\w+)a',h); 
            fem=N(re.search(r'-(\w+) -',h).group(1)) if re.search(r'-(\w+) -',h) else ''
            base=L[:-2]+fem[:-1] if False else None
            stemr=L[:-2]+'r' if L.endswith('er') and not L.endswith(('ter','ster')) else L
            if L.endswith('ter') or L.endswith('ster'):
                b2=L[:-2]+'r'   # uter -> utr
            else: b2=L
            F|={b2+e for e in ('a','um','i','ae','o','am','os','as','orum','arum','is','ius')}|{L[:-2]+'er'+e for e in ('a',)}
            if L=='alter': F|={'altera','alterum','alterius','alteri','altero','alteram','alteros','alteras','alterorum','alterarum','alteris'}
            if L in ('noster','vester'): 
                b2=L[:-2]+'r'; F|={b2+e for e in ('a','um','i','ae','o','am','os','as','orum','arum','is')}
    if L=='aliquis': F|={'aliquis','aliquid','aliqui','aliqua','aliquod','aliquem','aliquam','alicuius','alicui','aliquo','aliquos','aliquas','aliquibus','aliquorum'}
    if L=='quis': F|={'quis','quid','quem','quam','cuius','cui','quo'}
    if L=='quicumque': F|={'quicumque','quaecumque','quodcumque','quemcumque','quamcumque'}
    if L=='uterque': F|={'uterque','utraque','utrumque','utriusque','utrique','utrumque','utramque','utrosque'}
    if L=='unusquisque' or L=='unusquique': F|={'unusquisque','unaquaeque','unumquidque','unumquodque','uniuscuiusque','cuiusque','cuique'}
    if L=='aliquot': F|={'aliquot'}
    if L=='se': F|=EXACT['se']
    if L=='tu': F|=EXACT['tu']
    if L=='nemo': F|={'nemo','neminem','nemini','nullius','nullo'}
    if L=='nihil': F|={'nihil','nihilo','nihili'}
    if L=='quidam': F|={'quidam','quaedam','quiddam','quoddam','quendam','quandam','cuiusdam','cuidam','quodam','quadam','quosdam','quasdam','quorundam','quibusdam'}
    if L=='quisquam': F|={'quisquam','quaequam','quidquam','quicquam','quemquam','cuiquam','quoquam'}
    return F
def gen_set(r):
    pos=r['pos']; L=N(r['lemma']).split(' (')[0].split(',')[0].strip()
    key=L.split()[0] if L else ''
    if key in EXACT and key!='edo' and pos in ('pron','verb','noun','adv','prep','conj'):
        # only for the matching lemma (avoid 'a' for noun 'a')
        if pos=='verb' and key in ('sum','possum','volo','nolo','malo','fero','eo','fio','do','sto'): return set(EXACT[key])|verb_forms_set(r['forms'],r.get('decl_or_conj'),r.get('voice')) if key in ('do','sto') else set(EXACT[key])
        if pos!='verb': return set(EXACT[key])
    if pos=='noun': return noun_forms(r['lemma'],r.get('gen'),r.get('decl_or_conj'),r.get('plonly'))
    if pos=='adj': return adj_forms_set(r['forms'])
    if pos=='verb': return verb_forms_set(r['forms'],r.get('decl_or_conj'),r.get('voice'))
    if pos=='pron': return pron_forms(r)
    F=set()
    txt=re.sub(r'\([^)]*\)','',r.get('forms') or r['lemma'])
    for w in re.split(r'[,/ ]+',N(txt)):
        w=w.strip('!.')
        if w and w not in ('ut','…') or (w=='ut' and key=='ut'): F.add(w)
    F.add(key)
    if pos=='num': F|={key}
    return F
for r in M:
    F=gen_set(r)
    if r['pos']=='phrase':
        words=[w for w in re.split(r'\W+',N(r['lemma'])) if len(w)>2]
        r['_phrase_words']=words
    cnt=0; per=[]
    for ln,tk in lesson_tokens.items():
        c=sum(1 for t in tk if t in F)
        if c: per.append(ln); cnt+=c
    if r['pos']=='phrase': cnt=None; per=[]
    r['freq_text']=cnt; r['lessons_in_texts']=sorted(per)
    r['exam_years']=[] if r['pos']=='phrase' else sorted(y for y,tk in exam_tokens.items() if any(t in F for t in tk))
    r['exam_hits']=0 if r['pos']=='phrase' else sum(1 for y,tk in exam_tokens.items() for t in tk if t in F)
    r['n_forms']=len(F)
json.dump(M,open('stage6.json','w'),ensure_ascii=False,indent=0)
top=sorted([r for r in M if r['freq_text'] is not None],key=lambda r:-r['freq_text'])[:70]
print([(r['lemma'],r['freq_text'],len(r['lessons_in_texts'])) for r in top])
print(sum(1 for r in M if (r['freq_text'] or 0)>0),'of',len(M),'seen in corpus')
