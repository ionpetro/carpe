import re, json, unicodedata, collections, sys
sys.path.insert(0,'.')
from lib_verbs import norm
def plain(s):
    s=unicodedata.normalize('NFD',s)
    return ''.join(c for c in s if unicodedata.category(c)!='Mn')
def nb(s): return s.replace('ĕ','e').replace('ă','a').replace('ĭ','i').replace('ŏ','o').replace('ŭ','u')
S=json.load(open('stage4.json',encoding='utf8'))
corp=json.load(open('corpus.json',encoding='utf8'))
exam=json.load(open('exam_passages.json',encoding='utf8'))

# ---------- fix-ups on stage4 records ----------
def find(head_start):
    for r in S:
        if unicodedata.normalize('NFC',r['head']).startswith(head_start): return r
OTHER_SPEC={ # head start -> dict
 'aeque atque':dict(pos='phrase',lemma='aeque atque (ac)'),
 'ambitiōsissime':dict(pos='adv',lemma='ambitiosissime',forms='ambitiōsissime (υπερθετικός του ambitiose)'),
 'ave!':dict(pos='interj',lemma='ave',forms='ave! (πληθ. avete)'),
 'conscripti':dict(pos='phrase',lemma='patres conscripti',forms='patres conscripti'),
 'domi (':dict(pos='adv',lemma='domi',forms='domi (στάση σε τόπο)'),
 'dοmi bellique':dict(pos='phrase',lemma='domi bellique (militiaeque)'),
 'domo (':dict(pos='adv',lemma='domo',forms='domo (κίνηση από τόπο)'),
 'domum (':dict(pos='adv',lemma='domum',forms='domum (κίνηση προς τόπο)'),
 'ego (':dict(pos='pron',lemma='ego',forms='ego, mei, mihi, me, me (πληθ. nos, nostri/nostrum, nobis, nos, nobis)',decl_or_conj='προσωπική αντωνυμία'),
 'fore':dict(pos='verb',lemma='fore',forms='fore (= futurum esse, απαρέμφατο μέλλοντα του sum)',decl_or_conj='irreg (sum)'),
 'iniussu':dict(pos='prep',lemma='iniussu',forms='iniussu (+ γεν.)'),
 'in lucem':dict(pos='phrase',lemma='in lucem'),
 'mille':dict(pos='num',lemma='mille',forms='mille (άκλιτο· πληθ. milia, milium)'),
 'necne':dict(pos='particle',lemma='necne'),
 'necesse':dict(pos='adj',lemma='necesse',forms='necesse (άκλιτο)',decl_or_conj='indecl.'),
 'nemo':dict(pos='pron',lemma='nemo',forms='nemo, neminis, nemini, neminem, nullo',decl_or_conj='αόριστη αντωνυμία'),
 'nihil':dict(pos='pron',lemma='nihil',forms='nihil (άκλιτο, ουδ.)',decl_or_conj='αόριστη αντωνυμία'),
 'non':dict(pos='adv',lemma='non'),
 'nosmet':dict(pos='pron',lemma='nosmet',forms='nosmet (nos + επίθημα -met)'),
 'paulo post':dict(pos='phrase',lemma='paulo post'),
 'quanto':dict(pos='adv',lemma='quanto',forms='quanto (αφαιρετική του μέτρου)'),
 'qui, quae':dict(pos='pron',lemma='qui',forms='qui, quae, quod',decl_or_conj='αναφορική αντωνυμία'),
 'quid ergo':dict(pos='phrase',lemma='quid ergo'),
 'quidam':dict(pos='pron',lemma='quidam',forms='quidam, quaedam, quiddam (quoddam)',decl_or_conj='αόριστη αντωνυμία'),
 'quisquam':dict(pos='pron',lemma='quisquam',forms='quisquam, quaequam, quidquam (quicquam)',decl_or_conj='αόριστη αντωνυμία'),
 'res militāris':dict(pos='phrase',lemma='res militaris'),
 'res publica':dict(pos='phrase',lemma='res publica',forms='res publica, rei publicae'),
 'secum':dict(pos='phrase',lemma='secum',forms='secum (= cum se)'),
 'sententiā':dict(pos='phrase',lemma='ex sententiā',forms='ex sententiā (consilium ex sententiā)',senses=['κατά την επιθυμία, κατ’ ευχήν']),
 'si minus':dict(pos='phrase',lemma='si minus'),
 'non solum':dict(pos='phrase',lemma='non solum ... verum etiam'),
 'tot':dict(pos='adj',lemma='tot',forms='tot (άκλιτο)',decl_or_conj='indecl.'),
 'utrum':dict(pos='phrase',lemma='utrum ... an'),
 'vis, vim':dict(pos='noun',lemma='vis',forms='vis, vim, vi (πληθ. vires, virium)',gender='f',decl_or_conj='3 (ανώμαλο)'),
}
for r in S:
    if r['pos']=='other':
        hn=unicodedata.normalize('NFC',r['head'])
        for k,v in sorted(OTHER_SPEC.items(),key=lambda kv:-len(kv[0])):
            if hn.startswith(k): r.update(v); break
        else:
            if hn.startswith('animadverto'):
                r.update(pos='verb',lemma='animadverto',forms='animadverto, animadverti, animadversum, animadvertĕre',decl_or_conj='3',voice='act',senses=['παρατηρώ','animadverto in aliquem = τιμωρώ κάποιον'])
