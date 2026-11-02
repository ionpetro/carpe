# Past Panhellenic Latin papers (Λατινικά, Ο.Π. Ανθρωπιστικών Σπουδών): what is actually tested

Research date: 2026-11-01. Target exam: June 2027 (the syllabus note in `syllabus.md` gives Wed 2 June 2027).
Everything below was computed from papers I opened and read as text (PDF to text). Where a number comes from a regex over the papers I say so. Where I only have a secondary source I say so. Nothing here is from memory.

Legend: **[READ]** I read the primary paper/answer sheet. **[COMPUTED]** counted by script over the papers I hold (script checked by hand on the 2022-2026 papers). **[SECONDARY]** a news/tutoring page. **[UNVERIFIED]** could not confirm.

---

## 0. The ten findings that matter for the app

1. **The exam is closed-corpus.** Every Latin passage is a verbatim excerpt of one of the **35 textbook lessons XVI-L** (Πασχάλης-Σαββαντίδης, Λατινικά Τεύχος Α΄ XVI-XX and Τεύχος Β΄ XXI-L). Tutors call them "κείμενα 16...50"; the text number is the lesson number. I matched all 69 passages in my corpus (60 June passages 2000-2026 + 9 September passages 2022-2025) against the textbook text (`source-data/textbook-*.txt`): 66 map to lessons 16-50 with 67-100 % of their 4-word sequences found in the lesson; the 3 others (2017, 2018, 2020) come from Τεύχος Α΄ lessons V and XIV (old syllabus, no longer examinable). [COMPUTED]
2. **Exam texts for 2022-2026 as officially announced by tutors** (Διακρότημα, ΟΕΦΕ) match my own matching 100 %: 2022 = texts 16, 36, 45; 2023 = 23, 38; 2024 = 19, 42; 2025 = 24, 39; 2026 = 35, 49. [SECONDARY + COMPUTED agree]
3. **No lesson has been set twice since 2022.** 20 passages in the nine papers June 2022-June 2026 + September 2022-2025 come from **20 different lessons**. If lessons were drawn at random from 35 the chance of 20 distinct is about 0.1 %, so this looks deliberate (my inference, not an announced rule). **15 lessons have not been set since the new format started: 17, 22, 25, 26, 28, 29, 30, 31, 33, 37, 40, 44, 46, 48, 50**; of those, 17, 22, 26, 33, 50 have not appeared in any paper I hold (2000-2026). Treat as a prioritisation hint for translation practice, not a prediction. [COMPUTED]
4. **But old passages come back in other years.** Of the 20 passages in the nine modern papers, 12 had already been set (at least partly) in a 2000-2020 paper: the Sept 2025 paper is the 2003 Camillus text + the 2002 "Pleni omnes sunt libri"; June 2026 reuses Porcia (set 2006, 2011, 2015). [COMPUTED]
5. **Format since 2022 (official, ΦΕΚ 2022 as quoted by CNN):** "διδαγμένο κείμενο 14-16 στίχων από ένα ή περισσότερα κείμενα": translate 10-12 lines (20 marks); then 80 marks of "παρατηρήσεις": 1 Εισαγωγή (10), 1 ετυμολογική (10), 2 Γραμματικής (30), 2 Συντακτικού (30), each splittable into two sub-questions. All nine modern papers follow 20 + 10 + 10 + 15 + 15 + 15 + 15 (Sept 2024 moves one mark inside the syntax block: Δ1 14 + Δ2 16).
6. **Section Β1 (literature, 10 marks) comes from a published question bank** inside the ministry's own teaching guidelines (Παράρτημα Ι: 27 open questions and about 75 Σ/Λ statements plus matching, multiple choice, fill-in). Statements in the exams are near-verbatim from that bank (e.g. Sept 2024 "Η λατινική ήταν μία από τις διαλέκτους της αρχαίας Ιταλίας", "Οι Ρωμαίοι παράγουν και νέα λογοτεχνικά είδη, όπως η σάτιρα" are bank items 2 and 17). Saved at `official-2026-27-literature-question-bank.txt`. [READ]
7. **Section Β2 (etymology, 10 marks)** is either (a) match 5 Latin words from the text with Greek cognates/derivatives (5 of 7 given) or (b) "find in the texts a Latin word related to each of these 5 Greek words". It rewards **cognate pairs** (dotem-προδοσία, reliquerat-ελλιπής, secreto-επικριτικός from `cerno`/κρίνω) and loanword chains (socii-σοσιαλισμός, regie-ρήγας, firmo-φίρμα). Ministry list per lesson: `official-2026-27-etymology-by-lesson.txt`. [READ]
8. **Γραμματική is highly predictable.** The **supine** (αφαιρετική/αιτιατική) is asked in **9 of 9** modern papers, **imperatives** 9/9, **infinitive** forms 9/9, **gerund** 8/9, **participle** forms 8/9, subjunctive forms 9/9, "ίδια/άλλη φωνή" switching 9/9. The Γ1 noun task is always 11-13 items (7 in 2023) mixing case/number changes, gender change, degrees of adjective/adverb. [COMPUTED]
9. **Συντακτικό:** Δ1 is always "syntactic recognition of 5-6 words/phrases" (`X: είναι ... στο ...`) 9/9 and Δ2 is always **transformations**: active↔passive, direct↔indirect speech, participle↔clause, purpose in 3 ways, place expressions, prohibition both ways, conditional types, adjective→relative clause, and "identify + justify the mood of a subordinate clause". Details and counts in §6.
10. **Difficulty/outcomes (2025, Ministry stats via press):** 21.86 % of Latin candidates scored 18-20 and 20.32 % scored 5-10 (a "u-shaped" subject). The 38.36 % "below base" figure I found in a search snippet could not be re-verified. [SECONDARY, 38.36 % UNVERIFIED]

---

## 1. Papers actually opened (all as text, 35 papers + 3 answer sheets)

Saved raw in `pastpapers-raw/` (one file per paper, mu/Delta glyphs normalised).

