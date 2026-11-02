import re, json, unicodedata, collections, sys
sys.path.insert(0,'.')
M=json.load(open('stage6.json',encoding='utf8'))
def plain(s):
    s=unicodedata.normalize('NFD',s)
    return ''.join(c for c in s if unicodedata.category(c)!='Mn')
def nb(s): return s.replace('ĕ','e').replace('ă','a').replace('ĭ','i').replace('ŏ','o').replace('ŭ','u')
def fixlook(s): return s.replace('ο','o').replace('Ο','O')
PRON_FORMS={'alius -a -ud':'alius, alia, aliud','alter -era -erum':'alter, altera, alterum','ille -a -ud':'ille, illa, illud','iste, ista, istud':'iste, ista, istud',
 'meus -a -um':'meus, mea, meum','tuus -a -um':'tuus, tua, tuum','suus -a -um':'suus, sua, suum','noster -stra -strum':'noster, nostra, nostrum','vester, vestra, vestrum':'vester, vestra, vestrum',
 'nullus -a -um':'nullus, nulla, nullum','ullus -a -um':'ullus, ulla, ullum','totus -a -um':'totus, tota, totum','uter -tra -trum':'uter, utra, utrum','neuter -tra -trum':'neuter, neutra, neutrum',
 'nonnulli -ae -a':'nonnulli, nonnullae, nonnulla','aliquis -id':'aliquis, aliquid (aliqui, aliqua, aliquod)','hic, haec, hoc':'hic, haec, hoc','idem, eadem, idem':'idem, eadem, idem',
 'ipse, ipsa, ipsum':'ipse, ipsa, ipsum','is, ea, id':'is, ea, id','uterque, utraque, utrumque':'uterque, utraque, utrumque','quis, quid?':'quis, quid',
 'quicumque, quaecumque, quodcumque':'quicumque, quaecumque, quodcumque','unusquique, unaquaeque, unumquidque':'unusquisque, unaquaeque, unumquidque (unumquodque)'}
def greekfix(s):
    if not isinstance(s,str): return s
    out=[]
    for t in re.split(r'(\s+)',s):
        if re.search(r'[\u0370-\u03ff\u1f00-\u1fff]',t) and re.search(r'[A-Za-z]',t): t=t.replace('o','ο')
        out.append(t)
    return ''.join(out)
