# Latin syntax for the Greek Panhellenic exam (Συντακτικό της Λατινικής, Γ΄ Λυκείου ΟΠΑΣ)

Research date: 2026-11-01. Exam: Wednesday 2 June 2027, 08:30, 3 hours (reported by powergame.gr from the ministry schedule; confirm on minedu.gov.gr before printing it in the app).

This file is the foundation for the Syntax unit of "Carpe". Everything here is tagged by how well it is sourced:

- **[BOOK]** read directly in the official school textbook (Πασχάλης-Σαββαντίδης, Λατινικά τεύχος Α΄ and Β΄, ΙΤΥΕ Διόφαντος) or in the official reference grammar (Τζάρτζανος, Λατινική Γραμματική, ΙΤΥΕ Διόφαντος). Lesson numbers are the textbook's (XVI-L are the Γ΄ Λυκείου lessons; I-XV are Β΄ Λυκείου and are examinable as "the material taught in Β΄").
- **[PAPER]** read directly in an actual Panhellenic paper and/or its published answer key (2022-2026; five papers, all read in full; the 2022 paper text was taken from the copy another research agent saved in `research/pastpapers-raw/2022-iounios.txt`, the key from CNN Greece / ΔΙΑΚΡΟΤΗΜΑ).
- **[PRESS]** read in the official ΟΕΦΕ press releases on the papers (2024, 2025, 2026) or in a teacher's commentary.
- **[CHECK]** uncertain, conflicting or inferred. Ask the user's sister's teacher or a second source before shipping as fact.

The exact URLs are at the end. Local copies of the PDFs are in the scratchpad `syn/` and `dl/` folders of this session (book text: `syn/bookB.txt`, `syn/book.txt`, `syn/gram.txt`).

## 0. Ten things the app builders must know

1. Syntax = **30 of 100 marks** (Δ1 + Δ2, four sub-questions, every year 2022-2026). Its two halves: (a) *recognise the syntactic role* of 5-6 underlined words (about 10-12 marks) and (b) *work on the sentence*: justify one subordinate clause (**present in all five years**), plus transformations (voice, direct/indirect speech, clause <-> participle, purpose, place).
2. The official reference is the **school textbook** (Πασχάλης-Σαββαντίδης) and the Τζάρτζανος grammar. Markers' answer keys copy the textbook's phrases almost word for word (see §5). The app should teach those exact Greek phrases.
3. The Δ1α items are always of the form "X: είναι ... στο ...". Ablative uses (8 of 26 items), genitive uses (4), infinitive/gerund/participle forms (5) dominate. Ablative of measure (paulo, diebus) and ποιητικό αίτιο each came up twice in five years.
4. **The one guaranteed task**: identify a subordinate clause and justify mood and tense. The answer follows a 4-part template (είδος, λειτουργία, εισαγωγή, εκφορά + ακολουθία των χρόνων). §5.1 has the templates for historical cum, volitional ut/nē, dum + subjunctive, relative consecutive and conditional.
5. The sequence of tenses has a **special rule** for purpose, will, fear, result and expectation clauses (synchronism: present/imperfect only). Markers reward saying so ("παρατηρείται ιδιομορφία στην ακολουθία των χρόνων").
6. The exam rotates transformations; the press releases repeatedly note something "not asked for 4-5 years" (indirect->direct in 2025, clause->participle and purpose in 2026, abl. abs. -> cum in 2024). Prepare all of them.
7. Exam texts come from the **taught texts 16-50** (no repeats in five years: 16, 19, 23, 24, 35, 36, 38, 39, 42, 45, 49 so far). Examples in this file are taken from those texts wherever possible.
8. Known traps: Carthago (city or region), the "εμπρόθετη γενική γερουνδίου" that must become a gerundive (γερουνδιακή έλξη), no active perfect participle (use the passive abl. abs.), the accusative subject of the ειδικό απαρέμφατο even with same person.
9. Use the textbook's terms, not Ancient Greek or university terms: ειδικό/τελικό απαρέμφατο, ταυτοπροσωπία/ετεροπροσωπία, απόλυτη αφαιρετική, ιστορικός ή διηγηματικός cum, βουλητικές, ενδοιαστικές, προτάσεις του quominus και του quin, γερουνδιακή έλξη (glossary in §9).
10. Everything here was read in primary documents; the few constructed items and the contested points are listed in §11 for a teacher to confirm.

---

## 1. What the exam actually asks about syntax

### 1.1 Format (Γ΄ Λυκείου ΟΠΑΣ, valid for 2026-27) [BOOK/PRESS]

Source of the rules: the exam-format document `ΛΑΤΙΝΙΚΑ ΤΡΟΠΟΣ ΕΞΕΤΑΣΗΣ` (hosted at filologikosxoleio.gr; consistent with all five papers 2022-2026), the ΦΕΚ 4210/Β΄/13-7-2026 listing the 2026-27 examinable material, and the ministry teaching instructions 2026-27.