| Group | Years | Source |
|---|---|---|
| **June, daily ΓΕΛ (main)** | **2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2022, 2023, 2024, 2025, 2026** (26 papers) | 2022-2026: official https://panellinies.edu.gr/themata/latinika/gel (PDFs under `/panellinies_themata/ΙΟΥΝΙΟΣ_YYYY/`); 2005-2014: https://palia-themata.weebly.com/lambdaalphatauiotanuiotakappaalpha.html (`lat2005.pdf`...`lat2014.pdf`); 2000-2004, 2012-2020: Google-Drive PDFs linked from https://www.panellinies.net/latinika-2001/ (and sibling pages `/latinika-YYYY/` and the slug pages for 2014-2020) |
| 2016 "παλαιό σύστημα" (second paper of that year) | 2016 | panellinies.net 2016 page (read only to compare) |
| **September επαναληπτικές** | 2022, 2023, 2024, 2025 | panellinies.edu.gr |
| **Ομογενείς (Sept)** | 2022, 2023, 2024, 2025 | panellinies.edu.gr (same texts as the επαναληπτικές; Δ section differs in 3 of 4 years) |
| Official-style answer sheets read | June 2024 (Διακρότημα .docx, partial), June 2025 (poukamisas.gr "προτεινόμενες"), June 2026 (Διακρότημα PDF) | https://alfavita.gr/sites/default/files/2024-06/ΑΠΑΝΤΗΣΕΙΣ_ΛΑΤΙΝΙΚΑ.docx ; https://www.poukamisas.gr/wp-content/uploads/2025/06/apantiseis-poukamisas-latinika-gel.pdf ; https://alfavita.gr/sites/default/files/2026-06/ΑΠΑΝΤΗΣΕΙΣ_ΛΑΤΙΝΙΚΑ%20(1).pdf |

