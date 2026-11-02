import re, json, unicodedata, collections, sys
sys.path.insert(0,'.')
src=open('build_all.py').read().split("res=[]")[0]
exec(src)   # helpers: gen_from, noun, norm, plain, nb, fixlook, etc.
exec(open('stage3.py').read().split("OUT=[]")[0].split("res=json.load")[0])  # nothing
from lib_verbs import norm as _n
stage2=json.load(open('stage2.json',encoding='utf8'))
def adj_forms(head):
    hb=re.sub(r'\([^)]*\)','',head).strip()
    toks=hb.split(); L=fixlook(toks[0]); suf=toks[1:]; n=norm(L)
    def sub(x):
        x=x.strip(',')
        if not x.startswith('-'): return x
        ss=x[1:]; ns=norm(ss)
        for k in range(min(len(n),len(ns)),0,-1):
            if n[-k:]==ns[:k]: return L[:-k]+ss
        p=n.rfind(ns[0])
        if p>=0: return L[:p]+ss
        return L+ss
    if suf[:2] in (['-a','-um'],['-a,','-um']):
        stem=L[:-2] if L.endswith('us') else L
        return f"{L}, {stem}a, {stem}um"
    if suf[:2]==['-is','-e']: return f"{L}, {L[:-2]}e"
    if len(suf)==2 and all(x.startswith('-') for x in suf): return f"{L}, {sub(suf[0])}, {sub(suf[1])}"
    if len(suf)==1 and suf[0].startswith('-'): return f"{L}, {sub(suf[0])}"
    return hb

# ---- manual treatment of 'other' bucket, keyed by head ----
SKIP={'ac','accĭdit','fertur (γ΄ πρόσ.)','ipsum','positus sum (pono)','relinquitur','qui (επιθ. αόρ. αντ.)'}
NOTE_TO={'accĭdit':('accido','accĭdit = συμβαίνει'),'fertur (γ΄ πρόσ.)':('fero','fertur = λέγεται (γ΄ πρόσ. παθητικής)'),
 'ipsum':('ipse','ipsum (πρβ. se ipsum/me ipsum) = τον εαυτό μου'),'relinquitur':('relinquo','relinquitur = υπολείπεται (απρόσ.)'),
 'positus sum (pono)':('pono','positus sum = είμαι τοποθετημένος, βρίσκομαι (παθ. παρακείμενος του pono)'),
 'ac':('atque','ac = atque'),'qui (επιθ. αόρ. αντ.)':('aliquis','qui, qua/quae, quod (επιθ. αόρ.) = κάποιος (π.χ. si qui)')}
NOUNS_OTHER={ # head -> gender
 'aequitas -ātis':'f','aetas -ātis':'f','ager -gri':'m','aper, apri':'m','calcar -āris':'n','canis -is':'c','certāmen -inis':'n','cogitatio -ōnis':'f',
 'cōpo -ōnis (= caupo -ōnis)':'m','elephas -ntis (elephantus -i)':'m','ex(s)ilium -ii(i)':'n','insidiātor -ōris':'m','lĭber -bri':'m','magister -stri':'m','minister -tri':'m',
 'nauta':'m','nobilitas -ātis':'f','parens -ntis':'c','pravitas -ātis':'f','princeps -ipis':'m','puer -eri':'m','rumor -ōris':'m','socer -eri':'m','solitūdo -inis':'f',
 'speculātor -ōris':'m','venatio -ōnis':'f','veritas -ātis':'f','vir, viri':'m','voluntas -ātis':'f','res, rei':'f'}
