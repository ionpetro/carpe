# Latin Panhellenic: the textbook texts (κείμενα) - research notes

Research date: 2026-11-01 (school year 2026-27, exam June 2027). Written by the "texts" research subagent.

## 0. First, a correction to the brief

The brief said the textbook is by **Μαρία Τσοτσορού** and has **50 texts**. I could not confirm that, and the official documents say otherwise:

- The prescribed books are **Πασχάλης Μ., Σαββαντίδης Γ., "Λατινικά" Τεύχος Α΄ and Τεύχος Β΄** (ΥΠΑΙΘΑ / ΙΤΥΕ "ΔΙΟΦΑΝΤΟΣ"), plus **Τζάρτζανος Α., "Λατινική Γραμματική"** as the reference book. Source: Υ.Α. **90176/Δ2 of 06-07-2026** "Καθορισμός εξεταστέας ύλης για το έτος 2027" (read in full, Latin section on its pp. 7-9; identical in content to the 2026 version). The same names appear in the 2021 and 2022 ministry documents and on the title pages of the PDFs I downloaded (title page of Τεύχος Β΄: "Μ. ΠΑΣΧΑΛΗΣ - Γ. ΣΑΒΒΑΝΤΙΔΗΣ, ΛΑΤΙΝΙΚΑ Γ΄ ΓΕΝΙΚΟΥ ΛΥΚΕΙΟΥ, ΤΕΥΧΟΣ Β΄, Ομάδας Προσανατολισμού Ανθρωπιστικών Σπουδών"). I found nobody called Τσοτσορού attached to this book anywhere.
- The books have **50 lessons (μαθήματα) in total, I-L**, one main Latin text per lesson. **Lessons I-XV are the Β' Λυκείου course.** What is examined in Γ' Λυκείου for the Panhellenic exams is: **Τεύχος Α΄ Μαθήματα XVI-XX and Τεύχος Β΄ Μαθήματα XXI-L = 35 texts (lesson numbers 16 to 50)**, plus the "Εισαγωγή" and all grammar/syntax of the course. The exam syllabus lists no exclusions. So "the 50 texts" = 50 lessons, of which **35 are the exam texts**. This file covers those 35 and gives a short table of I-XV in the appendix.
- Lesson numbers matter: the post-exam press releases (files `oefe2024/25/26`, issuer not printed in the text I extracted, probably the philologists' union) name the passages by lesson number ("Δόθηκαν αποσπάσματα από τα κείμενα 19 και 42", "24 και 39", "35 και 49").

## 1. Where the Latin comes from and how to get it (all free, official)

| Item | Link |
|---|---|
| Τεύχος Α΄ (lessons I-XX), PDF | https://ebooks.edu.gr/ebooks/v/pdf/8547/2528/22-0286-01-V1_Latinika-Teuchos-A_B-Lykeiou_Vivlio-Mathiti/ (record page https://ebooks.edu.gr/ebooks/handle/8547/2395) |
| Τεύχος Β΄ (lessons XXI-L), PDF | https://ebooks.edu.gr/ebooks/v/pdf/8547/2538/22-0165-02_V3_Latinika-Teuchos-B_G-Lykeiou_Vivlio-Mathiti/ (record page https://ebooks.edu.gr/ebooks/handle/8547/2400; interactive HTML edition linked from there) |
| Λατινική Γραμματική (Τζάρτζανος), PDF | https://ebooks.edu.gr/ebooks/v/pdf/8547/2530/22-0158-02_Latiniki-Grammatiki_G-Lykeiou-Epilogis_Vivlio-Mathiti/ (record page https://ebooks.edu.gr/ebooks/handle/8547/2396) |
| Εξεταστέα ύλη 2027 | Υ.Α. 90176/Δ2/06-07-2026 (also summarised in `research/syllabus.md`, written by another subagent) |

The PDFs are born-digital, so the text layer is clean (a handful of Greek look-alike letters inside Latin words, e.g. a Greek omicron in "quo", which my extraction script maps back). **Copyright:** the page after the colophon says reproduction "χωρίς τη γραπτή άδεια του Υπουργείου Παιδείας ... / ΙΤΥΕ - ΔΙΟΦΑΝΤΟΣ" is forbidden. The underlying Latin of Cicero, Livy and the others is public domain, but the book **adapts** it (shortens, swaps words, merges two letters in lesson 37), and those adaptations are what the exam uses. Therefore:
- this file quotes only 4-6 short fragments per lesson;
- the full clean Latin of the 35 texts is **not** committed. `research/tools/extract_textbook_latin.py` regenerates it locally from the two PDFs into `research/private/latin_full.json` (gitignored). `research/source-data/` (another subagent) already holds gitignored copies of the textbook text;
- if the app ever goes public with the full texts, ask ΙΤΥΕ/ΙΕΠ for permission or build a version from the public-domain originals.

## 2. The exam really is built from these 35 texts (this is the key finding)

I read the Panhellenic Latin papers of 2022, 2023, 2024, 2025 and 2026. The passages the students must translate are **word-for-word excerpts from the book's lessons** (same macrons and spelling; I compared all 11 passages letter by letter: every one is an exact substring of the lesson text, except that the 2023 paper silently corrects the book's typo "Scibōniānus" to "Scribōniānus", and the 2025/2026 excerpts end earlier with a full stop where the book continues), and the grammar and syntax questions are asked on words from the same passages.

| Year | Date | Lessons used | Evidence |
|---|---|---|---|
| 2022 | Wed 8 Jun | **16**, **36**, **45** (translate 36 and 45; 16 supplies Γ/Δ questions) | paper; I matched the Latin to the lessons |
| 2023 | Thu 8 Jun | **23**, **38** | paper; matched |
| 2024 | Thu 6 Jun | **19**, **42** | paper + press release "κείμενα 19 και 42" |
| 2025 | Wed 4 Jun | **24**, **39** | paper + press release "κείμενα 24 και 39" |
| 2026 | Fri 5 Jun | **35**, **49** | paper + press release "κείμενα 35 και 49" |

- 11 different lessons in five papers; **no lesson repeated**. The 24 lessons not yet drawn are 17, 18, 20, 21, 22, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 37, 40, 41, 43, 44, 46, 47, 48, 50. This is just what happened in five exams, not a prediction. 2022 (the first paper on this book) had three passages; from 2023 on there are two. I did not see the repeat (επαναληπτικές) papers or the pre-2022 exams (different book), so I make no claim about them.
- Paper layout 2024-2026 (total 100): Α1 translation of both passages, 20; Β1 literature/Εισαγωγή closed question, 10 (2024 press release: "limited to the first ten pages"); Β2 etymology matching (5 Latin words ↔ 7 Greek words, 2 extra; in 2024 the reverse: find a cognate in the texts), 10; Γ1 noun/adjective/adverb forms, 15; Γ2 verb forms (Γ2α 6 + Γ2β 9), 15; Δ1 syntax: name the function of 5-6 words (10-12) + one clause analysis (3-5), 15; Δ2 transformations (indirect↔direct speech, active↔passive, participle ↔ clause, conditionals, purpose in three ways), 15.
- The passages are cut at clause boundaries and sometimes begin mid-sentence (2024's second passage starts at "qui spem Catilīnae ...").
- The lesson's own grammar topic (the book's table at the back, reproduced below) often decides which Δ-question is built on its text. In 6 of the 11 passages a Δ-question matched the lesson's own topic: 2026 Δ2β on 49 (the "five ways to express purpose" table), 2025 Δ1β on 39 (conditionals), 2024 Δ1β on 42 (relative clauses), 2024 Δ2β on 19 (ablative absolute), 2023 Δ2α on 38 (the `dum`-clause is the lesson's temporal-clause topic, next to the `ut`-clause), 2022 Δ1β on 45 (`nē ... cognoscantur`, volitive clause). In the other 5 (16, 36, 23, 24, 35) the Δ-questions tested other topics (e.g. 24 → indirect→direct speech, 35 → place expression), so drill the whole grammar, not just each lesson's topic.

## 3. Printing conventions (the app must reproduce these exactly)

From the book's "Σύμβολα και συντομογραφίες" page and the texts themselves:
- **v** is used for consonantal u (vēni, servus, Vēientāna, vulnerāvit); **u** for the vowel. **i** is used for both vowel and consonantal i (iam, iudices, Iulia, ianua, maior). There is no j in the main texts (a stray "Juno"/"Jupiter" appears in exercise and intro lines). Capital letters only for proper nouns and sentence starts.
- **Macron ¯** marks (a) long penultimate syllables - needed for the accent rule; (b) a long o/e that is spelled ω/η in the Greek equivalent (Rōma, Cornēlius); (c) the vowel that tells apart homographs (līber/lĭber) and, importantly, **present vs perfect**: lēgit (perfect of lego) vs legit, vēnit vs venit, fēcit, fūgit, ēmit. (In 2026 the exam asked for a form of "vēnit" and the press release remarks that the voice of the requested form should have been stated - a reminder that these short perfect/present pairs are ambiguity hot-spots.) **Breve ˘** marks the short thematic vowel of 3rd-conjugation infinitives (legĕre) and some homographs. The book is not exhaustive: not every long vowel carries a macron, so do not treat macron-less as short.
- An **asterisk** printed above words in the lesson text flags words relevant to that lesson's grammar - not part of the Latin (I removed it in the quotes below). In etymology lines an asterisk means an unattested form.
- Spelling is mixed and not fully "assimilated": adgnōvit, conlocāvit, adliget, adfore, adfectus, conloqui, but collāto, conferre, immo. Keep every form as printed; the exam reproduces them and asks about them.
- Quotation marks «...», dashes –...– for parentheses, "(1)" footnote markers in vocabulary only.
- Apparent typos in the printed texts (keep them in the exam-facsimile mode, flag in the study view): lesson 18 "proximan speluncam" (for proximam); lesson 23 "Scibōniānus" in the first mention vs "Scribōniāno" two lines later (the 2023 paper prints Scribōniānus); lesson 50 "cotenderent" (Valerius Maximus has contenderent). Lesson 24 prints "P.Cornēlius" without a space.