**Not covered / gaps**
- **2021: no Latin paper exists.** Latin was replaced by Sociology for the 2021 Humanities group and came back in 2022 ("Πανελλήνιες 2022: Επιστρέφουν τα Λατινικά, στη θέση της Κοινωνιολογίας", CNN, 12 Oct 2021: https://www.cnn.gr/politiki/story/285032/panellinies-2022-epistrefoyn-ta-latinika-to-fek-me-ton-tropo-diexagogis-ton-exetaseon ). [SECONDARY]
- Εσπερινά (evening) papers, Λέσβου-Χίου 2017, "Δέσμες" 1983-2001 and anything before 2000 not opened. 2001 is headed "Προαγωγικές" in the PDF (kept; format identical).
- Official ΟΕΦΕ answer sheets: I have solutions only for 2024-2026 June. The 2024 file is a text-only partial; the 2025 sheet is from a tutoring site, not the ministry.
- Pre-2022 papers were classified for topic frequency by regex (approximate). I hand-read 2002, 2003, 2004, 2005, 2008, 2011, 2012, 2013, 2014, 2016, 2018, 2020 and all nine modern papers.

---

## 2. How the paper is built, year by year

| Era | Papers | Layout and marks |
|---|---|---|
| 2000-2009 | 10 | 2 passages (40 marks translation). Part Β "Παρατηρήσεις" numbered 1-4 (each with α, β, γ): 1 = noun/adj/pronoun forms, 2 = verb forms, 3-4 = syntax (2002-2005 and 2008 read in full). Often asked **whole paradigms** ("κλίνετε το ρήμα στην προστακτική", "τα απαρέμφατα όλων των χρόνων", "μετοχές όλων των χρόνων", "την υποτακτική σε όλους τους χρόνους"). Marks per sub-question 2-12. |
| 2010-2020 | 11 | Α1 translation 40 marks, 2 passages (2010-2013) or 3 passages (2014-2020). Β1 nouns (15), Β2 verbs (15), Γ1/Γ2 syntax (15 + 15). Syntax is a series of 4-8 small transformation tasks. (2010 already has the 40/15/15/15/15 marks; 2011-2013 read in full.) |
| **2022-2026** | 5 + 4 Sept | Α1 20 marks (2 passages; 2022 had 3). **Β1 Εισαγωγή 10, Β2 ετυμολογία 10, Γ1 15, Γ2 15 (6+9 or 4+11), Δ1 15, Δ2 15.** Sept 2024 shifted marks to Δ1 14 / Δ2 16. |

Duration 3 hours; "Κάθε απάντηση τεκμηριωμένη είναι αποδεκτή" is printed on every paper.
Number of passages (June): 2000-2013 two each; 2014-2020 three each; 2022 three; 2023-2026 two each.

---

## 3. Which texts get set (the translation, 20 marks)

Lesson-by-lesson record. "June 2000-2020" excludes 2021 (no exam). Computed by matching each passage against the textbook lesson text (`source-data/textbook-teuchos-A/B`), checked against the tutor-announced numbers for 2022-2026. Two lessons contain two stories (25: figs + "Tam prope a muris"; 28: Aesop's slave). Passages with <50 % coverage (3) come from Τεύχος Α΄ lessons V (Silius Italicus, 2018) and XIV (Cassius/Caesar's ghost, 2017 and 2020).

| Μάθημα | Title (textbook) | June 2000-2020 | June 2022-26 | Sept (επαναλ.) 2022-25 | Total |
|---|---|---|---|---|---|
| 16 | Η τελευταία μάχη του Καίσαρα στη Γαλατία | - | 2022 | - | 1 |
| 17 | Φόβος μπροστά στο άγνωστο | - | - | - | 0 |
| 18 | Ο Ηρακλής στην Ιταλία | - | - | 2023 | 1 |
| 19 | Η συνωμοσία του Κατιλίνα | - | 2024 | - | 1 |
| 20 | Πίσω από τις κουρτίνες ή πώς ο Κλαύδιος έγινε αυτοκράτορας | 2016, 2019 | - | 2022 | 3 |
| 21 | Πώς πήρε το όνομά του το Pisaurum | 2003 | - | 2025 | 2 |
| 22 | Προτροπές προς τους Ρωμαίους | - | - | - | 0 |
| 23 | Ένας υπέροχος άνθρωπος | 2010 | 2023 | - | 2 |
| 24 | Το πάθημα ενός ψεύτη | - | 2025 | - | 1 |
| 25 | Πώς ένα σύκο στάθηκε αφορμή να καταστραφεί η Καρχηδόνα | 2009, 2014, 2016 | - | - | 3 |
| 26 | Ο Πλίνιος αναγγέλλει ένα θλιβερό γεγονός | - | - | - | 0 |
| 27 | Το πνεύμα ωριμάζει όπως οι καρποί | 2007, 2018 | - | 2024 | 3 |
| 28 | Στα ίχνη ενός δραπέτη δούλου | 2003, 2007, 2012 | - | - | 3 |
| 29 | Ο Οκταβιανός, ο παπουτσής και το κοράκι | 2015, 2016, 2020 | - | - | 3 |
| 30 | Ο Λικίνιος Μουρήνας και τα ήθη της Ανατολής | 2001, 2004, 2011 | - | - | 3 |
| 31 | Η γενναιότητα δε βγαίνει πάντα σε καλό | 2014, 2017 | - | - | 2 |
| 32 | Ένας πανηγυρικός της λογοτεχνίας | 2000, 2002, 2008, 2012 | - | 2025 | 5 |
| 33 | Καιρός για ανασυγκρότηση | - | - | - | 0 |
| 34 | Ο Σκιπίωνας ο Αφρικανός και οι λήσταρχοι | - | - | 2022 | 1 |
| 35 | Ο φιλόσοφος μπροστά στα δεινά της εξορίας | - | 2026 | - | 1 |
| 36 | Μια απόπειρα δωροδοκίας | - | 2022 | - | 1 |
| 37 | Η κατάρα των εμφύλιων πολέμων | 2002, 2013 | - | - | 2 |
| 38 | Η μοίρα της Καικιλίας | 2019, 2020 | 2023 | - | 3 |
| 39 | Ένα πρότυπο ιδανικού ανθρώπου | - | 2025 | - | 1 |
| 40 | Ακλόνητη αποφασιστικότητα μπροστά στις απειλές του δικτάτορα | 2008 | - | - | 1 |
| 41 | Μίλα για να σε καταλαβαίνουν, όχι για να μιλάς | 2005 | - | 2024 | 2 |
| 42 | Ο Κικέρωνας και η συνωμοσία του Κατιλίνα | 2013 | 2024 | - | 2 |
| 43 | Η οργή της μάνας | 2017 | - | 2023 | 2 |
| 44 | Η ζωή των τυράννων | 2006, 2015 | - | - | 2 |
| 45 | Μια επιστολή στα Ελληνικά αναπτερώνει το ηθικό των πολιορκημένων | 2000, 2018, 2019 | 2022 | - | 4 |
| 46 | Το γενικό συμφέρον μπαίνει πριν από το ατομικό | 2009 | - | - | 1 |
| 47 | Ο Αύγουστος και η φιλαρέσκεια της κόρης του Ιουλίας | 2005, 2010, 2014 | - | 2022 | 4 |
| 48 | Το ελάφι του Σερτωρίου | 2001, 2004 | - | - | 2 |
| 49 | Η Πορκία και ο Βρούτος | 2006, 2011, 2015 | 2026 | - | 4 |
| 50 | Η φτώχεια και η απληστία είναι κακοί σύμβουλοι της εξουσίας | - | - | - | 0 |


**Reading the table**
- June 2000-2020 (46 mapped passages over 21 exams) covered 22 of the 35 lessons; June 2022-26 (11 passages) used 11 lessons, of which 6 had never been a June text before (16, 19, 24, 35, 36, 39).
- Most frequent June texts since 2000: 32 (Cicero "Quas ego... / Pleni omnes", 4x), 45 (Caesar, Cicero's camp letter, 4x), 49 (Porcia, 4x), then 25, 28, 29, 30, 38, 47 (3x each).
- Not yet set in 2022-2026 (15 lessons): 17, 22, 25, 26, 28, 29, 30, 31, 33, 37, 40, 44, 46, 48, 50. Never set in any paper I hold: **17, 22, 26, 33, 50**.
- Sept passages are mostly recycled: of 9, seven had appeared in a June paper (Discurrens miles 2019, Augustus' daughter 2005/2010/2014, Veturia 2017, Pacuvius 2007, "Tu autem proinde quasi" 2005, Camillus 2003, "Pleni omnes" 2002).
- Exam excerpts are cut from long lesson texts: the same lesson can show different sentences in different years (e.g. lesson 28 "Tu hominem investiga" 2003 and 2012 both; lesson 32 "Quas ego... Colendo et cogitando" 2000, 2008, 2012, and Sept 2025).
- **OEFE/Διακρότημα remarks on translation** (2024-2026): "χωρίς γλωσσικές ή συντακτικές παγίδες"; translation is never where the difficulty lies, the marks are lost in Γ and Δ. [SECONDARY]

---

## 4. Section by section: what is asked, with real wording

### 4.1 Β1 Εισαγωγή (literature, 10 marks, since 2022) [READ, 9 papers]

Four task shapes, always 5 items at 2 marks:
- **Σωστό/Λάθος** (Σ/Λ): June 2023, Sept 2023, Sept 2024, June 2025, Sept 2025.
- **Multiple choice α/β/γ** ("σημειώστε το γράμμα της Στήλης Β που αντιστοιχεί στην ορθή απάντηση"): Sept 2022, June 2024, June 2026.
- **Matching author - genre** with 2 spare options: June 2022 (Βιργίλιος-επική, Ιούλιος Καίσαρας-απομνημονεύματα, Σενέκας-φιλοσοφία, Οράτιος-λυρική, Κορνήλιος Νέπως-ιστορική βιογραφία).
- Mixed within a year: Sept 2023's four statements on Greek influence (alphabet, Livius Andronicus, imitatio/aemulatio).

**Facts that recur across the nine modern papers** (these should be the hard core of the literature game):
Livius Andronicus, Odyssey translation, 240 BC (Sept 2022 MC, June 2024 MC, Sept 2023 Σ/Λ: "μετέφρασε την Ιλιάδα" is false); comedy is the first genre to mature, epic the last (Sept 2022 x2, June 2024); Plautus and Terence (June 2026); Caesar = memoirs (commentarii) (June 2022, June 2023); Cornelius Nepos = historical biography (June 2022, June 2024, Sept 2024: "βιογραφίες μόνο διάσημων Ρωμαίων" false); Sallust = historical monograph (June 2026); Virgil = Aeneid, national epic, Georgics = countryside (June 2022, June 2024, June 2025, June 2026, Sept 2022 omog); **Ovid = Metamorphoses** (Sept 2022 MC, Sept 2025 "Μεταμορφώσεις του Βεργιλίου" false); Horace = lyric, Carmen saeculare, not epic (June 2022, June 2025, Sept 2024); Cicero = orator, not poet (June 2023, Sept 2025); Livy not the "ευρετής της ποιητικής επιστολής" (June 2023); Vitruvius wrote De architectura not De rerum natura (June 2023); Tibullus is not "ο πιο πνευματώδης" elegist (June 2025); Propertius did not invent exile poetry (Sept 2023); Varro, satire as new genre, "latina one of the dialects of Italy" (Sept 2024); pax Romana begins with Octavian (June 2026); Romulus founded Rome according to Virgil (June 2026, as printed); Latin as Indo-European (June 2023).

### 4.2 Β2 Ετυμολογία (10 marks) [READ]
Two shapes:
1. **Match Latin words of the text (Στήλη Α) with etymologically related Modern Greek words (Στήλη Β)**, 2 spare, sometimes 1 or 0 spare: June 2022, June 2025, June 2026, Sept 2024, Sept 2025.
2. **"Να εντοπίσετε στα κείμενα μία ετυμολογικά συγγενή λέξη της λατινικής για καθεμιά από τις λέξεις"**: June 2023 (μετάδοση, ναυάγιο, νυχτερινός, απόσταση, μητρότητα), June 2024 (ρεαλιστής, σοσιαλισμός, στραγγαλίζω, φίρμα, ρήγας), Sept 2022 (εμπόδιο, διάγνωση, τρακτέρ, Ιανουάριος, υπέροχος), Sept 2023 (βοδινό, ευγενής, δωμάτιο, πυγμαχία, διαμονή).
Real answer sets for matching (official 2025/2026 sheets): June 2025 domi-δωμάτιο, cognosco-απόγνωση, imperitos-πείρα, agunt-αγωγή, premi-πρέσα. June 2026 dotem-προδοσία, reliquerat-ελλιπής, conferre-αναφορά, unguium-νυχοκόπτης, secreto-επικριτικός. Sept 2025 nomen-ονομασία, dedit-δεδομένα, plenae-πλήθος, vetustas-βετεράνος, conformabam-φορμαλισμός.
So the pairs mix **true Indo-European cognates** (λείπω/relinquo, κρίνω/cerno, δίδωμι/do, πείρα/peritus) with **loan derivatives through Romance languages** (πρέσα, φορμαλισμός, βετεράνος). Source for the second kind: ministry list "ΙV. Ενδεικτικές ετυμολογικές συσχετίσεις" per lesson (saved).

### 4.3 Γ1 Morphology of nouns, adjectives, pronouns [READ, 9 modern papers; older by regex]
Always a list of 11-13 forms from the text, each with an instruction. Counts of the instruction vocabulary over the nine modern Γ1s: γενική 23, αιτιατική 15, ονομαστική 13, αφαιρετική 11, δοτική 10, κλητική 7; "άλλο αριθμό" 35, "ίδιο αριθμό" 35; degrees 18 mentions (adverbs 9); gender change 10. Genitive is the most requested case (almost every paper has 2-3 genitive plurals). [COMPUTED]
Forms that recur as *types* (not words): 3rd-declension i-stems and consonant stems (caedis, civitati, urbe, carcere, lumen, virorum), neuter plural (omnia, simulacra, talia, castra), 4th/5th declension (diēbus, res, die, exitus, exercitui), irregular nouns (vis, rus, domus, iter), pronouns and pronominal adjectives (is/ea/id, hic, ille, idem, ipse, quidam, aliquis, ego/tu/se, nihil, nemo), vocative of 3rd-declension and 2nd-declension -us nouns (popule 2026, carcer 2024, ebur 2025, pater), adjective degrees including irregular and -er/-lis types (aequum → aequius, aequissimum; viliorem → vilem, vilissimam; clari → clarior/clarissimus), adverb degrees (aperte → apertius, apertissime; multi → multum/multo, plus, plurimum; optimum → melius; certissimum → certe).
Answer examples are in §6 (2025, 2026 official sheets).

### 4.4 Γ2 Morphology of verbs (15 marks) [READ + COMPUTED]
Structure: **Γ2α** (since 2023, 6 marks) "find N forms of kind X in the passage (3 marks) then transform them (3 marks)"; **Γ2β** (9 marks) 9-10 forms each with "[person/number/tense/mood/voice] ... στην ίδια/άλλη φωνή".
- Γ2α concrete tasks: June 2023 four indicative verbs → 3rd pl future active; June 2024 three subjunctives → present infinitive; June 2025 three deponents (indignatus, mentiebatur, utitur) → present participle, fem. nom. sg.; June 2026 the participles of text 2 → present infinitive same voice; Sept 2023 three infinitives → perfect; Sept 2024 three imperatives → 2nd sg present indicative; Sept 2025 two gerund forms (colendo, cogitando) → present and perfect infinitive active; Sept 2025 omog "rogatus → 2nd sg indicative of all tenses active".
- Γ2β categories present (of 9 modern papers): supine 9, imperative 9, subjunctive 9, indicative 9, voice-switch 9, gerund 8, participle 8, infinitive 8, **periphrastic conjugation 2** (June 2023 "erat ascensurus: 3rd pl perfect subjunctive"; June 2025 "agunt: 2nd sg present indicative active periphrastic"). Deponent verbs explicitly: June 2025. Pre-2022 asked whole paradigms (2000-2012) and the odd "το σουπίνο και στους δύο τύπους" (2013, 2014).
- Verbs that recur because the lesson texts contain them: sum/possum/fio/eo (redire, adire)/fero (attulit, conferre, rettulerunt)/volo-nolo-malo (nolis, mallet)/inquit/venio/facio/dico/accipio/duco, plus deponents (utor, loquor, sequor, patior, morior, miseror).
- The 2026 OEFE comment: ask for "voice" explicitly when the form is ambiguous (e.g. venit). [SECONDARY]

### 4.5 Δ1 Syntactic recognition (10-15 marks) [READ]
Always `X: είναι ........ στο ........` in 9/9 modern papers, for 5 terms (10 marks: June 2022-2025, Sept 2022-2024) or 6 terms (12 marks: June 2026, Sept 2025), e.g. diēbus, se, ancillae, malis, ex aere (2025); ab eo, curāri, semper, uxor, temerarium, amōris (2026); ingenii, ex urbe, eius, non credendo, factum esse (2024). Official wording of answers: *"απρόθετη αφαιρετική οργανική του μέτρου ή της διαφοράς στο post", "υποκείμενο στο non esse (ταυτοπροσωπία)", "έμμεσο αντικείμενο στο credidi", "απρόθετη αφαιρετική του ποιητικού αιτίου στο premi", "εμπρόθετος επιρρηματικός προσδιορισμός της ύλης στο faciebat", "τελικό απαρέμφατο, υποκείμενο του απροσώπου ρήματος placuit", "γενική της ιδιότητας στο vir", "γενική κτητική", "απρόθετη αφαιρετική γερουνδίου που δηλώνει τον τρόπο", "ειδικό απαρέμφατο αντικείμενο στο dicerent", "ομοιόπτωτος προσδιορισμός ως παράθεση", "ετερόπτωτος ονοματικός προσδιορισμός, γενική αντικειμενική", "κατηγορηματικός προσδιορισμός", "επιθετικός προσδιορισμός"*.
Δ1β (3-6 marks): identify one subordinate clause and justify its mood (June 2022 `ne ... cognoscantur` final; June 2024 `qui non fateatur` = **αναφορική συμπερασματική**, subjunctive present because dependent on a primary tense; Sept 2022 omog `Cum illa respondisset`; Sept 2023 `cum in conspectu Roma fuit` + `postquam ... vidit`; Sept 2024 `quod neminem scire ... vis`), or the conditional (June 2025 `Si marmor illi obtulisses, fecisset tale` = β΄ είδος, αντίθετο του πραγματικού στο παρελθόν; convert to possible: `si offeras, faciat`).

### 4.6 Δ2 Transformations (15 marks)
Tasks per paper (each paper combines one recognition task with 2-3 transformation tasks; ✔ marks where a family appears):

| Family | June 2022 | 2023 | 2024 | 2025 | 2026 | Sept 22 | Sept 23 | Sept 24 | Sept 25 |
|---|---|---|---|---|---|---|---|---|---|
| Identify a subordinate clause: kind, function, introduction, mood/tense justification | ✔ (ne) | ✔ (2 clauses) | ✔ (qui non fateatur) | cond. | ✔ (cum, +contract to participle) | ✔ (postquam, +contract) | ✔ (cum / postquam) | ✔ (quod) | ✔ (quod, +contract) |
| Contract clause → participle / expand participle → clause | ✔ (missum, veritus: "με όλους τους δυνατούς τρόπους") | | ✔ (abl. abs. consulibus → cum-clause) | | ✔ | ✔ | | | ✔ |
| Active ↔ passive | | ✔ | ✔ (pass→act) | ✔ (9 words change) | | ✔ (pass→act) | | | |
| Direct ↔ indirect speech | ✔ (indirect→direct) | ✔ (direct→indirect, `Caecilia dixit`) | | ✔ (2 indirect questions + AcI → main clause) | | | | ✔ (indirect→direct) | ✔ (direct→indirect, `Cicero dicit`) |
| Conditional: classify and convert | | | | ✔ | | | ✔ (all 3 other types) | | |
| Purpose in several ways | | | | | ✔ (ut-clause, supine, `eius obiurgandae causa`) | ✔ (causa, ad+gerundive, ut) | | | |
| Place: replace in+abl with Romae/Athenis/Carthagine; motion expressions | | | | | ✔ | | ✔ (to-place) | | |
| Prohibition both ways (noli+inf, ne+perf subj) | | | | | | | | ✔ | |
| Adjective → relative clause (Sept 2022 and 2023 omog papers, Sept 2025 epan) | | | | | | ✔ (clarā voce) | ✔ (proximam) | | ✔ (aequo iure / homines excellentes) |

(OEFE 2025 said indirect→direct "had not been asked in 4-5 years"; in my corpus the last plain case is June 2022 Δ2β, so the OEFE remark must refer to the more specific indirect-question + AcI→main-clause combination.) [SECONDARY]

Pre-2022 frequency (regex, June papers 2000-2020 + 2022-26; list of years in §7): ευθύς→πλάγιος 11 papers (every year 2005-2010 and 2012, 2013, 2015); πλάγιος→ευθύς 7; active→passive 10; passive→active 5; participle→clause 9; clause→participle 5; conditional 8; prohibition 6; purpose 4; place 4; γερουνδιακή έλξη 2 (2008, 2012; **again in the 2026 official answer**); sequence of tenses/προτερόχρονο 3.

---

## 5. Official answer examples (worth reusing as "tricky form" content)

**June 2026 sheet (Διακρότημα)** [READ]
Γ1: senatum → senatus; rus → rura; id (fem gen other number) → earum; dotem → dotium; illis (neut nom same number) → illa; Aequum → aequius, aequissimum; populum → popule; viri → virorum; cultellum tonsorium → cultello tonsorio; ancillārum → ancillae (dat. sg.); certissimum (adverb positive) → certe; tale consilium → talia consilia.
Γ2α: elapso → elabi; vocatus → vocari; molientem → moliri.
Γ2β: scripsit → scribendi; discessisse → discedamus; aberat → absens; accepērunt → acceptum; conferre → conferto; exigeret → exegimus; interficiendo → interficiet; vulnerāvit → vulnerabatis; vēnit → venissent.

**June 2025 sheet (poukamisas, "προτεινόμενες")** [READ, third-party]
diēbus → diei; aperte → apertius, apertissime; vocem tuam → vocum tuarum; impudens → impudenti; mihi ipsi → ego ipse; ebore → ebur; simulacra → simulacrum; viliōrem → vilem, vilissimam; tale → talia; optimum (adverb comparative) → melius; Eōdem → eorundem. Γ2α indignatus/mentiebatur/utitur → indignans/mentiens/utens. Γ2β accipe → acceptu; fecerit → fac; venisset → veniendo; exclamāvit → exclamemus; credis → creditum; agunt → acturus es; putas → putari; sciēbat → scivisse (sciisse); posset → possit.

**June 2024 sheet (Διακρότημα, docx)** [READ]
Β1: 1β, 2α, 3β, 4γ, 5γ. Β2: ρεαλιστής-rem, σοσιαλισμός-socii, στραγγαλίζω-strangulati sunt, φίρμα-confirmaverunt, ρήγας-regie.
Γ1: nobilissimi generis → nobilissima genera; clari → clariores, clarissimi; quidam (nom. pl., gen. other number) → cuiusdam; viri (nom. pl.) → viros; urbe → urbium; carcere → carcer; spem → spe; sententiis → sententiam; multi (adverb, three degrees) → multum/multo, plus, plurimum; id (fem. gen. other number) → earum; coniurationem → coniuratio.
Γ2α: pervenerit → pervenire; videat → videre; fateatur → fateri. Γ2β: coniurem; consequuntur; expellebas; deprehendendi; aluissemus; nascituram; dic; intellectu; esse.
Δ1α/Δ1β/Δ2: "ingenii: γενική της ιδιότητας στο vir"; "ex urbe: εμπρόθετος επιρρηματικός προσδιορισμός της απομάκρυνσης στο expulsus est"; "eius: γενική κτητική στο socii (ετερόπτωτος ονοματικός προσδιορισμός)"; "non credendo: απρόθετη αφαιρετική γερουνδίου που δηλώνει τον τρόπο στο confirmavērunt"; "factum esse: αντικείμενο στο dicerent, ειδικό απαρέμφατο"; "qui non fateatur: δευτερεύουσα επιρρηματική αναφορική συμπερασματική, επιρρηματικός προσδιορισμός του αποτελέσματος στο intellego (fore), υποτακτική ενεστώτα γιατί εξαρτάται από αρκτικό χρόνο"; Δ2α: Antonius, alter consul, Catilinam ipsum [...] proelio victum, interfecit; Δ2β: "ιδιόμορφη αφαιρετική απόλυτη που δηλώνει χρόνο; consulibus = κατηγορηματικός προσδιορισμός → Cum Marcus Tullius Cicero et Gaius Antonius consules essent".

**June 2026 Δ2α model answer wording (useful for the "justify" game):** "δευτερεύουσα επιρρηματική χρονική πρόταση, επιρρηματικός προσδιορισμός του χρόνου στο poposcit, εισάγεται με τον ιστορικό-διηγηματικό σύνδεσμο cum, εκφέρεται με υποτακτική γιατί ο ιστορικός cum υπογραμμίζει τη βαθύτερη σχέση ανάμεσα σε κύρια και δευτερεύουσα (αιτίου-αιτιατού), ... υποτακτική υπερσυντελίκου (cognovisset) γιατί εξαρτάται από ιστορικό χρόνο (poposcit) και σύμφωνα με την ακολουθία των χρόνων δηλώνει το προτερόχρονο στο παρελθόν. Σύμπτυξη: viri sui consilio de interficiendo Caesare cognito."


---

## 6. Frequency tables

### 6.1 The nine modern papers (June 2022-2026 + Sept 2022-2025), hand-verified [READ + COMPUTED]

| Item | Papers (of 9) |
|---|---|
| Γ1 has 11-13 form items (7 in 2023 with a separate 4-mark "find 4 third-declension nouns" part) | 9 |
| Γ1 includes an adjective-degree item | 8 (all but Sept 2025) |
| Γ1 includes an adverb-degree item | 9 (June 2022 `celeriter`, 2023 `diu`, 2024 `multi`, 2025 `aperte`+`optimum`, 2026 `certissimum`, Sept 2022 `clarā`, Sept 2023 `diu`, Sept 2024 `meliōra`, Sept 2025 `bene`) |
| Γ1 includes a pronoun | 9 |
| Γ2β supine (ablative or accusative) | 9 |
| Γ2β imperative (present or future, 2nd or 3rd person) | 9 |
| Γ2β subjunctive form | 9 |
| Γ2β indicative form | 9 |
| Γ2β gerund (gen/dat/abl/acc) | 8 (absent Sept 2022) |
| Γ2β or Γ2α participle | 8 |
| Γ2β or Γ2α infinitive | 9 |
| Γ2 periphrastic conjugation | 2 (June 2023, June 2025) |
| Δ1α "είναι ... στο ..." for 5-6 terms | 9 |
| Δ1β/Δ2 identify a subordinate clause + justify mood | 9 (June 2025 via the conditional) |
| Active ↔ passive | 4 (June 2023, 2024, 2025; Sept 2022) |
| Direct ↔ indirect speech | 5 |
| Participle ↔ clause (either direction, incl. ablative absolute → cum-clause) | 5 |
| Conditional sentence | 2 |
| Purpose (several forms) | 2 |
| Place of action (in+abl → Romae etc.; motion) | 2 |
| Prohibition | 1 |
| Adjective → relative clause | Sept 2025 (epan + omog), Sept 2022 omog, Sept 2023 omog |

### 6.2 Older June papers 2000-2020 (21 papers): syntax families by year [COMPUTED by regex; approximate, and I hand-checked years 2002-2005, 2008, 2011-2014, 2016, 2018, 2020]

- συντακτική αναγνώριση λέξεων: every year.
- Identify subordinate clause (kind, function, introduction, mood): 2000-2004, 2007-2014, 2016-2020.
- Ευθύς → πλάγιος: 2002, 2005, 2006, 2007, 2008, 2009, 2010, 2012, 2013, 2015. Πλάγιος → ευθύς / πλάγια ερώτηση → ευθεία: 2003, 2004, 2014, 2015, 2016.
- Υποθετικός λόγος: 2001, 2002, 2004, 2006, 2013, 2015, 2017.
- Απαγόρευση (noli / ne): 2003, 2005, 2007, 2009, 2012, 2014.
- Ενεργητική → παθητική: 2000, 2007, 2008, 2010, 2016, 2018, 2019, 2020. Παθητική → ενεργητική: 2004, 2017, 2018, 2019.
- Participle → clause: 2001, 2010, 2012, 2015, 2016, 2017, 2018, 2019. Clause → participle: 2011, 2014, 2017, 2020.
- Γερουνδιακή έλξη: 2008, 2012. Παθητική περιφραστική / ποιητικό αίτιο: 2001, 2004, 2009, 2011. Place expression: 2016, 2018, 2019. Purpose: 2006, 2011, 2015. Sequence of tenses/temporal relation: 2004, 2012, 2018. Comparison second term (quam/ablative): 2002, 2009. Παράθεση → πρόταση: 2020. Subject of infinitive and its case: 2005, 2018. Αφαιρετική απόλυτη as explicit task: 2011 (convert clause to ablative absolute).
- Pre-2022 morphology asked **whole paradigms** about once per paper in 2002-2008 ("κλίνετε το ρήμα στην προστακτική του ενεστώτα", "τα απαρέμφατα όλων των χρόνων", "την οριστική όλων των χρόνων" 2018). The 2022+ format dropped this except for Sept 2025 omog (`rogatus`: 2nd sg all tenses).

### 6.3 Practical weights (marks, not question counts)
Translation 20, literature 10, etymology 10, noun morphology 15, verb morphology 15, syntax recognition 15, syntax transformations 15. So **60 % of the marks are mechanical forms and transformations** that can be drilled with a rule-and-check engine; translation + literature + etymology are 40 %.

---

## 7. Real exam question patterns to mirror as game types (29)

Each pattern: real Greek wording, a real example, years seen, and the matching Skepsis-style mechanic.

| # | Pattern (real wording) | Real example | Years | Game type |
|---|---|---|---|---|
| 1 | **Μετάφραση αποσπάσματος** ("Να γράψετε τη μετάφραση των αποσπασμάτων «A … B»") | `Atilius Rēgulus … reliquerat pater` | all | guess-first opener, then build-from-tiles chunk by chunk |
| 2 | **Εισαγωγή Σ/Λ** ("Να χαρακτηρίσετε ... ως Σωστές (Σ) ή Λανθασμένες (Λ)") | "Ο Λίβιος Ανδρόνικος μετέφρασε στα λατινικά την Ιλιάδα" (Sept 2023; Λ, since the ministry bank says Odyssey) | 2023, Sept 2023, Sept 2024, 2025, Sept 2025 | yes/no sorting game |
| 3 | **Εισαγωγή πολλαπλής επιλογής** ("σημειώστε το γράμμα που αντιστοιχεί στην ορθή απάντηση") | "Οι δύο πιο γνωστοί Ρωμαίοι κωμωδιογράφοι: α. Πλαύτος και Τερέντιος" | Sept 2022, 2024, 2026 | multiple choice |
| 4 | **Εισαγωγή: αντιστοίχιση συγγραφέα - είδους** (2 spare) | Βιργίλιος - επική ποίηση | 2022 | match pairs |
| 5 | **Ετυμολογία: αντιστοίχιση λατινικής λέξης με ελληνική** (2 spare) | unguium - νυχοκόπτης; reliquerat - ελλιπής | 2022, 2025, 2026, Sept 2024, Sept 2025 | match pairs |
| 6 | **Ετυμολογία: εντοπίστε στο κείμενο τη λατινική λέξη συγγενή της ελληνικής** | σοσιαλισμός → socii; ρήγας → regie; φίρμα → confirmaverunt | 2023, 2024, Sept 2022, Sept 2023 | decode-unseen (find in sentence, tap word) |
| 7 | **Πτώση/αριθμός ονόματος** ("τη δοτική πτώση στον άλλο αριθμό") | diēbus → diei; vocem tuam (gen. other number) → vocum tuarum (2025 sheet) | all, 11-13 per paper | build-from-tiles / typed answer with rule hint |
| 8 | **Πτώση + αλλαγή γένους** ("τη γενική πτώση, στο θηλυκό γένος, στον άλλο αριθμό") | id → earum; illis → illa | 2022-2026, older | multiple choice with distractor genders |
| 9 | **Άλλοι βαθμοί επιθέτου** ("τους άλλους δύο βαθμούς του επιθέτου στο ίδιο γένος, αριθμό και πτώση") | Aequum → aequius, aequissimum | all | tiles (compar. suffix) |
| 10 | **Βαθμοί επιρρήματος** ("τους άλλους δύο / τους τρεις βαθμούς του επιρρήματος"; "τον θετικό βαθμό") | aperte → apertius, apertissime; certissimum → certe | all | speed round |
| 11 | **Κλητική** ("την κλητική πτώση στον ίδιο αριθμό") | populum → popule; carcere → carcer; ebore → ebur | 2024, 2025, 2026, Sept 2022 | multiple choice |
| 12 | **Αντωνυμίες** ("εντοπίστε τις τρεις αντωνυμίες … και μεταφέρετέ τις στον ίδιο τύπο, στον άλλο αριθμό") | in «Qui potuisti populāri hanc terram, quae te genuit atque aluit?» (Sept 2023; answer not on a sheet I hold); pronoun lists also 2002-2005, 2013 | Sept 2023 (+older) | find-and-convert |
| 13 | **Τρίτη κλίση: εντοπίστε 4 ουσιαστικά της γ΄ κλίσης στο απόσπασμα και μεταφέρετέ τα στη γενική πληθυντικού** (2+2 marks) | passage «Nam in sacello … meā sede cedo» (June 2023; answer not on a sheet I hold) | June 2023 | find-and-convert |
| 14 | **Εντοπίστε N ρήματα σε έγκλιση Χ και μεταφέρετέ τα** (Γ2α) | 3 subjunctives → present infinitive (2024); 3 deponents → pres. participle (2025) | 2023-2026, Sept 2023-2025 | find-and-convert, 3 + 3 marks |
| 15 | **Σουπίνο** ("την αιτιατική / αφαιρετική στο σουπίνο") | accepērunt → acceptum (2026); Accipe → acceptu (2025) | 9/9 modern | speed round (Colosseum) |
| 16 | **Γερούνδιο** ("τη γενική / δοτική / αφαιρετική του γερουνδίου") | scripsit → scribendi; venisset → veniendo | 8/9 | multiple choice |
| 17 | **Προστακτική ενεστώτα / μέλλοντα** ("το β΄ ενικό πρόσωπο της προστακτικής του μέλλοντα, στην ίδια φωνή") | conferre → conferto; fecerit → fac | 9/9 | tiles |
| 18 | **Μετοχή (χρόνος, γένος, πτώση)** ("τη μετοχή του μέλλοντα στο ίδιο γένος, αριθμό, πτώση") | nascentem → nascituram | 8/9 | tiles |
| 19 | **Απαρέμφατο** ("το απαρέμφατο του παρακειμένου στην ίδια φωνή") | sciēbat → scivisse; putas → putari | 8/9 | speed round |
| 20 | **Ρηματικός τύπος: πρόσωπο, χρόνος, έγκλιση, φωνή** ("το α΄ πληθυντικό πρόσωπο της υποτακτικής του υπερσυντελίκου στην ίδια φωνή") | exigeret → exegimus | 9/9 | build-from-tiles (stem + ending) |
| 21 | **Περιφραστική συζυγία** ("στην ενεργητική περιφραστική συζυγία, στο αρσενικό γένος", "να ληφθεί υπόψη το υποκείμενο") | agunt → acturus es; erat ascensurus → subj. perfect | 2023, 2025, 2018 | decode-unseen |
| 22 | **Συντακτική αναγνώριση** ("diēbus: είναι ... στο ...") | ancillae: έμμεσο αντικείμενο στο credidi | 9/9 | multiple choice from a bank of official phrases |
| 23 | **Δευτερεύουσα πρόταση: είδος + λειτουργία + τρόπος εισαγωγής + αιτιολόγηση εκφοράς (έγκλιση/χρόνος)** | cum viri sui consilium … cognovisset | 2022-2026, Sept 2022-2025 | guess-first opener; 4-step builder |
| 24 | **Σύμπτυξη δευτερεύουσας σε μετοχή / ανάλυση μετοχής** ("με όλους τους δυνατούς τρόπους") | «missum», «veritus» → clauses (June 2022, no sheet); cum … cognovisset → viri sui consilio … cognito (2026 sheet) | 2022, 2024, 2026, Sept 2022, Sept 2025 | tiles |
| 25 | **Ενεργητική ↔ παθητική σύνταξη** (up to 9 words change) | Sapientem nec paupertas … prohibet → Sapiens nec paupertate … prohibetur | 2023, 2024, 2025, Sept 2022 | drag words (transfer) |
| 26 | **Ευθύς ↔ πλάγιος λόγος** ("εξαρτήσετε από το Caecilia dixit"; "να μετατρέψετε τον πλάγιο λόγο σε ευθύ") | Accipe nunc quid postea Nasīca fecerit → Quid postea Nasica fecit? | 2022, 2023, 2025, Sept 2024, Sept 2025 | tiles with tense/mood change |
| 27 | **Υποθετικός λόγος** ("αναγνωρίστε εκφορά και είδος ... μετατρέψτε σε δυνατή υπόθεση") | Si marmor illi obtulisses, fecisset tale → si offeras, faciat | 2025, Sept 2023, 2001-2017 | 3-way classifier (yes/no sort) |
| 28 | **Σκοπός με τρεις τρόπους / τόπος / απαγόρευση** | Brutus ad eam obiurgandam venit → ut eam obiurgaret / eam obiurgatum / eius obiurgandae causa (2026 sheet); in Africa → Romae, Athenis, Carthagine (2026 sheet); «Sic ergo vive» → prohibition both ways (Sept 2024; standard answer: noli + infinitive, ne + perfect subjunctive; not on a sheet I hold) | 2026; Sept 2022; Sept 2023; Sept 2024; 2003-2014 | tiles |
| 29 | **Ανάλυση επιθετικού προσδιορισμού σε δευτερεύουσα (αναφορική) πρόταση** | «aequo iure» (Sept 2025 epan), «homines excellentes» (Sept 2025 omog), «clarā voce» (Sept 2022 omog), «proximam speluncam» (Sept 2023 omog), «vela praetenta, ficum praecocem» (2016); answers not on a sheet I hold | Sept 2022-2025, 2016 | transfer |

Where an example has no answer next to it, only the *task shape* comes from a paper; the content team must derive the answer. All printed answers come from the 2024, 2025 or 2026 sheets (2025 = third-party draft).

---

## 8. Implications for the Carpe design (my recommendations, derived from the data)

1. **Build the texts first, in lesson order.** 35 lessons x 2-4 sentences chunked for tile translation, with the exact Greek rendering accepted by the markers ("Κάθε απάντηση τεκμηριωμένη είναι αποδεκτή"). Prioritise lessons 17, 22, 25, 26, 28, 29, 30, 31, 33, 37, 40, 44, 46, 48, 50 (unseen since 2022) but include all. Mark lessons 32, 45, 49, 25, 28, 29, 30, 38, 47 as "κλασικά" (3-4 earlier appearances).
2. **Morphology engine** must produce, for every word in the 35 texts, case/number/gender-swapped forms, comparatives, supine, gerund, imperative (pres + fut), all participles, infinitives and subjunctive tenses. Questions can be auto-generated from the actual passages with the real instruction wording (patterns 7-21).
3. **Syntax transformations** (patterns 23-29) need curated items attached to specific sentences of the 35 texts. Prioritise active↔passive, direct↔indirect, participle↔clause, subordinate clause identification with mood justification (those occur in every modern paper).
4. **Literature (Β1)**: generate Σ/Λ and MCQ from the ministry bank (27 open Qs, ~75 statements); this is the most predictable 10 marks.
5. **Etymology (Β2)**: use the ministry per-lesson list + cognate pairs; keep both task shapes (match, and find-in-text).
6. **Terminology**: answer feedback should use the markers' phrases quoted in §4.5 and §5.
7. **Mock-exam mode**: 3 hours scaled to a 45-minute "Κολοσσαίο" simulating 20/10/10/15/15/15/15 with 2 random lessons.

---

## 9. Quirks, uncertainties and things that could mislead

- Regex counts for pre-2022 are approximate; keyword patterns may miss rephrased tasks (e.g. "ενεργητική [ενδιάμεσες λέξεις] σε παθητική") and may count a keyword that appears in an unrelated sub-question. I verified by reading only the papers listed in §1.
- Text numbers published by tutors exist for 2022-2026 June only; for September papers and for 2000-2020 the lesson numbers come from my own text matching (67-100 % coverage). Sept 2022 passage 2 (Praedones, lesson 34) has the lowest coverage (64-67 %).
- "No lesson repeated since 2022" is an observed pattern over 20 draws, not a ministry rule. The same texts were re-used heavily before (e.g. Porcia 2006/2011/2015/2026 within one exam era), so a repeat in 2027 is possible. The 2021 gap (no Latin) and the change of syllabus make comparison with pre-2022 imperfect.
- The ΦΕΚ-based description of the 2022 format comes from a CNN article quoting the ΦΕΚ; the 2027 syllabus (Υ.Α. 90176/Δ2, ΦΕΚ Β΄ 4210) is described in `syllabus.md`, not rechecked here.
- Marks 2025 statistics (21.86 % scored 18-20; 20.32 % scored 5-10) come from press coverage of the Ministry's announcement: https://www.tanea.gr/2025/06/26/greece/ta-statistika-ton-panelladikon-ligoi-aristouxoi-ypsila-pososta-vathmologion-kato-tis-vasis/ and https://www.naftemporiki.gr/society/1973688/vathmologies-panelladikon-2025-se-poia-mathimata-aristeysan-oi-ypopsifioi-poy-kategrapsan-tis-cheiroteres-epidoseis/ . A "38,36 % below base" figure appeared in a search summary and could not be located on the pages I fetched.
- The poukamisas 2025 answer sheet is a tutoring-site draft ("προτεινόμενες"), not the ministry's.

---

## 10. Sources

Primary papers: https://panellinies.edu.gr/themata/latinika/gel (2022-2026 June, Sept, ομογενείς); https://palia-themata.weebly.com/lambdaalphatauiotanuiotakappaalpha.html (2005-2014); https://www.panellinies.net/λατινικά/ and sibling pages `/latinika-YYYY/` (2000-2004, 2012-2020 via Drive PDFs).
Answers: https://www.alfavita.gr/panellinies/518580_panelladikes-exetaseis-2026-oi-ektimiseis-kai-apantiseis-gia-ta-themata-ton ; https://alfavita.gr/panellinies/448950_panelladikes-2024-oi-apantiseis-gia-ta-themata-ton-latinikon ; https://www.cnn.gr/ellada/story/475991/panellinies-2025-aftes-einai-oi-apantiseis-sta-latinika-ton-gel .
Tutor/OEFE commentary and text numbers: https://www.alfavita.gr/panellinies/480013_panelladikes-2025-ektimiseis-tis-oiefe-gia-ta-latinika-poia-erotisi-ehei-na (texts 24 and 39); https://alfavita.gr/panellinies/448957_panellinies-2024-oi-ektimiseis-gia-mathima-ton-latinikon (19 and 42); https://www.alfavita.gr/panellinies/518580_panelladikes-exetaseis-2026-oi-ektimiseis-kai-apantiseis-gia-ta-themata-ton (35 and 49); https://www.alfavita.gr/panellinies/383421_panelladikes-2022-i-ektimisi-gia-ta-themata-ton-latinikon (16, 36, 45); 2023 texts 23 and 38 from the alfavita 2023 summary (https://www.alfavita.gr/panellinies/418477_panelladikes-2023-oi-apantiseis-sta-themata-ton-latinikon).
Ministry: 2026-27 teaching guidelines for Latin Γ΄ ΓΕΛ https://alfavita.gr/sites/default/files/2026-08/ΛΑΤΙΝΙΚΑ_ΓΕΛ_2026_2027.pdf (literature bank, etymology list); 2022 format ΦΕΚ via https://www.cnn.gr/politiki/story/285032/panellinies-2022-epistrefoyn-ta-latinika-to-fek-me-ton-tropo-diexagogis-ton-exetaseon ; Latin section of the 2027 εξεταστέα ύλη https://www.alfavita.gr/panellinies/552814_panellinies-2027-anakoinothike-i-exetastea-yli-ton-gel .
Grade statistics: tanea.gr and naftemporiki.gr links in §9.

Raw data files in this folder: `pastpapers-raw/` (all 35 papers + 3 answer sheets as text), `passages-by-paper.json` (every translation passage per paper), `official-2026-27-literature-question-bank.txt`, `official-2026-27-etymology-by-lesson.txt`.
