# Latin to Greek and English: derivative hooks for Carpe

Researched 2026-11-01. Companion file: `hooks.jsonl` (747 hooks, one JSON object per line: `lemma`, `hook_el`, `source` (list of URLs), plus `kind`, `target`, `primary`, `confidence`, `from_school_textbook`, `in_teuchos_b_headword`).

## 1. Bottom line

- 747 verified hooks for 555 Latin items (words, month names, grammar terms, phrases). 381 of the lemmas appear as headwords or running text in the school textbook (Teuchos B, see section 3); 270 of those have a word-derivation hook (Greek loanword, cognate or English derivative).
- **Etymology is a scored exam question (Β2, 10 marks)** per the past-paper research in `pastpapers.md` and `syllabus.md`. The ministry publishes a per-lesson list of Latin words and their modern Greek derivatives for lessons 16–50 (`official-2026-27-etymology-by-lesson.txt`). I parsed it: 148 distinct Latin→Greek pairs, all stored in `hooks.jsonl` as `kind: official_list` with `official: true` and the lesson numbers. 130 are independently confirmed by el.wiktionary naming the Latin source; 18 rest on the ministry list alone (marked `independent_check`). Teach these first, even where linguists might argue (section 3A).
- Best hook family for this student: **Greek words that are secretly Latin**, and **Greek/Latin cognates the school book itself marks with ≃**. Both are inside what the textbook and the 2021 curriculum text ask for (section 4).
- The school book (Πασχάλης–Σαββαντίδης, Λατινικά Γ΄ Λυκείου, Τεύχος Β΄) already prints modern Greek derivatives in its per-lesson «Ετυμολογικά» notes (φρούτο, πισίνα, ασανσέρ, κογκρέσο, ντοκουμέντο, προπαγάνδα ...). I turned 35 of them into hooks with lesson numbers and checked each (section 3). These are the safest hooks because the student meets them in class.
- Zodiac signs, grammar terms, `deus ex machina`, `festina lente`, `QED` and `negotium` are all Latin **translations of Greek originals**. Strong «boomerang» hook: Latin ← Greek (section 5).
- Month names (Ianuarius, Februarius, Martius, Iulius, Augustus, and Septem-/Octo-/Novem-/Decem-ber), κάλαντα, σπίτι (← hospitium), κάμπος, κάστρο, πόρτα, μάστορας, σίγουρος, κελί, ταβέρνα, λουκάνικο, κουνέλι, νούμερο, ατζέντα, ρόδα are verified Latin loans in everyday Greek (el.wiktionary), plus φούρνος, σκάλα, βίλα, κούπα, μπάνιο, κανάλι, τσιμέντο.
- Pop hooks that are verified: Volvo, Audi, Nivea, Sony, Juventus, Velociraptor, Captain Nemo, Remus Lupin, Harry Potter spells and names (Nox, Expelliarmus, Protego, Ascendio, Confundo, Imperio, Legilimens, Riddikulus, Petrificus Totalus, Felix Felicis, Remus Lupin), John Wick Parabellum, Hunger Games Panem, Michelin Bibendum, football mottos (Arsenal, Everton, Tottenham), Lorem ipsum (Cicero), Colosseum, Caligula.
- Things I **dropped** because I could not confirm them (e.g. Lux soap, Oculus VR, Optimus Prime, Aut Caesar aut nihil, `island ← insula`, and the textbook's own κοστούμι ← consuo claim, which survives only as an exam fact through the ministry list) are listed in section 7 or flagged in 3A. `island` is kept as a **myth-buster**.

## 2. Method and what "verified" means

1. Drafted ~460 candidate hooks from my own knowledge, then checked **every one** against at least one outside page. Nothing in `hooks.jsonl` rests on memory alone.
2. Greek words: el.wiktionary etymology section must name the Latin source (it cites Babiniotis and Kriaras in its references; I did not open the Babiniotis dictionary itself, it is not online).
3. English words: en.wiktionary etymology chain must reach the Latin lemma (directly or through a Latin derived form such as missio ← mittere, which I reviewed by hand). Every derivative word listed after an arrow in a hook was also checked automatically (947 of 969 passed; 18 failures were reviewed by hand and the wrong ones removed, e.g. quota, genes, Aquaman, escalate, carnival).
4. Pop culture: Wikipedia page or the Harry Potter Wiki etymology section must say it (a fan wiki is lower quality, so HP items are kept only where the wiki gives a plain Latin gloss).
5. Greek/Latin cognates: either the Latin or the Greek Wiktionary page lists the other word, or both pages reconstruct the same Proto-Indo-European root. I dropped primus~πρῶτος, mollis~μαλακός (different formations), vinum~οἶνος (shared loan, not inheritance) and humilis~χαμηλός (en.wiktionary calls it "probably accidental").
6. Phrases: Wikipedia / Wiktionary for the wording, meaning and attribution. Where attribution is disputed I say so inside the hook (errare humanum est, per aspera ad astra, dum spiro spero).
7. Search was done in Greek and English. Web search found few good Greek-language sources (greek-language.gr pages were generic), so Wiktionary + the textbook carry most of the weight. `confidence` is `high` for 725 hooks and `medium` for 22 (ἄλμπουρο, κογκρέσο, ασανσέρ, σανατόριο: the textbook says it, but el.wiktionary gives only the Venetian/Italian/French step).

## 3. The school textbook as a source

**File used:** Τεύχος Β΄ (μαθήματα XXI–L), ebooks.edu.gr: https://ebooks.edu.gr/ebooks/v/pdf/8547/2538/22-0165-02_V3_Latinika-Teuchos-B_G-Lykeiou_Vivlio-Mathiti/ (242 pages; text extracted locally). Tεύχος Α΄ could not be located on ebooks.edu.gr (ids tried 2520–2560 and 2380–2640 returned other books), so Lessons I–XX are not mined.

What the book gives us:
- Symbols in the lexicon: `≃` = same meaning and same etymology (e.g. `pes ≃ πόδι`, `mensis ≃ μήνας`), `⩽` = Latin word borrowed from Greek (`tragoedia ⩽ τραγωδία`, `tyrannus`, `philosophus`, `marmor`, `paedagogus`), `⩾` = Greek word from the Latin (`scamnum ⩾ σκαμνί`, `veteranus ⩾ βετεράνος`), `<<` = modern Greek word that reached us through another language (`πρβ. φρούτο << ιτ.`). The abbreviations list also defines βεν., γαλλ., ιτ., αγγλ.
- Each lesson ends its lexicon with numbered «Ετυμολογικά» notes. About 45 of them name a modern Greek word; 35 are used here. The word is the footnoted Latin entry. I mapped each by footnote number to the vocabulary entry and checked the Greek word on el.wiktionary.
- The book also explains grammar terms with Greek parallels (e.g. lesson XXXI: the ablative merges old separative, instrumental and locative cases; in Greek the separative sits in the genitive, the locative and instrumental in the dative).

### Textbook derivative pairs (lesson, Latin → modern Greek)

| Lesson | Latin | Greek | Check |
|---|---|---|---|
| XXIII | siccus | σέκος | el.wikt ok |
| XXIII | ascendo | ασανσέρ | medium |
| XXIII | piscis | πισίνα | el.wikt ok |
| XXV | arbor | άλμπουρο | medium |
| XXV | murus | μουράγιο | el.wikt ok |
| XXV | extremus | εξτρεμισμός | el.wikt ok |
| XXVI | minor | μινόρε | el.wikt ok |
| XXVI | festivus | φεστιβάλ | el.wikt ok |
| XXVI | patiens | πασιέντσα | el.wikt ok |
| XXVI | constans | Κωνσταντίνος | el.wikt ok |
| XXVII | sonus | σονάτα | el.wikt ok |
| XXVII, XLVIII | durus | ντούρος | el.wikt ok |
| XXVII | pomum | πόμολο | el.wikt ok |
| XXVIII | nosco | νότα | el.wikt ok |
| XXVIII | custodia | κουστωδία | el.wikt ok |
| XXIX | instituo | ινστιτούτο | el.wikt ok |
| XXIX | opus | οπερέτα | el.wikt ok |
| XXX | luxuria | λούσο | el.wikt ok |
| XXX | honor | ονόρε | el.wikt ok |
| XXXI | congredior | κογκρέσο | medium |
| XXXII | vetus | βετεράνος | el.wikt ok |
| XXXIII | propago | προπαγάνδα | el.wikt ok |
| XXXIII | sanus | σανατόριο | medium |
| XXXVI | scamnum | σκαμνί | el.wikt ok |
| XXXVII, XLIII | casus | κάζο | el.wikt ok |
| XXXVII | natura | νατουραλισμός | el.wikt ok |
| XXXIX | premo | πρέσα | el.wikt ok |
| XXXIX | materia | μαδέρι | el.wikt ok |
| XL | solus | σόλο | el.wikt ok |
| XLI | antiquus | αντίκα | el.wikt ok |
| XLI | pectus | πέτο | el.wikt ok |
| XLIII | finis | φινάλε | el.wikt ok |
| XLVII | vestis | βεστιάριο | el.wikt ok |
| XLVII | tempus | τέμπο | el.wikt ok |
| XLVIII | albus | άλμπουμ | el.wikt ok |

### Textbook pairs I did NOT use

- `κοστούμι << ιτ. < con-suo` (lesson XXIX): Italian *costume* normally comes from Latin *consuetudo*, not *consuo*. I could not verify the book's claim, so it is dropped.
- `σβέλτος << ιτ.` (lesson XXXVI) and `σκαμπό << γαλλ.` (same lesson): footnote could not be matched to a single lexicon word with confidence. Dropped. The same note's `scamnum ⩾ σκαμνί` is kept (el.wiktionary confirms).
- `primus ≃ πρῶτος` and `mollis ≃ μαλακός`: see section 2, point 5.

### Textbook cognate pairs (≃) that survived checking

pes~πούς, oculus~ὄσσε, mensis~μήν, viginti~εἴκοσι, tertius~τρίτος, mater~μήτηρ, gravis~βαρύς, gignere/nasci~γίγνομαι, (g)noscere~γιγνώσκω, iugum~ζυγόν (and coniunx~σύζυγος), dexter~δεξιός, augeo~αὐξάνω, plus the extra pairs I added and verified: pater, frater, nomen, novus, ego, duo, tres, septem, octo, decem, centum, sum~εἰμί, fero~φέρω, ager~ἀγρός, nox~νύξ, sol~ἥλιος, dens~ὀδούς, cor~καρδία, equus~ἵππος, lupus~λύκος, bos~βοῦς, domus~δόμος, sedeo~ἕδρα, video~εἶδον, ovum~ᾠόν, fugio~φεύγω, vox~ὄψ, numerus~νέμω, senex~ἕνος, vetus~ἔτος, genus~γένος, tego~στέγω, ruber~ἐρυθρός, ferus~θήρ, fumus~θυμός, foris~θύρα, anser~χήν, mus~μῦς.

## 3A. The ministry's official etymology list (exam-critical)

Source: 2026-27 teaching guidelines for Latin Γ΄ ΓΕΛ (alfavita copy of the ministry PDF, as saved by another agent in `official-2026-27-etymology-by-lesson.txt`). The guidelines say the list holds only Greek words that came **from Latin, usually through Romance languages**, and leaves out true cognates (pater/πατήρ). Past papers still test cognates (fugiunt~πρόσφυγας, cognosco~απόγνωση) as well as these loans (`pastpapers.md`), so `hooks.jsonl` keeps both families. An asterisk in the ministry list marks extra words it considers evidently Latin-derived; I keep it as `ministry_star`.

How I checked each pair: I fetched the el.wiktionary etymology of every Greek derivative (147 words). `confirmed` = the etymology names the Latin word (or its direct Italian/French/English form of it). `romance-step-only` = only the Italian/French/English step is given. `ministry-only` = the page is missing or has no etymology; the pair is still an exam fact because the ministry lists it.

Notes on specific pairs:
- `sutor → (κο)στούμι`: the ministry and the textbook say so, but Italian *costume* normally comes from *consuetudo*. Teach as an exam fact; do not defend it as linguistics.
- `celeriter → κέλητας` and `diaeta → δίαιτα` are not Latin loans into Greek: κέλης is a Greek cognate of *celer*, and *diaeta* is a Latin loan **from** Greek δίαιτα. They show how the exam mixes directions.
- `solvo → σβέλτος` and `pravus → μπράβος` look odd but el.wiktionary confirms the chain (svelto < *soltus < solutus < solvo; bravo < *bravus < pravus).
- `ianua → Ιανουάριος` and `piscatorius → πισίνα` are one step removed (via *Ianus*, *piscina*).
- Several lemmas recur in many lessons: res (8 lessons), mitto (4 lessons), cado (4 lessons), homo (4 lessons), castra (4 lessons), miles (4 lessons), dux (3 lessons), miseror (3 lessons). High-yield.

| Lessons | Latin | Greek derivatives | * | Independent check |
|---|---|---|---|---|
| 16 | gladius | γλαδιόλα (λουλούδι) |  | confirmed |
| 16 | princeps | πρίγκιπας, πριγκιπάτο | * | confirmed |
| 16 | signum | σινιάλο |  | ministry-only |
| 16 | militaris | μιλιταρισμός |  | confirmed |
| 16, 22 | numerus | νούμερο |  | confirmed |
| 16 | arma | τα άρματα, ο αρματολός |  | confirmed |
| 16, 34 | dux | δούκας, δουκάτο | * | confirmed |
| 16, 45, 50 | mitto | κομισάριος (επίτροπος), μισιονάριος (ιεραπόστολος καθολικής εκκλησίας) | * | confirmed |
| 16 | verto | η βερσιόν (εκδοχή, παραλλαγή), βέρτιγκο (ίλιγγος, αίσθημα περιστροφής) | * | confirmed |
| 16, 20 | curro | η κούρσα (αγώνας ταχύτητας, το τρέξιμο), ο κούριερ (ο ταχυδιανομέας) | * | confirmed |
| 17 | tabernaculum | ταβέρνα |  | confirmed |
| 17 | communis | κομμουνισμός |  | confirmed |
| 17, 35 | miseror | μιζέρια/μίζερος | * | confirmed |
| 17 | mercator | ο μερκαντιλισμός (εμποροκρατία, οικονομικό σύστημα) | * | confirmed |
| 17, 39 | virtus | βιρτουόζος (δεξιοτέχνης) | * | confirmed |
| 18 | pastor | πάστορας (προτεστάντης ιερέας) |  | confirmed |
| 18 | traho | τρακτέρ |  | confirmed |
| 18 | confundo | το κομφούζιο (μπερδεμένη κατάσταση) | * | ministry-only |
| 19 | pravus | μπράβος |  | confirmed |
| 19 | socius | σοσιαλισμός |  | confirmed |
| 19 | pugna | μπουνιά | * | confirmed |
| 20, 43 | cado | (το) κάζο (ζημιά, πάθημα, στραπάτσο) |  | confirmed |
| 20 | diaeta | δίαιτα |  | ministry-only |
| 20 | solarium | (το) σολάριουμ (συσκευή με την οποία υποβάλλεται κανείς σε τεχνητό μαύρισμα) |  | confirmed |
| 20 | velum | (το) βέλο (λεπτό ύφασμα που καλύπτει γυναικεία καπέλα ή και μέρος του προσώπου), το βήλο (κομμάτι πανί) |  | confirmed |
| 21 | dux | δούκας | * | confirmed |
| 21 | dictator | δικτάτορας (πρόσωπο που κατέλαβε την εξουσία με βίαιο τρόπο) | * | confirmed |
| 22 | fructus | φρούτο |  | confirmed |
| 22, 46 | res | ρεπουμπλικάνοι (πολιτικό κόμμα των ΗΠΑ) | * | ministry-only |
| 22 | servio | σερβιτόρος, σερβίρω | * | confirmed |
| 22 | motus | το μοτίβο (ρυθμική μουσική ιδέα, επαναλαμβανόμενο εικαστικό ή λογοτεχνικό θέμα), το μοτέρ (η μηχανή), το μοτοποδήλατο, η μοτοσικλέτα κ.ο.κ. | * | confirmed |
| 23 | siccus | σέκος (ξερός, άναυδος, στον τόπο=νεκρός) |  | confirmed |
| 23 | ascendo | ασανσέρ |  | confirmed |
| 23 | arma | άρματα, αρματολός (υπάρχει στα σχόλια του μαθ. 16) |  | confirmed |
| 23 | piscatorius | πισίνα |  | confirmed |
| 23 | ianua | Ιανουάριος |  | confirmed |
| 23 | vinco | Βίκτωρ, Βικτωρία (κύρια ονόματα) | * | confirmed |
| 23 | oculus | τα κιάλια | * | ministry-only |
| 23 | bene | το μπόνους, η μπουνάτσα (η καλοκαιρία) | * | confirmed |
| 23, 46 | pars | η πάρτη (ο εαυτός μου, τα προσωπικά μου συμφέροντα), το πάρτι, η παρτίδα, η παρτιτούρα | * | confirmed |
| 25 | arbor | το άλμπουρο (το κατάρτι) |  | confirmed |
| 25 | muri | το μουράγιο (προκυμαία, χτιστό τμήμα λιμανιού) |  | confirmed |
| 25 | extremus | εξτρεμισμός |  | confirmed |
| 26 | minor | μίνι, μινόρε |  | confirmed |
| 26 | festivus | φεστιβάλ |  | confirmed |
| 26 | constantia | Κωνσταντίνος |  | confirmed |
| 26 | patientia | πασιέντσα |  | confirmed |
| 26 | studiose | στούντιο | * | confirmed |
| 26, 43, 44 | vita | η βιταμίνη | * | confirmed |
| 27 | minor | μίνι, μινόρε (υπάρχει στα ετυμολογικά του μαθ. 26) |  | confirmed |
| 27 | sonorus | σονάτα (είδος μουσικής σύνθεσης), σονέτο (λυρικό ποίημα) |  | confirmed |
| 27 | durus | ντούρος (σκληρός, αυτός που δε λυγίζει εύκολα) |  | confirmed |
| 27 | pomum | πόμολο |  | confirmed |
| 28 | notus | η νότα |  | confirmed |
| 28 | custodia | κουστωδία (επίσημη συνοδεία αστυνομικών ή στρατιωτικών) |  | confirmed |
| 28, 29, 41, 46 | homo | ουμανισμός (ανθρωπισμός) | * | confirmed |
| 28, 37, 48 | servus | σερβιτόρος, σερβίρω | * | romance-step-only |
| 28 | summus | η σούμα (το σύνολο) | * | confirmed |
| 29 | instituo | ινστιτούτο (μορφωτικό––πολιτιστικό ίδρυμα) |  | confirmed |
| 29 | milia | (το) μίλι |  | confirmed |
| 29 | sutor | κοστούμι |  | romance-step-only |
| 29, 31 | opera | όπερα, οπερέτα (μουσικά είδη) |  | confirmed |
| 29, 48 | doceo | ντοκουμέντο |  | confirmed |
| 30 | luxuria | το λούσο (εντυπωσιακό ρούχο ή είδος καλλωπισμού) |  | confirmed |
| 30 | familia | φαμίλια |  | romance-step-only |
| 30 | honor | (το) ονόρε |  | confirmed |
| 30, 37, 38, 39, 40, 45 | res | ρεαλισμός | * | confirmed |
| 31 | congredior | κογκρέσο (συνέλευση) |  | ministry-only |
| 31, 42, 43, 45 | castra | κάστρο | * | confirmed |
| 31 | moveo | το μοτίβο (ρυθμική μουσική ιδέα, επαναλαμβανόμενο εικαστικό ή λογοτεχνικό θέμα), το μοτέρ (η μηχανή), το μοτοποδήλατο, η μοτοσικλέτα κ.ο.κ. | * | romance-step-only |
| 32 | vetustas | βετεράνος |  | confirmed |
| 32, 41, 44 | colo | κουλτούρα | * | confirmed |
| 32 | conformo | κονφορμισμός ή κομφορμισμός (συμβατισμός) | * | confirmed |
| 32 | liber | το λιμπρέτο (το κείμενο όπερας ή άλλου μουσικού έργου) | * | confirmed |
| 32 | imitor | ιμιτασιόν (η απομίμηση - και ως επίθετο) | * | confirmed |
| 32 | fortis | το φόρτε (το δυνατό σημείο κάποιου) | * | confirmed |
| 33 | libido | η λίμπιντο (η ερωτική ορμή) | * | confirmed |
| 33 | propago | προπαγάνδα |  | confirmed |
| 33 | sano | το σανατόριο (θεραπευτικό ίδρυμα) |  | confirmed |
| 34, 44, 49 | forte | φουρτούνα | * | confirmed |
| 34 | templum | το τέμπλο (το εικονοστάσιο μεταξύ αγίου βήματος και κυρίως ναού στις εκκλησίες) | * | confirmed |
| 35 | plebs | η πλέμπα, η πλεμπάγια (ο όχλος) | * | confirmed |
| 35, 45 | curo | η κούρα (η φροντίδα), κουράρω | * | confirmed |
| 35 | mercenarius | ο μερκαντιλισμός (εμποροκρατία, οικονομικό σύστημα) | * | confirmed |
| 36 | scamnum | σκαμνί |  | confirmed |
| 36 | solvo | σβέλτος |  | confirmed |
| 36 | maximus | το μάξι (μακρύ φόρεμα), ο μαξιμαλισμός (η προβολή αιτημάτων στο υπέρτατο όριο), ο Μάξιμος (κύριο όνομα) | * | confirmed |
| 36 | mitto | ο κομισάριος (επίτροπος), ο μισιονάριος (ο ιεραπόστολος της καθολικής εκκλησίας) | * | confirmed |
| 36, 48 | impero | ο ιμπεριαλισμός (τάση για εδαφική επέκταση ή κατάκτηση) | * | confirmed |
| 37 | casus | (το) κάζο (ζημιά, πάθημα, στραπάτσο) |  | confirmed |
| 37 | miseror | μιζέρια, μίζερος | * | confirmed |
| 37, 43 | miser | μιζέρια, μίζερος | * | confirmed |
| 37, 38 | natura | νατουραλισμός (αισθητικό κίνημα) |  | confirmed |
| 37 | populus | το πόπολο (ο λαός υποτιμητικά), ποπ (κάτι δημοφιλές, για το ευρύ κοινό, εμπορική μουσική), Ποπ Αρτ κ.ο.κ. | * | romance-step-only |
| 37 | furor | φουριόζος, η φούρια (η πιεστική βιασύνη) | * | confirmed |
| 37 | victor | Βίκτωρ, Βικτωρία (κύρια ονόματα) | * | confirmed |
| 37 | pugno | η μπουνιά | * | confirmed |
| 38 | mos | αμοραλιστής, αμοραλισμός | * | confirmed |
| 38 | mora | το μορατόριουμ (συμφωνία για αναστολή προκλητικών ενεργειών μεταξύ κρατών) | * | confirmed |
| 38 | morior | ο μόρτης (ο μάγκας, ο αλήτης) | * | confirmed |
| 39 | premo | η πρέσα, πρεσάρω |  | confirmed |
| 39 | materia | ματεριαλισμός (υλισμός) |  | confirmed |
| 39, 40, 45, 48 | miles | μιλιταρισμός (υπάρχει στο μάθημα 16 αναφορικά με το militaris) |  | confirmed |
| 39 | minus | το μίνι, μινόρε (υπάρχει στα ετυμολογικά του μαθ. 26 αναφορικά με το minor) |  | confirmed |
| 39 | fortuna | φουρτούνα | * | confirmed |
| 39 | ago | ο ακτιβισμός (έντονες μορφές αγώνα για την επίτευξη στόχων), ακτιβιστής | * | confirmed |
| 39 | imperator | ο ιμπεριαλισμός, ιμπεριαλιστής | * | confirmed |
| 39 | optimus | ο οπτιμισμός (στάση ζωής που προσδοκά καλή εξέλιξη των πραγμάτων) | * | confirmed |
| 40 | armatus | άρματα, αρματολός (υπάρχει στο μάθημα 16 αναφορικά με το arma) |  | confirmed |
| 40 | solus | (το) σόλο |  | confirmed |
| 40 | conservo | κονσέρβα |  | confirmed |
| 40, 45 | celeriter | ο κέλητας (γρήγορο άλογο) |  | ministry-only |
| 41 | antiquus | η αντίκα |  | confirmed |
| 41 | antiquitas | η αντίκα | * | confirmed |
| 41 | pectus | (το) πέτο |  | confirmed |
| 41, 46 | bonus | το μπόνους, η μπουνάτσα (η καλοκαιρία) | * | confirmed |
| 41 | verbum | ο βερμπαλισμός (η χρήση εντυπωσιακών εκφραστικών σχημάτων), ο βερμπαλιστής | * | confirmed |
| 41, 42, 44 | intelligo | η ιντελιγκέντσια (η ιδιαίτερη ομάδα των διανοουμένων) | * | confirmed |
| 41 | placeo | το πλασέμπο (εικονικό φάρμακο που παράγει στον ασθενή την αυθυποβολή της βελτίωσης της κατάστασής του) | * | confirmed |
| 42 | regie | ο ρήγας (βασιλιάς) | * | romance-step-only |
| 43 | finis | φινάλε |  | confirmed |
| 43 | succurrit | η κούρσα (αγώνας ταχύτητας, το τρέξιμο), ο κούριερ (ο ταχυδιανομέας) | * | romance-step-only |
| 43 | futurus | φουτουριστικός, φουτουρισμός | * | confirmed |
| 43 | servitus | σερβιτόρος, σερβίρω | * | confirmed |
| 43 | finis | το φινάλε |  | confirmed |
| 43 | patior | η πασιέντσα |  | confirmed |
| 44 | cado | (το) κάζο (ζημιά, πάθημα, στραπάτσο) (υπάρχει στα σχόλια του μαθήματος 43) |  | confirmed |
| 44, 47 | tempus | το τέμπο (ο ρυθμός) |  | confirmed |
| 45 | casus | (το) κάζο (ζημιά, πάθημα, στραπάτσο) (υπάρχει στα σχόλια του μαθ. 37) |  | confirmed |
| 46 | communis | κομουνισμός (υπάρχει στα σχόλια του μαθ. 17) | * | ministry-only |
| 46 | natura | νατουραλισμός (αισθητικό κίνημα) (υπάρχει στα σχόλια του μαθ. 38) |  | confirmed |
| 46 | rego | ο ρήγας (ο βασιλιάς) | * | romance-step-only |
| 46 | cado | (το) κάζο (ζημιά, πάθημα, στραπάτσο) (υπάρχει στα σχόλια του μαθ. 37) |  | confirmed |
| 46 | decet | το ντεκόρ | * | confirmed |
| 47 | vestis | βεστιάριο |  | confirmed |
| 47 | traho | το τρακτέρ |  | confirmed |
| 47, 48 | video | το βίντεο | * | confirmed |
| 48 | albus | (το) άλμπουμ |  | confirmed |
| 48 | instinguo | το ένστικτο |  | confirmed |
| 48 | durus | ντούρος (σκληρός, αυτός που δε λυγίζει) |  | confirmed |
| 48 | pulchritudo | Πουλχερία (κύριο όνομα) | * | confirmed |
| 49 | ferrum | η φεριτίνη (πρωτεΐνη που ρυθμίζει τον σίδηρο του οργανισμού) | * | ministry-only |
| 49 | officium | το οφίκιο ή οφίτσιο (τίτλος, αξίωμα) | * | confirmed |
| 49 | factum | ντεφάκτο (εκ των πραγμάτων, στην πράξη) | * | ministry-only |
| 50 | solus | (το) σόλο (υπάρχει στα σχόλια του μαθ. 40) |  | confirmed |
| 50 | placet | το πλασέμπο (εικονικό φάρμακο που παράγει στον ασθενή την αυθυποβολή της βελτίωσης της κατάστασής του) | * | confirmed |
| 50 | imperium | ο ιμπεριαλισμός (τάση για εδαφική επέκταση ή κατάκτηση) | * | confirmed |
| 50 | magistra | ο μάγιστρος (ανώτατο αξίωμα στην ύστερη ρωμαϊκή και βυζαντινή περίοδο) | * | confirmed |

## 4. Why this fits the exam course

The 2021 study programme for Latin in Γ΄ Λυκείου (ΦΕΚ Β΄ 2942/05.07.2021, https://lb2.ebooks.edu.gr/ebooks/d/8547/5480/FEK-2021_Latinika_G_Lykeiou_Programma-Spoudon.pdf, read in full) lists these expected outcomes: students should "συμπεραίνουν τις γλωσσικές επιδράσεις της λατινικής γλώσσας στις γλώσσες των λαών της Ευρώπης, ιδιαίτερα στην Ελληνική, και να είναι σε θέση να αναγνωρίζουν την προέλευση λέξεων ευρωπαϊκών γλωσσών τις οποίες διδάσκονται στο σχολείο" and "αναγνωρίζουν λέξεις της Λατινικής που ως γλωσσικά δάνεια έχουν ενσωματωθεί στο λεξιλόγιο της Νέας Ελληνικής". So derivative recognition is a stated goal of the course, not just a gimmick. How often and in which shape the exam tests it (match 5 of 7 pairs, or find the related Latin word in the passage, 10 marks) is documented in `pastpapers.md` and `syllabus.md`.
Scope: confirmed in `syllabus.md` (Υ.Α. 90176/Δ2/2026): examinable texts are Τεύχος Α΄ μαθήματα XVI–XX and Τεύχος Β΄ μαθήματα XXI–L. My textbook mining covers XXI–L; lessons XVI–XX are covered through the ministry list (section 3A).

## 5. Hook families, with ideas for mini-games

**A. Greek words that are secretly Latin (el_loan)**: σπίτι, κάστρο, κάμπος, πόρτα, φούρνος, σκάλα, βίλα, μάστορας, σίγουρος, κελί, κούπα, καλαμάρι, κουρτίνα, μπάνιο, κάρβουνο, κανάλι, τσιμέντο, κολόνα, κάρο, πιάτσα, τρούλος, τίτλος, μουλάρι, πρίγκιπας, κόμης, πατρίκιος, λαρδί, καμπάνα, βάζο, ταβέρνα, λουκάνικο, κουνέλι, ρόδα, στράτα, φινιστρίνι, αρένα, κάλαντα, μίλι, ουγγιά, φάβα, ατζέντα, νούμερο, όπερα. Two are «boomerangs» (μπάνιο ← balneum ← βαλανεῖον, πιάτσα ← platea ← πλατεῖα). Game: «Λατινικό ή όχι;» (swipe), or unscramble the Latin source.

**B. Same-root pairs (cognate)**: the 50 ≃ pairs above. Game: match pairs (λατινικά ↔ ελληνικά) in Greek-vs-Latin blocks: numbers 1–10, family (mater/pater/frater), body (pes/dens/cor/oculus).

**C. Grammar terms are translations of Greek (grammar_term)**: casus=πτῶσις, dativus=δοτική, genetivus=γενική, participium=μετοχή, coniugatio=συζυγία, passivus=παθητική, praepositio=πρόθεση ... and the famous slip: accusativus translates αἰτιατική wrongly. Game: «Βρες τον ελληνικό όρο» + a story card for accusativus.

**D. Months and calendar**: Septem/Octo/Novem/Decem = 7/8/9/10 because the old Roman year began in March (Quintilis→Iulius, Sextilis→Augustus verified on Wikipedia). Game: order the months and guess the number inside each.

**E. English derivatives (en_derivative, 307 hooks)**: Best ones for a stressed 17-year-old who studies English: video/audio are literal Latin verbs, bus ← omnibus (dative plural), semester = sex + mensis, nice ← nescius, computer = com + putare, cursor = «δρομέας», negotium = nec + otium, bankrupt = banca rotta, Delete ← delere, Placebo = «θα ευχαριστήσω», recipe = «πάρε!», tennis ← «tenez». Game: «Αποκωδικοποίησε τη λέξη» (transfer to unseen words, same as Skepsis).

**F. Zodiac and Latin as translation of Greek**: Aries=Κριός, Virgo=Παρθένος, Libra=Ζυγός, Cancer=Καρκίνος, Pisces=Ιχθύες are verified calques; others (Taurus, Gemini, Leo, Scorpio, Sagittarius, Capricornus) are hooked individually.

**G. Phrases (62) and abbreviations (17)**: carpe diem, veni vidi vici, alea iacta est, cogito ergo sum, ab urbe condita (Livy!), mens sana, panem et circenses, o tempora o mores, Carthago delenda est (gerundive!), nil desperandum (gerundive), QED (gerundive), a.m./p.m., i.e., e.g., P.S., CV, Au/Ag/Fe/Pb/Cu. Game: «Συμπλήρωσε τη φράση» and sort by grammar point (gerundive, dative, ablative absolute).

**H. Pop and brands (33)**: Volvo = «κυλάω», Audi = «άκου!», Sony = sonus, Nivea = «χιονάτη», Juventus, Parabellum, Hunger Games Panem, HP spells. Use as 15-second «Ήξερες ότι;» cards after a lesson, not as the main item.

**I. Myth-busters**: `island` does not come from insula (en.wiktionary: Old English igland; the s is a later confusion). `council ≠ counsel` (concilium vs consilium). `Canary Islands` ← dogs is only «probably». Use for the «Is it Latin?» unit.

## 6. Catalogue

Source tags: wikt = en.wiktionary, el.wikt = el.wiktionary, wiki = Wikipedia, HPwiki = Harry Potter Wiki, textbook = school book. Full URLs are in `hooks.jsonl`. `P` marks the primary hook for each lemma (textbook hooks first, then Greek loans, cognates, grammar terms, English, phrases, pop, abbreviations).

### Greek words from Latin (108)

| Lemma | P | Hook | Src |
|---|---|---|---|
| rex | P | Το «ρήγας» στην τράπουλα είναι ο rex, ο βασιλιάς (μέσω της μεσαιωνικής ελληνικής και των ιταλικών). | el.wikt |
| familia |  | familia → φαμίλια (ιταλ. famiglia), family. | el.wikt |
| dux |  | dux (αρχηγός) → δούκας, duke, και Il Duce (ο Μουσολίνι). | el.wikt |
| legio | P | legio → λεγεώνα, legion: η βασική μονάδα του ρωμαϊκού στρατού (και η Λεγεώνα των Ξένων). | el.wikt |
| castrum | P | castrum → κάστρο (και castle). | el.wikt |
| porta | P | porta → πόρτα, και port, portal. | el.wikt |
| campus | P | campus (πεδίο) → κάμπος, campus, camp, champion (ο «πρωταθλητής του πεδίου»). | el.wikt |
| portus | P | Πορτοκάλι = το φρούτο της Πορτογαλίας (ιταλ. portogallo). Portugal ← Portus Cale (portus = λιμάνι). | el.wikt |
| Mars | P | Mars (θεός πολέμου) → Μάρτιος/Μάρτης, martial (πολεμικός). | el.wikt |
| vita |  | vita → vital, βιταμίνη (vita + amine = αμίνη της ζωής). Και C.V. = curriculum vitae. | el.wikt |
| aqua | P | aqua → ακουαρέλα (ιταλ. acquarello), aquarium (ενυδρείο), aqueduct (aqua + ducere = υδραγωγείο). | el.wikt |
| fructus |  | fructus → φρούτο, fruit, fructose. | el.wikt |
| forum | P | forum → φόρουμ (το ρωμαϊκό Forum Romanum ήταν η αγορά). | el.wikt |
| numerus |  | numerus → νούμερο (μέσω ιταλικού numero), number, numeral, innumerable. | el.wikt |
| opus |  | opus, plur. opera = «έργα» → όπερα, opera, magnum opus (το κορυφαίο έργο). | el.wikt |
| magister | P | magister → μάστορας (και μαστρο-), master, mister, Master, magistrate. Αντίθετο: minister (minus!). | el.wikt |
| amo | P | amor → αμόρε, amour, Amanda («αυτή που πρέπει να αγαπηθεί» — gerundive). | el.wikt |
| curo |  | σίγουρος ← securus ← sine + cura (χωρίς έγνοια). | el.wikt |
| video |  | video = «βλέπω»! Το βίντεο είναι κυριολεκτικά ρήμα: vidēre → vision, visit, evident, provide, revise, supervise, envy, visa. | el.wikt |
| doceo |  | docere (διδάσκω) → doctor (= δάσκαλος), doctrine, document (ντοκουμέντο, ντοκιμαντέρ), docile. | el.wikt |
| studeo | P | studere (καταγίνομαι, μελετώ) → study, student, studio (στούντιο). | el.wikt |
| dico | P | dicere → dictator (ο «διατάζων»), δικτάτορας (δικτατορία), dictionary. | el.wikt |
| vinco |  | Βίκτωρ/Βικτώρια = ο/η νικητής/νικήτρια (victor ← vincere, Victoria). | el.wikt |
| ago |  | agere (πράττω) → agenda = «πράγματα προς πράξη» (gerundive), ατζέντα, agent, action, agile. | el.wikt |
| septem |  | septem (7) → Σεπτέμβριος: ο 7ος μήνας του παλιού ρωμαϊκού έτους που άρχιζε τον Μάρτιο! | el.wikt |
| octo |  | octo (8) → Οκτώβριος: ο 8ος μήνας του παλιού ρωμαϊκού ημερολογίου. Και octave. | el.wikt |
| novem | P | novem (9) → Νοέμβριος: ο 9ος μήνας του παλιού ρωμαϊκού ημερολογίου. | el.wikt |
| decem |  | decem (10) → Δεκέμβριος: ο 10ος μήνας. Και decimate (στη Ρώμη σκότωναν 1 στους 10!), decimal. | el.wikt |
| mille | P | mille passuum («χίλια βήματα») → μίλι, mile. Και mille → million, millennium. | el.wikt |
| hospitium | P | σπίτι ← hospitium (ξενώνας, φιλοξενία) ← hospes: το σπίτι σου είναι λατινικό! Και hospital, hotel, host. | el.wikt |
| kalendae | P | Calendae (η 1η του μήνα) → κάλαντα (τα Χριστουγεννιάτικα!) και calendar. Ad Kalendas Graecas = «στις ελληνικές καλένδες»: ποτέ, γιατί οι Έλληνες δεν είχαν calendae. | alfavita.gr,el.wikt,wiki |
| rota | P | rota (τροχός) → ρόδα (ενετ. roda), rotate, rotary, roulette. | el.wikt |
| Ianus | P | Ianus, ο θεός με τα δύο πρόσωπα (θυρών και αρχών) → Ιανουάριος/Γενάρης. | el.wikt |
| strata | P | strata (via strata = στρωμένος δρόμος) → στράτα, street, stratum (το στρώμα), Strada (ιταλικά). | el.wikt |
| fenestra | P | fenestra (παράθυρο) → φινιστρίνι (ιταλικά finestrino), defenestrate (ρίχνω από το παράθυρο). | el.wikt |
| cella | P | cella (αποθήκη, μικρό δωμάτιο) → κελί, cell, cellar. | el.wikt |
| coquo | P | coquere (μαγειρεύω) → κουζίνα (μέσω ιταλικού cucina), cook, kitchen. | el.wikt |
| faba | P | faba (κουκί) → φάβα (Σαντορίνη), fava. Και το επώνυμο Fabius! | el.wikt |
| caesar | P | Caesar → Καίσαρας, Kaiser (Γερμανία), tsar/τσάρος (Ρωσία): ένα όνομα έγινε τίτλος. | el.wikt |
| Augustus | P | Augustus (ο «σεβαστός», augere = αυξάνω) → Αύγουστος. Ο Sextilis μετονομάστηκε προς τιμήν του. | el.wikt |
| Iulius | P | Ο Quintilis (5ος) μετονομάστηκε Iulius προς τιμήν του Καίσαρα → Ιούλιος. | el.wikt |
| Martius | P | Ο Μάρτιος ήταν ο πρώτος μήνας του ρωμαϊκού έτους (θεός Mars) → γι' αυτό ο Σεπτέμβριος είναι ο 7ος (septem). | el.wikt |
| Februarius | P | februa = τελετές καθαρμού → Φεβρουάριος. | el.wikt |
| ianuarius | P | Ianuarius → Ιανουάριος και Γενάρης (λαϊκός τύπος). | el.wikt |
| colossus | P | Colosseum ← colossus (πιστεύεται ότι πήρε το όνομα από τον κολοσσιαίο ανδριάντα του Νέρωνα δίπλα του). Εκεί έγιναν οι αγώνες των gladiatores. | el.wikt |
| harena | P | harena (άμμος!) → αρένα, arena: η αρένα ήταν σκεπασμένη με άμμο. | el.wikt |
| uncia | P | uncia (το 1/12 της λίβρας) → ουγγιά, ounce, inch (το 1/12 του ποδιού!). | el.wikt |
| siccus |  | Σχολικό βιβλίο (μάθ. XXIII): siccus (στεγνός) → σέκος (ιταλ. secco). | el.wikt,textbook |
| ascendo |  | Σχολικό βιβλίο (μάθ. XXIII): ascendere (ανεβαίνω) → ασανσέρ (γαλλ. ascenseur), ascend, descend. | el.wikt,textbook |
| piscis | P | Σχολικό βιβλίο (μάθ. XXIII): piscis (ψάρι) → piscina (ιχθυοτροφείο) → πισίνα. | el.wikt,textbook |
| arbor |  | Σχολικό βιβλίο (μάθ. XXV): arbor (δέντρο) → άλμπουρο (ιστός πλοίου, από τα ενετικά albero). | el.wikt,textbook |
| murus | P | Σχολικό βιβλίο (μάθ. XXV): murus / moenia (τείχος) → μουράγιο (ενετ. muraio): το προστατευτικό τείχος του λιμανιού. | el.wikt,textbook |
| extremus |  | Σχολικό βιβλίο (μάθ. XXV): extremus (έσχατος) → εξτρεμισμός (γαλλ. extrémisme), extreme. | el.wikt,textbook |
| minor |  | Σχολικό βιβλίο (μάθ. XXVI): minor / minimus → μινόρε (μουσική: ιταλ. minore) = ελάσσων κλίμακα. | el.wikt,textbook |
| festivus |  | Σχολικό βιβλίο (μάθ. XXVI): festivus (εύθυμος, γιορτινός) → φεστιβάλ (γαλλ. festival). | el.wikt,textbook |
| patiens | P | Σχολικό βιβλίο (μάθ. XXVI): patiens (υπομονετικός) → πασιέντσα, το παιχνίδι με τράπουλα που θέλει υπομονή. | el.wikt,textbook |
| constans | P | Σχολικό βιβλίο (μάθ. XXVI): constans (σταθερός) → Κωνσταντίνος: το όνομά σου λέει «ο σταθερός»! | el.wikt,textbook |
| sonus | P | Σχολικό βιβλίο (μάθ. XXVII): sonus (ήχος) → σονάτα, σονέτο (ιταλ. sonata, sonetto). | el.wikt,textbook |
| durus |  | Σχολικό βιβλίο (μάθ. XXVII, XLVIII): durus (σκληρός) → ντούρος (ιταλ. duro): ο «σκληρός»! | el.wikt,textbook |
| pomum |  | Σχολικό βιβλίο (μάθ. XXVII): pomum (καρπός, φρούτο) → πόμολο (ιταλ. pomolo, από το σχήμα του). | el.wikt,textbook |
| nosco | P | Σχολικό βιβλίο (μάθ. XXVIII): notus (γνωστός, < nosco) / nota → νότα. | el.wikt,textbook |
| custodia |  | Σχολικό βιβλίο (μάθ. XXVIII): custodia (φύλαξη) → κουστωδία. | el.wikt,textbook |
| instituo |  | Σχολικό βιβλίο (μάθ. XXIX): instituo / institutum → ινστιτούτο. | el.wikt,textbook |
| opus | P | Σχολικό βιβλίο (μάθ. XXIX): opera (έργα) → όπερα, οπερέτα (ιταλ.). | el.wikt,textbook |
| luxuria |  | Σχολικό βιβλίο (μάθ. XXX): luxuria / luxus (πολυτέλεια) → λούσο (ιταλ. lusso), «λουσάτος». | el.wikt,textbook |
| honor |  | Σχολικό βιβλίο (μάθ. XXX): honor / honoro → ονόρε (ιταλ. onore): «τιμή». | el.wikt,textbook |
| congredior |  | Σχολικό βιβλίο (μάθ. XXXI): congredior (συναντιέμαι) → congressus → κογκρέσο (ιταλ. congresso = συνέλευση). | el.wikt,textbook |
| vetus | P | Σχολικό βιβλίο (μάθ. XXXII): vetus (παλιός) → veteranus → βετεράνος. | el.wikt,textbook |
| propago |  | Σχολικό βιβλίο (μάθ. XXXIII): propago (διαδίδω) → de propaganda fide = «για τη διάδοση της πίστης» → προπαγάνδα. | el.wikt,textbook |
| sanus | P | Σχολικό βιβλίο (μάθ. XXXIII): sano (θεραπεύω) → σανατόριο (σχολικό: «< λατ.»). | el.wikt,textbook |
| scamnum |  | Σχολικό βιβλίο (μάθ. XXXVI): scamnum ⩾ σκαμνί (το σκαμνί σου είναι λατινικό!). | el.wikt,textbook |
| casus |  | Σχολικό βιβλίο (μάθ. XXXVII, XLIII): casus (< cado «πέφτω») → κάζο (ιταλ. caso). | el.wikt,textbook |
| natura |  | Σχολικό βιβλίο (μάθ. XXXVII): naturalis (φυσικός) → νατουραλισμός (γαλλ. naturalisme). | el.wikt,textbook |
| premo |  | Σχολικό βιβλίο (μάθ. XXXIX): premo (πιέζω) → pressa → πρέσα. | el.wikt,textbook |
| materia |  | Σχολικό βιβλίο (μάθ. XXXIX): materia (ξύλο, ύλη) → μαδέρι (ενετ. madiero), ματεριαλισμός (γαλλ.). | el.wikt,textbook |
| solus |  | Σχολικό βιβλίο (μάθ. XL): solus (μόνος) → σόλο (ιταλ. solo). | el.wikt,textbook |
| antiquus |  | Σχολικό βιβλίο (μάθ. XLI): antiquus (αρχαίος) → αντίκα (ιταλ. antica). | el.wikt,textbook |
| pectus |  | Σχολικό βιβλίο (μάθ. XLI): pectus (στήθος) → πέτο (ιταλ. petto): το πέτο του σακακιού. | el.wikt,textbook |
| finis |  | Σχολικό βιβλίο (μάθ. XLIII): finis (τέλος) → finalis → φινάλε (ιταλ. finale). | el.wikt,textbook |
| vestis |  | Σχολικό βιβλίο (μάθ. XLVII): vestis (ρούχο) → vestiarium → βεστιάριο. | el.wikt,textbook |
| tempus |  | Σχολικό βιβλίο (μάθ. XLVII): tempus (χρόνος) → τέμπο (ιταλ. tempo): «ρυθμός» στη μουσική. | el.wikt,textbook |
| albus |  | Σχολικό βιβλίο (μάθ. XLVIII): albus (λευκός) → album (λευκό φύλλο) → άλμπουμ. | el.wikt,textbook |
| taberna | P | taberna (μαγαζί, πανδοχείο) → ταβέρνα, tavern: η ελληνική ταβέρνα είναι λατινική! | el.wikt |
| cuniculus | P | cuniculus → κουνέλι (ιταλ. coniglio), cony. | el.wikt |
| lucanica | P | lucanica (λουκάνικο από τη Lucania, περιοχή της Ιταλίας) → λουκάνικο. | el.wikt |
| furnus | P | furnus → φούρνος (και ιταλ. forno, γαλλ. four, ισπ. horno): ο φούρνος της γειτονιάς είναι λατινικός! | el.wikt |
| scala | P | scala ← scando (ανεβαίνω) → σκάλα, scale, scan, ascend. | el.wikt |
| villa | P | villa (εξοχική έπαυλη) ← vicus (χωριό) → βίλα (ιταλ.), village. | el.wikt |
| cupa | P | cupa (βαρέλι, κύπελλο) → κούπα (και η «κούπα» της τράπουλας), cup. | el.wikt |
| calamarium | P | καλαμάρι ← (theca) calamaria = «θήκη για καλάμια γραφής»: το καλαμάρι έχει μελάνι! | el.wikt |
| cortina | P | cortina → κουρτίνα, curtain. | el.wikt |
| capistrum | P | capistrum ← capio (πιάνω) + -trum → καπίστρι (ό,τι πιάνει το άλογο). | el.wikt |
| balneum | P | balneum → ιταλ. bagno → μπάνιο. Το balneum προέρχεται από το ελληνικό βαλανεῖον: βούμερανγκ! | el.wikt |
| carbo | P | carbo → κάρβουνο, carbon (άνθρακας). | el.wikt |
| canalis | P | canalis ← canna ← ελληνικό κάννα → κανάλι, canal, channel. | el.wikt |
| caementum | P | caementum ← caedere (κόβω): θρυμματισμένη πέτρα → τσιμέντο (ιταλ. cemento), cement. | el.wikt |
| columna | P | columna → κολόνα (ιταλ. colonna), column. | el.wikt |
| carrus | P | carrus (γαλατική προέλευση) → κάρο, car, carry. | el.wikt |
| platea | P | platea ← ελληνικό πλατεῖα (ὁδός) → πλατεία και πιάτσα (ιταλ. piazza), place, plaza: βούμερανγκ! | el.wikt |
| trulla | P | trulla (κουτάλα, μικρό αγγείο) → τρούλος. | el.wikt |
| titulus | P | titulus → τίτλος, title, titular. | el.wikt |
| mulus | P | mulus → μουλάρι, mule. | el.wikt |
| princeps |  | princeps (primus + capere: «ο πρώτος») → πρίγκιπας, prince, principal. | el.wikt |
| comes | P | comes = cum + eo: «ο συνοδός» → κόμης, count (τίτλος). | el.wikt |
| patricius | P | patricius ← pater → πατρίκιος, patrician. | el.wikt |
| lardum | P | lardum → λαρδί, lard. | el.wikt |
| campana | P | Campana (από την Campania) → καμπάνα. | el.wikt |
| vas | P | vas, vasis (σκεύος) → βάζο (ιταλ. vaso), vase, vessel. | el.wikt |

### Greek/Latin cognates (≃) (50)

| Lemma | P | Hook | Src |
|---|---|---|---|
| pes | P | Σχολικό βιβλίο: pes, pedis ≃ πούς, ποδός ≃ πόδι (ίδια ρίζα) → pedal, pedestrian. | textbook,wikt |
| oculus |  | Σχολικό βιβλίο: oculus ≃ μάτι· ίδια ρίζα με το ομηρικό ὄσσε (τα μάτια) → ocular, binoculars. | textbook,wikt |
| mensis | P | Σχολικό βιβλίο: mensis ≃ μήν, μήνας (ίδια ρίζα). | textbook,wikt |
| viginti | P | Σχολικό βιβλίο: viginti ≃ είκοσι. | textbook,wikt |
| tertius | P | Σχολικό βιβλίο: tertius ≃ τρίτος. | textbook,wikt |
| mater | P | Σχολικό βιβλίο: mater ≃ μήτηρ (και pater ≃ πατήρ, frater ≃ φράτηρ). | textbook,wikt |
| pater | P | pater ≃ πατήρ: ίδια ρίζα (patriot, πατριώτης). | textbook,wikt |
| frater | P | frater ≃ φράτηρ (μέλος φρατρίας): αδελφός. | textbook,wikt |
| gravis | P | Σχολικό βιβλίο: gravis ≃ βαρύς (και «βαρεία» = accent grave). | textbook,wikt |
| gigno | P | Σχολικό βιβλίο: gigno (γεννώ), nascor ≃ γίγνομαι, γεννώ. | textbook,wikt |
| nosco |  | Σχολικό βιβλίο: (g)nosco ≃ γιγνώσκω: cognosco ~ γιγνώσκω, ignoro. | textbook,wikt |
| iugum | P | Σχολικό βιβλίο: iugum ≃ ζυγός, coniunx ≃ σύζυγος: ίδια ρίζα (conjugate). | textbook,wikt |
| dexter | P | Σχολικό βιβλίο: dexter ≃ δεξιός. | textbook,wikt |
| augeo | P | Σχολικό βιβλίο: augeo ≃ αὐξάνω (Augustus = ο «αυξάνων, σεβαστός»). | textbook,wikt |
| novus | P | novus ≃ νέος: novice, nova. | textbook,wikt |
| nomen | P | nomen ≃ όνομα (ίδια ρίζα): nominate, ανώνυμος. | textbook,wikt |
| ego | P | ego ≃ ἐγώ: egoism ↔ εγωισμός. | textbook,wikt |
| duo | P | duo ≃ δύο (ίδια ρίζα): duet, dual, duel. | textbook,wikt |
| tres | P | tres ≃ τρεις: trio, tri-, trident. | textbook,wikt |
| septem | P | septem ≃ επτά· δες και Septem-ber (ο 7ος μήνας). | textbook,wikt |
| octo | P | octo ≃ οκτώ· δες και Octo-ber (ο 8ος μήνας), octave. | textbook,wikt |
| decem | P | decem ≃ δέκα· δες και Decem-ber (ο 10ος μήνας), decimal. | textbook,wikt |
| centum | P | centum ≃ εκατό: century, cent, percent. | textbook,wikt |
| sum | P | sum ≃ εἰμί: esse ~ ειμί. | textbook,wikt |
| fero | P | fero ≃ φέρω. | textbook,wikt |
| ager | P | ager ≃ αγρός: agriculture ↔ αγροτικός. | textbook,wikt |
| nox | P | nox ≃ νύξ, νύχτα. | textbook,wikt |
| sol | P | sol ≃ ήλιος. | textbook,wikt |
| dens | P | dens ≃ οδούς, δόντι. | textbook,wikt |
| cor | P | cor ≃ καρδιά: cordial ↔ καρδιακός. | textbook,wikt |
| equus | P | equus ≃ ἵππος: equestrian ↔ ιππικός. | textbook,wikt |
| lupus | P | lupus ≃ λύκος. | textbook,wikt |
| bos | P | bos ≃ βους, βόδι. | textbook,wikt |
| domus | P | domus ≃ δόμος: domestic ↔ οικοδομή. | textbook,wikt |
| sedeo | P | sedeo ≃ ἕδρα, ἕζομαι: president ↔ πρόεδρος. | textbook,wikt |
| video |  | video ≃ εἶδον (Fιδεῖν): idea, είδος. | textbook,wikt |
| ovum | P | ovum ≃ ωό, αυγό. | textbook,wikt |
| fugio | P | fugio ≃ φεύγω. | textbook,wikt |
| vox | P | vox ≃ ὄψ (ομηρική λέξη για τη φωνή): voice, vocal. | textbook,wikt |
| numerus |  | numerus ≃ νέμω (μοιράζω): νόμος, number. | textbook,wikt |
| senex | P | senex ≃ ἕνος (παλιός): senior, senate. | textbook,wikt |
| vetus |  | vetus ≃ ἔτος (έτος=χρόνος): veteran ↔ βετεράνος. | textbook,wikt |
| genus | P | genus ≃ γένος: gender, genre. | textbook,wikt |
| tego | P | tego ≃ στέγω (σκεπάζω): protect, στέγη, toga. | textbook,wikt |
| ruber | P | ruber ≃ ἐρυθρός (κόκκινος): Ερυθρά Θάλασσα, Ερυθραία, ruby, rubric. | textbook,wikt |
| ferus | P | ferus ≃ θήρ: ferocious, θηρίο. | textbook,wikt |
| fumus | P | fumus ≃ θυμός (καπνός/πνοή): fume, perfume. | textbook,wikt |
| foris | P | foris / fores (θύρα) ≃ θύρα: foreign. | textbook,wikt |
| anser | P | anser ≃ χήν (χήνα). | textbook,wikt |
| mus | P | mus ≃ μῦς (ποντίκι και μυς!): musculus = «ποντικάκι» → muscle. | textbook,wikt |

### Grammar terms (Latin ← Greek) (22)

| Lemma | P | Hook | Src |
|---|---|---|---|
| casus |  | casus (πτώση) ← cadere «πέφτω»: μετάφραση του ελληνικού πτῶσις· όλες οι άλλες πτώσεις «έπεσαν» από την ονομαστική. | wikt |
| accusativus | P | accusativus (αιτιατική): λάθος μετάφραση! Το ελληνικό αἰτιατική σημαίνει «του αποτελέσματος/αιτίου», όχι «αυτή που κατηγορεί» (accusare). | wikt |
| dativus | P | dativus (δοτική) ← do, dare «δίνω»: μετάφραση του δοτική. | wikt |
| genetivus | P | genetivus (γενική) ← gigno «γεννώ»: μετάφραση του ελληνικού γενική. | wikt |
| nominativus | P | nominativus (ονομαστική) ← nomino «ονομάζω»: μετάφραση του ονομαστική. | wikt |
| vocativus | P | vocativus (κλητική) ← voco «καλώ»: μετάφραση του κλητική. | wikt |
| ablativus | P | ablativus (αφαιρετική) ← ablatus «αυτός που αφαιρέθηκε/μεταφέρθηκε μακριά» (auferre). Ελληνικό αντίστοιχο δεν υπάρχει: οι χρήσεις της μοιράζονται σε γενική και δοτική. | wikt |
| participium | P | participium (μετοχή) ← pars + capere: «παίρνει μέρος» (μετέχει) στο ρήμα και στο όνομα· μετάφραση του μετοχή. | wikt |
| coniugatio | P | coniugatio (συζυγία) ← con + iugum: «ζεύω μαζί»· μετάφραση του συζυγία (ζυγός, ζεύγος). | wikt |
| pronomen | P | pronomen (αντωνυμία) = pro + nomen: «στη θέση του ονόματος»· μετάφραση του αντωνυμία. | wikt |
| praepositio | P | praepositio (πρόθεση) ← praeponere «τοποθετώ μπροστά»: μετάφραση του πρόθεσις. | wikt |
| adverbium | P | adverbium (επίρρημα) = ad + verbum «πλάι στο ρήμα»: πιθανή μετάφραση του ἐπίρρημα. | wikt |
| subiunctivus | P | subiunctivus (υποτακτική) ← subiungere «ενώνω από κάτω, υποτάσσω»: μετάφραση του υποτακτική. | wikt |
| indicativus | P | indicativus (οριστική) ← indicare «δείχνω»: μετάφραση του οριστική. | wikt |
| passivus | P | passivus (παθητική) ← pati «πάσχω»: μετάφραση του παθητική (πάθος). | wikt |
| activus | P | activus (ενεργητική) ← agere «ενεργώ»: μετάφραση του ενεργητική. | wikt |
| verbum |  | verbum = «λέξη»· στη γραμματική σημαίνει ρήμα, μετάφραση του ελληνικού ῥῆμα. | wikt |
| nomen |  | nomen = «όνομα»· στη γραμματική σημαίνει και ουσιαστικό (μετάφραση του ὄνομα). Συγγενές με το ελληνικό όνομα. | wikt |
| articulus | P | articulus (άρθρο) ← artus «άρθρωση, κόμπος»: μετάφραση του ἄρθρον. | wikt |
| adiectivum | P | adiectivum (επίθετο) = «αυτό που προστίθεται»: μετάφραση του ὄνομα ἐπίθετον. | wikt |
| gerundium | P | gerundium (γερούνδιο) ← gerendus «αυτό που πρέπει να κάνει/φέρει» (gerere). | wikt |
| infinitivus | P | infinitivus (απαρέμφατο) ← infinitus «απεριόριστος»: ο τύπος που δεν δηλώνει πρόσωπο και αριθμό. | wikt |

### English derivatives (307)

| Lemma | P | Hook | Src |
|---|---|---|---|
| rex |  | regal = βασιλικός: rex, regis → regal, και ο T. Rex (Tyrannosaurus Rex = ο «τύραννος-βασιλιάς»). | wikt |
| lex | P | lex, legis → legal, legislate, legitimate: ο νόμος φαίνεται σε κάθε αμερικάνικη σειρά δικαστηρίου. | wikt |
| pax | P | pax → pacify (ειρηνεύω) και Pax Romana: η «Ρωμαϊκή Ειρήνη» στην αυτοκρατορία. | wikt |
| bellum | P | re-bellare: όποιος ξαναπολεμά είναι rebel. Και antebellum = πριν τον πόλεμο. | wikt |
| bellum |  | bellum + gerere (διεξάγω) = belligerent, ο εμπόλεμος. | wikt |
| urbs | P | urbs → urban και suburb (sub + urbs = προάστιο). | wikt |
| civis | P | civis → civil, city: ο πολίτης και η πόλη (civitas) έχουν την ίδια ρίζα. | wikt |
| homo |  | homo + caedere = homicide (ανθρωποκτονία). Και Homo sapiens = ο «σοφός άνθρωπος». | wikt |
| vir | P | vir → virile, και virtus (αρετή). Το triumvirate είναι το «τρεις άνδρες» (tres viri). | wikt |
| femina | P | femina → feminine, feminism. | wikt |
| puer | P | puer (παιδί) → puerile = παιδιάστικος. | wikt |
| pater |  | pater → paternal, patriot. Pater noster = «Πάτερ ημών». | wikt |
| mater |  | mater → maternal, maternity. Alma Mater = «τροφός μητέρα» (το πανεπιστήμιο σου). | wikt |
| frater |  | frater → fraternity, fratricide, friar (ο αδελφός μοναχός). | wikt |
| soror | P | soror → sorority = σύλλογος «αδελφών» φοιτητριών (και sister). | wikt |
| filius | P | filius → filial, affiliate (affiliare = υιοθετώ). | wikt |
| domus |  | domus → domestic, dome (ιταλ. duomo ← domus ecclesiae = «σπίτι της εκκλησίας»). Συγγενές με το ελληνικό δόμος. | wikt |
| amicus | P | amicus → amicable, και το ισπανικό amigo. | wikt |
| hostis | P | hostis (εχθρός) → hostile. Ο hospes (ξένος/οικοδεσπότης) έδωσε host και hospital. | wikt |
| miles |  | miles, militis → military, militia. | wikt |
| imperator |  | imperator → emperor, imperial: ο αυτοκράτορας ήταν πρώτα ο «αρχιστράτηγος». | wikt |
| dux |  | dux → duke, και ducere → conduct, educate. | wikt |
| populus |  | populus → popular, people, population. Vox populi = η φωνή του λαού. | wikt |
| senatus | P | senatus ← senex (γέροντας): η Σύγκλητος ήταν το «συμβούλιο των γερόντων». Senile = γεροντικός. | wikt |
| castra |  | castra (στρατόπεδο) → οι καταλήξεις -chester/-caster σε αγγλικά τοπωνύμια (Chester, Lancaster, Manchester) ← παλ. αγγλικό ceaster ← castra. | wikt |
| pugna |  | pugna (μάχη) → pugnacious = καυγατζής, και pugnus (γροθιά) → pugilist. | wikt |
| arma |  | arma (όπλα) → arms, army, armadillo (= «ο θωρακισμένος»). | wikt |
| gladius |  | gladius (ξίφος) → gladiator = «ξιφομάχος»; το gladiolus (γλαδιόλα) είναι το «μικρό σπαθί». | wikt |
| murus |  | murus (τείχος) → mural (τοιχογραφία), immure. | wikt |
| via | P | via (δρόμος) → viaduct, deviate (αποκλίνω), trivia (tres viae: το σταυροδρόμι!). | wikt |
| via |  | trivia = tri + via: το τρίστρατο όπου οι Ρωμαίοι έλεγαν τα νέα του δρόμου. | wikt |
| iter | P | iter, itineris → itinerary = δρομολόγιο. | wikt |
| pons | P | pons, pontis (γέφυρα) → pontoon (πλωτή γέφυρα). | wikt |
| mare | P | mare → marine, maritime, ultramarine. Mare Nostrum = η Μεσόγειος των Ρωμαίων. | wikt |
| terra | P | terra → territory, terrace, terra firma, και Mediterranean = medi(us) + terra. | wikt |
| terra |  | Mediterranean = medius + terra: «μέσα στη γη», η θάλασσα ανάμεσα στις στεριές. | wikt |
| mons | P | mons → mountain, mount, Montenegro (= Μαυροβούνιο!). | wikt |
| silva | P | Pennsylvania = «τα δάση του Penn» (silva = δάσος). Και Transylvania = trans + silva = «πέρα από το δάσος». | wiki |
| silva |  | Transylvania (η πατρίδα του Δράκουλα) = trans + silvam: «πέρα από τα δάση». | wiki |
| ager |  | ager (χωράφι) + colere (καλλιεργώ) = agriculture = γεωργία. | wikt |
| ager |  | per + ager («πέρα από τους αγρούς, στο εξωτερικό») → peregrinus (ξένος) → pilgrim, peregrine falcon· ager → agriculture. | wikt |
| insula | P | insula (νησί) → peninsula (paene + insula = χερσόνησος), isolate. ΠΡΟΣΟΧΗ: το english island ΔΕΝ προέρχεται από insula! | wikt |
| navis | P | navis → navy, naval, navigate (navis + agere = κυβερνώ πλοίο). | wikt |
| portus |  | portus (λιμάνι) → port, opportune (opportunus = ob + portus: ο άνεμος που φέρνει στο λιμάνι), Portugal (Portus Cale). | wikt |
| templum |  | templum → temple, contemplate. | wikt |
| deus | P | deus → deity, και Deus ex machina = ο «θεός από μηχανής» (λατινική μετάφραση του ελληνικού θεός από μηχανής). | wikt |
| Iuppiter | P | Iuppiter (Jove) → jovial (χαρούμενος, όπως όσοι γεννιούνται υπό τον Δία) και Jupiter. | wikt |
| mors | P | mors, mortis → mortal, mortgage («νεκρός όρκος»), memento mori. | wikt |
| corpus | P | corpus → corpse, corps, incorporate, και Habeas corpus. | wikt |
| caput | P | caput (κεφάλι) → capital, captain, decapitate, chapter, chef = αρχηγός. | wikt |
| manus | P | manus (χέρι) + scribere = manuscript, manual, manufacture (στην αρχή = φτιαγμένο με το χέρι). | wikt |
| manus |  | manus + cura (φροντίδα) = manicure: φροντίδα των χεριών. | wikt |
| pes |  | pes, pedis → pedal, pedestrian (ο πεζός), pedicure, quadruped. | wikt |
| cor |  | cor, cordis (καρδιά) ~ καρδιά → cordial, courage, record (re + cor = «φέρνω ξανά στην καρδιά, στη μνήμη»). | wikt |
| os | P | os, oris (στόμα) → oral, orator, oracle (το χρησμοδοτικό στόμα). | wikt |
| dens |  | dens, dentis → dentist, dental, trident (tres + dens), indent, dandelion (dent de lion = δόντι λιονταριού). | wikt |
| lingua | P | lingua → language, linguist, bilingual, lingo. | wikt |
| nomen |  | nomen → nominate, nominative (ονομαστική), nom de plume. Συγγενές με το όνομα. | wikt |
| verbum |  | verbum → verb, adverb, verbose, proverb. Στη γραμματική: ρήμα = verb. | wikt |
| vox |  | vox, vocis → voice, vocal, vowel (vocalis = φωνήεν), vox populi. | wikt |
| littera | P | littera → letter, literal, literature, alliteration. | wikt |
| libertas | P | liber (ελεύθερος) → liberty, liberal, liberate, Liberia (η χώρα των ελεύθερων σκλάβων). | wikt |
| liber |  | liber (βιβλίο, φλοιός δέντρου) → library (βιβλιοθήκη), libretto. | wikt |
| scribo | P | scribere → describe, prescribe, subscribe, scripture, scribble. | wikt |
| lego | P | legere (διαβάζω, διαλέγω) → lecture (= «αυτό που διαβάζεται»), legend, lesson, college, elect, intellect. | wikt |
| carmen | P | carmen (τραγούδι, ξόρκι) → charm: το γοητευτικό ξόρκι. Και Carmina Burana. | wikt |
| fabula | P | fabula → fable, fabulous: ο μύθος, κάτι «παραμυθένιο». | wikt |
| tempus |  | tempus = χρόνος: το tense της γραμματικής και το tempo της μουσικής. Tempus fugit = ο χρόνος φεύγει. | wikt |
| dies | P | dies → diary (ημερολόγιο), journal (diurnalis), meridian (medius + dies = μεσημέρι). | wikt |
| annus | P | annus → annual, anniversary (annus + vertere), annals, perennial. | wikt |
| lux | P | lux, lucis (φως) → lucid, elucidate, translucent, Lucifer = lux + ferre = Εωσφόρος/Φωσφόρος. | wikt |
| hora | P | hora = ώρα (ελληνική λέξη που πέρασε στα λατινικά): horoscope = hora + skopos. | wikt |
| mensis |  | semester = sex + mensis = εξάμηνο (6 μήνες). Και menstrual. | wikt |
| sol |  | sol → solar, solstice (sol + sistere = «ο ήλιος στέκεται»), parasol (ιταλ. parare «προστατεύω» + sole). | wikt |
| luna | P | luna → lunar, lunatic (επηρεασμένος από το φεγγάρι). Γαλλικά: lundi = Δευτέρα (Lunae dies). | wikt |
| stella | P | stella → stellar, constellation (con + stella = αστερισμός), Stella Artois. | wikt |
| caelum | P | caelum → celestial, και ουρανός στα ιταλικά: cielo. | wikt |
| ventus | P | ventus → ventilate, ventilator (ανεμιστήρας), vent. | wikt |
| aqua |  | aqua → aquarium (ενυδρείο), aquatic, aqueduct (aqua + ducere = υδραγωγείο). | wikt |
| ignis | P | ignis → ignite, ignition (ανάφλεξη), igneous. | wikt |
| arbor |  | arbor (δέντρο) → arboretum (δενδροκήπιο), Arbor Day. | wikt |
| flos | P | flos, floris → flower, flourish, Florence (Florentia), florist. | wikt |
| equus |  | equus → equestrian (ιππικός), equine. | wikt |
| canis | P | canis → canine (κυνόδοντας). Τα Κανάρια Νησιά ίσως πήραν το όνομα από τους σκύλους (Canaria). | wikt |
| avis | P | avis (πουλί) → aviation (αεροπορία), aviary (πτηνοτροφείο), aviator. | wikt |
| piscis |  | piscis → Pisces (Ιχθύες). Τα λατινικά ονόματα των ζωδίων είναι μεταφράσεις των ελληνικών: Aries = Κριός, Virgo = Παρθένος, Libra = Ζυγός, Cancer = Καρκίνος, Pisces = Ιχθύες. | wikt |
| taurus | P | taurus → Taurus (Ταύρος) και Minotaur (Μινώταυρος). | wikt |
| aries | P | aries (κριός) → Aries (Κριός) και το battering ram = aries (πολιορκητικός κριός). | wikt |
| leo | P | leo (< ελληνικό λέων) → lion, Leo (ζώδιο Λέων). | wikt |
| bos |  | bos, bovis → bovine. Βόσπορος = βοός πόρος (ελληνικά): «πέρασμα του βοδιού». | wikt |
| animal | P | animal ← anima (ψυχή, πνοή): animate = δίνω ψυχή, animation. | wikt |
| pecunia | P | pecunia (χρήμα) ← pecus (κοπάδι): το χρήμα βγήκε από τα ζώα! Pecuniary = χρηματικός, impecunious = άφραγκος. | wikt |
| cuprum | P | Cu = cuprum ← Cyprium (aes): «ο χαλκός της Κύπρου». Copper ← Κύπρος! | wiki |
| pretium | P | pretium (τιμή) → price, precious, appreciate, praise. | wikt |
| mercator |  | mercator (έμπορος): ίδια οικογένεια με merx, mercari (εμπορεύομαι) → merchant, commerce, Mercury (ο θεός των εμπόρων). | wikt |
| iustitia | P | iustitia → justice, justify; το άγαλμα της Δικαιοσύνης με τη ζυγαριά. | wikt |
| virtus |  | virtus (αρετή) ← vir → virtue, virtuoso. | wikt |
| gloria | P | gloria → glory, glorious, Gloria in excelsis Deo. | wikt |
| honor |  | honor → honor, honorary, honorable. Στη Ρώμη, cursus honorum = η πολιτική σταδιοδρομία. | wikt |
| fama | P | fama → fame, famous, infamous. Συγγενές με το φήμη (φημί). | wikt |
| fortuna |  | fortuna → fortune, fortunate, unfortunately. | wikt |
| spes | P | spes (ελπίδα) → desperate, despair = de + sperare (χάνω την ελπίδα), prosper. | wikt |
| ratio | P | ratio (λογαριασμός, λογική) → rational, ration, reason, ratio. | wikt |
| res |  | res publica = «το κοινό πράγμα» → republic, real, reality. | wikt |
| causa | P | causa → cause, because (by + cause), excuse (ex + causa), accuse. | wikt |
| ars | P | ars, artis → art, artist, artisan, artifact (arte + factum). | wikt |
| scientia | P | scientia ← scire → science, conscience, omniscient. | wikt |
| sapientia | P | sapere (γεύομαι, σκέφτομαι) → sapient, Homo sapiens (ο σοφός άνθρωπος). Sapientia = Σοφία (Αγία Σοφία). | wikt |
| natura |  | natura ← nasci → nature, native, nation, innate, naive (nativus = φυσικός), Renaissance = Αναγέννηση. | wikt |
| ordo | P | ordo, ordinis → order, ordinary, ordinal, Novus Ordo Seclorum (στο δολάριο). | wikt |
| locus | P | locus (τόπος) → local, location, locomotive, lieu: lieutenant = lieu + tenant = «αυτός που κρατά τη θέση» (του αρχηγού). | wikt |
| labor | P | labor → laboratory (εργαστήριο), collaborate, elaborate. | wikt |
| otium | P | neg-otium = nec + otium, «μη-σχόλη» (ίσως μετάφραση του ελληνικού ἀσχολία = ἀ-σχολία): η δουλειά! → negotiate, negotiation. | wikt |
| ludus | P | ludus = παιχνίδι ΚΑΙ σχολείο: ludicrous, prelude, interlude, illusion, delude. Και το Ludo! | wikt |
| schola | P | schola ← ελληνικό σχολή (= σχόλη, ελεύθερος χρόνος): school, scholar. Βούμερανγκ από τα ελληνικά! | wikt |
| discipulus | P | discipulus → disciple, discipline. | wikt |
| consilium | P | consilium → counsel, counsellor (ενώ το council ← concilium!). | wikt |
| amo |  | amare → amateur (ο εραστής, αυτός που αγαπά κάτι), amorous, amiable. | wikt |
| voco | P | vocare → vocation, advocate, invoke, provoke, revoke, vocabulary. | wikt |
| do | P | datum (το δεδομένο) = «αυτό που δόθηκε» ← dare: data = τα δεδομένα. Και dative = δοτική, donate, add (ad + dare). | wikt |
| sto | P | stare → status, state, station, stable, statue, constant, distance. Status quo = η κατάσταση όπως είναι. | wikt |
| porto | P | portare → transport (trans + portare = μεταφέρω), import, export, report, support, portable. | wikt |
| clamo | P | clamare → exclaim, proclaim, claim, clamor, acclaim. | wikt |
| rogo | P | rogare (ρωτώ) → interrogate (inter + rogare = ανακρίνω), arrogant, prerogative, abrogate. | wikt |
| narro | P | narrare → narrate, narrator, narrative. | wikt |
| curo |  | securus = sine cura (χωρίς έγνοια) → secure, σίγουρος, manicure, pedicure, sinecure, accurate, curious, curator. | wikt |
| servo | P | servare → preserve (προφυλάσσω), conserve, reserve, observe, conservatory. | wikt |
| specto | P | spectare → spectator, spectacle, inspect, respect, prospect, suspect, aspect. | wikt |
| habeo | P | habere → habit (ό,τι έχω ως συνήθεια), habitat, inhabit, exhibit, prohibit, debt (debitum = de + habere). | wikt |
| moneo | P | monere (θυμίζω, προειδοποιώ) → monitor, monument, admonish, summon, premonition, monster (monstrum = κακός οιωνός). | wikt |
| teneo | P | tenere → tenant, tenacious, content, continent, maintain, lieutenant, tennis (< Old French tenez = «κράτα!»). | wikt |
| timeo | P | timere → timid, timorous, intimidate. | wikt |
| taceo | P | tacere (σιωπώ) → tacit, taciturn, reticent. | wikt |
| maneo | P | manere (μένω) → remain, permanent, mansion, manor. Συγγενές με το ελληνικό μένω. | wikt |
| sedeo |  | sedere (κάθομαι) → president (prae + sedere = κάθομαι μπροστά), preside, reside, session, siege, assess, possess. | wikt |
| debeo | P | debere → debt, debit, due, duty, endeavour. | wikt |
| moveo |  | movere → mobile (κινητό!), motion, motor, emotion, remove, promote, moment, mob. | wikt |
| rego |  | regere → direct, correct, regent, regime, region, rule (regula), rector. | wikt |
| dico |  | dicere → verdict (veredictum = αληθινά ειπωμένο), dictate, dictionary, edict, predict, contradict. | wikt |
| duco | P | ducere (οδηγώ) → educate (e + ducere = «βγάζω έξω»), conduct, produce, reduce, introduce, aqueduct, viaduct, duke, Duce. | wikt |
| mitto |  | mittere (στέλνω) → mission, missile, promise (pro + mittere), permit, submit, transmit, message. | wikt |
| mitto |  | Η Θεία Λειτουργία Mass ← missa: «Ite, missa est» («πηγαίνετε, η απόλυση έγινε»). missa ← mittere. | wikt |
| cado |  | cadere (πέφτω) → case: casus = «πτώση» (μετάφραση του ελληνικού πτώσις, γραμματική) · accident, decay, cadence. | wikt |
| cedo | P | cedere (πηγαίνω, υποχωρώ) → proceed, process, success, exceed, precede, concede, recede, access, ancestor. | wikt |
| credo | P | credere (πιστεύω, εμπιστεύομαι) → credit (πίστωση!), credible, creed, credentials, miscreant. | wikt |
| curro |  | currere (τρέχω) → cursor (ο δείκτης του ποντικιού = ο «δρομέας»), current, currency, curriculum (CV: curriculum vitae = «τρέξιμο της ζωής»). | wikt |
| defendo | P | defendere → defend, defense, offend, fence (< defence). | wikt |
| pono | P | ponere (τοποθετώ) → position, compose, expose, impose, propose, postpone (post + ponere), preposition (πρόθεση!). | wikt |
| peto | P | petere (επιδιώκω) → compete, petition, appetite, repeat, impetus, centripetal (= κεντρομόλος: centrum + petere). | wikt |
| quaero | P | quaerere (ζητώ, ρωτώ) → question, query, inquire, acquire, require, request, quest, exquisite. | wikt |
| relinquo | P | relinquere → relinquish, relic, delinquent, derelict. | wikt |
| sumo | P | sumere (παίρνω) → consume, assume, presume, resume, résumé (το βιογραφικό στις ΗΠΑ). | wikt |
| tango | P | tangere (αγγίζω) → contact (con + tangere), tangent (εφαπτομένη!), tangible, intact, integer. | wikt |
| trado | P | tradere (παραδίδω) → tradition, traitor (αυτός που παραδίδει τον φίλο, όπως ο Ιούδας), extradition, betray. | wikt |
| capio | P | capere (παίρνω) → capture, accept, concept, receive, recipe (recipe = «πάρε!», προστακτική), anticipate. | wikt |
| facio | P | facere (κάνω) → factory, fact, effect, perfect, office (opus + facere), benefit, sacrifice, manufacture. | wikt |
| facio |  | sacrificium = sacrum + facere = «κάνω ιερό», θυσία. | wikt |
| fugio |  | fugere (φεύγω) → refuge, refugee, fugitive, centrifuge (κεντρόφυγος), fugue. Tempus fugit. | wikt |
| iacio | P | iacere (ρίχνω) → project, reject, inject, eject, subject, object, trajectory, jet. Alea iacta est: «ο κύβος ερρίφθη». | wikt |
| rapio | P | rapere (αρπάζω) → rapid, rapture, rapacious, raptor: Velociraptor = velox + raptor = «γρήγορος ληστής». | wiki |
| cupio | P | cupere (επιθυμώ) → Cupid(o) = «ο πόθος» (Έρως), cupidity. | wikt |
| audio | P | audire → audio, audience, audit, auditorium, obey (ob + audire = υπακούω). | wikt |
| venio | P | venire (έρχομαι) → event (e + venire), advent, adventure, avenue, convene, invent, prevent, souvenir. | wikt |
| sentio | P | sentire (αισθάνομαι) → sense, sentiment, sentence, consent, dissent, scent. | wikt |
| scio | P | scire (ξέρω) → science, conscience, omniscient. Το nice < nescius = «αυτός που δεν ξέρει»! | wikt |
| dormio | P | dormire → dormitory, dorm, dormant. | wikt |
| sum |  | esse (είμαι) → present (prae + esse = αυτός που είναι μπροστά), absent (ab + esse), essence, interest. | wikt |
| possum | P | posse (μπορώ) = potis + esse → possible, potent, potential, power, impossible. Wild West: posse = ομάδα ένοπλων. | wikt |
| eo | P | ire (πηγαίνω) → exit (= «βγαίνει», ρήμα!), transit, initial, circuit, ambition (ambire = κάνω ανοιχτή προεκλογική εκστρατεία). | wikt |
| fero |  | ferre (φέρνω) ~ ελληνικό φέρω: transfer = μεταφέρω, refer = αναφέρω, differ = διαφέρω, offer = προσφέρω, confer = συμφέρω. | wikt |
| volo | P | velle (θέλω) → voluntary, volunteer, benevolent (bene + velle), volition. | wikt |
| intellego | P | intelligere = inter + legere = «διαλέγω ανάμεσα» → intelligent, intellect, intelligence. | wikt |
| puto | P | computer ← computare = com + putare: «λογαριάζω μαζί» (υπολογιστής!). | wikt |
| loquor | P | loqui (μιλώ) → eloquent, soliloquy (solus + loqui), colloquial, ventriloquist (venter + loqui = «μιλώ από την κοιλιά»). | wikt |
| sequor | P | sequi (ακολουθώ) → sequel, sequence, consequence, persecute, pursue, second (secundus = ο «επόμενος»). Non sequitur = «δεν προκύπτει». | wikt |
| utor | P | uti (χρησιμοποιώ) → use, utility, usual, abuse, utensil. | wikt |
| patior |  | pati (πάσχω) → patient, passion, passive (= παθητική), compassion (com + pati, όπως το συν-πάθεια). | wikt |
| nascor | P | nasci (γεννιέμαι) → nature, nation, native, naive, cognate, natal, Renaissance (= Αναγέννηση: re + nasci). | wikt |
| bonus |  | bonus (καλός) → bonus!, bonbon («καλό-καλό»), benefit (bene). Bon appétit, bueno. | wikt |
| malus | P | malus → malice, malady, malign και malaria (ιταλικά mal'aria = «κακός αέρας»). | wikt |
| magnus | P | magnus → magnify, magnitude, magnate, Magna Carta, Charlemagne (Carolus Magnus), Magnum. | wikt |
| longus | P | longus → long, longitude (γεωγραφικό μήκος), elongate, prolong. | wikt |
| altus | P | altus → altitude (υψόμετρο), alto, exalt, altar. | wikt |
| novus |  | novus → new, novel, novice, renovate, innovate, nova, Nova Scotia. Συγγενές με το νέος. | wikt |
| omnis | P | BUS ← omnibus = «για όλους» (δοτική πληθυντικού!). omnis → omniscient, omnivore, omnipotent. | wikt |
| fortis |  | fortis → fort, fortify, fortitude, comfort, effort, forte (μουσική: δυνατά!). | wikt |
| brevis | P | brevis → brief, abbreviate, brevity. Vita brevis. | wikt |
| gravis |  | gravis (βαρύς) ~ ελληνικό βαρύς: gravity, grave, grief, aggravate. Ο grave accent (`) λέγεται βαρεία. | wikt |
| facilis | P | facilis (εύκολος) ← facere → facile, facility, facilitate, faculty. Difficult = dis + facilis. | wikt |
| humilis | P | humilis ← humus (έδαφος, χώμα) → humble, humility, humiliate. | wikt |
| nobilis | P | nobilis ← (g)noscere = «γνωστός/φημισμένος» → noble, nobility, ignoble. | wikt |
| civilis | P | civilis → civil, civilization, civic, civilian. | wikt |
| publicus | P | publicus ← populus → public, publish, republic, pub (< public house!). | wikt |
| ultimus | P | ultimus → ultimate, ultimatum. Στο λατινικό τονισμό: paene ultima (paenultima) = η παραλήγουσα! | wikt |
| optimus |  | optimus (άριστος) → optimal, optimum, optimism = αισιοδοξία. | wikt |
| minimus | P | minus/minor → minister (= ο «μικρότερος», υπηρέτης, αντίθετο του magister), minute, minus, diminish. | wikt |
| unus | P | unus → unit, unite, union, unique, unicorn (unus + cornu = μονόκερως, ελληνικό μονόκερως), universe. | wikt |
| duo |  | duo → duet, dual, double. Το bellum ήταν κάποτε duellum (πόλεμος δύο πλευρών) → duel. | wikt |
| tres |  | tres → trio, triple, trinity, trident (tres + dens), triumvirate, trivia. | wikt |
| quinque | P | quinque → quintet, quintessence (quinta essentia = η «πέμπτη ουσία» του Αριστοτέλη, ο αιθέρας). | wikt |
| sex | P | sex → sextet, sextant, semester (sex + mensis = εξάμηνο). | wikt |
| sine | P | sine cura = «χωρίς φροντίδα»: sinecure = δουλειά χωρίς κόπο. Sine qua non = «άνευ του οποίου ουδέν». | wikt |
| contra | P | contra (απέναντι) → contrary, contradict, counter, country (contrata terra = «η χώρα που απλώνεται απέναντι»). | wikt |
| inter | P | inter (ανάμεσα) → interval, international, intermission. Internet = inter + network. | wikt |
| trans | P | trans (πέρα) → transport, translate, transit, transfer, Transylvania. | wiki |
| circum | P | circum (γύρω) → circle, circumference, circumstance, circa (c.). Η λέξη circus είναι λατινική και προέρχεται από το ελληνικό κίρκος/κρίκος (δαχτυλίδι). | wikt |
| super | P | super → supreme, superior, supermarket, soprano (ιταλικά < supra), sovereign. | wikt |
| sub | P | sub (κάτω από) → suburb (sub + urbs), submarine, subway, subject, substitute. | wikt |
| ubi | P | ubi (πού) → ubiquitous («παντού»), ubique, ibidem (ibid.). | wikt |
| ego |  | ego = «εγώ» (ελληνικό εγώ!) → egoism (εγωισμός), alter ego, ego (Φρόιντ). | wikt |
| suus | P | sui + caedere = suicide («σκοτώνω τον εαυτό μου»). sui generis = «μοναδικός στο είδος του». | wikt |
| alius | P | alius + ibi = alibi «αλλού» → άλλοθι (ελληνικά!), alias, alien. | wikt |
| idem | P | idem (ο ίδιος) → identical, identity, ID. | wikt |
| nihil | P | nihil (τίποτα) → nihilism, annihilate, ex nihilo. | wikt |
| nullus | P | nullus (κανένας) → null, nullify, annul. | wikt |
| solus |  | solus (μόνος) → solo, sole, solitude, desolate, soliloquy. | wikt |
| varius | P | varius → various, variety, variable, vary. | wikt |
| sanctus | P | sanctus → saint, sanctuary, sanction. San Francisco = Sanctus Franciscus. | wikt |
| sacer | P | sacer → sacred, sacrament, consecrate, sacrosanct. | wikt |
| hospes | P | hospes (φιλοξενούμενος/οικοδεσπότης) → hospital, hotel, hostel, host. Hospitium → σπίτι. | wikt |
| hostis |  | hostis ήταν πρώτα ο «ξένος» και μετά ο εχθρός· συγγενής με το αγγλικό guest! Και ο hospes (ξένος/οικοδεσπότης) → host, hospital, hotel. | wikt |
| kalendae |  | calendarium (λογιστικό βιβλίο των calendae, όταν πληρώνονταν τόκοι) → calendar. | wikt |
| nuntius | P | nuntius (αγγελιοφόρος) → announce, pronounce, denounce, renounce, nuncio. | wikt |
| rumor | P | rumor (θόρυβος, φήμη) → rumor. | wikt |
| imperium |  | imperium → empire, imperial, imperative (προστακτική!). Imperio (Χάρι Πότερ: Imperius Curse). | wikt |
| provincia | P | provincia → province, provincial. | wikt |
| colonia | P | colonia (αποικία) ← colere. Cologne = Colonia Agrippina! Και colony. | wiki |
| gens | P | gens, gentis (γένος, φυλή) → gentle (από καλό γένος), gentleman, genteel, gentile (ethnic), generous. | wikt |
| genus |  | genus, generis (γένος, είδος) → genre, gender, general, generate, genius. Στη γραμματική: genus = γένος (αρσενικό, θηλυκό, ουδέτερο). | wikt |
| gradus | P | gradus (βήμα) → grade, gradual, graduate, degree (de + gradus), gradient. | wikt |
| gratia | P | gratia (χάρη, ευγνωμοσύνη) → grace, gratitude, gratis, grateful, agree. Στα ισπανικά: gracias. | wikt |
| spiritus | P | spiritus (πνοή) ← spirare → spirit, inspire, expire, respire, conspire (συν + πνέω = «ανασαίνω μαζί»). | wikt |
| cultura | P | colere (καλλιεργώ) → culture (καλλιέργεια!), agriculture, cult, colony, cultivate. | wikt |
| panis | P | panis (ψωμί) → companion = con + panis = «αυτός που τρώει ψωμί μαζί σου», company, pantry. Και Panem (Hunger Games). | wikt |
| vinum | P | vinum (κρασί) → wine, vine, vinegar (vin + aigre = «ξινό κρασί»), vineyard. | wikt |
| caseus | P | caseus (τυρί) → cheese, queso (ισπανικά). | wikt |
| caro | P | caro, carnis (κρέας) → carnivore, carnage, incarnate. | wikt |
| sanguis | P | sanguis (αίμα) → sanguine, consanguinity, sangria (κόκκινο σαν αίμα). | wikt |
| pellis | P | pellis (δέρμα) → pelt, peel. | wikt |
| lapis | P | lapis (πέτρα) → dilapidated (dilapidare = «σκορπίζω σαν πέτρες»: ένα ετοιμόρροπο κτίριο), lapidary, lapis lazuli. | wikt |
| ianua |  | ianua (πόρτα) → janitor (θυρωρός). Ianus (ο θεός των θυρών) → Ianuarius → Ιανουάριος. | wikt |
| vallum | P | vallum (χαράκωμα) → wall. Interval = inter + vallum = «ο χώρος ανάμεσα στους πασσάλους». | wikt |
| culina | P | culina (κουζίνα) → culinary. Και coquina → κουζίνα. | wikt |
| focus | P | focus (εστία, τζάκι!) → focus, focal, foyer: το «κέντρο της προσοχής» ήταν κάποτε το τζάκι. | wikt |
| mensa | P | mensa (τραπέζι) → mensa (εστιατόριο πανεπιστημίου στη Γερμανία), commensal. | wikt |
| cicer | P | Ο Cicero πήρε το όνομα από τον ρεβίθι (cicer)! Τα ρωμαϊκά επώνυμα: Fabius (faba), Lentulus (φακή), Piso (μπίζελι). | wikt |
| Roma | P | Roma → Romance (romanice loqui = μιλώ ρωμαϊκά, δηλ. λαϊκά λατινικά) → romance, Romania, Romansh. Roma = amor ανάποδα! | wikt |
| foedus | P | foedus (συνθήκη) ← fides → federal, federation, confederate. | wikt |
| tribus | P | tribus (φυλή) → tribe, tribute (φόρος), contribute, distribute, attribute. | wikt |
| fasces | P | fasces (δεμάτι ράβδων των λικτόρων) → fascism (φασισμός): το σύμβολο της εξουσίας. | wiki |
| dominus | P | dominus (κύριος του σπιτιού, domus) → dominate, domain, dame, madam, Don, dungeon (donjon). | wikt |
| servus |  | servire/servus → serve, service, servant, serf, sergeant, dessert (desservir = «ξεστρώνω το τραπέζι»). | wikt |
| liberi | P | liberi (τα παιδιά) ← liber (ελεύθερος): τα «ελεύθερα» μέλη του οίκου. Liberty, liberal ← liber. | wikt |
| ius | P | iudex = ius + dicere = «αυτός που λέει το δίκαιο» → judge, jury, justice, injury, perjury. | wikt |
| senex |  | senex (γέρος) → senior, senate, senile, sir/señor. | wikt |
| infans | P | infans = in + fari: «αυτός που δεν μιλά» → infant, infantry (νεαροί στρατιώτες, τα infanti). | wikt |
| adulescens | P | adolescere = μεγαλώνω → adolescent, adult (adultus = μεγαλωμένος). | wikt |
| vetus |  | vetus, veteris → veteran, inveterate. | wikt |
| inimicus | P | inimicus = in + amicus: «μη φίλος» → enemy. | wikt |
| gero | P | gerere (φέρω, διεξάγω) → belligerent, gesture, digest, register, suggest, congest. Gerundium = «αυτό που διεξάγεται». | wikt |
| claudo | P | claudere (κλείνω) → close, clause, include, exclude, conclude, cloister. | wikt |
| flecto | P | flectere (λυγίζω) → flexible, reflect, inflection (κλίση: το λύγισμα των λέξεων!). | wikt |
| frango | P | frangere (σπάζω) → fragile, fragment, fraction, fracture, refract, frail. | wikt |
| iungo | P | iungere (ενώνω) → join, junction, conjunction (σύνδεσμος!), conjugate (con + iugare = «ζεύω μαζί» = συζυγία). Συγγενές με ζυγός. | wikt |
| ligo | P | ligare (δένω) → ligament, oblige, alloy, ally, rely, liaison. | wikt |
| metior | P | metiri (μετρώ) → measure, immense, dimension. Συγγενές με το ελληνικό μέτρο. | wikt |
| misceo | P | miscere (αναμειγνύω) → mix, miscellaneous, mixture. | wikt |
| oro | P | orare (μιλώ, προσεύχομαι) → oral, orator, oration, adore, oracle. | wikt |
| pendo | P | pendere (κρεμώ, ζυγίζω) → pendant, pending, depend, suspend, expend, spend, compensate, pension. | wikt |
| plaudo | P | plaudere (χτυπώ παλαμάκια) → applaud, plausible, explode (ex + plaudere = «διώχνω χειροκροτώντας»). | wikt |
| plico | P | plicare (διπλώνω) → apply, complicate, explicit, implicit, reply, employ, display. | wikt |
| premo |  | premere (πιέζω) → press, impress, express, oppress, depress, print. | wikt |
| rumpo | P | rumpere (σπάω) → rupture, corrupt, interrupt, erupt, abrupt, bankrupt (banca rotta = «σπασμένο τραπέζι» του τραπεζίτη). | wikt |
| salio | P | salire (πηδώ) → salient, assault, result, insult, somersault. | wikt |
| sero | P | serere (συνδέω, πλέκω) → insert, assert, desert, series, dissertation. | wikt |
| sisto | P | sistere (στέκομαι) → assist, consist, exist, insist, persist, resist. Συγγενές με το ίστημι. | wikt |
| solvo |  | solvere (λύνω) → solve, solution, resolve, absolve, dissolve, solvent. Στον ύμνο: «Solve polluti labii reatum». | wikt |
| spondeo | P | spondere (υπόσχομαι) → respond, response, sponsor, spouse (η «υποσχεμένη»). | wikt |
| statuo | P | statuere → statute, constitute, institute, substitute, statue. | wikt |
| stringo | P | stringere (σφίγγω) → strict, restrict, constrain, district, stress. | wikt |
| struo | P | struere (χτίζω) → construct, instruct, structure, destroy, industry. | wikt |
| surgo | P | surgere (σηκώνομαι) → surge, resurrect, insurgent, source. | wikt |
| tendo | P | tendere (τεντώνω) → tend, tension, intend, extend, attend, contend, tent. | wikt |
| texo | P | texere (υφαίνω) → text, textile, context (con + textus = «υφασμένο μαζί»), texture. | wikt |
| traho |  | trahere (τραβώ) → tractor, attract, abstract, contract, distract, extract, subtract. | wikt |
| verto |  | vertere (γυρίζω) → convert, reverse, invert, divert, version, vertigo, universe (unus + versus). | wikt |
| vivo | P | vivere (ζω) → survive, vivid, revive, vital. Viva! (ισπανικά): «ας ζήσει». | wikt |
| voveo | P | vovere (τάζω, ορκίζομαι) → vote (votum = όρκος, ευχή), vow, devote, votive. Συγγενές με το ελληνικό εὔχομαι (ευχή). | wikt |
| colo |  | colere (καλλιεργώ, λατρεύω) → culture, cult, colony, agriculture, cultivate. | wikt |
| dolor | P | dolor (πόνος) → condolence, dolorous, Dolores. Lorem ipsum ← dolorem ipsum. | wikt |
| orior | P | oriri (ανατέλλω) → origin, orient (ανατολή = η «ανατέλλουσα»), abort. Occidens/Occident = η Δύση. | wikt |
| vulnus | P | vulnus (πληγή) → vulnerable (τρωτός), vulnerary. | wikt |
| noceo | P | nocere (βλάπτω) → innocent (in + nocens = «που δεν βλάπτει»), noxious, nuisance, obnoxious. | wikt |
| deleo | P | delere (καταστρέφω) → delete (το πλήκτρο Delete), indelible. Carthago delenda est. | wikt |
| copia | P | copia (αφθονία) → copy (αντίγραφο), copious, cornucopia (cornu copiae = κέρας Αμαλθείας). | wikt |
| cornu | P | cornu (κέρας) → unicorn, cornucopia, cornet, capricorn (caper + cornu = «κατσικοκέρατος»). | wikt |
| caper | P | caper (τράγος) + cornu → Capricornus (Αιγόκερως) · caper → capricious, cabriolet. | wikt |
| virgo | P | virgo (κόρη) → Virgo (Παρθένος), virgin, Virginia (πιθανώς προς τιμήν της «Παρθένας Βασίλισσας» Ελισάβετ Α'). | wikt |
| gemini | P | geminus (δίδυμος) → Gemini (Δίδυμοι), geminate, Gemini (πρόγραμμα της NASA). | wikt |
| scorpio | P | scorpio ← ελληνικό σκορπίος → Scorpio (Σκορπιός), scorpion. | wikt |
| sagitta | P | sagitta (βέλος) → Sagittarius (Τοξότης): sagittarius = ο τοξότης. | wikt |
| cancer | P | cancer (καβούρι) → Cancer (Καρκίνος) ζώδιο και ασθένεια (καρκίνος στα ελληνικά: ίδια εικόνα!). | wikt |
| pes |  | pes (πόδι) ~ ελληνικό πούς, ποδός· ίδια ρίζα με foot. Pedal, pedestrian, quadruped. | wikt |
| vestis |  | vestis (ρούχο) → vest, invest (ντύνω με εξουσία), travesty, divest. | wikt |
| praecox | P | praecox / praecoquus = «πρώιμος» → apricot (το «πρώιμο» φρούτο) και precocious (πρόωρος). | wikt |
| civis |  | civis → civil, civic (civicus), civilization, city (civitas): ο πολίτης και η πόλη έχουν την ίδια ρίζα. | wikt |
| lavo | P | lavare (πλένω) → lavatory (πλυντήριο/τουαλέτα), laundry. | wikt |

### Phrases and mottos (62)

| Lemma | P | Hook | Src |
|---|---|---|---|
| dies |  | Carpe diem = «άρπαξε τη μέρα» (Οράτιος). dies → diary, journal, meridian. | wikt |
| lux |  | Fiat lux = «ας γίνει φως» (Γένεση, Βουλγάτα). Στο λατινικό: fiat (fieri) + lux. | wikt |
| canis |  | Cave canem = «πρόσεχε το σκύλο» (ψηφιδωτό στην Πομπηία). Canis → canine (κυνόδοντας). | wiki |
| spes |  | Dum spiro, spero = «όσο αναπνέω, ελπίζω» (παλιό λατινικό γνωμικό· παρόμοια ιδέα έγραψε ο Κικέρων στον Αττικό). spes → desperate, despair. | wiki |
| fides | P | bona fide = «με καλή πίστη» (bonus + fides). fides → fidelity, confide. | wiki |
| ars |  | Ars longa, vita brevis = λατινική μετάφραση του Ιπποκράτη: «ο βίος βραχύς, η δε τέχνη μακρή». | wiki |
| pars |  | Pars pro toto = «το μέρος αντί για το όλον» (συνεκδοχή). pars → part, particle, party, partial. | wikt |
| modus | P | modus operandi (M.O.) = «τρόπος δράσης»: αστυνομικές σειρές. modus → mode, modern, modest, moderate. | wikt |
| laudo | P | Laudato si' = «δοξασμένος να είσαι» (ύμνος του Αγίου Φραγκίσκου). laudare → laud, laudable. | wiki |
| habeo |  | Habeas corpus = «να έχεις το σώμα» (να παρουσιάσεις τον κρατούμενο στο δικαστήριο). | wiki |
| valeo | P | Vale = «γεια σου/στο καλό» (valere = είμαι δυνατός/υγιής): Ave atque vale (Κάτουλλος). Valid, value, Valentine (valens = δυνατός). | wikt |
| vinco |  | Veni, vidi, vici (Καίσαρας, 47 π.Χ.) = «ήρθα, είδα, νίκησα». vincere → victory, convince, invincible, Vincent. | wikt |
| credo |  | Credo = «πιστεύω» (το Σύμβολο της Πίστεως). Στα ελληνικά: Πιστεύω. Το credit card είναι «κάρτα εμπιστοσύνης». | wikt |
| vado | P | Quo vadis? = «πού πας;» (Ιωάν. 13:36, και το μυθιστόρημα του Σιένκιεβιτς). vadere → evade, invade, pervade. | wiki |
| iacio |  | Alea iacta est = «ο κύβος ερρίφθη» (Καίσαρας, Ρουβίκωνας, 49 π.Χ.). iacta ← iacere. | wiki |
| nolo | P | nolens volens = «θέλοντας και μη» (ή «θες δεν θες»). | wikt |
| cogito | P | Cogito, ergo sum = «σκέφτομαι, άρα υπάρχω» (Ντεκάρτ). cogitare ← co + agitare. | wikt |
| sequor |  | Non sequitur = «δεν έπεται/δεν προκύπτει» (λογικό σφάλμα). | wikt |
| morior |  | Memento mori = «θυμήσου ότι θα πεθάνεις» (mori = απαρέμφατο του morior). Και mortal, moribund. | wiki |
| plus | P | E pluribus unum = «από πολλούς, ένας» (δολάριο, ΗΠΑ). plus → plural, surplus. | wiki |
| cum | P | cum laude = «με έπαινο» (πτυχίο με άριστα). cum → con-, com-, co-. | wiki |
| pro | P | pro bono = «για το κοινό καλό» (δωρεάν νομική βοήθεια). Και pros and cons = pro et contra. | wiki |
| ex | P | ex (εκ, εξ) → exit, external, extra, ex-. Deus ex machina = «θεός από μηχανής»: λατινική μετάφραση του ελληνικού ἀπὸ μηχανῆς θεός. | wiki |
| de | P | de facto = «εκ των πραγμάτων», de iure = «εκ του νόμου». Και deduct, decline, descend. | wiki |
| ab | P | Ab urbe condita = «από τη θεμελίωση της πόλης» (ο τίτλος του έργου του Λίβιου! AUC = 753 π.Χ.). | wiki |
| et | P | et cetera (etc.) = «και τα υπόλοιπα». Et tu, Brute? = «και εσύ, Βρούτε;». | wikt |
| et |  | Et tu, Brute? = «Και εσύ, Βρούτε;» (Σαίξπηρ, Ιούλιος Καίσαρας). | wiki |
| si | P | Si vis pacem, para bellum = «αν θέλεις ειρήνη, ετοιμάσου για πόλεμο» (προσαρμογή φράσης του Βεγέτιου). | wikt |
| dum | P | Dum spiro, spero = «όσο αναπνέω, ελπίζω»: dum + οριστική = όσο, ενόσω (λατινικό γνωμικό). | wiki |
| hic | P | Hic et nunc = «εδώ και τώρα». Hic jacet = «εδώ κείται» (επιτάφιος). | wikt |
| nunc | P | Nunc est bibendum (Οράτιος) = «τώρα πρέπει να πιούμε». Το πρόσωπο της Michelin λέγεται Bibendum! | wiki |
| meus | P | Mea culpa = «δικό μου το λάθος» (χτυπώντας το στήθος). meus = μου. | wikt |
| noster | P | Mare Nostrum = «η θάλασσά μας» (η Μεσόγειος των Ρωμαίων). Pater noster = «Πάτερ ημών». | wiki |
| alter | P | alter ego = «άλλος εαυτός». alter → alternate, alternative, adulterate. | wiki |
| ipse | P | Lorem ipsum (το κείμενο-παράδειγμα σε κάθε σχεδίαση) είναι από το De finibus του Κικέρωνα (dolorem ipsum). ipse = ο ίδιος. Ipso facto. | wiki |
| Gallia | P | Gallia est omnis divisa in partes tres = «η Γαλατία ολόκληρη χωρίζεται σε τρία μέρη» (Καίσαρας, Bellum Gallicum I.1). | wiki |
| Rubico | P | Crossing the Rubicon = λαμβάνω μη αναστρέψιμη απόφαση (Ρουβίκωνας, 49 π.Χ.). | wiki |
| mos |  | O tempora, o mores! = «ω των καιρών, ω των ηθών!» (Κικέρων, In Catilinam I). mos, moris → moral, morale. | wiki |
| cui | P | Cui bono? = «σε ποιον ωφελεί;» (ο Κικέρων το αποδίδει στον Κάσσιο, Philippica II): δοτική του ωφελουμένου. | wiki |
| Carthago | P | Carthago delenda est = «η Καρχηδόνα πρέπει να καταστραφεί» (Κάτων): gerundive (περιφραστική συζυγία). | wiki |
| Danai | P | Timeo Danaos et dona ferentes = «φοβάμαι τους Δαναούς, ακόμη κι όταν φέρνουν δώρα» (Βιργίλιος, Αινειάδα II.49): Λαοκόων και ο Δούρειος Ίππος. | wiki |
| arma |  | Arma virumque cano = «όπλα και άνδρα ψάλλω» (πρώτος στίχος της Αινειάδας). arma → army, vir → virile. | wiki |
| custos | P | Quis custodiet ipsos custodes? = «ποιος θα φυλάει τους φύλακες;» (Ιουβενάλης): custos → custody. | wiki |
| sanus |  | Mens sana in corpore sano = «ο υγιής νους σε υγιές σώμα» (Ιουβενάλης). sanus → sane, sanitary, sanitation. | wiki |
| circus | P | Panem et circenses = «ψωμί και θεάματα» (Ιουβενάλης). Από εδώ το Panem των Hunger Games. | wiki |
| nil | P | Nil desperandum = «μην απελπίζεσαι» (Οράτιος): gerundive. nil = nihil. | wikt |
| audeo | P | Sapere aude = «τόλμα να σκεφτείς» (Οράτιος, μότο του Καντ για το Διαφωτισμό). audere → audacious, audacity. | wiki |
| festino | P | Festina lente = «σπεύδε βραδέως»: λατινική μετάφραση του ελληνικού σπεῦδε βραδέως (το είχε για μότο ο Αύγουστος). | wiki,wikt |
| vinum |  | In vino veritas = «εν οίνω αλήθεια»: έχει και ελληνικό αντίστοιχο, Ἐν οἴνῳ ἀλήθεια. vinum → vine, wine. | wiki |
| dulcis | P | Dulce et decorum est pro patria mori = «γλυκό και τιμητικό να πεθαίνεις για την πατρίδα» (Οράτιος· ποίημα του Wilfred Owen). | wiki |
| homo |  | Homo homini lupus = «ο άνθρωπος είναι λύκος για τον άνθρωπο» (Πλαύτος): homini = δοτική! | wiki |
| errare | P | Errare humanum est = «το να σφάλλεις είναι ανθρώπινο» (αποδίδεται συχνά στον Σενέκα, αλλά δεν βρίσκεται στα έργα του)· το απαρέμφατο ως υποκείμενο. | wikt |
| gaudeo | P | Gaudeamus igitur = «ας χαρούμε λοιπόν»: ο φοιτητικός ύμνος των πανεπιστημίων της Ευρώπης (gaudere = χαίρομαι → joy). | wiki |
| quiesco | P | Requiescat in pace (R.I.P.) = «ας αναπαυθεί εν ειρήνη». quies → quiet, requiem. | wiki |
| placeo |  | Placebo = «θα ευχαριστήσω» (μέλλοντας του placere)! Το ψεύτικο χάπι που «ευχαριστεί» τον ασθενή. placere → please, placid, complacent. | wiki |
| optimus |  | Everton FC: Nil satis nisi optimum = «τίποτα εκτός από το καλύτερο δεν είναι αρκετό» (optimus = ο άριστος, το «20»!). | wiki |
| cresco | P | Arsenal FC: Victoria concordia crescit = «η νίκη μεγαλώνει από την ομόνοια». | wiki |
| audeo |  | Tottenham FC: Audere est facere = «το να τολμάς είναι να κάνεις». audere → audacious. | wiki |
| astrum | P | Per aspera ad astra = «μέσα από τις δυσκολίες στ' άστρα» (η προέλευση της φράσης είναι αβέβαιη· Σενέκας: non est ad astra mollis e terris via). astrum ← ελληνικό ἄστρον. | wiki |
| Panem | P | Το Panem των Hunger Games είναι από το panem et circenses: panis = ψωμί. Οι χαρακτήρες έχουν ρωμαϊκά ονόματα (Cinna, Octavia, Portia, Caesar). | screenrant.com,thedeathofcarthage.com |
| panis |  | Panem et circenses = «ψωμί και θεάματα» (Ιουβενάλης, Σάτιρα Χ): ο ψωμοπουλιάρης λαός. panis → companion, pantry. | wiki |
| amicitia | P | Ave atque vale = «χαίρε και αντίο» (Κάτουλλος 101, για τον νεκρό αδελφό του). valeo → valid, value. | wiki |

### Pop culture and brands (33)

| Lemma | P | Hook | Src |
|---|---|---|---|
| arma |  | Στο Χάρι Πότερ το ξόρκι Expelliarmus = expellere + arma: «διώξε τα όπλα». | HPwiki |
| deus |  | Deus vult = «ο Θεός το θέλει»: ιαχή των Σταυροφόρων το 1096. deus → deity, adieu. | wiki |
| nox |  | Nox = το ξόρκι του Χάρι Πότερ που σβήνει το φως: nox = νύχτα. Και nocturnal. | HPwiki |
| lupus |  | Remus Lupin (Χάρι Πότερ): Remus από τον Ρώμο των Ρωμύλου-Ρώμου που τους έθρεψε λύκαινα + Lupin ← lupinus «λυκώδης» (lupus = λύκος): ένας λυκάνθρωπος. | HPwiki,wiki |
| fortuna |  | «O Fortuna» (Carmina Burana, Carl Orff) = ο ύμνος στην Τύχη, που ακούς σε διαφημίσεις και ταινίες. | wiki |
| fides |  | Ο σκύλος Fido έχει όνομα λατινικό: fidus = πιστός (μέσω ισπανικού/ιταλικού fido). Και Semper Fi = semper fidelis, μότο των Αμερικανών Marines. | wikt |
| mundus | P | mundus = κόσμος → mundane (κοσμικός) και το Mundial: το Παγκόσμιο Κύπελλο στα ισπανικά. | wiki |
| rideo | P | Riddikulus (Χάρι Πότερ): ridiculus ← ridere (γελώ). Και deride, ridicule. | HPwiki |
| audio |  | Το Audi είναι η λατινική προστακτική του audire = «άκου!» (μετάφραση του γερμανικού Horch του ιδρυτή). | wiki |
| nosco |  | Incognito mode (Chrome) = in + cognitus = «άγνωστος». cognoscere → recognize, ignore, notion, noble. | wikt |
| dulcis |  | dulcis (γλυκός) → dolce (ιταλικά), dulce de leche, dulcet. Το dolce vita = η γλυκιά ζωή. | wikt |
| felix | P | Felix Felicis (Χάρι Πότερ) = «Τυχερός της τύχης». felix → felicity, congratulations (felicitations). | HPwiki |
| miser |  | miser (άθλιος, ταλαίπωρος) → misery, miserable, Les Misérables = «Οι Άθλιοι» του Ουγκώ. | wikt |
| maximus |  | Maximus Decimus Meridius (Gladiator): maximus = ο μέγιστος. maximum, max. | wikt |
| ut | P | Οι νότες Ντο-Ρε-Μι έχουν λατινική προέλευση: Ut queant laxis ... (ύμνος στον Άγιο Ιωάννη): Ut → Do, Re, Mi, Fa, Sol, La, Si. | wiki |
| nemo | P | Captain Nemo / Finding Nemo: nemo = «κανένας» (η μετάφραση του Ούτις της Οδύσσειας!). | wiki |
| totus | P | Petrificus Totalus (Χάρι Πότερ): totus = ολόκληρος → total, totalitarian. | HPwiki |
| quantus | P | quantum («πόσο») → quantity, quantum. Quantum of Solace (James Bond). | wiki |
| pietas | P | Pietà του Μιχαήλ Άγγελου; pietas (ευσέβεια, αφοσίωση) → piety, pity. Ο Αινείας είναι pius. | wikt |
| mens | P | mens, mentis (νους) → mental, mention, demented. Legilimens (Χάρι Πότερ) = legere + mens = «διαβάζω το μυαλό». | HPwiki |
| toga | P | toga ← tegere «σκεπάζω» → protect, detect, tile. Toga party = πάρτι με σεντόνια! | wikt |
| caligula | P | Ο αυτοκράτορας Gaius ονομάστηκε Caligula = «μικρή αρβύλα» (caliga): από τα παιδικά του στρατιωτικά παπουτσάκια. | wiki |
| iuvenis | P | iuvenis (νέος) → juvenile, rejuvenate, Juventus (= νεότητα, ομάδα του Τορίνο). | wiki |
| ascendo |  | scandere (ανεβαίνω) → ascend, descend, scan. Ascendio (Χάρι Πότερ). | HPwiki |
| fundo | P | fundere (χύνω) → fuse, confuse, refund, foundry, fondue (= λιωμένο!). Confundo (Χάρι Πότερ). | HPwiki |
| impero |  | imperare (διατάζω) → imperative (προστακτική), emperor, empire. Imperio (Χάρι Πότερ): Imperius Curse. | HPwiki |
| paro | P | parare (ετοιμάζω) → prepare, repair, separate, apparatus. Para bellum! → Parabellum (το φυσίγγιο 9mm, και ο τίτλος του John Wick 3). | wiki |
| tego |  | tegere (σκεπάζω) → protect, detect, toga, tile. Protego (Χάρι Πότερ) = «προστατεύω». | HPwiki |
| volvo | P | volvere (κυλώ) → Volvo = «κυλάω», revolve, revolution, evolve, evolution, involve, volume (= κύλινδρος παπύρου!). | wiki |
| cresco |  | crescere (αυξάνομαι) → crescent, increase, concrete, crescendo (ιταλ.: μεγαλώνοντας), croissant (= η μισοφέγγαρη λιχουδιά). | wikt |
| pello | P | pellere (ωθώ, διώχνω) → expel, repel, propel, compel, impulse, pulse. Expelliarmus. | HPwiki |
| nix | P | Το Nivea πήρε το όνομά του από το niveus = «χιονάτος» (nix, nivis = χιόνι). | wiki |
| sonus |  | Το Sony πήρε το όνομά του από το sonus = «ήχος» (μαζί με το sonny). | wiki |

### Abbreviations and symbols (17)

| Lemma | P | Hook | Src |
|---|---|---|---|
| scribo |  | P.S. = post scriptum «γραμμένο μετά» (post + scribere). Και script, describe, manuscript. | wikt |
| aurum | P | Au = aurum (χρυσός) στον περιοδικό πίνακα. Και oro στα ιταλικά, aureole. | wiki |
| argentum | P | Ag = argentum (άργυρος). Argentina = η «χώρα του ασημιού». | wiki |
| ferrum |  | Fe = ferrum (σίδηρος) στον περιοδικό πίνακα. Και ferrous, ιταλ. ferro. | wiki |
| plumbum | P | Pb = plumbum (μόλυβδος). Plumber = ο υδραυλικός, στην αρχή «δουλευτής του μολυβιού» (σωλήνες από μόλυβδο). | wiki |
| curro |  | CV = curriculum vitae: curriculum = «τρέξιμο, πορεία» (currere). Και το cursor του ποντικιού είναι ο «τρεχούμενος». | wiki |
| similis | P | fax ← facsimile = fac + simile = «κάνε όμοιο» → similar, simulate, assimilate. | wiki,wikt |
| centum |  | per cent = per centum = «ανά εκατό». centum → century, cent, centurion (ο εκατόνταρχος). | wikt |
| ante | P | a.m. = ante meridiem («πριν το μεσημέρι»). ante → antebellum, anterior, ante (πόκερ). | wikt |
| post | P | p.m. = post meridiem («μετά το μεσημέρι»). post → postpone, posterior, post mortem, P.S. | wikt |
| per | P | per capita = «κατά κεφαλήν». per → perfume (per fumum = «δια του καπνού»), perhaps. | wikt |
| quod | P | Q.E.D. = quod erat demonstrandum = «όπερ έδει δείξαι» (Ευκλείδης). quod = το οποίο. Gerundive! | wiki |
| ibi | P | ibid. = ibidem «στο ίδιο σημείο» (παραπομπές). ibi = εκεί. | wikt |
| id | P | i.e. = id est = «δηλαδή». Τα «Es» και «Ich» του Φρόιντ αποδόθηκαν στα αγγλικά id και ego (λατινοποίηση του μεταφραστή του). | wikt |
| exemplum | P | e.g. = exempli gratia = «για παράδειγμα» (exemplum). Και example, exemplary. | wikt |
| verto |  | vs. = versus = «εναντίον» (vertere: γυρισμένος προς). Και vice versa = «αντιστρόφως». | wikt |
| libra | P | libra = ζυγαριά και λίβρα → ζώδιο Libra (Ζυγός), λίβρα, lb (pound), Λίρα (£). | wikt |

## 7. Dropped or uncertain (not in hooks.jsonl)

- Lux soap ← lux (Wikipedia has no etymology; not confirmed)
- Oculus VR ← oculus (Wikipedia page does not say it)
- Optimus Prime (name origin not sourced)
- Aut Caesar aut nihil (Cesare Borgia attribution not found on Wikipedia/Wiktionary)
- Honda Civic named from civis (only «civic ← civicus ← civis» is kept)
- Audi Quattro (Italian numeral, weak)
- Lava ← lavare (en.wiktionary says «likely from lābēs»)
- Ovid's Naso = «big nose» (no sourced etymology)
- solea → sole (the English *sole* in that entry means «alone»)
- pontifex = bridge-maker (only a traditional interpretation; Wiktionary hedges)
- carnival ← carne vale (folk etymology)
- Wingardium Leviosa ← levis (fan wiki gives arduus for the first half; Leviosa part not stated)
- Aguamenti (fan wiki only suggests Spanish agua+mente)
- Maius/Iunius/Aprilis month-name etymologies (disputed; names kept only in the month hooks that are certain)
- humilis~χαμηλός, primus~πρῶτος, mollis~μαλακός, vinum~οἶνος cognates (see section 2)
- ratio as a translation of λόγος (not confirmed)
- ventriloquist = εγγαστρίμυθος (page not found)
- Leonardo/Leonidas as «lion» names (Leonardo is Germanic; Leonidas Greek)
- quota ← quantus, genes ← genus, Windows ← fenestra (derivation not supported)
- «Ρήγας Φεραίος» linked to rex (no source)
- Cicero's *Dum spiro spero*: attribution is only «similar idea»; the proverb itself is anonymous
- errare humanum est attributed to Seneca (Wiktionary: not found in his works)
- dilapidated/lapis: keep but with «σκορπίζω σαν πέτρες» wording only

## 8. Limits and next steps

- Babiniotis' dictionary and the Triantafyllidis dictionary pages could not be queried (the Triantafyllidis search page is dynamic and returned no etymology). el.wiktionary, which cites Babiniotis, is the stand-in; a human with the book could double-check the ~30 Greek loanwords.
- Not done: Τεύχος Α΄ vocabulary (lessons I–XX); frequency of derivative questions in real Panhellenic papers; a Latin word frequency list. The `in_teuchos_b_headword` flag is a text-match heuristic, not a lexicon parse.
- Cheap wins for the app: (1) show the **textbook-sourced** hook first in each lesson; (2) use the textbook «Ετυμολογικά» pairs as the first Match-pairs game; (3) add a weekly «Βρες τη λατινική ρίζα» round from section 5-E; (4) keep pop hooks for the end-of-lesson celebration screen.