LIST_TOK=re.compile(r'^[^\s,(!]+')
out=[]; ids=collections.Counter()
for r in M:
    pos=r['pos']
    notes=[]; unc=bool(r.get('uncertain'))
    lemma_disp=r['lemma']
    if pos in ('prep','conj','adv','pron','num','particle','interj','other'):
        h=fixlook(unicodedata.normalize('NFC',r['head']))
        m=LIST_TOK.match(h)
        if r['lemma'] in ('ut  και',) : pass
        lemma_disp=r.get('lemma_override') or (m.group(0) if m else r['lemma'])
        lemma_disp=lemma_disp.strip(',')
    # forms
    if pos=='noun':
        forms=r.get('forms') or None
        if not forms:
            g=r.get('gen')
            if r.get('plonly'): forms=f"{r['lemma']}, {g if g and not str(g).startswith('-') else ''}".strip(', ')+' (μόνο πληθ.)'
            else: forms=f"{r['lemma']}, {g}"
            if r.get('plonly') and g and str(g).startswith('-'):
                L0=r['lemma']; sfx=g[1:]
                if sfx in ('ārum','arum') and L0.endswith('ae'): full=L0[:-2]+'ārum'
                elif sfx in ('ōrum','orum') and L0.endswith(('a','i')): full=L0[:-1]+'ōrum'
                elif sfx=='ium' and L0.endswith('ia'): full=L0[:-2]+'ium'
                elif sfx in ('ium','um') and L0.endswith('es'): full=L0[:-2]+sfx
                else: full=None
                forms=f"{L0}, {full} (μόνο πληθ.)" if full else f"{L0} ({g}) — μόνο πληθ."
    elif pos in ('verb','adj'):
        forms=r.get('forms')
    else:
        forms=r.get('forms')
        if not forms:
            hh=fixlook(unicodedata.normalize('NFC',r['head']))
            hh=re.split(r'\(|[\u0370-\u03ff\u1f00-\u1fff]',hh)[0]
            forms=re.sub(r'\s+',' ',hh).strip(' ,')
            if pos=='pron' and forms in PRON_FORMS: forms=PRON_FORMS[forms]
    forms=fixlook(forms) if forms else forms
    lemma_disp=fixlook(lemma_disp)
    lemma=plain(nb(lemma_disp)).lower().replace('ς','').strip()
    lemma=re.sub(r'\s+',' ',lemma)
    senses=[re.sub(r'\s+',' ',s).strip(' ,;') for s in r['senses'] if s.strip(' ,;')]
    senses=[re.sub(r'[\s,]*\d+\s*[ΠΑΕE]?\d*\s*$','',re.sub(r'\(\s*\)','',x)).strip(' ,;·\u0387') for x in senses]; senses=[x for x in senses if x]
    el='; '.join(senses)
    # stray digits / odd chars in meaning
    if re.search(r'\d|\(\s*\)|\s\)|^\)',el): unc=True; notes.append('η ελληνική απόδοση περιέχει ύποπτους χαρακτήρες από την εξαγωγή του PDF· έλεγξε με το βιβλίο')
    if not el: unc=True
    lessons=r['lessons']; ltext=r['lessons_text']; loth=r['lessons_other']
    in16=[n for n in lessons if n>=16]
    seen=r.get('lessons_in_texts') or []
    tier=1 if (any(n>=16 for n in ltext) or any(n>=16 for n in seen)) else (2 if in16 else 3)
    freq=r['freq_text']
    exam_years=r['exam_years']
    core=bool(tier==1 and ((len(in16)>=2) or ((freq or 0)>=3) or exam_years or pos in ('prep','conj','pron','num','particle')))
    gender=r.get('gender')
    if pos=='noun' and r.get('gender_src')=='rule':
        notes.append('το γένος δεν δίνεται στο λεξιλόγιο του βιβλίου· συνάγεται από την κατάληξη/κλίση')
        if r.get('decl_or_conj')=='3': unc=True
    if pos=='verb':
        if r.get('forms_ok') is False: pass
        dc=r.get('decl_or_conj')
    decl=r.get('decl_or_conj')
    if pos=='adj' and r['lemma']=='minor': decl='3 (συγκριτικός)'
    if pos=='adj' and not decl:
        f=forms or ''
        items=[x.strip() for x in re.sub(r'\([^)]*\)','',f).split(',')]
        if len(items)==3 and items[1].endswith('a') and items[2].endswith('um'): decl='1-2'
        elif len(items)==3 and items[1].endswith('ae') and items[2].endswith('a'): decl='1-2 (πληθ.)'
        elif len(items)==3 and items[1].endswith('is') and items[2].endswith('e'): decl='3 (3 καταλήξεις)'
        elif len(items)==2 and items[0].endswith('is') and items[1].endswith('e'): decl='3 (2 καταλήξεις)'
        elif len(items)==2: decl='3 (1 κατάληξη)'
        else: decl=None
    if pos=='verb' and r.get('merged_heads'): pass
    if r.get('notes'): notes.extend(r['notes'])
    if r.get('merged_heads'): notes.append('ενοποιήθηκαν οι σημασίες από πολλές εγγραφές του λεξιλογίου του βιβλίου')
    if not lessons: notes.append('το λεξιλόγιο του βιβλίου δεν δίνει αριθμό μαθήματος')
    if pos=='verb' and r.get('voice')=='dep': notes.append('αποθετικό ρήμα')
    if pos=='verb' and r.get('voice')=='semi': notes.append('ημιαποθετικό ρήμα')
    if pos=='verb' and r.get('voice')=='pass': notes.append('παθητικός τύπος (χωρίς ενεργητική φωνή στα ελληνικά του βιβλίου)')
    # verb forms missing parts
    if pos=='verb':
        fm=forms or ''
        if re.fullmatch(r'\S+',fm): unc=True; notes.append('λείπουν αρχικοί χρόνοι')
    # id
    base=lemma.split(' (')[0]
    idk=f"{base}-{pos}"
    ids[idk]+=1
    rid=idk if ids[idk]==1 else f"{idk}{ids[idk]}"
    forms=greekfix(forms); el=greekfix(el); senses=[greekfix(x) for x in senses]; notes=[greekfix(x) for x in notes]
    if r['lemma']=='quamvis' or rid=='quamvis-conj':
        el='όσο κι αν, αν και'; senses=[el]; unc=True; notes.append('η ελληνική απόδοση λείπει από το λεξιλόγιο του βιβλίου· προστέθηκε από τον ερευνητή')
    if pos=='verb' and forms and forms.count(',')==1 and not re.search(r'sum|dep|\(',forms) and not forms.startswith(('inquam','aio')):
        notes.append('το λεξιλόγιο του βιβλίου δίνει μόνο ενεστώτα και απαρέμφατο'); unc=True
    rec=dict(id=rid,lemma=lemma_disp if pos not in ('verb','noun','adj') else r['lemma'],forms=forms,pos=pos,gender=gender,decl_or_conj=decl,
             el=el,senses=senses,lessons=lessons,lessons_text=ltext,lessons_other=loth,tier=tier,core=core,
             freq_text=freq,seen_in_lessons=seen,exam_years_2022_2026=exam_years,notes=notes,uncertain=unc)
    if r.get('plonly'): rec['plural_only']=True
    out.append(rec)