ADJ_OTHER=['audax -ācis','congruens -entis','constans -ntis','dives -itis','excellens -ntis','fallax -ācis','felix -īcis','ferox -ōcis','impotens -ntis','impudens -entis','iner -rtis','infēlix -īcis','ingens -ntis','insolens -ntis','inops -opis (+ γεν.)','locuples -plētis','militāris -is -e','minax -ācis','par, paris','praeceps -cipitis','praecox -ŏcis','praesens -ntis','prudens -entis','pulcher -chra -chrum','recens -ntis','sacer -cra -crum','sapiens -ntis','dexter -tra -um','tristiculus']
MAN_FORMS={ # lemma -> special (forms, pos, decl/conj, gender, notes)
}
def mk(**k): return k
IRREG_VERB={
 'volo':('volo, volui, —, velle','irreg'),'nolo':('nolo, nolui, —, nolle','irreg'),'malo':('malo, malui, —, malle','irreg'),
 'possum':('possum, potui, —, posse','irreg'),'fero':('fero, tuli, lātum, ferre','irreg'),'fio':('fio, factus sum, fieri','irreg'),
 'sum':('sum, fui, —, esse','irreg'),'eo':('eo, ii (īvi), itum, īre','irreg'),'do':('do, dedi, dătum, dăre','1 (irreg.)'),
 'sto':('sto, steti, statum, stāre','1 (irreg.)'),'iuvo':('iuvo, iuvi, iutum, iuvāre','1 (irreg.)'),'lavo':('lavo, lavi, lautum (lavātum), lavāre','1 (irreg.)'),
 'poto':('poto, potāvi, potātum (potum), potāre','1'),
 'inquam':('inquam, inquis, inquit (ελλειπτικό· μόνο ορισμένοι τύποι)','defective'),
 'aio':('aio, ais, ait (ελλειπτικό· μόνο ορισμένοι τύποι)','defective'),
 'coepi':('coepi, coepisse, coeptum (ελλειπτικό)','defective'),
 'memini':('memini, meminisse (ελλειπτικό· παρακείμενος με σημασία ενεστώτα)','defective'),
 'odi':('odi, odisse (ελλειπτικό· παρακείμενος με σημασία ενεστώτα)','defective'),
 'sedeo':('sedeo, sedi, sessum, sedēre','2'),'scio':('scio, scīvi, scītum, scīre','4'),'videor':('videor, visus sum, vidēri','2 (pass.)'),
 'relinquo':('relinquo, relīqui, relictum, relinquĕre','3'),'revertor':('revertor, reverti (reversus sum), reverti','3 (semi-dep.)'),
 'fallor':('fallor, falsus sum, falli','3 (pass.)'),
 'abeo':('abeo, abii (abīvi), abitum, abīre','irreg (eo)'),'adeo':('adeo, adii (adīvi), aditum, adīre','irreg (eo)'),
 'exeo':('exeo, exii (exīvi), exitum, exīre','irreg (eo)'),'intereo':('intereo, interii (interīvi), interitum, interīre','irreg (eo)'),
 'pereo':('pereo, perii (perīvi), peritum, perīre','irreg (eo)'),'redeo':('redeo, redii (redīvi), reditum, redīre','irreg (eo)'),
 'transeo':('transeo, transii (transīvi), transitum, transīre','irreg (eo)'),
 'absum':('absum, afui, —, abesse','irreg (sum)'),'adsum':('adsum, adfui, —, adesse','irreg (sum)'),'praesum':('praesum, praefui, —, praeesse','irreg (sum)'),
 'interest':('interest, interfuit, interesse (απρόσωπο)','irreg (sum)'),
 'succurrit':('succurro, succurri, succursum, succurrĕre (απρόσ. succurrit)','3'),
 'occido':('occīdo, occīdi, occīsum, occīdĕre','3'),
 'praesumo':('praesūmo, praesumpsi, praesumptum, praesumĕre','3'),
 'deverto':('deverto, deverti, deversum, devertĕre (και devertor, ημιαποθετικό)','3'),
 'accido':('accĭdo, accĭdi, —, accidĕre','3'),
 'bibo':('bibo, bibi, —, bibĕre','3'),
 'refert':('refert, retulit, referre (απρόσωπο)','irreg'),
 'placet':('placet, placuit, placēre (απρόσωπο, από το placeo)','2'),
 'restat':('restat, restitit, restāre (απρόσωπο)','1'),
 'consequitur':('consequitur (απρόσωπο, από το consequor)','3'),
}
OUT=[]
dups=collections.defaultdict(list)
def add(r): OUT.append(r)
for e in stage2:
    pos=e['pos']; h=e['head']
    base=dict(head=h,senses=e['senses'],lessons=e['lessons'],lessons_text=e['lessons_text'],lessons_other=e['lessons_other'])
    if h in SKIP:
        continue
    if pos=='proper':
        continue
    if pos=='verb':
        lem=e['lemma']; lp=plain(nb(lem)).lower()
        forms=e['forms']; conj=e['conj']; decl=None
        voice=e['voice']
        if lp in ('revertor','fallor','videor'): voice={'revertor':'semi','fallor':'pass','videor':'pass'}[lp]
        if lp=='deverto': voice='act'
        if lp in IRREG_VERB: forms,decl=IRREG_VERB[lp]
        elif e['defect']: decl='impersonal/defective'
        else:
            decl=f"{conj}" + ('-io' if e['io'] else '') if conj else 'irreg'
            if voice=='dep': decl+=' (dep.)'
            elif voice=='semi': decl+=' (semi-dep.)'
        forms=forms.replace('—, —','—')
        add(dict(base,pos='verb',lemma=lem,forms=forms,voice=voice,decl_or_conj=decl,gender=None))
    elif pos=='noun':
        lem=e['lemma']; gen=e['gen']; g=e.get('gender'); pl=e.get('plonly')
        add(dict(base,pos='noun',lemma=lem,gen=gen,gender=g,plonly=pl))
    elif pos=='adj':
        add(dict(base,pos='adj',lemma=e['lemma'],forms=adj_forms(h),gender=None))
    elif pos=='other':
        if h in NOUNS_OTHER:
            hh=re.sub(r'\([^)]*\)','',h).strip()
            m=re.match(r'^([^\s,]+)\s*,?\s*(.*)$',hh)
            lem=lemma_clean(m.group(1)).rstrip(','); rest=m.group(2).strip(' ,')
            gen=None
            if rest:
                tok=rest.split()[0].strip(',')
                gen=gen_from(lem,tok) if tok.startswith('-') else tok
            if h=='nauta': gen='nautae'
            if h=='res, rei': gen='rei'
            add(dict(base,pos='noun',lemma=lem,gen=gen,gender=NOUNS_OTHER[h],plonly=False))
        elif h in ADJ_OTHER:
            add(dict(base,pos='adj',lemma=lemma_clean(h.split()[0].strip(',')),forms=adj_forms(h),gender=None))
        elif h.split(',')[0].split()[0] in ('malo','nolo','volo','possum'):
            lem=h.split(',')[0].split()[0]; f,d=IRREG_VERB[lem]
            add(dict(base,pos='verb',lemma=lem,forms=f,voice='act',decl_or_conj=d,gender=None))
        elif h=='animadverto, -verti, -versum, -vertĕre, 3 παρατηρώ 12· animadverto in aliquem':
            base['senses']=['παρατηρώ','animadverto in aliquem = τιμωρώ κάποιον']
            add(dict(base,pos='verb',lemma='animadverto',forms='animadverto, animadverti, animadversum, animadvertĕre',voice='act',decl_or_conj='3',gender=None))
        else:
            add(dict(base,pos='other',lemma=lemma_clean(re.sub(r'\([^)]*\)','',h).strip().split(',')[0]),gender=None))
    else:
        add(dict(base,pos=pos,lemma=lemma_clean(re.sub(r'\([^)]*\)','',h).strip().split(',')[0].strip()),gender=None))
json.dump(OUT,open('stage4.json','w'),ensure_ascii=False,indent=0)
print(len(OUT),collections.Counter(r['pos'] for r in OUT))