- Text of 14-16 lines taken from one or more taught texts. Translate 10-12 lines (20 marks).
- 80 marks of "παρατηρήσεις": 1 introduction question (10), 1 etymology question (10), **2 grammar observations (30)**, **2 syntax observations (30)**. Each observation may split into two sub-questions.
- So **syntax = 30 marks out of 100** (Δ1 = 15, Δ2 = 15). In every paper 2022-2026 the sub-questions are Δ1α, Δ1β, Δ2α, Δ2β.
- Examinable syntax: textbook lessons **29-50** are classified as "Συντακτικό" in the list of examinable material (cases, gerund/gerundive/supine, all subordinate clauses, indirect speech, gerundive attraction, pronominal adjectives). Lessons 16-28 are classified as "Γραμματική" but their observations also carry syntax (infinitives, time and place, ablative uses, cum with the indicative, subjunctive uses, sequence of tenses, imperative/prohibition), and the list adds "the grammar and syntax taught in Β΄ Λυκείου" (lessons I-XV). Real papers confirm that Δ items draw on all of these. The ΦΕΚ list (as reproduced by vaspapachristou.gr): passive forms, deponents, fio, eo, periphrastic conjugations, gerund/gerundive/supine, participles, infinitives, indirect speech, the subjunctive in all tenses with its uses, sequence of tenses, imperative and prohibition, comparison, uses of genitive/dative/ablative, causal/final/temporal/conditional/concessive/relative clauses, direct and indirect questions, substantive clauses with ut, ne, quin, quominus, pronominal adjectives.
- The exam passages come from a limited set of taught texts (lessons 16-50). Passages used so far (verified against the textbook): 2022 texts 16, 36 and 45 (three excerpts); 2023 texts 23 and 38; 2024 texts 19 and 42; 2025 texts 24 and 39; 2026 texts 35 and 49. No lesson has been repeated in these five years.
- Instruction printed on every paper: "Κάθε απάντηση τεκμηριωμένη είναι αποδεκτή" (every well-argued answer is accepted). The official line is that justified alternatives get marks; in practice follow the textbook wording.
- Mark values seen (the marker's per-item values): 2022 Δ1α 10, Δ1β 5 (1+3+1), Δ2α 12, Δ2β 3. 2026 Δ1α 12 (6 items x 2), Δ1β 3, Δ2α 7 (1+1+1+2+2), Δ2β 8 (3+2+3). 2025 Δ1α 10 (5 x 2), Δ1β 5 (3+2), Δ2α 6 (3 x 2), Δ2β 9. 2024 Δ1α 10, Δ1β 5 (1+1+3), Δ2α 7, Δ2β 8 (1+7). 2023 Δ1α 10, Δ1β 5, Δ2α 10 (2+2+2+4), Δ2β 5.

### 1.2 The five most recent Δ sections, item by item [PAPER]

Papers: 2026 (5 June), 2025 (4 June), 2024 (6 June), 2023 (8 June) and 2022 (8 June) read in full. Keys: ΔΙΑΚΡΟΤΗΜΑ (2022, 2023, 2025, 2026), Μεθοδικό Φροντιστήριο / other centres cross-checked for 2024-2026.

**2026**
- Δ1α (12): ab eo = εμπρόθετος προσδιορισμός του ποιητικού αιτίου στο desertum esse; curari = τελικό απαρέμφατο, υποκείμενο στο απρόσωπο placuit; semper = επιρρηματικός προσδιορισμός του χρόνου στο exigeret; uxor = παράθεση (ομοιόπτωτος προσδιορισμός) στο Porcia; temerarium = επιθετικός προσδιορισμός στο factum; amoris = γενική αντικειμενική στο indicium.
- Δ1β (3): replace "in Africā" in "cum Poenos in Africā funderet" by the right forms of Roma, Athenae, Carthago: Romae (genitive-locative), Athenis (ablative), Carthagine (ablative).
- Δ2α (7): "cum viri sui consilium de interficiendo Caesare cognovisset": kind of clause, function, how introduced, justify the mood and tense, then contract into a participle: viri sui consilio de interficiendo Caesare cognito.
- Δ2β (8): "Brutus ad eam obiurgandam venit": express the purpose with (a) final clause: ut eam obiurgaret, (b) supine: eam obiurgatum, (c) "εμπρόθετη γενική του γερουνδίου": eius obiurgandae causā/gratiā (the key says gerundive attraction is obligatory; the alternative pre-attraction form eam obiurgandi causā is listed in brackets).
- Press: ΟΕΦΕ said Δ2α (clause to participle) had not been asked in the last 4-5 years and that Δ2β asked for the expression of purpose for the first time in recent years; also that the wording of Δ2β(γ) was imprecise ("εμπρόθετο γερούνδιο" must become a gerundive). Teacher Ζώτου: syntax is "το βαρόμετρο της εξέτασης"; the hardest item was making cognovisset into a passive-participle abl. abs. because Latin has no active perfect participle; Carthago can be a city or a region (text 25 uses both ways).

**2025**
- Δ1α (10): diebus (in "Paucis post diebus") = απρόθετη αφαιρετική οργανική του μέτρου ή της διαφοράς στο post; se (exclamavit Nasica se domi non esse) = υποκείμενο του non esse, ταυτοπροσωπία, λατινισμός ειδικού απαρεμφάτου; ancillae = έμμεσο αντικείμενο του credidi; malis (premi) = απρόθετη αφαιρετική του ποιητικού αιτίου (because premi is passive and malis are things); ex aere = εμπρόθετος προσδιορισμός της ύλης στο faciebat.
- Δ1β (5): "Si marmor illi obtulisses, fecisset tale": recognise the conditional (introduction and kind) (3) and rewrite as a possible/likely condition for present-future (2). Key: si + pluperfect subjunctive, apodosis pluperfect subjunctive, ευθύς, σύνθετος (two protases), β΄ είδος, αντίθετο του πραγματικού στο παρελθόν; rewrite: Si marmor illi offeras (obferas), faciat tale.
- Δ2α (6): indirect to direct speech, three items: "Accipe nunc quid postea Nasīca fecerit" -> Quid postea Nasica fecit?; "Exclamāvit Nasīca se domi non esse" -> (Ego) domi non sum; "Visne scīre quid Nasīca responderit?" -> Quid Nasica respondit? Press: not asked in the last 4-5 years; two indirect questions and one special infinitive.
- Δ2β (9): active to passive: "Sapientem nec paupertas nec dolor prohibet, nec eae res, quae imperītos avertunt" -> Sapiens nec paupertate nec dolore prohibetur, nec eis/iis/is rebus, quibus imperiti avertuntur (nine words change).

**2024**
- Δ1α (10): ingenii = γενική της ιδιότητας στο vir (μόνιμη ιδιότητα); ex urbe = εμπρόθετος προσδιορισμός της απομάκρυνσης στο expulsus est; eius = γενική κτητική στο socii (κτήση χωρίς αυτοπάθεια); non credendo = απρόθετη αφαιρετική γερουνδίου, επιρρηματικός προσδιορισμός του τρόπου στο confirmaverunt; factum esse = ειδικό απαρέμφατο, αντικείμενο στο dicerent.
- Δ1β (5): "qui non fateātur": kind (1), function (1), justify the mood (3). Key: δευτερεύουσα επιρρηματική αναφορική συμπερασματική (ισοδυναμεί με απλή επιρρηματική), επιρρηματικός προσδιορισμός του συμπεράσματος στο (εννοούμενο) fore; subjunctive like all consecutives (result is a subjective state in Latin); present subjunctive because the governing form (fore, future infinitive, itself dependent on intellego) is primary; sequence-of-tenses idiosyncrasy (synchronism); "tam" announces it.
- Δ2α (7): passive to active: "Ab Antōnio, altero consule, Catilīna ipse [...] proelio victus, interfectus est" -> Antonius, alter consul, Catilinam ipsum [...] proelio victum interfecit.
- Δ2β (8): "Marco Tullio Cicerōne et Gaio Antōnio consulibus": classify the expression (1) and turn it into a temporal clause with historical cum (7). Key: ιδιόμορφη αφαιρετική απόλυτη (subject + noun of office); Cum Marcus Tullius Cicero et Gaius Antonius consules essent (σύγχρονο στο παρελθόν). Press: "έκπληξη", never asked before.

**2023**
- Δ1α (10): se (Arria... se dolori dabat) = άμεσο αντικείμενο στο dabat, άμεση αυτοπάθεια; contra Claudium = εμπρόθετος προσδιορισμός της εναντίωσης στο moverat; piscatoriam = ομοιόπτωτος επιθετικός προσδιορισμός στο naviculam; standi = γενική του γερουνδίου, γενική αντικειμενική στο mora; paulo (post) = απρόθετη αφαιρετική του μέτρου ή της διαφοράς στο post.
- Δ1β (5): "Hoc dictum paulo post res ipsa confirmāvit" active to passive -> Hoc dictum paulo post re ipsa confirmatum est.
- Δ2α (10): find the two subordinate clauses in "Nam in sacello ... loco cederet" (2), kind (2), function (2), justify the expression (4). Key: "dum aliqua vox congruens proposito audiretur": επιρρηματική χρονική, subjunctive because the action is an expectation/aim, imperfect because it depends on expectabat; επιρρηματικός προσδιορισμός του χρόνου στο expectabat. "ut sibi paulisper loco cederet": ουσιαστική βουλητική, subjunctive because the content is merely desired, imperfect because of rogavit, idiosyncrasy of sequence (the wish is seen at the moment it forms in the speaker's mind), έμμεσο αντικείμενο στο rogavit.
- Δ2β (5): direct to indirect: "ego libenter tibi meā sede cedo" dependent on "Caecilia dixit" -> Caecilia dixit se libenter illi sua sede cedere.

**2022** (paper and key read)
- Δ1α (10; items: eis, assidentem, risu, consilia, ob rem): eis = δοτική ως συμπλήρωμα του occurrunt; assidentem = κατηγορηματική μετοχή με υποκείμενο το se (the key's note: the gerundive spectandum, on which it depends, belongs to a verb of perceiving); risu = απρόθετη αφαιρετική οργανική (τρόπου) στο solvit; consilia = υποκείμενο στο cognoscantur; ob rem = εμπρόθετος προσδιορισμός της αιτίας, εξωτερικό αναγκαστικό αίτιο, στο mittit.
- Δ1β (5): "nē, interceptā epistulā, nostra consilia ab hostibus cognoscantur": kind (1), justify the mood (3), function (1). Key: ουσιαστική βουλητική, subjunctive because the content is merely desired, present because curat-providet is present (idiosyncrasy), αντικείμενο των curat, providet.
- Δ2α (12): "missum", "veritus": turn the participles into the corresponding subordinate clauses **with all possible ways** (all possible ways = a participle can be relative, causal, temporal...). Key: missum -> quod missum erat (or quod missum esset, by attraction to the subjunctive attulissent); veritus -> cum veritus esset (cause as the result of an inner reasoning) / quod, quoniam, quia veritus erat (objective cause) / quod, quoniam, quia veritus esset (subjective cause).
- Δ2β (3): "In litteris scribit se cum legionibus celeriter adfore": indirect to direct -> Ego cum legionibus celeriter adero.

### 1.3 Tallies from the five Δ sections (my counts)

Δ1β/Δ2 slots = 15 (3 per year):

| Task type | Count | Years |
|---|---|---|
| Identify a subordinate clause and justify mood/tense/function | **5 of 5 years** (one every year) | 2022 volitional ne; 2023 dum + subj and volitional ut; 2024 relative consecutive; 2025 conditional (kind + rewrite); 2026 historical cum |
| Active <-> passive | 3 | 2023 Δ1β (act->pass), 2024 Δ2α (pass->act), 2025 Δ2β (act->pass, 9 words) |
| Direct <-> indirect speech | 3 | 2022 Δ2β (ind->dir), 2023 Δ2β (dir->ind), 2025 Δ2α (ind->dir x3) |
| Clause <-> participle / abl. abs. <-> clause | 3 (2026 Δ2α shares its slot with the identification task, so the 15 slots split 5 + 3 + 3 + 2 + 1 + 1) | 2022 Δ2α (participles -> clauses "με όλους τους δυνατούς τρόπους", 12 marks), 2024 Δ2β (abl. abs. -> cum clause), 2026 Δ2α (clause -> participle) |
| Expression of purpose in several ways | 1 | 2026 Δ2β |
| Place with city names | 1 | 2026 Δ1β |

Δ1α recognition lists (26 items over 5 years): ablative uses 8 (risu, paulo, non credendo, diebus, malis, ex aere, ex urbe, ab eo), genitive 4 (standi, ingenii, eius, amoris), infinitive/participle/gerund forms 5, dative 2 (eis, ancillae), subject/object 3, prepositional adverbials of cause/hostility 2 (ob rem, contra Claudium), adjective/apposition 3, adverb 1. **Ablative of measure/difference (paulo, diebus) appears twice**; **ποιητικό αίτιο appears twice (2025 malis, 2026 ab eo)**; **a gerund form appears twice (2023 standi, 2024 non credendo)**.

Reading of the pattern: the markers rotate the transformation tasks (the press releases keep saying "not asked in 4-5 years"), but a subordinate-clause justification and a block of "recognise the syntactic role" items are guaranteed. The right plan is mastery of the whole syllabus with the heaviest weight on (1) subordinate clause identification and justification, (2) the role of cases (especially ablative and genitive), (3) the three transformations (voice, direct/indirect, clause/participle) and (4) purpose, cause and time expressions.

---

## 2. Master map: textbook lesson -> syntax content [BOOK]

(XVI-XX are in the Τεύχος Α΄ book; XXI-L in the Τεύχος Β΄. Observations are in each lesson's "ΠΑΡΑΤΗΡΗΣΕΙΣ".)

| Lesson | Syntax content |
|---|---|
| VII (Β΄) | Infinitive as object: ειδικό vs τελικό απαρέμφατο; subject in accusative (ετεροπροσωπία) or understood nominative (ταυτοπροσωπία with τελικό) |
| XIII, XVII | Cause: external compulsory cause = ob / per / propter + acc.; internal cause (feeling) = simple ablative, often with a participle (pudore adductus) |
| XIV | Genitive or ablative of quality; genitive for age/measure after numerals; cum inversum |
| XV | Agent (ποιητικό αίτιο) = ab + abl. for persons; plain ablative for things; iubeo/veto/prohibeo/sino/patior/cogo with active or passive infinitive; cum + indicative of repetition |
| XVIII | Perfect infinitive is always ειδικό and has an accusative subject; **προσωπική σύνταξη (nominativus cum infinitivo)** of passive verbs of saying and thinking (dicitur, fertur, nuntiatur, existimatur) |
| XIX | Cicerone et Antonio consulibus = abl. abs.; ablative or genitive of quality |
| XX | Participles: tenses, adjectival, predicative, adverbial; active periphrastic conjugation; est mihi nomen; dum + present indicative = ενώ (Latinism) |
| XXI | Ablative absolute (with participle, and with noun + noun/adjective) |
| XXII | The subjunctive in main clauses (potential, deliberative, hortatory, optative, concessive) |
| XXIII-XXIV | Subjunctive imperfect/perfect/pluperfect, **sequence of tenses**, **cum historicum**, quod after verbs of feeling |
| XXV | Imperative (present/future); prohibition (noli + inf., ne + perfect subjunctive); ante/post + acc. |
| XXVI-XXVII | Comparison: second term (abl. or quam), absolute comparative, multo/paulo; relative clause in indirect speech takes the subjunctive |
| XXVIII | Place and time; city names; domus/rus; eo; domi bellique |
| XXIX | Genitive uses |
| XXX | Dative uses; dative of purpose |
| XXXI | Ablative uses (separative, instrumental/sociative, locative) |
| XXXII | Gerund |
| XXXIII | Gerundive; passive periphrastic conjugation; dative of agent |
| XXXIV | Supine |
| XXXV | Causal clauses |
| XXXVI | Final clauses |
| XXXVII | Adverbial consecutive clauses |
| XXXVIII | Temporal clauses |
| XXXIX | Conditional sentences |
| XL | Concessive / adversative clauses |
| XLI | Comparative clauses (real and hypothetical) |
| XLII | Relative clauses |
| XLIII | Direct questions |
| XLIV | Indirect questions |
| XLV | Volitional (βουλητικές) clauses |
| XLVI | Substantive consecutive clauses (ουσιαστικές συμπερασματικές) |
| XLVII | Fear clauses (ενδοιαστικές); clauses of quominus and quin |
| XLVIII | Indirect speech |
| XLIX | Ways of expressing purpose; **gerundive attraction** |
| L | Pronominal adjectives (uter, neuter, alter, nullus/ullus, solus, totus, alius...) |


---

## 3. Syntax cards by topic

Format of every card: **Rule** (school terms) -> **Examples** (with sources) -> **What markers expect**. Greek translations of the textbook examples are the textbook's own where given; ones marked (tr.) are mine and need review.

### 3.1 Genitive (η γενική) [BOOK XXIX, XIV, XIX; Grammar §129-132, 141]

| Use (school term) | Rule | Examples |
|---|---|---|
| Κτητική | possessor | corvus sutōris, ο κόρακας του παπουτσή (XXIX) |
| Υποκειμενική / αντικειμενική | the genitive is the doer (υποκ.) or the receiver (αντικ.) of the noun's action | salutatio Caesaris = ο χαιρετισμός προς τον Καίσαρα (αντικ., XXIX); in 2026 "certissimum indicium amōris mei" the key says αντικειμενική for amōris |
| Επεξηγηματική | genitive that names what the noun is | nomen Asiae = το όνομα «Ασία» (XXIX) |
| Της ιδιότητας | permanent quality. **Social class is expressed only by the genitive** (vir nobilissimi generis). Mental/physical qualities: genitive or ablative (vir ingenii pravissimi / ingenio pravissimo). **Age, duration, measure with a numeral: genitive only.** | homo ingentis magnitudinis, puer annōrum trium (XXIX); iter trium dierum (XIV); 2024 Δ1α "ingenii" |
| Διαιρετική | the whole; also after neuters of quantity (multum, nihil, aliquid, quid) and with adverbs (satis, ubi terrārum) | pars exercitus, quis hominum (XXIX); multum pecuniae (XXIX); "Domi satis salutatiōnum talium audio" (text XXIX) |
| Της αξίας | **indefinite value** (tanti, quanti, pluris, magni, parvi, nihil) with verbs of valuing/buying/selling (aestimo, facio, duco, emo, vendo) and sum; **definite price is ablative** | avem emit tanti, quanti nullam adhuc emerat (text XXIX); viginti milibus sestertium eum ēmit (abl. of price, text XXIX); Parvi enim preti est, qui tam nihili est (text XXVIII) |
| Του εγκλήματος | verbs of accusing/condemning; the penalty is in the ablative (except capitis) | proditiōnis accusātus est; pater morte eum multāvit (XXIX, XXXI; text XXXI "morte multāvit") |
| With interest / rēfert | the person concerned is genitive; for "me, you" use mea, tua... (ablative feminine) | Caesaris multum interfuit corvum emere (text XXIX); meā interest |
| With miseret, paenitet, pudet, piget, taedet | the person feeling = accusative, the cause = genitive (or infinitive) | me paenitet verbōrum meōrum (XXIX) |
| Memory / forgetting | genitive (memini, obliviscor, in mentem venit) | vēnit corvo in mentem verbōrum domini sui (text XXIX) |
| Χαρακτηριστικό γνώρισμα | sum + genitive = it is the mark of | sapientis est (XXIX) |
| Complement of adjectives | desire, experience, knowledge, memory, fullness | cupidus pecuniae (text XXIX, "sutor, cupidus pecuniae"); belli perītus (XXIX) |
| Of gerund | cupidus bene gerendi (text XXXII); cupiditas pugnandi (XXXII) | |
| Τοπική γενική | only for city names of 1st/2nd declension singular | Romae, Corinthi (XXVIII) |

**Markers expect**: the exact term plus the word it depends on: "amoris: γενική αντικειμενική στο indicium" (2026), "ingenii: γενική της ιδιότητας στο vir" (2024), "eius: γενική κτητική στο socii (κτήση χωρίς αυτοπάθεια)" (2024), "standi: γενική του γερουνδίου, γενική αντικειμενική στο mora" (2023).

**[CHECK]** the objective-vs-subjective call on indicium amoris mei is arguable (marker's call is "αντικειμενική"); the paper says every justified answer is accepted, but teach the key's word.

### 3.2 Dative (η δοτική) [BOOK XXX, XXXIII; Grammar §133-136]

| Use | Rule | Examples |
|---|---|---|
| Έμμεσο αντικείμενο | verbs of saying, giving, sending | hoc Ennio dixit; signa Caesari tradunt (XXX) |
| Συμπλήρωμα | hostile/friendly attitude, obedience, likeness, union | belua incolis nocet; hostia deo placet (III); similis effigiei mortui (XXX) |
| With verbs compounded with ob, prae, pro, in, ad, sub, inter, ante, post, cum, re- | indirect object | marmor Phidiae obtulit; imagines fortium virōrum mihi proponēbam (XXX; cf. text XXXIX "Si marmor illi obtulisses") |
| Προσωπική: κτητική | filius mihi est | |
| Προσωπική: χαριστική / αντιχαριστική | for/against whom | ille mihi errat; also with consulo = φροντίζω, metuo = φοβάμαι για κάποιον |
| Προσωπική: ηθική / της αναφοράς | in my view, as far as I am concerned | ille mihi mortuus est |
| **Του ποιητικού αιτίου** | the agent of a gerundive | omnia tibi sananda sunt (XXXIII text and Π4) |
| With impersonals | placet, licet | id senatui publice curāri placuit (text XXXV) |
| **Του σκοπού (ή του αποτελέσματος)** | abstract noun, stereotyped (exemplō, auxiliō, usui, adiumentō, solaciō), usually with sum, often a second dative with it | Murēna patri magno adiumento fuit (XXX Π3); Caesar equitatum auxilio legionibus misit (XXX Π3); text XXX "magno adiumento..., solacio..., gratulatiōni..." |
| est mihi nomen | the name is nominative (Paulus) or dative (Paulo) | XX Π10 |
| Of gerund | purpose, with utilis, aptus, idoneus, commodus | locus pugnando (= pugnae) idoneus (XXXII) |

**Markers expect**: "eis: δοτική ως συμπλήρωμα στο occurrunt" (2022), "ancillae: έμμεσο αντικείμενο του credidi" (2025).

**[CHECK]** Grammar §135 also allows the dative of agent with perfect passive tenses (consilium mihi captum est); the school textbook mentions only the gerundive. Teach gerundive first, mark the perfect one as "rare".

### 3.3 Accusative (η αιτιατική) [BOOK XXVIII, V; Grammar §137-140]

- Direct object (εξωτερικό), internal object (εσωτερικό: longam viam imus), double accusative: verbs of teaching and hiding (docēre, celāre: Cato filium litteras docuit), asking (poscere, flagitare: pacem te poscimus), naming/thinking/making/choosing (appellare, putare, creare, facere, reddere: solitudinem pacem appellant; cupiditas homines caecos reddit; aliquem certiorem facere), compounds of trans- (traducere).
- Exclamation: me miserum!
- Duration of time: quaedam bestiolae unum diem vivunt (Grammar §149).
- Direction with city names: Rōmam eo (XXVIII).
- Subject of an infinitive (see 3.8).

### 3.4 Ablative (η αφαιρετική) [BOOK XXXI, XXVIII; Grammar §128, 141-149]

The Latin ablative merges three older cases: **κυρίως αφαιρετική** (separative), **οργανική** (instrumental/sociative) and **τοπική** (locative).

| Group | Use | Examples (all from text XXXI unless stated) |
|---|---|---|
| Separative | place of origin; birth/descent; material (αφαιρετική της ύλης); separation, abstaining, depriving, freeing, hindering (simple or with ab/ex/de); **comparison (αφαιρετική συγκριτική)**; the person of whom the standard is | nōbili genere natus; poculum ex auro (XXXI Π2); pugnā abstinērent, armis spoliāvit; fortior hoste; "Eā puellā nihil umquam festivius" (text XXVI) |
| Instrumental / sociative | accompaniment; manner (τρόπος); quality (ιδιότητα); instrument/means; **measure/difference (μέτρο)**; respect (αναφορά); **internal cause (εσωτερικό αίτιο)**; punishment; price | hastā transfixit; fugā salūtem petivērunt; viribus suis confīsus; cupiditāte pugnandi permōtus; iniussū consulis; morte multāvit; paulo post; multo minor natu (text XXVII); paulo maior natu; viginti milibus ... ēmit (text XXIX) |
| Locative | place and time ("where, when") | Romā / Athenis / Carthagine (XXVIII); eo tempore, primā vigiliā (Grammar §149) |
| Person as instrument | not simple ablative: **per + acc.**, or operā / beneficio / auxilio + genitive of the person | cuius operā hostes fugāti erant (text XXXI) = χάρη στις ενέργειες του οποίου |
| Absolute | see 3.9 | |

Other traps from the textbook:
- **Cause**: external compelling cause = ob / per / propter + acc. (propter frumenti inopiam, ob repentīnum monstrum; 2022 "ob rem" = εξωτερικό αναγκαστικό αίτιο); internal (feeling) cause = plain ablative, often with a participle: pudōre adductus, dolōre permōtus, irā incensus (XVII Π4).
- **Comparison**: second term is plain ablative OR quam + same case as the first term: Marcella amabilior est Porciā / quam Porcia (XXVI Π7). Absolute comparative = "rather, somewhat": duriōra ei videbantur "του φαίνονταν κάπως τραχιά" (XXVII Π3); comparatives are strengthened by multo, paulo (ablative of measure).
- **Quality**: ablative or genitive; the ablative needs an adjective: homo squalidā faciē, vir ingenio pravissimo.
- **Origin**: ex for immediate descent (ex Thetide natus), ab for remote origin (Grammar §143).

**Markers expect** (all from keys): "diebus/paulo: απρόθετη αφαιρετική του μέτρου ή της διαφοράς στο post", "risu: απρόθετη αφαιρετική οργανική που δηλώνει τρόπο", "ex aere: εμπρόθετος προσδιορισμός της ύλης", "ex urbe: εμπρόθετος προσδιορισμός της απομάκρυνσης", "non credendo: απρόθετη αφαιρετική γερουνδίου, επιρρηματικός προσδιορισμός του τρόπου".

### 3.5 Place and time [BOOK XXVIII, XXV; Grammar §146-149]

| Meaning | General rule | City names, small islands, domus, rus, humus |
|---|---|---|
| Where? (στάση) | in + abl. | **Romae, Corinthi** (genitive-locative, 1st/2nd decl. singular); **Athēnis, Carthagine, Delphis** (ablative: 3rd decl. or plural of any declension) |
| Whither? (κίνηση προς) | in/ad + acc. | simple acc.: Rōmam, Athēnas, Carthaginem eo; domum, rus |
| Whence? (απομάκρυνση) | ex/ab/de + abl. | simple abl.: Rōmā, Athēnis, Carthagine; domō, rure |
| Through where? | per + acc.; or plain abl. for roads, bridges, gates | via Appia, per forum (Grammar §148) |

- With **urbs / oppidum** in apposition the preposition returns: in oppido Citio, ex urbe Corintho (Grammar §147 Σημ. 1).
- With an adjective like totus or ipse the plain ablative is used: totā Italiā, ipsā Rōmā (Grammar §147 Σημ. 2). domi bellique / domi militiaeque = "στην ειρήνη και στον πόλεμο" (XXVIII).
- **Trap (2026 Δ1β)**: Carthāgo is used as a city (no preposition) and as a region (in Africā). The marker wants **Carthagine** (3rd declension singular: ablative), **Athenis** (plural: ablative), **Romae** (1st declension singular: genitive). OEFE noted that text 25 uses Carthago both ways; ask which meaning the exercise requires.
- Time: ablative = when (quā nocte; ultimis annis; Grammar §149); ablative = within / after how long (biduo sciemus; "decem annis"); accusative = for how long; **ante / post + acc.** = "before / after": ante paucos dies, post paucos dies (XXV Π7). paucis post diebus: diebus is ablative of measure with post (2025).

### 3.6 Agent: the ποιητικό αίτιο (ways of expressing "by whom") [BOOK XV Π5, XXXI, XXXIII; PAPER]

| Situation | Construction | Example |
|---|---|---|
| Animate agent, collective, personified | **ab + abl.** (εμπρόθετος προσδιορισμός του ποιητικού αιτίου) | vinum a mercatōribus non importātur (XV Π5); "ab eo desertum esse rus" (2026); "Catilīna a Cicerōne ex urbe expulsus est" (2024) |
| Inanimate agent / thing | plain **ablative** (απρόθετη αφαιρετική του ποιητικού αιτίου) | "malis premi" (2025: the key adds "λόγω του απαρεμφάτου premi, που είναι τύπος της παθητικής φωνής") |
| Agent of a gerundive | **dative** (δοτική του ποιητικού αιτίου) | omnia tibi sananda sunt; fides revocanda est (nobis) (XXXIII Π4) |
| Gerundive with a verb that governs a dative (ambiguity) | ab + abl. | a patribus consulendum est liberis (Grammar §135 Σημ.) |
| Person used as an instrument | per + acc. or operā/beneficio/auxilio + gen. | cuius operā hostes fugāti erant (text XXXI); operā adulescentis (or per adulescentem) hostes fugāti erant (XXXI Π3) |
| Compelling or emotional cause (not an agent) | see 3.4 cause | |

**Markers expect**: the exact label (ποιητικό αίτιο) and the verb it depends on, including the infinitive form ("στο desertum esse", "στο premi").

### 3.7 Pronoun syntax [BOOK V Π5, XIV Π2; Grammar §150-152]

- **Reflexives**: se, suus refer to the subject of their own clause (άμεση αυτοπάθεια) or to the subject of the main clause when inside a subordinate clause (πλάγια αυτοπάθεια). **Non-reflexive possession in 3rd person uses is, ea, id in the genitive**: pater suus = ο πατέρας του (του ίδιου); pater eius = ο πατέρας του (κάποιου άλλου) (V Π5). 2024: "eius: γενική κτητική στο socii (κτήση χωρίς αυτοπάθεια)".
- 1st/2nd person pronouns are reflexive too: laudo me.
- **Αλληλοπάθεια**: inter se, inter nos, inter vos (Perseus et Andromeda inter se amant); alter alterum, alius alium (Grammar §150).
- idem = "the same as before"; ipse = "himself, not another" (XIV Π2).
- is = "such" in result patterns: non is sum, qui terrear (Grammar §151).
- quidam (a certain, unnamed), aliquis (positive), quisquam / ullus (negative or question), quis after si, nisi, num, ne (the "si quis" rule), quisque (after reflexives and superlatives).
- iste = "that of yours" (refers to the 2nd person).
- Lesson L: pronominal adjectives (uter, neuter, alter, nullus, ullus, solus, totus, alius, unus) have genitive -ius and dative -i; neque ullus = nullus, and "neque quisquam" etc. (text L: "Neutrum mihi mitti placet, quia alter nihil habet, alteri nihil est satis").

### 3.8 The infinitive (το απαρέμφατο) [BOOK VII, XV Π6, XVIII, XX; Grammar §153-157]

**Rule.** Object infinitive comes in two kinds:
- **Ειδικό απαρέμφατο** (indirect-statement infinitive): after verbs of saying (λεκτικά: dico, narro, scribo, nego, trado), thinking (δοξαστικά: puto, credo, existimo), perceiving/knowing (αισθητικά/γνωστικά: audio, video, scio, sentio, intellego), showing, remembering, and emotions (gaudeo, doleo, admiror). **Any tense** (present = simultaneous, perfect = anterior, future = posterior). **Its subject is always an accusative and is never left out**, even when it is the same person as the subject of the main verb: puto te errāre / puto me errāre (VII Π3). The perfect infinitive is *always* ειδικό (XVIII Π2): Legātus se advēnisse dicit.
- **Τελικό απαρέμφατο** (complementary infinitive): after desire/ability (εφετικά/δυνητικά: volo, nolo, malo, cupio, possum, debeo), beginning/ending/neglecting/learning/forgetting/habit (incipio, coepi, desino, soleo). **Always present tense.** The subject is accusative if it differs from the main subject (ετεροπροσωπία: volo te venire); if it is the same person it is understood in the nominative (ταυτοπροσωπία: volo venire). Grammar §155 adds that with a passive infinitive or esse the subject may still be accusative (Alexander Iovis filium se appellari voluit).
- **Ειδικό and τελικό differ in Greek too**: where Greek uses ὅτι/ὡς clauses and participles, Latin uses ειδικό απαρέμφατο, because it lacks an ὅτι-clause and has very little predicative participle (VII Π2).

**Related constructions**
- **Accusativus cum infinitivo (ACI)**: the accusative-plus-infinitive structure of the ειδικό απαρέμφατο in heterosubject. Marker word: "απαρεμφατική σύνταξη".
- **Προσωπική σύνταξη των παθητικών λεκτικών και δοξαστικών ρημάτων** (nominativus cum infinitivo): with passive verbs of saying/thinking the subject of the verb *is* the subject of the infinitive, nominative, and the verb agrees with it: Hercules boves in eum locum adduxisse dicitur (fertur, nuntiātur, existimātur) "λέγεται ότι ο Ηρακλής οδήγησε τα βόδια..."; Hostes advenisse dicuntur (XVIII Π3). Do not make it impersonal ("dicitur hostes").
- **Infinitive as subject** of impersonal verbs and expressions (oportet, licet, placet, decet, aequum est, nefas est, opus est): "id senatui publice curāri placuit" (text XXXV, 2026 Δ1α: curāri = τελικό απαρέμφατο, υποκείμενο στο placuit); "Aequum mehercule erat populum Rōmānum tribūtum Scipiōni conferre" (text XXXV): infinitive with its own accusative subject as the subject of aequum erat.
- Verbs of ordering: **iubeo, veto, prohibeo, sino, patior, cogo** take either an active infinitive with an accusative subject (Caesar milites frumentum importāre iubet) or a passive infinitive when the doer is not named (Caesar frumentum importāri iubet) (XV Π6).
- **Future infinitive**: -ūrus esse (amatūrum esse); the passive future and verbs without supine use fore ut / futurum esse ut + subjunctive (Grammar §157: spero fore ut amicus meus veniat).
- **Λατινισμός του ειδικού απαρεμφάτου**: when Greek would use a participle or ὅτι-clause, Latin uses the accusative + infinitive; the key for 2025 Δ1α writes "ταυτοπροσωπία, λατινισμός ειδικού απαρεμφάτου" for exclamāvit Nasīca **se** domi non esse.
- Historical infinitive (replaces the imperfect in lively narrative: "minitāri absenti Diodōro, vociferāri palam") and exclamatory infinitive: in the Grammar only [CHECK: not in the school textbook's Παρατηρήσεις; low priority].

**Examples**
1. "Exclamāvit Nasīca se domi non esse" (text XXIV; 2025): ειδικό απαρέμφατο, αντικείμενο του exclamāvit; se = υποκείμενο του esse, in accusative although it is the same person (ταυτοπροσωπία).
2. "mercenārium suum discessisse et ab eo desertum esse rus" (text XXXV): two perfect infinitives after scripsit, ειδικά, subject mercenārium and rus in accusative.
3. "ancillae tuae credidi te domi non esse" (text XXIV): credo + dative of person + ειδικό απαρέμφατο with accusative subject (ετεροπροσωπία).
4. "Cato ... scitōte decerptam esse Carthagine" (text XXV): perfect passive infinitive.

**Markers expect**: "factum esse: ειδικό απαρέμφατο, αντικείμενο στο dicerent" (2024); "se: υποκείμενο του non esse, ταυτοπροσωπία, λατινισμός ειδικού απαρεμφάτου" (2025); "curāri: τελικό απαρέμφατο, υποκείμενο στο απρόσωπο placuit" (2026).

### 3.9 The participle (η μετοχή) [BOOK XX, XXI; Grammar §158-160]

**Tenses (they express relative time)**: present participle (pugnans) = simultaneous, active; future participle in -ūrus = subsequent, active; **perfect participle is passive only** (vulnerātus = anterior, passive); deponents have an active perfect participle (haec locūtus, auxilium pollicitus: "έχοντας υποσχεθεί"). Latin has **no active perfect participle** for ordinary verbs and no present passive participle: that is why the ablative absolute is so common (XXI Π1).

**Syntactic functions**
- **Επιθετική**: equals a relative clause: vela praetenta (= quae praetenta erant) foribus (XX Π6); ab urbe condita.
- **Κατηγορηματική**: only with verbs of perceiving, finding, representing (video, audio, facio, induco): eum latentem vidit; Catonem vidi in bibliothēca sedentem (XX Π7; Grammar §159). 2022 Δ1α "assidentem".
- **Επιρρηματική** (temporal, causal, concessive, conditional): either **συνημμένη** (participium coniunctum: its noun is in the main clause) or **απόλυτη** (ablative absolute).
  - Συνημμένη examples: moritūrus tremit "τρέμει καθώς πρόκειται να πεθάνει"; vulnerātus cadit (XX Π4).
  - **Απόλυτη αφαιρετική** (XXI): the participle's "subject" is unrelated to the main clause's subject or object: Tarquinio Superbo regnante Pythagoras in Italiam vēnit; Rōmāni urbe captā arcem tamen retinuērunt. Examples from texts: "Brenno duce Galli, apud Alliam flumen delētis legiōnibus Rōmanōrum, evertērunt urbem Rōmam" (text XXI); "Quibus interemptis aurum omne recēpit"; "Audītā salutatiōne Caesar dixit" (text XXIX); "abiectis armis ianuae appropinquavērunt" (text XXXIV); "Sulla, occupāta urbe, senātum armātus coēgerat" (text XL); "ne, interceptā epistulā, nostra consilia ab hostibus cognoscantur" (text XLV).
  - **Ιδιόμορφη (without a participle)**: subject + noun of office/age/profession, or a special adjective: Cicerōne consule, Cicerōne puero, Cicerōne vivo, Brenno duce (XXI Π1); Marco Tullio Cicerōne et Gaio Antōnio consulibus (text XIX; 2024); patre imperatōre libentissime meruisse pietātis fuit (text XXX). Meaning: temporal "when X was consul". The textbook does not accept the "supplied participle of sum" explanation (Grammar §160 Σημ. 1: "ό,τι λείπει σε μια γλώσσα δεν είναι δυνατό να το σκέφτονται εκείνοι που τη μιλούν").
  - Ablative absolute translates the Greek active aorist participle: "ταῦτ' εἰπὼν ἀπῆλθε" = His rebus dictis discessit (XXI Π1).

**Contracting a clause into a participle (σύμπτυξη)** — 2026 Δ2α, XXI Ex. I: "cum viri sui consilium ... cognovisset" -> "viri sui consilio ... cognito" (a passive perfect participle, because the main subject is Porcia and cognosco has no active perfect participle, so the object becomes the participle's subject: abl. abs.). If the verb is deponent, a *coniunctum* is possible (haec locūtus abiit). A relative clause becomes a participle in agreement: "quae praetenta erant" = praetenta.
**Expanding an abl. abs. into a clause** — 2024 Δ2β, 2022 Δ2α: choose the conjunction by sense: temporal (cum + subjunctive for narrative past; cum / ubi / postquam + indicative for plain time), causal (quod, quia, quoniam + indicative; cum + subjunctive), concessive (cum + subjunctive, quamquam/etsi + indicative), conditional (si). For a noun-noun absolute: Cicerōne et Antōnio consulibus -> cum Cicero et Antonius consules essent.

**Markers expect**: the participle type and the word: "assidentem: κατηγορηματική μετοχή με υποκείμενο το se"; "ιδιόμορφη αφαιρετική απόλυτη (υποκείμενο + ουσιαστικό που δηλώνει αξίωμα)".

### 3.10 Gerund, gerundive, periphrastic conjugations, supine [BOOK XX Π8, XXXII-XXXIV, XLIX; Grammar §161-164]

**Gerund (γερούνδιο)**: neuter verbal noun with *active* meaning, four cases (-ndi, -ndo, -ndum, -ndo), no nominative (the infinitive does that). Equivalent to the Greek articular infinitive in oblique cases (XXXII).
| Case | Use | Example |
|---|---|---|
| Genitive | complement of nouns and adjectives; with **causā / gratiā** = purpose | cupiditas pugnandi (XXXII); "cupidus bene gerendi et administrandi rem publicam" (text XXXII); "standi" in "longā morā standi fessa" (2023, text XXXVIII: γενική αντικειμενική στο mora) |
| Dative | purpose, after aptus, idoneus, utilis, commodus | locus pugnando idoneus |
| Accusative | **always with a preposition** (ad, in): purpose or reference | dux milites ad pugnandum hortātus est (XXXII); "non solum ad intuendum, verum etiam ad imitandum" (text XXXII) |
| Ablative | without preposition = manner/means; with de, ex, in, ab = reference/origin | Rōmāni fortiter pugnando castra cepērunt; "Colendo et cogitando homines excellentes animum ... conformābam" (text XXXII); lĭber de beātē vivendo; 2024 "non credendo" (means/manner); "laudem et honestātem solum expetendo" |
Deponents have gerunds, supines (the "active" meaning).

**Gerundive (γερουνδιακό)**: verbal adjective with *passive* meaning in -ndus, -nda, -ndum, declined like bonus; = the Greek verbal adjective in -τέος (XXXIII).
- **Παθητική περιφραστική συζυγία**: gerundive + sum = "must be done" (πρέπει να).
  - **Προσωπική σύνταξη** when the verb is transitive (takes the accusative): the gerundive agrees with the subject: "delenda est Carthāgo"; "Omnia sunt excitanda tibi uni, C. Caesar"; "constituenda iudicia, revocanda fides, comprimendae libidines, propaganda suboles" (text XXXIII, with sum omitted).
  - **Απρόσωπη σύνταξη** when the verb is intransitive or takes another case: gerundive in neuter singular nominative: "subveniendum reipublicae est" (subvenio + dative); "obtemperandum nobis est legibus".
  - The agent is a **dative**.
  - All tenses: fides revocanda est / erat / erit / fuit / fuerat / fuerit; infinitive revocandam esse; subjunctive sit, esset, fuerit, fuisset (XXXIII Π3).
- **Ενεργητική περιφραστική συζυγία**: future participle + sum: "πρόκειται να": amatūrus sum / eram / ero (XX Π8). "Erat ascensūrus navem" (text XXIII, 2023). Subjunctive of the future (amatūrus sim/essem) is used in the sequence of tenses for posterior time.
- Gerundive as predicate complement with verbs of giving/taking: "ille se ... spectandum praebuit" "παρουσιάστηκε για να τον δουν" (text XXXVI), urbs militibus diripienda tradita est.

**Γερουνδιακή έλξη (gerundive attraction)** [BOOK XLIX; Grammar §163-164]
- Rule: a gerund that would govern an accusative object is replaced by a gerundive agreeing with the object, which takes the case of the gerund. Gerund + object: nuntiandi victoriam -> gerundive: **victoriae nuntiandae**; ad victoriam nuntiandam; causā: **victoriae nuntiandae causā**.
- **Obligatory** (textbook XLIX): (a) with the "prepositional" forms: causā / gratiā + genitive, ad / in + accusative, de / ex / in / ab + ablative, when the object is accusative; (b) when the dative of the gerund is required (campus proelio committendo aptus, not proelium committendo).
- **Optional** with the bare genitive or bare ablative: ars gerendi rem publicam / ars gerendae reī publicae; legendo oratōres / legendis oratōribus. The classical texts you study are in fact split: "cupidus bene gerendi et administrandi rem publicam" (no attraction, text XXXII).
- **Avoided** when the object is a neuter pronoun or neuter adjective (ars vera et falsa diiudicandi, not verōrum et falsōrum diiudicandōrum).
- Translation keeps the active meaning ("για να αναγγείλει τη νίκη").
- Marker-level note: the 2026 key treats "eius obiurgandae causā" as obligatory (matching rule (a)); the pre-attraction form "eam obiurgandi causā" is given only in brackets as "μορφή προ γερουνδιακής έλξης". Always write the attracted form.
- Grammar §164 is narrower than the textbook (it lists only the dative and ad/in/ab/de/ex cases as obligatory, not causā + genitive) [CHECK]; follow the textbook, which the markers follow.

**Supine (σουπίνο)** [BOOK XXXIV; Grammar §75]
- Two forms: **in -um (accusative)**: purpose with verbs of motion (eo, venio, mitto, curro...): "Praedōnes venērunt salutātum" (text XXXIV: "complūres praedōnum duces forte salutātum ad eum venērunt"); can take an object: venērunt Scipiōnem salutātum; "virtūtem eius admirātum se venisse" (text XXXIV: deponent supine with an accusative object). **In -u (ablative)**: reference, after facilis, difficilis, iucundus, incredibilis, mirabilis: "hoc incredibile audītu" (text XXXIV), facile dictu, mirabile visu; stereotyped forms (dictu, factu, auditu, visu).
- Conversions: ad spectandum -> spectātum (XXXIV Ex. II); facile est ad credendum -> facile est creditu (Ex. III); spectātum veniunt -> veniunt, ut spectent (XXXVI Ex. II).

**Markers expect**: "standi: γενική του γερουνδίου"; "non credendo: απρόθετη αφαιρετική γερουνδίου, τρόπου"; for conversions, the exact forms above.

### 3.11 Ways of expressing purpose (οι τρόποι εκφοράς του σκοπού) [BOOK XXXVI, XLIX; 2026 Δ2β]

After a verb of motion the textbook lists **five** ways (XLIX), and Lesson XXXVI adds more:

| # | Way | Pattern | Example (legātum mīsērunt ... "έστειλαν πρεσβευτή για να αναγγείλει") |
|---|---|---|---|
| 1 | Τελική πρόταση | ut / nē + subjunctive (present after primary, imperfect after historical; no perfect) | ut nuntiāret |
| 2 | Αναφορική τελική πρόταση | qui, quae, quod + subjunctive (needs an antecedent in the main clause) | qui nuntiāret |
| 3 | Σουπίνο σε -um | only with verbs of motion | nuntiātum |
| 4 | Γενική του γερουνδίου με causā / gratiā | nuntiandi causā (with an object: victoriae nuntiandae causā) | nuntiandi causā |
| 5 | Εμπρόθετη αιτιατική του γερουνδίου | ad nuntiandum (with object: ad victoriam nuntiandam) | ad nuntiandum |
| 6 | quo + comparative | quo facilius divitias contemnere posset (text XXXVI) | |
| 7 | Δοτική του σκοπού | exemplō, auxiliō, usui (Caesar equitatum auxilio legionibus misit) | |
| 8 | Gerundive after verbs of giving | se spectandum praebuit; urbs diripienda tradita est | |
| 9 | ad / in + accusative noun | ad pugnam | |

- **Idiosyncrasy of sequence**: final, consecutive, volitional, fear clauses and quominus/quin clauses use only **present subjunctive after primary tense** and **imperfect after historical tense** (synchronism): the purpose is seen at the moment it forms in the speaker's mind, not when it is carried out.
- **Cues in the main clause**: eō consilio ut, eā mente ut, idcirco ut (text: "idcirco se nullam umquam oratiōnem scripsisse, ut ..., posset negāre").
- **Negative**: ne (never ut non).
- **Don't confuse**: final clause = επιρρηματική (adverbial); volitional (ut after iubeo, rogo...) = ουσιαστική (substantive).

**2026 Δ2β worked answer** (from the key): Brutus ad eam obiurgandam venit ->
(a) Brutus ut eam obiurgaret venit
(b) Brutus eam obiurgatum venit
(c) Brutus eius obiurgandae causā (or gratiā) venit (gerundive attraction obligatory; pronoun eam feminine -> eius ... obiurgandae)

### 3.12 Subjunctive in independent clauses (η υποτακτική στις κύριες προτάσεις) [BOOK XXII, XXV; Grammar §168-175]

The subjunctive merges Greek subjunctive, optative, imperative and sometimes indicative. It is "η έγκλιση της υποκειμενικής έκφρασης" (XXII Π). Two families:

- **Expression of desire (άρνηση ne)**:
  - Προτρεπτική (hortatory), 1st plural: Amēmus patriam; imitēmur nostros Brutos (text XXII) "ας αγαπάμε την πατρίδα".
  - Προσταγή / απαγόρευση (jussive / prohibitive), 3rd person: videant consules, ne quid res publica detrimenti capiat.
  - Ευχετική (optative) with utinam, tenses: present for an attainable wish (utinam errem); imperfect for an unattainable present wish (utinam viveret); pluperfect for the past.
  - Παραχωρητική (concessive): Sint sane superbi Rhodienses "ας δεχτούμε ότι..." (XXII); odĕrint, dum timeant.
  - Απορηματική / διστακτική (deliberative): Quid agam? "τι να κάνω;" (negation non); the polemic form quid facĕrem? (imperfect).
- **Expression of judgement (άρνηση non)**:
  - Δυνητική (potential): Quis hoc neget? "ποιος μπορεί να το αρνηθεί;"; velim "θα ήθελα"; dicat quispiam.
  - Του απραγματοποίητου (irreal): imperfect (present) or pluperfect (past): sine amicis vita tristis esset; "O si tacuisses, philosophus mansisses" (Grammar §172).

### 3.13 Imperative and prohibition [BOOK XXV; Grammar §170-171]

- Present imperative: **immediate or constant** command (lege, properāte); future imperative -to / -tote: command deferred or after another action, laws and treaties (cras petito; regio imperio duo sunto). Few verbs lack the present imperative and borrow the future one: memento, mementōte (memini), scito, scitōte (scio).
- **Prohibition** (the present imperative never expresses it): (a) **noli, nolīte + present infinitive** (noli putare; "Opibus urbis nolīte confidere", text XXV; "Noli spectāre quanti homo sit", text XXVIII), (b) **ne + perfect subjunctive**, 2nd person (hoc ne feceris). Other negatives replace ne: **"Neminem credideritis patriae consultūrum esse, nisi vos ipsi patriae consulueritis"** (text XXV: nemo + perfect subjunctive = prohibition). Poetry and laws: ne + imperative (hominem mortuum in urbe ne sepelīto). Grammar adds cave + subj and fac ne + subj [Grammar §171; not in the textbook observations].
- Imperative short forms: dic, duc, fac, fer (XXV Π1).

### 3.14 Comparison in syntax [BOOK XXVI, XXVII]

- Second term: ablative (without quam) **or** quam + same case as the first term: Marcella amabilior est Porciā / quam Porcia. With a quam-clause, tam ... quam / quanto ... tanto (XLI).
- **Absolute comparative** ("rather"): duriōra ei videbantur "του φαίνονταν κάπως τραχιά"; the superlative may be elative ("very").
- Strengthened by multo, paulo; maior / minor natu = older / younger (XXVII Π2).
- "Eā puellā nihil umquam festivius, nihil amabilius nec longiōre vitā dignius vidi" (text XXVI): ablative of comparison and ablative with dignus.

---

## 4. Subordinate clauses (οι δευτερεύουσες προτάσεις): one card each

Master table first (what the markers want you to recognise instantly):

| Clause (school term) | Type | Introduced by | Mood | Tense rule |
|---|---|---|---|---|
| Αιτιολογική | adverbial | quod, quia, quoniam (quando); cum | indicative = objective cause; subjunctive = subjective cause; cum always subjunctive | sequence of tenses when subjunctive |
| Τελική | adverbial | ut, nē (quo + comparative; qui) | subjunctive | present / imperfect only |
| Συμπερασματική (επιρρηματική) | adverbial | ut, ut non (ut nemo, ut nihil...); qui | subjunctive | present / imperfect (perfect if result complete) |
| Χρονική | adverbial | dum, quoad, quamdiu, postquam, ubi, ut, simulac, cum primum, antequam, priusquam, donec, cum | indicative if only time; subjunctive if expectation/aim, and for historical cum | see 4.4 |
| Υποθετική | adverbial | si, nisi (si non, si minus) | 3 kinds | see 4.5 |
| Εναντιωματική / παραχωρητική | adverbial | etsi, tametsi, quamquam (+ind.); cum, licet, quamvis, ut (+subj.); etiamsi | see 4.6 | |
| Παραβολική / συγκριτική | adverbial | atque, ac, et, ut, sicut, quam, quanto, quo; quasi, tamquam (si), velut si | indicative (real); subjunctive (hypothetical) | |
| Αναφορική | adjectival / adverbial / substantive | qui, quae, quod; qualis, quantus, ubi... | varies | |
| Ευθεία ερώτηση | main clause | -ne, num, nonne, utrum...an, interrogatives | indicative; subjunctive if deliberative/potential | |
| Πλάγια ερώτηση | substantive | same | always subjunctive | sequence of tenses |
| Βουλητική | substantive | ut, nē (quominus) | always subjunctive | present / imperfect only |
| Ουσιαστική συμπερασματική | substantive | ut, ut non | subjunctive | present / imperfect (perfect possible) |
| Ενδοιαστική | substantive | nē; ut or nē non | subjunctive | present / imperfect (perfect if already happened) |
| Προτάσεις του quominus και του quin | substantive | quominus, nē; quin | subjunctive | present / imperfect |

### 4.1 Causal (αιτιολογικές) [BOOK XXXV, XVII, XXIV Π7; Grammar §179]

- Conjunctions **quod, quia, quoniam (quando)**. **Indicative** when the reason is objectively accepted; **subjunctive** when it is hypothetical or subjective, i.e. the reason of the subject of the main verb (as people claim), the Greek ὅτι + optative of indirect speech.
  - Texts: "Nemo vero eos miserētur, quod infeliciter vixerint" (text XXXV: subjunctive, subjective reason: "επειδή τάχα έζησαν δυστυχισμένοι"); "Scipiōnis filiae ex aerario dotem accepērunt, quia nihil illis reliquerat pater" (indicative: objective reason); "id senatui publice curāri placuit, quoniam Rēgulus aberat"; "Socrates accusātus est, quod iuvenes corrumperet" (XXXV Π1: "γιατί τάχα διέφθειρε").
  - A cue adverb (propterea quod, ideo quod) tells you it is causal and not relative. "non quod ... sed quod" (hoc facio non quod mihi placeat, sed quod debeo).
- **cum causal + subjunctive, always**: "Cum sis mortālis, quae sunt mortalia, cura"; usually with praesertim; "cum a Carthagine semper tribūtum ipse exigeret" (text XXXV: causal cum, imperfect, "αφού"). Reason: causal link = result of an inner reasoning process (XXXV Π2).
- **Substantive quod after verbs of emotion** (gaudeo, queror, indignor, doleo): indicative: gaudeo quod urbs servāta est (XXIV Π7); "Ennius indignātus quod Nasīca tam aperte mentiebātur" (text XXIV).
- Other ways to express cause: **ob / propter / per + acc.** (external), plain **ablative** (internal), **participle** (causal), **qui + subjunctive** (relative causal: stulti sumus, qui hoc faciāmus; o fortunate Achilles, qui Homērum praecōnen invenĕris).
- Exercise in the book (XXXV Ex. II): rewrite "propter + noun" as quod-clause: homo punītus est propter suam audaciam = homo punītus est, quod audax erat. Justify mood and tense.
- **Markers expect**: introduction word, mood (indicative = objective cause, subjunctive = subjective), tense and sequence.

### 4.2 Final (τελικές) [BOOK XXXVI; Grammar §184] — see §3.11 for the full table

- ut / nē + subjunctive; **present after primary, imperfect after historical, no perfect**: "Legāti aurum adferunt, ut Curius eo utātur"; "Legāti aurum attulērunt, ut Curius eo uterētur" (XXXVI Π1; text: "cum ad eum magnum pondus auri publice missum attulissent, ut eo uterētur").
- quo (not ut) when a comparative follows: "quo facilius divitias contemnere posset" (text XXXVI).
- Parenthetical nē dicam: "Supervacaneae, nē dicam ineptae, legatiōnis ministri" (text XXXVI).
- Hints: eo consilio ut, ea mente ut, idcirco ut.

### 4.3 Consecutive: adverbial and substantive [BOOK XXXVII, XLVI; Grammar §185-186]

- **Adverbial**: ut / ut non (ut nemo, ut numquam, ut nihil); in the main clause there is a cue: sic, ita, tam, adeo; talis, tantus. **Always subjunctive** (the result is a subjective state in Latin). Present after primary / imperfect after historical; **perfect subjunctive is possible after a historical tense when the result is seen as completed**: Tantus terror omnes invāsit, ut nemo arma caperet / ut nemo arma ceperit (XXXVII Σημ.).
  - Texts: "tantus furor omnes invaserat, ut pugnāre cuperent" (text XXXVII); "Sed, propter servi scelus et audaciam, tanto dolōre Aesōpus est adfectus, ut nihil ei gratius possit esse quam recuperatio fugitīvi" (text XXVIII); "Bellōrum enim civilium exitus tales sunt semper, ut non solum ea fiant, quae velit victor, sed etiam ut victor obsequātur iis ..." (text XXXVII); "ea victōres ferociōres impotentioresque reddit, ut, etiamsi natūrā tales non sint, necessitāte esse cogantur".
  - **Relative consecutive**: qui + subjunctive after a cue: "neminem tam stultum fore, qui non videat coniuratiōnem esse factam" (text XLII, 2024 Δ1β); is sum qui (non is sum, qui terrear); dignus qui (vir est dignus, qui laudētur).
  - Don't confuse with final: ne for negative purpose vs ut non for negative result.
- **Substantive** (ουσιαστικές συμπερασματικές, XLVI): ut / ut non after
  - verbs of accomplishing (facio, efficio, perficio, consequor): "Effēcit ut nautae inter se pugnārent";
  - impersonals of happening (fit, accidit, evenit, contingit): "Accĭdit ut ego ipse illic manērem"; "Ex quo fit, ut laudandus is sit, qui pro re publicā cadat" (text XLVI);
  - expressions of what remains/follows (restat, reliquum est, sequitur, efficitur): "Restat ut Brutum videāmus"; "ex quo illud natūrā consequitur, ut commūnem utilitātem nostrae anteponāmus" (text XLVI);
  - impersonals: satis est, tempus est, lex est, mos est: "Tempus est ut legāti abeant".
  - They correspond to the Greek final infinitive.

### 4.4 Temporal (χρονικές) and the uses of cum [BOOK XXXVIII, XXIV Π6, XIV Π4, XV Π7, XX Π11; Grammar §190-192]

Mood rule: **indicative** when only time is given; **subjunctive** when the time clause also carries expectation/aim or a closer relation (historical cum).

| Relation to main clause | Conjunctions | Mood and tense | Examples |
|---|---|---|---|
| Σύγχρονο: duration | dum, quoad, quamdiu = "as long as" | indicative | "Dum Caecilia vixit, Metellus eam multum amāvit" (XXXVIII Π); text: "quam Metellus, dum vixit, multum amāvit" |
| Σύγχρονο: "while" | **dum = ενώ + present indicative, whatever the tense of the main verb (Latinism)** | present indicative | "Dum omen petit, ipsa fēcit omen"; text XXXVIII: "Caecilia ... dum more prisco omen nuptiāle petit filiae sorōris, ipsa fēcit omen" |
| Προτερόχρονο | postquam, ubi, ut, simulac (simul atque), cum primum = "after, when, as soon as" | indicative, usually perfect (or pluperfect if an interval is stated) | "Haec postquam domestici Scipiōni rettulērunt" (text XXXIV); "Ubi in sacellum venērunt (venerant), omen petivērunt"; "Equidem, ut vēni ad urbem" (text XXXVII) |
| Υστερόχρονο | antequam, priusquam, dum, donec, quoad = "before, until" | indicative if time only; **subjunctive if the action is expected or aimed at** | "expectābam, dum vox audirētur"; "discēdam, priusquam Caesar redeat" (XXXVIII); "expectabatque dum aliqua vox congruens proposito audirētur" (text XXXVIII, 2023) |
| **Cum + indicative** (cum alone) | cum | indicative, any tense (also future / future perfect for the future) | **iterative** "whenever": cum civitas bellum gerit (gerēbat), magistrātus creantur (creabantur) (XV Π7); text XXIII: "cum illa cubiculum marīti intraverat, vivere filium simulābat" (pluperfect, "όποτε"). **Inversum** (the cum-clause carries the main event; cue vix, vixdum, aegre, repente; perfect indicative): "Vix animum sollicitum somno dederat, cum repente apparuit species" (XIV Π4, XXXVIII Ex.) |
| **Cum historicum / narrativum** (ιστορικός ή διηγηματικός cum) | cum | **subjunctive**, past narratives only: **imperfect = simultaneous, pluperfect = anterior** (regular sequence of tenses) | See §5.1 for the justification formula. Texts: "Cum P. Cornelius Nasica ad Ennium poētam venisset eique ab ostio quaerenti Ennium ancilla dixisset ..." (text XXIV, pluperfect: anterior); "Cum Africānus in Literno esset, complūres praedōnum duces forte ... venērunt" (text XXXIV, imperfect: simultaneous); "cum lacrimae suae, diu cohibitae, vincerent prorumperentque, egrediebātur" (text XXIII, imperfect) |

- The textbook definition (XXIV Π6): cum + indicative gives "απλώς το χρόνο"; cum historicum "υπογραμμίζει τη βαθύτερη σχέση της δευτερεύουσας με την κύρια πρόταση· δημιουργεί μια σχέση αιτίου και αιτιατού ανάμεσά τους. Είναι φανερός ο ρόλος του υποκειμενικού στοιχείου που υπάρχει στην υποτακτική." The clause "cum venisset" means: "όταν ήλθε, ως αποτέλεσμα του ότι ήλθε".
- cum + subjunctive also expresses cause ("αφού") and concession ("ενώ, μολονότι"); telling them apart relies on cue words: praesertim (causal), tamen in main clause (concessive).
- Grammar adds cum coincidens/explicativum (cum tacent, clamant) [Grammar §192] [CHECK: not in the textbook Π, rarely asked].

### 4.5 Conditional sentences (οι υποθετικοί λόγοι) [BOOK XXXIX; Grammar §181; PAPER 2025]

Latin has **three** kinds (not four as in Ancient Greek):

| Kind (school) | Meaning | Protasis (υπόθεση): si / nisi + | Apodosis (απόδοση) | Greek parallel | Example |
|---|---|---|---|---|---|
| **α΄ είδος (I)**: ανοικτή υπόθεση | open, nothing said about truth | indicative, any tense | any mood | εἰ + οριστική / ἐάν + υποτακτική | Si hoc facis, erras; Si hoc fecisti, erravisti; Si hoc facies (feceris, συντ. μέλλων), errabis |
| **β΄ είδος (II)**: αντίθετη προς την πραγματικότητα (απραγματοποίητο) | contrary to fact | **imperfect subjunctive (present)** or **pluperfect subjunctive (past)** in both protasis and apodosis | same | δυνητική οριστική | Si hoc faceres, errares; Si hoc fecisses, erravisses |
| **γ΄ είδος (III)**: δυνατή ή πιθανή υπόθεση | possible/likely, present-future | **present subjunctive** in both | same | δυνητική ευκτική | Si hoc facias, erres |

- Negative protasis: nisi (si non). Elliptical alternative protasis: **si minus** or si non: "si poterit, in patriā explicābit; si non (si minus), in exilio" (XXXIX Π III Σημ.).
- Markers' vocabulary for describing a conditional (2025 key): **ευθύς** (direct, i.e. in a main sentence) vs **εξαρτημένος**; **απλός** vs **σύνθετος** (more than one protasis: "Si marmor illi obtulisses, si viliōrem materiam, fecisset" has two protases); **α΄/β΄/γ΄ είδος**; and the word "εκφορά" (the mood/tense form).
- Texts: unreal (β΄): "Si marmor illi obtulisses, si viliōrem materiam, fecisset tale, quale ex illā fieri optimum posset" (text XXXIX); "quae iacērent in tenebris omnia, nisi litterārum lumen accederet" (text XXXII); "nisi nox pugnandi finem fecisset" (Grammar §181); open (α΄): "si poterit, in patriā, si minus, in exilio" (text XXXIX); "nisi vos ipsi patriae consulueritis, nemo patriae consulet" (text XXV: future perfect + future); "Si habet Asia suspiciōnem quandam luxuriae, Murēnam laudāre debēmus" (text XXX: present indicative + debemus); possible (γ΄) in the paper: Si marmor illi offeras, faciat tale (2025 key).
- A repeated condition ("whenever") is a temporal clause, not a conditional (Grammar §181 Σημ.).
- In indirect speech the protasis becomes subjunctive and the apodosis an infinitive; "si quid durius ei videbātur" etc. (XLVIII; text XLIX "si ... cessisset, interemptūra essem": εξαρτημένος υποθετικός λόγος).
- **Recipe 2025 Δ1β**: (1) name the conjunction (si: positive) (2) say which moods/tenses (protasis: pluperfect subjunctive obtulisses; apodosis: pluperfect subjunctive fecisset) (3) say ευθύς/εξαρτημένος and απλός/σύνθετος (4) name the kind with its meaning (β΄ είδος, αντίθετο του πραγματικού στο παρελθόν) (5) to convert to a γ΄ είδος (possible): replace both tenses with the present subjunctive (obferas / offeras, faciat).

### 4.6 Concessive / adversative (εναντιωματικές και παραχωρητικές) [BOOK XL; Grammar §182]

- **Εναντιωματικές** (a real fact in spite of which the main clause holds): **etsi, tametsi, quamquam + indicative**; **cum, licet + subjunctive**. Cue: tamen in the main clause.
- **Παραχωρητικές** (a supposed fact; essentially a conditional): **etiamsi + subjunctive or indicative; licet, quamvis, ut + subjunctive**. quamvis stands before adjectives/adverbs (quamvis ille felix sit "όσο ευτυχισμένος και αν είναι"). licet is an old impersonal verb "it is allowed" that lost its ut: hence the subjunctive.
- Sequence of tenses holds when the verb is subjunctive.
- Texts (XL): "Licet mihi ostendas agmina militum, quibus curiam circumsedisti; licet mortem minitēris, numquam tamen ego hostem iudicābo Marium. Etsi senex et corpore infirmo sum, semper tamen meminero urbem Rōmam et Italiam a Μariο conservātam esse." Also: "Etiamsi natūrā tales non sint, necessitāte esse coguntur" (text XXXVII).
- Relative concessive (qui = etsi / cum): ego, qui sum fortior, pereo fame (XLII Π2); Athenienses, qui numero inferiores essent, tamen victoriam consecuti sunt (Grammar §195).

### 4.7 Comparative clauses (παραβολικές) [BOOK XLI; Grammar §183]

- **Simple/real (indicative)**: similiter ... ac, par, idem, aliter, contra + atque / ac / et; **ut / sicut** with ita, sic (manner): "sic dicit, ut sentit"; **quam** with tam and positive adjective or adverb ("nemo tam stultus est quam ille") and **quanto / quo ... tanto / eo** with comparatives (quanto celerius, tanto melius).
- **Hypothetical (subjunctive)**: quasi, tamquam (si), velut si, ut si, proinde quasi (the comparison is with an unreal/supposed situation): "sic loqueris, quasi omnia scias"; sequence of tenses holds.
- Texts (XLI): "Tu autem, proinde quasi cum matre Evandri nunc loquāris, sermōne ... uteris"; "Sic ergo vive, ut viri antīqui, sed sic loquere, ut viri aetātis nostrae"; "tamquam scopulum, sic fugias verbum insolens atque inaudītum".

### 4.8 Relative clauses (αναφορικές) [BOOK XLII, XXVII Π4; Grammar §195]

- **Επιθετικές**: (a) **προσδιοριστικές**: define the antecedent, indicative or subjunctive according to sense (ea, quae video); the subjunctive is often caused by **attraction** (έλξη) from another subjunctive: "Quis miser esse possit, qui talia bona habeat?"; (b) **προσθετικές**: refer to the whole preceding sentence, introduced by quod, indicative: "existimāvit se victūrum esse, quod accĭdit".
- **Επιρρηματικές** (equivalent to an adverbial clause; mood follows that clause): **τελικές** (legātum misērunt, qui pacem peteret = ut is), **συμπερασματικές** (is sum, qui numquam mentiar; nemo tam stultus est qui hoc dicat), **αιτιολογικές** (stulti sumus qui hoc faciāmus = quia), **υποθετικές** (qui hoc dicit, errat = si quis), **παραχωρητικές** (ego qui sum fortior = etsi).
- **Ουσιαστικές**: act as noun: Quidquid oritur, causam habet; Dicam quidquid sentio.
- A relative at the start of a sentence introduces a main clause: qui = et is, ubi = et ibi (**συνδετικό αναφορικό**): "Quibus interemptis aurum omne recēpit" (text XXI); "Quā sententiā graviter ... dictā Scipio obtinuit" (text L).
- In oratio obliqua the relative clause takes the subjunctive: "Pacuvius dixit sonōra esse, quae Accius scripsisset" (XXVII Π4), vs direct: sonōra erant, quae Accius scripserat?
- **Marker templates**: "δευτερεύουσα επιρρηματική αναφορική συμπερασματική πρόταση (ισοδυναμεί με απλή επιρρηματική)" (2024).
- Nuance: in text XLII the exceptional indicative "quo intendit" (indicative inside an indirect clause) is explained by XLVIII Π3 as a clause that functions independently of the indirect speech.

### 4.9 Direct questions (ευθείες ερωτήσεις) [BOOK XLIII, XXII; Grammar §173-175]

- **Μερική άγνοια**: interrogative pronoun/adverb: quis, quantus, ubi, quando, cur, quin ("γιατί δεν...;": "Quin, homo ineptē, taces?" text XLI).
- **Ολική άγνοια**: -nĕ ("ἆρα", neutral: Estne frater tuus intus?), **num** (expects "no": "Num ad hostem vēni et captīva in castris tuis sum?" text XLIII), **nonne** (expects "yes": Nonne canis similis lupo est?). Also no particle for emphasis: "Ego non cognosco vocem tuam?" and "tu mihi ipsi non credis?" (text XXIV).
- **Διμελείς**: utrum (-ne) ... an; -ne ... an; or just an; "or not?" = **an non**.
- Mood: indicative; **subjunctive for deliberative/potential** (Quid faciam? Quis hoc dubitet?).
- Answers: yes = ita (est), sic, sane, certe; no = non (vero), minime (vero); or repeat the key word.
- Rhetorical vs real question (πραγματική vs ρητορική): a rhetorical question is equivalent to a strong negation/affirmation; in oratio obliqua it turns into an infinitive; a real one turns into the subjunctive (Grammar §197).
- Exam value: 2025 Δ2α required turning indirect questions back into direct ones.

### 4.10 Indirect questions (πλάγιες ερωτήσεις) [BOOK XLIV; Grammar §193-194]

- Substantive clauses (object, subject, explanation) after interrogative (rogo), verbs of saying (doceo), knowing (scio), trying (tempto). **Always subjunctive**, with sequence of tenses.
- Particles: ne, num (no difference in meaning: "αν"), nonne (mostly after quaero), or interrogative pronouns/adverbs; double: utrum ... an; "or not?" = **necne** (indirect) vs **an non** (direct). **si** after verbs of waiting/trying (exspecto, conor, tempto): "circumfunduntur hostes, si quem aditum reperire possent"; **an** after dubito, nescio, haud scio, incertum est: "dubito an hoc verum sit".
- Table (XLIV Π1): Rogat quid facias / feceris / factūrus sis; Rogābat quid faceres / fecisses / factūrus esses.
- Texts: "Interrogo vos quando hanc ficum decerptam esse putētis ex arbore" (text XXV); "marīto persaepe interroganti, quid ageret puer" (text XXIII); "Nescio enim quis possit diligere eum, quem metuat" (text XLIV); "tum intellegitur, quam fuerint inopes amicōrum" (text XLIV); "Tum intellexi, quos fīdos amīcos habuissem, quos infīdos" (text XLIV); "Accipe nunc quid postea Nasīca fecerit" and "Visne scīre quid Nasīca responderit?" (text XXIV, 2025). In the first, accipe is imperative (a primary tense), hence perfect subjunctive fecerit (anterior).
- **Not to be confused with** the relative clause (also qui/quae/quod): ask "does it ask a question?".

### 4.11 Volitional clauses (βουλητικές) [BOOK XLV, XXXVI Π3; Grammar §187-188]

- **Substantive**: complete verbs of will: ordering, asking, begging, urging, persuading, deciding, permitting, taking care (iubeo takes an infinitive instead; for "φροντίζω" the Greek parallel is the ὅπως clause).
- **ut** (negative **nē**, rarely quominus), subjunctive present after primary, imperfect after historical (XLV Π2): hortor te ut scribas / hortābar te nē scriberes.
- Many verbs may take either ut + subjunctive or an infinitive without difference (constituit ut tragulam mitteret = constituit tragulam mittere) (XLV Π3).
- **Not** to be confused with final clauses (adverbial); volitional clauses are the object or subject (XLV Π3).
- Texts: "Caesar ... cuidam ex equitibus Gallis persuādet ut ad Cicerōnem epistulam deferat. Curat et providet nē ... nostra consilia ab hostibus cognoscantur" (text XLV); "Legātum monet ut ... epistulam ad amentum tragulae adliget et ... abiciat"; "Gallus ... constituit ut tragulam mitteret"; "militesque adhortātur ut salūtem sperent"; "Sulla ... senātum armātus coēgerat ut C. Marius quam celerrime hostis iudicarētur" (text XL); "Arria milites orābat, ut simul imponerētur" (text XXIII); "Tum puella ... rogāvit materteram, ut sibi paulisper loco cederet" (text XXXVIII, 2023 Δ2α); "Scipio obtinuit, ut neuter in provinciam mitterētur" (text L).
- Marker function: αντικείμενο / έμμεσο αντικείμενο (2023: έμμεσο αντικείμενο στο rogavit; 2022: αντικείμενο στα curat, providet).

### 4.12 Fear clauses, quominus and quin [BOOK XLVII; Grammar §188-189]

- **Ενδοιαστικές** (after timeo, metuo, vereor, metus est, periculum est): **nē** = fear that something happens ("μήπως"); **ut or nē non** = fear that something does not happen ("μήπως δεν"). timeo nē veniat; verebar nē non (ut) venīret. **Present/imperfect = fear is seen at the moment it forms**; **perfect subjunctive if what is feared has already happened**: vereor nē hoc dicat (φοβάμαι μήπως το πει) vs vereor nē hoc dixerit (φοβάμαι μήπως το είπε) (XLVII Π4). Text: "Quid ergo non times nē istae te calvam faciant?" (text XLVII).
- **Προτάσεις του quominus και του quin**: after verbs of **hindering or refusing** (impedio, prohibeo, deterreo, obsto, resisto, recuso): **nē / quominus** when the main verb is affirmative (impedio illum quominus / nē veniat); **quominus or quin** when the main verb is negated (non prohibui illum quominus (quin) venīret). Text: "Augustus voluit filiam deterrēre quominus id faceret" (text XLVII).
- **quin** also follows: non dubito quin ("δεν αμφιβάλλω ότι"), non est dubium quin, facere non possum quin ("δεν μπορώ να μη"), non multum abest quin ("λίγο λείπει να"), per me stat quominus ("εξαρτάται από εμένα να μη"). Text: "Non dubito quin calva esse nolis" (text XLVII). **quin** with the direct question "γιατί δεν": Quin taces?
- All are subjunctive "because the content expresses the intention of the subject / the possible".

### 4.13 Everything that ut can introduce (XLVII Π5) [BOOK]

| ut + indicative | ut + subjunctive |
|---|---|
| Temporal ("when, as soon as": ut vēni ad urbem, text XXXVII) | Final (aurum attulērunt, ut eo uterētur) |
| Comparative ("as": sic dicit, ut sentit) | Adverbial consecutive (tantus furor, ut pugnāre cuperent) |
| | Substantive consecutive (Effēcit ut ...) |
| | Volitional (hortor te ut scribas) |
| | Fear (timeo ut sustineant) |
| | Concessive ("granted that") |

---

## 5. What a full-mark answer looks like (marker phrasing)

All templates are taken from the official-style answer keys (ΔΙΑΚΡΟΤΗΜΑ, 2022-2026) unless marked **(constructed)**; constructed ones apply the textbook rule in the key's style and have not been seen in a key.

### 5.1 Clause identification and justification (the "Δ1β / Δ2α" question)

The question always asks the same four things (sometimes in a different order): **είδος** (kind), **συντακτική λειτουργία** (function), **τρόπος εισαγωγής** (how introduced), **αιτιολόγηση της εκφοράς** (why this mood and tense). Split the marks: 1 + 1 + 1 + 2-4.

**Historical cum (2026 Δ2α, 7 marks)**
> Δευτερεύουσα επιρρηματική χρονική πρόταση (καταφατική). Συντακτικά λειτουργεί ως επιρρηματικός προσδιορισμός του χρόνου στο poposcit. Εισάγεται με τον ιστορικό-διηγηματικό σύνδεσμο cum. Εκφέρεται με υποτακτική, γιατί ο ιστορικός cum υπογραμμίζει τη βαθύτερη σχέση αιτίου-αιτιατού ανάμεσα στη χρονική και την κύρια πρόταση· είναι εμφανές το υποκειμενικό στοιχείο που εκφράζει η υποτακτική. Ειδικότερα με χρόνο υπερσυντέλικο (cognovisset), γιατί εξαρτάται από ιστορικό χρόνο (poposcit: παρακείμενος) και εκφράζει το προτερόχρονο στο παρελθόν (σύμφωνα με τους κανόνες της ακολουθίας των χρόνων).
> Σύμπτυξη: viri sui consilio de interficiendo Caesare cognito.

For the imperfect variant replace the last sentence: "...παρατατικό (esset), γιατί εξαρτάται από ιστορικό χρόνο ... και εκφράζει το σύγχρονο στο παρελθόν." **(constructed from XXIV Π5-6)**

**Volitional, dependent on a verb of will (2022 Δ1β, 2023 Δ2α)**
> ... δευτερεύουσα ουσιαστική βουλητική πρόταση. Εκφέρεται με έγκλιση υποτακτική (όπως όλες οι βουλητικές), γιατί το περιεχόμενό της είναι απλώς επιθυμητό, συγκεκριμένα χρόνου ενεστώτα (cognoscantur) / παρατατικού (cederet), γιατί εξαρτάται από ρήμα αρκτικού χρόνου (curat-providet: ενεστώτας) / ιστορικού χρόνου (rogavit). Παρατηρείται ιδιομορφία στην ακολουθία των χρόνων, γιατί η βούληση είναι ιδωμένη τη στιγμή που εμφανίζεται στο μυαλό του ομιλητή (συγχρονισμός της κύριας με τη δευτερεύουσα πρόταση) και όχι τη στιγμή της πιθανής πραγματοποίησής της. Η πρόταση αναφέρεται στο παρόν-μέλλον (παρελθόν). Λειτουργεί ως αντικείμενο (έμμεσο αντικείμενο) στο ρήμα εξάρτησης.

**Temporal with dum + subjunctive (2023 Δ2α)**
> δευτερεύουσα επιρρηματική χρονική πρόταση. Εκφέρεται με υποτακτική, γιατί η πράξη περιγράφεται ως προσδοκία ή επιδίωξη, συγκεκριμένα χρόνου παρατατικού (audiretur) γιατί εξαρτάται από ρήμα ιστορικού χρόνου (expectabat: παρατατικός). Λειτουργεί ως επιρρηματικός προσδιορισμός του χρόνου στο ρήμα εξάρτησης expectabat.

**Relative consecutive (2024 Δ1β)**
> Δευτερεύουσα επιρρηματική αναφορική συμπερασματική πρόταση (ισοδυναμεί με απλή επιρρηματική), λειτουργεί ως επιρρηματικός προσδιορισμός του συμπεράσματος-αποτελέσματος στο (εννοούμενο) ειδικό απαρέμφατο fore. Εκφέρεται με υποτακτική όπως όλες οι συμπερασματικές προτάσεις, γιατί το συμπέρασμα στη λατινική θεωρείται υποκειμενική κατάσταση· η υποτακτική είναι χρόνου ενεστώτα, γιατί εξαρτάται από ρηματικό τύπο αρκτικού χρόνου (το fore, απαρέμφατο μέλλοντα, που με τη σειρά του εξαρτάται από το intellego). Ισχύει ιδιομορφία στην ακολουθία των χρόνων: το συμπέρασμα-αποτέλεσμα είναι ιδωμένο τη στιγμή που εμφανίζεται στο μυαλό του ομιλητή (συγχρονισμός) και όχι τη στιγμή της πιθανής πραγματοποίησής του. Για την ύπαρξη της συμπερασματικής μας προϊδεάζει το tam.

**Conditional (2025 Δ1β)**
> Δευτερεύουσα επιρρηματική υποθετική πρόταση. Εισάγεται με τον υποθετικό σύνδεσμο si (γιατί είναι καταφατική). Υπόθεση: si marmor illi obtulisses (υποτακτική υπερσυντελίκου). Απόδοση: fecisset tale (υποτακτική υπερσυντελίκου). Ο υποθετικός λόγος είναι ευθύς, σύνθετος (δύο υποθέσεις) και ανήκει στο β΄ είδος· εκφράζει το αντίθετο του πραγματικού στο παρελθόν. (Υπόθεση δυνατή ή πιθανή για το παρόν-μέλλον: si marmor illi offeras, faciat tale.)

**Causal, final, consecutive adverbial, indirect question, fear, quominus (constructed, in the same style)**
> Αιτιολογική: Δευτερεύουσα επιρρηματική αιτιολογική πρόταση, εισάγεται με το quia, εκφέρεται με οριστική γιατί η αιτιολογία είναι αντικειμενικά αποδεκτή (αν η αιτιολογία ήταν υποκειμενική: υποτακτική). Επιρρηματικός προσδιορισμός της αιτίας στο [ρήμα].
> Τελική: ... εισάγεται με ut (nē αν είναι αρνητική) και εκφέρεται πάντοτε με υποτακτική, ενεστώτα/παρατατικού. Επιρρηματικός προσδιορισμός του σκοπού στο [ρήμα].
> Πλάγια ερώτηση: Δευτερεύουσα ουσιαστική πλάγια ερωτηματική πρόταση, εισάγεται με [quid / num / -ne ...] και εκφέρεται πάντοτε με υποτακτική, γιατί η εξάρτηση δίνει υποκειμενική χροιά (XLIV Π1). Η υποτακτική είναι [παρακειμένου], γιατί εξαρτάται από [αρκτικό χρόνο] και δηλώνει το προτερόχρονο. Αντικείμενο στο [ρήμα].
> Ενδοιαστική: ... ουσιαστική ενδοιαστική, εισάγεται με nē (φόβος μήπως γίνει), υποτακτική ενεστώτα/παρατατικού, αντικείμενο στο timeo.

### 5.2 Role-recognition phrases (Δ1α)

The format is "X είναι ... στο ...". Each item has: **term of the function** + **the word it depends on**. Exact phrases collected from the keys:

| Function | Marker phrase |
|---|---|
| Subject | υποκείμενο στο [verb/infinitive] (consilia στο cognoscantur; se στο esse) |
| Direct / indirect object | άμεσο αντικείμενο (se στο dabat, άμεση αυτοπάθεια); έμμεσο αντικείμενο (ancillae στο credidi) |
| Adjective, apposition | επιθετικός προσδιορισμός (temerarium στο factum); ομοιόπτωτος προσδιορισμός ως παράθεση (uxor στο Porcia) |
| Genitive | γενική κτητική / αντικειμενική / υποκειμενική / της ιδιότητας / διαιρετική / της αξίας / του εγκλήματος / επεξηγηματική (+ "στο [noun]") |
| Dative | δοτική ως συμπλήρωμα; έμμεσο αντικείμενο; δοτική κτητική / χαριστική / του σκοπού / του ποιητικού αιτίου |
| Ablative, prepositionless | απρόθετη αφαιρετική: οργανική / του τρόπου / του μέτρου ή της διαφοράς / του ποιητικού αιτίου / της αιτίας / συγκριτική / του χωρισμού / της ύλης / της ιδιότητας / τοπική / χρόνου |
| Prepositional | εμπρόθετος προσδιορισμός: της αιτίας (εξωτερικό αναγκαστικό: ob, propter, per), της ύλης (ex aere), της απομάκρυνσης (ex urbe), της εναντίωσης ή εχθρικής κατεύθυνσης (contra Claudium), του ποιητικού αιτίου (ab eo), του σκοπού (ad concordiam), της αναφοράς (de) |
| Adverbial | επιρρηματικός προσδιορισμός του χρόνου / τόπου / τρόπου / αιτίας / σκοπού στο [verb] (semper στο exigeret) |
| Infinitive | ειδικό απαρέμφατο, αντικείμενο στο [verb]; τελικό απαρέμφατο, υποκείμενο στο απρόσωπο [verb] (curāri στο placuit) |
| Gerund | γενική του γερουνδίου, γενική αντικειμενική στο [noun] (standi στο mora); απρόθετη αφαιρετική γερουνδίου, επιρρηματικός προσδιορισμός του τρόπου (non credendo) |
| Participle | κατηγορηματική μετοχή με υποκείμενο το [word]; συνημμένη / απόλυτη; επιθετική; αιτιολογική / χρονική |

**Style rule from every key**: say the word the function attaches to ("στο desertum esse" even when it is an infinitive), and for the agent use "ποιητικό αίτιο".

---

## 6. Sequence of tenses and indirect speech (tables)

### 6.1 Consecutio temporum (ακολουθία των χρόνων) [BOOK XXIII-XXIV, XLVII Π4; Grammar §177-178]

Dependent clauses always in the subjunctive (indirect questions, volitional, final, consecutive, fear, quominus/quin) **must** follow the table; relative, comparative, temporal, causal, concessive, conditional clauses follow it *when* their verb is subjunctive (XXIII Π2).

| | **Primary** governing verb (present, future, future perfect, perfect with present meaning, imperative) | **Historical** governing verb (imperfect, perfect = Greek aorist, pluperfect) |
|---|---|---|
| Simultaneous | present subjunctive | imperfect subjunctive |
| Anterior | perfect subjunctive | pluperfect subjunctive |
| Posterior | -ūrus sim (present of the active periphrastic) | -ūrus essem |
| Examples | Rogat quid agam / egerim / actūrus sim | Rogābat quid agerem / egissem / actūrus essem |

- Infinitives, participles, gerunds and supines count as primary or historical according to the clause they belong to (Grammar §178 Σημ. 1: Athenienses Delphos miserunt consultum, quo modo se defenderent: consultum counts as historical because miserunt is a historical perfect).
- Historical present can behave as either (Grammar Σημ. 2).
- Special case, **"ιδιομορφία στην ακολουθία των χρόνων" (synchronism)**: clauses of purpose, will, fear, result, expectation (dum, priusquam + subjunctive), quominus and quin stay in the present (after primary) or imperfect (after historical) whatever the relative time of the action. Reason: "ο φόβος και η βούληση (πρόθεση) είναι ιδωμένα τη στιγμή που εμφανίζονται στο μυαλό του ομιλητή" (XLVII Π4). **Exceptions**: a perfect subjunctive may stand when a result or a fear is seen as accomplished (XXXVII Σημ.; XLVII Π4).

### 6.2 Indirect speech (ο πλάγιος λόγος) [BOOK XLVIII; Grammar §196-198]

Governed by verbs of saying (λεκτικά), thinking (δοξαστικά) or asking (ερωτηματικά). In indirect speech there is **always an infinitive or a subjunctive**.

| Direct | Indirect | Example |
|---|---|---|
| Statement (κρίση, indicative) | ειδικό απαρέμφατο with accusative subject; tense relation: present = simultaneous, perfect = anterior, future = posterior | Hostes discēdunt / discessērunt / discēdent -> Dicit (dixit) hostes discedere / discessisse / discessūros esse |
| Command or wish (imperative, jussive subjunctive) | ut / nē + subjunctive (sometimes the infinitive after verbs like iubeo) | Veni! -> peto a te ut venias (petēbam ... ut venīres); Noli timēre -> peto a te nē timeas |
| Real question | indirect question, subjunctive | Ubi est Antōnius? -> Rogat ubi sit Antōnius (rogābat ubi esset) |
| Rhetorical question | infinitive (it is a judgement) | (Grammar §197, quis ... dixeris?) |
| Subordinate clause | subjunctive (the indicative stays only where the clause is independent of the report: "quo intendit" text XLII) | Nescio quid faciam -> dicit se nescīre quid faciat; credo, quia verum est -> dicit se credere quia verum sit |
| Pronouns | ego / meus -> **se / suus** (or ipse, ipsīus when contrast or ambiguity); tu / tuus -> **ille / illīus**; hic, iste -> ille (is) | |
| Adverbs | nunc / hodie / cras -> tunc / illo die / postero die; hic -> ibi | |
| Tenses | follow the sequence of tenses | |

Texts: "Sertōrius omnibus persuāsit cervam ... conloqui secum et docēre, quae utilia factu essent" (text XLVIII: infinitives with subjunctive subordinate clause); "Si quid durius ei videbātur, quod imperandum militibus esset, a cervā sese monitum esse praedicābat" (text XLVIII: sese = Sertorius; esset = subjunctive subordinate); "Pacuvius dixit sonōra esse, quae Accius scripsisset" (text XXVII).

---

## 7. Transformation recipes (μετατροπές) with worked examples

### 7.1 Active -> passive (ενεργητική σε παθητική σύνταξη) [PAPER 2023, 2025]

Steps: (1) accusative object -> nominative subject; (2) subject -> agent: **ab + ablative** for persons, **plain ablative** for things; (3) active verb -> passive verb **in the same tense, mood and person/number now agreeing with the new subject** (perfect tenses: passive participle + sum, agreeing in gender, number, case); (4) change everything that depends on the object (adjectives, relative pronouns, participles); (5) verbs that govern a dative or that are intransitive (nocere, parcere, invidere) have only an impersonal passive: parcetur victis (Grammar §134 Σημ. α΄); (6) coordination: keep et / nec / neque.

- **2025 Δ2β worked answer**: Sapientem nec paupertas nec dolor prohibet, nec eae res, quae imperitos avertunt -> **Sapiens nec paupertate nec dolore prohibetur, nec eis (iis, is) rebus, quibus imperiti avertuntur**. Nine forms change: sapientem -> sapiens; paupertas -> paupertate; dolor -> dolore; prohibet -> prohibetur; eae -> eis (or iis, is); res -> rebus; quae -> quibus; imperitos -> imperiti; avertunt -> avertuntur. (paupertate, dolore, rebus are things: plain ablatives, no ab.)
- **2023 Δ1β**: "Hoc dictum paulo post res ipsa confirmāvit" -> **Hoc dictum paulo post re ipsa confirmatum est** (res ipsa, subject -> re ipsa, ablative of the thing; confirmāvit -> confirmatum est agreeing with dictum).
- Exercise bank: XXI Ex. I (active clause -> abl. abs. with agent), XXXIII Ex. II (debeo + infinitive -> gerundive + dative of agent: Fortes viros imitāri debēmus = Fortes viri nobis imitandi sunt).

### 7.2 Passive -> active [PAPER 2024]

Reverse: agent -> nominative subject; subject -> accusative object; verb -> active. **2024 Δ2α**: "Ab Antōnio, altero consule, Catilīna ipse [...] proelio victus, interfectus est" -> **Antonius, alter consul, Catilinam ipsum [...] proelio victum interfecit** (note: victus agreed with Catilina; as an accompanying participle in the object it becomes victum; the apposition altero consule -> alter consul).

### 7.3 Direct -> indirect speech [PAPER 2023]

Worked: "ego libenter tibi meā sede cedo" dependent on "Caecilia dixit" -> **Caecilia dixit se libenter illi sua sede cedere** (ego -> se; tibi -> illi; mea -> sua; cedo -> cedere, present infinitive: simultaneous).

Checklist: choose the construction by sentence type (statement -> ACI; command -> ut / nē; question -> subjunctive), turn pronouns (6.2), turn tenses (infinitive relative time, subjunctive by sequence), keep subordinate verbs in subjunctive.

### 7.4 Indirect -> direct [PAPER 2022, 2025]

- 2022 Δ2β: "In litteris scribit se cum legionibus celeriter adfore" -> **Ego cum legionibus celeriter adero** (se -> ego; adfore (future infinitive of adsum) -> future indicative).
- 2025 Δ2α (three items): "Accipe nunc quid postea Nasīca fecerit" -> **Quid postea Nasica fecit?** (indirect question after an imperative becomes a direct question with the indicative; the "accipe nunc" frame disappears); "Exclamāvit Nasīca se domi non esse" -> **(Ego) domi non sum** (se -> ego, esse -> sum; the content of the shout, present infinitive -> present indicative); "Visne scīre quid Nasīca responderit?" -> **Quid Nasica respondit?** (perfect subjunctive -> perfect indicative).

### 7.5 Clause -> participle / ablative absolute (σύμπτυξη) [PAPER 2026]

"cum viri sui consilium de interficiendo Caesare cognovisset" -> **viri sui consilio de interficiendo Caesare cognito**. Method: drop the conjunction; the object of the clause becomes the "subject" of a perfect passive participle in the ablative; this works because the main subject (Porcia) is not the participle's subject. If the clause subject equals the main subject and the verb is **transitive non-deponent**, there is no *coniunctum*, so choose the abl. abs. with the object. For deponents use the active perfect participle (haec locūtus).

### 7.6 Participle -> clause "με όλους τους δυνατούς τρόπους" [PAPER 2022 Δ2α, 12 marks]

Give every possible clause type the sense allows:
- missum (auri pondus ... publice missum): relative **quod (pondus) missum erat**; subjunctive by attraction quod missum esset if the governing clause is subjunctive.
- veritus (Gallus periculum veritus): causal **cum veritus esset** (cause as the result of an inner reasoning) / **quod, quoniam, quia veritus erat** (objective) / **quod, quoniam, quia veritus esset** (subjective); the temporal **cum veritus esset** if "after fearing" is meant. The key accepts all of these.

### 7.7 Ablative absolute -> clause [PAPER 2024 Δ2β]

"Marco Tullio Cicerōne et Gaio Antōnio consulibus" -> **cum Marcus Tullius Cicero et Gaius Antonius consules essent** (imperfect subjunctive, simultaneous). Choose the conjunction from the meaning: time (cum + subj. in past; cum / postquam + indic.), cause (quod, quia, cum + subj.), concession (cum, quamquam), condition (si). Brenno duce Galli ... = cum Brennus dux esset. urbe captā = postquam urbs capta est / cum urbs capta esset.

### 7.8 Expressing purpose in all ways [PAPER 2026 Δ2β]: see §3.11. Drill from the textbook: ad dormiendum -> dormītum; facile est ad credendum -> facile est creditu; spectātum veniunt -> veniunt, ut spectent; legātos mittunt orātum -> legātos mittunt, ut orent (XXXIV Ex. II-III, XXXVI Ex. II).

### 7.9 Cause, time, place rewrites

- Cause: propter + noun -> quod-clause (XXXV Ex. II: Milites timōre arma abiciunt (timeo) = Milites, quod timent, arma abiciunt (objective cause, indicative); Virum propter virtūtem admirāmur (fortis sum) = Virum, quod fortis est, admirāmur).
- Place: in Asiā / in Carthagine -> locative of cities (Romae, Athenis, Carthagine); see §3.5 (2026 Δ1β).
- Time: ablative -> cum-clause (see 7.7).

### 7.10 Conditional conversions [XXXIX Ex. III, PAPER 2025] (the book gives no key; these follow the rules in XXXIX)

| Source | Open (α΄) | Possible (γ΄) | Unreal (β΄) |
|---|---|---|---|
| Marmor Phidiae obferes. Simulacrum faciet. | Si marmor Phidiae obtuleris (συντ. μέλλων), simulacrum faciet | Si marmor Phidiae offeras, simulacrum faciat | Si marmor Phidiae obtulisses, simulacrum fecisset (past) / si offerres, faceret (present) |
| Marmor Phidiae obtulisti. Simulacrum fecit. | Si marmor Phidiae obtulisti, simulacrum fecit | | Si marmor Phidiae obtulisses, simulacrum fecisset |
Mark these as **constructed [CHECK]** for the item bank.

### 7.11 Gerundive attraction conversions [XLIX Ex.]

Gerund + accusative object -> gerundive agreeing with the object: nuntiandi victoriam causā -> victoriae nuntiandae causā; ad nuntiandum victoriam -> ad victoriam nuntiandam; campus proelium committendo aptus -> campus proelio committendo aptus; scripsit librum de curando corpus -> de corpore curando. **Never** attract a neuter pronoun/adjective object (ars vera et falsa diiudicandi).

### 7.12 Question conversions [XLIII, XLIV Ex.]

- Direct -> indirect: Quid facis? -> Rogat quid facias; Num est una omnium facies? -> Rogat sitne (num sit) una omnium facies; Nonne canis lupo similis est? -> Quaerit ex te nonne canis lupo similis sit; Utrum ... an -> utrum ... an with subjunctive; "an non" -> necne.
- Indirect -> direct: Rogabat quid faceres -> Quid facis?; Quaero num sit -> Estne? / Num est?
- Statement -> question with num / nonne by expected answer: Pacem amāmus -> Nonne pacem amāmus? (expects yes); Bellum odimus -> Num bellum odimus? (expects no) (XLIII Ex. IV).

---

## 8. Trap list (things that cost marks) with the evidence

1. **Carthago as city or region** (2026 Δ1β; text 25 uses both): for the locative exercise write Carthagine (3rd decl. singular ablative). *[PAPER/PRESS]*
2. **"εμπρόθετη γενική του γερουνδίου" must become a gerundive** (2026 Δ2β γ): eius obiurgandae causā, because the object is accusative and the form is prepositional (causā). Not "eam obiurgandi causā" (accepted at most as the pre-attraction form). *[PAPER/BOOK XLIX]*
3. **No active perfect participle**: use the passive abl. abs. (consilio cognito), or a deponent's active participle. *[BOOK XXI, PAPER 2026]*
4. **Ειδικό απαρέμφατο: subject always accusative** even if the same person as the main subject (dico me venire; exclamāvit Nasīca se domi non esse). Perfect infinitive is always ειδικό. *[BOOK VII, XVIII]*
5. **Τελικό απαρέμφατο: only present** (volo venire / volo te venire). *[BOOK VII]*
6. **Nominativus cum infinitivo**: dicitur Hercules ... adduxisse (personal), not impersonal. *[BOOK XVIII]*
7. **Prohibition**: never the present imperative; noli(te) + inf. or ne + perfect subjunctive; other negatives (nemo, numquam) can replace ne. *[BOOK XXV]*
8. **ne vs ut non**: final -> nē; consecutive -> ut non / ut nemo / ut nihil. *[BOOK XXXVII Π]*
9. **Purpose clauses use only present/imperfect** (idiosyncrasy); an answer with perfect subjunctive in a final clause is wrong. *[BOOK XXXVI]*
10. **Causal quod**: indicative vs subjunctive by whose reason it is; **cum causal** always subjunctive. *[BOOK XXXV]*
11. **cum**: indicative = time only / iterative / inversum; subjunctive = historical (past only), causal, concessive. *[BOOK XXIV, XXXVIII]*
12. **dum**: "while" + present indicative always; "until" + subjunctive if expectation. *[BOOK XX Π11, XXXVIII]*
13. **Dative of agent only with the gerundive** (and a rare perfect passive); a normal passive takes ab + abl. or plain abl. *[BOOK XXXIII; Grammar §135]*
14. **Price**: definite = ablative (viginti milibus), indefinite = genitive of value (tanti, magni, pluris). *[BOOK XXIX]*
15. **Genitive of quality required** for social class (vir nobilissimi generis), age and measure; ablative of quality needs an adjective. *[BOOK XIX Π4, XIV Π3]*
16. **Persons as instruments**: per + acc. or operā + gen., not a bare ablative. *[BOOK XXXI Π3]*
17. **Reflexive**: suus / se for the subject; eius / eorum for someone else. *[BOOK V Π5]*
18. **Relative clause in indirect speech** goes to the subjunctive. *[BOOK XXVII Π4, XLVIII]*
19. **Quin vs quominus vs nē**: affirmative hindering verb -> nē / quominus; negative -> quominus or quin; non dubito quin. *[BOOK XLVII]*
20. **Fear clauses**: nē = "lest it happens", ut / nē non = "lest it doesn't". *[BOOK XLVII]*
21. **Perfect subjunctive after historical tense is possible** for completed result/fear (tantus terror ... ut nemo arma ceperit). *[BOOK XXXVII Σημ.]*
22. **si quis, not si aliquis**; quisquam / ullus for negative or question contexts. *[Grammar §152]*
23. **Intransitive/dative verbs have only an impersonal passive** (parcetur victis; invidētur mihi). *[Grammar §134]*
24. **Gerundive attraction fails with neuter pronoun/adjective objects**. *[BOOK XLIX]*
25. **Ambiguous exam wordings** the markers resolved their own way: curāri as subject of impersonal placuit (not "object of placuit"); amoris as objective genitive; "se" as direct object vs subject (look at the verb: dabat -> direct object; non esse -> subject of infinitive).
26. **Aequum erat + infinitive** (2026 text): "έπρεπε (αλλά δεν έγινε)": the Latin indicative past of a duty verb states the unfulfilled duty (Grammar §169 Σημ. aequum est/erat hoc facere). Good for a translation hint, not a Δ item so far.

---

## 9. Glossary: school term <-> Latin <-> English (for the UI)

| Greek school term | Latin | English |
|---|---|---|
| απόλυτη αφαιρετική | ablativus absolutus | ablative absolute |
| (ιδιόμορφη απόλυτη αφαιρετική) | ablative absolute with noun + noun/adjective | idiomatic ablative absolute |
| συνημμένη μετοχή | participium coniunctum | conjunct participle |
| κατηγορηματική μετοχή | | predicative participle |
| ειδικό απαρέμφατο | infinitivus (accusativus cum infinitivo) | indirect-statement infinitive |
| τελικό απαρέμφατο | | complementary infinitive |
| ταυτοπροσωπία / ετεροπροσωπία | | same subject / different subject |
| προσωπική σύνταξη (παθητικών λεκτικών/δοξαστικών) | nominativus cum infinitivo | personal construction |
| λατινισμός | | Latinism |
| γερούνδιο | gerundium | gerund |
| γερουνδιακό | gerundivum | gerundive |
| γερουνδιακή έλξη | attractio gerundiva | gerundive attraction |
| σουπίνο (σε -um / σε -u) | supinum | supine |
| ενεργητική / παθητική περιφραστική συζυγία | coniugatio periphrastica activa / passiva | active / passive periphrastic |
| ακολουθία των χρόνων | consecutio temporum | sequence of tenses |
| αρκτικοί / ιστορικοί χρόνοι | tempora primaria / historica | primary / historical tenses |
| σύγχρονο / προτερόχρονο / υστερόχρονο | | simultaneous / anterior / posterior |
| ιδιομορφία στην ακολουθία των χρόνων | | synchronism (special sequence) |
| δυνητική / απορηματική / προτρεπτική / ευχετική / παραχωρητική υποτακτική / του απραγματοποίητου | coni. potentialis / deliberativus / hortativus / optativus / concessivus / irrealis | potential / deliberative / hortatory / optative / concessive / irreal subjunctive |
| ιστορικός ή διηγηματικός cum | cum historicum (narrativum) | narrative cum |
| επαναληπτικός / αντίστροφος cum | cum iterativum / inversum | iterative / inverted cum |
| αιτιολογική, τελική, συμπερασματική, χρονική, υποθετική, εναντιωματική, παραχωρητική, παραβολική (συγκριτική), αναφορική | | causal, final, consecutive, temporal, conditional, adversative, concessive, comparative, relative |
| βουλητική, ενδοιαστική, ουσιαστική συμπερασματική, πλάγια ερώτηση | | volitional (substantive ut/nē), fear, substantive consecutive, indirect question |
| προτάσεις του quominus και του quin | | clauses of hindering/doubting |
| ευθύς / πλάγιος λόγος | oratio recta / obliqua | direct / indirect speech |
| ποιητικό αίτιο | auctor | agent |
| εξωτερικό αναγκαστικό αίτιο / εσωτερικό αίτιο | | external / internal cause |
| γενική κτητική, υποκειμενική, αντικειμενική, επεξηγηματική, της ιδιότητας, διαιρετική, της αξίας, του εγκλήματος | genetivus possessivus, subiectivus, obiectivus, explicativus (epexegeticus), qualitatis, partitivus, pretii, criminis | possessive, subjective, objective, explicative, of quality, partitive, of value, of the charge |
| δοτική κτητική, χαριστική / αντιχαριστική, ηθική, της αναφοράς, του σκοπού, του ποιητικού αιτίου | dativus possessivus, commodi / incommodi, ethicus, ... finalis (praedicativus), auctoris | possessive, of advantage/disadvantage, ethical, of reference, of purpose, of the agent |
| αφαιρετική του χωρισμού (κυρίως αφαιρετική), οργανική, τοπική, του τρόπου, του μέτρου ή της διαφοράς, της αναφοράς, συγκριτική, της ύλης, της αξίας (τιμής) | ablativus separativus, instrumentalis, locativus, modi, mensurae, limitationis, comparativus, materiae, pretii | separative, instrumental, locative, manner, measure, respect, comparison, material, price |
| παράθεση, ομοιόπτωτος / ετερόπτωτος προσδιορισμός, επιθετικός προσδιορισμός | | apposition, concordant / discordant modifier, attributive adjective |
| εμπρόθετος / απρόθετος προσδιορισμός | | prepositional / prepositionless adjunct |

---

## 10. Teach-it-in-one-breath lines (Greek, ready for the app) and design hints

### 10.1 One-breath lines (each is a verified rule from §3-6; keep them this short)

1. Ο ιστορικός cum δένει τη χρονική με την κύρια σαν αιτία και αποτέλεσμα, γι' αυτό παίρνει υποτακτική.
2. Σκοπός: ut/nē, qui, σουπίνο σε -um, causā με γενική, ad με αιτιατική. Πέντε δρόμοι, όλοι με ενεργητικό νόημα.
3. Αντικείμενο σε αιτιατική και εμπρόθετο γερούνδιο δίνουν γερουνδιακό: victoriae nuntiandae causā.
4. Στο ειδικό απαρέμφατο το υποκείμενο μπαίνει πάντα σε αιτιατική, ακόμη κι όταν είναι το ίδιο πρόσωπο: dico me venire.
5. Το τελικό απαρέμφατο είναι πάντα ενεστώτας: volo venire.
6. Η προστακτική ενεστώτα δεν απαγορεύει ποτέ: noli + απαρέμφατο ή nē + υποτακτική παρακειμένου.
7. Τελική, βουλητική, ενδοιαστική, συμπερασματική: μόνο ενεστώτας ή παρατατικός, γιατί η πράξη φαίνεται τη στιγμή που τη σκέφτεσαι.
8. Η πλάγια ερώτηση έχει πάντα υποτακτική.
9. Στον πλάγιο λόγο: κρίση γίνεται απαρέμφατο, επιθυμία ut/nē + υποτακτική, ερώτηση υποτακτική.
10. Δεν υπάρχει ενεργητική μετοχή παρακειμένου, γι' αυτό: urbe captā = αφού κυριεύτηκε η πόλη.
11. Πόλεις: Romae (γενική), αλλά Athenis και Carthagine (αφαιρετική). Κίνηση: αιτιατική χωρίς πρόθεση.
12. Ποιητικό αίτιο: ab + αφαιρετική για πρόσωπα, απλή αφαιρετική για πράγματα, δοτική με γερουνδιακό.
13. Ορισμένη τιμή: αφαιρετική (viginti milibus). Αόριστη αξία: γενική (tanti, magni, parvi).
14. Κοινωνική τάξη, ηλικία και μέτρο εκφράζονται μόνο με γενική της ιδιότητας.
15. Quod/quia/quoniam + οριστική: αντικειμενική αιτία. + υποτακτική: η αιτία που ισχυρίζεται κάποιος άλλος.
16. Dum = «ενώ» με οριστική ενεστώτα. Dum = «μέχρι να» με υποτακτική, όταν υπάρχει προσδοκία.
17. Tam, ita, tantus, adeo στην κύρια: περιμένεις ut + υποτακτική. Αρνητική: ut non, όχι nē.
18. Υποθετικός λόγος: ανοικτός = οριστική, αντίθετος προς το πραγματικό = υποτακτική παρατατικού/υπερσυντελίκου, δυνατός = υποτακτική ενεστώτα.
19. Etsi και quamquam + οριστική (γεγονός). Cum, licet, quamvis + υποτακτική (ενδεχόμενο).
20. Ρήματα εμποδίου: nē ή quominus. Με άρνηση: quominus ή quin.
21. Φόβος: nē = μήπως γίνει, ut ή nē non = μήπως δεν γίνει.
22. Μετά από ρήματα συναισθήματος το quod παίρνει οριστική: gaudeo quod urbs servāta est.
23. Σουπίνο σε -um: σκοπός μετά από κίνηση (venērunt salutātum). Σουπίνο σε -u: αναφορά (facile dictu).
24. Γερουνδιακό + sum = «πρέπει»· ο δράστης στη δοτική: omnia tibi sananda sunt.
25. Suus και se δείχνουν το υποκείμενο της πρότασης· eius δείχνει κάποιον άλλον.

### 10.2 Design hints that follow from the exam (use the Skepsis mechanics)

- **Guess-first opener**: show an unseen textbook sentence, ask "indicative or subjunctive?" or "which clause?" before the lesson (e.g. "Cum Africānus in Literno esset, ... praedōnes venērunt").
- **Build-from-tiles**: the marker sentence "X είναι ... στο ..." is perfect as tile building: [απρόθετη αφαιρετική] [του μέτρου ή της διαφοράς] [στο post]. Also tile-order for transformed Latin sentences (active -> passive, direct -> indirect).
- **Yes/no sorting game**: sort sentences into final / consecutive / volitional / fear; indicative or subjunctive after cum; ablative vs genitive of price.
- **Match pairs**: Latin construction <-> Greek term; direct form <-> indirect form.
- **Decode an unseen item**: use sentences from textbook passages that have *not* yet been in a Panhellenic paper: texts 17, 18, 20, 21, 22, 25-34, 37, 40, 41, 43, 44, 46-48, 50 (the book's own exercise sentences count too). Texts 16, 19, 23, 24, 35, 36, 38, 39, 42, 45, 49 were used 2022-2026 and are "known" passages.
- **Boss level "Δ"**: a mock Δ section with the real mark scheme (Δ1α 10-12 as 5-6 items x 2, Δ1β 3-5, Δ2α 6-12, Δ2β 3-9). Include the "justify in four parts" form and score each part separately (1+1+1+2..4).
- **Spaced review boxes**: the §8 trap list is the review deck (each trap = a card with the wrong and right form).
- **Speed round (Κολοσσαίο)**: one-miss-and-out on "name the function" with the 26 Δ1α items from the five papers plus textbook examples.
- **Item fields to store** (suggested): id, type (role, clause-id, justify, transform, order-tiles, spot-the-trap), latin, greek gloss, correct answer(s), accepted variants, the Greek marker phrase, the textbook lesson, source (textbook / exam year), the trap id, difficulty.

---

## 11. Uncertainties, conflicts and things to confirm with a teacher

1. **Gerundive attraction scope** (textbook XLIX says obligatory also with causā/gratiā + gen.; Grammar §164 lists only the dative and ad/in/ab/de/ex). The 2026 key follows the textbook. Low risk.
2. **Objective vs subjective genitive** for amōris (2026): key says objective; arguable. The paper accepts justified answers; teach the key.
3. **Δ1α "curāri"**: key and OEFE: τελικό απαρέμφατο, υποκείμενο στο απρόσωπο placuit; one commentary says "αντικείμενο του placuit". Teach "υποκείμενο στο placuit (απρόσωπο)". Accepting the other is up to the marker.
4. **Dative of agent with the perfect passive**: Grammar says possible; the textbook gives only the gerundive. Teach the gerundive, flag the perfect one as rare.
5. **Old terms in the reference grammar**: the Grammar says "αποτελεσματικές" for the consecutive clauses and "ενδοιαστικές" for fear clauses; the textbook and papers say "συμπερασματικές" and "ενδοιαστικές". Use the textbook/paper terms in the UI.
6. **Numbering of the conditional types**: textbook uses I-II-III; the 2025 key uses α΄/β΄/γ΄ είδος (β΄ = counterfactual). Where a Greek-school answer says "β΄ είδος" it means counterfactual. In older books a different numbering (e.g. real/potential/irreal) exists; always give the meaning with the label.
7. **Transformations not seen in a key** (conditional rewrites 7.10, participle/clause cases in 7.9) are constructed from the rules; have a Latin teacher review them.
8. **Prohibition with cave/fac ne and the historical/exclamatory infinitive** are in the Grammar but not in the textbook observations; no paper has asked for them. Include as extra only.
9. **Date of the 2027 exam** (2 June 2027, 08:30) comes from a news report of the ministry schedule; confirm.
10. **Syllabus changes**: the ΦΕΚ of 13-7-2026 reportedly keeps the 2026 material unchanged for 2027 (two news sources). If the sister's school assigns a smaller set of taught texts, the syntax topics stay the same but the passages change.
11. **Frequencies** in §1.3 are my own tallies of five papers (n = 5 syntax sections, 15 Δ1β/Δ2 items). They show what has been asked, not a probability. Don't present them as exam odds in the UI.
12. The textbook Τεύχος Β΄ file used is the official PDF served by ebooks.edu.gr under the id 2538 (title in the file name: `Latinika-Teuchos-B_G-Lykeiou`); the other agent's copy under `source-data/textbook-teuchos-B-lessons-XXI-L.txt` should be identical.

---

## 12. Sources

Primary (official):
- Textbook, Μ. Πασχάλης - Γ. Σαββαντίδης, Λατινικά τεύχος Α΄ (lessons I-XX): https://ebooks.edu.gr/ebooks/v/pdf/8547/2528/22-0286-01-V1_Latinika-Teuchos-A_B-Lykeiou_Vivlio-Mathiti/
- Textbook τεύχος Β΄ (lessons XXI-L): https://ebooks.edu.gr/ebooks/v/pdf/8547/2538/22-0165-02_V3_Latinika-Teuchos-B_G-Lykeiou_Vivlio-Mathiti/
- Reference grammar, Α. Τζάρτζανος, Λατινική Γραμματική (with Συντακτικό §123-198): https://ebooks.edu.gr/ebooks/v/pdf/8547/2530/22-0158-02_Latiniki-Grammatiki_G-Lykeiou-Epilogis_Vivlio-Mathiti/
- Ministry teaching instructions for Latin 2026-27: https://alfavita.gr/sites/default/files/2026-08/ΛΑΤΙΝΙΚΑ_ΓΕΛ_2026_2027.pdf
- Examinable material (ΥΑ 90176/Δ2/6-7-2026, ΦΕΚ 4210/Β΄/13-7-2026) as reproduced at https://vaspapachristou.gr/exetastea-ili-latinikon-panelladikes-2027/ and https://alfavita.gr/sites/default/files/2026-07/90176_Δ2_06_07_26_ΕΞΕΤΑΣΤΕΑ_ΥΛΗ_2027.pdf
- Exam format (14-16 lines, 20 + 80 marks, 2 syntax observations): https://filologikosxoleio.gr/wp-content/uploads/2023/04/ΛΑΤΙΝΙΚΑ-ΤΡΟΠΟΣ-ΕΞΕΤΑΣΗΣ.pdf and https://blogs.sch.gr/mentekidis/2023/09/13/latinika-g-lykeioy-1-exetastea-yli-kai-tropos-exetasis/
- Papers: 2026 https://alfavita.gr/sites/default/files/2026-06/them_latin_gel_260605.pdf ; 2025 https://alfavita.gr/sites/default/files/2025-06/them_latin_gel_250604.pdf ; 2024 https://alfavita.gr/sites/default/files/2024-06/them_latin_gel_240606.pdf ; 2023 https://alfavita.gr/sites/default/files/2023-06/LATINIKA_OP_HM_2023_07.pdf ; 2022 https://alfavita.gr/sites/default/files/2022-06/LATINIKA_OP_HM_2022_15.pdf

Answer keys and commentary (secondary, teachers' centres):
- 2022 key (ΔΙΑΚΡΟΤΗΜΑ via CNN Greece): https://img.cnngreece.gr/attachments/2024/03/04/latin_gel_3-62a0764e684d3.pdf
- 2023, 2024, 2025, 2026 keys (ΔΙΑΚΡΟΤΗΜΑ, Μεθοδικό, others), saved by the other agents in `research/pastpapers-raw/` (see the `*-APANTISEIS-*` files) and in the scratchpad dl folder (`ans2023`, `latinika_2024_ap51`, `latinika_2025_ap11`, `ans2026`, `latinika_2026_ap51`).
- ΟΕΦΕ press releases: https://www.oefe.gr/panellinies/2024/sxoliasmos_latin_gel_24.pdf , https://www.oefe.gr/panellinies/2025/sxol_latin_gel_25.pdf , https://www.oefe.gr/panellinies/2026/%CE%A3%CE%A7%CE%9F%CE%9B%CE%99%CE%91%CE%A3%CE%9C%CE%9F%CE%A3%20%CE%9F%CE%95%CE%A6%CE%95%202026-%CE%9B%CE%91%CE%A4%CE%99%CE%9D%CE%99%CE%9A%CE%91.pdf
- Teacher commentary 2026 (Ι. Ζώτου): https://filologikosxoleio.gr/wp-content/uploads/2026/06/ΣΧΟΛΙΑΣΜΟΣ-ΘΕΜΑΤΩΝ-ΛΑΤΙΝΙΚΑ-ΠΑΝΕΛΛΑΔΙΚΕΣ-2026.pdf
- Alfavita 2025 commentary: https://www.alfavita.gr/panellinies/480013_panelladikes-2025-ektimiseis-tis-oiefe-gia-ta-latinika-poia-erotisi-ehei-na
- Schedule 2027: https://www.powergame.gr/ellada/1416880/panelladikes-2027-afto-einai-to-programma-ton-exetaseon/

Cross-checks in English (only for sanity, not authority): Allen and Greenough §503-507 on gerund/gerundive (https://dcc.dickinson.edu/sites/default/files/Chapter-503.xml); tutor and textkit pages on quin/quominus and fear clauses, which agree with the textbook.

Not found / not available: the separate "Τράπεζα Θεμάτων Διαβαθμισμένης Δυσκολίας" Latin items for Γ΄ Λυκείου (the exam format says texts and grammar observations are drawn from the bank; I could not locate the Latin bank on iep.edu.gr within this session). Worth a second look by another agent: it would give the official pool of syntax observations per text.