POSTF={'mitto':dict(forms='mitto, misi, missum, mittĕre',note='το λεξιλόγιο του βιβλίου τυπώνει «misum» (τυπογραφικό)· σωστός τύπος: missum',unc=False),'metuo':dict(note='το βιβλίο δίνει supine metūtum· στα λεξικά το metuo συνήθως δεν έχει σουπίνο — έλεγξε',unc=True),'diffluo':dict(note='το βιβλίο δίνει difflūctum· στα λεξικά το diffluo συνήθως δεν έχει σουπίνο — έλεγξε',unc=True),'dives':dict(forms='dives, divitis'),'praecox':dict(forms='praecox, praecocis'),'coniunx':dict(forms='coniunx (coniux), coniugis'),'pergo':dict(forms='pergo, perrexi, perrectum, pergĕre'),'praesum':dict(el_sub=('προ ΐσταμαι','προΐσταμαι'))}
POSTN={('accido','verb'):('accĭdit = συμβαίνει',None),('fero','verb'):('fertur = λέγεται (γ΄ πρόσ. παθητικής)',None),('consequor','verb'):('consequitur = προκύπτει· συνεπάγεται (απρόσ.)',None),
 ('pono','verb'):('positus sum = είμαι τοποθετημένος, βρίσκομαι',None),('relinquo','verb'):('relinquitur = υπολείπεται (απρόσ.)',None),('ipse','pron'):('ipsum (πρβ. me ipsum) = τον εαυτό μου',None),
 ('atque','conj'):('ac = atque (πριν από σύμφωνο)',None),('aliquis','pron'):('qui, qua/quae, quod (επιθ. αόρ.) = κάποιος, μετά από si, nisi, ne, num',None)}
for x in out:
    L0=plain(nb(x['lemma'])).lower().split(' (')[0].split(',')[0].strip()
    if L0 in POSTF:
        d=POSTF[L0]
        if 'forms' in d: x['forms']=d['forms']
        if 'note' in d: x['notes'].append(d['note'])
        if d.get('unc'): x['uncertain']=True
        if 'el_sub' in d: x['el']=x['el'].replace(*d['el_sub']); x['senses']=[t.replace(*d['el_sub']) for t in x['senses']]
    k=(L0,x['pos'])
    if k in POSTN:
        x['notes'].append(POSTN[k][0])
        if L0=='accido':
            x['senses'].append('accĭdit = συμβαίνει'); x['el']=x['el']+'; accĭdit = συμβαίνει'; x['lessons']=[12]; x['lessons_text']=[12]; x['notes']=[n for n in x['notes'] if 'αριθμό μαθήματος' not in n]
# sort: tier, then core desc, freq desc, lemma
out.sort(key=lambda x:(x['tier'],not x['core'],-(x['freq_text'] or 0),plain(x['lemma']).lower()))
with open('vocab.jsonl','w',encoding='utf8') as f:
    for x in out: f.write(json.dumps(x,ensure_ascii=False)+'\n')
c=collections.Counter((x['tier'],x['core']) for x in out)
print(len(out),c, collections.Counter(x['pos'] for x in out), sum(x['uncertain'] for x in out),'uncertain')
