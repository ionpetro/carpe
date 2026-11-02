// Unit 1: Μιλάς ήδη Λατινικά. Θέμα Β2 (ετυμολογία, 10 μονάδες) και τα δάνεια/συγγένειες που βοηθούν παντού.
// Every pair is sourced: real papers 2022-2026 (research/pastpapers.md §4.2, §5, raw papers), the ministry per-lesson list
// (research/official-2026-27-etymology-by-lesson.txt) and research/derivatives.md (el/en.wiktionary). Status flags: see each src.
/* eslint-disable max-len */
(function () {
  const unit = {
    "id": "u1",
    "title": "Μιλάς ήδη Λατινικά: ρίζες, δάνεια, Θέμα Β2",
    "blurb": "Οι 10 μονάδες του Β2 κρύβονται σε λέξεις που ήδη λες.",
    "exam": [
      "Β2"
    ],
    "lessons": [
      {
        "id": "u1l1",
        "title": "Ελληνικές λέξεις που είναι κρυφά λατινικές",
        "items": [
          {
            "id": "u1-r-two-roads",
            "kind": "rule",
            "title": "Δάνειο ή συγγένεια; Οι δύο δρόμοι της ετυμολογίας",
            "say": "Δάνειο: η λατινική λέξη μπήκε στα ελληνικά (castra → κάστρο). Συγγένεια: δύο γλώσσες κληρονόμησαν την ίδια ρίζα (fero ~ φέρω). Το Β2 ζητά και τα δύο.",
            "ex": [
              {
                "la": "castra → κάστρο",
                "el": "δάνειο: η λέξη πέρασε από τα λατινικά στα ελληνικά"
              },
              {
                "la": "fero ~ φέρω",
                "el": "συγγένεια: κοινή ινδοευρωπαϊκή ρίζα, καμία δεν δανείστηκε από την άλλη"
              },
              {
                "la": "fugiunt ~ πρόσφυγας",
                "el": "συγγένεια, και ζητήθηκε στο Β2 του 2022"
              },
              {
                "la": "socius → σοσιαλισμός",
                "el": "δάνειο μέσω γαλλικών και ιταλικών, Β2 του 2024"
              }
            ],
            "terms": [
              "δάνειο",
              "συγγενής λέξη",
              "ετυμολογικά συγγενής"
            ],
            "quiz": [
              {
                "t": "tf",
                "q": "castra → κάστρο: η ελληνική λέξη είναι δάνειο από τα λατινικά.",
                "a": true,
                "why": "Το castra (στρατόπεδο) πέρασε στα μεσαιωνικά ελληνικά ως κάστρο."
              },
              {
                "t": "tf",
                "q": "pater ~ πατήρ: το ελληνικό δανείστηκε από το λατινικό.",
                "a": false,
                "why": "Είναι συγγενείς: και οι δύο γλώσσες κληρονόμησαν την ίδια ρίζα."
              },
              {
                "t": "mcq",
                "q": "Ποιο ζεύγος είναι δάνειο και όχι κληρονομημένη συγγένεια;",
                "options": [
                  "porta – πόρτα",
                  "fero – φέρω",
                  "nox – νύξ"
                ],
                "a": "porta – πόρτα",
                "why": "Η πόρτα μπήκε στα ελληνικά από τα λατινικά· τα άλλα δύο είναι κοινή ρίζα."
              },
              {
                "t": "bucket",
                "q": "Σε ποιο κουτί πάει κάθε ζεύγος;",
                "buckets": [
                  "Δάνειο",
                  "Συγγένεια"
                ],
                "items": [
                  {
                    "text": "castra – κάστρο",
                    "bucket": "Δάνειο"
                  },
                  {
                    "text": "pater – πατήρ",
                    "bucket": "Συγγένεια"
                  },
                  {
                    "text": "furnus – φούρνος",
                    "bucket": "Δάνειο"
                  },
                  {
                    "text": "duo – δύο",
                    "bucket": "Συγγένεια"
                  }
                ]
              }
            ],
            "status": "book",
            "src": "ministry guidelines 2026-27· pastpapers.md §4.2"
          },
          {
            "id": "u1-h-hospitium",
            "kind": "hook",
            "la": "hospitium",
            "el": "σπίτι",
            "type": "loan",
            "story": "Το «σπίτι» είναι λατινικό: hospitium σημαίνει ξενώνας, φιλοξενία (από το hospes). Από την ίδια οικογένεια: hospital, hotel, host.",
            "say": "σπίτι ← hospitium (φιλοξενία). Ακόμη και το σπίτι σου μιλά λατινικά.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)",
            "apart": [
              "u1-h-domi"
            ]
          },
          {
            "id": "u1-h-campus",
            "kind": "hook",
            "la": "campus",
            "el": "κάμπος",
            "type": "loan",
            "story": "campus = πεδίο, ανοιχτός χώρος → κάμπος. Στα αγγλικά: campus, camp, champion (ο «πρωταθλητής του πεδίου»).",
            "say": "campus (πεδίο) → κάμπος. Στο campus του πανεπιστημίου περπατάς σε λατινικό χωράφι.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-skala",
            "kind": "origin",
            "w": "σκάλα",
            "latin": true,
            "from": "scala ← scando (ανεβαίνω) → σκάλα. Στα αγγλικά scale, scan, ascend.",
            "say": "σκάλα ← scala (από το scando, ανεβαίνω).",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-h-porta",
            "kind": "hook",
            "la": "porta",
            "el": "πόρτα",
            "type": "loan",
            "story": "porta → πόρτα. Στα αγγλικά port και portal. Κάθε φορά που ανοίγεις την πόρτα, λες λατινικά.",
            "say": "porta → πόρτα. Ανοίγεις λατινικά κάθε πρωί.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)",
            "apart": [
              "u1-h-ianua"
            ]
          },
          {
            "id": "u1-h-furnus",
            "kind": "hook",
            "la": "furnus",
            "el": "φούρνος",
            "type": "loan",
            "story": "furnus → φούρνος· ιταλικά forno, γαλλικά four, ισπανικά horno. Ο φούρνος της γειτονιάς είναι λατινικός.",
            "say": "furnus → φούρνος. Ο φούρνος της γειτονιάς έχει ρωμαϊκή καταγωγή.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-kastro",
            "kind": "origin",
            "w": "κάστρο",
            "latin": true,
            "from": "castra (στρατόπεδο) ή castrum (φρούριο) → κάστρο, μέσω της μεσαιωνικής ελληνικής.",
            "say": "κάστρο ← castra. Στον επίσημο κατάλογο του υπουργείου.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27 (μάθ. 31, 42, 43, 45)"
          },
          {
            "id": "u1-h-lucanica",
            "kind": "hook",
            "la": "lucanica",
            "el": "λουκάνικο",
            "type": "loan",
            "story": "lucanica = λουκάνικο από τη Lucania, περιοχή της Ιταλίας → λουκάνικο.",
            "say": "lucanica (από τη Λουκανία της Ιταλίας) → λουκάνικο.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-h-cuniculus",
            "kind": "hook",
            "la": "cuniculus",
            "el": "κουνέλι",
            "type": "loan",
            "story": "cuniculus → κουνέλι (ιταλικά coniglio), στα αγγλικά cony.",
            "say": "cuniculus → κουνέλι, μέσω των ιταλικών.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-mastoras",
            "kind": "origin",
            "w": "μάστορας",
            "latin": true,
            "from": "magister (δάσκαλος, αρχηγός) → μάστορας· στα αγγλικά master και mister. Αντίθετο: minister, από το minus.",
            "say": "μάστορας ← magister. Ο «μάστορας» είναι ο μάστερ.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-h-harena",
            "kind": "hook",
            "la": "harena",
            "el": "αρένα",
            "type": "loan",
            "story": "harena σημαίνει άμμος! Η αρένα του Κολοσσαίου σκεπαζόταν με άμμο για να απορροφά το αίμα.",
            "say": "harena (άμμος) → αρένα: ο χώρος με την άμμο.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-h-kalendae",
            "kind": "hook",
            "la": "Kalendae",
            "el": "κάλαντα",
            "type": "loan",
            "story": "Kalendae = η 1η του μήνα → κάλαντα, και calendar. Ad Kalendas Graecas = «στις ελληνικές καλένδες», δηλαδή ποτέ: οι Έλληνες δεν είχαν Kalendae.",
            "say": "Kalendae (η 1η του μήνα) → κάλαντα. Ad Kalendas Graecas = ποτέ.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-sigouros",
            "kind": "origin",
            "w": "σίγουρος",
            "latin": true,
            "from": "securus = sine + cura, «χωρίς έγνοια» → σίγουρος.",
            "say": "σίγουρος ← securus: χωρίς έγνοια, χωρίς cura.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-h-cella",
            "kind": "hook",
            "la": "cella",
            "el": "κελί",
            "type": "loan",
            "story": "cella = αποθήκη, μικρό δωμάτιο → κελί. Στα αγγλικά cell, cellar.",
            "say": "cella (μικρό δωμάτιο) → κελί.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)",
            "apart": [
              "u1-h-domi"
            ]
          },
          {
            "id": "u1-h-villa",
            "kind": "hook",
            "la": "villa",
            "el": "βίλα",
            "type": "loan",
            "story": "villa = εξοχική έπαυλη ← vicus (χωριό) → βίλα (ιταλικά). Στα αγγλικά village.",
            "say": "villa (έπαυλη, από το vicus) → βίλα.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)",
            "apart": [
              "u1-h-domi"
            ]
          },
          {
            "id": "u1-o-taverna",
            "kind": "origin",
            "w": "ταβέρνα",
            "latin": true,
            "from": "taberna (μαγαζί, πανδοχείο) → ταβέρνα. Η ελληνική ταβέρνα είναι λατινική.",
            "say": "ταβέρνα ← taberna: ακόμη και η ταβέρνα είναι ρωμαϊκή.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-h-cortina",
            "kind": "hook",
            "la": "cortina",
            "el": "κουρτίνα",
            "type": "loan",
            "story": "cortina → κουρτίνα, στα αγγλικά curtain.",
            "say": "cortina → κουρτίνα. Την τραβάς λατινικά.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-h-titulus",
            "kind": "hook",
            "la": "titulus",
            "el": "τίτλος",
            "type": "loan",
            "story": "titulus → τίτλος, στα αγγλικά title και titular.",
            "say": "titulus → τίτλος.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-prigkipas",
            "kind": "origin",
            "w": "πρίγκιπας",
            "latin": true,
            "from": "princeps = primus + capere, «αυτός που παίρνει πρώτος» → πρίγκιπας, prince.",
            "say": "πρίγκιπας ← princeps: ο πρώτος. Στον κατάλογο του υπουργείου (μάθ. 16).",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27 (μάθ. 16)"
          },
          {
            "id": "u1-h-balneum",
            "kind": "hook",
            "la": "balneum",
            "el": "μπάνιο",
            "type": "loan",
            "story": "balneum → ιταλικά bagno → μπάνιο. Αλλά και το balneum ήρθε από το ελληνικό βαλανεῖον: βούμερανγκ, η λέξη γύρισε σπίτι της.",
            "say": "balneum → μπάνιο, και το balneum ← βαλανεῖον. Βούμερανγκ!",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-h-platea",
            "kind": "hook",
            "la": "platea",
            "el": "πιάτσα",
            "type": "loan",
            "story": "platea ← ελληνικό πλατεῖα (ὁδός). Γύρισε στα ελληνικά δύο φορές: πλατεία και, μέσω ιταλικού piazza, πιάτσα. Βούμερανγκ!",
            "say": "platea ← πλατεῖα, και πίσω στα ελληνικά ως πιάτσα. Βούμερανγκ!",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-mili",
            "kind": "origin",
            "w": "μίλι",
            "latin": true,
            "from": "mille passuum = «χίλια βήματα» → μίλι, στα αγγλικά mile. Και mille → million.",
            "say": "μίλι ← mille passuum: χίλια βήματα.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27 (μάθ. 29)"
          },
          {
            "id": "u1-o-septemvrios",
            "kind": "origin",
            "w": "Σεπτέμβριος",
            "latin": true,
            "from": "septem = επτά: ο 7ος μήνας του παλιού ρωμαϊκού έτους, που άρχιζε τον Μάρτιο.",
            "say": "Σεπτέμβριος = ο έβδομος (septem) μήνας του παλιού ρωμαϊκού έτους.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-oktovrios",
            "kind": "origin",
            "w": "Οκτώβριος",
            "latin": true,
            "from": "octo = οκτώ: ο 8ος μήνας του παλιού ρωμαϊκού ημερολογίου.",
            "say": "Οκτώβριος = ο όγδοος (octo) μήνας, αν το έτος αρχίζει Μάρτιο.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-noemvrios",
            "kind": "origin",
            "w": "Νοέμβριος",
            "latin": true,
            "from": "novem = εννέα: ο 9ος μήνας του παλιού ρωμαϊκού ημερολογίου.",
            "say": "Νοέμβριος = ο ένατος (novem) μήνας του παλιού ρωμαϊκού έτους.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-dekemvrios",
            "kind": "origin",
            "w": "Δεκέμβριος",
            "latin": true,
            "from": "decem = δέκα: ο 10ος μήνας. Και decimate: στη Ρώμη σκότωναν έναν στους δέκα.",
            "say": "Δεκέμβριος = ο δέκατος (decem) μήνας του παλιού ρωμαϊκού έτους.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-faba",
            "kind": "origin",
            "w": "φάβα",
            "latin": true,
            "from": "faba = κουκί → φάβα της Σαντορίνης. Και το επώνυμο Fabius.",
            "say": "φάβα ← faba (κουκί). Και ο Fabius έχει το ίδιο όνομα.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-kouzina",
            "kind": "origin",
            "w": "κουζίνα",
            "latin": true,
            "from": "coquere = μαγειρεύω → ιταλικά cucina → κουζίνα, στα αγγλικά cook και kitchen.",
            "say": "κουζίνα ← coquere (μαγειρεύω), μέσω των ιταλικών.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-rodes",
            "kind": "origin",
            "w": "ρόδα",
            "latin": true,
            "from": "rota = τροχός → ρόδα (ενετικό roda), στα αγγλικά rotate και roulette.",
            "say": "ρόδα ← rota (τροχός). Και η ρουλέτα είναι μικρή rota.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-strata",
            "kind": "origin",
            "w": "στράτα",
            "latin": true,
            "from": "strata, via strata = στρωμένος δρόμος → στράτα, στα αγγλικά street.",
            "say": "στράτα ← strata (via strata, στρωμένος δρόμος).",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-kolona",
            "kind": "origin",
            "w": "κολόνα",
            "latin": true,
            "from": "columna → κολόνα (ιταλικά colonna), στα αγγλικά column.",
            "say": "κολόνα ← columna.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-karbouno",
            "kind": "origin",
            "w": "κάρβουνο",
            "latin": true,
            "from": "carbo → κάρβουνο, στα αγγλικά carbon (άνθρακας).",
            "say": "κάρβουνο ← carbo. Ο άνθρακας λέγεται carbon.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-kanali",
            "kind": "origin",
            "w": "κανάλι",
            "latin": true,
            "from": "canalis ← canna ← ελληνικό κάννα → κανάλι. Στα αγγλικά canal, channel.",
            "say": "κανάλι ← canalis, που κι αυτό ήρθε από το ελληνικό κάννα.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-tsimento",
            "kind": "origin",
            "w": "τσιμέντο",
            "latin": true,
            "from": "caementum ← caedere (κόβω): θρυμματισμένη πέτρα → τσιμέντο (ιταλικά cemento).",
            "say": "τσιμέντο ← caementum: πέτρα που κόβεται σε θραύσματα.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-moulari",
            "kind": "origin",
            "w": "μουλάρι",
            "latin": true,
            "from": "mulus → μουλάρι, στα αγγλικά mule.",
            "say": "μουλάρι ← mulus.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-kalamari",
            "kind": "origin",
            "w": "καλαμάρι",
            "latin": true,
            "from": "καλαμάρι ← (theca) calamaria = «θήκη για καλάμια γραφής»: το καλαμάρι έχει μελάνι.",
            "say": "καλαμάρι ← calamaria: η θήκη των καλαμιών της γραφής, γεμάτη μελάνι.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-kouma",
            "kind": "origin",
            "w": "κούπα",
            "latin": true,
            "from": "cupa (βαρέλι, κύπελλο) → κούπα, και η «κούπα» της τράπουλας. Στα αγγλικά cup.",
            "say": "κούπα ← cupa (βαρέλι, κύπελλο).",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-kometas",
            "kind": "origin",
            "w": "κόμης",
            "latin": true,
            "from": "comes = cum + eo, «ο συνοδός» → κόμης. Στα αγγλικά count (τίτλος).",
            "say": "κόμης ← comes: ο συνοδός του ηγεμόνα.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-ounyia",
            "kind": "origin",
            "w": "ουγγιά",
            "latin": true,
            "from": "uncia (το 1/12 της λίβρας) → ουγγιά, στα αγγλικά ounce. Και inch: το 1/12 του ποδιού.",
            "say": "ουγγιά ← uncia: το δωδέκατο της λίβρας.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-kabana",
            "kind": "origin",
            "w": "καμπάνα",
            "latin": true,
            "from": "Campana, από την Campania (περιοχή της Ιταλίας) → καμπάνα.",
            "say": "καμπάνα ← Campana, από την Καμπανία της Ιταλίας.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-finistrini",
            "kind": "origin",
            "w": "φινιστρίνι",
            "latin": true,
            "from": "fenestra = παράθυρο → ιταλικά finestrino → φινιστρίνι. Στα αγγλικά defenestrate: ρίχνω από το παράθυρο.",
            "say": "φινιστρίνι ← fenestra (παράθυρο).",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-portokali",
            "kind": "origin",
            "w": "πορτοκάλι",
            "latin": false,
            "from": "Η ονομασία έρχεται από την Πορτογαλία (Portugal, από Portus Cale)· μόνο το portus είναι λατινικό. Δεν είναι δάνειο της λατινικής στα ελληνικά.",
            "say": "πορτοκάλι: όχι λατινικό. Από την Πορτογαλία (Portus Cale)· μόνο το portus είναι λατινικό.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)· Portugal ← Portus Cale"
          },
          {
            "id": "u1-o-diaita",
            "kind": "origin",
            "w": "δίαιτα",
            "latin": false,
            "from": "Η δίαιτα είναι ελληνική λέξη (δίαιτα = τρόπος ζωής). Το λατινικό diaeta δανείστηκε από τα ελληνικά και ξαναγύρισε ως δίαιτα. Ο κατάλογος του υπουργείου όμως δίνει το ζεύγος diaeta–δίαιτα: στο Β2 αντιστοίχισέ το κανονικά.",
            "say": "δίαιτα: ελληνική. Το diaeta είναι δάνειο ΑΠΟ τα ελληνικά, όχι προς αυτά.",
            "status": "book",
            "src": "derivatives.md §3A· κατάλογος ΥΠΑΙΘ 2026-27 (μάθ. 20)"
          },
          {
            "id": "u1-o-kelitas",
            "kind": "origin",
            "w": "κέλητας",
            "latin": false,
            "from": "Ο κέλητας (κέλης) είναι ελληνική λέξη και αληθινός συγγενής του celer, όχι δάνειο. Ο κατάλογος του υπουργείου τη βάζει δίπλα στο celeriter: στο Β2 αντιστοίχισέ το κανονικά.",
            "say": "κέλητας: ελληνικός, συγγενής του celer. Δεν είναι δάνειο.",
            "status": "book",
            "src": "derivatives.md §3A· κατάλογος ΥΠΑΙΘ 2026-27 (μάθ. 40, 45)"
          },
          {
            "id": "u1-o-island",
            "kind": "origin",
            "w": "το αγγλικό «island»",
            "latin": false,
            "from": "Το island ΔΕΝ βγαίνει από το insula. Είναι αγγλοσαξονικό (igland): το s μπήκε αργότερα, από λάθος αναλογία με το isle ← insula.",
            "say": "island: όχι λατινικό. Το s του είναι παλιό λάθος της αναλογίας.",
            "status": "general",
            "src": "derivatives.md §5 (myth-busters)· en.wiktionary"
          },
          {
            "id": "u1-o-council",
            "kind": "origin",
            "w": "το αγγλικό «council» (συμβούλιο)",
            "latin": true,
            "from": "council ← concilium (συνάθροιση). Το counsel (συμβουλή) ← consilium. Δύο λατινικές λέξεις, δύο αγγλικές, και μπερδεύονται εύκολα.",
            "say": "council ← concilium, counsel ← consilium. Παρόμοιες, αλλά όχι ίδιες.",
            "status": "general",
            "src": "derivatives.md §5 (myth-busters)· hooks.jsonl consilium"
          },
          {
            "id": "u1-o-karo",
            "kind": "origin",
            "w": "κάρο",
            "latin": true,
            "from": "carrus (γαλατικής προέλευσης) → κάρο, στα αγγλικά car και carry.",
            "say": "κάρο ← carrus: το αυτοκίνητο (car) είναι απόγονός του.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-lardi",
            "kind": "origin",
            "w": "λαρδί",
            "latin": true,
            "from": "lardum → λαρδί, στα αγγλικά lard.",
            "say": "λαρδί ← lardum.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-vazo",
            "kind": "origin",
            "w": "βάζο",
            "latin": true,
            "from": "vas, vasis (σκεύος) → ιταλικά vaso → βάζο. Στα αγγλικά vase, vessel.",
            "say": "βάζο ← vas, vasis (σκεύος).",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-patrikios",
            "kind": "origin",
            "w": "πατρίκιος",
            "latin": true,
            "from": "patricius ← pater → πατρίκιος. Στα αγγλικά patrician: ο ευγενής της Ρώμης.",
            "say": "πατρίκιος ← patricius ← pater: ο γόνος των πατέρων.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-kapistri",
            "kind": "origin",
            "w": "καπίστρι",
            "latin": true,
            "from": "capistrum ← capio (πιάνω) + -trum → καπίστρι: αυτό που πιάνει το άλογο.",
            "say": "καπίστρι ← capistrum: αυτό που πιάνει το άλογο.",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          },
          {
            "id": "u1-o-troulos",
            "kind": "origin",
            "w": "τρούλος",
            "latin": true,
            "from": "trulla (κουτάλα, μικρό αγγείο) → τρούλος: το σχήμα του αναποδογυρισμένου κύπελλου.",
            "say": "τρούλος ← trulla (μικρό αγγείο).",
            "status": "general",
            "src": "derivatives.md (el.wiktionary)"
          }
        ]
      },
      {
        "id": "u1l2",
        "title": "Ίδια ρίζα, δύο γλώσσες",
        "items": [
          {
            "id": "u1-r-sound-laws",
            "kind": "rule",
            "title": "Τι αλλάζει όταν ένα λατινικό και ένα ελληνικό ρίζωμα συναντιούνται",
            "say": "f ~ φ ή θ, αρχικό s ~ δασεία (septem ~ ἑπτά), c ~ κ, qu ~ π ή τ (quinque ~ πέντε, quattuor ~ τέσσαρες).",
            "ex": [
              {
                "la": "fero ~ φέρω",
                "el": "το f αντιστοιχεί στο φ"
              },
              {
                "la": "septem ~ ἑπτά, super ~ ὑπέρ, serpo ~ ἕρπω",
                "el": "το s στην αρχή αντιστοιχεί σε δασεία"
              },
              {
                "la": "cor ~ καρδία, cerno ~ κρίνω",
                "el": "το c αντιστοιχεί στο κ"
              },
              {
                "la": "quinque ~ πέντε, quattuor ~ τέσσαρες",
                "el": "το qu αντιστοιχεί σε π ή τ"
              }
            ],
            "terms": [
              "συγγενής",
              "ρίζα"
            ],
            "quiz": [
              {
                "t": "tf",
                "q": "Στο ζεύγος fero ~ φέρω, το λατινικό f αντιστοιχεί στο ελληνικό φ.",
                "a": true,
                "why": "Σωστά: f ~ φ (και συχνά f ~ θ, όπως fumus ~ θυμός)."
              },
              {
                "t": "mcq",
                "q": "Ποιο λατινικό αριθμητικό ταιριάζει με το ελληνικό ἑπτά;",
                "options": [
                  "septem",
                  "sex",
                  "octo"
                ],
                "a": "septem",
                "why": "Το αρχικό s του septem αντιστοιχεί στη δασεία του ἑπτά."
              },
              {
                "t": "mcq",
                "q": "Ποιο ελληνικό ρήμα ταιριάζει με το λατινικό fero;",
                "options": [
                  "φέρω",
                  "φεύγω",
                  "φθείρω"
                ],
                "a": "φέρω",
                "why": "fero ~ φέρω, με το f ~ φ."
              },
              {
                "t": "tf",
                "q": "Το super είναι συγγενές του ελληνικού ὑπέρ.",
                "a": true,
                "why": "Ναι: s ~ δασεία, p ~ π, ύψιλον ~ u. Έτσι βγαίνει το «υπέροχος»."
              },
              {
                "t": "mcq",
                "q": "Ποιο ελληνικό αριθμητικό ταιριάζει με το quinque;",
                "options": [
                  "πέντε",
                  "έξι",
                  "δέκα"
                ],
                "a": "πέντε",
                "why": "quinque ~ πέντε: το qu αντιστοιχεί σε π (και στο quattuor ~ τέσσαρες σε τ)."
              }
            ],
            "status": "general",
            "src": "γνωστή αντιστοιχία ινδοευρωπαϊκών, δεν υπάρχει στο hooks.jsonl"
          },
          {
            "id": "u1-r-cog-a",
            "kind": "rule",
            "title": "Κι άλλα ζεύγη του βιβλίου (I): εἰμί, ἀγρός, ὄσσε, ὄψ",
            "say": "sum ~ εἰμί, ager ~ ἀγρός, oculus ~ ὄσσε, vox ~ ὄψ: το βιβλίο τα τυπώνει με το ≃ (ίδια σημασία, ίδια ρίζα).",
            "ex": [
              {
                "la": "sum ~ εἰμί",
                "el": "esse ~ εἶναι: η ρίζα es- είναι κοινή"
              },
              {
                "la": "ager ~ ἀγρός",
                "el": "ο αγρός, αγροτικός· agriculture"
              },
              {
                "la": "oculus ~ ὄσσε",
                "el": "τα μάτια στον Όμηρο· ocular"
              },
              {
                "la": "vox ~ ὄψ",
                "el": "η φωνή (ομηρικό ὄψ)· voice, vocal"
              }
            ],
            "terms": [
              "≃"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Ποια ελληνική λέξη είναι συγγενής του ager;",
                "options": [
                  "ἀγρός",
                  "ἀγορά",
                  "ἄγω"
                ],
                "a": "ἀγρός",
                "why": "ager ~ ἀγρός: ο αγρός, το χωράφι· agriculture, αγροτικός."
              },
              {
                "t": "mcq",
                "q": "Ποια ομηρική λέξη συγγενεύει με το oculus;",
                "options": [
                  "ὄσσε",
                  "οὖς",
                  "ὀδούς"
                ],
                "a": "ὄσσε",
                "why": "oculus ~ ὄσσε (τα μάτια), όπως στο ocular."
              },
              {
                "t": "tf",
                "q": "Το vox και το ὄψ (η φωνή) έχουν κοινή ρίζα.",
                "a": true,
                "why": "Το βιβλίο τα δίνει ως ≃: vox ≃ ὄψ."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική μορφή είναι συγγενής του «εἶναι»;",
                "options": [
                  "esse",
                  "ire",
                  "ferre"
                ],
                "a": "esse",
                "why": "esse ~ εἶναι: ρίζα es-, και sum ~ εἰμί."
              }
            ],
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-r-cog-b",
            "kind": "rule",
            "title": "Κι άλλα ζεύγη του βιβλίου (II): ἔτος, ἕνος, θήρ, νέμω",
            "say": "vetus ~ ἔτος (βετεράνος), senex ~ ἕνος (senior), ferus ~ θήρ (θηρίο), numerus ~ νέμω (νόμος): τέσσερα ≃ του βιβλίου.",
            "ex": [
              {
                "la": "vetus ~ ἔτος",
                "el": "το έτος· veteran ↔ βετεράνος"
              },
              {
                "la": "senex ~ ἕνος",
                "el": "ο γέρος, ο παλιός· senior"
              },
              {
                "la": "ferus ~ θήρ",
                "el": "το άγριο ζώο· ferocious, θηρίο"
              },
              {
                "la": "numerus ~ νέμω",
                "el": "μοιράζω· number, νόμος"
              }
            ],
            "terms": [
              "≃"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Ποια ελληνική λέξη είναι συγγενής του ferus;",
                "options": [
                  "θήρ",
                  "θεός",
                  "θύρα"
                ],
                "a": "θήρ",
                "why": "ferus ~ θήρ: ferocious, θηρίο."
              },
              {
                "t": "mcq",
                "q": "Με ποιο ελληνικό ταιριάζει το vetus;",
                "options": [
                  "ἔτος",
                  "ἔθνος",
                  "ἔργον"
                ],
                "a": "ἔτος",
                "why": "vetus ~ ἔτος: οι «πολλών ετών», άρα βετεράνος."
              },
              {
                "t": "tf",
                "q": "Το numerus και ο νόμος έχουν κοινή ρίζα (νέμω, μοιράζω).",
                "a": true,
                "why": "Το βιβλίο το τυπώνει ως ≃: numerus ≃ νέμω."
              },
              {
                "t": "mcq",
                "q": "Ποιο ελληνικό ταιριάζει με το senex;",
                "options": [
                  "ἕνος",
                  "ἕδρα",
                  "ἔτος"
                ],
                "a": "ἕνος",
                "why": "senex ~ ἕνος (παλιός)· senior."
              }
            ],
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-duo",
            "kind": "hook",
            "la": "duo",
            "el": "δύο",
            "type": "cognate",
            "story": "duo ~ δύο: ίδια ρίζα. Στα αγγλικά: duet, dual, duel.",
            "say": "duo ~ δύο, ίδια ρίζα. Από εδώ το duet και το duel.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-tres",
            "kind": "hook",
            "la": "tres",
            "el": "τρεις",
            "type": "cognate",
            "story": "tres ~ τρεις, και tertius ~ τρίτος. Από εδώ το trio, το tri- και το trident (τρίαινα).",
            "say": "tres ~ τρεις, tertius ~ τρίτος. Το trio τα λέει όλα.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-o-patera",
            "kind": "origin",
            "w": "πατέρας",
            "latin": false,
            "from": "Η ελληνική λέξη (πατήρ) δεν δανείστηκε από το pater: είναι αδελφές λέξεις, με κοινό πρόγονο στην ινδοευρωπαϊκή. Συγγένεια, όχι δάνειο.",
            "say": "πατέρας: ελληνική λέξη, αδελφή του pater, όχι παιδί του.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-quattuor",
            "kind": "hook",
            "la": "quattuor",
            "el": "τέσσερις",
            "type": "cognate",
            "story": "quattuor ~ τέσσαρες, τέσσερις. Από τη ρίζα quadr- στα αγγλικά: quadrant, quadruple.",
            "say": "quattuor ~ τέσσερις. Το ιταλικό quattro το λέει καθαρά.",
            "status": "general",
            "src": "γνωστή αντιστοιχία ινδοευρωπαϊκών, δεν υπάρχει στο hooks.jsonl"
          },
          {
            "id": "u1-h-quinque",
            "kind": "hook",
            "la": "quinque",
            "el": "πέντε",
            "type": "cognate",
            "story": "quinque ~ πέντε. Στα αγγλικά το quintet είναι πεντάδα.",
            "say": "quinque ~ πέντε. Quintet = πεντάδα.",
            "status": "general",
            "src": "γνωστή αντιστοιχία ινδοευρωπαϊκών, δεν υπάρχει στο hooks.jsonl"
          },
          {
            "id": "u1-o-nychta",
            "kind": "origin",
            "w": "νύχτα",
            "latin": false,
            "from": "Η νύχτα (νύξ) είναι κληρονομημένη ελληνική λέξη, συγγενής του nox. Δεν δανείστηκε από τα λατινικά.",
            "say": "νύχτα: ελληνική, αδελφή του nox. Συγγένεια, όχι δάνειο.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-sex",
            "kind": "hook",
            "la": "sex",
            "el": "έξι",
            "type": "cognate",
            "story": "sex ~ ἕξ: το αρχικό s αντιστοιχεί σε δασεία. Από εδώ το semester (sex + mensis = έξι μήνες).",
            "say": "sex ~ έξι. Το semester είναι sex + mensis.",
            "status": "general",
            "src": "γνωστή αντιστοιχία ινδοευρωπαϊκών, δεν υπάρχει στο hooks.jsonl"
          },
          {
            "id": "u1-h-septem",
            "kind": "hook",
            "la": "septem",
            "el": "επτά",
            "type": "cognate",
            "story": "septem ~ ἑπτά· δες και September (ο 7ος μήνας του παλιού ρωμαϊκού έτους).",
            "say": "septem ~ επτά, και September ο έβδομος μήνας.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-o-ilios",
            "kind": "origin",
            "w": "ήλιος",
            "latin": false,
            "from": "Ο ήλιος είναι ελληνικός, αδελφός του sol. Όταν η ετυμολογία λέει «συγγενής», δεν σημαίνει «δάνειο».",
            "say": "ήλιος: ελληνικός, αδελφός του sol.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-octo",
            "kind": "hook",
            "la": "octo",
            "el": "οκτώ",
            "type": "cognate",
            "story": "octo ~ οκτώ· δες και October (ο 8ος μήνας) και octave.",
            "say": "octo ~ οκτώ, October, octave.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-novem",
            "kind": "hook",
            "la": "novem",
            "el": "εννέα",
            "type": "cognate",
            "story": "novem ~ ἐννέα· δες και November (ο 9ος μήνας).",
            "say": "novem ~ εννέα, και November ο ένατος μήνας.",
            "status": "general",
            "src": "γνωστή αντιστοιχία ινδοευρωπαϊκών, δεν υπάρχει στο hooks.jsonl"
          },
          {
            "id": "u1-o-kardia",
            "kind": "origin",
            "w": "καρδιά",
            "latin": false,
            "from": "Η καρδιά (καρδία) είναι ελληνική, συγγενής του cor. Συγγένεια, όχι δάνειο.",
            "say": "καρδιά: ελληνική, αδελφή του cor.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-decem",
            "kind": "hook",
            "la": "decem",
            "el": "δέκα",
            "type": "cognate",
            "story": "decem ~ δέκα· δες και December (ο 10ος μήνας), decimal και decimate.",
            "say": "decem ~ δέκα. Decimal = δεκαδικός.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-viginti",
            "kind": "hook",
            "la": "viginti",
            "el": "είκοσι",
            "type": "cognate",
            "story": "viginti ~ είκοσι. Ο βαθμός σου στη Λατινική στοχεύει στο viginti.",
            "say": "viginti ~ είκοσι. Στόχος: Carpe το 20.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-o-duo",
            "kind": "origin",
            "w": "δύο",
            "latin": false,
            "from": "Το δύο είναι ελληνικό, συγγενές του duo. Και οι δύο λέξεις κληρονόμησαν το ίδιο αριθμητικό.",
            "say": "δύο: ελληνικό, αδελφό του duo.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-centum",
            "kind": "hook",
            "la": "centum",
            "el": "εκατό",
            "type": "cognate",
            "story": "centum ~ εκατό: century, cent, percent (per centum) και ο centurio, ο εκατόνταρχος.",
            "say": "centum ~ εκατό. Percent = per centum.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-pater",
            "kind": "hook",
            "la": "pater",
            "el": "πατήρ",
            "type": "cognate",
            "story": "pater ~ πατήρ: ίδια ρίζα, patriot ↔ πατριώτης. Και το Pater noster είναι το «Πάτερ ημών».",
            "say": "pater ~ πατήρ. Το patriot είναι ο πατριώτης.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-mater",
            "kind": "hook",
            "la": "materteram",
            "el": "μητρότητα",
            "type": "cognate",
            "story": "mater ~ μήτηρ. Η matertera είναι η «αδελφή της μητέρας» (mater + κατάληξη), δηλαδή η θεία. Ζεύγος του 2023: μητρότητα.",
            "lessons": [
              38
            ],
            "exam": [
              2023
            ],
            "say": "materteram: η θεία από τη μητέρα. Ρίζα mater ~ μήτηρ, και η μητρότητα βγαίνει από εκεί.",
            "status": "exam",
            "src": "Παν. 2023 Β2 (κείμενο XXXVIII)· Τεύχος Β΄ λεξιλόγιο"
          },
          {
            "id": "u1-h-frater",
            "kind": "hook",
            "la": "frater",
            "el": "φράτηρ",
            "type": "cognate",
            "story": "frater ~ φράτηρ (μέλος φρατρίας): αδελφός. Στα αγγλικά fraternal και fraternity.",
            "say": "frater ~ φράτηρ. Η φρατρία ήταν μια αδελφότητα.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-pes",
            "kind": "hook",
            "la": "pes",
            "el": "πόδι",
            "type": "cognate",
            "story": "pes, pedis ~ πούς, ποδός ~ πόδι: ίδια ρίζα. Στα αγγλικά pedal και pedestrian.",
            "say": "pes ~ πούς ~ πόδι. Το pedal είναι ό,τι πατάς.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-dens",
            "kind": "hook",
            "la": "dens",
            "el": "δόντι",
            "type": "cognate",
            "story": "dens ~ ὀδούς, ὀδόντος ~ δόντι. Στα αγγλικά dental, dentist.",
            "say": "dens ~ δόντι. Ο dentist είναι ο οδοντίατρος.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-cor",
            "kind": "hook",
            "la": "cor",
            "el": "καρδιά",
            "type": "cognate",
            "story": "cor ~ καρδία: cordial ↔ καρδιακός. Το c αντιστοιχεί στο κ.",
            "say": "cor ~ καρδιά. Cordial = από καρδιάς.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-mensis",
            "kind": "hook",
            "la": "mensis",
            "el": "μήνας",
            "type": "cognate",
            "story": "mensis ~ μήν, μήνας. Το menstrual και το semester (έξι μήνες) έχουν την ίδια ρίζα.",
            "say": "mensis ~ μήνας. Semester = sex + mensis.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-gravis",
            "kind": "hook",
            "la": "gravis",
            "el": "βαρύς",
            "type": "cognate",
            "story": "gravis ~ βαρύς, και η βαρεία είναι accent grave. Στα αγγλικά gravity.",
            "say": "gravis ~ βαρύς. Η βαρύτητα λέγεται gravity.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-iugum",
            "kind": "hook",
            "la": "iugum",
            "el": "ζυγός",
            "type": "cognate",
            "story": "iugum ~ ζυγός, coniunx ~ σύζυγος: ίδια ρίζα. Και η coniugatio (συζυγία) είναι η «ζεύξη μαζί».",
            "say": "iugum ~ ζυγός. Ο σύζυγος και η συζυγία στηρίζονται σε αυτό.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-genus",
            "kind": "hook",
            "la": "genus",
            "el": "γένος",
            "type": "cognate",
            "story": "genus ~ γένος. Στα αγγλικά gender και genre. Σεπτ. 2023 (ομογενών): genuit – γένος.",
            "say": "genus ~ γένος. Και το genre είναι ένα είδος.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-sedeo",
            "kind": "hook",
            "la": "sedeo",
            "el": "έδρα",
            "type": "cognate",
            "story": "sedeo ~ ἕδρα, ἕζομαι. Ο πρόεδρος (president) είναι αυτός που κάθεται μπροστά.",
            "say": "sedeo ~ έδρα. Ο president κάθεται πρώτος.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-equus",
            "kind": "hook",
            "la": "equus",
            "el": "ίππος",
            "type": "cognate",
            "story": "equus ~ ἵππος: equestrian ↔ ιππικός.",
            "say": "equus ~ ίππος. Equestrian = ιππικός.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-lupus",
            "kind": "hook",
            "la": "lupus",
            "el": "λύκος",
            "type": "cognate",
            "story": "lupus ~ λύκος. Ο Remus Lupin του Harry Potter έχει όνομα λύκου, και τον Ρέμο και τον Ρωμύλο τους θήλασε μια λύκαινα (lupa).",
            "say": "lupus ~ λύκος. Και ο Remo μας μεγάλωσε από λύκαινα.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-bos",
            "kind": "hook",
            "la": "bos",
            "el": "βόδι",
            "type": "cognate",
            "story": "bos ~ βους, βόδι. Στα αγγλικά bovine. Σεπτ. 2023 (ομογενών): boum – βοδινό.",
            "say": "bos ~ βους, βόδι. Το bovine είναι βοδινό.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-ovum",
            "kind": "hook",
            "la": "ovum",
            "el": "αυγό",
            "type": "cognate",
            "story": "ovum ~ ᾠόν, ωό, αυγό. Στα αγγλικά oval και ovary.",
            "say": "ovum ~ ωό ~ αυγό. Το oval έχει σχήμα αυγού.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-novus",
            "kind": "hook",
            "la": "novus",
            "el": "νέος",
            "type": "cognate",
            "story": "novus ~ νέος: novice, nova, και η novella.",
            "say": "novus ~ νέος. Nova = νέο αστέρι.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-ego",
            "kind": "hook",
            "la": "ego",
            "el": "εγώ",
            "type": "cognate",
            "story": "ego ~ ἐγώ: egoism ↔ εγωισμός.",
            "say": "ego ~ εγώ. Ο εγωισμός είναι ego-ισμός.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-dexter",
            "kind": "hook",
            "la": "dexter",
            "el": "δεξιός",
            "type": "cognate",
            "story": "dexter ~ δεξιός: το δεξί χέρι. Στα αγγλικά dexterity (επιδεξιότητα).",
            "transfer": true,
            "say": "dexter ~ δεξιός. Dexterity = επιδεξιότητα.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-augeo",
            "kind": "hook",
            "la": "augeo",
            "el": "αυξάνω",
            "type": "cognate",
            "story": "augeo ~ αὐξάνω· Augustus = ο «αυξάνων, σεβαστός».",
            "transfer": true,
            "say": "augeo ~ αυξάνω. Augustus = ο σεβαστός.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-tego",
            "kind": "hook",
            "la": "tego",
            "el": "στέγη",
            "type": "cognate",
            "story": "tego ~ στέγω (σκεπάζω): protect, στέγη, toga, tile. Protego του Harry Potter = προστατεύω.",
            "transfer": true,
            "say": "tego ~ στέγω, στέγη. Toga = αυτό που σκεπάζει.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-ruber",
            "kind": "hook",
            "la": "ruber",
            "el": "ερυθρός",
            "type": "cognate",
            "story": "ruber ~ ἐρυθρός (κόκκινος): Ερυθρά Θάλασσα, Ερυθραία, ruby, rubric.",
            "transfer": true,
            "say": "ruber ~ ερυθρός. Ruby = ερυθρό πετράδι.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-foris",
            "kind": "hook",
            "la": "foris",
            "el": "θύρα",
            "type": "cognate",
            "story": "foris, fores (θύρα) ~ θύρα: foreign = αυτός που είναι «έξω από την πόρτα».",
            "transfer": true,
            "say": "foris ~ θύρα. Foreign = από την άλλη μεριά της πόρτας.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md",
            "apart": [
              "u1-h-ianua"
            ]
          },
          {
            "id": "u1-h-anser",
            "kind": "hook",
            "la": "anser",
            "el": "χήνα",
            "type": "cognate",
            "story": "anser ~ χήν. Το αρχικό h εξαφανίστηκε από το λατινικό.",
            "transfer": true,
            "say": "anser ~ χήν. Ο χήνας είναι ο anser.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-mus",
            "kind": "hook",
            "la": "mus",
            "el": "μυς",
            "type": "cognate",
            "story": "mus ~ μῦς: ποντίκι και μυς! Το musculus είναι «ποντικάκι», από εκεί το muscle.",
            "transfer": true,
            "say": "mus ~ μυς. Ο μυς κινείται σαν ποντικάκι κάτω από το δέρμα.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (≃)· derivatives.md"
          },
          {
            "id": "u1-h-cernitur",
            "kind": "hook",
            "la": "cernitur",
            "el": "διάκριση",
            "type": "cognate",
            "story": "cerno ~ κρίνω: ξεχωρίζω, διακρίνω. Στο κείμενο: «Repente post tergum equitatus cernitur» (το ιππικό διακρίνεται). Ζεύγος του 2022.",
            "lessons": [
              16
            ],
            "exam": [
              2022
            ],
            "say": "cerno ~ κρίνω: διακρίνω. Ζεύγος του 2022, cernitur – διάκριση.",
            "status": "exam",
            "src": "Παν. 2022 Β2 (κείμενο XVI)· κλειδί"
          },
          {
            "id": "u1-h-fugiunt",
            "kind": "hook",
            "la": "fugiunt",
            "el": "πρόσφυγας",
            "type": "cognate",
            "story": "fugio ~ φεύγω. Ο πρόσφυγας είναι αυτός που φεύγει. Στο κείμενο: «hostes terga vertunt ac fugiunt». Ζεύγος του 2022.",
            "lessons": [
              16
            ],
            "exam": [
              2022
            ],
            "say": "fugio ~ φεύγω, πρόσφυγας. Ζεύγος του 2022.",
            "status": "exam",
            "src": "Παν. 2022 Β2 (κείμενο XVI)· κλειδί"
          },
          {
            "id": "u1-h-magna",
            "kind": "hook",
            "la": "magna",
            "el": "μεγαλοπρεπής",
            "type": "cognate",
            "story": "magnus ~ μέγας. Μεγαλοπρεπής = μεγάλος στην πρέπεια. Στο κείμενο: «Fit magna caedes». Ζεύγος του 2022.",
            "lessons": [
              16
            ],
            "exam": [
              2022
            ],
            "say": "magnus ~ μέγας, μεγαλοπρεπής. Ζεύγος του 2022.",
            "status": "exam",
            "src": "Παν. 2022 Β2 (κείμενο XVI)· κλειδί"
          },
          {
            "id": "u1-h-amentum",
            "kind": "hook",
            "la": "amentum",
            "el": "ιμάντας",
            "type": "cognate",
            "story": "amentum (το λουρί του ακοντίου): η επίσημη απάντηση του 2022 το αντιστοιχεί στον ιμάντα (ἱμάς), παρότι οι ετυμολόγοι το συνδέουν με το apiō/ἅπτω. Στην εξέταση ισχύει το κλειδί. Στο κείμενο: «epistulam ad amentum tragulae adliget». Ζεύγος του 2022.",
            "lessons": [
              45
            ],
            "exam": [
              2022
            ],
            "say": "amentum → ιμάντας: το λουρί του ακοντίου. Ζεύγος του 2022, όπως το δίνει το κλειδί.",
            "status": "exam",
            "src": "Παν. 2022 Β2 (κείμενο XLV)· κλειδί"
          },
          {
            "id": "u1-h-nocte",
            "kind": "hook",
            "la": "nocte",
            "el": "νυχτερινός",
            "type": "cognate",
            "story": "nox ~ νύξ, νύχτα. Στο κείμενο: «in sacello quodam nocte». Το ξόρκι Nox του Harry Potter σβήνει το φως. Ζεύγος του 2023.",
            "lessons": [
              38
            ],
            "exam": [
              2023
            ],
            "say": "nox ~ νύξ: νυχτερινός. Ζεύγος του 2023, και ξόρκι του Harry Potter.",
            "status": "exam",
            "src": "Παν. 2023 Β2 (κείμενο XXXVIII)· κλειδί"
          },
          {
            "id": "u1-h-navis",
            "kind": "hook",
            "la": "navis",
            "el": "ναυάγιο",
            "type": "cognate",
            "story": "navis ~ ναῦς. Ναυάγιο = ναῦς + ἄγνυμι. Στο κείμενο: naviculam, navem. Ζεύγος του 2023.",
            "lessons": [
              23
            ],
            "exam": [
              2023
            ],
            "say": "navis ~ ναῦς: ναυάγιο. Ζεύγος του 2023.",
            "status": "exam",
            "src": "Παν. 2023 Β2 (κείμενο XXIII)· κλειδί"
          },
          {
            "id": "u1-h-standi",
            "kind": "hook",
            "la": "standi",
            "el": "απόσταση",
            "type": "cognate",
            "story": "sto ~ ἵστημι, στάση. Απόσταση = ἀπό + στάσις. Στο κείμενο: «longā morā standi fessa». Ζεύγος του 2023.",
            "lessons": [
              38
            ],
            "exam": [
              2023
            ],
            "say": "sto ~ ἵστημι: απόσταση. Ζεύγος του 2023 (standi).",
            "status": "exam",
            "src": "Παν. 2023 Β2 (κείμενο XXXVIII)· κλειδί"
          },
          {
            "id": "u1-h-domi",
            "kind": "hook",
            "la": "domi",
            "el": "δωμάτιο",
            "type": "cognate",
            "story": "domus ~ δόμος· δωμάτιο ~ δῶμα. Το domi είναι η τοπική («στο σπίτι»). Στο κείμενο: «se domi non esse». Ζεύγος του 2025. Η ίδια οικογένεια: δομικός (domus, Σεπτ. 2023) και πολεοδομία (domestici, Σεπτ. 2022).",
            "lessons": [
              24
            ],
            "exam": [
              2025
            ],
            "say": "domus ~ δόμος, δωμάτιο. Ζεύγος του 2025 (domi). Και δομικός, πολεοδομία (Σεπτ. 2023, 2022).",
            "status": "exam",
            "src": "Παν. 2025 Β2 (κείμενο XXIV)· κλειδί",
            "apart": [
              "u1-h-hospitium",
              "u1-h-cella",
              "u1-h-villa"
            ]
          },
          {
            "id": "u1-h-imperitos",
            "kind": "hook",
            "la": "imperitos",
            "el": "πείρα",
            "type": "cognate",
            "story": "peritus ~ πεῖρα: έμπειρος. Το im-peritus είναι το άπειρος. Στο κείμενο: «quae imperitos avertunt». Ζεύγος του 2025.",
            "lessons": [
              39
            ],
            "exam": [
              2025
            ],
            "say": "peritus ~ πείρα. Το im-peritus είναι άπειρος. Ζεύγος του 2025.",
            "status": "exam",
            "src": "Παν. 2025 Β2 (κείμενο XXXIX)· κλειδί"
          },
          {
            "id": "u1-h-agunt",
            "kind": "hook",
            "la": "agunt",
            "el": "αγωγή",
            "type": "cognate",
            "story": "ago ~ ἄγω: αγωγή. Ο επίσημος κατάλογος (μάθ. 39) βάζει και το ago → ακτιβισμός, ακτιβιστής. Στο κείμενο: «praecipites agunt». Ζεύγος του 2025.",
            "lessons": [
              39
            ],
            "exam": [
              2025
            ],
            "say": "ago ~ άγω: αγωγή. Ζεύγος του 2025. Ο κατάλογος βάζει και τον ακτιβισμό.",
            "status": "exam",
            "src": "Παν. 2025 Β2 (κείμενο XXXIX)· κλειδί· κατάλογος ΥΠΑΙΘ μάθ. 39"
          },
          {
            "id": "u1-h-dotem",
            "kind": "hook",
            "la": "dotem",
            "el": "προδοσία",
            "type": "cognate",
            "story": "do ~ δίδωμι, dos = προίκα (αυτό που «δίνεται»). Προδοσία = προ + δίδωμι. Στο κείμενο: «dotem acceperunt». Ζεύγος του 2026· το dedit–δεδομένα (Σεπτ. 2025) και το dabat–μετάδοση (2023) είναι η ίδια οικογένεια.",
            "lessons": [
              35
            ],
            "exam": [
              2026
            ],
            "say": "do ~ δίδωμι: dos η προίκα, προδοσία. Ζεύγος του 2026.",
            "status": "exam",
            "src": "Παν. 2026 Β2 (κείμενο XXXV)· κλειδί"
          },
          {
            "id": "u1-h-reliquerat",
            "kind": "hook",
            "la": "reliquerat",
            "el": "ελλιπής",
            "type": "cognate",
            "story": "relinquo ~ λείπω (ἐλλείπω): αφήνω. Ελλιπής = αυτός που λείπει. Στο κείμενο: «nihil illis reliquerat pater». Ζεύγος του 2026.",
            "lessons": [
              35
            ],
            "exam": [
              2026
            ],
            "say": "relinquo ~ λείπω: ελλιπής. Ζεύγος του 2026.",
            "status": "exam",
            "src": "Παν. 2026 Β2 (κείμενο XXXV)· κλειδί"
          },
          {
            "id": "u1-h-conferre",
            "kind": "hook",
            "la": "conferre",
            "el": "αναφορά",
            "type": "cognate",
            "story": "fero ~ φέρω. Con-ferre = φέρνω μαζί· αναφορά = ἀνά + φέρω. Στο κείμενο: «tributum Scipioni conferre». Ζεύγος του 2026.",
            "lessons": [
              35
            ],
            "exam": [
              2026
            ],
            "say": "fero ~ φέρω: confero, αναφορά. Ζεύγος του 2026.",
            "status": "exam",
            "src": "Παν. 2026 Β2 (κείμενο XXXV)· κλειδί"
          },
          {
            "id": "u1-h-unguium",
            "kind": "hook",
            "la": "unguium",
            "el": "νυχοκόπτης",
            "type": "cognate",
            "story": "unguis ~ ὄνυξ (νύχι). Νυχοκόπτης = αυτός που κόβει νύχια. Στο κείμενο: «unguium resecandorum causā». Ζεύγος του 2026.",
            "lessons": [
              49
            ],
            "exam": [
              2026
            ],
            "say": "unguis ~ όνυξ: νύχι, νυχοκόπτης. Ζεύγος του 2026.",
            "status": "exam",
            "src": "Παν. 2026 Β2 (κείμενο XLIX)· κλειδί"
          },
          {
            "id": "u1-h-nomen",
            "kind": "hook",
            "la": "nomen",
            "el": "ονομασία",
            "type": "cognate",
            "story": "nomen ~ ὄνομα: nominate, ανώνυμος. Στο κείμενο: «civitati nomen dedit». Ζεύγος του Σεπτεμβρίου 2025.",
            "lessons": [
              21
            ],
            "exam": [
              2025
            ],
            "say": "nomen ~ όνομα: ονομασία. Ζεύγος του Σεπτ. 2025.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2025 Β2 (κείμενο XXI)· κλειδί"
          },
          {
            "id": "u1-h-plenae",
            "kind": "hook",
            "la": "plenae",
            "el": "πλήθος",
            "type": "cognate",
            "story": "plenus ~ πλήρης· πλήθος ~ πληθύς (το γέμισμα). Στο κείμενο: «plenae sapientium voces». Ζεύγος του Σεπτεμβρίου 2025.",
            "lessons": [
              32
            ],
            "exam": [
              2025
            ],
            "say": "plenus ~ πλήρης, πλήθος. Ζεύγος του Σεπτ. 2025.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2025 Β2 (κείμενο XXXII)"
          },
          {
            "id": "u1-h-vis",
            "kind": "hook",
            "la": "vis",
            "el": "βούληση",
            "type": "cognate",
            "story": "Το vis είναι ο β΄ ενικός του volo (θέλεις)· volo ~ βούλομαι: βούληση. Στο κείμενο: «quod neminem scire atque intellegere vis». Ζεύγος του Σεπτ. 2024: στους ομογενείς οι 5 ελληνικές επιλογές ταιριάζουν ακριβώς στις 5 λατινικές λέξεις.",
            "lessons": [
              41
            ],
            "exam": [
              2024
            ],
            "say": "vis = θέλεις (από το volo) ~ βούληση. Ζεύγος του Σεπτ. 2024.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2024 (ημερήσια και ομογενών)· λύση από τις επιλογές του θέματος"
          },
          {
            "id": "u1-h-mollia",
            "kind": "hook",
            "la": "mollia",
            "el": "μαλακός",
            "type": "cognate",
            "story": "mollis ~ μαλακός: η ετυμολογία είναι αμφιλεγόμενη, αλλά είναι η απάντηση που περιμένει το θέμα· το μαλώνω περισσεύει. Στο κείμενο: «viēta et mollia». Ζεύγος του Σεπτ. 2024.",
            "lessons": [
              27
            ],
            "exam": [
              2024
            ],
            "say": "mollis ~ μαλακός: το ζεύγος που θέλει το θέμα (το μαλώνω περισσεύει). Σεπτ. 2024.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2024 (ημερήσια και ομογενών)· λύση από τις επιλογές του θέματος"
          },
          {
            "id": "u1-h-cognosco",
            "kind": "hook",
            "la": "cognosco",
            "el": "απόγνωση",
            "type": "cognate",
            "story": "(g)nosco ~ γιγνώσκω: cognosco ~ απόγνωση (και γνώση, διάγνωση, άγνωστος). Στο κείμενο: «Ego non cognosco vocem tuam?» Ζεύγος του 2025.",
            "say": "cognosco ~ γιγνώσκω: απόγνωση. Ζεύγος του 2025.",
            "lessons": [
              24
            ],
            "exam": [
              2025
            ],
            "status": "exam",
            "src": "Παν. 2025 Β2 (κείμενο XXIV)· κλειδί",
            "apart": [
              "u1-h-adgnovit",
              "u1-h-notus"
            ]
          },
          {
            "id": "u1-h-adgnovit",
            "kind": "hook",
            "la": "adgnovit",
            "el": "γνώση",
            "type": "cognate",
            "story": "(g)nosco ~ γιγνώσκω: adgnosco ~ γνώση (και διάγνωση). Στο κείμενο: «eum latentem adgnōvit». Σεπτ. 2022: adgnovit – γνώση (ομογενών), adgnovit – διάγνωση (επαναληπτικές).",
            "say": "adgnovit ← (g)nosco ~ γιγνώσκω: γνώση. Σεπτ. 2022 (ομογενών).",
            "lessons": [
              20
            ],
            "exam": [
              2022
            ],
            "status": "exam",
            "src": "Επαν. Σεπτ. 2022 Β2 (ομογενών)· λύση από τις επιλογές του θέματος",
            "apart": [
              "u1-h-cognosco",
              "u1-h-notus"
            ]
          },
          {
            "id": "u1-h-manet",
            "kind": "hook",
            "la": "manet",
            "el": "παραμονή",
            "type": "cognate",
            "story": "maneo ~ μένω: παραμονή (και διαμονή). Στο κείμενο: «aut longa servitus manet». Σεπτ. 2023: manet – παραμονή (ομογενών), manet – διαμονή (επαναληπτικές).",
            "say": "manet ← maneo ~ μένω: παραμονή. Σεπτ. 2023.",
            "lessons": [
              43
            ],
            "exam": [
              2023
            ],
            "status": "exam",
            "src": "Επαν. Σεπτ. 2023 Β2 (ομογενών)· λύση από τις επιλογές του θέματος"
          },
          {
            "id": "u1-h-dedit",
            "kind": "hook",
            "la": "dedit",
            "el": "δεδομένα",
            "type": "cognate",
            "story": "do, dare ~ δίδωμι: dedit ~ δεδομένα. Το δεδομένο είναι «αυτό που δόθηκε». Σεπτ. 2025.",
            "say": "dedit ← do, dare ~ δίδωμι: δεδομένα. Σεπτ. 2025.",
            "exam": [
              2025
            ],
            "status": "exam",
            "src": "Επαν. Σεπτ. 2025 Β2 (ομογενών και επαναληπτικές)"
          },
          {
            "id": "u1-r-boomerang",
            "kind": "rule",
            "title": "Μπούμερανγκ: λατινικές λέξεις που ήρθαν από τα ελληνικά (⩽)",
            "say": "Το ⩽ του βιβλίου δείχνει λατινική λέξη δανεισμένη από τα ελληνικά: tragoedia, tyrannus, philosophus, marmor, paedagogus. Τα ελληνικά δεν τα δανείστηκαν πίσω.",
            "ex": [
              {
                "la": "tragoedia ⩽ τραγωδία",
                "el": "τα λατινικά πήραν τη λέξη από τα ελληνικά"
              },
              {
                "la": "tyrannus ⩽ τύραννος",
                "el": "το ίδιο: ελληνική λέξη σε λατινικό ρούχο"
              },
              {
                "la": "philosophus ⩽ φιλόσοφος",
                "el": "ελληνικό δάνειο στα λατινικά"
              },
              {
                "la": "paedagogus ⩽ παιδαγωγός",
                "el": "ο δούλος που οδηγούσε το παιδί στο σχολείο"
              }
            ],
            "terms": [
              "⩽"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Τι σημαίνει το σύμβολο ⩽ στο λεξιλόγιο του βιβλίου;",
                "options": [
                  "λατινική λέξη δανεισμένη από τα ελληνικά",
                  "ελληνική λέξη δανεισμένη από τα λατινικά",
                  "κοινή ινδοευρωπαϊκή ρίζα"
                ],
                "a": "λατινική λέξη δανεισμένη από τα ελληνικά",
                "why": "⩽ = λατινική από ελληνική· ⩾ = ελληνική από λατινική· ≃ = κοινή ρίζα."
              },
              {
                "t": "tf",
                "q": "Το λατινικό tyrannus δανείστηκε από το ελληνικό τύραννος.",
                "a": true,
                "why": "tyrannus ⩽ τύραννος."
              },
              {
                "t": "tf",
                "q": "Η ελληνική λέξη τραγωδία δανείστηκε από το λατινικό tragoedia.",
                "a": false,
                "why": "Αντίστροφα: το tragoedia ⩽ τραγωδία."
              },
              {
                "t": "tf",
                "q": "Το λατινικό scamnum (σκαμνί) είναι δάνειο των λατινικών από τα ελληνικά.",
                "a": false,
                "why": "Το scamnum ⩾ σκαμνί: δάνειο των ελληνικών από τα λατινικά."
              }
            ],
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (⩽)· derivatives.md"
          },
          {
            "id": "u1-o-gr-tragodia",
            "kind": "origin",
            "w": "τραγωδία",
            "latin": false,
            "from": "Η τραγωδία είναι ελληνική. Το λατινικό tragoedia την δανείστηκε (⩽ στο βιβλίο): η λέξη πήγε ελληνικά → λατινικά και ξαναγύρισε στο λεξιλόγιο των γλωσσών της Ευρώπης.",
            "say": "τραγωδία: ελληνική. Το tragoedia είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (⩽)· derivatives.md"
          },
          {
            "id": "u1-o-gr-tyrannos",
            "kind": "origin",
            "w": "τύραννος",
            "latin": false,
            "from": "Ο τύραννος είναι ελληνική λέξη (προελληνική ίσως η ρίζα της). Το λατινικό tyrannus την δανείστηκε (⩽ στο βιβλίο).",
            "say": "τύραννος: ελληνική. Το tyrannus είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (⩽)· derivatives.md"
          },
          {
            "id": "u1-o-gr-filosofos",
            "kind": "origin",
            "w": "φιλόσοφος",
            "latin": false,
            "from": "Ο φιλόσοφος είναι ελληνική λέξη (φίλος + σοφός). Το λατινικό philosophus την δανείστηκε (⩽ στο βιβλίο).",
            "say": "φιλόσοφος: ελληνική. Το philosophus είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (⩽)· derivatives.md"
          },
          {
            "id": "u1-o-gr-marmaro",
            "kind": "origin",
            "w": "μάρμαρο",
            "latin": false,
            "from": "Το μάρμαρο είναι ελληνική λέξη (μάρμαρος, «λαμπερή πέτρα»). Το λατινικό marmor την δανείστηκε (⩽ στο βιβλίο).",
            "say": "μάρμαρο: ελληνική. Το marmor είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (⩽)· derivatives.md"
          },
          {
            "id": "u1-o-gr-paidagogos",
            "kind": "origin",
            "w": "παιδαγωγός",
            "latin": false,
            "from": "Ο παιδαγωγός είναι ελληνική λέξη (παῖς + ἄγω). Το λατινικό paedagogus την δανείστηκε (⩽ στο βιβλίο).",
            "say": "παιδαγωγός: ελληνική. Το paedagogus είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "book",
            "src": "Τεύχος Β΄ λεξιλόγιο (⩽)· derivatives.md"
          },
          {
            "id": "u1-o-gr-scholi",
            "kind": "origin",
            "w": "σχολή",
            "latin": false,
            "from": "Η σχολή (σχολή = ελεύθερος χρόνος) είναι ελληνική. Το λατινικό schola την δανείστηκε, και από εκεί το school.",
            "say": "σχολή: ελληνική. Το schola είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "general",
            "src": "derivatives.md (el/en.wiktionary)"
          },
          {
            "id": "u1-o-gr-theatro",
            "kind": "origin",
            "w": "θέατρο",
            "latin": false,
            "from": "Το θέατρο (θέατρον, από το θεάομαι) είναι ελληνική λέξη. Το λατινικό theatrum την δανείστηκε.",
            "say": "θέατρο: ελληνική. Το theatrum είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "general",
            "src": "derivatives.md (el/en.wiktionary)"
          },
          {
            "id": "u1-o-gr-michani",
            "kind": "origin",
            "w": "μηχανή",
            "latin": false,
            "from": "Η μηχανή (μηχανή, δωρικά μαχανά) είναι ελληνική. Το λατινικό machina την δανείστηκε, και από εκεί η machine.",
            "say": "μηχανή: ελληνική. Το machina είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "general",
            "src": "derivatives.md (el/en.wiktionary)"
          },
          {
            "id": "u1-o-gr-poiitis",
            "kind": "origin",
            "w": "ποιητής",
            "latin": false,
            "from": "Ο ποιητής (από το ποιέω) είναι ελληνική λέξη. Το λατινικό poeta την δανείστηκε, και από εκεί το poet.",
            "say": "ποιητής: ελληνική. Το poeta είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "general",
            "src": "derivatives.md (el/en.wiktionary)"
          },
          {
            "id": "u1-o-gr-skini",
            "kind": "origin",
            "w": "σκηνή",
            "latin": false,
            "from": "Η σκηνή (σκηνή = τέντα, παράσταση) είναι ελληνική. Το λατινικό scaena/scena την δανείστηκε, και από εκεί το scene.",
            "say": "σκηνή: ελληνική. Το scaena είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "general",
            "src": "derivatives.md (el/en.wiktionary)"
          },
          {
            "id": "u1-o-gr-mousiki",
            "kind": "origin",
            "w": "μουσική",
            "latin": false,
            "from": "Η μουσική (τέχνη των Μουσών) είναι ελληνική. Το λατινικό musica την δανείστηκε, και από εκεί το music.",
            "say": "μουσική: ελληνική. Το musica είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "general",
            "src": "derivatives.md (el/en.wiktionary)"
          },
          {
            "id": "u1-o-gr-istoria",
            "kind": "origin",
            "w": "ιστορία",
            "latin": false,
            "from": "Η ιστορία (ἱστορία = έρευνα) είναι ελληνική. Το λατινικό historia την δανείστηκε, και από εκεί το history.",
            "say": "ιστορία: ελληνική. Το historia είναι δάνειο ΑΠΟ τα ελληνικά.",
            "status": "general",
            "src": "derivatives.md (el/en.wiktionary)"
          }
        ]
      },
      {
        "id": "u1l3",
        "title": "Ο επίσημος κατάλογος: μαθήματα 16-22",
        "items": [
          {
            "id": "u1-h-gladius",
            "kind": "hook",
            "la": "gladius",
            "el": "γλαδιόλα",
            "type": "official",
            "story": "gladius (το ξίφος) → γλαδιόλα (λουλούδι). Η γλαδιόλα έχει φύλλα σαν μικρά ξίφη (gladiolus = μικρό gladius).",
            "lessons": [
              16
            ],
            "say": "gladius (το ξίφος) → γλαδιόλα. Η γλαδιόλα έχει φύλλα σαν μικρά ξίφη (gladiolus = μικρό gladius).",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 16"
          },
          {
            "id": "u1-h-princeps",
            "kind": "hook",
            "la": "princeps",
            "el": "πρίγκιπας",
            "type": "official",
            "story": "princeps (ο ηγεμόνας) → πρίγκιπας, πριγκιπάτο. primus + capere: ο πρώτος που παίρνει τη θέση. Στα αγγλικά prince, principal.",
            "lessons": [
              16
            ],
            "say": "princeps (ο ηγεμόνας) → πρίγκιπας. primus + capere: ο πρώτος που παίρνει τη θέση. Στα αγγλικά prince, principal.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 16"
          },
          {
            "id": "u1-h-signum",
            "kind": "hook",
            "la": "signum",
            "el": "σινιάλο",
            "type": "official",
            "story": "signum (η σημαία, το σημείο) → σινιάλο. Sign, signal, design: όλα βγαίνουν από το signum. Το ζεύγος στηρίζεται μόνο στον κατάλογο του υπουργείου: ως ετυμολογία δεν έχει δεύτερη πηγή, αλλά στην εξέταση ισχύει ο κατάλογος.",
            "lessons": [
              16
            ],
            "say": "signum (η σημαία, το σημείο) → σινιάλο. Sign, signal, design: όλα βγαίνουν από το signum.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 16"
          },
          {
            "id": "u1-h-militaris",
            "kind": "hook",
            "la": "militaris",
            "el": "μιλιταρισμός",
            "type": "official",
            "story": "militaris (στρατιωτικός) → μιλιταρισμός. Και ο miles (στρατιώτης) δίνει τον ίδιο μιλιταρισμό στα μαθήματα 39, 40, 45 και 48.",
            "lessons": [
              16,
              39,
              40,
              45,
              48
            ],
            "say": "militaris (στρατιωτικός) → μιλιταρισμός. Και ο miles (στρατιώτης) τον δίνει στα μαθήματα 39, 40, 45 και 48.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 16, 39, 40, 45, 48"
          },
          {
            "id": "u1-h-numerus",
            "kind": "hook",
            "la": "numerus",
            "el": "νούμερο",
            "type": "official",
            "story": "numerus (ο αριθμός) → νούμερο. Number, numeral, innumerable. Το «νούμερο» ήρθε από το ιταλικό numero.",
            "lessons": [
              16,
              22
            ],
            "say": "numerus (ο αριθμός) → νούμερο. Number, numeral, innumerable. Το «νούμερο» ήρθε από το ιταλικό numero.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 16, 22"
          },
          {
            "id": "u1-h-arma",
            "kind": "hook",
            "la": "arma",
            "el": "αρματολός",
            "type": "official",
            "story": "arma (τα όπλα) → ο αρματολός, τα άρματα. Σεπτ. 2022: armis – αρματολός. Arma virumque cano: «όπλα και άνδρα ψάλλω», ο πρώτος στίχος της Αινειάδας. Army, armour.",
            "lessons": [
              16,
              23,
              40
            ],
            "say": "arma (τα όπλα) → αρματολός (Σεπτ. 2022: armis – αρματολός). Και τα άρματα. Army, armour.",
            "status": "exam",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 16, 23, 40· Επαν. Σεπτ. 2022 Β2 (ομογενών)",
            "exam": [
              2022
            ],
            "alts": [
              "άρματα"
            ]
          },
          {
            "id": "u1-h-dux",
            "kind": "hook",
            "la": "dux",
            "el": "δούκας",
            "type": "official",
            "story": "dux (αρχηγός) → δούκας, δουκάτο. Το duke και ο Il Duce έχουν το ίδιο dux.",
            "lessons": [
              16,
              21,
              34
            ],
            "say": "dux (αρχηγός) → δούκας. Το duke και ο Il Duce έχουν το ίδιο dux.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 16, 21, 34",
            "alts": [
              "δουκάτο"
            ]
          },
          {
            "id": "u1-h-mitto",
            "kind": "hook",
            "la": "mitto",
            "el": "κομισάριος",
            "type": "official",
            "story": "mitto (στέλνω) → κομισάριος (επίτροπος), μισιονάριος (ιεραπόστολος καθολικής εκκλησίας). mitto, misi, missum: το σουπίνο missum σου δίνει τη mission και τη missio.",
            "lessons": [
              16,
              36,
              45,
              50
            ],
            "say": "mitto (στέλνω) → κομισάριος. mitto, misi, missum: το σουπίνο missum σου δίνει τη mission και τη missio.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 16, 36, 45, 50",
            "alts": [
              "μισιονάριος"
            ]
          },
          {
            "id": "u1-h-verto",
            "kind": "hook",
            "la": "verto",
            "el": "βερσιόν",
            "type": "official",
            "story": "verto (στρέφω) → η βερσιόν (εκδοχή, παραλλαγή), βέρτιγκο (ίλιγγος). Η version είναι μια «στροφή» της ιστορίας, και το βέρτιγκο σε κάνει να γυρνά το κεφάλι. Και το vice versa.",
            "lessons": [
              16
            ],
            "say": "verto (στρέφω) → βερσιόν. Η version είναι μια «στροφή» της ιστορίας, και το βέρτιγκο σε κάνει να γυρνά το κεφάλι. Και το vice versa.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 16"
          },
          {
            "id": "u1-h-curro",
            "kind": "hook",
            "la": "curro",
            "el": "κούρσα",
            "type": "official",
            "story": "curro (τρέχω) → κούρσα (αγώνας ταχύτητας), κούριερ (ταχυδιανομέας). Curriculum vitae = «η διαδρομή της ζωής» και ο cursor είναι «ο δρομέας». Σεπτ. 2022: discurrens – κούρσα.",
            "lessons": [
              16,
              20,
              43
            ],
            "say": "curro (τρέχω) → κούρσα. Curriculum vitae = «η διαδρομή της ζωής», ο cursor = «ο δρομέας».",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 16, 20, 43"
          },
          {
            "id": "u1-h-tabernaculum",
            "kind": "hook",
            "la": "tabernaculum",
            "el": "ταβέρνα",
            "type": "official",
            "story": "tabernaculum (σκηνή) είναι υποκοριστικό του taberna (καλύβα, μαγαζί) → ταβέρνα. Ο κατάλογος βάζει το tabernaculum, η ρίζα είναι το taberna.",
            "lessons": [
              17
            ],
            "say": "tabernaculum (σκηνή) = υποκοριστικό του taberna (καλύβα, μαγαζί) → ταβέρνα. Ο κατάλογος βάζει το tabernaculum.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 17"
          },
          {
            "id": "u1-h-communis",
            "kind": "hook",
            "la": "communis",
            "el": "κομμουνισμός",
            "type": "official",
            "story": "communis (κοινός) → κομμουνισμός. Community, communication: ό,τι είναι κοινό. Στο μάθημα 46 ξαναεμφανίζεται.",
            "lessons": [
              17,
              46
            ],
            "say": "communis (κοινός) → κομμουνισμός. Community, communication: ό,τι είναι κοινό. Στο μάθημα 46 ξαναεμφανίζεται.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 17, 46"
          },
          {
            "id": "u1-h-miseror",
            "kind": "hook",
            "la": "miseror",
            "el": "μιζέρια",
            "type": "official",
            "story": "miseror (θρηνώ, λυπάμαι κάποιον) → μιζέρια, μίζερος. miser = άθλιος (μάθ. 37, 43): Les Misérables, «Οι Άθλιοι» του Ουγκώ.",
            "lessons": [
              17,
              35,
              37,
              43
            ],
            "say": "miseror (θρηνώ, λυπάμαι κάποιον) → μιζέρια. miser = άθλιος: Les Misérables, «Οι Άθλιοι» του Ουγκώ.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 17, 35, 37, 43 (miser)"
          },
          {
            "id": "u1-h-mercator",
            "kind": "hook",
            "la": "mercator",
            "el": "μερκαντιλισμός",
            "type": "official",
            "story": "mercator (ο έμπορος) → μερκαντιλισμός (εμποροκρατία, οικονομικό σύστημα). Market και merchant έχουν την ίδια οικογένεια. Στο μάθημα 35 το δίνει και το mercenarius.",
            "lessons": [
              17,
              35
            ],
            "say": "mercator (ο έμπορος) → μερκαντιλισμός. Market και merchant έχουν την ίδια οικογένεια. Στο μάθημα 35 το δίνει και το mercenarius.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 17, 35"
          },
          {
            "id": "u1-h-virtus",
            "kind": "hook",
            "la": "virtus",
            "el": "βιρτουόζος",
            "type": "official",
            "story": "virtus (αρετή, χάρισμα) → βιρτουόζος (δεξιοτέχνης). virtus ← vir: η αρετή του άνδρα. Virtue στα αγγλικά, και ο βιρτουόζος έχει virtus στο έπακρο.",
            "lessons": [
              17,
              39
            ],
            "say": "virtus (αρετή, χάρισμα) → βιρτουόζος. virtus ← vir: η αρετή του άνδρα. Virtue στα αγγλικά, και ο βιρτουόζος έχει virtus στο έπακρο.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 17, 39"
          },
          {
            "id": "u1-h-pastor",
            "kind": "hook",
            "la": "pastor",
            "el": "πάστορας",
            "type": "official",
            "story": "pastor (ο ποιμένας, ο βοσκός) → πάστορας (προτεστάντης ιερέας). Ο πάστορας είναι ο «ποιμένας» του ποιμνίου του. Στα αγγλικά pastor και pasture (βοσκοτόπι).",
            "lessons": [
              18
            ],
            "say": "pastor (ο ποιμένας, ο βοσκός) → πάστορας. Ο πάστορας είναι ο «ποιμένας» του ποιμνίου του. Στα αγγλικά pastor και pasture (βοσκοτόπι).",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 18"
          },
          {
            "id": "u1-h-traho",
            "kind": "hook",
            "la": "traho",
            "el": "τρακτέρ",
            "type": "official",
            "story": "traho (τραβάω) → τρακτέρ. Το τρακτέρ τραβά, tractor. Attraction, extract: και στο Β2 του Σεπτ. 2022 ζητήθηκε το τρακτέρ.",
            "lessons": [
              18,
              47
            ],
            "say": "traho (τραβάω) → τρακτέρ. Το τρακτέρ τραβά, tractor. Attraction, extract: και στο Β2 του Σεπτ. 2022 ζητήθηκε το τρακτέρ.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 18, 47"
          },
          {
            "id": "u1-h-confundo",
            "kind": "hook",
            "la": "confundo",
            "el": "κομφούζιο",
            "type": "official",
            "story": "confundo (συγχέω) → κομφούζιο (μπερδεμένη κατάσταση). fundere = χύνω: confuse, σαν να χύνονται όλα μαζί. Το ξόρκι Confundo του Harry Potter. Το ζεύγος στηρίζεται μόνο στον κατάλογο του υπουργείου: ως ετυμολογία δεν έχει δεύτερη πηγή, αλλά στην εξέταση ισχύει ο κατάλογος.",
            "lessons": [
              18
            ],
            "say": "confundo (συγχέω) → κομφούζιο. fundere = χύνω: confuse, σαν να χύνονται όλα μαζί. Το ξόρκι Confundo του Harry Potter.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 18"
          },
          {
            "id": "u1-h-pravus",
            "kind": "hook",
            "la": "pravus",
            "el": "μπράβος",
            "type": "official",
            "story": "pravus (διεστραμμένος) → μπράβος. Ο μπράβος ξεκίνησε από το pravus (διεστραμμένος) και έφτασε στο bravo.",
            "lessons": [
              19
            ],
            "say": "pravus (διεστραμμένος) → μπράβος. Ο μπράβος ξεκίνησε από το pravus (διεστραμμένος) και έφτασε στο bravo.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 19"
          },
          {
            "id": "u1-h-socius",
            "kind": "hook",
            "la": "socius",
            "el": "σοσιαλισμός",
            "type": "official",
            "story": "socius (σύντροφος) → σοσιαλισμός. Social, society. Το 2024 ζητήθηκε: σοσιαλισμός – socii.",
            "lessons": [
              19
            ],
            "say": "socius (σύντροφος) → σοσιαλισμός. Social, society. Το 2024 ζητήθηκε: σοσιαλισμός – socii.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 19"
          },
          {
            "id": "u1-h-pugna",
            "kind": "hook",
            "la": "pugna",
            "el": "μπουνιά",
            "type": "official",
            "story": "pugna (μάχη) → μπουνιά. Το pugno (μάχομαι, μάθ. 37) δίνει την ίδια μπουνιά. Το pugnus (γροθιά) είναι της ίδιας οικογένειας: pugna = μάχη με γροθιές.",
            "lessons": [
              19,
              37
            ],
            "say": "pugna (μάχη) → μπουνιά. Το pugnus (γροθιά) είναι της ίδιας οικογένειας: pugna = μάχη με γροθιές.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 19, 37"
          },
          {
            "id": "u1-h-cado",
            "kind": "hook",
            "la": "cado",
            "el": "κάζο",
            "type": "official",
            "story": "cado (πέφτω) → (το) κάζο (ζημιά, πάθημα, στραπάτσο). Το casus (μάθ. 37, 45) δίνει κι αυτό το κάζο και είναι και η πτώση της γραμματικής. Cado, casus, occasion: τα πάντα «πέφτουν» εδώ.",
            "lessons": [
              20,
              37,
              43,
              44,
              45,
              46
            ],
            "say": "cado (πέφτω) → κάζο. Το casus είναι και η πτώση της γραμματικής. Cado, casus, occasion: τα πάντα «πέφτουν» εδώ.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 20, 37, 43, 44, 45, 46"
          },
          {
            "id": "u1-h-diaeta",
            "kind": "hook",
            "la": "diaeta",
            "el": "δίαιτα",
            "type": "official",
            "story": "diaeta ((θερινή) κατοικία) → δίαιτα. Η λέξη πήγε ελληνικά → λατινικά → ελληνικά: η δίαιτα είναι ελληνική και το diaeta την δανείστηκε. Ο κατάλογος την έχει ως ζεύγος, και στο Β2 τη γράφεις κανονικά.",
            "lessons": [
              20
            ],
            "say": "diaeta ((θερινή) κατοικία) → δίαιτα. Η λέξη πήγε ελληνικά → λατινικά → ελληνικά· ο κατάλογος την έχει ως ζεύγος.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 20"
          },
          {
            "id": "u1-h-solarium",
            "kind": "hook",
            "la": "solarium",
            "el": "σολάριουμ",
            "type": "official",
            "story": "solarium (λιακωτό) → σολάριουμ. Από το sol (ο ήλιος): ο χώρος που ψήνεσαι. Solar = ηλιακός.",
            "lessons": [
              20
            ],
            "say": "solarium (λιακωτό) → σολάριουμ. Από το sol (ο ήλιος): ο χώρος που ψήνεσαι. Solar = ηλιακός.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 20"
          },
          {
            "id": "u1-h-velum",
            "kind": "hook",
            "la": "velum",
            "el": "βέλο",
            "type": "official",
            "story": "velum (κουρτίνα) → βέλο, βήλο. Το velum είναι το πανί που σκεπάζει: το βέλο κρύβει το πρόσωπο και το βήλο είναι ένα κομμάτι πανί.",
            "lessons": [
              20
            ],
            "say": "velum (κουρτίνα) → βέλο. Το velum είναι το πανί που σκεπάζει: το βέλο κρύβει το πρόσωπο και το βήλο είναι ένα κομμάτι πανί.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 20"
          },
          {
            "id": "u1-h-dictator",
            "kind": "hook",
            "la": "dictator",
            "el": "δικτάτορας",
            "type": "official",
            "story": "dictator (αρχιστράτηγος με έκτακτες εξουσίες) → δικτάτορας. dico → dictator: αυτός που «υπαγορεύει». Και το dictionary.",
            "lessons": [
              21
            ],
            "say": "dictator (αρχιστράτηγος με έκτακτες εξουσίες) → δικτάτορας. dico → dictator: αυτός που «υπαγορεύει». Και το dictionary.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 21"
          },
          {
            "id": "u1-h-fructus",
            "kind": "hook",
            "la": "fructus",
            "el": "φρούτο",
            "type": "official",
            "story": "fructus (ο καρπός) → φρούτο. Fruit, fructose. Ο καρπός του κόπου σου θα είναι το 20.",
            "lessons": [
              22
            ],
            "say": "fructus (ο καρπός) → φρούτο. Fruit, fructose. Ο καρπός του κόπου σου θα είναι το 20.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 22"
          },
          {
            "id": "u1-h-res",
            "kind": "hook",
            "la": "res",
            "el": "ρεαλισμός",
            "type": "official",
            "story": "res (πράγμα) → ρεαλισμός· ρεπουμπλικάνοι (res publica). Η πιο επαναλαμβανόμενη λέξη του καταλόγου. Το 2024 ζητήθηκε ρεαλιστής – rem. Το ζεύγος res publica → ρεπουμπλικάνοι στηρίζεται μόνο στον κατάλογο του υπουργείου (δεύτερη πηγή δεν βρέθηκε), αλλά στην εξέταση ισχύει ο κατάλογος.",
            "lessons": [
              22,
              30,
              37,
              38,
              39,
              40,
              45,
              46
            ],
            "say": "res (πράγμα) → ρεαλισμός. Η πιο επαναλαμβανόμενη λέξη του καταλόγου. Το 2024 ζητήθηκε ρεαλιστής – rem.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 22, 30, 37, 38, 39, 40, 45, 46"
          },
          {
            "id": "u1-h-servio",
            "kind": "hook",
            "la": "servio",
            "el": "σερβιτόρος",
            "type": "official",
            "story": "servio (υπηρετώ) → σερβιτόρος, σερβίρω. Serve, service, servant. Ο servus (δούλος) και η servitus (δουλεία, μάθ. 43) είναι της ίδιας οικογένειας, και ο σερβιτόρος σε υπηρετεί.",
            "lessons": [
              22,
              28,
              37,
              43,
              48
            ],
            "say": "servio (υπηρετώ) → σερβιτόρος. Serve, service, servant. Ο servus (δούλος) είναι της ίδιας οικογένειας, και ο σερβιτόρος σε υπηρετεί.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 22, 28, 37, 43, 48"
          },
          {
            "id": "u1-h-motus",
            "kind": "hook",
            "la": "motus",
            "el": "μοτίβο",
            "type": "official",
            "story": "motus (η κίνηση) → μοτίβο, μοτέρ, μοτοσικλέτα. Το μοτέρ κινεί. Motion, motor, emotion: όλα από το moveo, motus.",
            "lessons": [
              22,
              31
            ],
            "say": "motus (η κίνηση) → μοτίβο. Το μοτέρ κινεί. Motion, motor, emotion: όλα από το moveo, motus.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 22, 31",
            "alts": [
              "μοτέρ",
              "μοτοσικλέτα"
            ]
          },
          {
            "id": "u1-r-pat-ismos1",
            "kind": "rule",
            "title": "Οικογένεια -ισμός (I): μιλιταρισμός, ρεαλισμός, σοσιαλισμός, ιμπεριαλισμός",
            "say": "Το -ισμός/-ιστής μπήκε στα ελληνικά από γαλλικά και ιταλικά. Κόψε το επίθημα και θα βρεις τη ρίζα: ρεαλισμός ← res, σοσιαλισμός ← socius.",
            "ex": [
              {
                "la": "militaris → μιλιταρισμός",
                "el": "στρατιωτικός → ο μιλιταρισμός"
              },
              {
                "la": "res → ρεαλισμός, ρεαλιστής",
                "el": "το «πράγμα»· ρεαλιστής – rem, Παν. 2024"
              },
              {
                "la": "socius → σοσιαλισμός",
                "el": "ο σύντροφος· Β2 του 2024"
              },
              {
                "la": "impero → ιμπεριαλισμός",
                "el": "διατάζω → ο ιμπεριαλισμός"
              }
            ],
            "terms": [
              "επίθημα -ισμός"
            ],
            "quiz": [
              {
                "t": "bucket",
                "q": "Βάλε κάθε λέξη στη λατινική της ρίζα",
                "buckets": [
                  "militaris",
                  "res",
                  "socius",
                  "impero"
                ],
                "items": [
                  {
                    "text": "μιλιταρισμός",
                    "bucket": "militaris"
                  },
                  {
                    "text": "ρεαλισμός",
                    "bucket": "res"
                  },
                  {
                    "text": "ρεαλιστής",
                    "bucket": "res"
                  },
                  {
                    "text": "σοσιαλισμός",
                    "bucket": "socius"
                  },
                  {
                    "text": "ιμπεριαλισμός",
                    "bucket": "impero"
                  }
                ]
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική ρίζα κρύβεται στο «σοσιαλισμός»;",
                "options": [
                  "socius",
                  "solus",
                  "sal"
                ],
                "a": "socius",
                "why": "socius (σύντροφος) → σοσιαλισμός, μέσω γαλλικών και ιταλικών."
              },
              {
                "t": "tf",
                "q": "Το «ιμπεριαλισμός» έχει ρίζα το impero (διατάζω).",
                "a": true,
                "why": "Κατάλογος υπουργείου, μάθ. 36, 39, 48, 50."
              },
              {
                "t": "mcq",
                "q": "Τι κάνεις πρώτο όταν βλέπεις μια λέξη σε -ισμός στη Στήλη Β;",
                "options": [
                  "κόβω το -ισμός και ψάχνω τη ρίζα",
                  "ψάχνω λατινική λέξη που τελειώνει σε -us",
                  "μεταφράζω ολόκληρη τη λέξη στα αγγλικά"
                ],
                "a": "κόβω το -ισμός και ψάχνω τη ρίζα",
                "why": "Το επίθημα δεν είναι λατινικό· η ρίζα είναι αυτή που αντιστοιχεί στο κείμενο."
              }
            ],
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27 (ομαδοποίηση δική μας)"
          }
        ]
      },
      {
        "id": "u1l4",
        "title": "Ο επίσημος κατάλογος: μαθήματα 23-33",
        "items": [
          {
            "id": "u1-h-siccus",
            "kind": "hook",
            "la": "siccus",
            "el": "σέκος",
            "type": "official",
            "story": "siccus (στεγνός, ξηρός) → σέκος (ξερός, άναυδος, στον τόπο νεκρός). Στο κείμενο της Arria: siccis oculis, «με στεγνά μάτια».",
            "lessons": [
              23
            ],
            "say": "siccus (στεγνός, ξηρός) → σέκος. Στο κείμενο της Arria: siccis oculis, «με στεγνά μάτια».",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 23"
          },
          {
            "id": "u1-h-ascendo",
            "kind": "hook",
            "la": "ascendo",
            "el": "ασανσέρ",
            "type": "official",
            "story": "ascendo (ανεβαίνω) → ασανσέρ. Ascend, descend. Το ξόρκι Ascendio του Harry Potter σε ανεβάζει. Το ασανσέρ ήρθε από τα γαλλικά.",
            "lessons": [
              23
            ],
            "say": "ascendo (ανεβαίνω) → ασανσέρ. Ascend, descend. Το ξόρκι Ascendio του Harry Potter σε ανεβάζει. Το ασανσέρ ήρθε από τα γαλλικά.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 23"
          },
          {
            "id": "u1-h-piscatorius",
            "kind": "hook",
            "la": "piscatorius",
            "el": "πισίνα",
            "type": "official",
            "story": "piscatorius (ψαράδικος) → πισίνα. piscis = ψάρι → piscina (ιχθυοτροφείο) → πισίνα. Στο κείμενο: piscatoriam naviculam.",
            "lessons": [
              23
            ],
            "say": "piscatorius (ψαράδικος) → πισίνα. piscis = ψάρι → piscina (ιχθυοτροφείο) → πισίνα. Στο κείμενο: piscatoriam naviculam.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 23"
          },
          {
            "id": "u1-h-ianua",
            "kind": "hook",
            "la": "ianua",
            "el": "Ιανουάριος",
            "type": "official",
            "story": "ianua (πόρτα) → Ιανουάριος. Ο Ianus ήταν ο θεός των θυρών και των αρχών. Ζητήθηκε στο Β2 του Σεπτ. 2022 (ianuae).",
            "lessons": [
              23
            ],
            "say": "ianua (πόρτα) → Ιανουάριος. Ο Ianus ήταν ο θεός των θυρών και των αρχών. Ζητήθηκε στο Β2 του Σεπτ. 2022 (ianuae).",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 23",
            "apart": [
              "u1-h-porta",
              "u1-h-foris"
            ]
          },
          {
            "id": "u1-h-vinco",
            "kind": "hook",
            "la": "vinco",
            "el": "Βίκτωρ",
            "type": "official",
            "story": "vinco (νικώ) → Βίκτωρ, Βικτωρία (κύρια ονόματα). Το victor (ο νικητής) και το victoria (η νίκη) στο μάθημα 37 δίνουν τα ίδια ονόματα. Veni, vidi, vici: το vici είναι το vinco.",
            "lessons": [
              23,
              37
            ],
            "say": "vinco (νικώ) → Βίκτωρ. Veni, vidi, vici: το vici είναι το vinco. Victory, και ο Βίκτωρ είναι ο νικητής.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 23, 37"
          },
          {
            "id": "u1-h-oculus",
            "kind": "hook",
            "la": "oculus",
            "el": "κιάλια",
            "type": "official",
            "story": "oculus (μάτι) → τα κιάλια. Ocular, binoculars. Το oculus είναι και συγγενές του ομηρικού ὄσσε (τα μάτια). Το ζεύγος στηρίζεται μόνο στον κατάλογο του υπουργείου: ως ετυμολογία δεν έχει δεύτερη πηγή, αλλά στην εξέταση ισχύει ο κατάλογος.",
            "lessons": [
              23
            ],
            "say": "oculus (μάτι) → κιάλια. Ocular, binoculars. Το oculus είναι και συγγενές του ομηρικού ὄσσε (τα μάτια).",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 23"
          },
          {
            "id": "u1-h-bene",
            "kind": "hook",
            "la": "bene",
            "el": "μπόνους",
            "type": "official",
            "story": "bene (καλά) → μπόνους, μπουνάτσα (η καλοκαιρία). Το bene (καλά) και το bonus (καλός) είναι από την ίδια ρίζα· η μπουνάτσα είναι η «καλή» θάλασσα.",
            "lessons": [
              23,
              41,
              46
            ],
            "say": "bene (καλά) → μπόνους. Το bene (καλά) και το bonus (καλός) είναι από την ίδια ρίζα· η μπουνάτσα είναι η «καλή» θάλασσα.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 23, 41, 46"
          },
          {
            "id": "u1-h-pars",
            "kind": "hook",
            "la": "pars",
            "el": "παρτίδα",
            "type": "official",
            "story": "pars (το μέρος) → παρτίδα, πάρτη, πάρτι, παρτιτούρα. Σεπτ. 2023: partem – παρτίδα. Pars pro toto = το μέρος αντί για το όλον. Part, party, partial.",
            "lessons": [
              23,
              46
            ],
            "say": "pars (το μέρος) → παρτίδα (Σεπτ. 2023: partem – παρτίδα). Και πάρτη, πάρτι, παρτιτούρα.",
            "status": "exam",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 23, 46· Επαν. Σεπτ. 2023 Β2 (ομογενών)",
            "exam": [
              2023
            ],
            "alts": [
              "πάρτη",
              "πάρτι",
              "παρτιτούρα"
            ]
          },
          {
            "id": "u1-h-arbor",
            "kind": "hook",
            "la": "arbor",
            "el": "άλμπουρο",
            "type": "official",
            "story": "arbor (δέντρο) → άλμπουρο (το κατάρτι). Το άλμπουρο είναι ένα ψηλό «δέντρο» του πλοίου (ενετικό albero).",
            "lessons": [
              25
            ],
            "say": "arbor (δέντρο) → άλμπουρο. Το άλμπουρο είναι ένα ψηλό «δέντρο» του πλοίου (ενετικό albero).",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 25"
          },
          {
            "id": "u1-h-murus",
            "kind": "hook",
            "la": "murus",
            "el": "μουράγιο",
            "type": "official",
            "story": "murus (το τείχος, πληθ. muri: τα τείχη) → μουράγιο (προκυμαία, χτιστό τμήμα λιμανιού). Το μουράγιο είναι το τείχος του λιμανιού: muro, mural.",
            "lessons": [
              25
            ],
            "say": "murus (το τείχος, πληθ. muri: τα τείχη) → μουράγιο. Το μουράγιο είναι το τείχος του λιμανιού: mural.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 25"
          },
          {
            "id": "u1-h-extremus",
            "kind": "hook",
            "la": "extremus",
            "el": "εξτρεμισμός",
            "type": "official",
            "story": "extremus (έσχατος) → εξτρεμισμός. Extreme = ο έσχατος, αυτός που πάει στο άκρο. Ο εξτρεμισμός ήρθε από τα γαλλικά.",
            "lessons": [
              25
            ],
            "say": "extremus (έσχατος) → εξτρεμισμός. Extreme = ο έσχατος, αυτός που πάει στο άκρο. Ο εξτρεμισμός ήρθε από τα γαλλικά.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 25"
          },
          {
            "id": "u1-h-minor",
            "kind": "hook",
            "la": "minor",
            "el": "μίνι",
            "type": "official",
            "story": "minor (μικρότερος) → μίνι, μινόρε. Η μινόρε κλίμακα είναι η «μικρότερη». Minus, minister (ο μικρότερος).",
            "lessons": [
              26,
              27,
              39
            ],
            "say": "minor (μικρότερος) → μίνι. Η μινόρε κλίμακα είναι η «μικρότερη». Minus, minister (ο μικρότερος).",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 26, 27, 39"
          },
          {
            "id": "u1-h-festivus",
            "kind": "hook",
            "la": "festivus",
            "el": "φεστιβάλ",
            "type": "official",
            "story": "festivus (πρόσχαρος) → φεστιβάλ. Festive, festival: το γλέντι. Στο κείμενο του Πλίνιου: nihil festivius.",
            "lessons": [
              26
            ],
            "say": "festivus (πρόσχαρος) → φεστιβάλ. Festive, festival: το γλέντι. Στο κείμενο του Πλίνιου: nihil festivius.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 26"
          },
          {
            "id": "u1-h-patientia",
            "kind": "hook",
            "la": "patientia",
            "el": "πασιέντσα",
            "type": "official",
            "story": "patientia (υπομονή) → πασιέντσα. Η πασιέντσα είναι το παιχνίδι με τράπουλα που θέλει υπομονή. Patient = αυτός που υπομένει.",
            "lessons": [
              26,
              43
            ],
            "say": "patientia (υπομονή) → πασιέντσα. Η πασιέντσα είναι το παιχνίδι με τράπουλα που θέλει υπομονή. Patient = αυτός που υπομένει.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 26, 43"
          },
          {
            "id": "u1-h-studiose",
            "kind": "hook",
            "la": "studiose",
            "el": "στούντιο",
            "type": "official",
            "story": "studiose (με επιμέλεια) → στούντιο. studere = καταγίνομαι, μελετώ: study, student, studio. Το στούντιο είναι ο χώρος της δουλειάς.",
            "lessons": [
              26
            ],
            "say": "studiose (με επιμέλεια) → στούντιο. studere = καταγίνομαι, μελετώ: study, student, studio. Το στούντιο είναι ο χώρος της δουλειάς.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 26"
          },
          {
            "id": "u1-h-vita",
            "kind": "hook",
            "la": "vita",
            "el": "βιταμίνη",
            "type": "official",
            "story": "vita (ζωή) → βιταμίνη. vita + amine = αμίνη της ζωής. Και C.V. = curriculum vitae.",
            "lessons": [
              26,
              43,
              44
            ],
            "say": "vita (ζωή) → βιταμίνη. vita + amine = αμίνη της ζωής. Και C.V. = curriculum vitae.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 26, 43, 44"
          },
          {
            "id": "u1-h-sonorus",
            "kind": "hook",
            "la": "sonorus",
            "el": "σονάτα",
            "type": "official",
            "story": "sonorus (ηχηρός) → σονάτα (μουσική σύνθεση), σονέτο (ποίημα). sonus = ήχος: sonic, και το Sony.",
            "lessons": [
              27
            ],
            "say": "sonorus (ηχηρός) → σονάτα. sonus = ήχος: sonic, και το Sony.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 27"
          },
          {
            "id": "u1-h-durus",
            "kind": "hook",
            "la": "durus",
            "el": "ντούρος",
            "type": "official",
            "story": "durus (σκληρός) → ντούρος (σκληρός). Ο ντούρος είναι ο σκληρός. Στα αγγλικά durable, duration.",
            "lessons": [
              27,
              48
            ],
            "say": "durus (σκληρός) → ντούρος. Ο ντούρος είναι ο σκληρός. Στα αγγλικά durable, duration.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 27, 48"
          },
          {
            "id": "u1-h-pomum",
            "kind": "hook",
            "la": "pomum",
            "el": "πόμολο",
            "type": "official",
            "story": "pomum (καρπός) → πόμολο. Το πόμολο έχει σχήμα καρπού (ιταλικά pomolo). Το Σεπτ. 2024 ζήτησε το pomis – πόμολο.",
            "lessons": [
              27
            ],
            "say": "pomum (καρπός) → πόμολο. Το πόμολο έχει σχήμα καρπού (ιταλικά pomolo). Το Σεπτ. 2024 ζήτησε το pomis – πόμολο.",
            "status": "exam",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 27· Επαν. Σεπτ. 2024 Β2 (pomis – πόμολο)",
            "exam": [
              2024
            ]
          },
          {
            "id": "u1-h-notus",
            "kind": "hook",
            "la": "notus",
            "el": "νότα",
            "type": "official",
            "story": "notus (γνωστός) → η νότα. notus ← nosco (γνωρίζω): cognosco ~ γιγνώσκω. Η νότα είναι το «σημάδι» που σε κάνει να γνωρίζεις τον ήχο.",
            "lessons": [
              28
            ],
            "say": "notus (γνωστός) → νότα. notus ← nosco (γνωρίζω): cognosco ~ γιγνώσκω. Η νότα είναι το «σημάδι» που σε κάνει να γνωρίζεις τον ήχο.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 28"
          },
          {
            "id": "u1-h-custodia",
            "kind": "hook",
            "la": "custodia",
            "el": "κουστωδία",
            "type": "official",
            "story": "custodia (φρουρά, φυλακή) → κουστωδία (επίσημη συνοδεία). Quis custodiet ipsos custodes? «Ποιος θα φυλάει τους φύλακες;»",
            "lessons": [
              28
            ],
            "say": "custodia (φρουρά, φυλακή) → κουστωδία. Quis custodiet ipsos custodes? «Ποιος θα φυλάει τους φύλακες;»",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 28"
          },
          {
            "id": "u1-h-homo",
            "kind": "hook",
            "la": "homo",
            "el": "ουμανισμός",
            "type": "official",
            "story": "homo (άνθρωπος) → ουμανισμός (ανθρωπισμός). Homo homini lupus: ο άνθρωπος λύκος για τον άνθρωπο (homini = δοτική!). Human, humanism.",
            "lessons": [
              28,
              29,
              41,
              46
            ],
            "say": "homo (άνθρωπος) → ουμανισμός. Homo homini lupus: ο άνθρωπος λύκος για τον άνθρωπο (homini = δοτική!). Human, humanism.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 28, 29, 41, 46"
          },
          {
            "id": "u1-h-summus",
            "kind": "hook",
            "la": "summus",
            "el": "σούμα",
            "type": "official",
            "story": "summus (ύψιστος, ανώτατος, ολόκληρος) → η σούμα (το σύνολο). Summa = το σύνολο: sum, summary, summit.",
            "lessons": [
              28
            ],
            "say": "summus (ύψιστος, ανώτατος, ολόκληρος) → σούμα. Summa = το σύνολο: sum, summary, summit.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 28"
          },
          {
            "id": "u1-h-milia",
            "kind": "hook",
            "la": "milia",
            "el": "μίλι",
            "type": "official",
            "story": "milia (χίλια, η χιλιάδα) → (το) μίλι. mille passuum = χίλια βήματα. Στα αγγλικά mile, million, millennium.",
            "lessons": [
              29
            ],
            "say": "milia (χίλια, η χιλιάδα) → μίλι. mille passuum = χίλια βήματα. Στα αγγλικά mile, million, millennium.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 29"
          },
          {
            "id": "u1-h-sutor",
            "kind": "hook",
            "la": "sutor",
            "el": "κοστούμι",
            "type": "official",
            "story": "sutor (παπουτσής) → κοστούμι. Η ετυμολογία λέει άλλο (τα ιταλικά costume βγαίνουν συνήθως από το consuetudo)· ο κατάλογος το δίνει ως ζεύγος, και στην εξέταση ισχύει ο κατάλογος.",
            "lessons": [
              29
            ],
            "say": "sutor (παπουτσής) → κοστούμι. Η ετυμολογία λέει άλλο (consuetudo)· στην εξέταση ισχύει ο κατάλογος.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 29"
          },
          {
            "id": "u1-h-doceo",
            "kind": "hook",
            "la": "doceo",
            "el": "ντοκουμέντο",
            "type": "official",
            "story": "doceo (διδάσκω) → ντοκουμέντο. doctor = δάσκαλος, doctrine, document. Το ντοκουμέντο «διδάσκει».",
            "lessons": [
              29,
              48
            ],
            "say": "doceo (διδάσκω) → ντοκουμέντο. doctor = δάσκαλος, doctrine, document. Το ντοκουμέντο «διδάσκει».",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 29, 48"
          },
          {
            "id": "u1-h-luxuria",
            "kind": "hook",
            "la": "luxuria",
            "el": "λούσο",
            "type": "official",
            "story": "luxuria (πολυτέλεια) → το λούσο (εντυπωσιακό ρούχο). Λουσάτος = με λούσο. Luxury. Το ζητά και το κείμενο του Μουρήνα: luxuriae.",
            "lessons": [
              30
            ],
            "say": "luxuria (πολυτέλεια) → λούσο. Λουσάτος = με λούσο. Luxury. Το ζητά και το κείμενο του Μουρήνα: luxuriae.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 30"
          },
          {
            "id": "u1-h-familia",
            "kind": "hook",
            "la": "familia",
            "el": "φαμίλια",
            "type": "official",
            "story": "familia (οικογένεια) → φαμίλια. familia → ιταλικά famiglia → φαμίλια, family. Η φαμίλια ήρθε από τα ιταλικά.",
            "lessons": [
              30
            ],
            "say": "familia (οικογένεια) → φαμίλια. familia → ιταλικά famiglia → φαμίλια, family. Η φαμίλια ήρθε από τα ιταλικά.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 30"
          },
          {
            "id": "u1-h-honor",
            "kind": "hook",
            "la": "honor",
            "el": "ονόρε",
            "type": "official",
            "story": "honor (η τιμή) → (το) ονόρε. Honor, honour, honest.",
            "lessons": [
              30
            ],
            "say": "honor (η τιμή) → ονόρε. Honor, honour, honest.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 30"
          },
          {
            "id": "u1-h-congredior",
            "kind": "hook",
            "la": "congredior",
            "el": "κογκρέσο",
            "type": "official",
            "story": "congredior (συγκρούομαι, συγκεντρώνομαι, συνέρχομαι) → κογκρέσο (συνέλευση). Congressus → congress: η συνάντηση. Το congredior ανήκει στο gradior. Το ζεύγος στηρίζεται μόνο στον κατάλογο του υπουργείου: ως ετυμολογία δεν έχει δεύτερη πηγή, αλλά στην εξέταση ισχύει ο κατάλογος.",
            "lessons": [
              31
            ],
            "say": "congredior (συγκρούομαι, συγκεντρώνομαι, συνέρχομαι) → κογκρέσο. Congressus → congress: η συνάντηση. Το congredior ανήκει στο gradior.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 31"
          },
          {
            "id": "u1-h-castra",
            "kind": "hook",
            "la": "castra",
            "el": "κάστρο",
            "type": "official",
            "story": "castra (στρατόπεδο (castrum: φρούριο)) → κάστρο. Castra πληθυντικός = στρατόπεδο, castrum ενικός = φρούριο.",
            "lessons": [
              31,
              42,
              43,
              45
            ],
            "say": "castra (στρατόπεδο (castrum: φρούριο)) → κάστρο. Castra πληθυντικός = στρατόπεδο, castrum ενικός = φρούριο.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 31, 42, 43, 45"
          },
          {
            "id": "u1-h-vetustas",
            "kind": "hook",
            "la": "vetustas",
            "el": "βετεράνος",
            "type": "official",
            "story": "vetustas (αρχαιότητα) → βετεράνος. vetus (παλιός) → veteranus. Ο βετεράνος είναι ο παλιός στρατιώτης. Ζητήθηκε το Σεπτ. 2025 (vetustas – βετεράνος).",
            "lessons": [
              32
            ],
            "exam": [
              2025
            ],
            "say": "vetustas (αρχαιότητα) → βετεράνος. vetus (παλιός) → veteranus. Ο βετεράνος είναι ο παλιός στρατιώτης. Ζητήθηκε το Σεπτ. 2025 (vetustas – βετεράνος).",
            "status": "exam",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 32"
          },
          {
            "id": "u1-h-colo",
            "kind": "hook",
            "la": "colo",
            "el": "κουλτούρα",
            "type": "official",
            "story": "colo (καλλιεργώ) → κουλτούρα. Culture, agriculture (ager + cultura): ό,τι καλλιεργείται, και στην ψυχή.",
            "lessons": [
              32,
              41,
              44
            ],
            "say": "colo (καλλιεργώ) → κουλτούρα. Culture, agriculture (ager + cultura): ό,τι καλλιεργείται, και στην ψυχή.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 32, 41, 44"
          },
          {
            "id": "u1-h-conformabam",
            "kind": "hook",
            "la": "conformabam",
            "el": "φορμαλισμός",
            "type": "official",
            "story": "conformabam (διαμορφώνω) → φορμαλισμός (στον κατάλογο: κονφορμισμός). Forma = μορφή: form, formal. Ο κατάλογος γράφει κονφορμισμός· το Σεπτ. 2025 ζήτησε conformabam – φορμαλισμός.",
            "lessons": [
              32
            ],
            "exam": [
              2025
            ],
            "say": "conformabam (διαμορφώνω) → φορμαλισμός. Forma = μορφή: form, formal. Ο κατάλογος γράφει κονφορμισμός· το Σεπτ. 2025 ζήτησε conformabam – φορμαλισμός.",
            "status": "exam",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 32"
          },
          {
            "id": "u1-h-liber",
            "kind": "hook",
            "la": "liber",
            "el": "λιμπρέτο",
            "type": "official",
            "story": "liber (το βιβλίο) → το λιμπρέτο (το κείμενο όπερας). Library, libretto = «μικρό βιβλίο» στα ιταλικά.",
            "lessons": [
              32
            ],
            "say": "liber (το βιβλίο) → λιμπρέτο. Library, libretto = «μικρό βιβλίο» στα ιταλικά.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 32"
          },
          {
            "id": "u1-h-imitor",
            "kind": "hook",
            "la": "imitor",
            "el": "ιμιτασιόν",
            "type": "official",
            "story": "imitor (μιμούμαι) → ιμιτασιόν (η απομίμηση). Imitate, imitation. Η ιμιτασιόν τσάντα είναι η μιμούμενη.",
            "lessons": [
              32
            ],
            "say": "imitor (μιμούμαι) → ιμιτασιόν. Imitate, imitation. Η ιμιτασιόν τσάντα είναι η μιμούμενη.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 32"
          },
          {
            "id": "u1-h-fortis",
            "kind": "hook",
            "la": "fortis",
            "el": "φόρτε",
            "type": "official",
            "story": "fortis (δυνατός, γενναίος) → το φόρτε (το δυνατό σημείο). Fort, fortify, effort. Το «φόρτε» σου είναι το δυνατό σου σημείο.",
            "lessons": [
              32
            ],
            "say": "fortis (δυνατός, γενναίος) → φόρτε. Fort, fortify, effort. Το «φόρτε» σου είναι το δυνατό σου σημείο.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 32"
          },
          {
            "id": "u1-h-libido",
            "kind": "hook",
            "la": "libido",
            "el": "λίμπιντο",
            "type": "official",
            "story": "libido (πάθος) → η λίμπιντο (η ερωτική ορμή). Libido = πάθος, επιθυμία. Στο κείμενο 33: comprimendae libidines, «να περιοριστούν τα πάθη».",
            "lessons": [
              33
            ],
            "say": "libido (πάθος) → λίμπιντο. Libido = πάθος, επιθυμία. Στο κείμενο 33: comprimendae libidines, «να περιοριστούν τα πάθη».",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 33"
          },
          {
            "id": "u1-h-propago",
            "kind": "hook",
            "la": "propago",
            "el": "προπαγάνδα",
            "type": "official",
            "story": "propago (αφήνω απογόνους) → προπαγάνδα. De propaganda fide = «για τη διάδοση της πίστης»: από εκεί η προπαγάνδα.",
            "lessons": [
              33
            ],
            "say": "propago (αφήνω απογόνους) → προπαγάνδα. De propaganda fide = «για τη διάδοση της πίστης»: από εκεί η προπαγάνδα.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 33"
          },
          {
            "id": "u1-h-sano",
            "kind": "hook",
            "la": "sano",
            "el": "σανατόριο",
            "type": "official",
            "story": "sano (θεραπεύω) → το σανατόριο (θεραπευτικό ίδρυμα). Sanus: sane, sanitary. Mens sana in corpore sano.",
            "lessons": [
              33
            ],
            "say": "sano (θεραπεύω) → σανατόριο. Sanus: sane, sanitary. Mens sana in corpore sano.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 33"
          },
          {
            "id": "u1-o-m-instituo",
            "kind": "origin",
            "w": "ινστιτούτο",
            "latin": true,
            "from": "instituo (διδάσκω) → ινστιτούτο (μορφωτικό ίδρυμα). Institute, institution: ό,τι ιδρύεται.",
            "say": "ινστιτούτο ← instituo (ιδρύω, διδάσκω). Κατάλογος ΥΠΑΙΘ, μάθ. 29.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 29"
          },
          {
            "id": "u1-o-m-constantia",
            "kind": "origin",
            "w": "Κωνσταντίνος",
            "latin": true,
            "from": "constantia (σταθερότητα) → Κωνσταντίνος. Το όνομά του λέει «ο σταθερός».",
            "say": "Κωνσταντίνος ← constantia (σταθερότητα). Κατάλογος ΥΠΑΙΘ, μάθ. 26.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 26"
          },
          {
            "id": "u1-o-m-opera",
            "kind": "origin",
            "w": "όπερα",
            "latin": true,
            "from": "opera (εργασία, κόπος) → όπερα, οπερέτα. Opus, opera = «έργα». Magnum opus = το κορυφαίο έργο.",
            "say": "όπερα ← opera (έργο, εργασία). Κατάλογος ΥΠΑΙΘ, μάθ. 29, 31.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 29, 31"
          },
          {
            "id": "u1-r-pat-music",
            "kind": "rule",
            "title": "Η μουσική μιλά λατινικά: τέμπο, σόλο, φόρτε, λιμπρέτο, νότα, σονάτα",
            "say": "tempus → τέμπο, solus → σόλο, fortis → φόρτε, liber → λιμπρέτο, notus → νότα, sonorus → σονάτα, opera → όπερα, pars → παρτιτούρα.",
            "ex": [
              {
                "la": "tempus → τέμπο",
                "el": "ο χρόνος → ο ρυθμός της μουσικής"
              },
              {
                "la": "solus → σόλο",
                "el": "μόνος → μόνος του στη σκηνή"
              },
              {
                "la": "fortis → φόρτε",
                "el": "δυνατός → δυνατά, και «το φόρτε μου»"
              },
              {
                "la": "liber → λιμπρέτο",
                "el": "το βιβλίο → το κείμενο της όπερας"
              }
            ],
            "terms": [
              "λιμπρέτο"
            ],
            "quiz": [
              {
                "t": "bucket",
                "q": "Βάλε κάθε μουσικό όρο στη λατινική του ρίζα",
                "buckets": [
                  "tempus",
                  "solus",
                  "fortis",
                  "liber"
                ],
                "items": [
                  {
                    "text": "τέμπο",
                    "bucket": "tempus"
                  },
                  {
                    "text": "σόλο",
                    "bucket": "solus"
                  },
                  {
                    "text": "φόρτε",
                    "bucket": "fortis"
                  },
                  {
                    "text": "λιμπρέτο",
                    "bucket": "liber"
                  }
                ]
              },
              {
                "t": "bucket",
                "q": "Βάλε κάθε μουσικό όρο στη λατινική του ρίζα",
                "buckets": [
                  "notus",
                  "sonorus",
                  "pars",
                  "minor"
                ],
                "items": [
                  {
                    "text": "νότα",
                    "bucket": "notus"
                  },
                  {
                    "text": "σονάτα",
                    "bucket": "sonorus"
                  },
                  {
                    "text": "παρτιτούρα",
                    "bucket": "pars"
                  },
                  {
                    "text": "μινόρε",
                    "bucket": "minor"
                  }
                ]
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική λέξη (ηχηρός) δίνει τη σονάτα και το σονέτο;",
                "options": [
                  "sonorus",
                  "solus",
                  "sanus"
                ],
                "a": "sonorus",
                "why": "sonorus: ηχηρός → σονάτα (είδος σύνθεσης), σονέτο (λυρικό ποίημα)."
              },
              {
                "t": "mcq",
                "q": "Τι σημαίνει το opera, που δίνει την όπερα και την οπερέτα;",
                "options": [
                  "εργασία, κόπος",
                  "τραγούδι",
                  "θέατρο"
                ],
                "a": "εργασία, κόπος",
                "why": "opera: εργασία, κόπος → όπερα, οπερέτα (μουσικά είδη)."
              }
            ],
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27 (ομαδοποίηση δική μας)"
          },
          {
            "id": "u1-r-pat-sea",
            "kind": "rule",
            "title": "Στη θάλασσα με λατινικά: άλμπουρο, μουράγιο, φουρτούνα, μπουνάτσα",
            "say": "arbor → άλμπουρο, murus → μουράγιο, fortuna → φουρτούνα, bonus/bene → μπουνάτσα. Το λιμάνι είναι γεμάτο λατινικά.",
            "ex": [
              {
                "la": "arbor → άλμπουρο",
                "el": "το δέντρο → το κατάρτι του πλοίου"
              },
              {
                "la": "murus → μουράγιο",
                "el": "το τείχος → το τείχος του λιμανιού"
              },
              {
                "la": "fortuna → φουρτούνα",
                "el": "η τύχη → η κακοτυχία της θάλασσας"
              },
              {
                "la": "bonus, bene → μπουνάτσα",
                "el": "καλός → η καλοκαιρία"
              }
            ],
            "terms": [
              "μπουνάτσα"
            ],
            "quiz": [
              {
                "t": "bucket",
                "q": "Βάλε κάθε ναυτική λέξη στη λατινική της ρίζα",
                "buckets": [
                  "arbor",
                  "murus",
                  "fortuna",
                  "bonus"
                ],
                "items": [
                  {
                    "text": "άλμπουρο",
                    "bucket": "arbor"
                  },
                  {
                    "text": "μουράγιο",
                    "bucket": "murus"
                  },
                  {
                    "text": "φουρτούνα",
                    "bucket": "fortuna"
                  },
                  {
                    "text": "μπουνάτσα",
                    "bucket": "bonus"
                  }
                ]
              },
              {
                "t": "mcq",
                "q": "Ποια από τις λέξεις σημαίνει την καλοκαιρία στη θάλασσα;",
                "options": [
                  "μπουνάτσα",
                  "φουρτούνα",
                  "μουράγιο"
                ],
                "a": "μπουνάτσα",
                "why": "bonus/bene (καλός) → μπουνάτσα. Η φουρτούνα είναι το αντίθετο."
              },
              {
                "t": "tf",
                "q": "Η φουρτούνα έρχεται από το fortuna (τύχη).",
                "a": true,
                "why": "Κατάλογος υπουργείου, μάθ. 34, 39, 44, 49."
              }
            ],
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27 (ομαδοποίηση δική μας)"
          }
        ]
      },
      {
        "id": "u1l5",
        "title": "Ο επίσημος κατάλογος: μαθήματα 34-50",
        "items": [
          {
            "id": "u1-h-templum",
            "kind": "hook",
            "la": "templum",
            "el": "τέμπλο",
            "type": "official",
            "story": "templum (το ιερό, ο ναός) → το τέμπλο (το εικονοστάσιο του ναού). Templum → temple. Το τέμπλο χωρίζει το ιερό από τον κυρίως ναό.",
            "lessons": [
              34
            ],
            "say": "templum (το ιερό, ο ναός) → τέμπλο. Templum → temple. Το τέμπλο χωρίζει το ιερό από τον κυρίως ναό.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 34"
          },
          {
            "id": "u1-h-curo",
            "kind": "hook",
            "la": "curo",
            "el": "κούρα",
            "type": "official",
            "story": "curo (φροντίζω) → η κούρα (η φροντίδα), κουράρω. cura = φροντίδα: το securus (σίγουρος) είναι sine cura, «χωρίς έγνοια». Curious, cure.",
            "lessons": [
              35,
              45
            ],
            "say": "curo (φροντίζω) → κούρα. cura = φροντίδα: το securus (σίγουρος) είναι sine cura, «χωρίς έγνοια». Curious, cure.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 35, 45"
          },
          {
            "id": "u1-h-scamnum",
            "kind": "hook",
            "la": "scamnum",
            "el": "σκαμνί",
            "type": "official",
            "story": "scamnum (το σκαμνί) → σκαμνί. Το σκαμνί σου είναι λατινικό. Στο κείμενο 36 ο Κούριος κάθεται in scamno δίπλα στη φωτιά.",
            "lessons": [
              36
            ],
            "say": "scamnum (το σκαμνί) → σκαμνί. Το σκαμνί σου είναι λατινικό. Στο κείμενο 36 ο Κούριος κάθεται in scamno δίπλα στη φωτιά.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 36"
          },
          {
            "id": "u1-h-solvo",
            "kind": "hook",
            "la": "solvo",
            "el": "σβέλτος",
            "type": "official",
            "story": "solvo (λύνω) → σβέλτος. Σβέλτος = λυμένος, ελεύθερος στις κινήσεις (svelto ← solutus ← solvo). Solve, solution.",
            "lessons": [
              36
            ],
            "say": "solvo (λύνω) → σβέλτος. Σβέλτος = λυμένος, ελεύθερος στις κινήσεις (svelto ← solutus ← solvo). Solve, solution.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 36"
          },
          {
            "id": "u1-h-impero",
            "kind": "hook",
            "la": "impero",
            "el": "ιμπεριαλισμός",
            "type": "official",
            "story": "impero (διατάζω) → ιμπεριαλισμός, ιμπεριαλιστής. Imperare → imperative (προστακτική), emperor, empire. Ισχύει και για imperator, imperium.",
            "lessons": [
              36,
              39,
              48,
              50
            ],
            "say": "impero (διατάζω) → ιμπεριαλισμός. Imperare → imperative (προστακτική), emperor, empire. Ισχύει και για imperator, imperium.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 36, 39, 48, 50"
          },
          {
            "id": "u1-h-populus",
            "kind": "hook",
            "la": "populus",
            "el": "πόπολο",
            "type": "official",
            "story": "populus (ο λαός) → πόπολο, ποπ, Ποπ Αρτ. Popular, pop: η μουσική του λαού.",
            "lessons": [
              37
            ],
            "say": "populus (ο λαός) → πόπολο. Popular, pop: η μουσική του λαού.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 37"
          },
          {
            "id": "u1-h-furor",
            "kind": "hook",
            "la": "furor",
            "el": "φουριόζος",
            "type": "official",
            "story": "furor (η μανία) → φουριόζος, η φούρια. Furor = μανία: furious, fury.",
            "lessons": [
              37
            ],
            "say": "furor (η μανία) → φουριόζος. Furor = μανία: furious, fury.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 37"
          },
          {
            "id": "u1-h-mos",
            "kind": "hook",
            "la": "mos",
            "el": "αμοραλισμός",
            "type": "official",
            "story": "mos (έθιμο, ήθος) → αμοραλιστής, αμοραλισμός. O tempora, o mores! mos, moris → moral, morale. Α-moral = χωρίς ήθος.",
            "lessons": [
              38
            ],
            "say": "mos (έθιμο, ήθος) → αμοραλισμός. O tempora, o mores! mos, moris → moral, morale. Α-moral = χωρίς ήθος.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 38"
          },
          {
            "id": "u1-h-mora",
            "kind": "hook",
            "la": "mora",
            "el": "μορατόριουμ",
            "type": "official",
            "story": "mora (η καθυστέρηση) → μορατόριουμ (αναστολή). Moratorium = αναστολή, καθυστέρηση. Στο κείμενο 38 (2023): longā morā standi.",
            "lessons": [
              38
            ],
            "say": "mora (η καθυστέρηση) → μορατόριουμ. Moratorium = αναστολή, καθυστέρηση. Στο κείμενο 38 (2023): longā morā standi.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 38"
          },
          {
            "id": "u1-h-morior",
            "kind": "hook",
            "la": "morior",
            "el": "μόρτης",
            "type": "official",
            "story": "morior (πεθαίνω) → ο μόρτης (ο μάγκας). Memento mori! Mortal, mortuary. Το σουπίνο mortuum κρύβει το ίδιο θέμα.",
            "lessons": [
              38
            ],
            "say": "morior (πεθαίνω) → μόρτης. Memento mori! Mortal, mortuary. Το σουπίνο mortuum κρύβει το ίδιο θέμα.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 38"
          },
          {
            "id": "u1-h-premi",
            "kind": "hook",
            "la": "premi",
            "el": "πρέσα",
            "type": "loan",
            "story": "premi (πιέζω) → η πρέσα, πρεσάρω. premo (πιέζω) → pressa → πρέσα. Δάνειο, όχι συγγένεια. Ζεύγος του 2025: premi – πρέσα.",
            "lessons": [
              39
            ],
            "exam": [
              2025
            ],
            "say": "premi (πιέζω) → πρέσα. premo (πιέζω) → pressa → πρέσα. Δάνειο, όχι συγγένεια. Ζεύγος του 2025: premi – πρέσα.",
            "status": "exam",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 39"
          },
          {
            "id": "u1-h-optimus",
            "kind": "hook",
            "la": "optimus",
            "el": "οπτιμισμός",
            "type": "official",
            "story": "optimus (άριστος) → ο οπτιμισμός. Everton: «Nil satis nisi optimum». Optimum = το άριστο, το δικό σου 20.",
            "lessons": [
              39
            ],
            "say": "optimus (άριστος) → οπτιμισμός. Everton: «Nil satis nisi optimum». Optimum = το άριστο, το δικό σου 20.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 39"
          },
          {
            "id": "u1-h-fortuna",
            "kind": "hook",
            "la": "fortuna",
            "el": "φουρτούνα",
            "type": "official",
            "story": "fortuna (τύχη) → φουρτούνα. Το «O Fortuna» των Carmina Burana είναι ο ύμνος στην Τύχη. Η φουρτούνα είναι η «τύχη» της θάλασσας.",
            "lessons": [
              34,
              39,
              44,
              49
            ],
            "say": "fortuna (τύχη) → φουρτούνα. Το «O Fortuna» των Carmina Burana είναι ο ύμνος στην Τύχη. Η φουρτούνα είναι η «τύχη» της θάλασσας.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 34, 39, 44, 49"
          },
          {
            "id": "u1-h-solus",
            "kind": "hook",
            "la": "solus",
            "el": "σόλο",
            "type": "official",
            "story": "solus (μόνος) → (το) σόλο. Solo, solitary, solitude: μόνος.",
            "lessons": [
              40,
              50
            ],
            "say": "solus (μόνος) → σόλο. Solo, solitary, solitude: μόνος.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 40, 50"
          },
          {
            "id": "u1-h-conservo",
            "kind": "hook",
            "la": "conservo",
            "el": "κονσέρβα",
            "type": "official",
            "story": "conservo (σώζω) → κονσέρβα. Conserve, preserve: η κονσέρβα σώζει την τροφή.",
            "lessons": [
              40
            ],
            "say": "conservo (σώζω) → κονσέρβα. Conserve, preserve: η κονσέρβα σώζει την τροφή.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 40"
          },
          {
            "id": "u1-h-celeriter",
            "kind": "hook",
            "la": "celeriter",
            "el": "κέλητας",
            "type": "official",
            "story": "celeriter (γρήγορα) → ο κέλητας (γρήγορο άλογο). Το celer ~ κέλης είναι αληθινή συγγένεια (όχι δάνειο)· ο κατάλογος την έχει δίπλα στα δάνεια. Accelerate.",
            "lessons": [
              40,
              45
            ],
            "say": "celeriter (γρήγορα) → κέλητας. Το celer ~ κέλης είναι αληθινή συγγένεια, όχι δάνειο. Accelerate.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 40, 45"
          },
          {
            "id": "u1-h-antiquus",
            "kind": "hook",
            "la": "antiquus",
            "el": "αντίκα",
            "type": "official",
            "story": "antiquus (αρχαίος) → η αντίκα. Antique, antiquity. Στο κείμενο 41: antiquitatem tibi placere dicis (το antiquitas δίνει κι αυτό την αντίκα, μάθ. 41).",
            "lessons": [
              41
            ],
            "say": "antiquus (αρχαίος) → αντίκα. Antique, antiquity. Στο κείμενο 41 υπάρχει και το antiquitas.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 41"
          },
          {
            "id": "u1-h-pectus",
            "kind": "hook",
            "la": "pectus",
            "el": "πέτο",
            "type": "official",
            "story": "pectus (στήθος) → (το) πέτο. Στο κείμενο 41: «habe semper in memoriā et in pectore». Το πέτο του σακακιού είναι το στήθος.",
            "lessons": [
              41
            ],
            "say": "pectus (στήθος) → πέτο. Στο κείμενο 41: «habe semper in memoriā et in pectore».",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 41"
          },
          {
            "id": "u1-h-verbum",
            "kind": "hook",
            "la": "verbum",
            "el": "βερμπαλισμός",
            "type": "official",
            "story": "verbum (ο λόγος) → ο βερμπαλισμός, ο βερμπαλιστής. Verb, verbal: λέξεις. Στο κείμενο 41: fugias verbum insolens.",
            "lessons": [
              41
            ],
            "say": "verbum (ο λόγος) → βερμπαλισμός. Verb, verbal: λέξεις. Στο κείμενο 41: fugias verbum insolens.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 41"
          },
          {
            "id": "u1-h-intellego",
            "kind": "hook",
            "la": "intellego",
            "el": "ιντελιγκέντσια",
            "type": "official",
            "story": "intellego (καταλαβαίνω) → η ιντελιγκέντσια (οι διανοούμενοι). Intelligent, intellect: intellego = inter + lego, «διαβάζω ανάμεσα».",
            "lessons": [
              41,
              42,
              44
            ],
            "say": "intellego (καταλαβαίνω) → ιντελιγκέντσια. Intelligent, intellect: intellego = inter + lego, «διαβάζω ανάμεσα».",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 41, 42, 44"
          },
          {
            "id": "u1-h-placeo",
            "kind": "hook",
            "la": "placeo",
            "el": "πλασέμπο",
            "type": "official",
            "story": "placeo (αρέσω) → το πλασέμπο (εικονικό φάρμακο). Placebo = «θα ευχαριστήσω», μέλλοντας του placere! Το ψεύτικο χάπι που «ευχαριστεί».",
            "lessons": [
              41,
              50
            ],
            "say": "placeo (αρέσω) → πλασέμπο. Placebo = «θα ευχαριστήσω», μέλλοντας του placere! Το ψεύτικο χάπι που «ευχαριστεί».",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 41, 50"
          },
          {
            "id": "u1-h-regie",
            "kind": "hook",
            "la": "regie",
            "el": "ρήγας",
            "type": "official",
            "story": "regie (με τρόπο τυραννικό/βασιλικό) → ο ρήγας (ο βασιλιάς). rex, rego → ρήγας: ο βασιλιάς της τράπουλας. Ζεύγος του 2024: ρήγας – regie.",
            "lessons": [
              42,
              46
            ],
            "exam": [
              2024
            ],
            "say": "regie (με τρόπο τυραννικό/βασιλικό) → ρήγας. rex, rego → ρήγας: ο βασιλιάς της τράπουλας. Ζεύγος του 2024: ρήγας – regie.",
            "status": "exam",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 42, 46"
          },
          {
            "id": "u1-h-finis",
            "kind": "hook",
            "la": "finis",
            "el": "φινάλε",
            "type": "official",
            "story": "finis (τέλος, όριο) → φινάλε. Final, finish, infinite.",
            "lessons": [
              43
            ],
            "say": "finis (τέλος, όριο) → φινάλε. Final, finish, infinite.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 43"
          },
          {
            "id": "u1-h-futurus",
            "kind": "hook",
            "la": "futurus",
            "el": "φουτουρισμός",
            "type": "official",
            "story": "futurus (μετοχή μέλλοντα του sum) → φουτουριστικός, φουτουρισμός. Futurus = «αυτός που θα είναι»: future. Η μετοχή μέλλοντα του sum.",
            "lessons": [
              43
            ],
            "say": "futurus (μετοχή μέλλοντα του sum) → φουτουρισμός. Futurus = «αυτός που θα είναι»: future. Η μετοχή μέλλοντα του sum.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 43"
          },
          {
            "id": "u1-h-tempus",
            "kind": "hook",
            "la": "tempus",
            "el": "τέμπο",
            "type": "official",
            "story": "tempus (ο χρόνος) → το τέμπο (ο ρυθμός). Temporary, tense: ο χρόνος του ρήματος είναι tempus.",
            "lessons": [
              44,
              47
            ],
            "say": "tempus (ο χρόνος) → τέμπο. Temporary, tense: ο χρόνος του ρήματος είναι tempus.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 44, 47"
          },
          {
            "id": "u1-h-decet",
            "kind": "hook",
            "la": "decet",
            "el": "ντεκόρ",
            "type": "official",
            "story": "decet (αρμόζει) → το ντεκόρ. Decent, decorum. Dulce et decorum est pro patria mori.",
            "lessons": [
              46
            ],
            "say": "decet (αρμόζει) → ντεκόρ. Decent, decorum. Dulce et decorum est pro patria mori.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 46"
          },
          {
            "id": "u1-h-vestis",
            "kind": "hook",
            "la": "vestis",
            "el": "βεστιάριο",
            "type": "official",
            "story": "vestis (φόρεμα) → βεστιάριο. Vest, invest (ντύνω): το βεστιάριο είναι η ντουλάπα των ρούχων. Σεπτ. 2022: vestem – βεστιάριο.",
            "lessons": [
              47
            ],
            "say": "vestis (φόρεμα) → βεστιάριο. Vest, invest (ντύνω): το βεστιάριο είναι η ντουλάπα των ρούχων.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 47"
          },
          {
            "id": "u1-h-video",
            "kind": "hook",
            "la": "video",
            "el": "βίντεο",
            "type": "official",
            "story": "video (βλέπω) → το βίντεο. Το βίντεο είναι κυριολεκτικά ρήμα: «βλέπω»! Vision, visit, evident, provide.",
            "lessons": [
              47,
              48
            ],
            "say": "video (βλέπω) → βίντεο. Το βίντεο είναι κυριολεκτικά ρήμα: «βλέπω»! Vision, visit, evident, provide.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 47, 48"
          },
          {
            "id": "u1-h-albus",
            "kind": "hook",
            "la": "albus",
            "el": "άλμπουμ",
            "type": "official",
            "story": "albus (λευκός) → (το) άλμπουμ. Album = λευκό φύλλο όπου γράφεις ή κολλάς. Albus = λευκός.",
            "lessons": [
              48
            ],
            "say": "albus (λευκός) → άλμπουμ. Album = λευκό φύλλο όπου γράφεις ή κολλάς. Albus = λευκός.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 48"
          },
          {
            "id": "u1-h-instinguo",
            "kind": "hook",
            "la": "instinguo",
            "el": "ένστικτο",
            "type": "official",
            "story": "instinguo (παρορμώ, κατευθύνω) → το ένστικτο. Instinct: ό,τι σε παρορμά μέσα σου.",
            "lessons": [
              48
            ],
            "say": "instinguo (παρορμώ, κατευθύνω) → ένστικτο. Instinct: ό,τι σε παρορμά μέσα σου.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 48"
          },
          {
            "id": "u1-h-pulchritudo",
            "kind": "hook",
            "la": "pulchritudo",
            "el": "Πουλχερία",
            "type": "official",
            "story": "pulchritudo (η ομορφιά) → Πουλχερία (κύριο όνομα). Η Πουλχερία είναι «η όμορφη»: pulcher = όμορφος.",
            "lessons": [
              48
            ],
            "say": "pulchritudo (η ομορφιά) → Πουλχερία. Η Πουλχερία είναι «η όμορφη»: pulcher = όμορφος.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 48"
          },
          {
            "id": "u1-h-ferrum",
            "kind": "hook",
            "la": "ferrum",
            "el": "φεριτίνη",
            "type": "official",
            "story": "ferrum (σίδηρος) → η φεριτίνη (πρωτεΐνη που ρυθμίζει τον σίδηρο). Fe = ferrum στον περιοδικό πίνακα. Η φεριτίνη αποθηκεύει σίδηρο. Το ζεύγος στηρίζεται μόνο στον κατάλογο του υπουργείου: ως ετυμολογία δεν έχει δεύτερη πηγή, αλλά στην εξέταση ισχύει ο κατάλογος.",
            "lessons": [
              49
            ],
            "say": "ferrum (σίδηρος) → φεριτίνη. Fe = ferrum στον περιοδικό πίνακα. Η φεριτίνη αποθηκεύει σίδηρο.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 49"
          },
          {
            "id": "u1-h-officium",
            "kind": "hook",
            "la": "officium",
            "el": "οφίκιο",
            "type": "official",
            "story": "officium (καθήκον, έργο) → το οφίκιο, οφίτσιο (τίτλος, αξίωμα). Office, official. Στο κείμενο 49 (2026): quod tonsōris praeripuisset officium.",
            "lessons": [
              49
            ],
            "say": "officium (καθήκον, έργο) → οφίκιο. Office, official. Στο κείμενο 49 (2026): quod tonsōris praeripuisset officium.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 49"
          },
          {
            "id": "u1-o-m-maximus",
            "kind": "origin",
            "w": "μάξι",
            "latin": true,
            "from": "maximus (μέγιστος) → μάξι (μακρύ φόρεμα), μαξιμαλισμός, Μάξιμος. Maximum, και ο Maximus Decimus Meridius του Gladiator.",
            "say": "μάξι ← maximus (μέγιστος). Κατάλογος ΥΠΑΙΘ, μάθ. 36.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 36"
          },
          {
            "id": "u1-o-m-magistra",
            "kind": "origin",
            "w": "μάγιστρος",
            "latin": true,
            "from": "magistra (η δασκάλα, η σύμβουλος) → μάγιστρος (ανώτατο αξίωμα στην ύστερη ρωμαϊκή και βυζαντινή περίοδο). Magister → master, mister, μάστορας· magistrate.",
            "say": "μάγιστρος ← magistra (δασκάλα, σύμβουλος). Κατάλογος ΥΠΑΙΘ, μάθ. 50.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 50"
          },
          {
            "id": "u1-o-m-materia",
            "kind": "origin",
            "w": "ματεριαλισμός",
            "latin": true,
            "from": "materia (ύλη) → ματεριαλισμός (υλισμός), και μαδέρι. Matter, material.",
            "say": "ματεριαλισμός ← materia (ύλη). Κατάλογος ΥΠΑΙΘ, μάθ. 39.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 39"
          },
          {
            "id": "u1-o-m-natura",
            "kind": "origin",
            "w": "νατουραλισμός",
            "latin": true,
            "from": "natura (η φύση) → νατουραλισμός (αισθητικό κίνημα). Nature, natural.",
            "say": "νατουραλισμός ← natura (φύση). Κατάλογος ΥΠΑΙΘ, μάθ. 37, 38, 46.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 37, 38, 46"
          },
          {
            "id": "u1-o-m-plebs",
            "kind": "origin",
            "w": "πλέμπα",
            "latin": true,
            "from": "plebs (οι πληβείοι) → πλέμπα, πλεμπάγια (ο όχλος). Plebeian: ο κοινός πολίτης στη Ρώμη.",
            "say": "πλέμπα ← plebs (οι πληβείοι). Κατάλογος ΥΠΑΙΘ, μάθ. 35.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 35"
          },
          {
            "id": "u1-o-m-factum",
            "kind": "origin",
            "w": "ντεφάκτο",
            "latin": true,
            "from": "factum (πράξη) → ντεφάκτο (εκ των πραγμάτων, στην πράξη). De facto = εκ των πραγμάτων, de iure = εκ του νόμου. Το ζεύγος στηρίζεται μόνο στον κατάλογο του υπουργείου (δεύτερη πηγή δεν βρέθηκε), αλλά στην εξέταση ισχύει ο κατάλογος.",
            "say": "ντεφάκτο ← factum (de facto = εκ των πραγμάτων). Κατάλογος ΥΠΑΙΘ, μάθ. 49.",
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27, μάθ. 49"
          },
          {
            "id": "u1-r-pat-ismos2",
            "kind": "rule",
            "title": "Οικογένεια -ισμός (II): κομμουνισμός, οπτιμισμός, ουμανισμός, ακτιβισμός…",
            "say": "Κι άλλοι -ισμοί του καταλόγου: communis, optimus, futurus, homo, extremus, natura, materia, ago, mos, conformo, maximus. Βρες τη ρίζα.",
            "ex": [
              {
                "la": "communis → κομμουνισμός",
                "el": "κοινός → ο κομμουνισμός"
              },
              {
                "la": "optimus → οπτιμισμός",
                "el": "ο άριστος → ο οπτιμισμός"
              },
              {
                "la": "homo → ουμανισμός",
                "el": "ο άνθρωπος → ο ανθρωπισμός"
              },
              {
                "la": "ago → ακτιβισμός",
                "el": "κάνω, οδηγώ → ο ακτιβισμός"
              }
            ],
            "terms": [
              "ακτιβισμός"
            ],
            "quiz": [
              {
                "t": "bucket",
                "q": "Βάλε κάθε λέξη στη λατινική της ρίζα",
                "buckets": [
                  "communis",
                  "mercator",
                  "optimus",
                  "futurus"
                ],
                "items": [
                  {
                    "text": "κομμουνισμός",
                    "bucket": "communis"
                  },
                  {
                    "text": "μερκαντιλισμός",
                    "bucket": "mercator"
                  },
                  {
                    "text": "οπτιμισμός",
                    "bucket": "optimus"
                  },
                  {
                    "text": "φουτουρισμός",
                    "bucket": "futurus"
                  }
                ]
              },
              {
                "t": "bucket",
                "q": "Βάλε κάθε λέξη στη λατινική της ρίζα",
                "buckets": [
                  "homo",
                  "extremus",
                  "natura",
                  "materia"
                ],
                "items": [
                  {
                    "text": "ουμανισμός",
                    "bucket": "homo"
                  },
                  {
                    "text": "εξτρεμισμός",
                    "bucket": "extremus"
                  },
                  {
                    "text": "νατουραλισμός",
                    "bucket": "natura"
                  },
                  {
                    "text": "ματεριαλισμός",
                    "bucket": "materia"
                  }
                ]
              },
              {
                "t": "bucket",
                "q": "Βάλε κάθε λέξη στη λατινική της ρίζα",
                "buckets": [
                  "ago",
                  "mos",
                  "conformo",
                  "maximus"
                ],
                "items": [
                  {
                    "text": "ακτιβισμός",
                    "bucket": "ago"
                  },
                  {
                    "text": "αμοραλισμός",
                    "bucket": "mos"
                  },
                  {
                    "text": "κονφορμισμός",
                    "bucket": "conformo"
                  },
                  {
                    "text": "μαξιμαλισμός",
                    "bucket": "maximus"
                  }
                ]
              },
              {
                "t": "tf",
                "q": "Ο ακτιβισμός έρχεται από το ago (κάνω, οδηγώ).",
                "a": true,
                "why": "Κατάλογος υπουργείου, μάθ. 49: ago → ο ακτιβισμός, ακτιβιστής."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική λέξη (η φύση) δίνει τον νατουραλισμό;",
                "options": [
                  "natura",
                  "nomen",
                  "novus"
                ],
                "a": "natura",
                "why": "natura (η φύση) → νατουραλισμός, αισθητικό κίνημα."
              }
            ],
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27 (ομαδοποίηση δική μας)"
          },
          {
            "id": "u1-r-pat-names",
            "kind": "rule",
            "title": "Ονόματα με λατινική ρίζα: Βίκτωρ, Κωνσταντίνος, Μάξιμος, Πουλχερία",
            "say": "vinco/victor → Βίκτωρ (ο νικητής), constantia → Κωνσταντίνος (ο σταθερός), maximus → Μάξιμος, pulchritudo → Πουλχερία (η ομορφιά).",
            "ex": [
              {
                "la": "victor, victoria → Βίκτωρ, Βικτωρία",
                "el": "ο νικητής, η νίκη"
              },
              {
                "la": "constantia → Κωνσταντίνος",
                "el": "η σταθερότητα"
              },
              {
                "la": "maximus → Μάξιμος",
                "el": "ο μέγιστος"
              },
              {
                "la": "pulchritudo → Πουλχερία",
                "el": "η ομορφιά"
              }
            ],
            "terms": [
              "κύρια ονόματα"
            ],
            "quiz": [
              {
                "t": "bucket",
                "q": "Βάλε κάθε όνομα στη λατινική του ρίζα",
                "buckets": [
                  "victor",
                  "constantia",
                  "maximus",
                  "pulchritudo"
                ],
                "items": [
                  {
                    "text": "Βίκτωρ",
                    "bucket": "victor"
                  },
                  {
                    "text": "Βικτωρία",
                    "bucket": "victor"
                  },
                  {
                    "text": "Κωνσταντίνος",
                    "bucket": "constantia"
                  },
                  {
                    "text": "Μάξιμος",
                    "bucket": "maximus"
                  },
                  {
                    "text": "Πουλχερία",
                    "bucket": "pulchritudo"
                  }
                ]
              },
              {
                "t": "mcq",
                "q": "Τι σημαίνει το όνομα Βίκτωρ;",
                "options": [
                  "ο νικητής",
                  "ο σταθερός",
                  "ο μέγιστος"
                ],
                "a": "ο νικητής",
                "why": "victor: ο νικητής (vinco, νικώ)."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική λέξη δίνει το όνομα Πουλχερία;",
                "options": [
                  "pulchritudo",
                  "plenus",
                  "pugna"
                ],
                "a": "pulchritudo",
                "why": "Κατάλογος υπουργείου, μάθ. 48: pulchritudo (η ομορφιά) → Πουλχερία."
              }
            ],
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27 (ομαδοποίηση δική μας)"
          }
        ]
      },
      {
        "id": "u1l6",
        "title": "Το Θέμα Β2 όπως στις εξετάσεις",
        "items": [
          {
            "id": "u1-r-b2-method",
            "kind": "rule",
            "title": "Θέμα Β2: πώς το λύνεις (δύο σχήματα, 10 μονάδες)",
            "say": "Σχήμα Α: 5 λατινικές λέξεις του κειμένου, 7 ελληνικές (2 περισσεύουν). Σχήμα Β: για 5 ελληνικές λέξεις βρίσκεις μία λατινική στο κείμενο. Ψάξε τη ρίζα.",
            "ex": [
              {
                "la": "cernitur ↔ διάκριση",
                "el": "σχήμα Α, 2022: ίδια ρίζα, cerno ~ κρίνω"
              },
              {
                "la": "μετάδοση → dabat",
                "el": "σχήμα Β, 2023: do ~ δίδωμι"
              },
              {
                "la": "premi ↔ πρέσα",
                "el": "δάνειο, όχι κοινή ρίζα, 2025"
              },
              {
                "la": "ρήγας → regie",
                "el": "δάνειο μέσω ιταλικών, 2024"
              }
            ],
            "terms": [
              "ετυμολογικά συγγενής",
              "Στήλη Α",
              "Στήλη Β"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Στο σχήμα Α του Β2, πόσες ελληνικές λέξεις περισσεύουν συνήθως;",
                "options": [
                  "δύο",
                  "καμία",
                  "πέντε"
                ],
                "a": "δύο",
                "why": "Στήλη Α: 5 λατινικές. Στήλη Β: 7 ελληνικές. Σε μερικά διαγωνίσματα (Σεπτ. 2024 και 2025) περισσεύει μία."
              },
              {
                "t": "tf",
                "q": "Στο σχήμα Β ζητείται να βρεις τη λατινική λέξη μέσα στα κείμενα.",
                "a": true,
                "why": "Σωστά: «Να εντοπίσετε στα κείμενα μία ετυμολογικά συγγενή λέξη της λατινικής»."
              },
              {
                "t": "tf",
                "q": "Στο Β2 οι σωστές απαντήσεις είναι πάντα δάνεια της ελληνικής από τα λατινικά.",
                "a": false,
                "why": "Όχι. Στα 5 διαγωνίσματα 2022-2026 ζητήθηκαν και κοινές ρίζες (fugiunt ~ πρόσφυγας) και δάνεια (premi ~ πρέσα)."
              },
              {
                "t": "mcq",
                "q": "Ποιο είναι το πρώτο βήμα με μια άγνωστη ελληνική λέξη του Β2;",
                "options": [
                  "κόβω προθέματα και καταλήξεις και βρίσκω τη ρίζα",
                  "ψάχνω λέξη που ξεκινά με το ίδιο γράμμα",
                  "διαλέγω τη μεγαλύτερη λατινική λέξη"
                ],
                "a": "κόβω προθέματα και καταλήξεις και βρίσκω τη ρίζα",
                "why": "Η ρίζα (απο-στάσις → στά-, προ-δοσία → δο-) είναι αυτό που αντιστοιχεί στη λατινική λέξη."
              }
            ],
            "status": "exam",
            "src": "pastpapers.md §4.2· Παν. 2022-2026"
          },
          {
            "id": "u1-r-b2-split",
            "kind": "rule",
            "title": "Σχήμα Β: κόψε την ελληνική λέξη σε πρόθεμα + ρίζα + κατάληξη",
            "say": "Κόψε τη λέξη: πρόθεμα + ρίζα + κατάληξη. Ψάξε στο κείμενο τη ρίζα, όχι το πρόθεμα: προ-δοσ-ία → dotem, ελ-λιπ-ής → reliquerat.",
            "ex": [
              {
                "la": "προ-δο(σ)-ία → dotem",
                "el": "ρίζα δο- ~ do, dare (δίδωμι)· Παν. 2026"
              },
              {
                "la": "ελ-λιπ-ής → reliquerat",
                "el": "ρίζα λιπ- ~ relinqu- (λείπω)· Παν. 2026"
              },
              {
                "la": "ανα-φορ-ά → conferre",
                "el": "ρίζα φορ- ~ fer- (φέρω)· Παν. 2026"
              },
              {
                "la": "νυχο-κόπτ-ης → unguium",
                "el": "νυχ- ~ ungu- (ὄνυξ ~ unguis)· Παν. 2026"
              }
            ],
            "terms": [
              "πρόθεμα",
              "ρίζα",
              "κατάληξη"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Στο «προδοσία» ποια είναι η ρίζα που ψάχνεις στο κείμενο;",
                "options": [
                  "δο-",
                  "προ-",
                  "-σία"
                ],
                "a": "δο-",
                "why": "προ-δο(σ)-ία: το προ- είναι πρόθεμα, το δο- (δίδωμι) αντιστοιχεί στο dotem."
              },
              {
                "t": "mcq",
                "q": "Ποια ρίζα του «αναφορά» ταιριάζει με το conferre;",
                "options": [
                  "φορ- ~ fer-",
                  "ανα- ~ con-",
                  "-ά ~ -re"
                ],
                "a": "φορ- ~ fer-",
                "why": "Αναφορά ← ἀνα-φέρω· το conferre είναι con-fero. Η κοινή ρίζα είναι fer-/φερ-."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική λέξη του κειμένου του 2026 έχει τη ρίζα του «ελλιπής»;",
                "options": [
                  "reliquerat",
                  "conferre",
                  "unguium"
                ],
                "a": "reliquerat",
                "why": "ελ-λιπ-ής ← λείπω ~ relinquo."
              },
              {
                "t": "mcq",
                "q": "Στο «απόσταση» (2023) ποια λατινική λέξη του κειμένου ταιριάζει;",
                "options": [
                  "standi",
                  "dabat",
                  "nocte"
                ],
                "a": "standi",
                "why": "από-στα-ση: ρίζα στα- ~ sta-, sto. Παν. 2023: standi."
              },
              {
                "t": "tf",
                "q": "Στο Σχήμα Β αντιστοιχίζεις το πρόθεμα (απο-, προ-, δια-) με τη λατινική λέξη.",
                "a": false,
                "why": "Όχι: η ρίζα αντιστοιχεί στη λατινική λέξη του κειμένου· το πρόθεμα και η κατάληξη αλλάζουν."
              }
            ],
            "status": "exam",
            "src": "pastpapers.md §4.2, §5· Παν. 2023, 2026"
          },
          {
            "id": "u1-r-b2-decoys",
            "kind": "rule",
            "title": "Παγίδα στο Β2: λέξη που ταιριάζει στη σημασία αλλά όχι στη ρίζα",
            "say": "Στη Στήλη Β υπάρχουν λέξεις που ταιριάζουν στη σημασία, όχι στη ρίζα: discurrens ↔ κούρσα (curro), όχι διαδρομή (δρόμος). Η ρίζα αποφασίζει.",
            "ex": [
              {
                "la": "discurrens ↔ κούρσα",
                "el": "curro ~ κούρσα· η διαδρομή ← δρόμος, περίσσεψε"
              },
              {
                "la": "domestici ↔ πολεοδομία",
                "el": "domus ~ δόμος· η δόση ← δίδωμι, περίσσεψε"
              },
              {
                "la": "mollia ↔ μαλακός",
                "el": "το μαλώνω μοιάζει στον ήχο και περίσσεψε (Σεπτ. 2024)"
              },
              {
                "la": "Παν. 2025",
                "el": "περίσσεψαν το πρωινός και το ένδυμα"
              }
            ],
            "terms": [
              "ετυμολογικά συγγενής"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Σεπτ. 2022: το discurrens ταιριάζει με …",
                "options": [
                  "κούρσα",
                  "διαδρομή",
                  "δόση"
                ],
                "a": "κούρσα",
                "why": "curro → κούρσα. Η διαδρομή ταιριάζει στη σημασία, αλλά έχει ρίζα δρομ- και περισσεύει."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2022: το domestici ταιριάζει με …",
                "options": [
                  "πολεοδομία",
                  "δόση",
                  "γνώση"
                ],
                "a": "πολεοδομία",
                "why": "domus ~ δόμος: πολεοδομία. Η δόση έχει ρίζα δο- (δίδωμι)."
              },
              {
                "t": "mcq",
                "q": "Ποια ρίζα έχει η λέξη «διαδρομή»;",
                "options": [
                  "δρομ-",
                  "κουρ-",
                  "δο-"
                ],
                "a": "δρομ-",
                "why": "δια-δρομ-ή ← δρόμος· όχι curro. Γι' αυτό περίσσεψε το 2022."
              },
              {
                "t": "tf",
                "q": "Αν μια ελληνική λέξη ταιριάζει στη σημασία, είναι πάντα η σωστή απάντηση στο Β2.",
                "a": false,
                "why": "Όχι. Το Β2 ζητά ετυμολογικά συγγενή, δηλαδή ίδια ρίζα, όχι ίδια σημασία."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2024: ποια ελληνική λέξη περίσσευε στις επαναληπτικές;",
                "options": [
                  "μαλώνω",
                  "μαλακός",
                  "μήτρα"
                ],
                "a": "μαλώνω",
                "why": "Στις επαναληπτικές οι επιλογές ήταν έξι για πέντε λέξεις· περίσσευε το μαλώνω."
              }
            ],
            "status": "exam",
            "src": "Επαν. Σεπτ. 2022, 2024 (στήλες από το θέμα)"
          },
          {
            "id": "u1-s-dabat",
            "kind": "sentence",
            "lesson": 23,
            "la": "Tum se dolōri dabat et paulo post siccis oculis redībat.",
            "el": "Τότε παραδινόταν στον πόνο της και λίγο αργότερα επέστρεφε με στεγνά μάτια.",
            "chunks": [
              "Τότε παραδινόταν",
              "στον πόνο της",
              "και λίγο αργότερα",
              "επέστρεφε",
              "με στεγνά μάτια."
            ],
            "gloss": [
              {
                "la": "siccus",
                "el": "στεγνός"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «μετάδοση».",
                "words": [
                  "dabat"
                ],
                "why": "do, dare ~ δίδωμι: μετά-δοση. Το κλειδί του 2023 δίνει dabat.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2023
            ],
            "say": "dabat ← do ~ δίδωμι: η μετάδοση είναι «δίνω μαζί». Β2 2023.",
            "status": "exam",
            "src": "Παν. 2023 Β2 (κείμενο XXIII)· κλειδί"
          },
          {
            "id": "u1-s-navicula",
            "kind": "sentence",
            "lesson": 23,
            "la": "Conduxit piscatoriam naviculam ingentemque navem secūta est.",
            "el": "Μίσθωσε ένα ψαράδικο μικρό πλοίο και ακολούθησε το τεράστιο πλοίο.",
            "chunks": [
              "Μίσθωσε",
              "ένα ψαράδικο",
              "μικρό πλοίο",
              "και ακολούθησε",
              "το τεράστιο πλοίο."
            ],
            "gloss": [
              {
                "la": "conduco",
                "el": "μισθώνω"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «ναυάγιο».",
                "words": [
                  "naviculam",
                  "navem"
                ],
                "why": "navis ~ ναῦς. Το κλειδί δίνει naviculam· σωστό στη λογική είναι και το navem (και τα δύο είναι από το navis).",
                "sec": "Β2"
              }
            ],
            "exam": [
              2023
            ],
            "say": "naviculam (από navis) ~ ναῦς: ναυάγιο. Β2 2023.",
            "status": "exam",
            "src": "Παν. 2023 Β2 (κείμενο XXIII)· κλειδί"
          },
          {
            "id": "u1-s-nocte",
            "kind": "sentence",
            "lesson": 38,
            "la": "Nam in sacello quodam nocte cum sorōris filiā persedēbat",
            "el": "Γιατί σε κάποιο ιερό παρέμενε καθισμένη τη νύχτα μαζί με την κόρη της αδελφής της",
            "chunks": [
              "Γιατί",
              "σε κάποιο ιερό",
              "παρέμενε καθισμένη",
              "τη νύχτα",
              "μαζί με την κόρη της αδελφής της"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «νυχτερινός».",
                "words": [
                  "nocte"
                ],
                "why": "nox ~ νύξ, νύχτα: νυχτερινός. Το κλειδί δίνει nocte.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2023
            ],
            "say": "nocte ← nox ~ νύξ. Β2 2023.",
            "status": "exam",
            "src": "Παν. 2023 Β2 (κείμενο XXXVIII)· κλειδί"
          },
          {
            "id": "u1-s-standi",
            "kind": "sentence",
            "lesson": 38,
            "la": "Tandem puella, longā morā standi fessa,",
            "el": "Τελικά το κορίτσι, κουρασμένο από τη μακρά παραμονή στα πόδια,",
            "chunks": [
              "Τελικά",
              "το κορίτσι,",
              "κουρασμένο",
              "από τη μακρά παραμονή",
              "στα πόδια,"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «απόσταση».",
                "words": [
                  "standi"
                ],
                "why": "sto ~ ἵστημι: απόσταση = ἀπό + στάσις. Το κλειδί δίνει standi.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2023
            ],
            "say": "standi ← sto ~ ἵστημι: η απόσταση είναι «στάση από». Β2 2023.",
            "status": "exam",
            "src": "Παν. 2023 Β2 (κείμενο XXXVIII)· κλειδί"
          },
          {
            "id": "u1-s-matertera",
            "kind": "sentence",
            "lesson": 38,
            "la": "rogāvit materteram, ut sibi paulisper loco cederet.",
            "el": "ζήτησε από τη θεία της να της παραχωρήσει για λίγο τη θέση.",
            "chunks": [
              "ζήτησε",
              "από τη θεία της",
              "να της παραχωρήσει",
              "για λίγο",
              "τη θέση."
            ],
            "gloss": [
              {
                "la": "matertera",
                "el": "η αδελφή της μητέρας (θεία)"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «μητρότητα».",
                "words": [
                  "materteram"
                ],
                "why": "mater ~ μήτηρ. Η matertera είναι η θεία από τη μητέρα. Το κλειδί δίνει matertera.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2023
            ],
            "say": "materteram ← mater ~ μήτηρ: η θεία. Β2 2023.",
            "status": "exam",
            "src": "Παν. 2023 Β2 (κείμενο XXXVIII)· κλειδί"
          },
          {
            "id": "u1-s-rem",
            "kind": "sentence",
            "lesson": 19,
            "la": "…Lucius Sergius Catilīna, nobilissimi generis vir sed ingenii pravissimi, contra rem publicam coniurāvit.",
            "el": "…ο Λούκιος Σέργιος Κατιλίνας, άνδρας από πολύ ευγενές γένος αλλά με πολύ διεστραμμένο χαρακτήρα, συνωμότησε εναντίον του κράτους.",
            "chunks": [
              "…ο Λούκιος Σέργιος Κατιλίνας,",
              "άνδρας από πολύ ευγενές γένος",
              "αλλά με πολύ διεστραμμένο χαρακτήρα,",
              "συνωμότησε",
              "εναντίον του κράτους."
            ],
            "gloss": [
              {
                "la": "res publica",
                "el": "το κράτος, η πολιτεία"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «ρεαλιστής».",
                "words": [
                  "rem"
                ],
                "why": "res → realis → ρεαλιστής: δάνειο μέσω γαλλικών και ιταλικών. Κλειδί 2024: rem.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2024
            ],
            "say": "rem ← res: ο ρεαλιστής ασχολείται με τα «πράγματα». Β2 2024.",
            "status": "exam",
            "src": "Παν. 2024 Β2 (κείμενο XIX, αρχή του κειμένου)· κλειδί"
          },
          {
            "id": "u1-s-socii",
            "kind": "sentence",
            "lesson": 19,
            "la": "Socii eius deprehensi sunt et in carcere strangulāti sunt.",
            "el": "Οι συνεργοί του συνελήφθησαν και στραγγαλίστηκαν στη φυλακή.",
            "chunks": [
              "Οι συνεργοί του",
              "συνελήφθησαν",
              "και στραγγαλίστηκαν",
              "στη φυλακή."
            ],
            "gloss": [
              {
                "la": "carcer",
                "el": "φυλακή"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «σοσιαλισμός».",
                "words": [
                  "socii"
                ],
                "why": "socius → social → σοσιαλισμός, δάνειο μέσω γαλλικών. Κλειδί 2024: socii.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2024
            ],
            "say": "socii ← socius: κοινωνία, social. Ο σοσιαλισμός, Β2 2024.",
            "status": "exam",
            "src": "Παν. 2024 Β2 (κείμενο XIX)· κλειδί"
          },
          {
            "id": "u1-s-strangulati",
            "kind": "sentence",
            "lesson": 19,
            "la": "et in carcere strangulāti sunt.",
            "el": "και στη φυλακή στραγγαλίστηκαν.",
            "chunks": [
              "και",
              "στη φυλακή",
              "στραγγαλίστηκαν."
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «στραγγαλίζω».",
                "words": [
                  "strangulāti"
                ],
                "why": "strangulo (πνίγω): το λατινικό ρήμα ήρθε από το ελληνικό στραγγαλάω, και σήμερα λέμε στραγγαλίζω. Κλειδί 2024: strangulāti sunt.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2024
            ],
            "say": "strangulāti: στραγγαλίστηκαν. Β2 2024.",
            "status": "exam",
            "src": "Παν. 2024 Β2 (κείμενο XIX)· κλειδί"
          },
          {
            "id": "u1-s-confirmaverunt",
            "kind": "sentence",
            "lesson": 42,
            "la": "coniurationemque nascentem non credendo confirmavērunt;",
            "el": "και ενίσχυσαν τη συνωμοσία που γεννιόταν με το να μην την πιστεύουν·",
            "chunks": [
              "και ενίσχυσαν",
              "τη συνωμοσία",
              "που γεννιόταν",
              "με το να μην την πιστεύουν·"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «φίρμα».",
                "words": [
                  "confirmavērunt"
                ],
                "why": "firmus → confirmo → ιταλικά firma → φίρμα, δάνειο. Κλειδί 2024: confirmavērunt.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2024
            ],
            "say": "confirmavērunt ← firmus: φίρμα. Β2 2024.",
            "status": "exam",
            "src": "Παν. 2024 Β2 (κείμενο XLII)· κλειδί"
          },
          {
            "id": "u1-s-regie",
            "kind": "sentence",
            "lesson": 42,
            "la": "crudeliter et regie id factum esse dicerent.",
            "el": "θα έλεγαν ότι αυτό έγινε σκληρά και τυραννικά.",
            "chunks": [
              "θα έλεγαν",
              "ότι αυτό",
              "έγινε σκληρά",
              "και τυραννικά."
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «ρήγας».",
                "words": [
                  "regie"
                ],
                "why": "rex, rego → ρήγας, δάνειο μέσω ιταλικών. Κλειδί 2024: regie.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2024
            ],
            "say": "regie ← rex: ο ρήγας. Β2 2024.",
            "status": "exam",
            "src": "Παν. 2024 Β2 (κείμενο XLII)· κλειδί"
          },
          {
            "id": "u1-r-family-do",
            "kind": "rule",
            "title": "Οικογένεια δίδωμι: dotem, dabat, dedit",
            "say": "do ~ δίδωμι: dotem ~ προδοσία (2026), dabat ~ μετάδοση (2023), dedit ~ δεδομένα (Σεπτ. 2025). Τρεις χρονιές, μία ρίζα.",
            "ex": [
              {
                "la": "dotem ~ προδοσία",
                "el": "Παν. 2026: προ-δίδωμι"
              },
              {
                "la": "dabat ~ μετάδοση",
                "el": "Παν. 2023: μετα-δίδωμι"
              },
              {
                "la": "dedit ~ δεδομένα",
                "el": "Επαν. Σεπτ. 2025: δίδωμι, δεδομένο"
              },
              {
                "la": "dativus (do, dare)",
                "el": "= η δοτική: μετάφραση του ελληνικού όρου, όχι συγγενής ρίζα· δες την κάρτα με τους γραμματικούς όρους"
              }
            ],
            "terms": [
              "δίδωμι",
              "προίκα"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Ποιο ελληνικό ρήμα είναι η ρίζα για τα dotem, dabat, dedit;",
                "options": [
                  "δίδωμι",
                  "δέχομαι",
                  "δείχνω"
                ],
                "a": "δίδωμι",
                "why": "do, dare ~ δίδωμι. Η προίκα (dos) είναι αυτό που «δίνεται»."
              },
              {
                "t": "tf",
                "q": "Το dedit ταιριάζει με το «δεδομένα».",
                "a": true,
                "why": "Ναι: dedit ↔ δεδομένα (Σεπτ. 2025)."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική λέξη του κειμένου του 2023 συνδέεται με το «μετάδοση»;",
                "options": [
                  "dabat",
                  "domi",
                  "dentem"
                ],
                "a": "dabat",
                "why": "Στο Β2 του 2023 η σωστή απάντηση ήταν dabat (do, dare)."
              }
            ],
            "status": "exam",
            "src": "pastpapers.md §5· traps.md"
          },
          {
            "id": "u1-r-family-gnosco",
            "kind": "rule",
            "title": "Οικογένεια γιγνώσκω: τρία διαγωνίσματα, μία ρίζα",
            "say": "(g)nosco ~ γιγνώσκω: cognoscantur ~ άγνωστος (2022), cognosco ~ απόγνωση (2025), adgnovit ~ διάγνωση (Σεπτ. 2022). Η ίδια ρίζα επιστρέφει.",
            "ex": [
              {
                "la": "cognoscantur ~ άγνωστος",
                "el": "Παν. 2022"
              },
              {
                "la": "cognosco ~ απόγνωση",
                "el": "Παν. 2025"
              },
              {
                "la": "adgnovit ~ διάγνωση",
                "el": "Επαν. Σεπτ. 2022"
              },
              {
                "la": "notus ~ νότα",
                "el": "κατάλογος υπουργείου, μάθ. 28"
              }
            ],
            "terms": [
              "γιγνώσκω"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Ποια λατινική λέξη του κειμένου συνδέεται με το «διάγνωση»;",
                "options": [
                  "adgnōvit",
                  "pedes",
                  "ianuae"
                ],
                "a": "adgnōvit",
                "why": "adgnosco ~ γιγνώσκω: δια + γιγνώσκω = διάγνωση."
              },
              {
                "t": "mcq",
                "q": "Ποια από τις παρακάτω ελληνικές λέξεις ΔΕΝ ανήκει στην οικογένεια γιγνώσκω;",
                "options": [
                  "νυχοκόπτης",
                  "άγνωστος",
                  "απόγνωση"
                ],
                "a": "νυχοκόπτης",
                "why": "Ο νυχοκόπτης ← unguis ~ ὄνυξ. Οι άλλες δύο έχουν τη ρίζα γνω-."
              },
              {
                "t": "tf",
                "q": "Το cognosco στο ζεύγος του 2025 ταιριάζει με το «απόγνωση».",
                "a": true,
                "why": "Σωστά: cognosco ↔ απόγνωση (κλειδί 2025)."
              }
            ],
            "status": "exam",
            "src": "pastpapers.md §4.2, §5· Τεύχος Β΄"
          },
          {
            "id": "u1-s-pedes",
            "kind": "sentence",
            "lesson": 20,
            "la": "Discurrens miles pedes eius animadvertit;",
            "el": "Καθώς έτρεχε εδώ κι εκεί, ο στρατιώτης πρόσεξε τα πόδια του·",
            "chunks": [
              "Καθώς έτρεχε εδώ κι εκεί,",
              "ο στρατιώτης",
              "πρόσεξε",
              "τα πόδια του·"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «εμπόδιο».",
                "words": [
                  "pedes"
                ],
                "why": "pes, pedis ~ πούς: εμπόδιο = ἐν + πούς, κάτι που μπλέκεται στα πόδια. Το κλειδί δεν είναι διαθέσιμο· η απάντηση είναι δική μας.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2022
            ],
            "say": "pedes ← pes ~ πούς: εμπόδιο. Β2 Σεπτ. 2022.",
            "status": "general",
            "src": "Επαν. Σεπτ. 2022 Β2 (κείμενο XX)· λύση δική μας, χωρίς κλειδί"
          },
          {
            "id": "u1-s-adgnovit",
            "kind": "sentence",
            "lesson": 20,
            "la": "eum latentem adgnōvit;",
            "el": "τον αναγνώρισε καθώς κρυβόταν·",
            "chunks": [
              "τον",
              "αναγνώρισε",
              "καθώς κρυβόταν·"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «διάγνωση».",
                "words": [
                  "adgnōvit"
                ],
                "why": "(g)nosco ~ γιγνώσκω: δια-γνωση. Στους ομογενείς: adgnōvit – γνώση.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2022
            ],
            "say": "adgnōvit ← (g)nosco ~ γιγνώσκω: διάγνωση. Β2 Σεπτ. 2022.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2022 Β2 (κείμενο XX)· επιβεβαιώνεται από το Β2 των ομογενών (adgnōvit – γνώση)"
          },
          {
            "id": "u1-s-extractum",
            "kind": "sentence",
            "lesson": 20,
            "la": "extractum imperatōrem eum salutāvit.",
            "el": "Αφού τον τράβηξε έξω, τον χαιρέτισε ως αρχιστράτηγο.",
            "chunks": [
              "Αφού τον τράβηξε έξω,",
              "τον χαιρέτισε",
              "ως αρχιστράτηγο."
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «τρακτέρ».",
                "words": [
                  "extractum"
                ],
                "why": "traho, tractum → tractor → τρακτέρ: δάνειο. Λύση δική μας, χωρίς κλειδί.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2022
            ],
            "say": "extractum ← traho: το τρακτέρ τραβά. Β2 Σεπτ. 2022.",
            "status": "general",
            "src": "Επαν. Σεπτ. 2022 Β2 (κείμενο XX)· λύση δική μας, χωρίς κλειδί"
          },
          {
            "id": "u1-s-ianuae",
            "kind": "sentence",
            "lesson": 34,
            "la": "abiectis armis ianuae appropinquavērunt",
            "el": "Αφού πέταξαν τα όπλα, πλησίασαν την πόρτα.",
            "chunks": [
              "Αφού πέταξαν τα όπλα,",
              "πλησίασαν",
              "την πόρτα."
            ],
            "gloss": [
              {
                "la": "abicio",
                "el": "πετάω"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «Ιανουάριος».",
                "words": [
                  "ianuae"
                ],
                "why": "ianua → Ianuarius, από τον Ianus, θεό των θυρών. Λύση δική μας, χωρίς κλειδί.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2022
            ],
            "say": "ianuae ← ianua: η πόρτα του Ιανουαρίου. Β2 Σεπτ. 2022.",
            "status": "general",
            "src": "Επαν. Σεπτ. 2022 Β2 (κείμενο XXXIV)· λύση δική μας, χωρίς κλειδί"
          },
          {
            "id": "u1-s-super",
            "kind": "sentence",
            "lesson": 47,
            "la": "Etsi super vestem eārum deprehendit canos,",
            "el": "Αν και πάνω από το ρούχο τους εντόπισε άσπρα μαλλιά,",
            "chunks": [
              "Αν και",
              "πάνω από το ρούχο τους",
              "εντόπισε",
              "άσπρα μαλλιά,"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «υπέροχος».",
                "words": [
                  "super"
                ],
                "why": "super ~ ὑπέρ: υπέροχος = ὑπέρ + ἔχω. Η επιλογή του super είναι δική μας, χωρίς κλειδί.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2022
            ],
            "say": "super ~ ὑπέρ: υπέροχος. Β2 Σεπτ. 2022 (δική μας λύση).",
            "status": "unsure",
            "src": "Επαν. Σεπτ. 2022 Β2 (κείμενο XLVII)· λύση δική μας, χωρίς κλειδί"
          },
          {
            "id": "u1-s-boum",
            "kind": "sentence",
            "lesson": 18,
            "la": "postquam boum vestigia foras versa vidit, confūsus gregem ex loco infesto amovēre coepit. Sed bovum mugītus ex speluncā audītus Herculem convertit.",
            "el": "αφού είδε τα ίχνη των βοδιών στραμμένα προς τα έξω, μπερδεμένος άρχισε να απομακρύνει το κοπάδι από τον επικίνδυνο τόπο. Αλλά το μουγκρητό των βοδιών, που ακούστηκε από το σπήλαιο, έστρεψε τον Ηρακλή.",
            "chunks": [
              "αφού είδε τα ίχνη των βοδιών",
              "στραμμένα προς τα έξω,",
              "μπερδεμένος άρχισε",
              "να απομακρύνει το κοπάδι",
              "από τον επικίνδυνο τόπο.",
              "Αλλά το μουγκρητό των βοδιών,",
              "που ακούστηκε από το σπήλαιο,",
              "έστρεψε τον Ηρακλή."
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «βοδινό».",
                "words": [
                  "boum",
                  "bovum"
                ],
                "why": "bos, bovis ~ βους, βόδι. Το κείμενο τυπώνει και τους δύο τύπους, boum και bovum· δεκτά και τα δύο. Στους ομογενείς: boum – βοδινό.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2023
            ],
            "say": "boum ← bos ~ βους: βοδινό. Β2 Σεπτ. 2023.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2023 Β2 (κείμενο XVIII)· επιβεβαιώνεται από το Β2 των ομογενών (boum – βοδινό)"
          },
          {
            "id": "u1-s-genuit",
            "kind": "sentence",
            "lesson": 43,
            "la": "Qui potuisti populāri hanc terram, quae te genuit atque aluit?",
            "el": "Πώς μπόρεσες να λεηλατήσεις αυτή τη γη, που σε γέννησε και σε έθρεψε;",
            "chunks": [
              "Πώς μπόρεσες",
              "να λεηλατήσεις",
              "αυτή τη γη,",
              "που σε γέννησε",
              "και σε έθρεψε;"
            ],
            "gloss": [
              {
                "la": "populor",
                "el": "λεηλατώ"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «ευγενής».",
                "words": [
                  "genuit"
                ],
                "why": "gigno ~ γίγνομαι· ευγενής = εὖ + γένος. Στους ομογενείς: genuit – γένος.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2023
            ],
            "say": "genuit ← gigno ~ γίγνομαι: ευγενής = καλής γενιάς. Β2 Σεπτ. 2023.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2023 Β2 (κείμενο XLIII)· επιβεβαιώνεται από το Β2 των ομογενών (genuit – γένος)"
          },
          {
            "id": "u1-s-domus",
            "kind": "sentence",
            "lesson": 43,
            "la": "intra illa moenia domus ac penātes mei sunt,",
            "el": "μέσα σε εκείνα τα τείχη βρίσκονται το σπίτι και οι Πενάτες μου,",
            "chunks": [
              "μέσα σε εκείνα τα τείχη",
              "βρίσκονται",
              "το σπίτι",
              "και οι Πενάτες μου,"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «δωμάτιο».",
                "words": [
                  "domus"
                ],
                "why": "domus ~ δόμος, δῶμα: δωμάτιο. Στους ομογενείς: domus – δομικός.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2023
            ],
            "say": "domus ~ δόμος: δωμάτιο. Β2 Σεπτ. 2023.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2023 Β2 (κείμενο XLIII)· επιβεβαιώνεται από το Β2 των ομογενών (domus – δομικός)"
          },
          {
            "id": "u1-s-oppugnaretur",
            "kind": "sentence",
            "lesson": 43,
            "la": "Ergo ego nisi peperissem, Rōma non oppugnarētur;",
            "el": "Λοιπόν, αν εγώ δεν είχα γεννήσει, η Ρώμη δεν θα πολιορκούνταν τώρα·",
            "chunks": [
              "Λοιπόν,",
              "αν εγώ",
              "δεν είχα γεννήσει,",
              "η Ρώμη",
              "δεν θα πολιορκούνταν τώρα·"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «πυγμαχία».",
                "words": [
                  "oppugnarētur"
                ],
                "why": "pugnus ~ πυγμή (γροθιά): πυγμαχία· το oppugno είναι της ίδιας οικογένειας. Λύση δική μας.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2023
            ],
            "say": "oppugnarētur ← pugna, pugnus ~ πυγμή: πυγμαχία. Β2 Σεπτ. 2023.",
            "status": "general",
            "src": "Επαν. Σεπτ. 2023 Β2 (κείμενο XLIII)· λύση δική μας, χωρίς κλειδί"
          },
          {
            "id": "u1-s-manet",
            "kind": "sentence",
            "lesson": 43,
            "la": "at contra hos, si pergis, aut immatūra mors aut longa servitus manet.",
            "el": "Αντίθετα, αυτούς, αν συνεχίσεις, τους περιμένει είτε πρόωρος θάνατος είτε μακρά δουλεία.",
            "chunks": [
              "Αντίθετα,",
              "αυτούς,",
              "αν συνεχίσεις,",
              "τους περιμένει",
              "είτε πρόωρος θάνατος",
              "είτε μακρά δουλεία."
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «διαμονή».",
                "words": [
                  "manet"
                ],
                "why": "maneo ~ μένω: δια-μονή. Στους ομογενείς: manet – παραμονή.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2023
            ],
            "say": "manet ← maneo ~ μένω: διαμονή. Β2 Σεπτ. 2023.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2023 Β2 (κείμενο XLIII)· επιβεβαιώνεται από το Β2 των ομογενών (manet – παραμονή)"
          },
          {
            "id": "u1-s-cognoscantur",
            "kind": "sentence",
            "lesson": 45,
            "la": "Curat et providet nē, interceptā epistulā, nostra consilia ab hostibus cognoscantur.",
            "el": "Φροντίζει και προνοεί, ώστε, αν αναχαιτιστεί η επιστολή, τα σχέδιά μας να μη γίνουν γνωστά στους εχθρούς.",
            "chunks": [
              "Φροντίζει και προνοεί,",
              "ώστε, αν αναχαιτιστεί η επιστολή,",
              "τα σχέδιά μας",
              "να μη γίνουν γνωστά",
              "στους εχθρούς."
            ],
            "gloss": [
              {
                "la": "intercipio",
                "el": "αναχαιτίζω"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «άγνωστος».",
                "words": [
                  "cognoscantur"
                ],
                "why": "(g)nosco ~ γιγνώσκω: α-γνωστος. Ζεύγος του 2022.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2022
            ],
            "say": "cognoscantur ← (g)nosco ~ γιγνώσκω: άγνωστος. Β2 2022.",
            "status": "exam",
            "src": "Παν. 2022 Β2 (κείμενο XLV)· κλειδί"
          },
          {
            "id": "u1-s-cognosco",
            "kind": "sentence",
            "lesson": 24,
            "la": "Ego non cognosco vocem tuam?",
            "el": "Εγώ δεν αναγνωρίζω τη φωνή σου;",
            "chunks": [
              "Εγώ δεν",
              "αναγνωρίζω",
              "τη φωνή σου;"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «απόγνωση».",
                "words": [
                  "cognosco"
                ],
                "why": "(g)nosco ~ γιγνώσκω: απόγνωση. Ζεύγος του 2025.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2025
            ],
            "say": "cognosco ← (g)nosco ~ γιγνώσκω: απόγνωση. Β2 2025.",
            "status": "exam",
            "src": "Παν. 2025 Β2 (κείμενο XXIV)· κλειδί"
          },
          {
            "id": "u1-s-secreto",
            "kind": "sentence",
            "lesson": 49,
            "la": "Cui secrēto Porcia «non est hoc» inquit «temerarium factum meum»",
            "el": "Σε αυτόν η Πορκία είπε κρυφά: «Αυτή δεν είναι απερίσκεπτη πράξη μου»",
            "chunks": [
              "Σε αυτόν",
              "η Πορκία",
              "είπε κρυφά:",
              "«Αυτή δεν είναι",
              "απερίσκεπτη πράξη μου»"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «επικριτικός».",
                "words": [
                  "secrēto"
                ],
                "why": "se-cerno (ξεχωρίζω, βάζω κατά μέρος) ~ κρίνω. Επικριτικός ← κρίνω. Ίδια ρίζα με το cernitur (2022). Ζεύγος του 2026.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2026
            ],
            "say": "secrēto ← cerno ~ κρίνω: επικριτικός. Β2 2026.",
            "status": "exam",
            "src": "Παν. 2026 Β2 (κείμενο XLIX, απόσπασμα)· κλειδί"
          },
          {
            "id": "u1-s-matre",
            "kind": "sentence",
            "lesson": 41,
            "la": "proinde quasi cum matre Evandri nunc loquāris,",
            "el": "σαν να μιλούσες τώρα με τη μητέρα του Ευάνδρου,",
            "chunks": [
              "σαν να μιλούσες",
              "τώρα",
              "με τη μητέρα",
              "του Ευάνδρου,"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «μήτρα».",
                "words": [
                  "matre"
                ],
                "why": "mater ~ μήτηρ, μήτρα. Το ζεύγος προκύπτει από τις επιλογές του θέματος του Σεπτ. 2024.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2024
            ],
            "say": "matre ← mater ~ μήτηρ: μήτρα. Β2 Σεπτ. 2024.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2024 Β2 (κείμενο XLI, ημερήσια και ομογενών)· λύση από τις επιλογές του θέματος"
          },
          {
            "id": "u1-s-gignuntur",
            "kind": "sentence",
            "lesson": 27,
            "la": "quae gignuntur statim viēta et mollia,",
            "el": "όσα γεννιούνται αμέσως μαραμένα και μαλακά,",
            "chunks": [
              "όσα",
              "γεννιούνται",
              "αμέσως",
              "μαραμένα και μαλακά,"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «απόγονος».",
                "words": [
                  "gignuntur"
                ],
                "why": "gigno ~ γίγνομαι, γόνος: απόγονος. Το ζεύγος προκύπτει από τις επιλογές του θέματος του Σεπτ. 2024.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2024
            ],
            "say": "gignuntur ← gigno ~ γίγνομαι: απόγονος. Β2 Σεπτ. 2024.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2024 Β2 (κείμενο XXVII, ημερήσια και ομογενών)· λύση από τις επιλογές του θέματος"
          },
          {
            "id": "u1-s-dedit",
            "kind": "sentence",
            "lesson": 21,
            "la": "Quod illic appensum civitāti nomen dedit:",
            "el": "Αυτό, ζυγισμένο εκεί, έδωσε όνομα στην πόλη·",
            "chunks": [
              "Αυτό,",
              "ζυγισμένο εκεί,",
              "έδωσε",
              "όνομα",
              "στην πόλη·"
            ],
            "gloss": [
              {
                "la": "appendo",
                "el": "ζυγίζω"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «δεδομένα».",
                "words": [
                  "dedit"
                ],
                "why": "do ~ δίδωμι: δεδομένα. Ζεύγος του Σεπτ. 2025· δες και το nomen – ονομασία στην ίδια πρόταση.",
                "sec": "Β2"
              }
            ],
            "exam": [
              2025
            ],
            "say": "dedit ← do ~ δίδωμι: δεδομένα. Β2 Σεπτ. 2025.",
            "status": "exam",
            "src": "Επαν. Σεπτ. 2025 Β2 (κείμενο XXI)· κλειδί"
          },
          {
            "id": "u1-r-set-2022",
            "kind": "rule",
            "title": "Β2 Παν. 2022: το πλήρες σύνολο (5 + 2)",
            "say": "2022: cernitur – διάκριση, fugiunt – πρόσφυγας, magna – μεγαλοπρεπής, cognoscantur – άγνωστος, amentum – ιμάντας (κατά το κλειδί). Περίσσευαν ύμνος και κρότος.",
            "ex": [
              {
                "la": "cernitur ↔ διάκριση",
                "el": "cerno ~ κρίνω"
              },
              {
                "la": "fugiunt ↔ πρόσφυγας",
                "el": "fugio ~ φεύγω"
              },
              {
                "la": "magna ↔ μεγαλοπρεπής",
                "el": "magnus ~ μέγας"
              },
              {
                "la": "amentum ↔ ιμάντας",
                "el": "κατά το κλειδί του 2022 (οι ετυμολόγοι το συνδέουν με το apiō/ἅπτω)"
              }
            ],
            "terms": [
              "Στήλη Α",
              "Στήλη Β"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Παν. 2022 Β2: cernitur ↔",
                "options": [
                  "διάκριση",
                  "πρόσφυγας",
                  "μεγαλοπρεπής",
                  "άγνωστος",
                  "ιμάντας",
                  "ύμνος",
                  "κρότος"
                ],
                "a": "διάκριση",
                "why": "cerno ~ κρίνω: διακρίνω."
              },
              {
                "t": "mcq",
                "q": "Παν. 2022 Β2: fugiunt ↔",
                "options": [
                  "διάκριση",
                  "πρόσφυγας",
                  "μεγαλοπρεπής",
                  "άγνωστος",
                  "ιμάντας",
                  "ύμνος",
                  "κρότος"
                ],
                "a": "πρόσφυγας",
                "why": "fugio ~ φεύγω."
              },
              {
                "t": "mcq",
                "q": "Παν. 2022 Β2: magna ↔",
                "options": [
                  "διάκριση",
                  "πρόσφυγας",
                  "μεγαλοπρεπής",
                  "άγνωστος",
                  "ιμάντας",
                  "ύμνος",
                  "κρότος"
                ],
                "a": "μεγαλοπρεπής",
                "why": "magnus ~ μέγας."
              },
              {
                "t": "mcq",
                "q": "Παν. 2022 Β2: cognoscantur ↔",
                "options": [
                  "διάκριση",
                  "πρόσφυγας",
                  "μεγαλοπρεπής",
                  "άγνωστος",
                  "ιμάντας",
                  "ύμνος",
                  "κρότος"
                ],
                "a": "άγνωστος",
                "why": "(g)nosco ~ γιγνώσκω."
              },
              {
                "t": "mcq",
                "q": "Παν. 2022 Β2: amentum ↔",
                "options": [
                  "διάκριση",
                  "πρόσφυγας",
                  "μεγαλοπρεπής",
                  "άγνωστος",
                  "ιμάντας",
                  "ύμνος",
                  "κρότος"
                ],
                "a": "ιμάντας",
                "why": "amentum, το λουρί του ακοντίου: ιμάντας (ἱμάς) κατά το κλειδί του 2022· οι ετυμολόγοι το συνδέουν με το apiō/ἅπτω."
              }
            ],
            "status": "exam",
            "src": "Παν. 2022 Β2 (στήλες από το θέμα)· κλειδί tutor"
          },
          {
            "id": "u1-r-set-2025",
            "kind": "rule",
            "title": "Β2 Παν. 2025: το πλήρες σύνολο (5 + 2)",
            "say": "2025: domi – δωμάτιο, cognosco – απόγνωση, imperitos – πείρα, agunt – αγωγή, premi – πρέσα. Περίσσευαν πρωινός και ένδυμα.",
            "ex": [
              {
                "la": "domi ↔ δωμάτιο",
                "el": "domus ~ δόμος"
              },
              {
                "la": "imperitos ↔ πείρα",
                "el": "peritus ~ πεῖρα"
              },
              {
                "la": "agunt ↔ αγωγή",
                "el": "ago ~ ἄγω"
              },
              {
                "la": "premi ↔ πρέσα",
                "el": "δάνειο"
              }
            ],
            "terms": [
              "Στήλη Α",
              "Στήλη Β"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Παν. 2025 Β2: domi ↔",
                "options": [
                  "απόγνωση",
                  "πείρα",
                  "πρωινός",
                  "δωμάτιο",
                  "αγωγή",
                  "ένδυμα",
                  "πρέσα"
                ],
                "a": "δωμάτιο",
                "why": "domus ~ δόμος, δῶμα."
              },
              {
                "t": "mcq",
                "q": "Παν. 2025 Β2: cognosco ↔",
                "options": [
                  "απόγνωση",
                  "πείρα",
                  "πρωινός",
                  "δωμάτιο",
                  "αγωγή",
                  "ένδυμα",
                  "πρέσα"
                ],
                "a": "απόγνωση",
                "why": "(g)nosco ~ γιγνώσκω."
              },
              {
                "t": "mcq",
                "q": "Παν. 2025 Β2: imperitos ↔",
                "options": [
                  "απόγνωση",
                  "πείρα",
                  "πρωινός",
                  "δωμάτιο",
                  "αγωγή",
                  "ένδυμα",
                  "πρέσα"
                ],
                "a": "πείρα",
                "why": "peritus ~ πεῖρα."
              },
              {
                "t": "mcq",
                "q": "Παν. 2025 Β2: agunt ↔",
                "options": [
                  "απόγνωση",
                  "πείρα",
                  "πρωινός",
                  "δωμάτιο",
                  "αγωγή",
                  "ένδυμα",
                  "πρέσα"
                ],
                "a": "αγωγή",
                "why": "ago ~ ἄγω."
              },
              {
                "t": "mcq",
                "q": "Παν. 2025 Β2: premi ↔",
                "options": [
                  "απόγνωση",
                  "πείρα",
                  "πρωινός",
                  "δωμάτιο",
                  "αγωγή",
                  "ένδυμα",
                  "πρέσα"
                ],
                "a": "πρέσα",
                "why": "premo → pressa → πρέσα· δάνειο."
              }
            ],
            "status": "exam",
            "src": "Παν. 2025 Β2 (στήλες από το θέμα)· κλειδί poukamisas"
          },
          {
            "id": "u1-r-set-2026",
            "kind": "rule",
            "title": "Β2 Παν. 2026: το πλήρες σύνολο (5 + 2)",
            "say": "2026: dotem – προδοσία, reliquerat – ελλιπής, conferre – αναφορά, unguium – νυχοκόπτης, secreto – επικριτικός. Περίσσευαν σειρήνα και δόξα.",
            "ex": [
              {
                "la": "dotem ↔ προδοσία",
                "el": "do ~ δίδωμι"
              },
              {
                "la": "reliquerat ↔ ελλιπής",
                "el": "relinquo ~ λείπω"
              },
              {
                "la": "conferre ↔ αναφορά",
                "el": "fero ~ φέρω"
              },
              {
                "la": "secreto ↔ επικριτικός",
                "el": "cerno ~ κρίνω"
              }
            ],
            "terms": [
              "Στήλη Α",
              "Στήλη Β"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Παν. 2026 Β2: dotem ↔",
                "options": [
                  "αναφορά",
                  "σειρήνα",
                  "νυχοκόπτης",
                  "επικριτικός",
                  "προδοσία",
                  "δόξα",
                  "ελλιπής"
                ],
                "a": "προδοσία",
                "why": "do ~ δίδωμι."
              },
              {
                "t": "mcq",
                "q": "Παν. 2026 Β2: reliquerat ↔",
                "options": [
                  "αναφορά",
                  "σειρήνα",
                  "νυχοκόπτης",
                  "επικριτικός",
                  "προδοσία",
                  "δόξα",
                  "ελλιπής"
                ],
                "a": "ελλιπής",
                "why": "relinquo ~ λείπω."
              },
              {
                "t": "mcq",
                "q": "Παν. 2026 Β2: conferre ↔",
                "options": [
                  "αναφορά",
                  "σειρήνα",
                  "νυχοκόπτης",
                  "επικριτικός",
                  "προδοσία",
                  "δόξα",
                  "ελλιπής"
                ],
                "a": "αναφορά",
                "why": "fero ~ φέρω."
              },
              {
                "t": "mcq",
                "q": "Παν. 2026 Β2: unguium ↔",
                "options": [
                  "αναφορά",
                  "σειρήνα",
                  "νυχοκόπτης",
                  "επικριτικός",
                  "προδοσία",
                  "δόξα",
                  "ελλιπής"
                ],
                "a": "νυχοκόπτης",
                "why": "unguis ~ ὄνυξ."
              },
              {
                "t": "mcq",
                "q": "Παν. 2026 Β2: secreto ↔",
                "options": [
                  "αναφορά",
                  "σειρήνα",
                  "νυχοκόπτης",
                  "επικριτικός",
                  "προδοσία",
                  "δόξα",
                  "ελλιπής"
                ],
                "a": "επικριτικός",
                "why": "se-cerno ~ κρίνω."
              }
            ],
            "status": "exam",
            "src": "Παν. 2026 Β2 (στήλες από το θέμα)· κλειδί Διακρότημα"
          },
          {
            "id": "u1-r-set-sept2024",
            "kind": "rule",
            "title": "Β2 Επαναληπτικές Σεπτ. 2024: το σύνολο (ομογενών 5 από 5, ημερήσια 5 + 1)",
            "say": "Σεπτ. 2024: pomis, gignuntur, mollia, matre, vis. Στους ομογενείς οι 5 επιλογές ταιριάζουν ακριβώς· στις ημερήσιες περισσεύει το μαλώνω.",
            "ex": [
              {
                "la": "pomis ↔ πόμολο",
                "el": "pomum, ο καρπός"
              },
              {
                "la": "gignuntur ↔ απόγονος",
                "el": "gigno ~ γίγνομαι"
              },
              {
                "la": "matre ↔ μήτρα",
                "el": "mater ~ μήτηρ"
              },
              {
                "la": "vis ↔ βούληση",
                "el": "vis από το volo"
              }
            ],
            "terms": [
              "Στήλη Α",
              "Στήλη Β"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Σεπτ. 2024 Β2: pomis ↔",
                "options": [
                  "μήτρα",
                  "βούληση",
                  "πόμολο",
                  "απόγονος",
                  "μαλακός",
                  "μαλώνω"
                ],
                "a": "πόμολο",
                "why": "pomum → πόμολο, ο καρπός (ιταλικά pomolo)."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2024 Β2: gignuntur ↔",
                "options": [
                  "μήτρα",
                  "βούληση",
                  "πόμολο",
                  "απόγονος",
                  "μαλακός",
                  "μαλώνω"
                ],
                "a": "απόγονος",
                "why": "gigno ~ γίγνομαι, γόνος."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2024 Β2: mollia ↔",
                "options": [
                  "μήτρα",
                  "βούληση",
                  "πόμολο",
                  "απόγονος",
                  "μαλακός",
                  "μαλώνω"
                ],
                "a": "μαλακός",
                "why": "mollis ~ μαλακός: αμφιλεγόμενη ετυμολογία, αλλά η απάντηση που θέλει το θέμα (το μαλώνω περισσεύει)."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2024 Β2: matre ↔",
                "options": [
                  "μήτρα",
                  "βούληση",
                  "πόμολο",
                  "απόγονος",
                  "μαλακός",
                  "μαλώνω"
                ],
                "a": "μήτρα",
                "why": "mater ~ μήτηρ, μήτρα."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2024 Β2: vis ↔",
                "options": [
                  "μήτρα",
                  "βούληση",
                  "πόμολο",
                  "απόγονος",
                  "μαλακός",
                  "μαλώνω"
                ],
                "a": "βούληση",
                "why": "vis (από το volo) ~ βούλομαι."
              }
            ],
            "status": "exam",
            "src": "Επαν. Σεπτ. 2024 Β2 (ημερήσια και ομογενών, στήλες από το θέμα)· λύση από τις επιλογές του θέματος"
          },
          {
            "id": "u1-r-set-sept2025",
            "kind": "rule",
            "title": "Β2 Σεπτ. 2025: το σύνολο (ομογενών 5 από 5, επαναληπτικές 5 + 1)",
            "say": "Σεπτ. 2025: nomen – ονομασία, dedit – δεδομένα, plenae – πλήθος, vetustas – βετεράνος, conformabam – φορμαλισμός. Στις επαναληπτικές περίσσευε το δίκαιος.",
            "ex": [
              {
                "la": "nomen ↔ ονομασία",
                "el": "nomen ~ ὄνομα"
              },
              {
                "la": "dedit ↔ δεδομένα",
                "el": "do ~ δίδωμι"
              },
              {
                "la": "vetustas ↔ βετεράνος",
                "el": "δάνειο από το vetus"
              },
              {
                "la": "conformabam ↔ φορμαλισμός",
                "el": "δάνειο από το forma"
              }
            ],
            "terms": [
              "Στήλη Α",
              "Στήλη Β"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Σεπτ. 2025 Β2: nomen ↔",
                "options": [
                  "ονομασία",
                  "δεδομένα",
                  "πλήθος",
                  "βετεράνος",
                  "φορμαλισμός",
                  "δίκαιος"
                ],
                "a": "ονομασία",
                "why": "nomen ~ ὄνομα."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2025 Β2: dedit ↔",
                "options": [
                  "ονομασία",
                  "δεδομένα",
                  "πλήθος",
                  "βετεράνος",
                  "φορμαλισμός",
                  "δίκαιος"
                ],
                "a": "δεδομένα",
                "why": "do ~ δίδωμι."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2025 Β2: plenae ↔",
                "options": [
                  "ονομασία",
                  "δεδομένα",
                  "πλήθος",
                  "βετεράνος",
                  "φορμαλισμός",
                  "δίκαιος"
                ],
                "a": "πλήθος",
                "why": "plenus ~ πλήρης, πλήθος."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2025 Β2: vetustas ↔",
                "options": [
                  "ονομασία",
                  "δεδομένα",
                  "πλήθος",
                  "βετεράνος",
                  "φορμαλισμός",
                  "δίκαιος"
                ],
                "a": "βετεράνος",
                "why": "vetus → veteranus → βετεράνος."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2025 Β2: conformabam ↔",
                "options": [
                  "ονομασία",
                  "δεδομένα",
                  "πλήθος",
                  "βετεράνος",
                  "φορμαλισμός",
                  "δίκαιος"
                ],
                "a": "φορμαλισμός",
                "why": "forma → φορμαλισμός."
              }
            ],
            "status": "exam",
            "src": "Επαν. Σεπτ. 2025 Β2 (ομογενών και επαναληπτικές, στήλες από το θέμα)· κλειδί όπως στο pastpapers.md §4.2"
          },
          {
            "id": "u1-s-n17-mercatorum",
            "kind": "sentence",
            "lesson": 17,
            "la": "Magnus timor exercitum occupāvit ex vocibus Gallōrum ac mercatōrum,",
            "el": "Μεγάλος φόβος κατέλαβε τον στρατό από τα λόγια των Γαλατών και των εμπόρων,",
            "chunks": [
              "Μεγάλος φόβος",
              "κατέλαβε",
              "τον στρατό",
              "από τα λόγια",
              "των Γαλατών",
              "και των εμπόρων,"
            ],
            "gloss": [
              {
                "la": "occupo",
                "el": "καταλαμβάνω"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «μερκαντιλισμός».",
                "words": [
                  "mercatōrum"
                ],
                "why": "mercator (ο έμπορος) → μερκαντιλισμός: κατάλογος υπουργείου, μάθ. 17.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "mercatōrum ← mercator: μερκαντιλισμός, η εμποροκρατία.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 17· πρόταση από το κείμενο XVII (texts.md)"
          },
          {
            "id": "u1-s-n17-militaris",
            "kind": "sentence",
            "lesson": 17,
            "la": "Horum vocibus ac timōre paulātim etiam ii, qui rei militāris perīti habebantur, perturbabantur.",
            "el": "Με τα λόγια αυτών και με τον φόβο, σιγά σιγά ακόμη και εκείνοι που θεωρούνταν έμπειροι στα στρατιωτικά, ταράζονταν.",
            "chunks": [
              "Με τα λόγια αυτών",
              "και με τον φόβο,",
              "σιγά σιγά",
              "ακόμη και εκείνοι",
              "που θεωρούνταν έμπειροι",
              "στα στρατιωτικά, ταράζονταν."
            ],
            "gloss": [
              {
                "la": "perturbo",
                "el": "ταράζω"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «μιλιταρισμός».",
                "words": [
                  "militāris"
                ],
                "why": "militaris (στρατιωτικός) → μιλιταρισμός: μάθ. 16. Και το perīti ~ πείρα (2025).",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "militāris → μιλιταρισμός· perīti ~ πείρα.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 16· πρόταση από το κείμενο XVII (texts.md)"
          },
          {
            "id": "u1-s-n22-fructus",
            "kind": "sentence",
            "lesson": 22,
            "la": "praesentes fructus neglegāmus,",
            "el": "ας αδιαφορήσουμε για τους άμεσους καρπούς,",
            "chunks": [
              "ας αδιαφορήσουμε",
              "για τους",
              "άμεσους καρπούς,"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «φρούτο».",
                "words": [
                  "fructus"
                ],
                "why": "fructus (ο καρπός) → φρούτο: κατάλογος υπουργείου, μάθ. 22.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "fructus → φρούτο: δάνειο του καταλόγου, μάθ. 22.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 22· πρόταση από το κείμενο XXII (texts.md)"
          },
          {
            "id": "u1-s-n22-serviamus",
            "kind": "sentence",
            "lesson": 22,
            "la": "posteritātis gloriae serviāmus;",
            "el": "ας υπηρετήσουμε τη δόξα της μεταγενέστερης γενιάς·",
            "chunks": [
              "ας υπηρετήσουμε",
              "τη δόξα",
              "της μεταγενέστερης γενιάς·"
            ],
            "gloss": [
              {
                "la": "posteritas",
                "el": "οι μεταγενέστεροι"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «σερβιτόρος».",
                "words": [
                  "serviāmus"
                ],
                "why": "servio (υπηρετώ) → σερβιτόρος, σερβίρω: μάθ. 22.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "serviāmus ← servio: ο σερβιτόρος υπηρετεί.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 22· πρόταση από το κείμενο XXII (texts.md)"
          },
          {
            "id": "u1-s-n22-rem",
            "kind": "sentence",
            "lesson": 22,
            "la": "qui hanc rem publicam stabilivērunt;",
            "el": "που εδραίωσαν αυτό το κράτος·",
            "chunks": [
              "που εδραίωσαν",
              "αυτό",
              "το κράτος·"
            ],
            "gloss": [
              {
                "la": "stabilio",
                "el": "εδραιώνω"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «ρεπουμπλικάνοι».",
                "words": [
                  "rem",
                  "publicam"
                ],
                "why": "res publica (η πολιτεία) → ρεπουμπλικάνοι (κόμμα των ΗΠΑ): μάθ. 22. Η φράση έχει δύο λέξεις, rem και publicam.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "rem publicam → ρεπουμπλικάνοι: το κόμμα της «res publica».",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 22· πρόταση από το κείμενο XXII (texts.md)"
          },
          {
            "id": "u1-s-n26-studiose",
            "kind": "sentence",
            "lesson": 26,
            "la": "quam studiōse, quam intellegenter lectitābat!",
            "el": "πόσο επιμελώς, πόσο έξυπνα διάβαζε συνεχώς!",
            "chunks": [
              "πόσο επιμελώς,",
              "πόσο έξυπνα",
              "διάβαζε συνεχώς!"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «στούντιο».",
                "words": [
                  "studiōse"
                ],
                "why": "studiose (με επιμέλεια) → στούντιο: μάθ. 26.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "studiōse → στούντιο· intellegenter → ιντελιγκέντσια.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 26· πρόταση από το κείμενο XXVI (texts.md)"
          },
          {
            "id": "u1-s-n26-patientia",
            "kind": "sentence",
            "lesson": 26,
            "la": "Quā illa patientiā, quā etiam constantiā novissimam valetudinem tulit!",
            "el": "Με πόση υπομονή, με πόση μάλιστα σταθερότητα άντεξε την τελευταία της ασθένεια!",
            "chunks": [
              "Με πόση υπομονή,",
              "με πόση μάλιστα σταθερότητα",
              "άντεξε",
              "την τελευταία της ασθένεια!"
            ],
            "gloss": [
              {
                "la": "valetudo",
                "el": "ασθένεια, υγεία"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «πασιέντσα».",
                "words": [
                  "patientiā"
                ],
                "why": "patientia (υπομονή) → πασιέντσα· constantia → Κωνσταντίνος: μάθ. 26.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "patientiā → πασιέντσα· constantiā → Κωνσταντίνος.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 26· πρόταση από το κείμενο XXVI (texts.md)"
          },
          {
            "id": "u1-s-n26-festivius",
            "kind": "sentence",
            "lesson": 26,
            "la": "Eā puellā nihil umquam festivius, nihil amabilius vidi.",
            "el": "Τίποτα πιο εύθυμο, τίποτα πιο αξιαγάπητο από εκείνο το κορίτσι δεν είδα ποτέ.",
            "chunks": [
              "Τίποτα πιο εύθυμο,",
              "τίποτα πιο αξιαγάπητο",
              "από εκείνο το κορίτσι",
              "δεν είδα ποτέ."
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «φεστιβάλ».",
                "words": [
                  "festivius"
                ],
                "why": "festivus (πρόσχαρος) → φεστιβάλ: μάθ. 26. Το festivius είναι συγκριτικός.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "festivius ← festivus: φεστιβάλ.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 26· πρόταση από το κείμενο XXVI (texts.md, με παράλειψη)"
          },
          {
            "id": "u1-s-n30-luxuriae",
            "kind": "sentence",
            "lesson": 30,
            "la": "Et si habet Asia suspiciōnem quandam luxuriae,",
            "el": "Κι αν η Ασία έχει κάποια υποψία πολυτέλειας,",
            "chunks": [
              "Κι αν η Ασία",
              "έχει",
              "κάποια υποψία",
              "πολυτέλειας,"
            ],
            "gloss": [
              {
                "la": "suspicio",
                "el": "υποψία"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «λούσο».",
                "words": [
                  "luxuriae"
                ],
                "why": "luxuria (πολυτέλεια) → λούσο: μάθ. 30.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "luxuriae → λούσο.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 30· πρόταση από το κείμενο XXX (texts.md)"
          },
          {
            "id": "u1-s-n30-virtutis",
            "kind": "sentence",
            "lesson": 30,
            "la": "Meruisse vero stipendia in eo bello virtūtis fuit;",
            "el": "Το να υπηρετήσει στρατιωτικά σε εκείνον τον πόλεμο ήταν δείγμα αρετής·",
            "chunks": [
              "Το να υπηρετήσει",
              "στρατιωτικά",
              "σε εκείνον τον πόλεμο",
              "ήταν δείγμα αρετής·"
            ],
            "gloss": [
              {
                "la": "mereo stipendia",
                "el": "υπηρετώ στρατιωτικά"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «βιρτουόζος».",
                "words": [
                  "virtūtis"
                ],
                "why": "virtus (αρετή, χάρισμα) → βιρτουόζος: μάθ. 17 και 39.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "virtūtis → βιρτουόζος.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 17, 39· πρόταση από το κείμενο XXX (texts.md)"
          },
          {
            "id": "u1-s-n30-imperatore",
            "kind": "sentence",
            "lesson": 30,
            "la": "patre imperatōre libentissime meruisse pietātis fuit;",
            "el": "το να υπηρετήσει με τον πατέρα στρατηγό με τη μεγαλύτερη προθυμία ήταν δείγμα ευσέβειας·",
            "chunks": [
              "το να υπηρετήσει",
              "με τον πατέρα στρατηγό",
              "με τη μεγαλύτερη προθυμία",
              "ήταν δείγμα ευσέβειας·"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «ιμπεριαλισμός».",
                "words": [
                  "imperatōre"
                ],
                "why": "imperator (στρατηγός) → ιμπεριαλισμός: μάθ. 39.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "imperatōre → ιμπεριαλισμός.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 39· πρόταση από το κείμενο XXX (texts.md)"
          },
          {
            "id": "u1-s-n33-libidines",
            "kind": "sentence",
            "lesson": 33,
            "la": "comprimendae libidines, propaganda suboles;",
            "el": "πρέπει να περιοριστούν τα πάθη, να αυξηθεί η νέα γενιά·",
            "chunks": [
              "πρέπει να περιοριστούν",
              "τα πάθη,",
              "να αυξηθεί",
              "η νέα γενιά·"
            ],
            "gloss": [
              {
                "la": "suboles",
                "el": "η νέα γενιά, ο απόγονος"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «λίμπιντο».",
                "words": [
                  "libidines"
                ],
                "why": "libido (πάθος) → λίμπιντο· propago → προπαγάνδα: μάθ. 33.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "libidines → λίμπιντο· propaganda → προπαγάνδα.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 33· πρόταση από το κείμενο XXXIII (texts.md)"
          },
          {
            "id": "u1-s-n33-sananda",
            "kind": "sentence",
            "lesson": 33,
            "la": "omnia nunc belli vulnera tibi sananda sunt",
            "el": "όλες τώρα οι πληγές του πολέμου πρέπει να θεραπευτούν από σένα",
            "chunks": [
              "όλες τώρα",
              "οι πληγές του πολέμου",
              "πρέπει να θεραπευτούν",
              "από σένα"
            ],
            "gloss": [],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «σανατόριο».",
                "words": [
                  "sananda"
                ],
                "why": "sano (θεραπεύω) → σανατόριο: μάθ. 33.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "sananda ← sano: το σανατόριο θεραπεύει.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 33· πρόταση από το κείμενο XXXIII (texts.md)"
          },
          {
            "id": "u1-s-n50-solus",
            "kind": "sentence",
            "lesson": 50,
            "la": "solus P. Scipio Aemiliānus cum toto senātu dissensit",
            "el": "Μόνο ο Πόπλιος Σκιπίων Αιμιλιανός διαφώνησε με ολόκληρη τη σύγκλητο",
            "chunks": [
              "Μόνο ο Πόπλιος Σκιπίων",
              "Αιμιλιανός",
              "διαφώνησε",
              "με ολόκληρη τη σύγκλητο"
            ],
            "gloss": [
              {
                "la": "dissentio",
                "el": "διαφωνώ"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «σόλο».",
                "words": [
                  "solus"
                ],
                "why": "solus (μόνος) → σόλο: μάθ. 40 και 50.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "solus → σόλο.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 40, 50· πρόταση από το κείμενο L (texts.md)"
          },
          {
            "id": "u1-s-n50-mitteretur",
            "kind": "sentence",
            "lesson": 50,
            "la": "Scipio obtinuit, ut neuter in provinciam mitterētur.",
            "el": "Ο Σκιπίων πέτυχε να μη σταλεί κανένας από τους δύο στην επαρχία.",
            "chunks": [
              "Ο Σκιπίων πέτυχε",
              "να μη σταλεί",
              "κανένας από τους δύο",
              "στην επαρχία."
            ],
            "gloss": [
              {
                "la": "obtineo",
                "el": "πετυχαίνω"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «κομισάριος».",
                "words": [
                  "mitterētur"
                ],
                "why": "mitto (στέλνω) → κομισάριος, μισιονάριος: μάθ. 16, 36, 45, 50.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "mitterētur ← mitto: κομισάριος, μισιονάριος.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 50· πρόταση από το κείμενο L (texts.md)"
          },
          {
            "id": "u1-s-n50-magistram",
            "kind": "sentence",
            "lesson": 50,
            "la": "Nam Scipio Aemiliānus aeque malam imperii magistram iudicābat inopiam atque avaritiam.",
            "el": "Γιατί ο Σκιπίων Αιμιλιανός θεωρούσε εξίσου κακή δασκάλα της εξουσίας τη φτώχεια όπως και τη φιλαργυρία.",
            "chunks": [
              "Γιατί ο Σκιπίων Αιμιλιανός",
              "θεωρούσε",
              "εξίσου κακή",
              "δασκάλα της εξουσίας",
              "τη φτώχεια",
              "όπως και τη φιλαργυρία."
            ],
            "gloss": [
              {
                "la": "inopia",
                "el": "φτώχεια"
              },
              {
                "la": "avaritia",
                "el": "φιλαργυρία"
              }
            ],
            "notes": [],
            "find": [
              {
                "ask": "Βρες στο κείμενο τη λατινική λέξη που συγγενεύει ετυμολογικά με το «μάγιστρος».",
                "words": [
                  "magistram"
                ],
                "why": "magistra (η δασκάλα) → μάγιστρος: μάθ. 50. Και imperii → ιμπεριαλισμός.",
                "sec": "Β2"
              }
            ],
            "exam": [],
            "say": "magistram → μάγιστρος· imperii → ιμπεριαλισμός.",
            "status": "general",
            "src": "Κατάλογος ΥΠΑΙΘ μάθ. 50· πρόταση από το κείμενο L (texts.md)"
          },
          {
            "id": "u1-r-set-sept2022",
            "kind": "rule",
            "title": "Β2 Επαναληπτικές Σεπτ. 2022 (ομογενών): το σύνολο (5 + 2)",
            "say": "Σεπτ. 2022: discurrens – κούρσα, adgnovit – γνώση, armis – αρματολός, domestici – πολεοδομία, vestem – βεστιάριο. Περίσσευαν διαδρομή και δόση.",
            "ex": [
              {
                "la": "discurrens ↔ κούρσα",
                "el": "curro ~ κούρσα"
              },
              {
                "la": "adgnovit ↔ γνώση",
                "el": "(g)nosco ~ γιγνώσκω"
              },
              {
                "la": "armis ↔ αρματολός",
                "el": "arma → άρματα, αρματολός"
              },
              {
                "la": "domestici ↔ πολεοδομία",
                "el": "domus ~ δόμος"
              }
            ],
            "terms": [
              "Στήλη Α",
              "Στήλη Β"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Σεπτ. 2022 Β2: discurrens ↔",
                "options": [
                  "πολεοδομία",
                  "διαδρομή",
                  "κούρσα",
                  "βεστιάριο",
                  "δόση",
                  "γνώση",
                  "αρματολός"
                ],
                "a": "κούρσα",
                "why": "curro, discurro → κούρσα. Η διαδρομή περισσεύει (ρίζα δρομ-)."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2022 Β2: adgnovit ↔",
                "options": [
                  "πολεοδομία",
                  "διαδρομή",
                  "κούρσα",
                  "βεστιάριο",
                  "δόση",
                  "γνώση",
                  "αρματολός"
                ],
                "a": "γνώση",
                "why": "(g)nosco ~ γιγνώσκω: γνώση."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2022 Β2: armis ↔",
                "options": [
                  "πολεοδομία",
                  "διαδρομή",
                  "κούρσα",
                  "βεστιάριο",
                  "δόση",
                  "γνώση",
                  "αρματολός"
                ],
                "a": "αρματολός",
                "why": "arma → αρματολός (ο ένοπλος της Επανάστασης)."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2022 Β2: domestici ↔",
                "options": [
                  "πολεοδομία",
                  "διαδρομή",
                  "κούρσα",
                  "βεστιάριο",
                  "δόση",
                  "γνώση",
                  "αρματολός"
                ],
                "a": "πολεοδομία",
                "why": "domus ~ δόμος: πολεοδομία. Η δόση περισσεύει (ρίζα δο-)."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2022 Β2: vestem ↔",
                "options": [
                  "πολεοδομία",
                  "διαδρομή",
                  "κούρσα",
                  "βεστιάριο",
                  "δόση",
                  "γνώση",
                  "αρματολός"
                ],
                "a": "βεστιάριο",
                "why": "vestis → βεστιάριο, η ντουλάπα των ρούχων."
              }
            ],
            "status": "exam",
            "src": "Επαν. Σεπτ. 2022 Β2 (ομογενών, στήλες από το θέμα)· λύση από τις επιλογές του θέματος"
          },
          {
            "id": "u1-r-set-sept2023",
            "kind": "rule",
            "title": "Β2 Επαναληπτικές Σεπτ. 2023 (ομογενών): το σύνολο (5 από 5)",
            "say": "Σεπτ. 2023: partem – παρτίδα, boum – βοδινό, genuit – γένος, domus – δομικός, manet – παραμονή. Οι 5 επιλογές ταιριάζουν ακριβώς στις 5 λέξεις.",
            "ex": [
              {
                "la": "partem ↔ παρτίδα",
                "el": "pars → παρτίδα"
              },
              {
                "la": "boum ↔ βοδινό",
                "el": "bos, bovis ~ βους"
              },
              {
                "la": "genuit ↔ γένος",
                "el": "gigno ~ γίγνομαι, γένος"
              },
              {
                "la": "domus ↔ δομικός",
                "el": "domus ~ δόμος"
              }
            ],
            "terms": [
              "Στήλη Α",
              "Στήλη Β"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Σεπτ. 2023 Β2: partem ↔",
                "options": [
                  "γένος",
                  "δομικός",
                  "παραμονή",
                  "παρτίδα",
                  "βοδινό"
                ],
                "a": "παρτίδα",
                "why": "pars → παρτίδα."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2023 Β2: boum ↔",
                "options": [
                  "γένος",
                  "δομικός",
                  "παραμονή",
                  "παρτίδα",
                  "βοδινό"
                ],
                "a": "βοδινό",
                "why": "bos, bovis ~ βους, βόδι."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2023 Β2: genuit ↔",
                "options": [
                  "γένος",
                  "δομικός",
                  "παραμονή",
                  "παρτίδα",
                  "βοδινό"
                ],
                "a": "γένος",
                "why": "gigno ~ γίγνομαι, γένος."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2023 Β2: domus ↔",
                "options": [
                  "γένος",
                  "δομικός",
                  "παραμονή",
                  "παρτίδα",
                  "βοδινό"
                ],
                "a": "δομικός",
                "why": "domus ~ δόμος: δομικός."
              },
              {
                "t": "mcq",
                "q": "Σεπτ. 2023 Β2: manet ↔",
                "options": [
                  "γένος",
                  "δομικός",
                  "παραμονή",
                  "παρτίδα",
                  "βοδινό"
                ],
                "a": "παραμονή",
                "why": "maneo ~ μένω: παραμονή."
              }
            ],
            "status": "exam",
            "src": "Επαν. Σεπτ. 2023 Β2 (ομογενών, στήλες από το θέμα)· λύση από τις επιλογές του θέματος"
          },
          {
            "id": "u1-r-rev-a",
            "kind": "rule",
            "title": "Από τα ελληνικά στα λατινικά (I): βρες τη λατινική ρίζα",
            "say": "Το Σχήμα Β ξεκινά από την ελληνική λέξη. Δες το ιμπεριαλισμός, ιντελιγκέντσια, κονσέρβα και βρες ποια λατινική ρίζα κρύβεται μέσα τους.",
            "ex": [
              {
                "la": "ιμπεριαλισμός → impero",
                "el": "διατάζω"
              },
              {
                "la": "ιντελιγκέντσια → intellego",
                "el": "καταλαβαίνω"
              },
              {
                "la": "κονσέρβα → conservo",
                "el": "διατηρώ"
              },
              {
                "la": "κογκρέσο → congredior",
                "el": "συναντιέμαι"
              }
            ],
            "terms": [
              "Σχήμα Β"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Ποια λατινική ρίζα κρύβεται στο «ιμπεριαλισμός»;",
                "options": [
                  "impero",
                  "imitor",
                  "instinguo"
                ],
                "a": "impero",
                "why": "impero (διατάζω) → ιμπεριαλισμός."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική ρίζα κρύβεται στο «ιντελιγκέντσια»;",
                "options": [
                  "intellego",
                  "instinguo",
                  "instituo"
                ],
                "a": "intellego",
                "why": "intellego (καταλαβαίνω) → ιντελιγκέντσια."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική ρίζα κρύβεται στο «κονσέρβα»;",
                "options": [
                  "conservo",
                  "confundo",
                  "conformo"
                ],
                "a": "conservo",
                "why": "conservo (διατηρώ) → κονσέρβα."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική ρίζα κρύβεται στο «κογκρέσο»;",
                "options": [
                  "congredior",
                  "colo",
                  "curo"
                ],
                "a": "congredior",
                "why": "congredior (συναντιέμαι) → κογκρέσο."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική ρίζα κρύβεται στο «ντοκουμέντο»;",
                "options": [
                  "doceo",
                  "dux",
                  "dens"
                ],
                "a": "doceo",
                "why": "doceo (διδάσκω) → ντοκουμέντο."
              }
            ],
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27 (ομαδοποίηση δική μας)"
          },
          {
            "id": "u1-r-rev-b",
            "kind": "rule",
            "title": "Από τα ελληνικά στα λατινικά (II): βρες τη λατινική ρίζα",
            "say": "Δεύτερη προπόνηση του Σχήματος Β: φουρτούνα, μουράγιο, κουλτούρα, πασιέντσα, λιμπρέτο. Από την ελληνική λέξη πας στη λατινική.",
            "ex": [
              {
                "la": "φουρτούνα → fortuna",
                "el": "η τύχη"
              },
              {
                "la": "μουράγιο → murus",
                "el": "το τείχος"
              },
              {
                "la": "κουλτούρα → colo",
                "el": "καλλιεργώ"
              },
              {
                "la": "πασιέντσα → patientia",
                "el": "η υπομονή"
              }
            ],
            "terms": [
              "Σχήμα Β"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Ποια λατινική ρίζα κρύβεται στο «φουρτούνα»;",
                "options": [
                  "fortuna",
                  "fortis",
                  "furor"
                ],
                "a": "fortuna",
                "why": "fortuna (τύχη) → φουρτούνα."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική ρίζα κρύβεται στο «μουράγιο»;",
                "options": [
                  "murus",
                  "mos",
                  "mora"
                ],
                "a": "murus",
                "why": "murus (τείχος) → μουράγιο."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική ρίζα κρύβεται στο «κουλτούρα»;",
                "options": [
                  "colo",
                  "curo",
                  "curro"
                ],
                "a": "colo",
                "why": "colo (καλλιεργώ) → κουλτούρα."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική ρίζα κρύβεται στο «πασιέντσα»;",
                "options": [
                  "patientia",
                  "pater",
                  "pastor"
                ],
                "a": "patientia",
                "why": "patientia (υπομονή) → πασιέντσα."
              },
              {
                "t": "mcq",
                "q": "Ποια λατινική ρίζα κρύβεται στο «λιμπρέτο»;",
                "options": [
                  "liber",
                  "libido",
                  "lupus"
                ],
                "a": "liber",
                "why": "liber (βιβλίο) → λιμπρέτο."
              }
            ],
            "status": "book",
            "src": "Κατάλογος ΥΠΑΙΘ 2026-27 (ομαδοποίηση δική μας)"
          }
        ]
      },
      {
        "id": "u1l7",
        "title": "Bonus: φράσεις και όροι",
        "items": [
          {
            "id": "u1-r-phrases-intro",
            "kind": "rule",
            "title": "Φράσεις και όροι: μπόνους, όχι εξεταστέα ύλη",
            "say": "Το υπουργείο βάζει τις λατινικές φράσεις στην ύλη της Β΄ Λυκείου και κανένα Β2 του 2022-2026 δεν τις ζήτησε. Είναι μπόνους που σου μένει στο μυαλό.",
            "ex": [
              {
                "la": "carpe diem",
                "el": "άρπαξε τη μέρα (Οράτιος)"
              },
              {
                "la": "veni, vidi, vici",
                "el": "ήρθα, είδα, νίκησα (Καίσαρας, 47 π.Χ.)"
              },
              {
                "la": "O tempora, o mores!",
                "el": "ω των καιρών, ω των ηθών (Κικέρων)"
              },
              {
                "la": "status quo",
                "el": "η κατάσταση όπως είναι"
              }
            ],
            "terms": [
              "φράση",
              "γνωμικό"
            ],
            "quiz": [
              {
                "t": "tf",
                "q": "Στα Β2 των διαγωνισμών 2022-2026 ζητήθηκε η μετάφραση λατινικών φράσεων.",
                "a": false,
                "why": "Ζητήθηκαν ετυμολογικά συγγενείς λέξεις των κειμένων, όχι φράσεις."
              },
              {
                "t": "mcq",
                "q": "Ποιος είπε το «Veni, vidi, vici»;",
                "options": [
                  "ο Ιούλιος Καίσαρας",
                  "ο Κικέρων",
                  "ο Οράτιος"
                ],
                "a": "ο Ιούλιος Καίσαρας",
                "why": "Έτσι αναφέρει τη νίκη του στον Ζήλα το 47 π.Χ."
              },
              {
                "t": "mcq",
                "q": "Τι σημαίνει το «O tempora, o mores!»;",
                "options": [
                  "ω των καιρών, ω των ηθών",
                  "ο χρόνος περνά",
                  "οι καιροί αλλάζουν"
                ],
                "a": "ω των καιρών, ω των ηθών",
                "why": "Κικέρων, Κατά Κατιλίνα Ι: το mos, moris μας έδωσε το ηθικό (moral)."
              },
              {
                "t": "tf",
                "q": "Το «status quo» σημαίνει «η κατάσταση όπως είναι».",
                "a": true,
                "why": "Από το stare → status."
              }
            ],
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-o-carpe",
            "kind": "origin",
            "w": "carpe diem (άρπαξε τη μέρα)",
            "latin": true,
            "from": "Carpe diem, Οράτιος, Ωδές: το διάσημο λατινικό «άρπαξε τη μέρα». Το dies έδωσε diary και journal. Και είναι το όνομα της εφαρμογής σου.",
            "say": "carpe diem = άρπαξε τη μέρα (Οράτιος). Λατινικό, και το motto σου.",
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-o-alea",
            "kind": "origin",
            "w": "alea iacta est (ο κύβος ερρίφθη)",
            "latin": true,
            "from": "Alea iacta est: ο Ιούλιος Καίσαρας, στον Ρουβίκωνα, 49 π.Χ. Ο Πλούταρχος το δίνει ως απόσπασμα του Μενάνδρου στα ελληνικά, ἀνερρίφθω κύβος· η λατινική μορφή είναι του Σουητώνιου. Το iacta ← iacere (ρίχνω). Σήμερα «διασχίζω τον Ρουβίκωνα» = παίρνω απόφαση χωρίς γυρισμό.",
            "say": "alea iacta est: λατινική μορφή του Σουητώνιου· ο Πλούταρχος το δίνει ελληνικά (ἀνερρίφθω κύβος).",
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-o-festina",
            "kind": "origin",
            "w": "σπεύδε βραδέως",
            "latin": false,
            "from": "Ελληνική φράση (σπεῦδε βραδέως). Το festina lente είναι η λατινική μετάφρασή της, μότο του Αυγούστου: η φράση γύρισε πίσω στα ελληνικά.",
            "say": "σπεύδε βραδέως: ελληνική. Το festina lente είναι η μετάφρασή της.",
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-r-ph-history",
            "kind": "rule",
            "title": "Φράσεις Ι: τρεις ιστορικοί, ένας σατιρικός",
            "say": "Veni, vidi, vici (47 π.Χ.), alea iacta est (49 π.Χ.), ab urbe condita (Λίβιος, AUC 1 = 753 π.Χ.), panem et circenses (Ιουβενάλης).",
            "ex": [
              {
                "la": "veni, vidi, vici",
                "el": "ήρθα, είδα, νίκησα (Καίσαρας)"
              },
              {
                "la": "alea iacta est",
                "el": "ο κύβος ερρίφθη (Καίσαρας, Ρουβίκωνας)"
              },
              {
                "la": "ab urbe condita",
                "el": "από τη θεμελίωση της πόλης: τίτλος του έργου του Λίβιου, AUC 1 = 753 π.Χ."
              },
              {
                "la": "panem et circenses",
                "el": "ψωμί και θεάματα (Ιουβενάλης)"
              }
            ],
            "terms": [
              "AUC"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Τι σημαίνει το «ab urbe condita»;",
                "options": [
                  "από τη θεμελίωση της πόλης",
                  "από την πόλη του Καίσαρα",
                  "έξω από την πόλη"
                ],
                "a": "από τη θεμελίωση της πόλης",
                "why": "Ο Λίβιος μετράει τα χρόνια από τη θεμελίωση της Ρώμης (AUC 1 = 753 π.Χ.)."
              },
              {
                "t": "mcq",
                "q": "Ποιος είπε το «alea iacta est» στον Ρουβίκωνα;",
                "options": [
                  "ο Ιούλιος Καίσαρας",
                  "ο Κάτων",
                  "ο Οράτιος"
                ],
                "a": "ο Ιούλιος Καίσαρας",
                "why": "Το 49 π.Χ. πέρασε τον Ρουβίκωνα με τον στρατό."
              },
              {
                "t": "tf",
                "q": "Το «panem et circenses» το γράφει ο Ιουβενάλης.",
                "a": true,
                "why": "Σάτιρα Χ."
              },
              {
                "t": "mcq",
                "q": "Ποιο λατινικό ρήμα κρύβεται στο «vici»;",
                "options": [
                  "vinco",
                  "video",
                  "venio"
                ],
                "a": "vinco",
                "why": "Το vici είναι ο παρακείμενος του vinco: νίκησα."
              }
            ],
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-o-vvv",
            "kind": "origin",
            "w": "veni, vidi, vici (ήρθα, είδα, νίκησα)",
            "latin": true,
            "from": "Veni, vidi, vici: ο Ιούλιος Καίσαρας, 47 π.Χ. Το vici είναι το vinco, ίδια ρίζα με το Βίκτωρ.",
            "say": "veni, vidi, vici = ήρθα, είδα, νίκησα. Λατινικό, του Καίσαρα.",
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-o-panem",
            "kind": "origin",
            "w": "panem et circenses (ψωμί και θεάματα)",
            "latin": true,
            "from": "Panem et circenses: Ιουβενάλης, Σάτιρα Χ. Από εκεί το Panem των Hunger Games.",
            "say": "panem et circenses = ψωμί και θεάματα. Ιουβενάλης, και Hunger Games.",
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-o-deus",
            "kind": "origin",
            "w": "θεός από μηχανής",
            "latin": false,
            "from": "Ελληνική έκφραση (ἀπὸ μηχανῆς θεός) από το θέατρο: ο θεός που κατεβαίνει με τη μηχανή και λύνει το έργο. Το deus ex machina είναι η λατινική μετάφρασή της.",
            "say": "θεός από μηχανής: ελληνική. Το deus ex machina είναι η μετάφρασή της.",
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-r-ph-gerundive",
            "kind": "rule",
            "title": "Φράσεις ΙΙ: τρία γερουνδιακά που ήδη ξέρεις",
            "say": "Carthago delenda est, nil desperandum, quod erat demonstrandum: και τα τρία έχουν γερουνδιακό (-ndus/-ndum), δηλαδή περιφραστική συζυγία.",
            "ex": [
              {
                "la": "Carthago delenda est",
                "el": "η Καρχηδόνα πρέπει να καταστραφεί: γερουνδιακό που συμφωνεί με το Carthago (θηλυκό)"
              },
              {
                "la": "nil desperandum",
                "el": "μην απελπίζεσαι (Οράτιος): ουδέτερο γερουνδιακό"
              },
              {
                "la": "quod erat demonstrandum",
                "el": "όπερ έδει δείξαι: Q.E.D., Ευκλείδης"
              }
            ],
            "terms": [
              "γερουνδιακό",
              "περιφραστική συζυγία"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Τι σημαίνει το «Carthago delenda est»;",
                "options": [
                  "η Καρχηδόνα πρέπει να καταστραφεί",
                  "η Καρχηδόνα καταστράφηκε",
                  "η Καρχηδόνα καταστρέφει"
                ],
                "a": "η Καρχηδόνα πρέπει να καταστραφεί",
                "why": "delenda est = περιφραστική: πρέπει να καταστραφεί."
              },
              {
                "t": "tf",
                "q": "Στο «Q.E.D.» το demonstrandum είναι γερουνδιακό.",
                "a": true,
                "why": "quod erat demonstrandum = αυτό που έπρεπε να αποδειχθεί."
              },
              {
                "t": "mcq",
                "q": "Ποιος είπε το «Carthago delenda est»;",
                "options": [
                  "ο Κάτων",
                  "ο Σκιπίων",
                  "ο Καίσαρας"
                ],
                "a": "ο Κάτων",
                "why": "Κάτων ο Πρεσβύτερος, κατά την παράδοση."
              },
              {
                "t": "tf",
                "q": "Το «nil desperandum» σημαίνει «ποτέ μην απελπίζεσαι».",
                "a": true,
                "why": "Οράτιος· nil = nihil."
              }
            ],
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-o-ars",
            "kind": "origin",
            "w": "ο βίος βραχύς, η δε τέχνη μακρή",
            "latin": false,
            "from": "Ελληνικός αφορισμός του Ιπποκράτη. Το ars longa, vita brevis είναι η λατινική μετάφρασή του.",
            "say": "ο βίος βραχύς, η δε τέχνη μακρή: Ιπποκράτης. Το ars longa είναι μετάφραση.",
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-r-ph-thought",
            "kind": "rule",
            "title": "Φράσεις ΙΙΙ: σκέψη και ηθική",
            "say": "Cogito, ergo sum (Ντεκάρτ), sapere aude (Οράτιος, Καντ), a priori, sine qua non: φράσεις που περνούν τα όρια των λατινικών.",
            "ex": [
              {
                "la": "cogito, ergo sum",
                "el": "σκέφτομαι, άρα υπάρχω (Ντεκάρτ)"
              },
              {
                "la": "sapere aude",
                "el": "τόλμα να σκεφτείς (Οράτιος, μότο του Καντ)"
              },
              {
                "la": "a priori",
                "el": "από το προηγούμενο, πριν από την εμπειρία"
              },
              {
                "la": "sine qua non",
                "el": "άνευ του οποίου ουδέν, η απαραίτητη προϋπόθεση"
              }
            ],
            "terms": [
              "a priori",
              "sine qua non"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Ποιος είπε το «cogito, ergo sum»;",
                "options": [
                  "ο Ντεκάρτ",
                  "ο Κικέρων",
                  "ο Βεργίλιος"
                ],
                "a": "ο Ντεκάρτ",
                "why": "Το cogitare είναι co + agitare."
              },
              {
                "t": "mcq",
                "q": "Τι σημαίνει το «sine qua non»;",
                "options": [
                  "άνευ του οποίου ουδέν",
                  "χωρίς κανένα όνομα",
                  "με όποιον τρόπο"
                ],
                "a": "άνευ του οποίου ουδέν",
                "why": "Η απαραίτητη προϋπόθεση."
              },
              {
                "t": "tf",
                "q": "Το «sapere aude» το έκανε μότο του ο Καντ για τον Διαφωτισμό.",
                "a": true,
                "why": "Οράτιος, Επιστολές, και μετά Καντ."
              },
              {
                "t": "tf",
                "q": "Το «a priori» σημαίνει «μετά από την εμπειρία».",
                "a": false,
                "why": "Αυτό είναι το a posteriori."
              }
            ],
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-r-ph-law",
            "kind": "rule",
            "title": "Φράσεις ΙV: νόμος και ήθος",
            "say": "De facto, mea culpa, o tempora o mores, status quo: τέσσερις φράσεις για κάθε περίσταση.",
            "ex": [
              {
                "la": "de facto",
                "el": "εκ των πραγμάτων· de iure = εκ του νόμου"
              },
              {
                "la": "mea culpa",
                "el": "δικό μου το λάθος"
              },
              {
                "la": "O tempora, o mores!",
                "el": "ω των καιρών, ω των ηθών (Κικέρων)"
              },
              {
                "la": "status quo",
                "el": "η κατάσταση όπως είναι"
              }
            ],
            "terms": [
              "de facto",
              "de iure"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Τι σημαίνει το «de iure»;",
                "options": [
                  "εκ του νόμου",
                  "εκ των πραγμάτων",
                  "εκ του μηδενός"
                ],
                "a": "εκ του νόμου",
                "why": "Αντίθετο του de facto."
              },
              {
                "t": "mcq",
                "q": "Ποιος είπε το «O tempora, o mores!»;",
                "options": [
                  "ο Κικέρων",
                  "ο Λίβιος",
                  "ο Καίσαρας"
                ],
                "a": "ο Κικέρων",
                "why": "Κατά Κατιλίνα Ι. Το mos, moris μας έδωσε το ηθικό (moral)."
              },
              {
                "t": "tf",
                "q": "Το «mea culpa» σημαίνει «δικό μου το λάθος».",
                "a": true,
                "why": "Meus = μου, culpa = λάθος."
              },
              {
                "t": "tf",
                "q": "Το status quo προέρχεται από το stare.",
                "a": true,
                "why": "stare → status: η κατάσταση."
              }
            ],
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          },
          {
            "id": "u1-r-grammar-terms",
            "kind": "rule",
            "title": "Οι γραμματικοί όροι είναι μεταφράσεις των ελληνικών",
            "say": "Οι Ρωμαίοι μετέφρασαν τους όρους της ελληνικής γραμματικής: casus = πτῶσις, dativus = δοτική, participium = μετοχή, coniugatio = συζυγία.",
            "ex": [
              {
                "la": "casus ← cadere (πέφτω)",
                "el": "μετάφραση του πτῶσις: όλες οι πτώσεις «έπεσαν» από την ονομαστική"
              },
              {
                "la": "dativus ← do, dare",
                "el": "μετάφραση του δοτική"
              },
              {
                "la": "participium ← pars + capere",
                "el": "«παίρνει μέρος» στο ρήμα και στο όνομα: μετοχή"
              },
              {
                "la": "coniugatio ← con + iugum",
                "el": "«ζεύω μαζί»: συζυγία, και ζυγός, ζεύγος"
              }
            ],
            "terms": [
              "πτώση",
              "δοτική",
              "μετοχή",
              "συζυγία"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Ποιον ελληνικό όρο μεταφράζει το participium;",
                "options": [
                  "μετοχή",
                  "μετάθεση",
                  "μετάφραση"
                ],
                "a": "μετοχή",
                "why": "participium = pars + capere: «παίρνει μέρος»."
              },
              {
                "t": "mcq",
                "q": "Από ποιο λατινικό ρήμα βγαίνει το dativus;",
                "options": [
                  "do, dare",
                  "dico, dicere",
                  "duco, ducere"
                ],
                "a": "do, dare",
                "why": "Δίνω → δοτική."
              },
              {
                "t": "tf",
                "q": "Το casus προέρχεται από το cado, «πέφτω».",
                "a": true,
                "why": "Η πτώση είναι αυτό που «πέφτει» από την ονομαστική."
              },
              {
                "t": "tf",
                "q": "Το coniugatio έχει την ίδια ρίζα με το ελληνικό ζυγός.",
                "a": true,
                "why": "iugum ~ ζυγός, con-iugatio = «ζεύω μαζί»."
              }
            ],
            "status": "general",
            "src": "derivatives.md §5C (en.wiktionary)"
          },
          {
            "id": "u1-r-accusativus",
            "kind": "rule",
            "title": "Η παγίδα του accusativus: ένα λάθος της μετάφρασης",
            "say": "Το αἰτιατική σημαίνει «του αποτελέσματος». Οι Ρωμαίοι το έκαναν accusativus, από το accusare (κατηγορώ). Λάθος μετάφραση, και έτσι έμεινε.",
            "ex": [
              {
                "la": "αἰτιατική",
                "el": "από το αἴτιον: αυτό που προκαλείται από την πράξη του ρήματος"
              },
              {
                "la": "accusativus",
                "el": "ο Λατίνος το διάβασε σαν accusare, «κατηγορώ»"
              },
              {
                "la": "accusare",
                "el": "ρήμα που δεν έχει σχέση με την ελληνική λέξη"
              }
            ],
            "terms": [
              "αιτιατική",
              "accusativus"
            ],
            "quiz": [
              {
                "t": "tf",
                "q": "Το accusativus είναι ακριβής μετάφραση του ελληνικού αἰτιατική.",
                "a": false,
                "why": "Λάθος μετάφραση: αἰτιατική είναι του αποτελέσματος, όχι αυτή που κατηγορεί."
              },
              {
                "t": "mcq",
                "q": "Από ποιο λατινικό ρήμα ξεκίνησε το λάθος;",
                "options": [
                  "accusare",
                  "ago",
                  "causare"
                ],
                "a": "accusare",
                "why": "Το accusare σημαίνει «κατηγορώ»."
              },
              {
                "t": "tf",
                "q": "Στη γραμματική σου το accusativus λέγεται αιτιατική.",
                "a": true,
                "why": "Έτσι μένει ο ελληνικός όρος, παρά το λάθος της μετάφρασης."
              }
            ],
            "status": "general",
            "src": "derivatives.md §5C (en.wiktionary)"
          },
          {
            "id": "u1-r-ph-everyday",
            "kind": "rule",
            "title": "Φράσεις V: οι αγαπημένες",
            "say": "Cave canem, fiat lux, quo vadis, in vino veritas: τις έχεις δει σε ψηφιδωτά, βιβλία και ταινίες.",
            "ex": [
              {
                "la": "cave canem",
                "el": "πρόσεχε το σκύλο (Πομπηία)"
              },
              {
                "la": "fiat lux",
                "el": "ας γίνει φως (Γένεση, Βουλγάτα)"
              },
              {
                "la": "quo vadis",
                "el": "πού πας; (Ιωάν. 13:36)"
              },
              {
                "la": "in vino veritas",
                "el": "εν οίνω αλήθεια: έχει και ελληνικό αντίστοιχο"
              }
            ],
            "terms": [
              "Βουλγάτα"
            ],
            "quiz": [
              {
                "t": "mcq",
                "q": "Πού βρέθηκε το «cave canem»;",
                "options": [
                  "σε ψηφιδωτό στην Πομπηία",
                  "στο Κολοσσαίο",
                  "στον Παρθενώνα"
                ],
                "a": "σε ψηφιδωτό στην Πομπηία",
                "why": "Μια επιγραφή σε σπίτι της Πομπηίας."
              },
              {
                "t": "mcq",
                "q": "Τι σημαίνει το «fiat lux»;",
                "options": [
                  "ας γίνει φως",
                  "το φως χάθηκε",
                  "φως και σκιά"
                ],
                "a": "ας γίνει φως",
                "why": "Γένεση, Βουλγάτα."
              },
              {
                "t": "tf",
                "q": "Το «per aspera ad astra» έχει βέβαιη προέλευση από έναν συγκεκριμένο συγγραφέα.",
                "a": false,
                "why": "Η προέλευση είναι αβέβαιη· ο Σενέκας έχει κάτι παρόμοιο."
              },
              {
                "t": "tf",
                "q": "Το «e pluribus unum» είναι το μότο στο αμερικανικό δολάριο.",
                "a": true,
                "why": "«Από πολλούς, ένας»."
              }
            ],
            "status": "general",
            "src": "derivatives.md (Wikipedia, Wiktionary)"
          }
        ]
      }
    ]
  };
  if (typeof CARPE_UNITS !== "undefined") CARPE_UNITS.push(unit);
  if (typeof module !== "undefined") module.exports = unit;
})();
