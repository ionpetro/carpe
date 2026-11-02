import re, unicodedata
def norm(s):
    s=unicodedata.normalize('NFD',s)
    return ''.join(c for c in s if unicodedata.category(c)!='Mn').lower()
def nb(s): return s.replace('ĕ','e').replace('ă','a').replace('ĭ','i').replace('ŏ','o').replace('ŭ','u')
def N(s): return norm(nb(s))
GER=lambda s,v:{s+v+'ndi',s+v+'ndo',s+v+'ndum',s+v+'ndus',s+v+'nda',s+v+'ndae',s+v+'ndam',s+v+'ndos',s+v+'ndas',s+v+'ndorum',s+v+'ndarum',s+v+'ndis'}
def pres_forms(s,conj,io):
    # s = present stem without thematic vowel; returns set of forms
    F=set()
    def add(*ends):
        for e in ends: F.add(s+e)
    if conj==1:
        add('o','as','at','amus','atis','ant','abam','abas','abat','abamus','abatis','abant','abo','abis','abit','abimus','abitis','abunt',
            'em','es','et','emus','etis','ent','arem','ares','aret','aremus','aretis','arent','a','ate','are','ans','antis','ante','antem','antes','antium','antibus',
            'or','aris','atur','amur','amini','antur','abar','abaris','abatur','abamur','abantur','abor','aberis','abitur','abuntur','er','eris','etur','entur','arer','aretur','arentur','ari','atum')
        F|=GER(s,'a')
    elif conj==2:
        add('eo','es','et','emus','etis','ent','ebam','ebas','ebat','ebamus','ebatis','ebant','ebo','ebis','ebit','ebimus','ebitis','ebunt',
            'eam','eas','eat','eamus','eatis','eant','erem','eres','eret','eremus','eretis','erent','e','ete','ere','ens','entis','ente','entem','entes','entium','entibus',
            'eor','eris','etur','emur','emini','entur','ebar','ebaris','ebatur','ebamur','ebantur','ebor','eberis','ebitur','ebuntur','ear','earis','eatur','eantur','erer','eretur','erentur','eri')
        F|=GER(s,'e')
    elif conj==3 and not io:
        add('o','is','it','imus','itis','unt','ebam','ebas','ebat','ebamus','ebatis','ebant','am','es','et','emus','etis','ent',
            'as','at','amus','atis','ant','erem','eres','eret','eremus','eretis','erent','e','ite','ere','ens','entis','ente','entem','entes','entium','entibus',
            'or','eris','itur','imur','imini','untur','ebar','ebatur','ebantur','ar','aris','atur','antur','etur','entur','erer','eretur','erentur','i','ere')
        F|=GER(s,'e')
    elif conj==3 and io:
        add('io','is','it','imus','itis','iunt','iebam','iebas','iebat','iebamus','iebatis','iebant','iam','ies','iet','iemus','ietis','ient',
            'ias','iat','iamus','iatis','iant','erem','eres','eret','eremus','eretis','erent','e','ite','ere','iens','ientis','iente','ientem','ientes','ientium',
            'ior','eris','itur','imur','imini','iuntur','iebar','iebatur','iebantur','iar','iatur','iantur','ietur','ientur','erer','eretur','erentur','i')
        F|=GER(s,'ie')
    elif conj==4:
        add('io','is','it','imus','itis','iunt','iebam','iebas','iebat','iebamus','iebatis','iebant','iam','ies','iet','iemus','ietis','ient',
            'ias','iat','iamus','iatis','iant','irem','ires','iret','iremus','iretis','irent','i','ite','ire','iens','ientis','iente','ientem','ientes','ientium',
            'ior','iris','itur','imur','imini','iuntur','iebar','iebatur','iebantur','iar','iatur','iantur','ietur','ientur','irer','iretur','irentur','iri')
        F|=GER(s,'ie')
    return F
PF_END=['i','isti','it','imus','istis','erunt','ere','eram','eras','erat','eramus','eratis','erant','ero','eris','erit','erimus','eritis','erint','erim','isse','issem','isses','isset','issemus','issetis','issent']
def pp_forms(s):
    F=set()
    for e in ('us','a','um','i','ae','o','am','em','e','os','as','orum','arum','is','ī'): F.add(s+e)
    for e in ('urus','ura','urum','uri','urae','uro','uram','urorum','uros','uras','urus'): F.add(s+e)
    F.add(s+'u')
    return F