for r in S:
    L=plain(nb(r['lemma'])).lower()
    if r['pos']=='adj':
        if L=='puter': r['forms']='puter, putris, putre'
        if L=='singuli': r['forms']='singuli, singulae, singula'
        if L=='tristiculus': r['forms']='tristiculus, tristicula, tristiculum'
        if L=='dexter': r['forms']='dexter, dextra, dextrum'
    if r['pos']=='noun':
        if L=='mare': r['gen']='maris'
        if L=='rete': r['gen']='retis'
        if L=='regnum-i' or r['lemma']=='regnum-i': r['lemma']='regnum'; r['gen']='regni'
        if L=='ius': r['gen']='iuris'
        if L=='hiems': r['gen']='hiemis'
        if L=='spes': r['gen']='spei'
        if L=='honos': r['lemma']='honos (honor)'; r['gen']='honōris'
        if L=='fides': r['gen']='fidei'
        if L=='tempus': r['gen']='temporis'
        if L=='trecenti': r['pos']='num'; r['forms']='trecenti, trecentae, trecenta'
        if L=='minor': r['pos']='adj'; r['forms']='minor, minus (συγκριτικός του parvus· γεν. minōris)'
        if L=='mala':  r['pos']='noun'; r['lemma']='malum'; r['gen']='mali'; r['gender']='n'; r['notes']=['στη λίστα με τη μορφή mala, -ōrum = τα δεινά, οι συμφορές']
        if L=='litterae': r['lemma']='littera'; r['gen']='litterae'; r['gender']='f'; r['notes']=['litterae, -ārum (πληθ.) = γράμματα, λογοτεχνία']
        if L=='supplicia': r['lemma']='supplicium'; r['gen']='supplicii'; r['gender']='n'; r['notes']=['supplicia, -ōrum (πληθ.) = ικεσίες, προσευχές, λατρεία']
        if L=='capillus': r['notes']=['και capilli, -ōrum (πληθ.) = τα μαλλιά']
        if L=='ficus': r['notes']=['ficus, fici (β΄ κλ., θηλ.) = σύκο· ficus, ficūs (δ΄ κλ., θηλ.) = συκιά']
        if L=='domus': r['notes']=['δ΄ κλίση με τύπους β΄ κλίσης στην αφαιρετική (domo) και αιτιατική πληθ.· τοπική domi']
        if L=='foris': r['notes']=['συνήθως πληθ. fores, -ium']
        if L=='materia': r['notes']=['και materies, -ēi']
        if L=='plebs': r['notes']=['και plebes, -ēi']
        if L=='coniunx': r['lemma']='coniunx (coniux)'
        if L=='exul': r['lemma']='exsul (exul)'
        if L=='alter': pass
for r in S:  # verb fixes
    L=plain(nb(r['lemma'])).lower()
    if r['pos']=='verb' and L=='mentior': r['forms']='mentior, mentītus sum, mentīri'
    if r['pos']=='verb' and L=='molior': r['forms']='molior, molītus sum, molīri'
    if r['pos']=='verb' and L=='circumdo': r['forms']='circumdo, circumdedi, circumdatum, circumdare'; r['decl_or_conj']='1 (irreg.)'
    if r['pos']=='verb' and L=='antecello': r['forms']='antecello, antecellĕre (άλλοι χρόνοι δεν δίνονται στο βιβλίο)'; r['uncertain']=True
    if r['pos']=='verb' and L=='feteo': r['forms']='feteo (foeteo), fetēre'
    if r['pos']=='verb' and L in ('affero',): r['forms']='affero (adfero), attuli, allātum, afferre'

