# Carpe research: MORPHOLOGY for the Panhellenic Latin exam

Written 2026-11-01. Scope: everything a Greek ΓΕΛ student (Ομάδα Προσανατολισμού Ανθρωπιστικών Σπουδών) needs to *form and recognise*: nouns, adjectives, adverbs, numerals, pronouns, verbs (all moods, voices, participles, gerund, gerundive, supine, irregular, defective, impersonal). Syntax is another agent's job; here it appears only where it decides a form (e.g. which participle, which supine).

How to read the tags:
- **[A]** = a form type that actually appears in the Panhellenic papers I read (2020, 2022, 2023, 2024, 2025, 2026 main sessions plus the 2022-2026 resits). These are the highest priority.
- **[B]** = in the official school grammar/textbook but not seen in the papers I read. Teach, but after [A].
- **[C]** = general Latin knowledge outside the school book (kept to a minimum, flagged). Do not let [C] items block progress.
- **UNSURE** = I could not confirm it from a primary source. Treat as open.

---

## 0. Sources, and how much I trust each

| ID | Source | What I used it for | Trust |
|---|---|---|---|
| S1 | **Αχιλλέας Τζάρτζανος, *Λατινική Γραμματική* (Γ΄ Γενικού Λυκείου)**, official digital grammar, ΥΠΑΙΘ / ΙΤΥΕ «Διόφαντος», ebooks.edu.gr. Morphology = Μέρος Β΄ chapters 3-8 (§§14-103) + Παράρτημα Ι (§120, catalogue of irregular verbs). https://ebooks.edu.gr/ebooks/v/html/8547/2730/Latiniki-Grammatiki_G-Lykeiou_html-apli/ (pages `index_02b.htm` ... `index_07.html`, `index_09.htm`) | I read all of chapters 3-8 and part of Appendix I. **This is the reference the exam is built on**; whenever S1 and "general Latin" differ, S1 wins. | Primary, official |
| S2 | **Πασχάλης-Σαββαντίδης, *Λατινικά Γ΄ Λυκείου, Τεύχος Β΄* (ενότητες XXI-L)**, official textbook. PDFs: https://ebooks.edu.gr/ebooks/d/8547/6227/27-0212_Latinika-Teuchos-B_G-Lykeiou_Vivlio-Mathiti_18pt-Arial-Bold_Tomos-1.pdf (same pattern for `6228/27-0213 ... Tomos-2` and `6229/27-0214 ... Tomos-3`). The Β΄ Λυκείου book (ενότητες I-XV, Τεύχος Α΄ code 22-0286) is the prerequisite. | The "ΠΑΡΑΤΗΡΗΣΕΙΣ" of each unit = the school's own wording of each rule (order of teaching in §10). | Primary, official |
| S3 | **ΙΕΠ teaching instructions 2025-26** (iep.edu.gr, `149771_2_ΣΥΝ_111018_ΟΔΗΓΙΕΣ_ΛΑΤΙΝΙΚΑ_ΓΕΛ_2025_26`) and the **2026-27 exam-material decision** (alfavita.gr article + `yli-Α_Β_Γ__ΓΕΛ_ΤΡΑΠ_ΘΕΜ_2026_27.pdf`) | Confirms book, units, and that Γ΄ Latin is governed by Υ.Α. 90176/Δ2/06-07-2026 (ΦΕΚ Β΄ 4210). The examined list for June 2027 (no exclusions for Latin; includes bos, fio, quidam, cado/caedo, do-compounds) is taken from `research/syllabus.md`, where a sibling agent read the decision PDF; see §1.4. | Primary but incomplete |
| S4 | **Past papers (θέματα)** from panellinies.net, which hosts the official PDFs: main sessions 2020 (old system), 2022, 2023, 2024, 2025, 2026; resits (Επαναληπτικές) 2022-2026. 2021 had no Latin. https://www.panellinies.net/ (Λατινικά index) | The only honest frequency evidence in this file. Every count below is something I read, not an estimate. | Primary (papers), secondary (see S5) |
| S5 | **Answer keys** by tutoring groups (e.g. Εύκλειδης, panellinies.net answer PDFs, mad.gr/«Αξία», newsit/Διακρότημα) | Official ΥΠΑΙΘ keys are not public in the same way; these are *suggested* answers. **They contain errors** (see §1.5). Use only as cross-check, and verify forms from S1. | Secondary, error-prone |
| S6 | Teacher commentary: CNN.gr 2024 (Μαρία Γύρτη, Πουκαμισάς), elp.gr 2025 (Κ. Βασιλείου), esos.gr 2022 (key typo "Ilius"), mad.gr 2026 | Difficulty remarks; evidence of key errors | Secondary |
| S7 | Wiktionary (vis, bos, deus, senex, Iuppiter, domus, Appendix:Latin irregular verbs) | Independent cross-check of irregular paradigms. All agreed with S1. | Secondary |

Method note: I extracted the text of the papers and keys with `pypdf` and tallied the morphology questions. I did **not** trust any key blindly: where two keys disagreed I resolved it from S1 and recorded it (§1.5).

---

## 1. How the exam actually tests morphology (evidence from the papers)

### 1.1 Structure and weight
- The paper is out of 100. Θέμα Α (translation, 20) / Β (introduction + vocabulary/etymology, 20) / **Γ (morphology, 30)** / Δ (syntax, 30). In 2020 (old numbering) the same blocks were Β (morphology) and Γ (syntax).
- **Θέμα Γ = 30 points, entirely forms of words that appear in the two Latin passages printed on the paper (numbered texts of the school book)** (the passages are numbered texts from the book, e.g. "κείμενα 23 και 38" in 2023, "24 και 39" in 2025). Typical split: **Γ1 = 15 points (nouns, adjectives, pronouns, adverbs, ~11-13 items), Γ2 = 15 points (verbs: Γ2α = 6 points identify-then-transform, Γ2β = 9 points, ~8-9 single-point verb items).**
- So a candidate faces **about 25 (24-28) separately scored morphology items per paper, in 3 hours with translation and syntax too.** Speed and certainty on mechanical forms is worth a lot. This is a perfect fit for a drill app.
- 2023 variant: Γ1α = "find 4 third-declension nouns in the passage and put them in the genitive plural" (4 pts) + Γ1β (11 pts); resit 2023: Γ1α = "find the 3 pronouns and put them in the other number" (6 pts).
- Answers are accepted if "τεκμηριωμένη" (justified) (exam rubric, instruction 4), so alternative correct forms (iis/eis/is, sci(v)isse) are fine.

### 1.2 What a Γ-item looks like (this IS the skill to train)
The student is given a word **as it appears in the passage** and an instruction naming one cell relative to that form. Real instructions (Greek, verbatim from the papers):
- Nouns/adj/pron: «τη γενική πτώση στον άλλο αριθμό» / «την αιτιατική πτώση στο ίδιο γένος, στον άλλο αριθμό» / «τους άλλους δύο βαθμούς του επιθέτου στο ίδιο γένος, στον ίδιο αριθμό και στην ίδια πτώση» / «τους τρεις βαθμούς του επιρρήματος» / «τον συγκριτικό βαθμό του επιρρήματος».
- Verbs: «το β΄ ενικό πρόσωπο της προστακτικής του ενεστώτα, στην ίδια φωνή» / «στην άλλη φωνή» / «την αιτιατική στο σουπίνο» / «τη γενική του γερουνδίου» / «το α΄ πληθυντικό πρόσωπο της υποτακτικής του υπερσυντελίκου» / «τη μετοχή μέλλοντα στην ονομαστική ενικού, στο θηλυκό γένος» / «το απαρέμφατο του ενεστώτα και του παρακειμένου» / «το β΄ ενικό πρόσωπο της οριστικής του ενεστώτα στην ενεργητική περιφραστική συζυγία».
- Γ2α pattern: «εντοπίστε τα 3 αποθετικά / τα 3 ρήματα σε υποτακτική / τις 3 μετοχές / τα απαρέμφατα / τα 2 γερούνδια ... και στη συνέχεια γράψτε το απαρέμφατο ενεστώτα / το β΄ ενικό του ενεστώτα ...». So the student must first **classify forms in running text** (which verb is a deponent? which is subjunctive?), then transform.

**Design consequence:** teach the instruction vocabulary itself ("ίδιο/άλλο γένος, αριθμός, φωνή") as a mini-game, and always start from a form in a sentence, not from a dictionary headword.

### 1.3 What was asked, by year (June main sessions; resits listed separately)
Full item list with answers is in `research/morphology-past-items.json`. Counts below are items I counted in the papers.

| Type | 2020 (old system) | 2022 | 2023 | 2024 | 2025 | 2026 |
|---|---|---|---|---|---|---|
| Nominal items (noun/adj/pron/adverb) in Γ1 | 11 | 13 | 11 (4 + 7) | 11 | 11 | 12 |
| **Adjective comparison** | squalidā (comp. pl.), similem (superl.) | magna (abl. comp.) | ingentem (other 2 degrees) | clari (other 2 degrees) | viliorem (other 2 degrees) | Aequum (other 2 degrees) |
| **Adverb comparison** | diu (comp.) | celeriter (other 2) | diu (other 2) | multi (all 3 degrees of the adverb) | aperte (other 2), optimum (comp.) | certissimum (positive) |
| **Supine** | abl. instituerat | acc. attulissent | abl. moverat | abl. intellego | abl. Accipe | acc. accepērunt |
| **Gerund** | dat. venīre; abl. petit | abl. adīre | gen. + abl. petit | gen. deprehensi sunt | dat. venisset | gen. scripsit |
| **Imperative** | dic, avete, concipere (pass.) | fite, dic, abice | fac + facito | dic | fac | conferto (fut.) |
| **Participle** | redīret → redeuntis; Γ2 | uterētur → utens / usurus / usus | redībat → redeuntis | nascentem → future part.; Γ2α | 3 deponents → pres. part. fem.; credis → perf. part. | aberat → absens; Γ2α: 3 participles |
| **Infinitive** | interfuit, emere | mirāti sunt (fut.) | egrediebātur | fore | putas (pass.), sciebat (perf.) | Γ2α: participle → inf.; discessisse (as source) |
| **Deponent in running text** | - | uterētur, mirāti sunt | secūta est, egrediebātur | consecūti erant | indignātus, mentiebātur, utitur | elapso, molientem |
| **Periphrastic conjugation** | - | - | erat ascensūrus | - | agunt → acturus es (act. periphr.) | - |
| **Irregular / compound of sum / defective** | interfuit, Ave, fēcit→fieret | possit (possum) | fuerat | fore | posset (possum) | aberat, conferre, discessisse |
| **Subjunctive forms** | plpf., imperf. (pass.) | plpf. | plpf., perf. | pres., plpf. | pres. | pres., plpf. |
| **Future / future perfect indicative** | persedēbat → fut. perf. | gerunt → fut. perf.; cernitur, curat → fut. | orabat, impetravit, conduxit, secūta est → fut. | - | - | interficiendo → fut. |

**Resits (Επαναληπτικές) 2022-2026** repeat the same shape and add: `esse` → 3pl future imperative `sunto`, `mallet` → plpf subj `maluisset`, `nolis` → `non vultis` (2022); `moritūrum` → `morerer`, `miserātur` → future infinitive (2022); `habērem` → perf subj, `pati` → `pateris`, `oppugnarētur` → gerundive gen. sg. fem. (2023); `fiunt` → `fi`, `gignuntur` → `genitus`, `vis` → `velit`, `sit` → `fueritis`, `meliōra` → 3 degrees of adverb (`bene, melius, optime`) (2024); `rediit` → `redeo`, `dicitur` → `dic`, `gerendi` → supine `gestum`, `est factus` → `fiunt` (2025); `est` → infinitives, `obsequātur` → pres. part. (2026).

**What the counts say (honestly):** in each of the six main papers there is at least one supine, one gerund, one imperative, one adverb-degree item and one adjective-degree item. A fixed core also recurs: the nominal "other number / other case" transformations (about 11-13 per paper), subjunctive tenses of ordinary verbs, and 1-3 irregular verbs. Cheap points that students lose because they are *not* in the regular conjugation tables: supine, gerund, imperative (`dic duc fac fer`), adverb degrees, `possum`/compounds of `sum`.