def noun_forms(lemma,gen,decl,plonly=False):
    L=N(lemma).split(' (')[0].split(',')[0].split()[0] if lemma else ''
    g=N(gen) if gen and not gen.startswith('-') else None
    F={L}
    if g:
        F.add(g)
        if decl=='1' and g.endswith('ae'):
            s=g[:-2]; F|={s+e for e in ('a','ae','am','arum','is','as')}
        elif decl=='2':
            s=g[:-1] if g.endswith('i') else g
            F|={s+e for e in ('us','i','o','um','orum','is','os','e','a')}
            if g.endswith('ii'): F|={g[:-2]+e for e in ('ius','ii','io','ium','iorum','iis','ios','ie','ia')}
        elif decl=='3' and g.endswith('is'):
            s=g[:-2]; F|={s+e for e in ('is','i','e','em','es','um','ium','ibus','a','ia')}
        elif decl=='4' and g.endswith('us'):
            s=g[:-2]; F|={s+e for e in ('us','ui','um','u','uum','ibus','ua')}
        elif decl=='5' and g.endswith('ei'):
            s=g[:-2]; F|={s+e for e in ('es','ei','em','e','erum','ebus')}
    else:
        # plural-only or lemma-only
        if decl=='1' and L.endswith('ae'):
            s=L[:-2]; F|={s+e for e in ('ae','arum','is','as')}
        elif decl=='2':
            s=L[:-1]; F|={s+e for e in ('i','orum','is','os','a')}
            if L.endswith('a'): F|={L[:-1]+e for e in ('a','orum','is')}
        elif decl=='3':
            s=L[:-2] if L.endswith('es') else L
            F|={s+e for e in ('es','ium','um','ibus','a','ia')}
    return F
def adj_forms_set(forms):
    parts=[N(p) for p in re.sub(r'\([^)]*\)','',forms).split(',')]
    F=set()
    if not parts: return F
    L=parts[0].split()[0]; F.add(L)
    for p in parts[1:]: 
        if p: F.add(p.split()[0])
    if len(parts)>=3 and parts[1].split()[0].endswith('a') and parts[2].split()[0].endswith('um'):
        base=parts[1].split()[0][:-1]
        F|={base+e for e in ('us','a','um','i','ae','o','am','em','e','os','as','orum','arum','is','a')}
        if L.endswith('er'): F|={base+e for e in ('i','a','um','o','os','as','orum','arum','is','am','ae')}
    elif len(parts)>=2 and parts[1].split()[0].endswith('e') and L.endswith('is'):
        base=L[:-2]; F|={base+e for e in ('is','e','i','em','es','ia','ium','ibus','a')}
    elif len(parts)>=3 and parts[1].split()[0].endswith('is') and parts[2].split()[0].endswith('e'):  # acer, acris, acre
        base=parts[1].split()[0][:-2]; F|={base+e for e in ('is','e','i','em','es','ia','ium','ibus','er','a')}
    elif len(parts)==2 and parts[1].split()[0].endswith('is'):  # felix, felicis
        base=parts[1].split()[0][:-2]; F|={base+e for e in ('is','i','em','e','es','ia','ium','ibus','a')}
    elif len(parts)==3 and parts[1].split()[0].endswith('ae') :
        base=parts[1].split()[0][:-2]; F|={base+e for e in ('i','ae','a','orum','arum','is','os','as')}
    return F
def verb_forms_set(forms,decl,voice):
    F=set()
    raw=re.sub(r'\([^)]*\)','',forms)
    parts=[N(p.strip()) for p in raw.split(',') if p.strip() and p.strip()!='—']
    if not parts: return F
    lem=parts[0].split()[0]; F.add(lem)
    conj=None; io=False
    m=re.match(r'(\d)(-io)?',decl or '')
    if m: conj=int(m.group(1)); io=bool(m.group(2))
    # infinitive
    inf=None
    for p in reversed(parts[1:]):
        w=p.split()[0]
        if re.search(r'(re|ri|i|esse)$',w): inf=w; break
    if inf and conj:
        if conj==3:
            s=inf[:-3] if inf.endswith('ere') else (inf[:-1] if inf.endswith('i') else None)
        elif inf.endswith(('ere','are','ire','eri','ari','iri')): s=inf[:-3]
        elif inf.endswith('i'): s=inf[:-1]
        else: s=None
        if s is not None and len(s)>=1:
            F|=pres_forms(s,conj,io)
    # perfect
    for p in parts[1:]:
        if re.search(r'\bsum$',p):
            w=p.split()[0]; base=w[:-2] if w.endswith('us') else w
            F|=pp_forms(base)
            continue
        w=p.split()[0]
        if re.search(r'(re|ri|esse)$',w): continue
        if w.endswith('i') and p==parts[1]:   # perfect 1sg
            ps=w[:-1]
            F|={ps+e for e in PF_END}
            # participle with perfect-stem? no
        elif w.endswith(('um','us')):
            F|=pp_forms(w[:-2])
    return F