PLG={'arma':'n','castra':'n','hiberna':'n','moenia':'n','līberi':'m','domestici':'m','manes':'m','penātes':'m','pugillāres':'m','copiae':'f','divitiae':'f','insidiae':'f','opes':'f','tenebrae':'f','thermae':'f','cervīces':'f'}
PLD={'cervīces':'3','domestici':'2','penātes':'3','pugillāres':'3','arma':'2','castra':'2','hiberna':'2','moenia':'3','līberi':'2','manes':'3','opes':'3','copiae':'1','divitiae':'1','insidiae':'1','tenebrae':'1','thermae':'1'}
for r in S:
    if r['pos']=='noun' and r['lemma'] in PLG:
        r['gender']=PLG[r['lemma']]; r['plonly']=True; r['decl_or_conj']=PLD[r['lemma']]
LT=re.compile(r'^[^\s,(!]+')
for r in S:
    if r['pos'] in ('prep','conj','adv','pron','num','particle','interj'):
        h=unicodedata.normalize('NFC',r['head']).replace('\u03bf','o')
        pre=re.split(r'\(|[\u0370-\u03ff\u1f00-\u1fff]',h)[0].strip()
        if re.fullmatch(r"[A-Za-z\u0100-\u017f]+( [A-Za-z\u0100-\u017f]+)+",pre): r['lemma']=pre
        else:
            m=LT.match(h)
            if m: r['lemma']=m.group(0).strip(',!').lstrip('-')
# default genders / declensions
G1M={'poeta','nauta','agricola','transfuga','bibliopola'}
def decl_of(n):
    g=(n.get('gen') or '')
    gn=norm(g)
    if n.get('plonly'):
        t=g
        if 'ārum' in t or 'arum' in t: return '1'
        if 'ōrum' in t or 'orum' in t: return '2'
        return '3'
    if gn.endswith('ae'): return '1'
    if gn.endswith('ei'): return '5' if norm(n['lemma']).endswith('es') else '2'
    if gn.endswith('us') and not gn.endswith('ius'): return '4' if (n['lemma'].endswith('us') or n['lemma'].endswith('u')) else '3'
    if gn.endswith('is'): return '3'
    if gn.endswith('i') or gn.endswith('ii'): return '2'
    return None
for r in S:
    if r['pos']!='noun': continue
    L=plain(nb(r['lemma'])).lower()
    d=r.get('decl_or_conj') or decl_of(r)
    r['decl_or_conj']=d
    g=r.get('gender')
    r['gender_src']='book' if g else None
    if not g:
        if d=='1': g='m' if L in G1M else ('c' if L=='incola' else 'f')
        elif d=='2': g='n' if L.endswith(('um','on')) else 'm'
        elif d=='4': g='n' if L.endswith('u') else 'm'
        elif d=='5': g='f'
        elif d=='3':
            if L.endswith(('tas','tudo','io','ix','is')) and not L.endswith('ais'): g='f' if L.endswith(('tas','tudo','io')) else None
            elif L.endswith('or'): g='m'
            elif L.endswith(('men','us','e')): g='n'
        if g: r['gender_src']='rule'
        else: r['uncertain']=True
    r['gender']=g
# verbs: ensure decl text
for r in S:
    if r['pos']=='verb' and not r.get('decl_or_conj'): r['decl_or_conj']='?'

# ---------- merge duplicates (same lemma+pos) ----------
def key(r): return (plain(nb(r['lemma'])).lower(), r['pos'])
groups=collections.OrderedDict()
for r in S:
    groups.setdefault(key(r),[]).append(r)
merged=[]
for k,rs in groups.items():
    if len(rs)==1: merged.append(rs[0]); continue
    if k[1]=='verb' and k[0]=='fundo':
        for i,x in enumerate(rs,1): x['lemma_id_suffix']=f"-{i}"; merged.append(x)
        continue
    a=dict(rs[0])
    for b in rs[1:]:
        a['senses']=a['senses']+[s for s in b['senses'] if s not in a['senses']]
        a['lessons']=sorted(set(a['lessons'])|set(b['lessons']))
        a['lessons_text']=sorted(set(a['lessons_text'])|set(b['lessons_text']))
        a['lessons_other']=sorted(set(a['lessons_other'])|set(b['lessons_other']),key=lambda x:int(re.match(r'\d+',x).group(0)))
    a['merged_heads']=[x['head'] for x in rs]
    merged.append(a)
json.dump(merged,open('stage5.json','w'),ensure_ascii=False,indent=0)
print(len(merged),collections.Counter(r['pos'] for r in merged))
print('uncertain nouns:',[ (r['lemma'],r.get('gen')) for r in merged if r['pos']=='noun' and r.get('uncertain')])
print('decl None:',[r['lemma'] for r in merged if r['pos']=='noun' and not r.get('decl_or_conj')])