### 1.4 Which units are examined
- The Γ΄ book is *Τεύχος Β΄* units **XXI-L** (grammar of Β΄ Λυκείου units I-XV is assumed). Papers use texts numbered ~21-50 and ask morphology on forms in them, but **the forms themselves can be from any paradigm the school grammar teaches** (e.g. 2022 asked `pondus` and `Fit` in the main paper, and `fores`, `mallet`, `nolis` in the resit, all of which come from earlier units than XXI-L). Therefore: **cover the whole of S1 morphology (§§14-103) for an exam-prep app**, weighted by [A].
- **Official examined material for June 2027** (Υ.Α. 90176/Δ2/06-07-2026, ΦΕΚ Β΄ 4210), as read by a sibling research agent from the ministry PDF (see `research/syllabus.md` §3): texts = Τεύχος Α΄ lessons XVI-XX + Τεύχος Β΄ XXI-L; **"No exclusions are listed for Latin"**; grammar = *everything taught in Β΄ Λυκείου (lessons I-XV)* + an 18-point Γ΄ list that includes, for morphology: passive present of the 3rd conj. + deponents of the 3rd; passive future of the 3rd/4th conj.; **fio**; passive imperfect and deponents; perfect passive participle; **compounds of do**; perfect active infinitive; **quidam, quaedam, quiddam/quoddam**; **bos**; perfect-system passive; perfect passive infinitive; **superlative incl. -er and -lis**; **cado/caedo and compounds**; present/future participles (and of deponents); **active periphrastic**; future infinitive; subjunctive (all four tenses, both voices); **imperatives** (act. pres./fut., pass. pres./fut.); comparison (incl. irregular, `maior natu`/`minor natu`, periphrastic); formation and comparison of adverbs; **eo**; **gerund, gerundive, passive periphrastic, supine**; **pronominal adjectives**. So every [A] item in this file is inside the official list, and `bos` is **examinable** (it was excluded only in 2018-20). I did not open the decision text myself: second-hand but consistent with the papers.
- Past practice (2018-20 syllabus table): numbered subset of texts with a few explicit exclusions (https://tanea.gr/wp-content/uploads/2019/05/%CE%A3%CF%8D%CE%B3%CE%BA%CF%81%CE%B9%CF%83%CE%B7_%CE%95%CE%A0%CE%99%CE%9B%CE%9F%CE%93_13_%CE%9B%CE%91%CE%A4%CE%99%CE%9D%CE%99%CE%9A%CE%91_%CE%97%CE%9C2.pdf), e.g. the `bos` paragraph of text 18. Not valid for 2027.

### 1.5 Answer keys are not reliable: errors I found (so the app must carry its own verified data)
1. 2022 key (and reported by esos.gr): genitive sg fem of `ille` printed as "Ilius"; correct **illius**.
2. 2025: two keys disagree on `venisset` (dative of gerund): one prints "veniendo", another "veniendi". Correct dative = **veniendo** (S1 §75: gen -ndi, dat -ndo).
3. 2023 key: `ascencuri fuerint` (typo for **ascensuri fuerint**), `pentendo` (**petendo**); the Γ1α line prints "sonori — sonorum", but the passage contains `sorōris` (soror, sororis), so the intended item is almost certainly **sororis → sororum** (extraction/typing artefact; another key reads "sororum").
4. 2024 key `quidam → cuiusdam` is only right if the passage form is a plural; context-dependent. Same trap for `idem`, `omnia`, `hoc`.
5. 2022: key accepts "miraturos esse / miratos fore" for «το απαρέμφατο του μέλλοντα και του συντελεσμένου μέλλοντα»; the future-perfect infinitive (`miratos fore`) is **not in the S1 paradigm tables**. UNSURE how the ministry will mark it again; low priority.
6. Where a *question itself* was disputed: 2026 Δ2β(γ) «εμπρόθετη γενική του γερουνδίου» (reader comment on panellinies.net that gerund should be gerundive: correct Latin is `eius obiurgandae causa` by gerundive attraction); 2011 Γ2β (praeripuisset→praeripuerit complaint). Syntax topic, but it shows that "τεκμηριωμένη απάντηση" matters.

---

---

## 2. Nouns (Τζάρτζανος §§12-34)  [A] unless marked

### 2.1 The five declensions in one screen
Identify the declension **only** from the genitive singular. Stem = genitive minus ending. Always teach nominative + genitive together.

| Decl. | Gen. sg. | Nom. sg. patterns | Gender | Nom pl | Gen pl | Dat/Abl pl | Acc pl |
|---|---|---|---|---|---|---|---|
| 1st | -ae | -a | f. (m.: nauta, poeta, agricola, scriba, incola, pirata...) | -ae | -arum | -is | -as |
| 2nd | -ī | -us, -er, -ir (vir), -um | m., f. (trees, humus, alvus, vannus, Greek: methodus), n. (-um; vulgus, virus, pelagus) | -ī / -a (n.) | -ōrum | -īs | -ōs / -a (n.) |
| 3rd | -is | many (-s, -x, -or, -o, -er, -e, -al, -ar, -us, -en...) | m., f., n. | -ēs / -a, -ia (n.) | **-um or -ium** | -ibus | -ēs (-īs) / -a, -ia |
| 4th | -ūs | -us (m., f.), -ū (n.) | m. (f.: manus, domus, porticus, tribus, acus, idus) | -ūs / -ua | -uum | -ibus (-ubus) | -ūs / -ua |
| 5th | -ēī / -ĕī | -ēs | f. (dies m./f.; meridies m.) | -ēs | -ērum | -ēbus | -ēs |

Singular paradigm cells that students mix up (neuter rule: **nom = acc = voc**, always; plural ends in **-a**):
- 1st: mensa, mensae, mensae, mensam, mensa (voc), mensā (abl, long).
- 2nd: dominus, domini, domino, dominum, **domine**, domino; puer, pueri...; ager, agri (e dropped); donum, doni, dono, donum, donum, dono.
- 3rd: dux, ducis, duci, ducem, dux, duce; pastor, pastoris; homo, hominis, hominem; urbs, urbis, urbem, urbe; civis, civis, civi, civem, civi/cive.
- 4th: fructus, fructus, fructui, fructum, fructus, fructu; cornu, cornus, cornu, cornu, cornu, cornu; pl. cornua, cornuum, cornibus.
- 5th: dies, diei, diei, diem, dies, die; res, rei, rei, rem, res, re.

### 2.2 First declension traps
- `dea`, `filia`: dat/abl pl **deabus, filiabus** (to avoid clash with deis/filiis of deus/filius). [S1 §15]
- `familia`: gen sg also **-as** in fixed phrases: pater familias, mater familias. [S1 §15]
- Archaic gen -āī (aulāī) and gen pl syncope (drachmum, = drachmarum) exist; [B], recognise only.
- Masculine in -a: nauta, agricola, poeta, scriba, incola, advena, collega, pirata; Greek: Aeneas (acc. Aenean), Anchises (voc. Anchise), Penelope. [S1 §§14-16]
- 1st-declension nouns of Greek origin in -ēs (Alcibiades) go 3rd declension in Latin: Alcibiades, Alcibiadis. [S1 §16]

### 2.3 Second declension traps
- Vocative: **only -us nouns change** (dominus → domine; populus → **popule**, 2026 key). Proper names in **-ius** and `filius`, `genius` make vocative in **-ī** (Vergili, Tulli, fili; `mi fili`, and possessive `meus` voc. = **mī**). Nouns in -er, -ir, -um: voc = nom. `deus` voc = deus (rare in classical Latin; Late Latin dee). [S1 §19, §57]
- **-ius / -ium gen sg** may contract: consilii / consili, ingenii / ingeni, Vergilii / Vergili. Accept both. [S1 §19]
- -er nouns split in two groups [S1 §17]: **keep the e** (decline like `puer`): puer, gener, socer, vesper, liberi (children), and `vir` (viri); **drop the e** (decline like `ager`): ager-agri, liber (book)-libri, caper-capri, culter-cultri, taber. Same split in adjectives: `liber, libera, liberum` keeps e (liberi, liberae), `niger, nigra, nigrum` drops it (nigri); miser, asper, tener, satur, and -fer/-ger compounds keep e; aeger, creber, pulcher, ruber, sacer drop it. [S1 §38]
- `locus` (loci m. / **loca** n. pl.), `iocus` (ioci/ioca), `frenum` (frena/freni): heterogeneous plurals. [S1 §34]
- Neuter in -us: `vulgus`, `virus` (singular only), `pelagus` (pl. **pelage**). [S1 §17]
- Feminine 2nd-decl in -us: trees (malus, ficus, pirus, pinus, fagus), humus, alvus, vannus, Greek names (methodus, Aegyptus). [S1 §17]
- **`deus`** [A-adjacent]: sg deus, dei, deo, deum, (voc deus), deo; **pl nom/voc dei, dii, di; gen deorum, deum; dat/abl deis, diis, dis; acc deos.** All variants accepted. [S1 §19; Wiktionary S7 agrees]
- **Locative** (S1 syntax/S2 unit XXVIII): 1st/2nd decl. singular names of towns = gen-looking: **Romae, Corinthi, Tarenti**; 3rd decl. towns and all plural names = ablative-looking: **Athenis, Carthagine (Carthagini also seen), Gadibus**; `domi`, `humi`, `ruri` (also `rure`), `militiae`, `belli`. 2026 Δ1β answer key: Romae, Athenis, Carthagine. [A]

### 2.4 Third declension: the hard 40 % of the exam (Γ1) [A]
**Step 1: stem from genitive.** nox, noct-is; lex, leg-is; homo, homin-is; corpus, corpor-is; iter, itiner-is; pater, patr-is.

**Step 2: i-stem or not?** This decides **gen pl (-ium/-um), abl sg of adjectives, nom/acc pl of neuters (-ia/-a), acc pl (-is/-es).**
- *Parisyllabic* (same number of syllables in nom. and gen.) m./f. in **-is / -es** → **-ium**: civis-civium, navis-navium, hostis-hostium, collis-collium, nubes-nubium, aedes-aedium, finis-finium.
  - **Exceptions (take -um): canis → canum, iuvenis → iuvenum, sedes → sedum** (2023 key `sede → sedum` ✓). [S1 §26,4Α]
- *Imparisyllabic* with stem ending in **two consonants** → **-ium**: urbs-urbium, arx-arcium, pons-pontium, nox-**noctium** (2020, 2023), mons-montium, gens-gentium, mens-mentium, ars-artium, pars-partium, mors-mortium. [S1 §26,4Β]
  - **Exceptions (-um): pater/mater/frater → patrum, matrum, fratrum.** [S1]
- Also **-ium by exception** (single-consonant stems): `dos` → **dotium** (2026 key), `fauces` → faucium, `fraus` → fraudium, `lis` → litium, `mus` → murium, `nix` → **nivium**, `vires` (pl. of vis) → **virium**, ethnic names in -as/-is (Arpinates → Arpinatium, Samnites → Samnitium), `nostras` → nostratium, `optimates` → optimatium, `penates` → penatium. [S1 §26,4Β β΄]
- **Neuters in -e, -al, -ar:** abl sg **-ī** (mari, animali, calcari), nom/acc pl **-ia** (maria, animalia, calcaria), gen pl **-ium** (marium, animalium). [S1 §26] Other neuters: abl sg -e (nomine, corpore, tempore, capite), nom/acc pl **-a** (nomina, corpora, tempora, capita, opera, flumina), gen pl **-um**.
- **Everything else (consonant stems): -um**: regum, ducum, legum, militum, hominum, consulum, oratorum, pedum, pastorum, principum, virginum, mulierum.

**Step 3: accusative sg -im (rare), abl sg -ī (rare).** Acc. sg **-im** only for: `febris, puppis, sitis, turris, tussis, securis` and river/city names in -is (Tiberis → Tiberim, Neapolis). Their abl sg is **-i** (turri, febri). Optional -e/-i: `civis, ignis, navis, imber` (civi, igni, navi, imbri also occur; `igni` is the fixed form in "ferro et igni"). [S1 §26]

**Step 4: what students get wrong (verified by real Γ1 items):**
| Item (paper) | Instruction | Right answer | Plausible wrong answer (my judgement from the rules, not measured) |
|---|---|---|---|
| `urbe` (2024) | gen other number | **urbium** | urbum |
| `nocte` (2020, 2023) | gen pl | **noctium** | noctum |
| `dotem` (2026) | gen other number | **dotium** | dotum |
| `sede` (2023) | gen pl | **sedum** | sedium |
| `pater` (2022 resit) | gen pl | **patrum** | patrium |
| `rus` (2026) | acc other number | **rura** (rus, ruris n.) | rus (not treating it as neuter) |
| `pondus` (2022) | nom other number | **pondera** | pondus |
| `lumen` (2025 resit) | abl other number | **luminibus** | lumina |
| `mugītus` (2023 resit) | dat same number | **mugitui / mugitu** (4th decl.; if the form is read as pl.: mugitibus) | mugito (treated as 2nd decl.) |
| `res ipsa` (2023) | gen same number | **rei ipsius** | res ipsae |
| `carcere` (2024) | voc same number | **carcer** | carcere |
| `ebore` (2025) | voc same number | **ebur** | ebore |
| `pedes` (2022 resit) | voc sg | **pedes** (voc = nom in 3rd) | pede |
| `fores` (2022 resit) | gen pl | **forium** by the i-stem rule (UNSURE what the key used; see §2.7) | forum |
| `caedes` (2022) | dat same number | **caedi** | caedes |
| `tempus` (2022 resit) | voc other number | **tempora** | |

**Vocative rule:** in the 3rd declension (and 4th, 5th, neuter 2nd) **voc = nom**. Only 2nd-decl nouns in -us (and the -ius/mi cases) differ.

**Stem-change patterns worth a mini-game (nom → gen):**
- **-x**: rex-regis, lex-legis, dux-ducis, pax-pacis, nox-noctis, vox-vocis, lux-lucis, iudex-iudicis, grex-gregis
- **-s after consonant**: urbs-urbis, mons-montis, pons-pontis, gens-gentis, mens-mentis, pars-partis, mors-mortis, ars-artis, dens-dentis, fons-fontis
- **-o**: homo-hominis, virgo-virginis, imago-imaginis, ordo-ordinis, sermo-sermonis, leo-leonis, praedo-praedonis, ratio-rationis, actio-actionis
- **-or / -os rhotacism**: mos-moris, flos-floris, honor-honoris, corpus-corporis, tempus-temporis, genus-generis, opus-operis, mus-muris, tellus-telluris, lepus-leporis
- **-t / -d / -c / -p stems** (lost before -s): miles-militis, eques-equitis, pedes-peditis, comes-comitis, princeps-principis, civitas-civitatis, virtus-virtutis, lapis-lapidis, caput-capitis, custos-custodis, heres-heredis
- **syncope**: pater-patris, mater-matris, frater-fratris, imber-imbris, venter-ventris, September-Septembris (also mensis names)
- **no syncope**: consul-consulis, mulier-mulieris, uxor-uxoris, soror-sororis, aer-aeris, aether-aetheris
- **completely irregular**: iter-itineris, bos-bovis, caro-carnis, nix-nivis, sus-suis, grus-gruis, senex-senis, Iuppiter-Iovis, vis-(vim)-vi, os-oris (mouth) vs os-ossis (bone, gen pl ossium), cor-cordis (gen pl cordium) [C]  [S1 §§23-27]

### 2.5 Fourth and fifth declension
- 4th: gen sg = nom pl = acc pl spelling (-us) but different length; **dat sg -ui (or -u) for -us nouns**; neuter cornu: all sg cells = cornu, pl cornua/cornuum/cornibus. **-ubus** (not -ibus) in dat/abl pl of `artus` (limbs), `tribus`; `lacus` and `portus` take both -ibus/-ubus. [S1 §30]
- **`domus`** [S1 §30, Wiktionary S7]: nom domus; gen **domus** (also domi, locative-looking); dat domui (domo); acc domum; abl **domo** (also domu); pl nom domus; gen **domuum** or domorum; dat/abl **domibus**; acc **domos** or domus. Locative **domi** (adverb: "at home"). Feminine.
- Feminine 4th-decl in -us: **manus, domus, porticus, tribus, acus, idus** (pl. only). [S1 §31]
- 5th: **only `dies` and `res` have a full plural** (dies, dierum, diebus; res, rerum, rebus); the others have only nom/acc/voc pl (acies, species, facies, series, effigies; 2020 asked acc pl effigiei → **effigies**). Gen/dat sg -ei: **long ē after a vowel** (diēī, speciēī), **short after a consonant** (rĕī, fidĕī, spĕī). `dies` is f. when it means "time/fixed date" (certa dies); m. otherwise; `meridies` always m. [S1 §§32-33]
- `requies` mixes 3rd and 5th (acc. requiem, abl. requie). [S1 §34]

### 2.6 Gender: the minimum rules (these drive adjective/pronoun agreement in Γ1)  [C unless S1 says]
(General grammar, e.g. Allen & Greenough §§29-32; S1 gives the lists in §§14,17,31,33.) Use as hints, never as the main thing to learn.
- 3rd decl. masculine: -or (not arbor f., uxor f., soror f.; and neuters aequor, marmor, cor), -os (flos, mos; but os n.), -er (pater, imber), -o (-onis: sermo, leo...), -x of persons (rex, dux, iudex).
- 3rd feminine: -do/-go (-inis) (imago, virgo; but **ordo m.**), -io abstract (ratio, regio, legio), -tas, -tus (-tutis), -s after consonant (urbs, pars, mors, gens, mens, ars; but **pons, mons, fons, dens are m.**), -x (lex, lux, nox, pax, vox) ...
- 3rd neuter: -e, -al, -ar, -men, -us (-eris/-oris), -ma (-matis, Greek), -ut (caput), -ur (robur, fulgur).
- Exceptions that Greek students must memorise (all appear in texts): **dies (m./f.), finis (m.), fons (m.), mons (m.), pons (m.), hostis (c.), civis (c.), canis (c.), sol (m.), mos (m.), flos (m.), iter (n.), pecus (n.), rus (n.), vas (n.)**.

### 2.7 Irregular, defective and "odd" nouns (S1 §§26-27, 34) [A for starred]
| Noun | Forms (singular; plural) | Notes |
|---|---|---|
| **vis*** f. | vis, (gen/dat missing), **vim, vi**; pl **vires, virium, viribus, vires, viribus** | S1: "gen και δοτ. λείπουν". `vires` = strength, forces. Do not confuse with `vis` = 2nd sg of `volo`. |
| **bos*** m./f. | bos, bovis, bovi, bovem, bove; pl boves, **boum**, **bubus / bobus**, boves | `bos` paragraph was excluded in 2018-20, but the 2026-27 decision lists **"το ουσιαστικό bos" as examinable** (see §1.4). |
| **Iuppiter*** | Iuppiter, **Iovis, Iovi, Iovem**, Iuppiter, **Iove** | sg only. |
| **senex*** | senex, senis, seni, senem, senex, sene; pl senes, **senum**, senibus | comparative `senior` (not "senex-ior"). |
| **iter*** n. | iter, **itineris**, itineri, iter, itinere; pl itinera, itinerum, itineribus | |
| **caro** f. | caro, **carnis**, carni, carnem, carne; pl carnes, carnium, carnibus | |
| `sus`, `grus` | gen **suis, gruis** (u-stems) | S1 §21 |
| **domus*, deus*** | see 2.3, 2.5 | |
| **locus** | sg locus, loci; pl **loci** (positions in text) / **loca** (places) | |
| **nemo*, nihil** | nemo, nullius, nemini, neminem, nullo/nulla re; nihil, nullius rei, nulli rei, nihil, nulla re | 2024 resit: `neminem` → dat **nemini**. |
| **fores*, foris** | `fores` = double door, plural only | 2022 resit asked its gen pl. S1 does not list it; rule-based answer **forium** (i-stem, -is nom sg) vs forum. UNSURE which form the key used. |
| Plurale tantum | arma -orum, **castra -orum** (sg castrum = fort), moenia -ium, insidiae, divitiae, nuptiae, tenebrae, indutiae, liberi -orum (children), maiores, posteri, fauces -ium, viscera, **litterae** (letter/epistle; sg littera = a letter of the alphabet), **copiae** (troops; sg copia = abundance), **aedes** (pl. house; sg temple), Athenae, Alpes, Saturnalia | Distributive numerals (bini, terni) with pl.-tantum nouns: `bina castra`. |
| Singularia tantum | proper names (Roma, Sulla, Tiberis), abstract (iustitia, pietas), materials (aurum, argentum, aes), nature (sol, luna, hiems, ver) | |
| Defective | **fas, nefas** (nom/acc only), **fors, forte**, **instar**, **mane**, **pondo** (abl), **sponte** (abl), **dicis** (gen: dicis causa), **vicem, vice, vices** (no nom sg), **infitias** (acc pl: infitias ire) | S1 §34 |
| Heteroclite | vas, vasis (pl **vasa, -orum**); iugerum (pl iugera, -um, -ibus); requies | |
| Doublets | materia/materies, plebs/plebes, elephans/elephantus, penus | |
| Greek 3rd-decl | Plato, Platonis...; aer (acc. aera), aether, Marathon (acc. Marathona), Cyclops (acc. Cyclopa, pl. Cyclopes, acc. Cyclopas) | S1 §28 |

### 2.8 Nouns: what to drill first
1. Genitive + declension ID, then 2. gen pl (-um/-ium) as a *sorting game*, 3. neuter pl, 4. voc/loc traps, 5. the 15 odd nouns above.

---

## 3. Adjectives, comparison, adverbs (S1 §§35-54, S2 units XIX, XXVI, XXVII)

### 3.1 Classes
| Class | Pattern | Examples | Declension |
|---|---|---|---|
| 1st/2nd, 3 endings | -us, -a, -um | bonus, altus, longus | m./n. like dominus/donum, f. like mensa |
| 1st/2nd, -er | liber, libera, liberum / niger, nigra, nigrum | miser, asper, tener / aeger, pulcher, sacer, ruber, creber | e kept vs dropped (see 2.3) |
| 3rd, 3 endings | acer, acris, acre | celer, celeris, celere; celeber, saluber, equester, pedester | abl -i, gen pl -ium, n. pl -ia |
| 3rd, 2 endings | -is, -e | fortis, facilis, gravis, brevis, omnis | same |
| 3rd, 1 ending | felix, prudens, ingens, audax, vetus, dives, pauper, princeps, memor, inops | stem from genitive: felic-is, prudent-is | see 3.2 |
| Comparatives | -ior, -ius | altior, altius | 2 endings; **abl -e, gen pl -um, n. pl -a** |
| Participles (as adjectives) | amans, amatus, amaturus, amandus | | see §6.8 |

Special: `satur, satura, saturum`; indeclinable `frugi`, `nequam`; `potis/pote`; pronominal adjectives **unus, solus, totus, ullus, nullus, alius, alter, uter, neuter** (gen **-ius**, dat **-i**: unius, uni; totius, toti; alterius; nullius, nulli) [S1 §62].

### 3.2 Third-declension adjective traps [A]
- **Abl sg -ī, gen pl -ium, n. nom/acc pl -ia**: facili, facilium, facilia; felici, felicium, felicia; ingenti, ingentium, ingentia. 2025 key: `tale` → acc pl `talia`; `omnia` is nom/acc pl n.
- **Exceptions (abl -e, gen pl -um, n. pl -a)**: **all comparatives** (altiore, altiorum, altiora), and the one-ending adjectives **compos, dives, particeps, pauper, princeps, superstes, vetus**: divite/divitum (n. pl **ditia**), vetere/veterum/**vetera**, paupere/pauperum, principe/principum. `plures, plura` → gen pl **plurium**; `complures` → complurium. `inops`, `memor`: abl -i but gen pl -um (inopum, memorum). [S1 §41]
- Present participles as verbs: abl -e (Tarquinio regnante); as adjectives: abl -i (in praesenti tempore). [S1 §43]
- Single-ending adjectives need the genitive to decline: ingens, ingentis; vetus, veteris; dives, divitis.

### 3.3 Comparison [A, tested almost every year]
Formation (stem = positive minus the genitive ending): **comparative = stem + -ior (m./f.), -ius (n.); superlative = stem + -issimus, -a, -um.** Examples: altus-altior-altissimus; fortis-fortior-fortissimus; felix-felicior-felicissimus; ingens-ingentior-ingentissimus; liber-liberior-**liberrimus**.
1. **-er adjectives → superlative -rimus** (add to the *nominative*): pulcher-pulcherrimus, acer-**acerrimus**, celer-**celerrimus**, miser-**miserrimus**, liber-**liberrimus**, pauper-pauperrimus; also **vetus-veterrimus**; `maturus` has maturissimus/maturrimus. [S1 §47,2]
2. **Six adjectives in -ilis → -limus**: **facilis, difficilis, similis, dissimilis, humilis, gracilis** (facillimus, simillimus, humillimus, gracillimus). Other -ilis adjectives are regular: nobilis-nobilissimus, utilis-utilissimus. 2020 key: similem → **simillimum**. [S1 §47,1]
3. **-dicus, -ficus, -volus (and providus) → -entior, -entissimus**: maledicus-maledicentior-maledicentissimus; magnificus-magnificentior-magnificentissimus; benevolus-benevolentior-benevolentissimus. [S1 §48]
4. **Vowel + -us (-eus, -ius, -uus) → periphrastic** magis/maxime + positive: idoneus, dubius, pius, vacuus, arduus, strenuus. **But -quus is regular** (antiquus-antiquior-antiquissimus). [S1 §52]
5. **Irregular (memorise as pairs):** [S1 §§49-51]
   | Positive | Comparative | Superlative |
   |---|---|---|
   | bonus | melior, melius | optimus |
   | malus | peior, peius | pessimus |
   | magnus | maior, maius | maximus |
   | parvus | minor, minus | minimus |
   | multus (sg) / multi (pl) | **plus** (n. noun/adv.) / **plures, plura** | plurimus / plurimi |
   | (dives) | divitior / ditior | divitissimus / ditissimus |
   | (iuvenis) | **iunior** | (natu minimus) |
   | (senex) | **senior** | (natu maximus) |
   | (nequam) | nequior | nequissimus |
   | (frugi) | frugalior | frugalissimus |
   | vetus | vetustior | veterrimus |
   | novus | recentior (of recens) | novissimus |
   | sacer | sanctior (of sanctus) | sacerrimus |
   | exterus | exterior | extremus / extimus |
   | inferus | inferior | infimus / imus |
   | superus | superior | supremus / summus |
   | posterus | posterior | postremus / postumus |
   | (citra) | citerior | citimus |
   | (intra) | interior | intimus |
   | (prae) | prior | primus |
   | (prope) | propior | proximus |
   | (ultra) | ulterior | ultimus |
   | (potis) | potior | potissimus |
   | (deterior, no pos.) | deterior | deterrimus |
   | (ocior, no pos.) | ocior | ocissimus |
   | alacer | alacrior | (none) |
   Adjectives of material/place/time/kin/absolute meaning have **no degrees**: aureus, ferreus, marinus, nocturnus, paternus, romanus, mortalis, immortalis, omnipotens, insomnis. [S1 §50]
6. **Comparative syntax with forms:** second term = ablative or `quam`+same case; `multo`/`paulo` strengthen; `maior natu`, `minor natu` = older/younger. [S2 XXVI-XXVII]

### 3.4 Adverbs from adjectives and their comparison [A: every main paper 2020-2026]
**Formation of the positive** [S2 unit XXVI §5, S1 §53]:
- 1st/2nd decl. adjective → **-e** on the stem: clarus → clare; liber → libere; pulcher → pulchre; miser → misere; modestus → modeste; aequus → aeque; pravus → prave.
- 3rd decl. → **-ter** (-iter): brevis → breviter; fortis → fortiter; celer → celeriter; acer → acriter; felix → feliciter; **audax → audacter**.
- Stems in **-nt-**: only **-er** (prudens → prudenter; sapiens → sapienter; ingens → ingenter; vehemens → vehementer). [S1: "φαινομενικά προσθέτουμε μόνο -er"]
- Irregular positives: bonus → **bene**, malus → **male**, magnus → **magnopere** (also magno opere), multus → **multum**, parvus → **paulum / parum**, facilis → **facile**. Ablative/neuter forms used as adverbs: primo/primum, subito, raro, certo/certe (both exist), vero, falso, tuto, sero, partim, statim.
- Others: diu, saepe, nuper, prope, iam, mox, nunc, tum, cras, hodie, heri, semper, numquam, saepe, nimis, satis, valde, tam, sic, ita, vix, ibi, hic (here), illic, inde, unde, ubi.

**Comparison of adverbs** [S1 §§53-54]:
- **Comparative adverb = neuter accusative singular of the comparative adjective**: clarius, celerius, facilius, apertius, diutius, saepius, prudentius.
- **Superlative adverb = superlative stem + -e**: clarissime, celerrime, facillime, acerrime (from acer), apertissime, diutissime, saepissime, prudentissime, pulcherrime.
- Irregular adverb ladders (S1 §§53-54), the *entire* list is examinable:
   | Positive | Comparative | Superlative |
   |---|---|---|
   | bene | melius | optime |
   | male | peius | pessime |
   | multum | plus | plurimum |
   | paulum / parum | minus | minime |
   | magnopere | magis | maxime |
   | diu | diutius | diutissime |
   | saepe | saepius | saepissime |
   | prope | propius | proxime |
   | nuper | - | nuperrime |
   | cito [C] | citius | citissime |
   | longe (S2) | longius | longissime |
   | facile | facilius | facillime |
   | (potis) | potius | potissimum |
   | (prae) | prius | primum / primo |
   | merito | - | meritissimo |
   | satis | satius | - |
   | (deter-) | deterius | deterrime |
   | (oc-) | ocius | ocissime |
   | secus | setius / secius | - |

Verified exam items: `aperte` → apertius, apertissime (2025); `diu` → diutius, diutissime (2023); `celeriter` → celerius, celerrime (2022); `multi` → **multum, plus, plurimum** (2024); `optimum` (adverbial) → comparative **melius** (2025); `certissimum` → positive **certe** (2026); `clara` (adjective) → adverb degrees **clare, clarius, clarissime** (2022 resit); `meliora` (adjective) → adverb degrees **bene, melius, optime** (2024 resit). **Trap: asked "adverb" but the word in the text is an adjective or an adverbial neuter, so first find the adjective.**

### 3.5 What adjective drills should look like
Given a form in context: (a) find positive, (b) say class and stem, (c) produce the asked degree/case/gender/number. Always ask "which of the three degrees is this form?" first; a quarter of students answer a *different* degree than the one asked.

---

## 4. Numerals (S1 §§65-73)  [B: not asked in 2020-2026 morphology, tested through translation and vocabulary]

- Cardinals: unus, duo, tres, quattuor, quinque, sex, septem, octo, novem, decem; undecim, duodecim, tredecim, quattuordecim, quindecim, sedecim, septendecim, duodeviginti, undeviginti, viginti; triginta, quadraginta, quinquaginta, sexaginta, septuaginta, octoginta, nonaginta, centum; ducenti ... nongenti; mille (indeclinable, singular) / **milia** (neuter noun: duo milia hominum). [S1 §66]
- **Declined:** `unus` (unius, uni, ...), `duo, duae, duo` (duorum, duabus, duobus...; `ambo` same), `tres, tria` (trium, tribus), hundreds (-ti, -tae, -ta), `milia`. **4-100 are indeclinable.** [S1 §68]
- Ordinals: primus, secundus (alter), tertius, quartus, quintus, sextus, septimus, octavus, nonus, decimus, undecimus, duodecimus, vicesimus, centesimus, millesimus (adjectives, -us -a -um). 13-19: tertius decimus ...; 21: unus et vicesimus / vicesimus primus.
- **Distributives** (bini, terni, quaterni, singuli): answer "ανά πόσους"; used as cardinals with pluralia tantum (`bina castra`) and in multiplication. Gen pl in -um (binum, senum), except singulorum. [S1 §§69-70]
- **Numeral adverbs**: semel, bis, ter, quater, quinquies/quinquiens, sexies, ... centies. [S1 §73]
- 18, 19, 28, 29 ... by subtraction: duodeviginti, undeviginti, duodetriginta. Compound numbers <100: `unus et viginti` or `viginti unus`; >100: bigger first `centum et viginti`. [S1 §71]
- Roman numerals: I V X L C D M; subtractive IV, IX, XL, XC; the book's old forms IƆ=500, CIƆ=1000. Dates: **ab urbe condita (753 BC)**, consuls' names, Kalendae/Nonae/Idus (Παράρτημα II). [S1 §§66-67, 121]
- Fractions: tertia pars, duae tertiae partes, dimidia pars. [S1 §72]

---

## 5. Pronouns and pronominal adjectives (S1 §§55-64)  [A: every paper has 2-4 pronoun items]

**Important fact stated by S1 §55:** Latin has *no* separate reflexive/reciprocal pronouns (`se`, `sui`, `sibi` are 3rd-person personal; no nominative; reciprocal = inter se, alius alium).

### 5.1 Personal and possessive
| | 1st | 2nd | 3rd (reflexive) |
|---|---|---|---|
| Nom sg | ego | tu | (none; use is/hic/ille) |
| Gen sg | mei | tui | sui |
| Dat sg | mihi | tibi | sibi |
| Acc sg | me | te | se / sese |
| Abl sg | (a) me | (a) te | (a) se |
| Nom pl | nos | vos | (none) |
| Gen pl | **nostri / nostrum** | **vestri / vestrum** | sui |
| Dat pl | nobis | vobis | sibi |
| Acc pl | nos | vos | se |
| Abl pl | (a) nobis | (a) vobis | (a) se |
- `nostri/vestri` = objective/possessive gen. (memor nostri); `nostrum/vestrum` = partitive (multi nostrum, quis vestrum). [S1 §56]
- `cum` is attached: **mecum, tecum, secum, nobiscum, vobiscum**; for relatives **quocum / quacum / quibuscum** (also quicum).
- Emphatic suffixes: egomet, tute, memet, sese. [S1 §56]
- Possessives: meus (voc **mi**), tuus, suus (reflexive), noster, vester (like niger); `suus` refers to the subject, `eius/eorum` does not. [S1 §57]

### 5.2 Demonstratives and determinatives (declension tables to be machine-generated; key irregularities below)
- **hic, haec, hoc** (this, near me): sg nom hic haec hoc; gen **huius**; dat **huic**; acc hunc hanc hoc; abl hoc hac hoc; pl nom hi hae haec; gen horum harum horum; dat/abl his; acc hos has haec. (-ce forms: hisce, hosce.) [S1 §58]
- **iste, ista, istud** (that near you), **ille, illa, illud** (that): gen **-ius** (istius, **illius**), dat **-i** (isti, illi), neuter **-ud** (illud, istud). 2022: `Ille` → nom sg n. **illud**, gen sg f. **illius** (the 2022 key misprinted "Ilius"). [S1 §58]
- **is, ea, id**: sg gen **eius**, dat **ei**, acc eum eam id, abl eo ea eo; **pl nom ii (ei, i) eae ea; gen eorum earum eorum; dat/abl iis (eis, is); acc eos eas ea**. 2025 resit: `is` → fem nom pl **eae**. 2024 & 2026: `id` → fem gen pl **earum**. [S1 §59]
- **ipse, ipsa, ipsum** (self): gen **ipsius**, dat **ipsi**, neuter nom/acc **ipsum** (not -ud). `mihi ipsi` → nom **ego ipse** (2025). [S1 §59]
- **idem, eadem, idem** (same) = is + -dem; **m→n before d**: eundem, eandem, eorundem, earundem, eosdem, easdem; nom pl **idem / eidem / iidem** (m.), eaedem (f.), eadem (n.); dat/abl pl **eisdem / iisdem / isdem**; gen sg **eiusdem**, dat **eidem**. 2025 `Eodem` → gen pl same gender: **eorundem**. 2024 resit `idem` → nom other number: **eidem/iidem** if masculine (idem), **eadem** if neuter. *Ambiguous without context.* [S1 §59]
- **alter, altera, alterum** (the other of two): gen alterius, dat alteri. **alius, alia, aliud** (other): gen **alius**, dat **alii**, neuter **aliud**. [S1 §§59, 62]
- **tālis, tāle** (such; like facilis), **tantus** (so large), **tot** (so many, indeclinable), **totidem**. 2025: `tale` → acc pl **talia**; 2026: `tale consilium` → nom pl **talia consilia**. [S1 §58]

### 5.3 Relative, interrogative, indefinite
- **qui, quae, quod**: sg gen **cuius**, dat **cui**, acc quem quam quod, abl quo qua quo; **pl nom qui quae quae; gen quorum quarum quorum; dat/abl quibus; acc quos quas quae.** [S1 §60]
- Relative family: **qualis** (such as, like tālis), **quantus**, **quot** (indeclinable), **uter, utra, utrum** (which of two; gen **utrius**, dat **utri**). With `-cumque`: quicumque, qualiscumque, quantuscumque, quotcumque, utercumque (indefinite relatives).
- **Interrogative:** substantival **quis? quid?** (m./f. quis; n. quid; gen cuius; dat cui; acc quem quid; abl quo), adjectival **qui, quae, quod?** (same as the relative), `uter`, `qualis`, `quantus`, `quot`. + `-nam`: quisnam, quinam. [S1 §61]
- **Indefinite family** [S1 §62]: 
  | Substantive | Adjective | Notes |
  |---|---|---|
  | quis, quid (after si, nisi, ne, num) | qui, qua/quae, quod | "after si/ne/num" → qua (n. pl.) |
  | **aliquis, aliquid** | aliqui, aliqua, aliquod | fem sg aliqua; n. pl. aliqua; gen alicuius; dat alicui. 2020 resit: `aliqua` → m. nom sg adjective **aliqui**. |
  | **quidam, quaedam, quiddam** | quidam, quaedam, **quoddam** | **m → n before d**: quendam, quandam, quorundam, quarundam; gen **cuiusdam**; dat cuidam. 2020 `quidam` → n. gen sg **cuiusdam**; 2024 key `cuiusdam` (context-dependent!). |
  | quispiam, quidpiam | quispiam, quaepiam, quodpiam | |
  | **quisquam, quicquam** | **ullus, ulla, ullum** | negative/conditional contexts; gen cuiusquam / ullius |
  | **quisque, quidque** | quisque, quaeque, quodque | each; gen cuiusque, dat cuique; `unusquisque` |
  | quilibet / quivis, quidlibet / quidvis | quilibet, quaelibet, quodlibet | anyone you like |
  | **nemo** (gen **nullius**, dat **nemini**, acc **neminem**; abl nullo/nulla re) | **nullus, nulla, nullum** (gen nullius, dat nulli) | pl. and abl of nemo come from nullus |
  | **nihil** (nom/acc only; rest = nulla res) | | |
  | neuter, neutra, neutrum | | |
  | ambo, ambae, ambo | | like duo |
  | aliquot, quot | | indeclinable |
- Correlatives & pronominal adverbs: talis-qualis, tantus-quantus, tot-quot, tam-quam, totiens-quotiens, ibi-ubi, eo-quo, inde-unde, ita-ut; ubi, ibi, hic, illic, usquam, nusquam, ubique, alicubi, undique. [S1 §§63-64]

### 5.4 Pronoun traps verified in papers [A]
| Item | Instruction | Answer |
|---|---|---|
| `eius` (2023) | acc pl n. | **ea** (is → ea) |
| `eius` (2026 resit) | abl sg fem | **ea** |
| `id` (2024, 2026) | gen pl fem | **earum** |
| `ego` (2022 resit) | dat other number, 2nd person | **vobis** |
| `me` (2024 resit) | dat same number | **mihi** |
| `neminem` (2024 resit) | dat same number | **nemini** |
| `his` (2022 resit) | acc pl n. | **haec** |
| `Quod` (2022 resit) | gen pl fem | **quarum** |
| `illis` (2026) | nom pl n. | **illa** |
| `Hoc dictum` (2023) | same case, other number | **haec dicta** |
| `Nostri` (2022) | nom sg same gender | **noster** |
| `mihi ipsi` (2025) | nom same number | **ego ipse** |

2023 resit Γ1α asked to find the pronouns in «Qui potuisti populari hanc terram, quae te genuit atque aluit?» and give them in the other number. Candidates: qui (nom. sg. m.), hanc (hic, fem. acc. sg.), quae (rel. fem. nom. sg.), te (personal). I read no key; UNSURE which three were intended (possible answers: qui → qui, hanc → has, quae → quae, te → vos). Lesson: **pronouns can be identical in two numbers (qui, quae, haec), so the app must show the sentence, not only the word.**

---

## 6. Verbs (S1 §§74-100, S2 units XXI-XXV, XXXII-XXXIV)  [A: 15 of the 30 Γ points]

### 6.1 Greek terminology ↔ Latin (the exam uses the Greek; the student must map it instantly)
| Greek | Latin | Note |
|---|---|---|
| ενεστώτας / παρατατικός / μέλλοντας | praesens / imperfectum / futurum | "present system" (all from the present stem) |
| παρακείμενος / υπερσυντέλικος / **τετελεσμένος μέλλοντας** (also «συντελεσμένος μέλλοντας») | perfectum / plusquamperfectum / futurum exactum | "perfect system" |
| οριστική / υποτακτική / προστακτική | indicativus / coniunctivus / imperativus | |
| **ενεργητική φωνή / «μέση ή παθητική» φωνή / «ίδια φωνή» / «άλλη φωνή»** | activa / passiva | S1 calls the -r forms "μέση ή παθητική" |
| απαρέμφατο / μετοχή / **γερούνδιο** / **γερουνδιακό** / **σουπίνο (ύπτιο)** | infinitivus / participium / gerundium / gerundivum / supinum | the 5 "nominal forms" [S1 §75] |
| αρχικοί χρόνοι | tempora primitiva | 1st sg pres. + 1st sg perf. + supine + pres. inf. [S1 §85] |
| **ενεργητική / παθητική περιφραστική συζυγία** | coniugatio periphrastica activa (-urus sum) / passiva (-ndus sum) | [S1 §82] |
| αποθετικά / ημιαποθετικά / ελλειπτικά / απρόσωπα ρήματα | deponentia / semideponentia / defectiva / impersonalia | [S1 §§80,81,98,99] |
| υποτακτική «δυνητική» | potential subjunctive | syntax |

### 6.2 Principal parts and the three stems [S1 §85]  [A]
Principal parts (αρχικοί χρόνοι): **amo, amare, amavi, amatum**; **deleo, delere, delevi, deletum**; **lego, legere, legi, lectum**; **audio, audire, audivi, auditum**; **capio, capere, cepi, captum**. Everything is built from three stems:
| Stem | How to get it | Forms built from it |
|---|---|---|
| **Present stem** | drop -re from the infinitive (ama-, dele-, lege-, audi-, cape-/capi-) | present, imperfect, future (indic.); present & imperfect subj.; imperatives; present infinitive; present participle; gerund; gerundive; all passive of these |
| **Perfect stem** | drop -i from the 2nd principal part (amav-, delev-, leg-/lēg-, audiv-, cep-) | active perfect, pluperfect, future perfect (indic.); perfect & pluperfect subj.; perfect infinitive |
| **Supine stem** | drop -um from the 3rd principal part (amat-, delet-, lect-, audit-, capt-) | supine (-um / -u); perfect passive participle (-us, -a, -um) → all passive perfect-system forms with sum/eram/ero/sim/essem/esse; future active participle (-urus); future infinitive (-urum esse) |

**Rule: you cannot form half the exam answers without the 2nd and 3rd principal part.** Supine and gerund, asked every year, need exactly these.

### 6.3 Endings in one place
**Person endings.** Active: -o/-m, -s, -t, -mus, -tis, -nt. Passive: -r, -ris (-re), -tur, -mur, -mini, -ntur. Perfect active: -i, -isti, -it, -imus, -istis, **-erunt (-ere)**. [S1 §79]
**Tense signs.**
| Tense | 1st/2nd conj. | 3rd/4th/-io |
|---|---|---|
| Imperfect ind. | -ba- (amabam, delebam) | -eba- (legebam, audiebam, capiebam) |
| Future ind. | -bo, -bis, -bit, -bimus, -bitis, -bunt | **-am, -es, -et, -emus, -etis, -ent** (legam, audiam, capiam) |
| Present subj. | 1st: **-e-** (amem, ames, amet, amemus, ametis, ament); 2nd: -ea- (deleam) | -a- (legam, legas; audiam; capiam) |
| Imperfect subj. | pres. inf. + endings: amarem, delerem | legerem, audirem, caperem |
| Perfect subj. | perf. stem + **-erim, -eris, -erit, -erimus, -eritis, -erint** | same |
| Pluperfect subj. | perf. stem + **-issem, -isses, -isset, -issemus, -issetis, -issent** | same |
| Pluperfect ind. | perf. stem + -eram ... | same |
| Future perfect ind. | perf. stem + **-ero, -eris, -erit, -erimus, -eritis, -erint** | same |
Note: **future perfect and perfect subjunctive are identical except in the 1st person singular (-ero / -erim).** (3pl both -erint.)

**Model paradigms, present system** (active):
| | amo | deleo | lego | audio | capio |
|---|---|---|---|---|---|
| pres. | amo, amas, amat, amamus, amatis, amant | deleo, deles, delet, delemus, deletis, delent | lego, legis, legit, legimus, legitis, **legunt** | audio, audis, audit, audimus, auditis, **audiunt** | capio, capis, capit, capimus, capitis, **capiunt** |
| impf. | amabam | delebam | legebam | audiebam | capiebam |
| fut. | amabo, amabis ... amabunt | delebo ... | **legam, leges, leget, legemus, legetis, legent** | audiam, audies ... audient | capiam, capies ... capient |
| pres. subj. | amem | deleam | legam | audiam | capiam |
| impf. subj. | amarem | delerem | legerem | audirem | caperem |
| imper. 2sg/2pl | ama, amate | dele, delete | lege, legite | audi, audite | **cape**, capite |
| inf. | amare | delere | legere (short e) | audire | capere (short e) |
| part. pres. | amans, amantis | delens, delentis | legens, legentis | audiens, audientis | capiens, capientis |
| gerund gen. | amandi | delendi | legendi | audiendi | capiendi |
| gerundive | amandus | delendus | legendus | audiendus | capiendus |
Passive: amor, amaris/amare, amatur, amamur, amamini, amantur; deleor ...; legor, legeris/legere, legitur, legimur, legimini, leguntur; audior, audiris, auditur, audimur, audimini, audiuntur; capior, caperis, capitur, capimur, capimini, capiuntur. Imperfect: amabar, amabaris/-re ...; future (1st/2nd): amabor, amaberis/-re, amabitur ...; (3rd/4th): legar, legeris/-re, legetur, legemur, legemini, legentur; audiar ... Present subj. passive: amer, ameris/-re, ametur ...; legar ...; imperf. subj. passive: amarer, amareris/-re, amaretur ...
**Perfect passive system:** amatus (-a, -um) sum, es, est; amati (-ae, -a) sumus, estis, sunt; plpf. amatus eram ...; fut. perf. amatus ero ...; perf. subj. amatus sim ...; plpf. subj. amatus essem ...; perf. inf. amatum esse. **The participle agrees with the subject in gender and number** (this is the "να ληφθεί υπόψη το υποκείμενο" in exam instructions).

### 6.4 Third conjugation in -io [A]
S1 §84 lists the **15 verbs of the 3rd conjugation in -io**: **capio, cupio, facio, fodio, fugio, iacio, pario, quatio, rapio, sapio, specio, lacio** + deponents **gradior, morior, patior**; plus their compounds (accipio, conficio, aspicio, abicio, eripio, interficio, ...). They lose the -i- before another i or before -e/-er: **infinitive capere (short e), imperative cape, imperfect subj. caperem, passive infinitive capi, passive caperis**; but capiunt, capiebam, capiam, capiens, capiendi. `fugio` and `cupio`: 2020 asked `cupivit` → 3pl future **cupient**. `facio`: imperative **fac** (also dic, duc, fer); but compounds with a preposition use **-fice**: conficere → **confice**, perfice. [S1 §84 Σημ.]

### 6.5 Perfect-stem formation: the 6 families [S1 §87-89]
1. **-v-** (1st, 4th, many 2nd): amavi, audivi, delevi, fleo-flevi, impleo-implevi. Also: nosco-novi, cresco-crevi, peto-petivi, quaero-quaesivi, cupio-cupivi, sino-sivi.
2. **-u-** (most 2nd, some 1st/3rd): habui, monui, terrui, docui, tenui, colui, posui, alui, genui, rapui, domui, sonui, secui, veto-vetui, cubo-cubui.
3. **-s-** (x = cs / gs): dixi, duxi, rexi, scripsi, misi, gessi, pressi, traxi, vixi, clausi, divisi, iunxi, pinxi, finxi, texi; 2nd conj.: iussi, mansi, ardeo-arsi, rideo-risi, suadeo-suasi, haereo-haesi, augeo-auxi, lugeo-luxi.
4. **Lengthened vowel**: legi (lēgi), emi (ēmi), egi (ēgi), vidi (vīdi), veni (vēni), sedi (sēdi), fodi, fugi, fregi, rupi, fudi, vici, feci, cepi, ieci, movi, favi, cavi.
5. **Reduplication** (usually lost in compounds: accido accidi, occido occidi; exceptions such as discurro discurri / discucurri): do-**dedi**, sto-**steti**, cado-**cecidi**, caedo-**cecidi**, cano-**cecini**, curro-**cucurri**, disco-**didici**, posco-**poposci**, pello-**pepuli**, tango-**tetigi**, tendo-**tetendi**, pendeo-**pependi**, mordeo-**momordi**, spondeo-**spopondi**, tondeo-**totondi**, fallo-**fefelli**, pario-**peperi**, parco-**peperci**.
6. **Unchanged stem**: defendo-defendi, accendo-accendi, verto-verti, solvo-solvi, volvo-volvi, bibo-bibi, scando-scandi, ostendo-ostendi, prehendo-prehendi.
Compounds usually **drop the reduplication** (accido-accidi, occido-occidi, concurro-concurri, accedo-accessi) and **change the vowel** (§6.12). [S1 §87]

### 6.6 The verbs of the 2020-2026 papers: principal parts (these are in the app's mandatory set)  [A]
Extracted from the passages and the question forms. Latin only. These are the standard dictionary forms (cf. the patterns in S1 §§84-89 and Appendix I). I did **not** re-verify every line against a second online source; run them through a validator (Wiktionary / Whitaker's Words) before they become app data.
| Verb | Principal parts | Verb | Principal parts |
|---|---|---|---|
| accipio | accipere, accepi, acceptum | alo | alere, alui, altum / alitum |
| ago | agere, egi, actum | absum | abesse, afui (abfui), - |
| abicio | abicere, abieci, abiectum | adduco | adducere, adduxi, adductum |
| averto | avertere, averti, aversum | cado | cadere, cecidi, casum |
| cogito | cogitare, cogitavi, cogitatum | colo | colere, colui, cultum |
| confero | conferre, contuli, collatum | coniuro | coniurare, coniuravi, coniuratum |
| consequor | consequi, consecutus sum | credo | credere, credidi, creditum |
| cognosco | cognoscere, cognovi, cognitum | dico | dicere, dixi, dictum |
| deprehendo | deprehendere, deprehendi, deprehensum | discedo | discedere, discessi, discessum |
| discurro | discurrere, discurri / discucurri, discursum | dissimulo | dissimulare, dissimulavi, dissimulatum |
| egredior | egredi, egressus sum | elabor | elabi, elapsus sum |
| exclamo | exclamare, exclamavi, exclamatum | expello | expellere, expuli, expulsum |
| exigo | exigere, exegi, exactum | extraho | extrahere, extraxi, extractum |
| facio | facere, feci, factum | fateor | fateri, fassus sum |
| fio | fieri, factus sum | fugio | fugere, fugi, (fugitum) |
| gero | gerere, gessi, gestum | gigno | gignere, genui, genitum |
| habeo | habere, habui, habitum | iaceo | iacere, iacui, (iacitum) |
| intellego | intellegere, intellexi, intellectum | interficio | interficere, interfeci, interfectum |
| iubeo | iubere, iussi, iussum | loquor | loqui, locutus sum |
| mentior | mentiri, mentitus sum | miror | mirari, miratus sum |
| miseror | miserari, miseratus sum | molior | moliri, molitus sum |
| morior | mori, mortuus sum (fut. part. moriturus) | nascor | nasci, natus sum (nasciturus) |
| offero | offerre, obtuli, oblatum | oppugno | oppugnare, oppugnavi, oppugnatum |
| patior | pati, passus sum | pervenio | pervenire, perveni, perventum |
| possum | posse, potui, - | premo | premere, pressi, pressum |
| prohibeo | prohibere, prohibui, prohibitum | propono | proponere, proposui, propositum |
| puto | putare, putavi, putatum | quaero | quaerere, quaesivi, quaesitum |
| recipio | recipere, recepi, receptum | redeo | redire, redii, reditum |
| refero | referre, rettuli, relatum | relinquo | relinquere, reliqui, relictum |
| scio | scire, scivi, scitum | scribo | scribere, scripsi, scriptum |
| sequor | sequi, secutus sum | succurro | succurrere, succurri, succursum |
| utor | uti, usus sum | venio | venire, veni, ventum |
| video | videre, vidi, visum | vivo | vivere, vixi, victum |
| volo | velle, volui, - | nolo / malo | nolle, nolui, - / malle, malui, - |
| vulnero | vulnerare, vulneravi, vulneratum | sum | esse, fui, (futurus) |

### 6.7 More high-frequency principal parts by family (for the "αρχικοί χρόνοι" drill)  [B/C]
Written from general knowledge of standard dictionary forms (Lewis & Short style) and cross-checked where S1 §§86-89, 84 give the pattern. **Before shipping, machine-check each line against a second source (Wiktionary / Whitaker's Words); I did not verify every line individually.**
- **3rd, -s perfect:** dico dixi dictum; duco duxi ductum; rego rexi rectum; scribo scripsi scriptum; mitto misi missum; gero gessi gestum; premo pressi pressum; traho traxi tractum; vivo vixi victum; cedo cessi cessum; claudo clausi clausum; ludo lusi lusum; divido divisi divisum; iungo iunxi iunctum; pingo pinxi pictum; cingo cinxi cinctum; coquo coxi coctum; tego texi tectum; veho vexi vectum; sumo sumpsi sumptum; carpo carpsi carptum; figo fixi fixum; flecto flexi flexum; fingo finxi fictum; laedo laesi laesum; spargo sparsi sparsum; struo struxi structum; fluo fluxi fluxum; nubo nupsi nuptum; surgo surrexi surrectum.
- **3rd, lengthened vowel / no change:** ago egi actum; cogo coegi coactum; lego legi lectum (collego collegi collectum; but intellego intellexi intellectum, neglego neglexi neglectum, diligo dilexi dilectum); emo emi emptum; edo edi esum; vinco vici victum; frango fregi fractum; rumpo rupi ruptum; fundo fudi fusum; defendo defendi defensum; accendo accendi accensum; prehendo prehendi prehensum; verto verti versum; solvo solvi solutum; volvo volvi volutum; bibo bibi (bibitum); scando scandi scansum; ostendo ostendi ostentum; ico ici ictum.
- **3rd, reduplicated:** cado cecidi casum; caedo cecidi caesum; cano cecini (cantum / cantatum in S1); curro cucurri cursum; disco didici -; posco poposci -; pello pepuli pulsum; tango tetigi tactum; tendo tetendi tentum/tensum; pendo pependi pensum; fallo fefelli falsum; parco peperci parsum.
- **3rd, -ui:** pono posui positum; colo colui cultum; alo alui altum/alitum; gigno genui genitum; consulo consului consultum; meto messui messum; texo texui textum; gemo gemui gemitum; fremo fremui fremitum; strepo strepui strepitum; vomo vomui vomitum.
- **3rd, -vi / other:** nosco novi notum (cognosco cognovi cognitum; ignosco ignovi ignotum); cresco crevi cretum; pasco pavi pastum; quiesco quievi quietum; peto petivi petitum; quaero quaesivi quaesitum; arcesso arcessivi arcessitum; lacesso lacessivi lacessitum; sino sivi situm; cerno crevi cretum; sero sevi satum (sow) / serui sertum (join); sperno sprevi spretum; sterno stravi stratum; lino levi/livi litum; consuesco consuevi consuetum.
- **-io (3rd):** capio cepi captum (accipio, recipio, concipio, incipio, praecipio, suscipio all -cepi, -ceptum); facio feci factum (conficio, interficio, efficio, deficio, perficio, reficio, afficio all -feci -fectum); iacio ieci iactum (abicio, conicio, eicio, iniicio, obicio, reicio ieci/-iectum); fodio fodi fossum; fugio fugi - (confugio, effugio, profugio); rapio rapui raptum (eripio eripui ereptum); cupio cupivi cupitum; pario peperi partum; quatio quassi quassum (concutio concussi concussum); specio spexi spectum (aspicio aspexi aspectum; conspicio, despicio, respicio, inspicio ...); allicio allexi allectum, elicio elicui elicitum.
- **2nd, -ui, -itum:** habeo habui habitum; moneo monui monitum; terreo terrui territum; pareo parui paritum; valeo valui valitum; taceo tacui tacitum; noceo nocui nocitum; doleo dolui (dolitum); careo carui (caritum); iaceo iacui (iacitum); timeo timui -; sileo silui -; egeo egui -. **-ui, -tum:** doceo docui doctum; teneo tenui tentum; misceo miscui mixtum; torreo torrui tostum; censeo censui censum; **-si/-sum:** iubeo iussi iussum; maneo mansi mansum; ardeo arsi arsum; rideo risi risum; suadeo suasi suasum; haereo haesi haesum; augeo auxi auctum; lugeo luxi luctum; luceo luxi -; algeo alsi -; **lengthened:** video vidi visum; sedeo sedi sessum; moveo movi motum; faveo favi fautum; caveo cavi cautum; foveo fovi fotum; voveo vovi votum; **reduplicated:** mordeo momordi morsum; spondeo spopondi sponsum; tondeo totondi tonsum; pendeo pependi - (intransitive); **-evi:** deleo delevi deletum; fleo flevi fletum; compleo complevi completum; neo nevi netum; cieo civi citum.
- **1st irregulars:** do dare dedi datum (short **a**: damus, datis, dabam, darem, dandi, dare, but **das, da, dans**); sto stare steti statum (compounds -stiti: consto constiti - ); iuvo iuvare iuvi iutum; seco secare secui sectum; domo domare domui domitum; sono sonare sonui sonitum; tono tonare tonui -; crepo crepare crepui crepitum; cubo cubare cubui cubitum; veto vetare vetui vetitum; mico micare micui -; neco necare necavi necatum (eneco enecui).
- **4th:** audio audivi auditum; venio veni ventum (convenio, invenio, pervenio, advenio, evenio); sentio sensi sensum; haurio hausi haustum; vincio vinxi vinctum; sancio sanxi sanctum; aperio aperui apertum; operio operui opertum; reperio repperi repertum; comperio comperi compertum; salio salui saltum; scio scivi scitum; nescio nescivi nescitum; fulcio fulsi fultum; farcio farsi fartum; sepelio sepelivi sepultum.
- **Deponents** (see 6.9).

### 6.8 Non-finite forms: infinitive, participle, gerund, gerundive, supine, imperative  [A: tested every year]
**Infinitive (απαρέμφατο): six forms** [S1 §78]
| | Active | Passive |
|---|---|---|
| Present | amare, delere, legere, audire, capere | amari, deleri, **legi, audiri, capi** |
| Perfect | amavisse, delevisse, legisse, audivisse, cepisse | amatum esse (amatus -a -um esse) |
| Future | amaturum (-am, -um) esse; pl. -uros -as -a esse | **amatum iri** (rare; supine + iri) |
Deponents: present = passive-looking (hortari, vereri, loqui, mentiri, pati); perfect = hortatum esse (hortatus -a -um esse); **future = ACTIVE-form** hortaturum esse. Irregular: esse / fuisse / futurum esse (fore); posse / potuisse; velle / voluisse; nolle; malle; ferre / tulisse / laturum esse / ferri / latum esse; ire / isse (iisse) / iturum esse / iri; fieri / factum esse / factum iri. The shortened perfect forms: audivisse = audisse, scivisse = scisse, amavisse = amasse (2025 key `sci(v)isse`). [S1 §83]
**Participle (μετοχή): three live forms; no present passive, no perfect active** [S1 §§43, 75]
| | Active | Passive |
|---|---|---|
| Present | amans, amantis (abl. -e/-i); delens; legens; audiens; capiens | - |
| Perfect | - | amatus, -a, -um (supine stem) |
| Future | amaturus, -a, -um (supine stem) | (gerundive amandus) |
**Irregular participles:** eo → **iens, euntis** (dat. eunti, acc. euntem); sum → none (only ab-sens, prae-sens; future futurus); possum → potens (adjective only); volo → volens; nolo → nolens; malo → none; fero → ferens; fio → factus; edo → edens. 2020/2023 keys: redire → **redeuntis**; 2026: abesse → **absens**.
**Future participle irregular stems**: moriturus (morior), nasciturus (nascor), oriturus (orior), futurus, iturus, iuvaturus, fruiturus, paritura (pario). 2024: `nascentem` → **nasciturum** (m.) / **nascituram** (f.).
**Deponents** have active-sense participles: present (loquens), perfect (**locutus = "having spoken"**), future (locuturus). `secūta est` → future part. fem. **secutura** (2025 resit). `utor` → utens / usurus / usus (2022).
**Gerund (γερούνδιο)** [S1 §75, S2 XXXII]: neuter noun, 2nd decl., *singular only, four oblique cases, no nominative (the infinitive is the nominative)*; from the present stem + **-nd-**: amandi / amando / amandum / amando; delendi; legendi; audiendi; capiendi; eo → **eundi, eundo, eundum**; fero → ferendi; fio → none (use faciendus); deponents: hortandi, loquendi, patiendi, moriendi, utendi. Acc. only after a preposition (ad, in, inter, ob, ante).
| Exam example | Instruction | Answer |
|---|---|---|
| `scripsit` (2026) | gen of gerund | **scribendi** |
| `venisset` (2025) | dat | **veniendo** |
| `petit` (2023) | gen + abl | **petendi, petendo** |
| `deprehensi sunt` (2024) | gen | **deprehendendi** |
| `adīre` (2022) | abl | **adeundo** |
| `perveneras` (2023 resit) | gen | **perveniendi** |
| `uteris` (2024 resit) | dat | **utendo** |
**Gerundive (γερουνδιακό)**: -ndus, -nda, -ndum (like bonus), passive, means "must be / worthy to be": delenda est Carthago. Agrees with its noun (ad urbem capiendam). `oppugnarētur` → gen sg fem **oppugnandae** (2023 resit). Intransitive verbs: impersonal neuter (eundum est; subveniendum est reipublicae). **Gerundive attraction** (syntax, but forms matter): `ad eam obiurgandam`, `eius obiurgandae causa` (2026 Δ2β). [S2 XXXIII, S1 §75.5]
**Supine (σουπίνο)** [S1 §75, S2 XXXIV]: verbal noun, 4th decl., **two forms only**: **accusative -um** (purpose after verbs of motion: venerunt auxilium postulatum) and **ablative -u** (respect after adjectives: facile dictu, mirabile visu, auditu, memoratu; and fas est dictu). Built from the *3rd principal part* (drop -um, keep it for -um; replace with -u for abl.).
| Exam example | Asked | Answer |
|---|---|---|
| `Accipe` (2025) | abl | **acceptu** |
| `intellego` (2024) | abl | **intellectu** |
| `moverat` (2023) | abl | **motu** |
| `instituerat` (2020) | abl | **institutu** |
| `attulissent` (2022) | acc | **allatum** (ad+latum, assimilation) |
| `accepērunt` (2026) | acc | **acceptum** |
| `vidit` (2023 resit) | abl | **visu** |
| `vidēri` (2024 resit) | acc | **visum** |
| `animadvertit` (2026 resit) | acc | **animadversum** |
| `gerendi` (2025 resit) | acc | **gestum** |
| `Discurrens` (2022 resit) | acc | **discursum** |
Verbs **without a supine**: sum (futurus is used), possum, volo/nolo/malo; I saw no supine question on them. For `eo`: itum / itu; `fero`: latum / latu; `do`: datum (short a).
**Imperative (προστακτική)** [S1 §78; S2 XXV; **asked every year**]
- Present 2sg = present stem: ama, dele, lege, audi, cape; 2pl = -te: amate, delete, legite, audite, capite.
- Future (laws, "memento"): 2/3sg -to (amato, legito, audito), 2pl -tote, 3pl -nto (amanto, delento, **legunto, audiunto, capiunto**).
- Passive (deponents mostly): pres. 2sg -re (amare, legere, loquere, hortare), 2pl -mini; fut. -tor / -ntor.
- **Four apocopated: dic, duc, fac, fer** (not dice, duce, face, fere); compounds of dico, duco, fero keep the short form (benedic, adduc, educ, affer, refer: 2022 resit `adduxit` → **adduc**), but compounds of facio with a preposition take **-fice** (conficere → **confice**, perficere → **perfice**). Others: **es** (sum; also edo "eat": ede / es), **i, ite** (eo), **fi, fite** (fio), **cave**. [S1 §84 Σημ.]

- Irregular futures substituting a missing present: **memento, mementote** (memini), **scito, scitote** (scio), **esto, estote, sunto** (sum; 2022 resit `esse` → 3pl fut. imper. **sunto**), **nolito**, **licēto** (only in laws). `volo`, `malo`, `possum`: no imperative.
- Prohibition is **not** ne+imperative: **noli / nolite + infinitive**, or **ne + perfect subjunctive**. [S2 XXV]
- Exam answers: `fecerit` → **fac**; `dixit` → **dic**; `dicerent` → **dic**; `fēcit` → **fac, facito**; `abiciat` → **abice**; `salutāvit` → **saluta**; `Fit` → pl. **fite**; `conferre` → fut. 2sg **conferto**; `Ave` → **avete**; `concēpit` → pass. **concipere**; `dicitur` → act. **dic**; `fiunt` → **fi**. 

### 6.9 Deponents (αποθετικά), semi-deponents  [A: appear every year]
**Definition** [S1 §80]: passive-looking forms, active/neuter meaning (media tantum). They form: present system like passive (loquor, loqueris, loquitur ... ; loquebar; loquar; loquar/loquerer for subjunctives); perfect system = perfect participle + sum (locutus sum, eram, ero, sim, essem; infinitive locutum esse); **plus** forms that are not passive in shape: **present participle (loquens), future participle (locuturus), future infinitive (locuturum esse), gerund (loquendi), gerundive (loquendus), supine (locutum / locutu), imperative passive-shaped (loquere, loquimini)**. Imperfect subjunctive from the *active-type* infinitive (loqui ← loquere): **loquerer, hortarer, vererer, mentirer, morerer** (2022 resit `moritūrum` → **morerer**), **pateretur, uterētur, sequeretur**.
| Conj. | Deponent verbs (principal parts) |
|---|---|
| 1st | hortor -ari -atus sum; miror -ari -atus; miseror -ari -atus; conor; arbitror; moror; precor; populor; vagor; imitor; adulor; indignor -ari -atus; auxilior; cunctor; luctor; veneror |
| 2nd | vereor -eri veritus sum; misereor -eri miseritus; fateor -eri fassus (confiteor -fessus); reor -eri ratus; tueor tueri tuitus; polliceor -eri pollicitus; medeor -eri; liceor |
| 3rd | loquor loqui locutus; sequor sequi secutus (consequor, persequor, obsequor, assequor); utor uti usus; fruor frui fructus/fruitus; fungor fungi functus; labor labi lapsus (elabor, collabor); nitor niti nixus/nisus; queror queri questus; nascor nasci natus; proficiscor -i profectus; obliviscor -i oblitus; irascor -i (iratus); ulciscor -i ultus; adipiscor adipisci adeptus; amplector -i amplexus; (3rd in -io) **gradior gressus** (aggredior, egredior, ingredior, progredior), **morior mortuus**, **patior passus** |
| 4th | mentior -iri mentitus; blandior -iri -itus; largior; partior; potior -iri -itus (+abl.); orior -iri ortus (fut. part. oriturus); experior -iri expertus; metior metiri mensus; sortior; assentior -iri assensus; molior -iri molitus; ordior ordiri orsus |
**Semi-deponents** (active in the present system, passive-shaped perfect) [S1 §81]: **audeo audere ausus sum; gaudeo gaudere gavisus sum; soleo solere solitus sum; fido fidere fisus sum** (confido, diffido). Reverse type (passive-shaped present, active perfect) [S1 §81,2]: **revertor, reverti (perf. reverti, also reversus sum); devertor, deverti; assentior, assensi**. UNSURE whether the reverse type is ever tested; [B].
**Traps:**
- A "passive-looking" verb with no passive meaning in the sentence is a deponent: `mentiebatur`, `indignatus`, `utitur` (2025: *find the 3 deponents*).
- **No "other voice" exists** for a deponent's passive form (there is no active mentior → mentio). If a question asks for "άλλη φωνή" for a deponent, the question is wrong or the form is not a deponent.
- Perfect participle of a deponent is *active*: **locutus = having spoken**. A few have passive sense too (adeptus, partitus, expertus, meditatus, ...); [B].
- `moriturus` (not morturus) and `nasciturus`, `oriturus`: irregular future participles.
- Imperfect subj.: `uterētur` ← uti; `pateretur` ← pati; `morerer` ← mori.
- Present active participle of -io deponents: `patiens, patientis`; `moriens, morientis`.

### 6.10 Periphrastic conjugations (περιφραστική συζυγία) [A: 2023, 2025]
- **Active (-urus + sum)** = "I am about to / intend to": amaturus sum / eram / ero / fui / fueram / fuero; subj.: amaturus sim / essem; inf.: amaturum esse. Exam: `agunt` → 2sg pres. ind. act. periphrastic masc. = **acturus es** (2025); `erat ascensūrus` → 3pl perf. subj. = **ascensuri fuerint** (2023). **Agreement: the -urus form follows the SUBJECT's gender/number.**
- **Passive (gerundive + sum)** = "must be done": amandus sum / eram / ero / fui / fueram / fuero ...; personal (transitive) vs impersonal (neuter sg.). Agent in **dative**. [S2 XXXIII, S1 §82]

### 6.11 Irregular verbs [A: 1-3 per paper]
**sum** [S1 §77]: sum, es, est, sumus, estis, sunt; eram; ero; fui; fueram; fuero; subj. sim, sis, sit, simus, sitis, sint; essem (forem), esses (fores), esset (foret), essemus, essetis, essent (forent); fuerim; fuissem; imper. es, este / esto, estote, sunto; inf. esse, fuisse, **futurum esse (fore)**; part. futurus (praesens, absens); no gerund, no supine.
**Compounds of sum**: absum (abest, aberat, **afuit / abfuit**; abesse; part. **absens**), adsum (adesse), desum, intersum (**interest** "it matters", interfuit, interesse), praesum (praefui), obsum, supersum, **prosum** [C]: pro- becomes **prod-** before a vowel (prodes, prodest, prodesse; proderam, prodero; but prosum, prosumus, prosunt). **possum** [S1 §91]: possum, potes, potest, possumus, potestis, possunt; poteram; potero; potui; subj. possim, possis, possit ... ; possem ...; potuerim; potuissem; inf. posse, potuisse; no imperative; no gerund; participle `potens` is an adjective only. Exam: `possit` (2022) → plpf subj. **potuisset**; `posset` (2025) → **possit**; `potuisti` (2023 resit) → pres. subj. **possis**.
**volo, nolo, malo** [S1 §95]:
| | volo | nolo | malo |
|---|---|---|---|
| pres. ind. | volo, **vis**, **vult**, volumus, **vultis**, volunt | nolo, **non vis, non vult**, nolumus, **non vultis**, nolunt | malo, **mavis, mavult**, malumus, **mavultis**, malunt |
| impf. ind. | volebam | nolebam | malebam |
| future | volam, voles ... | nolam, noles ... | malam, males ... |
| perfect | volui | nolui | malui |
| pres. subj. | velim, velis, velit, velimus, velitis, velint | nolim, nolis ... | malim ... |
| impf. subj. | vellem, velles, vellet | nollem | mallem |
| imperative | - | **noli, nolite** (nolito) | - |
| inf. | velle, voluisse | nolle, noluisse | malle, maluisse |
| part. | volens | nolens (or invitus) | - |
Exam: `nolis` (2022 resit, 2pl pres. ind.) → **non vultis**; `mallet` (2022 resit) → plpf subj. **maluisset**; `vis` (2024 resit, 2sg of volo) → 3sg pres. subj. **velit**; `velit` (2026 resit) → 2pl plpf ind. **volueratis**. S1 also prints a future `volam, voles ...` / `nolam` / `malam` (rare in real Latin; accept, do not teach as primary). **Trap: `vis` is also the noun vis (force); the instruction decides.**
**fero** [S1 §96]: fero, **fers, fert**, ferimus, **fertis**, ferunt; ferebam; feram; **tuli**; **latum**; ferre; imper. **fer**, ferte (fertō); subj. feram; impf. subj. **ferrem**; passive: feror, **ferris, fertur**, ferimur, feriminī, feruntur; **inf. ferri**; perf. pass. lātus sum; gerund ferendi; part. ferens. Compounds: affero **attuli, allatum**; aufero abstuli ablatum; confero contuli **collatum**; differo distuli dilatum; effero extuli elatum; infero intuli illatum; offero **obtuli, oblatum**; refero **rettuli, relatum**; suffero sustuli sublatum; transfero transtuli translatum.
**eo** [S1 §93] "I go": eo, **is, it, imus, itis, eunt**; **ibam; ibo**; **ii (ivi), isti, iit, iimus, istis, ierunt**; subj. eam, eas, eat ...; impf. subj. **irem**; imper. **i, ite** (ito, itote, euntō); inf. **ire**, isse (iisse), iturum esse; part. **iens, euntis**; fut. part. iturus; gerund **eundi, eundo, eundum**; supine **itum, itu**; passive only impersonal: itur, ibatur, itum est, iri. Compounds: abeo, adeo, exeo, ineo, redeo, transeo, pereo, intereo, praetereo; **ambio** is 4th conj. (ambivi, ambitum) and **adeo (transitive) has a full passive: adeor, adiris, aditur**. Exam: `rediit` → **redeo**; `redībat` → **redeuntis**; `adīre` → **adeundo**.
**queo / nequeo** [S1 §94]: like eo; few forms (queo, queunt, queam, queant, nequibant, nequirent, quivit).
**fio** [S1 §97]: fio, **fis, fit**, (fimus, fitis), **fiunt**; fiebam; fiam; subj. fiam; impf. subj. **fierem** (not "firem"); imper. **fi, fite**; inf. **fieri**; perf. = factus sum; gerundive faciendus. `fiunt` → **fi** (2024 resit); `fēcit` → pass. subj. impf. **fieret** (2020).
**edo** "eat" [S1 §92]: edo, edis **or es**, edit **or est**, edimus, editis **or estis**, edunt; impf. subj. ederem **or essem**; imper. ede **or es**, edite or este; inf. edere **or esse**; passive: editur or **estur**; perf. edi, esum. **Trap: `esse` / `est` / `essem` may be sum or edo.** (2026 resit `est` → infinitives: context decides.)
**Defective verbs** [S1 §98]: 
- **memini** (I remember), **odi** (I hate), **coepi** (I began): perfect-only, *present meaning* for memini/odi: memini, meministi, meminit ... ; plpf. **memineram** = "I remembered"; fut. perf. **meminero** = "I will remember"; imper. **memento, mementote**; inf. meminisse, odisse, coepisse (fut. osurum esse, coepturum esse); part. osurus; coeptus, osus (exosus, perosus). `coepi` borrows incipio for missing tenses; with a passive infinitive it is `coeptus sum` (aedes aedificari coepta est) otherwise `coepit` (mons moveri coepit). [S1 §98 Σημ.] [A-adjacent]
- **aio**: aio, ais, ait, aiunt; aiebam, aiebas ...; ait (perf.); aiens. **inquam**: inquam, inquis, inquit, inquimus, inquitis, inquiunt; inquiebat; inquies; inquit — inserted inside direct speech (2025 text: «Quid?» inquit). **quaeso, quaesumus**; **for, fari, fatus sum** (fando, fanda); **ave/have, avete; salve, salvete; cedo, cette**; `forem, fores, foret, fore`. 
- **novi** (nosco): in practice present meaning "I know" (novi, noveram, novero, novisse); school book gives nosco, novi, notum — [B].
**Impersonal verbs** (απρόσωπα) [S1 §§99-100]: only 3sg + infinitive (no imperative, no supine, no participles): **decet, libet, licet, oportet, pudet, piget, paenitet, taedet, miseret, refert, interest, accidit, constat, expedit, placet, iuvat, fit, evenit, contingit**; weather: **pluit, tonat, fulgurat, fulget, ningit, rorat, lucescit**; perfect: licuit / licitum est; libuit / libitum est; puduit / puditum est; oportuit; decuit. Impersonal passive of intransitives: **itur, curritur, vivitur, pugnatur, ventum est**; with gerundive: eundum est. `Iuppiter tonat` = personified.

### 6.12 Compound verbs: vowel weakening and assimilation [S1 §115, S2 passim] [B but powers [A] items like accipio/attulissent]
- **a → i** in an open syllable, **a → e** before two consonants: facio → conficio, confectum; capio → accipio, acceptum; iacio → abicio, abiectum; rapio → eripio, ereptum; cado → accido; tango → attingo, attigi, attactum; habeo → adhibeo, adhibui, adhibitum; salio → desilio. **e → i**: specio → aspicio, aspexi, aspectum; lego → colligo, eligo, deligo (**but intellego, neglego, diligo keep the root e/ex: intellexi, neglexi, dilexi**); teneo → contineo, retineo. **ae → i**: caedo → occido (occidi, occisum); quaero → inquiro, inquisivi, inquisitum. **au → u**: claudo → includo, inclusi, inclusum.
- **Prepositional prefix assimilation**: ad- → ac-, af-, ag-, al-, an-, ap-, ar-, as-, at- (accipio, affero, aggredior, allatum, annuntio, appello, arrogo, assequor, attuli); in- → im- (b, m, p), il-, ir-; con- → com- (b, m, p), col-, cor-; ob- → oc-, of-, op-; sub- → suc-, suf-, sug-, sum-, sup-, sus-; ex- → ef- (before f); dis- → dif-; ab- → abs- (before c, t) / a- (before m, v).
- Compound of `facio` with a *preposition* → regular passive (conficior); with a *verb/adverb stem* (calefacio, patefacio, satisfacio) → passive in **fio** (calefio, patefio).
- Compound perfects usually drop the reduplication: accido (cado) accidi; incido (caedo) incidi; exceptions: discurro → discurri / discucurri.
- **cado vs caedo and their compounds** (named in the 2026-27 decision; they look identical in the present): **cado, cadere, cecidi, casum** → compounds **-cido, -cidi, (-casum)** with *short* i: accido, accidi; incido, incidi (incasurus); occido, occidi, occasum; decido, decidi; recido, recidi, recasum. **caedo, caedere, cecidi, caesum** → compounds **-cido, -cidi, -cisum** with *long* i: occido (kill), occidi, occisum; incido (cut into), incidi, incisum; decido, decidi, decisum; concido, concidi, concisum; excido, excidi, excisum; accido (cut), accidi, accisum. S1 Appendix I shows both lists (ac-cĭdo προσπίπτω / ac-cīdo περικόπτω). Distinguish by meaning: fall vs cut/kill.
- **Compounds of `do`** (named in the 2026-27 decision) [S1 §89,4 and Appendix I]: two families. (i) one-syllable prefix → **3rd conj. -do, -didi, -ditum, -dere**: abdo, addo (addidi, additum), condo (condidi, conditum), credo (credidi, creditum), dedo (dedidi, deditum), indo, perdo (perdidi, perditum), prodo, reddo (reddidi, redditum), subdo, trado (tradidi, traditum), vendo (vendidi, venditum). (ii) longer prefix → **1st conj. -do, -dedi, -datum, -dare**: circumdo (circumdedi, circumdatum), satisdo, pessumdo, venumdo. Simple `do` is **dare, dedi, datum** with short a (damus, dabam, darem) except das, da, dans.

---

## 7. The "cheap points" cheat list: 30 clusters of form facts that decide Θέμα Γ

Grouped so the app can make them Leitner cards. Each is verified in S1/S2 or in a real exam item.
**Nominals**
1. gen. pl. **-ium**: civium, urbium, noctium, montium, gentium, mentium, dotium, mortium, artium, partium, nivium, virium, faucium; **-um**: regum, ducum, hominum, militum, pedum, patrum, matrum, fratrum, senum, canum, iuvenum, sedum.
2. 3rd-decl. neuter pl. **-a** (corpora, tempora, nomina, opera, capita, itinera, pondera, rura, ora); i-stem neuter **-ia** (maria, animalia, exemplaria); abl. sg. of those: mari, animali.
3. voc. = nom. except 2nd decl. -us → **-e** (popule, domine); -ius/filius/genius → **-i** (fili, Vergili); meus → **mi**.
4. 4th decl.: gen. sg. **-us**, dat. **-ui**/-u; cornu/cornua/cornuum/cornibus; **domus**: domo / domuum, domorum / domibus / domi; manus, domus, porticus, tribus, acus, idus = **feminine**.
5. 5th decl.: **rei, fidei, spei, diei**; only dies/res have full plural; effigies → effigies.
6. **deus**: dei/dii/di; deorum/deum; deis/diis/dis. **dea, filia**: deabus, filiabus.
7. **vis, vim, vi; vires, virium, viribus.** **bos, bovis ... boum, bubus/bobus.** **Iuppiter, Iovis, Iovi, Iovem, Iove.** **senex, senis ... senum.** **iter, itineris.**
8. locative: **Romae, Athenis, Carthagine, domi, ruri**.
**Adjectives and adverbs**
9. abl. -**i** / gen. pl. -**ium** / n. pl. -**ia** for 3rd-decl. adjectives; -**e / -um / -a** for comparatives and for dives, pauper, princeps, vetus, compos, particeps, superstes; plures → plurium.
10. comparative -ior, -ius; superlative -issimus; **-rimus** (acer, pulcher, miser, liber, celer, pauper, vetus); **-limus** (facilis, difficilis, similis, dissimilis, humilis, gracilis); **-entior / -entissimus** (maledicus, magnificus, benevolus); **magis / maxime** for vowel + -us (idoneus, pius, dubius), but antiquus regular.
11. **bonus-melior-optimus; malus-peior-pessimus; magnus-maior-maximus; parvus-minor-minimus; multi-plures-plurimi; multum-plus-plurimum**; senior, iunior.
12. adverb from 1st/2nd decl. **-e** (clare, pulchre, libere); from 3rd decl. **-ter / -iter** (fortiter, breviter, celeriter, acriter, feliciter, **audacter**), -nt- stems **-nter** (prudenter); bene, male, magnopere; facile.
13. comparative adverb = neuter comparative (clarius, celerius, melius, peius, plus, minus, magis, diutius, saepius, facilius, apertius); superlative adverb = superlative stem + **-e** (clarissime, celerrime, optime, pessime, maxime, minime, diutissime, facillime, acerrime); plurimum.
**Pronouns**
14. is, ea, id: **eius, ei, eum, eo; ii/ei, eorum, iis/eis, eos**; hic: **huius, huic, hunc, hoc; hi, hae, haec; horum, harum; his; hos, has**; ille/iste/ipse/alter/unus/solus/totus/ullus/nullus/alius/uter: gen. **-ius**, dat. **-i**.
15. idem: **eundem, eandem, eorundem, earundem, eisdem**; quidam: **quendam, quandam, quorundam, cuiusdam**; qui: **cuius, cui, quem, quo; quorum, quarum, quibus**.
16. ego/tu/sui: mei, tui, sui; mihi, tibi, sibi; nostri/nostrum; vestri/vestrum; mecum, tecum, secum, nobiscum, vobiscum, quocum/quibuscum; **nemo: nullius, nemini, neminem**.
**Verb system**
17. 3rd/4th conj. **future -am, -es** ≠ present subj.; 1st/2nd conj. future -bo.
18. imperfect subj. = infinitive + endings (**amarem, legerem, audirem, caperem, essem, ferrem, vellem, nollem, mallem, possem, irem, fierem**).
19. pluperfect subj. = **perf. stem + -issem**; perfect subj. / future perfect = perf. stem + -erim / -ero.
20. 3rd pl. perfect **-erunt** (-ere); the perfect passive is participle + sum with **agreement**.
21. -io verbs: capiunt, capere, caperem, cape; **cupivi**; compounds accipio ... acceptum.
22. **imperatives: dic, duc, fac, fer (es, i, fi); future imperatives -to / -tote / -nto; noli(te) + inf.; memento, scito, esto.**
23. **infinitives:** passive -ri / -i (legi, capi); perfect active -isse (amasse, scisse); perf. pass. -um esse; future -urum esse; deponent future = active form (hortaturum esse).
24. **participles:** pres. -ns (abl. -e/-i), perf. pass. -tus, fut. act. -urus; deponent = perfect active meaning; moriturus, nasciturus.
25. **gerund = stem + -nd-, cases gen -ndi / dat -ndo / acc -ndum / abl -ndo; eo → eundi; no nominative.**
26. **supine = 3rd principal part -um (acc) / -u (abl).**
27. active periphrastic -urus + sum (acturus es; ascensuri fuerint); passive gerundive + sum.
28. **irregulars:** possum (potuisset, possit, possis); volo/nolo/malo (vis, vult, vultis; non vis; mavis; velim; vellem; noli); fero (fers, fert, fertis; ferrem; fer; tuli, latum; ferri); eo (is, it, eunt; ibam, ibo, ii/ivi; ire; iens, euntis; eundi; itum); fio (fis, fit, fiunt, fieri, fierem, fi); edo (es/est); sum compounds (absens, interesse).
29. deponents: -or forms with active meaning; imperfect subj. loquerer / morerer / uterer; semi-deponents audeo ausus sum, gaudeo gavisus sum, soleo solitus sum, fido fisus sum.
30. defective: memini / odi / coepi (perfect with present sense); aio, inquam (ait, inquit, inquiunt); ave / salve; impersonals only 3rd sg.

---

## 8. Where students actually go wrong (my analysis of the rules and of 6 years of questions; not measured data)

I found no published error statistics (the ministry does not release item-level results). The following are **predictions from the structure of the system plus the way questions are phrased**; use them to design distractors, not to claim facts.
1. **Reading the instruction wrong:** swapping "άλλο / ίδιο" (number or voice), "ονομαστική" vs "κλητική", comparing the right word in the wrong degree.
2. **Not first identifying the word in its sentence** (nominative or accusative plural?). `quidam`, `idem`, `omnia`, `hoc`, `qui`, `quae`, `id` are multi-purpose.
3. **Third declension: -um vs -ium, abl. -e vs -i.**
4. **Principal-part gaps** (supine, perfect stem): the single most common blocker for supine, gerund-of-compound, perfect, pluperfect subj.
5. **Imperatives** dic / duc / fac / fer and future -to forms; "τετελεσμένος μέλλοντας" vs perfect subjunctive.
6. **Passive vs deponent** (`mentiebatur`, `utitur`) and wrongly giving an active counterpart.
7. **Periphrastic forms**: forgetting agreement with the subject (the exam adds the hint "να ληφθεί υπόψη το υποκείμενο").
8. **Irregular verbs** under time pressure (possum compounds; volo/nolo; fio; eo; fero compounds with assimilation: attuli, allatum).
9. **Adverbs**: -e vs -ter, and the degrees' irregular ladders.

---

## 9. Hooks for a Greek student (the school books lean on Ancient Greek; use that)  [S1 §§74-75, S2]
- Latin **deponent = Greek middle/passive deponent** (S1 §74: "αποθετικά ... media tantum"). Latin has no middle voice, so passive-looking = active meaning for ~100 verbs.
- **Gerund = οι πλάγιες πτώσεις του έναρθρου απαρεμφάτου** (του γράφειν, τῷ γράφειν, τὸ γράφειν, διὰ τοῦ γράφειν). **Gerundive = ρηματικό επίθετο σε -τέος** (delenda est Carthago ~ καταστρεπτέα ἐστίν ἡ Καρχηδών). [S1 §75, S2 XXXII-XXXIII]
- **Active periphrastic -urus ~ μέλλω + απαρέμφατο / μετοχή μέλλοντα** (amaturus ~ ἀγαπήσων). [S1 §82]
- **Future imperative (-to)** ~ Greek imperatives in -τω; **ablative absolute ~ γενική απόλυτος** (syntax).
- **The Latin ablative merges three older cases** (αφαιρετική, οργανική, τοπική), so it covers jobs of the Greek genitive and dative (S2 XXXI).
- **Comparison**: ablative of comparison ~ γενική συγκριτική; `quam` ~ ἢ (S2 XXVI §7).
- **Reduplicated perfects** ~ Greek perfect (cecidi ~ πέπτωκα; tetendi ~ τέτακα). [S1 §87]
- **s-perfect ~ Greek sigmatic aorist** (carpsi ~ ἔδρεψα; dixi ~ ἔδειξα).
- Latin **idem** ~ ὁ αὐτός; **ipse** ~ αὐτός (emphatic); **is** ~ αὐτός (weak) (S1 §59, ylh note). 
- Nominal forms of the verb: **Latin has five; Greek has two** (infinitive, participle) + gerund/supine/gerundive (S1 §75).
- The **-ium rule**: parisyllabic / two-consonant-stem nouns = "φωνηεντόληκτα, κυρίως i-θέματα" (S1 §26 note). Use as the pedagogical explanation, not rote.

---

## 10. Implementation notes for the Carpe builders

**10.1 Build a morphology ENGINE, not hand-typed lists.** The app's quality bar ("every form correct") is best met by a small pure-JS module (`morph.js`) that generates forms from lemma + class + principal parts + a short exceptions table, plus a **test suite that reproduces `research/morphology-past-items.json`** (143 real items) and the paradigm tables in S1. A generated form beats ~5,000 hand-typed strings for correctness; the exceptions table (sections 2.7, 3.3, 6.11) is only ~150 entries.
**10.2 Data model suggestion.** Each *card* = `(lemma, cell)`, e.g. `urbs|gen.pl` or `scribo|supine.abl` or `fero|impv.pres.2sg`. SRS in `engine.js` already works per item; store a `(lemmaId, cellId)` key. Generate wrong answers from *neighbouring cells* (same lemma, other number/case/tense) = the exact confusions the exam creates.
**10.3 Question types mapped to what the exam does (all fit the Skepsis playful set):**
| Playful pattern | Latin-exam form |
|---|---|
| Guess-first | show a form in a sentence ("urbium": which case/number?) before teaching the rule |
| Multiple choice | pick the right cell from 4 neighbouring forms |
| Decode an unseen item (transfer) | give a fresh lemma + the rule, ask for the form the student has never seen |
| Build from tiles | assemble **stem + sign + ending**: legend-ebam, amav-issem, aud-iend-i, cap-t-u. This is the best match with how Latin is built |
| Match pairs | nominative ↔ genitive; verb ↔ 3 principal parts; Greek instruction ↔ Latin cell |
| Yes/No sorting game | "is it an i-stem?", "-ium or -um?", "deponent?", "needs -e on the imperative?" |
| Speed round "Κολοσσαίο" | 20 seconds, one miss ends it, items from Γ1-style prompts |
| Missed-question return, spaced review | exactly as in Skepsis |
| Teach-in-one-breath lines | one rule per card in Greek, e.g. «Αν έχει 2 σύμφωνα πριν το -is της γενικής → -ium» |
| Boss level | a mock Θέμα Γ: 12 nominal + 9 verbal items in 20 minutes, scored like the exam (Γ1 15 + Γ2 15) |
**10.4 "Decode the instruction" mini-game** (new): show «τη δοτική πτώση στον άλλο αριθμό» and ask which cell; teach "ίδιο / άλλο γένος | αριθμός | φωνή".
**10.5 Highlight the 2025-26 reality:** accept all variants the exam accepts (iis/eis/is; deis/diis/dis; sci(v)isse; Carthagine/Carthagini; amavissemus/amassemus). Grade by normalised string with a variants list; show the *alternatives* after the answer.
**10.6 Macron policy.** The exam prints macrons in the papers (e.g. `Nasīca`, `diēbus`) and expects none in answers. The app should show macrons on the question word, never require them in answers.
**10.7 Flag-able content:** keep a `status` field per fact: `school-book` / `general-latin` / `unsure` so the owner can re-verify [C] and UNSURE items.

---

## 11. Suggested morphology course map (ordered for a student with ~7 months: Nov 2026 to June 2027)

Sequence follows the school book's own order, front-loading the [A] items. Each unit is 3-6 mini-lessons of ~3 minutes.
| # | Unit (Greek working title) | Content | Tag |
|---|---|---|---|
| M1 | Ονόματα: πρώτη & δεύτερη κλίση (α) | cases, voc -e/-i, -er nouns, neuters | A |
| M2 | Τρίτη κλίση: βρες το θέμα | genitive → stem; consonant stems; stem changes | A |
| M3 | Τρίτη κλίση: -ium ή -um; -ia ή -a | the i-stem rule and exceptions | A |
| M4 | Τέταρτη & πέμπτη κλίση, domus, dies, res | | A |
| M5 | Παράξενα ουσιαστικά | deus, vis, bos, Iuppiter, senex, iter, plurale/singulare tantum, locative | A/B |
| M6 | Επίθετα: 1ης-2ας & 3ης κλίσης | abl -i / -e, gen pl -ium, n pl -ia | A |
| M7 | Παραθετικά (κανονικά) | -ior, -issimus, -rimus, -limus, magis/maxime | A |
| M8 | Παραθετικά (ανώμαλα) + επιρρήματα | the ladders | A |
| M9 | Αντωνυμίες I | ego/tu/sui, meus, hic/ille/is/iste | A |
| M10 | Αντωνυμίες II | ipse, idem, qui, quis, quidam, aliquis, nemo, nullus, uter | A |
| M11 | Ρήμα: ενεστώτας συστήματος (ενεργητική) | pres/impf/fut, 4+1 conj, sum | A |
| M12 | Ρήμα: παρακείμενος συστήματος + αρχικοί χρόνοι | 6 perfect families, supine stem | A |
| M13 | Παθητική φωνή + αποθετικά | -r forms, deponents, semi-deponents | A |
| M14 | Υποτακτική (4 χρόνοι, 2 φωνές) | | A |
| M15 | Προστακτική + απαγόρευση | | A |
| M16 | Απαρέμφατα & μετοχές | 6 infinitives, 3 participles, irregular future participles | A |
| M17 | Γερούνδιο, γερουνδιακό, σουπίνο | | A |
| M18 | Περιφραστική συζυγία | -urus / -ndus + sum | A |
| M19 | Ανώμαλα ρήματα I | possum, sum compounds, eo, fero | A |
| M20 | Ανώμαλα ρήματα II | volo/nolo/malo, fio, edo, queo; memini/odi/coepi; aio/inquam; impersonals | A/B |
| M21 | Σύνθετα ρήματα | vowel weakening, assimilation; fero & do compounds | B |
| M22 | Αριθμητικά | | B |
| M23 | Προσομοίωση Θέματος Γ | mock exams from the 143-item bank + new items in the same style | A |

---

## 12. Open questions and what I could NOT confirm
1. **June 2027 exam material**: resolved second-hand by `research/syllabus.md` (whole of Β΄ + Γ΄ list, no exclusions). I did not read ΦΕΚ Β΄ 4210 myself; re-confirm once against the PDF.
2. **Which grammar the markers hold as the standard.** The papers match S1 (Τζάρτζανος) in every case I checked (gen. pl. forms like `dotium`, `sedum`; locative rule; supine as `-u`; adverb forms). Student guides may differ on variants (e.g. `civi/cive`); the exam accepts "τεκμηριωμένη απάντηση", so allow both.
3. **Future-perfect infinitive** (`miratos fore`): accepted in a 2022 key; absent from S1 tables. Low-risk to ignore.
4. **`fores` gen. pl.**: S1 does not decline it; I suggest `forium` (i-stem) with `forum` accepted. UNSURE.
5. **Machine-checking of §6.6-6.7**: ~250 principal parts written from standard knowledge; verify against a second source before use.
6. **No error-frequency data**: the "wrong answer" columns are my reasoning. If you want measured data, the app could log wrong choices per cell (that would be the first real dataset).
7. **Textbook edition drift.** S2 volumes I downloaded are the current Digital School editions (large-print PDFs); the printed books may have different page numbers but the content is the same series (Πασχάλης-Σαββαντίδης).
8. **Pre-2022 morphology style** (2014-2020, old system with two directions) is partly seen only in 2020. Older papers (2000-2019) are on panellinies.net (links in the index) if a longer history is wanted.

---

## 13. All URLs used
- Official grammar: https://ebooks.edu.gr/ebooks/v/html/8547/2730/Latiniki-Grammatiki_G-Lykeiou_html-apli/ (index_02b ... index_07, index_09)
- Textbook Γ΄ Τεύχος Β΄: https://ebooks.edu.gr/ebooks/handle/8547/2400 (PDFs: `.../d/8547/6227/...Tomos-1.pdf`, `6228 ... Tomos-2`, `6229 ... Tomos-3`)
- ΙΕΠ teaching instructions 2025-26: https://www.iep.edu.gr/wp-content/uploads/2025/09/149771_2_%CE%A3%CE%A5%CE%9D_111018_%CE%9F%CE%94%CE%97%CE%93%CE%99%CE%95%CE%A3_%CE%9B%CE%91%CE%A4%CE%99%CE%9D%CE%99%CE%9A%CE%91_%CE%93%CE%95%CE%9B_2025_26-2.pdf
- 2026-27 exam material: https://www.alfavita.gr/ekpaideysi/ypoyrgeio-paideias/555141_trapeza-thematon-i-exetastea-yli-sta-mathimata-stis-b-kai-g ; https://filologikos-istotopos.gr/wp-content/uploads/2026/07/yli-Α_Β_Γ__ΓΕΛ_ΤΡΑΠ_ΘΕΜ_2026_27.pdf
- Papers and keys: https://www.panellinies.net/latinika-2026/ , /latinika-2025/ , /latinika-2024/ , /latinika-2023/ , /latinika-2022/ , /latinika-epanaliptikes-2022 ... 2026 ; 2020: /λατινικά-πανελλήνιες-2020/ (PDF e.g. https://www.panellinies.net/wp-content/uploads/2026_them/2026_them_gel/latinika_2026.pdf , .../2025_them/2025_them_gel/latinika_2025.pdf , .../2024/06/latinika_2024.pdf)
- Commentary: https://www.cnn.gr/ellada/story/422981/panellinies-2024-gia-kala-proetoimasmenous-ta-themata-ton-latinikon ; https://elp.gr/anakoinoseis/2025/06/panelladikes-2025-syntoma-scholia-gia-ta-themata-latinikon/ ; https://www.esos.gr/arthra/78540/esteilan-odigia-se-vathmologites-me-lathos-se-thema-ton-latinikon ; https://www.mad.gr/life/panellinies-2026-ta-themata-kai-oi-apantiseis-sta-latinika/
- Cross-checks: https://en.wiktionary.org/wiki/vis , /bos , /deus , /senex , /Iuppiter , /domus , /Appendix:Latin_irregular_verbs
- Companion file: `research/morphology-past-items.json` (143 real items with keys).