## 4. How to read each lesson entry

- **Source status**: B = named in the book's own introduction; V = I matched the Latin against a public-domain full text (Latin Library, Perseus); S = identified via a secondary page/search result; M = from memory, not verified; ? = not identified. Combined codes mean both (B+V, S+B) or partly (B/? = work named, wording not matched; V/? = partly matched). Section numbers I give with a status other than V or B+V should be treated as hints.
- **Key sentences** are 4-6 fragments copied from the PDF text in order, with the book's punctuation (fragments can end with ; or :). The exam only ever uses excerpts of this kind.
- **Grammar** is the book's own table "Πίνακας των γραμματικών και συντακτικών φαινομένων κατά μάθημα" (back of each volume) in my English wording; this is also the order of the bullet list in the 2027 syllabus.
- **Exam record** lists, for the five papers, exactly what was asked on that lesson's words (Α = translation, Β = literature/etymology, Γ = morphology, Δ = syntax). I only list what I read in the papers.
- Key words are the headwords I would drill first from that lesson; glosses are mine. The book's own vocabulary boxes (`ΛΕΞΙΛΟΓΙΟ`) are the authoritative list and belong to the vocabulary research.
- Greek translations: the book gives none of the main texts (only vocabulary and notes), and the translations in the answer keys are the teachers' own - we write our own.

---

## 5. The 35 texts


### Lesson 16 (XVI) - Η τελευταία μάχη του Καίσαρα στη Γαλατία

- **Book**: Τεύχος Α΄
- **Source** [V]: Caesar, De bello Gallico 7.88 (end of Alesia, Vercingetorix surrenders); lightly adapted
- **Grammar / syntax of the lesson** (book's table): passive present indicative of 3rd conj. + passive infinitive in -i; deponents of 3rd conj.; passive future of 3rd/4th conj.; fio
- **Exam record**: 2022 - appears in the paper (not one of the two translation passages). Asked on it: Γ1 Nostri, hostes, terga, equites, magna, caedes; Γ2 gerunt (fut. perfect), cernitur (future), Fit (imperative pl.); Δ1α eis.
- **What to watch**: Many 3rd-person singular/plural passives in a row (occiditur, comprehenditur, referuntur, capitur, interficitur, mittuntur, producuntur, deditur, proiciuntur).
- **Key words**: hostis -is m.; tergum -i n. (terga vertere = flee); eques -itis m.; caedes -is f.; cerno, crēvi, crētum 3; occurro, -curri, -cursum 3 (+dat.); dedo, dedidi, deditum 3; fio, fieri, factus sum
- **Key sentences** (as printed):
  - Nostri, postquam pila in hostes misērunt, gladiis rem gerunt.
  - Repente post tergum equitātus cernitur; cohortes appropinquant; hostes terga vertunt ac fugiunt; eis equites occurrunt.
  - Fit magna caedes.
  - Sedulius, dux et princeps Lemovīcum, occiditur; dux Arvernōrum vivus in fugā comprehenditur;
  - Caesar iubet arma tradi ac principes prodūci.
  - Vercingetorix deditur, arma proiciuntur.

### Lesson 17 (XVII) - Φόβος μπροστά στο άγνωστο

- **Book**: Τεύχος Α΄
- **Source** [V]: Caesar, De bello Gallico 1.39 (panic in Caesar's army before Ariovistus); adapted
- **Grammar / syntax of the lesson** (book's table): passive imperfect indicative (+ deponents); perfect passive participle; compounds of do; internal vs external compelling cause
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: pudōre adductī / timōre = 'internal compelling cause' (abl. without preposition) vs propter / ob + acc. = external cause.
- **Key words**: timor -ōris m.; praedico 1; pudor -ōris m.; testamentum -i n.; obsigno 1; perītus -a -um; perturbo 1; paulātim
- **Key sentences** (as printed):
  - Magnus timor exercitum occupāvit ex vocibus Gallōrum ac mercatōrum, qui Germānos ingenti magnitudine corporum et incredibili virtūte esse praedicābant.
  - Alius aliā de causā discedere cupiēbat.
  - Nonnulli pudōre adducti remanēbant.
  - Totis castris testamenta obsignabantur.
  - Horum vocibus ac timōre paulātim etiam ii, qui rei militāris perīti habebantur, perturbabantur.

### Lesson 18 (XVIII) - Ο Ηρακλής στην Ιταλία

- **Book**: Τεύχος Α΄
- **Source** [V/?]: Hercules and Cacus: partly follows Livy 1.7 ('caudis in speluncam traxit'), but the opening sentence is not Livy's wording; exact source not found
- **Grammar / syntax of the lesson** (book's table): perfect active infinitive (always indirect statement, subject in acc.); personal construction with dicitur/fertur + nom. + inf.; quidam, quaedam, quoddam/quiddam; bos
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Printed 'proximan speluncam' (sic; should be proximam) - an apparent typo in the book's text. Personal construction 'Hercules ... adduxisse dicitur' is the exam-style trap (nom., not acc.).
- **Key words**: bos bovis m./f.; spelunca -ae f.; vestigium -ii n.; mugītus -us m.; fretus -a -um (+abl.); amoveo, -movi, -motum 2; dormio 4
- **Key sentences** (as printed):
  - Hercules boves Geryŏnis ex Hispaniā in eum locum adduxisse dicitur, ubi postea Rōmulus urbem Rōmam condidit.
  - Tum Cacus pastor, fretus viribus, boves quosdam in speluncam caudis traxit aversos.
  - Ubi Hercules, e somno excitātus, gregem aspexit et partem abesse sensit, pergit ad proximan speluncam; sed postquam boum vestigia foras versa vidit, confūsus gregem ex loco infesto amovēre coepit.
  - Tum Cacus, vi prohibēre eum conātus, Herculis clavā interficitur.

### Lesson 19 (XIX) - Η συνωμοσία του Κατιλίνα

- **Book**: Τεύχος Α΄
- **Source** [B/?]: Short narrative (Catiline, 63-62 BC) in the book's own words; names Sallust as authority ('Gaius Sallustius tradit'); the opening consular-date sentence is not Sallust's phrasing
- **Grammar / syntax of the lesson** (book's table): perfect-system passive (participle + sum/eram/ero); perfect passive infinitive; superlative of adjectives; genitive and ablative of quality; ablative absolute (Cicerōne et Antōnio consulibus); cado vs caedo
- **Exam record**: 2024 - first passage ('Marco Tullio Cicerōne ... strangulāti sunt'). Asked: Γ2β coniurāvit (1sg present subj.), consecūti erant, expulsus est (2sg imperfect, other voice), deprehensi sunt (gen. of gerund); Δ1α ingenii, ex urbe, eius; Δ2α 'Ab Antōnio ... interfectus est' passive→active; Δ2β 'Marco Tullio Cicerōne et Gaio Antōnio consulibus' → name it + turn into a cum-clause.
- **What to watch**: Classic exam move: ablative absolute with consulibus → 'cum + subj.' clause (historic cum). occīdo (kill, long ī) vs occido (fall).
- **Key words**: coniuro 1; consequor, -secūtus sum 3 dep.; expello, -puli, -pulsum 3; deprehendo, -prendi, -prensum 3; strangulo 1; occīdo, -cīdi, -cīsum 3; interficio, -fēci, -fectum 3
- **Key sentences** (as printed):
  - Marco Tullio Cicerōne et Gaio Antōnio consulibus, Lucius Sergius Catilīna, nobilissimi generis vir sed ingenii pravissimi, contra rem publicam coniurāvit.
  - Eum clari quidam sed improbi viri consecūti erant.
  - Catilīna a Cicerōne ex urbe expulsus est.
  - Socii eius deprehensi sunt et in carcere strangulāti sunt.
  - Ab Antōnio, altero consule, Catilīna ipse cum exercitu suo, proelio victus, interfectus est.
  - Gaius Sallustius tradit multos etiam milites Rōmānos in eādem cruentissimā pugnā occīsos esse, multos autem graviter vulnerātos esse.

### Lesson 20 (XX) - Πίσω από τις κουρτίνες ή πώς ο Κλαύδιος έγινε αυτοκράτορας

- **Book**: Τεύχος Α΄
- **Source** [V]: Suetonius, Divus Claudius 10 (Claudius found behind curtains); adapted
- **Grammar / syntax of the lesson** (book's table): present participle; future participle; participle syntax (adjectival, adverbial); active periphrastic conjugation; future infinitive; dative of possession est mihi nomen; dum + present indicative
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: dum + present indicative = 'while' (even for past narrative). moritūrum = future participle of morior.
- **Key words**: imperium -ii n.; insidiator -ōris m.; recedo, -cessi, -cessum 3; abdo, -didi, -ditum 3; adgnosco (agnosco), -nōvi, -nitum 3; delātus (fero); trepidus
- **Key sentences** (as printed):
  - Claudius quinquagesimo anno aetātis suae imperium cēpit mirabili quodam casu.
  - Exclūsus ab insidiatōribus Caligulae, recesserat in diaetam, cui nomen est Hermaeum.
  - Discurrens miles pedes eius animadvertit; eum latentem adgnōvit; extractum imperatōrem eum salutāvit.
  - Ab his in castra delātus est tristis et trepidus, dum obvia turba quasi moritūrum eum miserātur.
  - Postero die Claudius imperātor factus est.

### Lesson 21 (XXI) - Πώς πήρε το όνομά του το Pisaurum

- **Book**: Τεύχος Β΄
- **Source** [B]: Servius' commentary on Vergil (named in the book's intro: 'ο σχολιαστής του Βιργιλίου Σέρβιος')
- **Grammar / syntax of the lesson** (book's table): ablative absolute (including the idiomatic type 'Brenno duce', 'Cicerōne consule', 'Cicerōne puero')
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Two kinds of absolute abl.: participle + noun (delētis legiōnibus, interemptis quibus) and noun + noun/adjective (Brenno duce). Etymology joke pensum aurum > Pisaurum. In the papers I read the ablative absolute was asked in 2022 (interceptā epistulā) and 2024 (consulibus → cum-clause).
- **Key words**: everto, -verti, -versum 3; dictātor -ōris m.; exilium -ii n.; sequor, secūtus sum 3 dep.; interimo, -ēmi, -emptum 3; appendo, -pendi, -pensum 3; penso 1
- **Key sentences** (as printed):
  - Brenno duce Galli, apud Alliam flumen delētis legiōnibus Rōmanōrum, evertērunt urbem Rōmam praeter Capitōlium, pro quo immensam pecuniam accepērunt.
  - Tum Camillus, qui diu apud Ardeam in exilio fuerat propter Vēientānam praedam non aequo iure divīsam, absens dictātor est factus; is Gallos iam abeuntes secūtus est: quibus interemptis aurum omne recēpit.
  - Quod illic appensum civitāti nomen dedit: nam Pisaurum dicitur, quod illic aurum pensātum est.
  - Post hoc factum rediit in exilium, unde tamen rogātus reversus est.

### Lesson 22 (XXII) - Προτροπές προς τους Ρωμαίους

- **Book**: Τεύχος Β΄
- **Source** [S+B]: Cicero, Pro Sestio 143
- **Grammar / syntax of the lesson** (book's table): present subjunctive active + passive (hortatory/jussive 1st pl.; also potential, deliberative, optative, concessive uses)
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Book modernises Cicero's -is accusatives (praesentes, innumerabiles). Ten 1st-person-plural hortatory subjunctives = ideal for a 'spot the subjunctive' drill.
- **Key words**: imitor 1 dep.; pareo, -ui, -itum 2 (+dat.); consulo, -ui, -sultum 3 (+dat.); neglego, -lexi, -lectum 3; servio 4 (+dat.); mortālis -e; sempiternus -a -um
- **Key sentences** (as printed):
  - Imitēmur nostros Brutos, Camillos, Decios, Curios, Fabricios, Scipiōnes, innumerabiles alios qui hanc rem publicam stabilivērunt;
  - Amēmus patriam, pareāmus senatui, consulāmus bonis;
  - praesentes fructus neglegāmus, posteritātis gloriae serviāmus;
  - id esse optimum putēmus, quod est rectissimum;
  - sperēmus quae volumus, sed ferāmus quod acciderit;
  - arbitrēmur denique corpus virōrum fortium magnorumque hominum esse mortāle, animi vero motus et virtūtis gloriam sempiternam esse.

### Lesson 23 (XXIII) - Ένας υπέροχος άνθρωπος

- **Book**: Τεύχος Β΄
- **Source** [B+V]: Pliny the Younger, Epistulae 3.16 (Arria and Caecina Paetus)
- **Grammar / syntax of the lesson** (book's table): imperfect subjunctive active/passive; uses of the subjunctive; consecutio temporum (sequence of tenses)
- **Exam record**: 2023 - first passage ('Scribōniānus arma ... secūta est', plus 'Deinde, cum lacrimae ... redībat'). Asked: Γ2α four indicative verbs of 'Arria ... secūta est' → future 3pl; Γ2β vincerent (perfect 2sg), egrediebātur (infinitive), redībat (gen. of pres. participle), moverat (supine abl.), fuerat (subj.), 'Erat ascensūrus' (3pl perfect subj.); Δ1α se, contra Claudium, piscatoriam.
- **What to watch**: The book prints 'Scibōniānus' in the first mention (typo) and 'Scribōniāno' next; the 2023 paper corrected it to Scribōniānus. 'ita parāvit, ut ignorarētur' = result clause; 'orābat, ut simul imponerētur' = volitive (substantive) clause - two different uses of ut + imperfect subjunctive in one lesson. Active periphrastic: erat ascensūrus.
- **Key words**: aegroto 1; funus -eris n.; ignoro 1; simulo 1; cohibeo, -ui, -itum 2; impetro 1; conduco, -duxi, -ductum 3; marītus -i m.
- **Key sentences** (as printed):
  - Aegrotābat Caecīna Paetus, marītus Arriae, aegrotābat et filius. Filius mortuus est.
  - Huic Arria funus ita parāvit, ut ignorarētur a marīto;
  - quin immo cum illa cubiculum marīti intraverat, vivere filium simulābat, ac marīto persaepe interroganti, quid ageret puer, respondēbat: «Bene quiēvit, libenter cibum sumpsit».
  - Deinde, cum lacrimae suae, diu cohibitae, vincerent prorumperentque, egrediebātur; tum se dolōri dabat et paulo post siccis oculis redībat.
  - Erat ascensūrus navem; Arria milites orābat, ut simul imponerētur.
  - Non impetrāvit: conduxit piscatoriam naviculam ingentemque navem secūta est.

### Lesson 24 (XXIV) - Το πάθημα ενός ψεύτη

- **Book**: Τεύχος Β΄
- **Source** [V]: Cicero, De Oratore 2.276 (Nasica and Ennius)
- **Grammar / syntax of the lesson** (book's table): perfect + pluperfect subjunctive (active and passive); sequence of tenses; historic and temporal cum; substantive clauses with quod
- **Exam record**: 2025 - first passage ('Accipe nunc quid postea Nasīca fecerit ... tu mihi ipsi non credis?'). Asked: Γ2α three deponent forms in the two passages + their present participles; Γ2β Accipe (supine abl.), fecerit (imperative), venisset (dative of gerund), exclamāvit (1pl present subj.), credis (perfect participle); Δ1α diēbus, se, ancillae; Δ2α indirect→direct for 'Accipe nunc quid Nasīca fecerit', 'Exclamāvit Nasīca se domi non esse', 'Visne scīre quid Nasīca responderit?'.
- **What to watch**: Indirect question after imperative (Accipe quid ... fecerit) and indirect statement (se domi non esse) are both turned back to direct speech in the exam. domi = locative.
- **Key words**: ancilla -ae f.; ostium -ii n.; iussu (abl. only); mentior, mentītus sum 4 dep.; indignor 1 dep.; cognosco, -nōvi, -nitum 3; impudens -ntis
- **Key sentences** (as printed):
  - Cum P.Cornēlius Nasīca ad Ennium poētam venisset eique ab ostio quaerenti Ennium ancilla dixisset eum domi non esse, Nasīca sensit illam domini iussu id dixisse et illum intus esse.
  - Accipe nunc quid postea Nasīca fecerit.
  - Paucis post diēbus cum Ennius ad Nasīcam venisset et eum a ianuā quaereret, exclamāvit Nasīca se domi non esse, etsi domi erat.
  - Tum Ennius indignātus quod Nasīca tam aperte mentiebātur: «Quid?» inquit «Ego non cognosco vocem tuam?» Visne scīre quid Nasīca responderit?
  - «Homo es impudens. Ego cum te quaererem, ancillae tuae credidi te domi non esse; tu mihi ipsi non credis?»

### Lesson 25 (XXV) - Πώς ένα σύκο στάθηκε αφορμή να καταστραφεί η Καρχηδόνα

- **Book**: Τεύχος Β΄
- **Source** [B]: Pliny the Elder, Naturalis Historia 15.74 (Cato's fig; named in the book's intro; section number from memory)
- **Grammar / syntax of the lesson** (book's table): imperative present/future, active and passive; prohibition (noli/nolite + inf., ne + perfect subj.); time expressions ante/post + acc.
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: scitōte, mementōte = future imperatives of scio/memini (they replace the missing present imperative). Prohibition: nolīte confidere; 'neminem credideritis' (ne-type, perfect subj.). Cato's 'ceterum censeo Carthaginem esse delendam' is in the intro, not in the Latin text. Imperatives asked on other texts: 2022 dixit, abiciat, Fit; 2023 fēcit; 2024 dicerent; 2025 fecerit; 2026 conferre.
- **Key words**: ficus -i/-ūs f.; curia -ae f.; decerpo, -cerpsi, -cerptum 3; confīdo, confīsus sum 3 semidep.; memini, meminisse; extrēmus -a -um; discrīmen -inis n.
- **Key sentences** (as printed):
  - Cato attulit quodam die in curiam ficum praecocem ex Carthagine ostendensque patribus «Interrogo vos» inquit «quando hanc ficum decerptam esse putētis ex arbore».
  - Cum omnes recentem esse dixissent, «Atqui ante tertium diem» inquit «scitōte decerptam esse Carthagine. Tam prope a muris habēmus hostem!
  - Itaque cavēte periculum, tutamini patriam. Opibus urbis nolīte confidere.
  - Neminem credideritis patriae consultūrum esse, nisi vos ipsi patriae consulueritis.
  - Mementōte rem publicam in extremo discrimine quondam fuisse!» Statimque sumptum est Punicum bellum tertium, quo Carthāgo delēta est.

### Lesson 26 (XXVI) - Ο Πλίνιος αναγγέλλει ένα θλιβερό γεγονός

- **Book**: Τεύχος Β΄
- **Source** [B+V]: Pliny the Younger, Epistulae 5.16 (death of Minicia Marcella); book changes the age to XIII
- **Grammar / syntax of the lesson** (book's table): comparison of adjectives (comparative/superlative; -er, -lis; periphrastic magis/maxime); formation + comparison of adverbs; second term of comparison (quam / abl.)
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Series of exclamations with ut / quam + indicative. Book's addressee is 'Marcellīno'. Epitaph D(IS) M(ANIBUS) in the intro is not part of the Latin text. Comparison/degree questions recur in the exam on other texts: 2022 magna, celeriter; 2026 Aequum, certissimum.
- **Key words**: festīvus -a -um; amabilis -e; dignus -a -um (+abl.); anīlis -e; gravitas -ātis f.; inhaereo, -haesi, -haesum 2; lectito 1; valetūdo -inis f.
- **Key sentences** (as printed):
  - C. Plinius Marcellīno suo salūtem. Tristissimus haec tibi scribo: Fundāni nostri filia minor mortua est.
  - Eā puellā nihil umquam festivius, nihil amabilius nec longiōre vitā dignius vidi.
  - Nondum annos XIII impleverat, et iam illi anīlis prudentia, matronālis gravitas erat et tamen suavitas puellāris.
  - Ut illa patris cervicibus inhaerēbat!
  - quam studiōse, quam intellegenter lectitābat! ut parce ludēbat!
  - Quā illa patientiā, quā etiam constantiā novissimam valetudinem tulit!

### Lesson 27 (XXVII) - Το πνεύμα ωριμάζει όπως οι καρποί

- **Book**: Τεύχος Β΄
- **Source** [V]: Aulus Gellius, Noctes Atticae 13.2 (Accius visits Pacuvius)
- **Grammar / syntax of the lesson** (book's table): irregular comparison; maior natu / minor natu; absolute comparative; no indicative in indirect speech (subjunctive in the relative clause quae scripsisset)
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: lēgit (perfect, long ē) vs legit; duriōra, acerbiōra, meliōra = absolute/neuter plural comparatives.
- **Key words**: tragoedia -ae f.; recedo, -cessi, -cessum 3; sonōrus -a -um; acerbus -a -um; paenitet (impers.); mitis -e; putris -e; aiunt
- **Key sentences** (as printed):
  - Cum Accius ex urbe Rōmā Tarentum venisset, ubi Pacuvius grandi iam aetāte recesserat, devertit ad eum.
  - Accius, qui multo minor natu erat, tragoediam suam, cui «Atreus» nomen est, ei desideranti lēgit.
  - Tum Pacuvius dixit sonōra quidem esse et grandia quae scripsisset, sed vidēri tamen ea sibi duriōra et acerbiōra.
  - Nam quod in pomis est, idem esse aiunt in ingeniis: quae dura et acerba nascuntur, post fiunt mitia et iucunda; sed quae gignuntur statim viēta et mollia, non matūra mox fiunt sed putria».

### Lesson 28 (XXVIII) - Στα ίχνη ενός δραπέτη δούλου

- **Book**: Τεύχος Β΄
- **Source** [B]: Cicero, Epistulae ad Quintum fratrem 1.2.14 (named in the book's intro: letter to his brother Quintus; section number from memory)
- **Grammar / syntax of the lesson** (book's table): place expressions (locative, ablative of separation, accusative of direction; names of towns Rōmā/Athēnas/Athēnis/Ephesi); time expressions; irregular verb eo, ii (ivi), itum, ire
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: The key table: Rōmā (from) / Rōmam (to) / Rōmae (in) - same pattern for Athēnae, Carthāgo, Ephesus. This lesson's grammar is exactly what the 2026 Δ1β question tested (on text 35).
- **Key words**: servus -i m.; fugio, fūgi, fugitum 3*; fugitīvus -i m.; comprehendo, -prehendi, -prehensum 3; custōdia -ae f.; investīgo 1; dedūco, -duxi, -ductum 3; scelus -eris n.
- **Key sentences** (as printed):
  - Aesōpi nostri Licinus servus tibi notus Rōmā Athēnas fūgit.
  - Is Athēnis apud Patrōnem Epicurēum paucos menses pro libero fuit, inde in Asiam abiit.
  - Postea Plato quidam Sardiānus, cum eum fugitīvum esse ex Aesōpi litteris cognovisset, hominem comprehendit et in custōdiam Ephesi tradidit.
  - Tu hominem investīga, quaeso, summāque diligentiā vel Rōmam mitte vel Epheso rediens tecum dedūc.
  - Noli spectāre quanti homo sit. Parvi enim preti est, qui tam nihili est.

### Lesson 29 (XXIX) - Ο Οκταβιανός, ο παπουτσής και το κοράκι

- **Book**: Τεύχος Β΄
- **Source** [M]: Macrobius, Saturnalia 2.4.29-30 (raven that greeted Augustus); not named in the book's intro; from memory
- **Grammar / syntax of the lesson** (book's table): uses of the genitive (with nouns, with verbs: genitive of value tanti/quanti, interest; with adjectives)
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Caesaris multum interfuit (interest + gen.); tanti ... quanti = 'for as much as' (gen. of price). 'Oleum et operam perdidi' is a proverb still quoted.
- **Key words**: corvus -i m.; salutatio -ōnis f.; sutor -ōris m.; sestertius -ii m.; interest (impers.); impendo, -pendi, -pensum 3; disco, didici 3
- **Key sentences** (as printed):
  - Cum Octaviānus post victoriam Actiacam Rōmam redīret, homo quidam ei occurrit corvum tenens; eum instituerat haec dicere: «Ave, Caesar, victor imperātor».
  - Caesaris multum interfuit corvum emere; itaque viginti milibus sestertium eum ēmit.
  - Diu operam frustra impendēbat; quotiescumque avis non respondēbat, sutor dicere solēbat «Oleum et operam perdidi».
  - Audītā salutatiōne Caesar dixit: «Domi satis salutatiōnum talium audio».
  - Ad haec verba Augustus risit emitque avem tanti, quanti nullam adhuc emerat.

### Lesson 30 (XXX) - Ο Λικίνιος Μουρήνας και τα ήθη της Ανατολής

- **Book**: Τεύχος Β΄
- **Source** [B+V]: Cicero, Pro Murena 11-12 (Murena's service in Asia)
- **Grammar / syntax of the lesson** (book's table): uses of the dative (indirect object; possessor/interest; dative of purpose - adiumentō, solaciō, gratulatiōni)
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Double dative (patri suo magno adiumentō) is the prize catch. virtūtis / pietātis / felicitātis fuit = predicative (characteristic) genitive: 'it was a mark of ...'.
- **Key words**: adiumentum -i n.; solacium -ii n.; gratulatio -ōnis f.; luxuria -ae f.; continenter; accusator -ōris m.; flagitium -ii n.; stipendium -ii n.; mereo 2 (stipendia mereo)
- **Key sentences** (as printed):
  - Hic vero, iudices, et fuit in Asiā et viro fortissimo, patri suo, magno adiumento in periculis, solacio in laboribus, gratulatiōni in victoriā fuit.
  - Et si habet Asia suspiciōnem quandam luxuriae, Murēnam laudāre debēmus, quod Asiam vidit sed in Asiā continenter vixit.
  - Meruisse vero stipendia in eo bello virtūtis fuit; patre imperatōre libentissime meruisse pietātis fuit; finem stipendiōrum patris victōriam ac triumphum fuisse felicitātis fuit.

### Lesson 31 (XXXI) - Η γενναιότητα δε βγαίνει πάντα σε καλό

- **Book**: Τεύχος Β΄
- **Source** [?]: Story of T. Manlius Torquatus and his son (340 BC): adapted; exact source not identified (Livy 8.7 / Valerius Maximus 2.7.6 / Gellius 9.13 are the candidates)
- **Grammar / syntax of the lesson** (book's table): uses of the ablative (separation, instrument/means, cause, manner, comparison, price, time, place...)
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Lots of ablatives without preposition: genere natus, pugnā abstinērent, fugā, hastā, armis, iniussū, operā. iniussū exists only as ablative.
- **Key words**: edīco, -dixi, -dictum 3; abstineo, -tinui, -tentum 2; lacesso, -īvi, -ītum 3; antecello 3; confīdo, confīsus sum 3; transfīgo, -fixi, -fixum 3; spolio 1; multo 1
- **Key sentences** (as printed):
  - Bello Latīno T. Manlius consul nobili genere natus exercitui Rōmanōrum praefuit. Is cum aliquando castris abīret, edixit ut omnes pugnā abstinērent.
  - «Congrediāmur, ut singulāris proelii eventu cernātur, quanto miles Latīnus Rōmāno virtūte antecellat».
  - Tum adulescens, viribus suis confīsus et cupiditāte pugnandi permōtus, iniussū consulis in certāmen ruit; et fortior hoste, hastā eum transfixit et armis spoliāvit.
  - Sed consul, cum in castra revertisset, adulescentem, cuius operā hostes fugāti erant, morte multāvit.

### Lesson 32 (XXXII) - Ένας πανηγυρικός της λογοτεχνίας

- **Book**: Τεύχος Β΄
- **Source** [B+V]: Cicero, Pro Archia 14
- **Grammar / syntax of the lesson** (book's table): the gerund (4 cases) and its replacement by the gerundive attraction in some cases
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Text is a gerund goldmine: intuendum, imitandum, bene gerendi et administrandi, colendo, cogitando, expetendo, ducendo. Gerund forms asked on other texts: 2023 petit; 2024 deprehensi sunt; 2025 venisset; 2026 scripsit, interficiendo.
- **Key words**: exemplum -i n.; vetustas -ātis f.; imago -inis f.; intueor 2 dep.; expeto, -īvi, -ītum 3; dimicatio -ōnis f.; conformo 1; colo, colui, cultum 3
- **Key sentences** (as printed):
  - Pleni omnes sunt libri, plenae sapientium voces, plena exemplōrum vetustas; quae iacērent in tenebris omnia, nisi litterārum lumen accederet.
  - Quam multas imagines fortissimōrum virōrum –non solum ad intuendum, verum etiam ad imitandum– scriptōres et Graeci et Latīni nobis reliquērunt!
  - Colendo et cogitando homines excellentes animum et mentem meam conformābam.
  - Sic enim –laudem et honestātem solum expetendo, omnes cruciātus corporis et omnia pericula mortis parvi esse ducendo– me pro salūte vestrā in tot ac tantas dimicatiōnes obicere potui.

### Lesson 33 (XXXIII) - Καιρός για ανασυγκρότηση

- **Book**: Τεύχος Β΄
- **Source** [B+V]: Cicero, Pro Marcello 23
- **Grammar / syntax of the lesson** (book's table): the gerundive (-ndus -a -um) and the passive periphrastic conjugation (personal + impersonal; agent in the dative); omission of sum
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Personal: Omnia sunt excitanda; constituenda iudicia. Impersonal: subveniendum est reipublicae (verb + dative). Agent = dative (tibi).
- **Key words**: excito 1; constituo, -ui, -ūtum 3; comprimo, -pressi, -pressum 3; propago 1; suboles -is f.; vincio 4; subvenio, -vēni, -ventum 4 (+dat.); medeor 2 dep. (+dat.); sano 1
- **Key sentences** (as printed):
  - Omnia sunt excitanda tibi uni, C. Caesar, quae iacēre sentis perculsa atque prostrāta impetu belli ipsīus, quod necesse fuit: constituenda iudicia, revocanda fides, comprimendae libidines, propaganda suboles;
  - omnia quae dilapsa iam diffluxērunt, sevēris legibus vincienda sunt.
  - Quare subveniendum reipublicae est et omnia nunc belli vulnera tibi sananda sunt, quibus praeter te medēri nemo potest.

### Lesson 34 (XXXIV) - Ο Σκιπίωνας ο Αφρικανός και οι λήσταρχοι

- **Book**: Τεύχος Β΄
- **Source** [V]: Valerius Maximus 2.10.2 (Scipio Africanus at Liternum and the pirate chiefs)
- **Grammar / syntax of the lesson** (book's table): the supine (-um of purpose after verbs of motion; -ū of respect); expression of purpose
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: salutātum venērunt (supine in -um = purpose); incredibile audītu (supine in -u = respect). Exam asks the 'accusative/ablative of the supine' for random verbs. Supine forms asked on other texts: 2022 attulissent; 2023 moverat; 2024 intellego; 2025 Accipe; 2026 accepērunt.
- **Key words**: praedo -ōnis m.; domesticus -a -um; conloco 1; resero 1; intromitto, -mīsi, -missum 3; venerōr 1 dep.; osculor 1 dep.; consecro 1
- **Key sentences** (as printed):
  - Cum Africānus in Literno esset, complūres praedōnum duces forte salutātum ad eum venērunt.
  - Quod ut praedōnes animadvertērunt, abiectis armis ianuae appropinquavērunt et clarā voce Scipiōni nuntiavērunt (incredibile audītu!) virtūtem eius admirātum se venisse.
  - Haec postquam domestici Scipiōni rettulērunt, is fores reserāri eosque intromitti iussit.
  - Praedōnes postes ianuae tamquam sanctum templum venerāti sunt et cupide Scipiōnis dextram osculāti sunt.

### Lesson 35 (XXXV) - Ο φιλόσοφος μπροστά στα δεινά της εξορίας

- **Book**: Τεύχος Β΄
- **Source** [B]: Seneca, Ad Helviam matrem (consolatio) 12.4-6 (named in the book's intro: consolation to his mother Helvia; paragraph numbers from memory)
- **Grammar / syntax of the lesson** (book's table): causal clauses (quod, quia, quoniam, cum + subj.; reported cause with subj.)
- **Exam record**: 2026 - first passage ('Atilius Rēgulus ... reliquerat pater'). Asked: Γ1 senātum, rus, id, dotem, illis, Aequum (other degrees), populum (vocative); Γ2β scripsit (gen. of gerund), discessisse (1pl present subj.), aberat (present participle), accepērunt (supine acc.), conferre (future imperative), exigeret (1pl perfect); Δ1α ab eo, curāri, semper; Δ1β 'cum Poenos in Africā funderet' - replace the place expression with Roma / Athenae / Carthago.
- **What to watch**: quod vixerint (subjunctive = alleged reason), quoniam Rēgulus aberat (indicative = real reason), quia nihil illis reliquerat pater, cum ... exigeret (cum + subj. = causal/adversative 'whereas'), cum Poenos ... funderet (narrative cum). Contrast indicative vs subjunctive.
- **Key words**: misereor 2 dep. (+gen.); sequester -tris m.; aes aeris n.; confero, -tuli, collātum 3; tribūtum -i n.; exigo, -ēgi, -actum 3; mercenarius -ii m.; dos dōtis f.
- **Key sentences** (as printed):
  - Unum fuisse Homēro servum, tres Platōni, nullum Zenōni tradunt.
  - Menēnius Agrippa, qui inter patres ac plēbem publicae gratiae sequester fuit, aere collāto funerātus est.
  - Atilius Rēgulus, cum Poenos in Africā funderet, ad senātum scripsit mercenarium suum discessisse et ab eo desertum esse rus; id senatui publice curāri placuit, quoniam Rēgulus aberat.
  - Scipiōnis filiae ex aerario dotem accepērunt, quia nihil illis reliquerat pater.
  - Aequum mehercule erat populum Rōmānum tribūtum Scipiōni conferre, cum a Carthagine semper tribūtum ipse exigeret.
  - O felīces viros puellārum, quibus populus Rōmānus loco soceri fuit!

### Lesson 36 (XXXVI) - Μια απόπειρα δωροδοκίας

- **Book**: Τεύχος Β΄
- **Source** [V]: Valerius Maximus 4.3.5 (M'. Curius and the Samnite envoys)
- **Grammar / syntax of the lesson** (book's table): final clauses (ut, ne, quo; relative final qui + subj.; expression of purpose; verbs of giving + gerundive: spectandum praebuit)
- **Exam record**: 2022 - translation passage ('Ille se in scamno ... dixit'). Also asked: Γ1 Ille, eum, pondus, vultum; Γ2 mirāti sunt (future + future-perfect infinitive), attulissent (supine acc.), uterētur (participles), dixit (imperative); Δ1α assidentem, risu; Δ2α missum → subordinate clauses 'in all possible ways'.
- **What to watch**: quo facilius ... posset (final clause with comparative: quo, not ut). 'spectandum praebuit' = gerundive of purpose after verb of giving. ut eo uterētur (purpose) vs cum ... attulissent (historic cum).
- **Key words**: frugalitas -ātis f.; contemno, -tempsi, -temptum 3; scamnum -i n.; catillus -i m.; vultus -ūs m.; supervacaneus -a -um; locuples -ētis; corrumpo, -rūpi, -ruptum 3
- **Key sentences** (as printed):
  - Manius Curius Dentātus maximā frugalitāte utebātur, quo facilius divitias contemnere posset.
  - Ille se in scamno assidentem apud focum et ex ligneo catillo cenantem eis spectandum praebuit.
  - Nam cum ad eum magnum pondus auri publice missum attulissent, ut eo uterētur, vultum risu solvit et protinus dixit:
  - «Supervacaneae, nē dicam ineptae, legatiōnis ministri, narrāte Samnitibus Manium Curium malle locupletibus imperāre quam ipsum fieri locuplētem; et mementōte me nec acie vinci nec pecuniā corrumpi posse».

### Lesson 37 (XXXVII) - Η κατάρα των εμφύλιων πολέμων

- **Book**: Τεύχος Β΄
- **Source** [V]: Cicero, a composite of two letters: Ad Familiares 16.12 (to Tiro, 'In eum locum res deducta est ... nihil esse bello civili miserius') + Ad Familiares 4.9 (to M. Marcellus, 'Omnia sunt misera in bellis civilibus ... ferociores impotentioresque reddit'); paragraph numbers approximate
- **Grammar / syntax of the lesson** (book's table): adverbial consecutive (result) clauses: ut / ut non + subjunctive, correlatives tantus, tam, ita, sic, adeo
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Book welds two letters together. Sequence: present result subj. after primary, imperfect after historic; perfect subj. for a completed result.
- **Key words**: furor -ōris m.; invādo, -vasi, -vasum 3; concordia -ae f.; victor -ōris m.; ferox -ōcis; impotens -ntis; obsequor, -secūtus sum 3 dep. (+dat.); cogo, coēgi, coactum 3
- **Key sentences** (as printed):
  - In eum locum res deducta est, ut, nisi qui deus vel casus aliqui subvenerit, salvi esse nequeāmus.
  - sed tantus furor omnes invaserat, ut pugnāre cuperent, etsi ego clamābam nihil esse bello civīli miserius.
  - Omnia sunt misera in bellis civilibus, sed nihil miserius quam ipsa victoria:
  - ea victōres ferociōres impotentioresque reddit, ut, etiamsi natūrā tales non sint, necessitāte esse cogantur.

### Lesson 38 (XXXVIII) - Η μοίρα της Καικιλίας

- **Book**: Τεύχος Β΄
- **Source** [S]: Cicero, De Divinatione 1.104 (Caecilia Metelli, told by L. Flaccus); wording changed by the book
- **Grammar / syntax of the lesson** (book's table): temporal clauses (cum, dum, ubi, ut, postquam, simul ac, antequam, priusquam; indicative vs subjunctive)
- **Exam record**: 2023 - second passage ('Caecilia, uxor Metelli ... res ipsa confirmāvit'). Asked: Γ2β petit (gerund gen. + abl.), fēcit (imperative present + future), dixit (2pl present indicative, other voice); Δ1α standi, paulo; Δ1β 'Hoc dictum paulo post res ipsa confirmāvit' active→passive; Δ2α find two subordinate clauses (kind, function, why that mood); Δ2β direct→indirect speech for 'ego libenter tibi meā sede cedo' under 'Caecilia dixit'.
- **What to watch**: dum petit (present indicative 'while'), dum audirētur (subj. = expectation/'until'), dum vixit (indic.). Direct→indirect: 'Caecilia dixit se libenter ei sede sua cedere'.
- **Key words**: omen -inis n.; sacellum -i n.; persedeo, -sēdi, -sessum 2; matertera -ae f.; cedo, cessi, cessum 3; confirmo 1; matrimonium -ii n.
- **Key sentences** (as printed):
  - Caecilia, uxor Metelli, dum more prisco omen nuptiāle petit filiae sorōris, ipsa fēcit omen.
  - Nam in sacello quodam nocte cum sorōris filiā persedēbat expectabatque dum aliqua vox congruens proposito audirētur.
  - Tandem puella, longā morā standi fessa, rogāvit materteram, ut sibi paulisper loco cederet.
  - Tum Caecilia puellae dixit: «ego libenter tibi meā sede cedo».
  - Hoc dictum paulo post res ipsa confirmāvit.
  - Nam mortua est Caecilia, quam Metellus, dum vixit, multum amāvit; postea is puellam in matrimonium duxit.

### Lesson 39 (XXXIX) - Ένα πρότυπο ιδανικού ανθρώπου

- **Book**: Τεύχος Β΄
- **Source** [M]: Seneca the Younger, Epistulae morales (the Phidias simile, ~Ep. 85); exact letter/section not verified
- **Grammar / syntax of the lesson** (book's table): conditional sentences (open, contrary-to-fact, possible/should-would; si/nisi; mixed)
- **Exam record**: 2025 - second passage ('Sapientem nec paupertas ... in paupertāte'). Asked: Γ2β agunt (periphrastic), putas (passive infinitive), sciēbat (perfect infinitive), posset (3sg present subj.); Δ1α malis, ex aere; Δ1β 'Si marmor illi obtulisses, fecisset tale' (identify the conditional + rewrite as possible/should-would); Δ2β 'Sapientem nec paupertas nec dolor prohibet, nec eae res ... avertunt' active→passive.
- **What to watch**: Si ... obtulisses ... fecisset = unreal past (pluperf.+pluperf.). Convert to 'possible' = present subj. both clauses (si obferas, faciat). Chain of si poterit/si minus (open: future indic.).
- **Key words**: paupertas -ātis f.; dolor -ōris m.; praeceps -cipitis; ebur eboris n.; aes aeris n.; simulacrum -i n.; explico 1; memorabilis -e; integer -gra -grum; debilis -e
- **Key sentences** (as printed):
  - Sapientem nec paupertas nec dolor prohibet, nec eae res, quae imperītos avertunt et praecipites agunt.
  - Tu illum premi putas malis? Utitur!
  - Non ex ebore tantum Phidias sciēbat facere simulacra; ex aere quoque faciēbat.
  - Si marmor illi obtulisses, si viliōrem materiam, fecisset tale, quale ex illā fieri optimum posset.
  - Eōdem modo sapiens virtūtem, si licēbit, in divitiis explicābit, si minus, in paupertāte;
  - Quamcumque fortūnam acceperit, aliquid ex illa memorabile efficiet.

### Lesson 40 (XL) - Ακλόνητη αποφασιστικότητα μπροστά στις απειλές του δικτάτορα

- **Book**: Τεύχος Β΄
- **Source** [V]: Valerius Maximus 3.8.5 (Q. Scaevola the augur defies Sulla)
- **Grammar / syntax of the lesson** (book's table): adversative (etsi, tametsi, quamquam) and concessive clauses (licet, quamvis, ut, cum + subj.); mood rules
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: licet mihi ostendas / licet minitēris = concessive licet + subjunctive (no ut); etsi ... sum = fact (indicative). semper tamen meminero (fut. of memini).
- **Key words**: occupo 1; armātus -a -um; obviam eo; minitor 1 dep.; circumsedeo, -sēdi, -sessum 2; infirmus -a -um; memini, meminisse; conservo 1
- **Key sentences** (as printed):
  - Sulla, occupāta urbe, senātum armātus coegerat ut C. Marius quam celerrime hostis iudicarētur.
  - Cuius voluntāti nemo obviam ire audēbat; solus Quintus Mucius Scaevola augur de hac re interrogātus sententiam dicere noluit.
  - «Licet mihi ostendas agmina militum, quibus curiam circumsedisti; licet mortem minitēris, numquam tamen ego hostem iudicābo Marium.
  - Etsi senex et corpore infirmo sum, semper tamen meminero urbem Rōmam et Italiam a Mario conservātam esse».

### Lesson 41 (XLI) - Μίλα για να σε καταλαβαίνουν, όχι για να μιλάς

- **Book**: Τεύχος Β΄
- **Source** [V]: Aulus Gellius, Noctes Atticae 1.10 (Favorinus rebukes an archaising speaker)
- **Grammar / syntax of the lesson** (book's table): comparative (parabolic) clauses: simple (atque/ac, ut, sicut, quam, quanto...tanto) and hypothetical (quasi, tamquam, velut + subj.)
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: proinde quasi ... loquāris = hypothetical comparison with subjunctive. Caesar's famous precept 'tamquam scopulum, sic fugias verbum insolens atque inaudītum' is quoted inside.
- **Key words**: antiquus -a -um; dilucide; obsolētus -a -um; ineptus -a -um; scopulus -i m.; insolens -ntis; inaudītus -a -um; loquor, locūtus sum 3 dep.
- **Key sentences** (as printed):
  - Curius et Fabricius, antiquissimi viri, et his antiquiōres Horatii plane ac dilucide cum suis locūti sunt;
  - Tu autem, proinde quasi cum matre Evandri nunc loquāris, sermōne abhinc multis annis iam obsolēto uteris, quod neminem scire atque intellegere vis, quae dicas.
  - Sic ergo vive, ut viri antīqui, sed sic loquere, ut viri aetātis nostrae;
  - «tamquam scopulum, sic fugias verbum insolens atque inaudītum».

### Lesson 42 (XLII) - Ο Κικέρωνας και η συνωμοσία του Κατιλίνα

- **Book**: Τεύχος Β΄
- **Source** [B+V]: Cicero, In Catilinam I (1.30) - named in the book's intro
- **Grammar / syntax of the lesson** (book's table): relative clauses: adjectival, adverbial (final / consecutive / causal / concessive with subjunctive), substantival
- **Exam record**: 2024 - second passage ('qui spem Catilīnae ... qui non fateātur'; starts mid-sentence). Asked: Γ2α three subjunctive verbs + their present infinitives; Γ2β aluērunt (1pl pluperfect subj.), nascentem (future participle), dicerent (imperative), intellego (supine abl.), fore (infinitive); Δ1α non credendo, factum esse; Δ1β 'qui non fateātur' (kind of clause, function, justify the subjunctive).
- **What to watch**: 'qui non videat' / 'qui non fateātur' = consecutive relative after a negative/indefinite antecedent (neminem tam stultum fore qui ...), so subjunctive. 'qui ... aluērunt' = indicative (simple fact).
- **Key words**: immineo 2 (+dat.); dissimulo 1; alo, alui, altum/alitum 3; coniuratio -ōnis f.; animadverto, -verti, -versum 3; crudelis -e; fateor, fassus sum 2 dep.
- **Key sentences** (as printed):
  - Nonnulli sunt in hoc ordine, qui aut ea, quae imminent, non videant, aut ea, quae vident, dissimulent:
  - qui spem Catilīnae mollibus sententiis aluērunt coniurationemque nascentem non credendo confirmavērunt;
  - quorum auctoritātem secūti multi, non solum improbi verum etiam imperīti, si in hunc animadvertissem, crudeliter et regie id factum esse dicerent.
  - Nunc intellego, si iste in Manliāna castra pervenerit, quo intendit, neminem tam stultum fore, qui non videat coniuratiōnem esse factam, neminem tam improbum, qui non fateātur.

### Lesson 43 (XLIII) - Η οργή της μάνας

- **Book**: Τεύχος Β΄
- **Source** [B+V]: Livy 2.40 (Veturia and Coriolanus) - named in the book's intro
- **Grammar / syntax of the lesson** (book's table): direct questions (num, -ne, nonne, interrogatives; double questions utrum...an; mood)
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Num ... ? expects 'no'; Non ... ? expects 'yes'. Contrary-to-fact conditionals sit inside the speech (nisi peperissem ... non oppugnarētur).
- **Key words**: infelix -īcis; senecta -ae f.; populor 1 dep.; ingredior, -gressus sum 3 dep.; succurro, -curri, -cursum 3 (+dat.); pario, peperi, partum 3*; oppugno 1
- **Key sentences** (as printed):
  - Num ad hostem vēni et captīva in castris tuis sum?
  - In hoc me longa vita et infēlix senecta traxit, ut primum exsulem deinde hostem te vidērem?
  - Qui potuisti populāri hanc terram, quae te genuit atque aluit?
  - Ergo ego nisi peperissem, Rōma non oppugnarētur; nisi filium habērem, lībera in līberā patria mortua essem.
  - at contra hos, si pergis, aut immatūra mors aut longa servitus manet.

### Lesson 44 (XLIV) - Η ζωή των τυράννων

- **Book**: Τεύχος Β΄
- **Source** [B+V]: Cicero, De Amicitia 52-53 - named in the book's intro
- **Grammar / syntax of the lesson** (book's table): indirect questions (subjunctive; num, -ne, an, si = whether; tense by sequence)
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Nescio quis possit diligere ... = indirect question (subj.). 'quam fuerint inopes amicōrum', 'quos fīdos amīcos habuissem' = indirect questions after intellegitur / intellexi.
- **Key words**: tyrannus -i m.; caritas -ātis f.; fiducia -ae f.; benevolentia -ae f.; metuo, metui 3; suspectus -a -um; simulatio -ōnis f.; inops -opis; fidus -a -um
- **Key sentences** (as printed):
  - Haec est tyrannōrum vita, in quā nulla fides, nulla caritas, nulla fiducia benevolentiae stabilis esse potest:
  - Nescio enim quis possit diligere eum, quem metuat, aut eum, a quo se metui putet.
  - Quodsi forte, ut fit plerumque, cecidērunt, tum intellegitur, quam fuerint inopes amicōrum.
  - Hoc est quod Tarquinium dixisse ferunt exulantem: «Tum intellexi, quos fīdos amīcos habuissem, quos infīdos, cum iam neutris gratiam referre poteram».

### Lesson 45 (XLV) - Μια επιστολή στα Ελληνικά αναπτερώνει το ηθικό των πολιορκημένων

- **Book**: Τεύχος Β΄
- **Source** [B]: Caesar, De bello Gallico 5.48 (letter to Q. Cicero in Greek) - book's intro names Caesar; section from memory
- **Grammar / syntax of the lesson** (book's table): volitive (substantive) clauses: ut / ne after verbs of urging, persuading, advising, asking, deciding (persuadet ut, monet ut, curat ne, constituit ut)
- **Exam record**: 2022 - translation passage ('Curat ... tragulam mitteret'). Also asked: Γ1 rem, celeriter (other degrees), periculum; Γ2 curat (fut. 1pl), mittit (perfect 3sg), adīre (abl. of gerund), possit (pluperfect subj.), abiciat (imperative); Δ1α consilia, ob rem; Δ1β 'nē, interceptā epistulā, nostra consilia ab hostibus cognoscantur' (kind of clause + why subjunctive + function); Δ2α veritus → clauses; Δ2β 'scribit se ... adfore' → direct speech.
- **What to watch**: Do not confuse volitive (substantive, object of persuādet) with final clauses (adverbial). With nē: ne cognoscantur = nē + subj. as object of curat et providet. interceptā epistulā = ablative absolute.
- **Key words**: captīvus -i m.; persuadeo, -suasi, -suasum 2 (+dat.); provideo, -vīdi, -vīsum 2; intercipio, -cēpi, -ceptum 3; adligo 1; tragula -ae f.; abicio, -iēci, -iectum 3*; adhortor 1 dep.
- **Key sentences** (as printed):
  - Caesar ex captīvis cognoscit quae apud Cicerōnem gerantur quantōque in periculo res sit.
  - Tum cuidam ex equitibus Gallis persuādet ut ad Cicerōnem epistulam deferat.
  - Curat et providet nē, interceptā epistulā, nostra consilia ab hostibus cognoscantur.
  - Quam ob rem epistulam conscriptam Graecis litteris mittit.
  - Legātum monet ut, si adīre non possit, epistulam ad amentum tragulae adliget et intra castra abiciat.
  - In litteris scribit se cum legionibus celeriter adfore.
  - Gallus, periculum veritus, constituit ut tragulam mitteret.

### Lesson 46 (XLVI) - Το γενικό συμφέρον μπαίνει πριν από το ατομικό

- **Book**: Τεύχος Β΄
- **Source** [B+V]: Cicero, De Finibus 3.64 (also traces of De Natura Deorum themes)
- **Grammar / syntax of the lesson** (book's table): substantive consecutive clauses (ut / ut non after fit, sequitur, accidit, efficio, facio, evenit ...)
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Ex quo fit, ut laudandus is sit ... ; consequitur, ut ... anteponāmus. Gerundive in a predicate (vituperandus, laudandus est = deserves / must be).
- **Key words**: mundus -i m.; numen -inis n.; utilitas -ātis f.; antepono, -posui, -positum 3 (+dat.); proditor -ōris m.; desertor -ōris m.; decet (impers.)
- **Key sentences** (as printed):
  - Philosophi mundum censent regi numine deōrum; eum esse putant quasi commūnem urbem et civitātem hominum et deōrum, et unum quemque nostrum eius mundi esse partem;
  - ex quo illud natūrā consequitur, ut commūnem utilitātem nostrae anteponāmus.
  - Ut enim leges omnium salūtem singulōrum salūti antepōnunt, sic vir bonus et sapiens et legibus parens consulit utilitāti omnium plus quam unīus alicuius aut suae.
  - Ex quo fit, ut laudandus is sit, qui pro re publicā cadat, quod decet cariōrem nobis esse patriam quam nosmet ipsos.

### Lesson 47 (XLVII) - Ο Αύγουστος και η φιλαρέσκεια της κόρης του Ιουλίας

- **Book**: Τεύχος Β΄
- **Source** [B]: Macrobius, Saturnalia 2.5.6-7 - named in the book's intro
- **Grammar / syntax of the lesson** (book's table): clauses of hindering/doubting/fearing: quominus, quin, ne after verbs of hindering (deterreo, prohibeo, impedio), doubt (non dubito quin), fear (timeo ne); summary of the uses of ut
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: deterrēre quominus id faceret; non dubito quin calva esse nolis; non times nē istae te calvam faciant (ne = 'that', fear of something happening). Verb forms volo/nolo/malo are asked in exercises.
- **Key words**: canus -a -um; calvus -a -um; deterreo, -ui, -itum 2; quominus; ornatrix -īcis f.; dissimulo 1; mendacium -ii n.; malo, malle, malui
- **Key sentences** (as printed):
  - Iulia, Augusti filia, matūre habēre coeperat canos, quos legere secrēte solēbat.
  - Hac re audītā Augustus voluit filiam deterrēre quominus id faceret.
  - Tum interrogāvit filiam, utrum post aliquot annos cana esse mallet an calva.
  - Cum illa respondisset «ego, pater, cana esse malo», mendacium illi pater obiēcit: «Non dubito quin calva esse nolis. Quid ergo non times nē istae te calvam faciant?»

### Lesson 48 (XLVIII) - Το ελάφι του Σερτωρίου

- **Book**: Τεύχος Β΄
- **Source** [S]: Aulus Gellius, Noctes Atticae 15.22 (Sertorius' white hind)
- **Grammar / syntax of the lesson** (book's table): indirect speech (oratio obliqua): infinitive for statements, subjunctive for commands/questions; subordinate clauses in subjunctive; tense by sequence; pronoun changes
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: persuāsit cervam ... conloqui (indirect statement); quae utilia factu essent (subjunctive inside oratio obliqua); praecēpit ut ... emitteret (indirect command). The exam has asked direct↔indirect speech on other texts every year it was set (2022 Δ2β, 2023 Δ2β, 2025 Δ2α); this lesson is the source of that skill.
- **Key words**: cerva -ae f.; instinctus -a -um; conloquor, -locūtus sum 3 dep.; praedico 1; pereo, -ii, -itum, -īre; emitto, -mīsi, -missum 3; cubiculum -i n.
- **Key sentences** (as printed):
  - Cerva alba eximiae pulchritūdinis Sertōrio a Lusitāno quodam dono data erat.
  - Sertōrius omnibus persuāsit cervam, instinctam numine Diānae, conloqui secum et docēre, quae utilia factu essent.
  - Si quid durius ei videbātur, quod imperandum militibus esset, a cervā sese monitum esse praedicābat.
  - Cum aliquis Sertōrio nuntiavisset cervam inventam esse, Sertōrius eum iussit tacēre;
  - Cum cerva, emissa a servo, in cubiculum Sertōrii introrupisset, admiratio magna orta est.

### Lesson 49 (XLIX) - Η Πορκία και ο Βρούτος

- **Book**: Τεύχος Β΄
- **Source** [V]: Valerius Maximus 3.2.15 (Porcia, wife of Brutus)
- **Grammar / syntax of the lesson** (book's table): gerundive attraction (obiurgandam, interficiendo Caesare...) and the expression of purpose: ut/qui + subj., supine, causā/gratiā + gen. of gerund(ive), ad + acc. of gerund(ive)
- **Exam record**: 2026 - second passage ('Porcia, Bruti uxor ... praeripuisset officium'). Asked: Γ1 viri, cultellum tonsorium, ancillārum, certissimum, tale consilium; Γ2α participles of this passage + their infinitives; Γ2β interficiendo (3sg future), vulnerāvit (2pl imperfect), vēnit (3pl pluperfect subj.); Δ1α uxor, temerarium, amōris; Δ2α 'cum viri sui consilium de interficiendo Caesare cognovisset' (kind, function, introduction, mood; then contract to a participle); Δ2β 'Brutus ad eam obiurgandam vēnit' → purpose by final clause, by supine, by causā + gerund gen.
- **What to watch**: Exact template of the lesson: five ways to say purpose (ut ... / qui ... / supine / causā + gerund / ad + gerund). The 2026 Δ2β question is the lesson table applied word for word.
- **Key words**: uxor -ōris f.; cultellus -i m.; tonsorius -a -um; resĕco, -secui, -sectum 1; elabor, -lapsus sum 3 dep.; obiurgo 1; molior 4 dep.; temerarius -a -um
- **Key sentences** (as printed):
  - Porcia, Bruti uxor, cum viri sui consilium de interficiendo Caesare cognovisset, cultellum tonsorium quasi unguium resecandōrum causā poposcit eōque velut forte elapso se vulnerāvit.
  - Clamōre deinde ancillārum in cubiculum vocātus Brutus ad eam obiurgandam vēnit, quod tonsōris praeripuisset officium.
  - Cui secrēto Porcia «non est hoc» inquit «temerarium factum meum, sed certissimum indicium amōris mei erga te tale consilium molientem: experīri enim volui, quam aequo animo me ferro essem interemptūra, si tibi consilium non ex sententiā cessisset».

### Lesson 50 (L) - Η φτώχεια και η απληστία είναι κακοί σύμβουλοι της εξουσίας

- **Book**: Τεύχος Β΄
- **Source** [V]: Valerius Maximus 6.4.2 (Scipio Aemilianus on Galba and Cotta)
- **Grammar / syntax of the lesson** (book's table): pronominal adjectives: unus, ullus, nullus, solus, totus, alius, uter, alter, neuter (genitive -īus, dative -i)
- **Exam record**: not a Panhellenic passage in 2022-2026 (none of the five papers I read used it)
- **What to watch**: Printed 'cotenderent' (sic; Valerius has contenderent) - apparent typo in the book. uter ... mitterētur = indirect (disjunctive) question; neutrum / alteri / alter / neuter / toto / solus / ullā are all the grammar target.
- **Key words**: consul -ulis m.; dissensio -ōnis f.; neuter -tra -trum; inopia -ae f.; avaritia -ae f.; malevolentia -ae f.; obtineo, -tinui, -tentum 2
- **Key sentences** (as printed):
  - Cum Servius Sulpicius Galba et Aurēlius Cotta consules in senātu cotenderent uter adversus Viriāthum in Hispaniam mitterētur, magna inter patres conscriptos dissensio erat, aliis pro Galbā et aliis pro Cottā dicentibus;
  - solus P. Scipio Aemiliānus cum toto senātu dissensit: «Neutrum» inquit «mihi mitti placet, quia alter nihil habet, alteri nihil est satis».
  - Nam Scipio Aemiliānus aeque malam imperii magistram iudicābat inopiam atque avaritiam.
  - Quā sententiā graviter et sine ullā malevolentiā dictā Scipio obtinuit, ut neuter in provinciam mitterētur.

---

## 6. Appendix A - lessons I-XV (Β' Λυκείου, prerequisite, not in the 2027 text list)

The 2027 syllabus says "Η ύλη που έχει διδαχθεί στη Β΄ ΓΕ.Λ." - all grammar of I-XV is examinable on the Γ' texts. Titles are the book's; authors are what the lesson introductions say (some, e.g. V and XI, are clearly teaching texts written for the book, not quotations).

| # | Title | Author named in the intro | Book's grammar topics |
|---|---|---|---|
| I | Ο εξόριστος ποιητής | Ovid (poet in exile) | 1st declension; case uses; active endings; present of 1st conj. and sum |
| II | Διδώ και Αινείας | Vergil, Aeneid | 2nd declension in -us; personal pronouns, ille |
| III | Η περιπέτεια της Ανδρομέδας | Ovid, Metamorphoses (intro) | present of 2nd conj.; case uses |
| IV | Τα ήθη των αρχαίων Ρωμαίων | Sallust | 2nd decl. neuter; imperfect 1st conj.; reciprocal; is, ea, id; ablative uses |
| V | Ένας «λάτρης» του Βιργιλίου | Silius Italicus (subject of the text) | 2nd decl. in -er; imperfect 2nd conj.; locus; stress; reflexives; abl. of time |
| VI | Οι νόμοι | Cicero, Pro Cluentio | consonant stems 3rd decl.; relative pronoun; genitive uses |
| VII | Ετοιμασίες για ξεχειμώνιασμα | Caesar, De bello Gallico | present infinitive 1st/2nd conj.; vowel stems 3rd decl.; possum |
| VIII | Όταν βγεις στο κυνήγι... | Pliny the Younger (letter to Tacitus) | neuter vowel stems; 3rd-decl. adjectives; future 1st/2nd conj. |
| IX | Η εγκαθίδρυση της δημοκρατίας στη Ρώμη | not stated in the intro lines I read | present/infinitive/imperfect of 3rd and 4th conj.; hic, ille, ipse |
| X | Η προφητεία του Δία | Vergil, Aeneid 1 | future of 3rd/4th conj. and sum; fero; prefix assimilation |
| XI | Η Ρώμη και η Καρχηδόνα | (Sallust mentioned in intro) | perfect active 1st/2nd/4th conj. and sum; principal parts; anteriority in temporal clauses |
| XII | Ο ύπατος Αιμίλιος Παύλος και το σκυλάκι της κόρης του | not stated in the intro lines I read | perfect active 3rd conj. |
| XIII | Πώς η γνώση νίκησε τη δεισιδαιμονία | not stated (subject: Sulpicius Gallus and the eclipse, 168 BC) | pluperfect, future perfect active; 4th declension; word order in prepositional phrases; ille; external compelling cause |
| XIV | Ένα φοβερό όνειρο | not stated (subject: dream of Cassius Parmensis) | 5th declension; idem; genitive/ablative of quality; cum inversum; -io verbs like capio |
| XV | Τα ήθη των Γερμανών | Caesar, De bello Gallico (I matched 6.21 and 4.1-2) | passive endings: present passive 1st/2nd/4th; passive infinitive; deponents; principal parts of passive; agent; iubeo/veto + inf.; iterative cum |

## 7. Appendix B - what is NOT settled (so nobody builds on it by accident)

1. "Τσοτσορού" - no evidence found; do not use the name anywhere in the app.
2. Source ids of lessons 18, 19, 29, 31, 39 are uncertain (see status codes); the exam does not need them, but a "who wrote this?" feature should use only the V / B / B+V ones, or the title and intro as printed.
3. I did not read the Β1 "Εισαγωγή" content or the vocabulary boxes in this task; both are in other subagents' scope.
4. The repeat-exam (επαναληπτικές) papers and any pre-2022 exams are not covered. "No lesson repeated in five papers" is an observation of 11 draws.
5. The extraction script's output was checked by eye for the 35 texts and a regex for stray Greek letters / split words; it was not diffed against the interactive HTML edition.
