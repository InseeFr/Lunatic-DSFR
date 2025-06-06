import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "id": "lucjbqrp",
    "componentType": "Questionnaire",
    "modele": "RESPDESIGN",
    "enoCoreVersion": "3.20.1-SNAPSHOT",
    "lunaticModelVersion": "3.7.0-SNAPSHOT",
    "generatingDate": "29-04-2024 11:49:35",
    "pagination": "question",
    "maxPage": "41",
    "label": { "value": "QNONREG - Questionnaire tous composants sans boucle", "type": "VTL|MD" },
    "components": [
        {
            "id": "jfaz9kv9",
            "componentType": "Sequence",
            "page": "1",
            "label": {
                "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "jfazqgv2",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Ceci est une déclaration de type aide CAWI, associée au titre du module. "',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls01a3ng",
                    "declarationType": "INSTRUCTION",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Ceci est une déclaration de type consigne CAWI, associée au titre du module. "',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "jfaz9kv9",
                    "page": "1",
                    "label": {
                        "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "jfazsitt",
            "componentType": "Subsequence",
            "page": "2",
            "goToPage": "2",
            "label": { "value": '"Questions de type Texte"', "type": "VTL|MD" },
            "declarations": [
                {
                    "id": "lo5f3bf8",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": { "value": '"Aide de sous-séquence"', "type": "VTL|MD" },
                },
                {
                    "id": "ls029krl",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": { "value": '"Consigne de sous-séquence"', "type": "VTL|MD" },
                },
            ],
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "jfaz9kv9",
                    "page": "1",
                    "label": {
                        "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "jfazsitt",
                    "page": "2",
                    "label": { "value": '"Questions de type Texte"', "type": "VTL|MD" },
                },
            },
        },
        {
            "id": "question-jfazww20",
            "componentType": "Question",
            "page": "3",
            "label": {
                "value":
                    '"Je suis le libellé de la question de type texte de longueur inférieure à 250 caractères"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "ls02cmm2-SI",
                    "declarationType": "HELP",
                    "position": "BEFORE_QUESTION_TEXT",
                    "label": { "value": '"Aide avant Input"', "type": "VTL|MD" },
                },
                {
                    "id": "ls023hii-SI",
                    "declarationType": "HELP",
                    "position": "BEFORE_QUESTION_TEXT",
                    "label": { "value": '"Consigne avant Input"', "type": "VTL|MD" },
                },
                {
                    "id": "k6gbafch",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": { "value": '"Aide de question Input"', "type": "VTL|MD" },
                },
                {
                    "id": "ls01yd67",
                    "declarationType": "INSTRUCTION",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": { "value": '"Consigne de Input"', "type": "VTL|MD" },
                },
            ],
            "components": [
                {
                    "id": "jfazww20",
                    "componentType": "Input",
                    "mandatory": false,
                    "page": "3",
                    "maxLength": 5,
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfaz9kv9",
                            "page": "1",
                            "label": {
                                "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfazsitt",
                            "page": "2",
                            "label": { "value": '"Questions de type Texte"', "type": "VTL|MD" },
                        },
                    },
                    "response": { "name": "TEXTECOURT" },
                },
            ],
        },
        {
            "id": "question-jfazwjyv",
            "componentType": "Question",
            "page": "4",
            "label": {
                "value":
                    '"Je suis le libellé de la question de type texte de longueur supérieure à 250 caractères. et C\'est un libellé qui est aussi très long car sait-on jamais..."',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "k6c6cjxu",
                    "declarationType": "INSTRUCTION",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Le champ de la réponse de type texte long est modifiable à la souris"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "components": [
                {
                    "id": "jfazwjyv",
                    "componentType": "Textarea",
                    "mandatory": false,
                    "page": "4",
                    "maxLength": 500,
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfaz9kv9",
                            "page": "1",
                            "label": {
                                "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfazsitt",
                            "page": "2",
                            "label": { "value": '"Questions de type Texte"', "type": "VTL|MD" },
                        },
                    },
                    "response": { "name": "TEXTELONG" },
                },
            ],
        },
        {
            "id": "jfjhggkx",
            "componentType": "Subsequence",
            "goToPage": "5",
            "label": { "value": '"Numériques"', "type": "VTL|MD" },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "jfaz9kv9",
                    "page": "1",
                    "label": {
                        "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "jfjhggkx",
                    "page": "5",
                    "label": { "value": '"Numériques"', "type": "VTL|MD" },
                },
            },
        },
        {
            "id": "question-jfjh1ndk",
            "componentType": "Question",
            "page": "5",
            "label": {
                "value": '"Numérique entier sans unité - grand (max= 999999999)"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "l8ua25i0",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"Variable utilisée dans le tableau question 22"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "components": [
                {
                    "id": "jfjh1ndk",
                    "componentType": "InputNumber",
                    "mandatory": false,
                    "page": "5",
                    "min": 0.0,
                    "max": 9.99999999e8,
                    "decimals": 0,
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "jfjh1ndk-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(INTEGER)) and (0>INTEGER or 999999999<INTEGER))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999999999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfjh1ndk-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value": "not(not(isnull(INTEGER))  and round(INTEGER,0)<>INTEGER)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfaz9kv9",
                            "page": "1",
                            "label": {
                                "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfjhggkx",
                            "page": "5",
                            "label": { "value": '"Numériques"', "type": "VTL|MD" },
                        },
                    },
                    "response": { "name": "INTEGER" },
                },
            ],
        },
        {
            "id": "question-jfjhb2pz",
            "componentType": "Question",
            "page": "6",
            "label": {
                "value": '"Numérique décimal sans unité (entre 0 et 1000.00)"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "l8iohgoa",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Controle par rapport à question 3 dont la valeur est :" || cast(INTEGER,string) ',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "l8u98od1",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Test :  saisir un nombre plus grand que celui de la question 3 et vérifier affichage du controle"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "components": [
                {
                    "id": "jfjhb2pz",
                    "componentType": "InputNumber",
                    "mandatory": false,
                    "page": "6",
                    "min": 0.0,
                    "max": 1000.0,
                    "decimals": 2,
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "jfjhb2pz-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value": "not(not(isnull(FLOAT)) and (0.00>FLOAT or 1000.00<FLOAT))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0.00 et 1000.00."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfjhb2pz-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value": "not(not(isnull(FLOAT))  and round(FLOAT,2)<>FLOAT)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 2 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfjhb2pz-CI-0",
                            "typeOfControl": "CONSISTENCY",
                            "criticality": "INFO",
                            "control": {
                                "value":
                                    "not(INTEGER < FLOAT and not(isnull(INTEGER)) and not(isnull(FLOAT)))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Message un peu long pour tester la modale sur smartphone. Vous devez saisir un nombre plus grand que pour la question 3 :" || cast(INTEGER,string) || " est plus petit que " || cast(FLOAT,string) ',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfaz9kv9",
                            "page": "1",
                            "label": {
                                "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfjhggkx",
                            "page": "5",
                            "label": { "value": '"Numériques"', "type": "VTL|MD" },
                        },
                    },
                    "response": { "name": "FLOAT" },
                },
            ],
        },
        {
            "id": "question-jfjtbqh1",
            "componentType": "Question",
            "page": "7",
            "label": {
                "value":
                    "\"Numérique max 9999 avec[ unité](. 'l’unité choisie ici est le kilo euro mais je peux tester une infobulle un peu longue pour regarder') et infobulle sur le mot unité de cette question\"",
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "jfjtbqh1",
                    "componentType": "InputNumber",
                    "mandatory": false,
                    "page": "7",
                    "min": 0.0,
                    "max": 9999.0,
                    "decimals": 0,
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "jfjtbqh1-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value": "not(not(isnull(UNIT)) and (0>UNIT or 9999<UNIT))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 9999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfjtbqh1-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value": "not(not(isnull(UNIT))  and round(UNIT,0)<>UNIT)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfaz9kv9",
                            "page": "1",
                            "label": {
                                "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfjhggkx",
                            "page": "5",
                            "label": { "value": '"Numériques"', "type": "VTL|MD" },
                        },
                    },
                    "unit": "k€",
                    "response": { "name": "UNIT" },
                },
            ],
        },
        {
            "id": "jfjeuskc",
            "componentType": "Subsequence",
            "page": "8",
            "goToPage": "8",
            "label": { "value": '"Autres formats de réponse"', "type": "VTL|MD" },
            "declarations": [
                {
                    "id": "k6c6agsi",
                    "declarationType": "INSTRUCTION",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Ce sous module comprend des questions de type : &#xd;- date&#xd;- durée&#xd;- booléen"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "jfaz9kv9",
                    "page": "1",
                    "label": {
                        "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "jfjeuskc",
                    "page": "8",
                    "label": { "value": '"Autres formats de réponse"', "type": "VTL|MD" },
                },
            },
        },
        {
            "id": "question-jfjfckyw",
            "componentType": "Question",
            "page": "9",
            "label": { "value": '"Date jour"', "type": "VTL|MD" },
            "components": [
                {
                    "id": "jfjfckyw",
                    "componentType": "Datepicker",
                    "mandatory": false,
                    "page": "9",
                    "min": "2000-01-01",
                    "max": "2020-03-31",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "jfjfckyw-format-date-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    'not(not(isnull(DATE)) and (cast(DATE, date, "YYYY-MM-DD")<cast("2000-01-01", date, "YYYY-MM-DD") or cast(DATE, date, "YYYY-MM-DD")>cast("2020-03-31", date, "YYYY-MM-DD")))',
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"La date saisie doit être comprise entre 2000-01-01 et 2020-03-31."',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfaz9kv9",
                            "page": "1",
                            "label": {
                                "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfjeuskc",
                            "page": "8",
                            "label": { "value": '"Autres formats de réponse"', "type": "VTL|MD" },
                        },
                    },
                    "dateFormat": "YYYY-MM-DD",
                    "response": { "name": "DATE" },
                },
            ],
        },
        {
            "id": "question-lraxn9ko",
            "componentType": "Question",
            "page": "10",
            "label": { "value": '"Date année mois"', "type": "VTL|MD" },
            "components": [
                {
                    "id": "lraxn9ko",
                    "componentType": "Datepicker",
                    "mandatory": false,
                    "page": "10",
                    "min": "2000-01",
                    "max": "2020-03",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "lraxn9ko-format-date-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    'not(not(isnull(DATEAM)) and (cast(DATEAM, date, "YYYY-MM")<cast("2000-01", date, "YYYY-MM") or cast(DATEAM, date, "YYYY-MM")>cast("2020-03", date, "YYYY-MM")))',
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '"La date saisie doit être comprise entre 2000-01 et 2020-03."',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfaz9kv9",
                            "page": "1",
                            "label": {
                                "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfjeuskc",
                            "page": "8",
                            "label": { "value": '"Autres formats de réponse"', "type": "VTL|MD" },
                        },
                    },
                    "dateFormat": "YYYY-MM",
                    "response": { "name": "DATEAM" },
                },
            ],
        },
        {
            "id": "question-lraxo40q",
            "componentType": "Question",
            "page": "11",
            "label": { "value": '"Date format année"', "type": "VTL|MD" },
            "components": [
                {
                    "id": "lraxo40q",
                    "componentType": "Datepicker",
                    "mandatory": false,
                    "page": "11",
                    "min": "2000",
                    "max": "2020",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "lraxo40q-format-date-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    'not(not(isnull(DATEA)) and (cast(DATEA, date, "YYYY")<cast("2000", date, "YYYY") or cast(DATEA, date, "YYYY")>cast("2020", date, "YYYY")))',
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '"La date saisie doit être comprise entre 2000 et 2020."',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfaz9kv9",
                            "page": "1",
                            "label": {
                                "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfjeuskc",
                            "page": "8",
                            "label": { "value": '"Autres formats de réponse"', "type": "VTL|MD" },
                        },
                    },
                    "dateFormat": "YYYY",
                    "response": { "name": "DATEA" },
                },
            ],
        },
        {
            "id": "question-jfjeud07",
            "componentType": "Question",
            "page": "12",
            "label": { "value": '"Booléen (bientôt révolu"', "type": "VTL|MD" },
            "components": [
                {
                    "id": "jfjeud07",
                    "componentType": "CheckboxBoolean",
                    "mandatory": false,
                    "page": "12",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfaz9kv9",
                            "page": "1",
                            "label": {
                                "value": '"I - " || "Questions ouvertes - Titre de la séquence"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfjeuskc",
                            "page": "8",
                            "label": { "value": '"Autres formats de réponse"', "type": "VTL|MD" },
                        },
                    },
                    "response": { "name": "BOOLEEN" },
                },
            ],
        },
        {
            "id": "jfjew4oy",
            "componentType": "Sequence",
            "page": "13",
            "label": {
                "value": '"II - " || "Questions à choix unique et questions à choix multiple"',
                "type": "VTL|MD",
            },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "jfjew4oy",
                    "page": "13",
                    "label": {
                        "value": '"II - " || "Questions à choix unique et questions à choix multiple"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "jfkxouu8",
            "componentType": "Subsequence",
            "goToPage": "14",
            "label": { "value": '"Questions à choix unique"', "type": "VTL|MD" },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "jfjew4oy",
                    "page": "13",
                    "label": {
                        "value": '"II - " || "Questions à choix unique et questions à choix multiple"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "jfkxouu8",
                    "page": "14",
                    "label": { "value": '"Questions à choix unique"', "type": "VTL|MD" },
                },
            },
        },
        {
            "id": "question-jfjepz6i",
            "componentType": "Question",
            "page": "14",
            "label": {
                "value": '"Question à choix unique / présentation bouton radio"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "jfjepz6i",
                    "componentType": "Radio",
                    "mandatory": false,
                    "page": "14",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfjew4oy",
                            "page": "13",
                            "label": {
                                "value":
                                    '"II - " || "Questions à choix unique et questions à choix multiple"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfkxouu8",
                            "page": "14",
                            "label": { "value": '"Questions à choix unique"', "type": "VTL|MD" },
                        },
                    },
                    "options": [
                        {
                            "value": "1",
                            "label": {
                                "value": '"code1 : le libellé du code 1 contient **du gras** "',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "value": "2",
                            "label": {
                                "value": '"code2 le libellé du code 2 contient *de l\'italique* "',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "value": "3",
                            "label": {
                                "value":
                                    '"code3 : le libellé du code 3 contient **du gras** et *de l\'italique*"',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "value": "4",
                            "label": {
                                "value":
                                    '"code4 : le libellé du code 4 contient du ***gras italique***"',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "value": "5",
                            "label": {
                                "value":
                                    '"code5 : le libellé du code 5 contient des retours à la ligne \n\nligne 2\n\nligne 3"',
                                "type": "VTL|MD",
                            },
                        },
                        { "value": "6", "label": { "value": '"code6"', "type": "VTL|MD" } },
                        {
                            "value": "7",
                            "label": {
                                "value":
                                    "\"[code7](. 'My name is Bond, James Bond') le code 7 porte une infobulle\"",
                                "type": "VTL|MD",
                            },
                        },
                        { "value": "8", "label": { "value": '"code8"', "type": "VTL|MD" } },
                    ],
                    "response": { "name": "RADIO" },
                },
            ],
        },
        {
            "id": "question-k6gik8v5",
            "componentType": "Question",
            "page": "15",
            "label": {
                "value": '"Question à choix unique - présentation case à cocher décochable"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "k6gik8v5",
                    "componentType": "CheckboxOne",
                    "mandatory": false,
                    "page": "15",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfjew4oy",
                            "page": "13",
                            "label": {
                                "value":
                                    '"II - " || "Questions à choix unique et questions à choix multiple"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfkxouu8",
                            "page": "14",
                            "label": { "value": '"Questions à choix unique"', "type": "VTL|MD" },
                        },
                    },
                    "options": [
                        {
                            "value": "1",
                            "label": {
                                "value": '"code1 : le libellé du code 1 contient **du gras** "',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "value": "2",
                            "label": {
                                "value": '"code2 le libellé du code 2 contient *de l\'italique* "',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "value": "3",
                            "label": {
                                "value":
                                    '"code3 : le libellé du code 3 contient **du gras** et *de l\'italique*"',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "value": "4",
                            "label": {
                                "value":
                                    '"code4 : le libellé du code 4 contient du ***gras italique***"',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "value": "5",
                            "label": {
                                "value":
                                    '"code5 : le libellé du code 5 contient des retours à la ligne \n\nligne 2\n\nligne 3"',
                                "type": "VTL|MD",
                            },
                        },
                        { "value": "6", "label": { "value": '"code6"', "type": "VTL|MD" } },
                        {
                            "value": "7",
                            "label": {
                                "value":
                                    "\"[code7](. 'My name is Bond, James Bond') le code 7 porte une infobulle\"",
                                "type": "VTL|MD",
                            },
                        },
                        { "value": "8", "label": { "value": '"code8"', "type": "VTL|MD" } },
                    ],
                    "response": { "name": "CHECKBOX" },
                },
            ],
        },
        {
            "id": "question-k6cc6f8r",
            "componentType": "Question",
            "page": "16",
            "label": {
                "value":
                    '"Question à choix unique - présentation images - non fonctionnel Lunatic (Symboles en attendant) - besoin Conjoncture"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "k6cc6f8r",
                    "componentType": "CheckboxOne",
                    "mandatory": false,
                    "page": "16",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfjew4oy",
                            "page": "13",
                            "label": {
                                "value":
                                    '"II - " || "Questions à choix unique et questions à choix multiple"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfkxouu8",
                            "page": "14",
                            "label": { "value": '"Questions à choix unique"', "type": "VTL|MD" },
                        },
                    },
                    "options": [
                        { "value": "1", "label": { "value": '"soleil"', "type": "VTL|MD" } },
                        { "value": "2", "label": { "value": '"&#x2798;"', "type": "VTL|MD" } },
                        { "value": "3", "label": { "value": '"&#x279E;"', "type": "VTL|MD" } },
                        { "value": "4", "label": { "value": '"orage"', "type": "VTL|MD" } },
                    ],
                    "response": { "name": "IMAGE" },
                },
            ],
        },
        {
            "id": "question-jfjfae9f",
            "componentType": "Question",
            "page": "17",
            "label": {
                "value": '"Question à choix unique - présentation liste déroulante"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "jfjfae9f",
                    "componentType": "Dropdown",
                    "mandatory": false,
                    "page": "17",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfjew4oy",
                            "page": "13",
                            "label": {
                                "value":
                                    '"II - " || "Questions à choix unique et questions à choix multiple"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfkxouu8",
                            "page": "14",
                            "label": { "value": '"Questions à choix unique"', "type": "VTL|MD" },
                        },
                    },
                    "options": [
                        { "value": "01", "label": { "value": '"Ain"', "type": "VTL|MD" } },
                        { "value": "02", "label": { "value": '"Aisne"', "type": "VTL|MD" } },
                        { "value": "03", "label": { "value": '"Allier"', "type": "VTL|MD" } },
                        {
                            "value": "04",
                            "label": { "value": '"Alpes-de-Haute-Provence"', "type": "VTL|MD" },
                        },
                        { "value": "05", "label": { "value": '"Hautes-Alpes"', "type": "VTL|MD" } },
                        { "value": "06", "label": { "value": '"Alpes-Maritimes"', "type": "VTL|MD" } },
                        { "value": "07", "label": { "value": '"Ardèche"', "type": "VTL|MD" } },
                        { "value": "08", "label": { "value": '"Ardennes"', "type": "VTL|MD" } },
                        { "value": "09", "label": { "value": '"Ariège"', "type": "VTL|MD" } },
                        { "value": "10", "label": { "value": '"Aube"', "type": "VTL|MD" } },
                        { "value": "11", "label": { "value": '"Aude"', "type": "VTL|MD" } },
                        { "value": "12", "label": { "value": '"Aveyron"', "type": "VTL|MD" } },
                        { "value": "13", "label": { "value": '"Bouches-du-Rhône"', "type": "VTL|MD" } },
                        { "value": "14", "label": { "value": '"Calvados"', "type": "VTL|MD" } },
                        { "value": "15", "label": { "value": '"Cantal"', "type": "VTL|MD" } },
                        { "value": "16", "label": { "value": '"Charente"', "type": "VTL|MD" } },
                        { "value": "17", "label": { "value": '"Charente-Maritime"', "type": "VTL|MD" } },
                        { "value": "18", "label": { "value": '"Cher"', "type": "VTL|MD" } },
                        { "value": "19", "label": { "value": '"Corrèze"', "type": "VTL|MD" } },
                        { "value": "2A", "label": { "value": '"Corse-du-Sud"', "type": "VTL|MD" } },
                        { "value": "2B", "label": { "value": '"Haute-Corse"', "type": "VTL|MD" } },
                        { "value": "21", "label": { "value": '"Côte-d\'Or"', "type": "VTL|MD" } },
                        { "value": "22", "label": { "value": '"Côtes d\'Armor"', "type": "VTL|MD" } },
                        { "value": "23", "label": { "value": '"Creuse"', "type": "VTL|MD" } },
                        { "value": "24", "label": { "value": '"Dordogne"', "type": "VTL|MD" } },
                        { "value": "25", "label": { "value": '"Doubs"', "type": "VTL|MD" } },
                        { "value": "26", "label": { "value": '"Drôme"', "type": "VTL|MD" } },
                        { "value": "27", "label": { "value": '"Eure"', "type": "VTL|MD" } },
                        { "value": "28", "label": { "value": '"Eure-et-Loir"', "type": "VTL|MD" } },
                        { "value": "29", "label": { "value": '"Finistère"', "type": "VTL|MD" } },
                        { "value": "30", "label": { "value": '"Gard"', "type": "VTL|MD" } },
                        { "value": "31", "label": { "value": '"Haute-Garonne"', "type": "VTL|MD" } },
                        { "value": "32", "label": { "value": '"Gers"', "type": "VTL|MD" } },
                        { "value": "33", "label": { "value": '"Gironde"', "type": "VTL|MD" } },
                        { "value": "34", "label": { "value": '"Hérault"', "type": "VTL|MD" } },
                        { "value": "35", "label": { "value": '"Ille-et-Vilaine"', "type": "VTL|MD" } },
                        { "value": "36", "label": { "value": '"Indre"', "type": "VTL|MD" } },
                        { "value": "37", "label": { "value": '"Indre-et-Loire"', "type": "VTL|MD" } },
                        { "value": "38", "label": { "value": '"Isère"', "type": "VTL|MD" } },
                        { "value": "39", "label": { "value": '"Jura"', "type": "VTL|MD" } },
                        { "value": "40", "label": { "value": '"Landes"', "type": "VTL|MD" } },
                        { "value": "41", "label": { "value": '"Loir-et-Cher"', "type": "VTL|MD" } },
                        { "value": "42", "label": { "value": '"Loire"', "type": "VTL|MD" } },
                        { "value": "43", "label": { "value": '"Haute-Loire"', "type": "VTL|MD" } },
                        { "value": "44", "label": { "value": '"Loire-Atlantique"', "type": "VTL|MD" } },
                        { "value": "45", "label": { "value": '"Loiret"', "type": "VTL|MD" } },
                        { "value": "46", "label": { "value": '"Lot"', "type": "VTL|MD" } },
                        { "value": "47", "label": { "value": '"Lot-et-Garonne"', "type": "VTL|MD" } },
                        { "value": "48", "label": { "value": '"Lozère"', "type": "VTL|MD" } },
                        { "value": "49", "label": { "value": '"Maine-et-Loire"', "type": "VTL|MD" } },
                        { "value": "50", "label": { "value": '"Manche"', "type": "VTL|MD" } },
                        { "value": "51", "label": { "value": '"Marne"', "type": "VTL|MD" } },
                        { "value": "52", "label": { "value": '"Haute-Marne"', "type": "VTL|MD" } },
                        { "value": "53", "label": { "value": '"Mayenne"', "type": "VTL|MD" } },
                        {
                            "value": "54",
                            "label": { "value": '"Meurthe-et-Moselle"', "type": "VTL|MD" },
                        },
                        { "value": "55", "label": { "value": '"Meuse"', "type": "VTL|MD" } },
                        { "value": "56", "label": { "value": '"Morbihan"', "type": "VTL|MD" } },
                        { "value": "57", "label": { "value": '"Moselle"', "type": "VTL|MD" } },
                        { "value": "58", "label": { "value": '"Nièvre"', "type": "VTL|MD" } },
                        { "value": "59", "label": { "value": '"Nord"', "type": "VTL|MD" } },
                        { "value": "60", "label": { "value": '"Oise"', "type": "VTL|MD" } },
                        { "value": "61", "label": { "value": '"Orne"', "type": "VTL|MD" } },
                        { "value": "62", "label": { "value": '"Pas-de-Calais"', "type": "VTL|MD" } },
                        { "value": "63", "label": { "value": '"Puy-de-Dôme"', "type": "VTL|MD" } },
                        {
                            "value": "64",
                            "label": { "value": '"Pyrénées-Atlantiques"', "type": "VTL|MD" },
                        },
                        { "value": "65", "label": { "value": '"Hautes-Pyrénées"', "type": "VTL|MD" } },
                        {
                            "value": "66",
                            "label": { "value": '"Pyrénées-Orientales"', "type": "VTL|MD" },
                        },
                        { "value": "67", "label": { "value": '"Bas-Rhin"', "type": "VTL|MD" } },
                        { "value": "68", "label": { "value": '"Haut-Rhin"', "type": "VTL|MD" } },
                        { "value": "69", "label": { "value": '"Rhône"', "type": "VTL|MD" } },
                        { "value": "70", "label": { "value": '"Haute-Saône"', "type": "VTL|MD" } },
                        { "value": "71", "label": { "value": '"Saône-et-Loire"', "type": "VTL|MD" } },
                        { "value": "72", "label": { "value": '"Sarthe"', "type": "VTL|MD" } },
                        { "value": "73", "label": { "value": '"Savoie"', "type": "VTL|MD" } },
                        { "value": "74", "label": { "value": '"Haute-Savoie"', "type": "VTL|MD" } },
                        { "value": "75", "label": { "value": '"Paris"', "type": "VTL|MD" } },
                        { "value": "76", "label": { "value": '"Seine-Maritime"', "type": "VTL|MD" } },
                        { "value": "77", "label": { "value": '"Seine-et-Marne"', "type": "VTL|MD" } },
                        { "value": "78", "label": { "value": '"Yvelines"', "type": "VTL|MD" } },
                        { "value": "79", "label": { "value": '"Deux-Sèvres"', "type": "VTL|MD" } },
                        { "value": "80", "label": { "value": '"Somme"', "type": "VTL|MD" } },
                        { "value": "81", "label": { "value": '"Tarn"', "type": "VTL|MD" } },
                        { "value": "82", "label": { "value": '"Tarn-et-Garonne"', "type": "VTL|MD" } },
                        { "value": "83", "label": { "value": '"Var"', "type": "VTL|MD" } },
                        { "value": "84", "label": { "value": '"Vaucluse"', "type": "VTL|MD" } },
                        { "value": "85", "label": { "value": '"Vandée"', "type": "VTL|MD" } },
                        { "value": "86", "label": { "value": '"Vienne"', "type": "VTL|MD" } },
                        { "value": "87", "label": { "value": '"Haute-Vienne"', "type": "VTL|MD" } },
                        { "value": "88", "label": { "value": '"Vosges"', "type": "VTL|MD" } },
                        { "value": "89", "label": { "value": '"Yonne"', "type": "VTL|MD" } },
                        {
                            "value": "90",
                            "label": { "value": '"Territoire de Belfort"', "type": "VTL|MD" },
                        },
                        { "value": "91", "label": { "value": '"Essonne"', "type": "VTL|MD" } },
                        { "value": "92", "label": { "value": '"Hauts-de-Seine"', "type": "VTL|MD" } },
                        { "value": "93", "label": { "value": '"Seine-St-Denis"', "type": "VTL|MD" } },
                        { "value": "94", "label": { "value": '"Val-de-Marne"', "type": "VTL|MD" } },
                        { "value": "95", "label": { "value": '"Val-D\'Oise"', "type": "VTL|MD" } },
                        { "value": "971", "label": { "value": '"Guadeloupe"', "type": "VTL|MD" } },
                        { "value": "972", "label": { "value": '"Martinique"', "type": "VTL|MD" } },
                        { "value": "973", "label": { "value": '"Guyane"', "type": "VTL|MD" } },
                        { "value": "974", "label": { "value": '"La Réunion"', "type": "VTL|MD" } },
                        { "value": "976", "label": { "value": '"Mayotte"', "type": "VTL|MD" } },
                    ],
                    "response": { "name": "DROPDOWN" },
                },
            ],
        },
        {
            "id": "question-ljobiblh",
            "componentType": "Question",
            "page": "18",
            "label": { "value": '"Suggester pays"', "type": "VTL|MD" },
            "components": [
                {
                    "id": "ljobiblh",
                    "componentType": "Suggester",
                    "mandatory": false,
                    "page": "18",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfjew4oy",
                            "page": "13",
                            "label": {
                                "value":
                                    '"II - " || "Questions à choix unique et questions à choix multiple"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfkxouu8",
                            "page": "14",
                            "label": { "value": '"Questions à choix unique"', "type": "VTL|MD" },
                        },
                    },
                    "storeName": "L_PAYS-1-2-0",
                    "response": { "name": "SUGGGEO" },
                },
            ],
        },
        {
            "id": "question-k6ccoydl",
            "componentType": "Question",
            "page": "19",
            "label": { "value": '"Suggester PCS"', "type": "VTL|MD" },
            "components": [
                {
                    "id": "k6ccoydl",
                    "componentType": "Suggester",
                    "mandatory": false,
                    "page": "19",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfjew4oy",
                            "page": "13",
                            "label": {
                                "value":
                                    '"II - " || "Questions à choix unique et questions à choix multiple"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfkxouu8",
                            "page": "14",
                            "label": { "value": '"Questions à choix unique"', "type": "VTL|MD" },
                        },
                    },
                    "storeName": "L_PCS_HOMMES-2-1-0",
                    "response": { "name": "SUGGPCS" },
                },
            ],
        },
        {
            "id": "jfkxuinz",
            "componentType": "Subsequence",
            "goToPage": "20",
            "label": { "value": '"Questions à choix multiple"', "type": "VTL|MD" },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "jfjew4oy",
                    "page": "13",
                    "label": {
                        "value": '"II - " || "Questions à choix unique et questions à choix multiple"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "jfkxuinz",
                    "page": "20",
                    "label": { "value": '"Questions à choix multiple"', "type": "VTL|MD" },
                },
            },
        },
        {
            "id": "question-jfkxh2lf",
            "componentType": "Question",
            "page": "20",
            "label": {
                "value": '"Question à choix multiple - réponse booléen basique"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "jfkxh2lf",
                    "componentType": "CheckboxGroup",
                    "page": "20",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfjew4oy",
                            "page": "13",
                            "label": {
                                "value":
                                    '"II - " || "Questions à choix unique et questions à choix multiple"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfkxuinz",
                            "page": "20",
                            "label": { "value": '"Questions à choix multiple"', "type": "VTL|MD" },
                        },
                    },
                    "responses": [
                        {
                            "id": "jfkxh2lf-QOP-kfs6nzmk",
                            "label": {
                                "value": '"code1 : le libellé du code 1 contient **du gras** "',
                                "type": "VTL|MD",
                            },
                            "response": { "name": "QCM_B1" },
                        },
                        {
                            "id": "jfkxh2lf-QOP-kfs76ek4",
                            "label": {
                                "value": '"code2 le libellé du code 2 contient *de l\'italique* "',
                                "type": "VTL|MD",
                            },
                            "response": { "name": "QCM_B2" },
                        },
                        {
                            "id": "jfkxh2lf-QOP-kfs6od02",
                            "label": {
                                "value":
                                    '"code3 : le libellé du code 3 contient **du gras** et *de l\'italique*"',
                                "type": "VTL|MD",
                            },
                            "response": { "name": "QCM_B3" },
                        },
                        {
                            "id": "jfkxh2lf-QOP-kfs6thpf",
                            "label": {
                                "value":
                                    '"code4 : le libellé du code 4 contient du ***gras italique***"',
                                "type": "VTL|MD",
                            },
                            "response": { "name": "QCM_B4" },
                        },
                        {
                            "id": "jfkxh2lf-QOP-kfs75eiq",
                            "label": {
                                "value":
                                    '"code5 : le libellé du code 5 contient des retours à la ligne \n\nligne 2\n\nligne 3"',
                                "type": "VTL|MD",
                            },
                            "response": { "name": "QCM_B5" },
                        },
                        {
                            "id": "jfkxh2lf-QOP-kfs738z6",
                            "label": { "value": '"code6"', "type": "VTL|MD" },
                            "response": { "name": "QCM_B6" },
                        },
                        {
                            "id": "jfkxh2lf-QOP-kfs6yui1",
                            "label": {
                                "value":
                                    "\"[code7](. 'My name is Bond, James Bond') le code 7 porte une infobulle\"",
                                "type": "VTL|MD",
                            },
                            "response": { "name": "QCM_B7" },
                        },
                        {
                            "id": "jfkxh2lf-QOP-kfs6t577",
                            "label": { "value": '"code8"', "type": "VTL|MD" },
                            "response": { "name": "QCM_B8" },
                        },
                    ],
                },
            ],
        },
        {
            "id": "question-jfkxybfe",
            "componentType": "Question",
            "page": "21",
            "label": {
                "value": '"Question à choix multiple - réponse oui/non case à cocher"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "jfkxybfe",
                    "componentType": "Table",
                    "mandatory": false,
                    "page": "21",
                    "positioning": "HORIZONTAL",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfjew4oy",
                            "page": "13",
                            "label": {
                                "value":
                                    '"II - " || "Questions à choix unique et questions à choix multiple"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfkxuinz",
                            "page": "20",
                            "label": { "value": '"Questions à choix multiple"', "type": "VTL|MD" },
                        },
                    },
                    "body": [
                        [
                            { "value": "1", "label": { "value": '"choix 1"', "type": "VTL|MD" } },
                            {
                                "componentType": "CheckboxOne",
                                "id": "jfkxybfe-RDOP-kfs6tu6f",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                    {
                                        "value": "3",
                                        "label": { "value": '"Ne sait pas"', "type": "VTL|MD" },
                                    },
                                    {
                                        "value": "4",
                                        "label": { "value": '"Sans objet"', "type": "VTL|MD" },
                                    },
                                ],
                                "response": { "name": "QCM_ON1" },
                            },
                        ],
                        [
                            { "value": "2", "label": { "value": '"choix 2"', "type": "VTL|MD" } },
                            {
                                "componentType": "CheckboxOne",
                                "id": "jfkxybfe-RDOP-kfs6uuii",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                    {
                                        "value": "3",
                                        "label": { "value": '"Ne sait pas"', "type": "VTL|MD" },
                                    },
                                    {
                                        "value": "4",
                                        "label": { "value": '"Sans objet"', "type": "VTL|MD" },
                                    },
                                ],
                                "response": { "name": "QCM_ON2" },
                            },
                        ],
                        [
                            {
                                "value": "3",
                                "label": {
                                    "value": "\"[choix 3](. '1 2 3 soleil')\"",
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "CheckboxOne",
                                "id": "jfkxybfe-RDOP-kfs6rmz9",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                    {
                                        "value": "3",
                                        "label": { "value": '"Ne sait pas"', "type": "VTL|MD" },
                                    },
                                    {
                                        "value": "4",
                                        "label": { "value": '"Sans objet"', "type": "VTL|MD" },
                                    },
                                ],
                                "response": { "name": "QCM_ON3" },
                            },
                        ],
                        [
                            { "value": "4", "label": { "value": '"choix 4"', "type": "VTL|MD" } },
                            {
                                "componentType": "CheckboxOne",
                                "id": "jfkxybfe-RDOP-kfs6tmb0",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                    {
                                        "value": "3",
                                        "label": { "value": '"Ne sait pas"', "type": "VTL|MD" },
                                    },
                                    {
                                        "value": "4",
                                        "label": { "value": '"Sans objet"', "type": "VTL|MD" },
                                    },
                                ],
                                "response": { "name": "QCM_ON4" },
                            },
                        ],
                        [
                            { "value": "5", "label": { "value": '"choix 5"', "type": "VTL|MD" } },
                            {
                                "componentType": "CheckboxOne",
                                "id": "jfkxybfe-RDOP-kfs74s7k",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                    {
                                        "value": "3",
                                        "label": { "value": '"Ne sait pas"', "type": "VTL|MD" },
                                    },
                                    {
                                        "value": "4",
                                        "label": { "value": '"Sans objet"', "type": "VTL|MD" },
                                    },
                                ],
                                "response": { "name": "QCM_ON5" },
                            },
                        ],
                    ],
                },
            ],
        },
        {
            "id": "question-jfkyw9o1",
            "componentType": "Question",
            "page": "22",
            "label": {
                "value": '"Question à choix multiple - réponse oui/non radio"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "jfkyw9o1",
                    "componentType": "Table",
                    "mandatory": false,
                    "page": "22",
                    "positioning": "HORIZONTAL",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "jfjew4oy",
                            "page": "13",
                            "label": {
                                "value":
                                    '"II - " || "Questions à choix unique et questions à choix multiple"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "jfkxuinz",
                            "page": "20",
                            "label": { "value": '"Questions à choix multiple"', "type": "VTL|MD" },
                        },
                    },
                    "body": [
                        [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"code1 : le libellé du code 1 contient **du gras** "',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "Radio",
                                "id": "jfkyw9o1-RDOP-kfs71o3d",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "QCM_ONR1" },
                            },
                        ],
                        [
                            {
                                "value": "2",
                                "label": {
                                    "value": '"code2 le libellé du code 2 contient *de l\'italique* "',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "Radio",
                                "id": "jfkyw9o1-RDOP-kfs76d8p",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "QCM_ONR2" },
                            },
                        ],
                        [
                            {
                                "value": "3",
                                "label": {
                                    "value":
                                        '"code3 : le libellé du code 3 contient **du gras** et *de l\'italique*"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "Radio",
                                "id": "jfkyw9o1-RDOP-kfs77h0z",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "QCM_ONR3" },
                            },
                        ],
                        [
                            {
                                "value": "4",
                                "label": {
                                    "value":
                                        '"code4 : le libellé du code 4 contient du ***gras italique***"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "Radio",
                                "id": "jfkyw9o1-RDOP-kfs6ujsf",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "QCM_ONR4" },
                            },
                        ],
                        [
                            {
                                "value": "5",
                                "label": {
                                    "value":
                                        '"code5 : le libellé du code 5 contient des retours à la ligne \n\nligne 2\n\nligne 3"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "Radio",
                                "id": "jfkyw9o1-RDOP-kfs6roe4",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "QCM_ONR5" },
                            },
                        ],
                        [
                            { "value": "6", "label": { "value": '"code6"', "type": "VTL|MD" } },
                            {
                                "componentType": "Radio",
                                "id": "jfkyw9o1-RDOP-kfs6zvn6",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "QCM_ONR6" },
                            },
                        ],
                        [
                            {
                                "value": "7",
                                "label": {
                                    "value":
                                        "\"[code7](. 'My name is Bond, James Bond') le code 7 porte une infobulle\"",
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "Radio",
                                "id": "jfkyw9o1-RDOP-kfs6z8u9",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "QCM_ONR7" },
                            },
                        ],
                        [
                            { "value": "8", "label": { "value": '"code8"', "type": "VTL|MD" } },
                            {
                                "componentType": "Radio",
                                "id": "jfkyw9o1-RDOP-kfs6ok4m",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "QCM_ONR8" },
                            },
                        ],
                    ],
                },
            ],
        },
        {
            "id": "jfkyvabw",
            "componentType": "Sequence",
            "page": "23",
            "label": { "value": '"III - " || "Tableaux"', "type": "VTL|MD" },
            "declarations": [
                {
                    "id": "k6c7aexd",
                    "declarationType": "INSTRUCTION",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": { "value": '"Ce module concerne les tableaux "', "type": "VTL|MD" },
                },
            ],
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "jfkyvabw",
                    "page": "23",
                    "label": { "value": '"III - " || "Tableaux"', "type": "VTL|MD" },
                },
            },
        },
        {
            "id": "question-l8u8d67h",
            "componentType": "Question",
            "page": "24",
            "label": {
                "value": '"Tableau TIC - répartition du nb habitants, comparaison question INTEGER"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "l8u8f3sa",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"Rappel de la valeur collectée INTEGER = " || cast(INTEGER,string) ',
                        "type": "VTL|MD",
                    },
                },
            ],
            "components": [
                {
                    "id": "l8u8d67h",
                    "componentType": "Table",
                    "mandatory": false,
                    "page": "24",
                    "positioning": "HORIZONTAL",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "l8u8d67h-RDOP-l8u80yaz-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAUTIC41)) and (0>TABLEAUTIC41 or 20<TABLEAUTIC41))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 20."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "l8u8d67h-RDOP-l8u80yaz-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAUTIC41))  and round(TABLEAUTIC41,0)<>TABLEAUTIC41)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "l8u8d67h-RDOP-l8u85xql-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAUTIC31)) and (0>TABLEAUTIC31 or 20<TABLEAUTIC31))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 20."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "l8u8d67h-RDOP-l8u85xql-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAUTIC31))  and round(TABLEAUTIC31,0)<>TABLEAUTIC31)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "l8u8d67h-RDOP-l8u8ezod-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAUTIC21)) and (0>TABLEAUTIC21 or 20<TABLEAUTIC21))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 20."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "l8u8d67h-RDOP-l8u8ezod-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAUTIC21))  and round(TABLEAUTIC21,0)<>TABLEAUTIC21)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "l8u8d67h-RDOP-l8u8ju3p-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAUTIC11)) and (0>TABLEAUTIC11 or 20<TABLEAUTIC11))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 20."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "l8u8d67h-RDOP-l8u8ju3p-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAUTIC11))  and round(TABLEAUTIC11,0)<>TABLEAUTIC11)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "l8u8d67h-CI-0",
                            "typeOfControl": "CONSISTENCY",
                            "criticality": "INFO",
                            "control": {
                                "value":
                                    "not(nvl(TABLEAUTIC11,0)+nvl(TABLEAUTIC21,0)+nvl(TABLEAUTIC31,0)+ nvl(TABLEAUTIC41,0) > nvl(INTEGER,0))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"La somme " || cast(SOMME_TIC,string) || " est supérieure au nombre collecté : " || cast(INTEGER,string) ',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfkyvabw",
                            "page": "23",
                            "label": { "value": '"III - " || "Tableaux"', "type": "VTL|MD" },
                        },
                    },
                    "header": [
                        { "label": { "value": "", "type": "VTL|MD" } },
                        {
                            "label": {
                                "value": '"Nombre de personnes, entre 0 et 20"',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "body": [
                        [
                            { "value": "1", "label": { "value": '"moins de 15"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 20.0,
                                "decimals": 0,
                                "id": "l8u8d67h-RDOP-l8u8ju3p",
                                "response": { "name": "TABLEAUTIC11" },
                            },
                        ],
                        [
                            { "value": "2", "label": { "value": '"de 16 à 17 ans"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 20.0,
                                "decimals": 0,
                                "id": "l8u8d67h-RDOP-l8u8ezod",
                                "response": { "name": "TABLEAUTIC21" },
                            },
                        ],
                        [
                            { "value": "3", "label": { "value": '"de 18 à 19 ans"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 20.0,
                                "decimals": 0,
                                "id": "l8u8d67h-RDOP-l8u85xql",
                                "response": { "name": "TABLEAUTIC31" },
                            },
                        ],
                        [
                            { "value": "4", "label": { "value": '"20 et plus"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 20.0,
                                "decimals": 0,
                                "id": "l8u8d67h-RDOP-l8u80yaz",
                                "response": { "name": "TABLEAUTIC41" },
                            },
                        ],
                    ],
                },
            ],
        },
        {
            "id": "question-jfkzltkm",
            "componentType": "Question",
            "page": "25",
            "label": { "value": '"Tableau un axe simple, une mesure, sans unité"', "type": "VTL|MD" },
            "declarations": [
                {
                    "id": "l8ubvmec",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": { "value": '"COntrole sur somme des lignes > 100"', "type": "VTL|MD" },
                },
            ],
            "components": [
                {
                    "id": "jfkzltkm",
                    "componentType": "Table",
                    "mandatory": false,
                    "page": "25",
                    "positioning": "HORIZONTAL",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "jfkzltkm-RDOP-lmgeudld-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A1M51)) and (0>TABLEAU1A1M51 or 10000<TABLEAU1A1M51))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 10000."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzltkm-RDOP-lmgeudld-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A1M51))  and round(TABLEAU1A1M51,0)<>TABLEAU1A1M51)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzltkm-RDOP-lmgf6vc7-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A1M41)) and (0>TABLEAU1A1M41 or 10000<TABLEAU1A1M41))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 10000."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzltkm-RDOP-lmgf6vc7-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A1M41))  and round(TABLEAU1A1M41,0)<>TABLEAU1A1M41)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzltkm-RDOP-lmgfedhl-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A1M31)) and (0>TABLEAU1A1M31 or 10000<TABLEAU1A1M31))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 10000."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzltkm-RDOP-lmgfedhl-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A1M31))  and round(TABLEAU1A1M31,0)<>TABLEAU1A1M31)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzltkm-RDOP-lmgf9xuo-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A1M21)) and (0>TABLEAU1A1M21 or 10000<TABLEAU1A1M21))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 10000."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzltkm-RDOP-lmgf9xuo-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A1M21))  and round(TABLEAU1A1M21,0)<>TABLEAU1A1M21)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzltkm-RDOP-lmgf3e9q-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A1M11)) and (0>TABLEAU1A1M11 or 10000<TABLEAU1A1M11))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 10000."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzltkm-RDOP-lmgf3e9q-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A1M11))  and round(TABLEAU1A1M11,0)<>TABLEAU1A1M11)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzltkm-CI-0",
                            "typeOfControl": "CONSISTENCY",
                            "criticality": "INFO",
                            "control": {
                                "value":
                                    "not(nvl(TABLEAU1A1M11,0)+nvl(TABLEAU1A1M21,0)+nvl(TABLEAU1A1M31,0)+nvl(TABLEAU1A1M41,0)+ nvl(TABLEAU1A1M51,0) > 100)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"La somme des lignes (" || cast(TOTAL_TAB,string) || ") est supérieure à 100." ',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfkyvabw",
                            "page": "23",
                            "label": { "value": '"III - " || "Tableaux"', "type": "VTL|MD" },
                        },
                    },
                    "header": [
                        { "label": { "value": "", "type": "VTL|MD" } },
                        {
                            "label": {
                                "value": '"Mesure de type numérique jusque 10000"',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "body": [
                        [
                            { "value": "1", "label": { "value": '"choix 1"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 10000.0,
                                "decimals": 0,
                                "id": "jfkzltkm-RDOP-lmgf3e9q",
                                "response": { "name": "TABLEAU1A1M11" },
                            },
                        ],
                        [
                            { "value": "2", "label": { "value": '"choix 2"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 10000.0,
                                "decimals": 0,
                                "id": "jfkzltkm-RDOP-lmgf9xuo",
                                "response": { "name": "TABLEAU1A1M21" },
                            },
                        ],
                        [
                            {
                                "value": "3",
                                "label": {
                                    "value": "\"[choix 3](. '1 2 3 soleil')\"",
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 10000.0,
                                "decimals": 0,
                                "id": "jfkzltkm-RDOP-lmgfedhl",
                                "response": { "name": "TABLEAU1A1M31" },
                            },
                        ],
                        [
                            { "value": "4", "label": { "value": '"choix 4"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 10000.0,
                                "decimals": 0,
                                "id": "jfkzltkm-RDOP-lmgf6vc7",
                                "response": { "name": "TABLEAU1A1M41" },
                            },
                        ],
                        [
                            { "value": "5", "label": { "value": '"choix 5"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 10000.0,
                                "decimals": 0,
                                "id": "jfkzltkm-RDOP-lmgeudld",
                                "response": { "name": "TABLEAU1A1M51" },
                            },
                        ],
                    ],
                },
            ],
        },
        {
            "id": "question-jfkzpexn",
            "componentType": "Question",
            "page": "26",
            "label": {
                "value": '"Tableau un axe simple, plusieurs mesures, sans unité"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "jfkzpexn",
                    "componentType": "Table",
                    "mandatory": false,
                    "page": "26",
                    "positioning": "HORIZONTAL",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "jfkzpexn-RDOP-kfs6s3d1-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A3M51)) and (0>TABLEAU1A3M51 or 999<TABLEAU1A3M51))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzpexn-RDOP-kfs6s3d1-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A3M51))  and round(TABLEAU1A3M51,0)<>TABLEAU1A3M51)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzpexn-RDOP-kfs70a3j-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A3M41)) and (0>TABLEAU1A3M41 or 999<TABLEAU1A3M41))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzpexn-RDOP-kfs70a3j-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A3M41))  and round(TABLEAU1A3M41,0)<>TABLEAU1A3M41)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzpexn-RDOP-kfs6r9ry-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A3M31)) and (0>TABLEAU1A3M31 or 999<TABLEAU1A3M31))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzpexn-RDOP-kfs6r9ry-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A3M31))  and round(TABLEAU1A3M31,0)<>TABLEAU1A3M31)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzpexn-RDOP-kfs6n365-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A3M21)) and (0>TABLEAU1A3M21 or 999<TABLEAU1A3M21))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzpexn-RDOP-kfs6n365-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A3M21))  and round(TABLEAU1A3M21,0)<>TABLEAU1A3M21)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzpexn-RDOP-kfs6zwqz-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A3M11)) and (0>TABLEAU1A3M11 or 999<TABLEAU1A3M11))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzpexn-RDOP-kfs6zwqz-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1A3M11))  and round(TABLEAU1A3M11,0)<>TABLEAU1A3M11)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfkyvabw",
                            "page": "23",
                            "label": { "value": '"III - " || "Tableaux"', "type": "VTL|MD" },
                        },
                    },
                    "header": [
                        { "label": { "value": "", "type": "VTL|MD" } },
                        { "label": { "value": '"Mesure de type numérique"', "type": "VTL|MD" } },
                        { "label": { "value": '"Mesure de type liste"', "type": "VTL|MD" } },
                        { "label": { "value": '"Mesure de type texte"', "type": "VTL|MD" } },
                    ],
                    "body": [
                        [
                            { "value": "1", "label": { "value": '"choix 1"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 999.0,
                                "decimals": 0,
                                "id": "jfkzpexn-RDOP-kfs6zwqz",
                                "response": { "name": "TABLEAU1A3M11" },
                            },
                            {
                                "componentType": "CheckboxOne",
                                "id": "jfkzpexn-RDOP-kfs76fb2",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "TABLEAU1A3M12" },
                            },
                            {
                                "componentType": "Input",
                                "maxLength": 25,
                                "id": "jfkzpexn-RDOP-kfs6rhps",
                                "response": { "name": "TABLEAU1A3M13" },
                            },
                        ],
                        [
                            { "value": "2", "label": { "value": '"choix 2"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 999.0,
                                "decimals": 0,
                                "id": "jfkzpexn-RDOP-kfs6n365",
                                "response": { "name": "TABLEAU1A3M21" },
                            },
                            {
                                "componentType": "CheckboxOne",
                                "id": "jfkzpexn-RDOP-kfs6p4en",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "TABLEAU1A3M22" },
                            },
                            {
                                "componentType": "Input",
                                "maxLength": 25,
                                "id": "jfkzpexn-RDOP-kfs6qqki",
                                "response": { "name": "TABLEAU1A3M23" },
                            },
                        ],
                        [
                            {
                                "value": "3",
                                "label": {
                                    "value": "\"[choix 3](. '1 2 3 soleil')\"",
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 999.0,
                                "decimals": 0,
                                "id": "jfkzpexn-RDOP-kfs6r9ry",
                                "response": { "name": "TABLEAU1A3M31" },
                            },
                            {
                                "componentType": "CheckboxOne",
                                "id": "jfkzpexn-RDOP-kfs6plyt",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "TABLEAU1A3M32" },
                            },
                            {
                                "componentType": "Input",
                                "maxLength": 25,
                                "id": "jfkzpexn-RDOP-kfs6yj1e",
                                "response": { "name": "TABLEAU1A3M33" },
                            },
                        ],
                        [
                            { "value": "4", "label": { "value": '"choix 4"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 999.0,
                                "decimals": 0,
                                "id": "jfkzpexn-RDOP-kfs70a3j",
                                "response": { "name": "TABLEAU1A3M41" },
                            },
                            {
                                "componentType": "CheckboxOne",
                                "id": "jfkzpexn-RDOP-kfs71729",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "TABLEAU1A3M42" },
                            },
                            {
                                "componentType": "Input",
                                "maxLength": 25,
                                "id": "jfkzpexn-RDOP-kfs6tod7",
                                "response": { "name": "TABLEAU1A3M43" },
                            },
                        ],
                        [
                            { "value": "5", "label": { "value": '"choix 5"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 999.0,
                                "decimals": 0,
                                "id": "jfkzpexn-RDOP-kfs6s3d1",
                                "response": { "name": "TABLEAU1A3M51" },
                            },
                            {
                                "componentType": "CheckboxOne",
                                "id": "jfkzpexn-RDOP-kfs6oml8",
                                "options": [
                                    { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                                    { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                                ],
                                "response": { "name": "TABLEAU1A3M52" },
                            },
                            {
                                "componentType": "Input",
                                "maxLength": 25,
                                "id": "jfkzpexn-RDOP-kfs6vpzt",
                                "response": { "name": "TABLEAU1A3M53" },
                            },
                        ],
                    ],
                },
            ],
        },
        {
            "id": "question-jfkzttm3",
            "componentType": "Question",
            "page": "27",
            "label": {
                "value": '"Tableau 2 axes - 1 mesure de type numérique, sans unité"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "jfkzttm3",
                    "componentType": "Table",
                    "mandatory": false,
                    "page": "27",
                    "positioning": "HORIZONTAL",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "jfkzttm3-RDOP-kfs6o718-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A81)) and (0>TABLEAU2A81 or 100<TABLEAU2A81))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6o718-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A81))  and round(TABLEAU2A81,0)<>TABLEAU2A81)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6uhz5-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A82)) and (0>TABLEAU2A82 or 100<TABLEAU2A82))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6uhz5-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A82))  and round(TABLEAU2A82,0)<>TABLEAU2A82)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6r0f9-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A83)) and (0>TABLEAU2A83 or 100<TABLEAU2A83))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6r0f9-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A83))  and round(TABLEAU2A83,0)<>TABLEAU2A83)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs751qu-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A84)) and (0>TABLEAU2A84 or 100<TABLEAU2A84))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs751qu-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A84))  and round(TABLEAU2A84,0)<>TABLEAU2A84)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs77396-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A85)) and (0>TABLEAU2A85 or 100<TABLEAU2A85))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs77396-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A85))  and round(TABLEAU2A85,0)<>TABLEAU2A85)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6oi5b-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A71)) and (0>TABLEAU2A71 or 100<TABLEAU2A71))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6oi5b-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A71))  and round(TABLEAU2A71,0)<>TABLEAU2A71)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs74cck-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A72)) and (0>TABLEAU2A72 or 100<TABLEAU2A72))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs74cck-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A72))  and round(TABLEAU2A72,0)<>TABLEAU2A72)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6zzlh-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A73)) and (0>TABLEAU2A73 or 100<TABLEAU2A73))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6zzlh-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A73))  and round(TABLEAU2A73,0)<>TABLEAU2A73)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs77kxk-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A74)) and (0>TABLEAU2A74 or 100<TABLEAU2A74))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs77kxk-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A74))  and round(TABLEAU2A74,0)<>TABLEAU2A74)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6wdle-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A75)) and (0>TABLEAU2A75 or 100<TABLEAU2A75))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6wdle-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A75))  and round(TABLEAU2A75,0)<>TABLEAU2A75)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6psi9-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A61)) and (0>TABLEAU2A61 or 100<TABLEAU2A61))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6psi9-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A61))  and round(TABLEAU2A61,0)<>TABLEAU2A61)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs714kn-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A62)) and (0>TABLEAU2A62 or 100<TABLEAU2A62))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs714kn-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A62))  and round(TABLEAU2A62,0)<>TABLEAU2A62)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs770cc-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A63)) and (0>TABLEAU2A63 or 100<TABLEAU2A63))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs770cc-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A63))  and round(TABLEAU2A63,0)<>TABLEAU2A63)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs75dsl-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A64)) and (0>TABLEAU2A64 or 100<TABLEAU2A64))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs75dsl-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A64))  and round(TABLEAU2A64,0)<>TABLEAU2A64)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6pfhm-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A65)) and (0>TABLEAU2A65 or 100<TABLEAU2A65))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6pfhm-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A65))  and round(TABLEAU2A65,0)<>TABLEAU2A65)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs765pz-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A51)) and (0>TABLEAU2A51 or 100<TABLEAU2A51))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs765pz-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A51))  and round(TABLEAU2A51,0)<>TABLEAU2A51)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6vlxk-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A52)) and (0>TABLEAU2A52 or 100<TABLEAU2A52))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6vlxk-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A52))  and round(TABLEAU2A52,0)<>TABLEAU2A52)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs70fpo-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A53)) and (0>TABLEAU2A53 or 100<TABLEAU2A53))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs70fpo-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A53))  and round(TABLEAU2A53,0)<>TABLEAU2A53)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6yf0h-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A54)) and (0>TABLEAU2A54 or 100<TABLEAU2A54))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6yf0h-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A54))  and round(TABLEAU2A54,0)<>TABLEAU2A54)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs72bf8-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A55)) and (0>TABLEAU2A55 or 100<TABLEAU2A55))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs72bf8-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A55))  and round(TABLEAU2A55,0)<>TABLEAU2A55)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6std4-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A41)) and (0>TABLEAU2A41 or 100<TABLEAU2A41))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6std4-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A41))  and round(TABLEAU2A41,0)<>TABLEAU2A41)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6wteu-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A42)) and (0>TABLEAU2A42 or 100<TABLEAU2A42))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6wteu-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A42))  and round(TABLEAU2A42,0)<>TABLEAU2A42)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6o4tr-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A43)) and (0>TABLEAU2A43 or 100<TABLEAU2A43))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6o4tr-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A43))  and round(TABLEAU2A43,0)<>TABLEAU2A43)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs70s5e-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A44)) and (0>TABLEAU2A44 or 100<TABLEAU2A44))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs70s5e-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A44))  and round(TABLEAU2A44,0)<>TABLEAU2A44)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs73tkt-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A45)) and (0>TABLEAU2A45 or 100<TABLEAU2A45))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs73tkt-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A45))  and round(TABLEAU2A45,0)<>TABLEAU2A45)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs74pe1-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A31)) and (0>TABLEAU2A31 or 100<TABLEAU2A31))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs74pe1-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A31))  and round(TABLEAU2A31,0)<>TABLEAU2A31)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6r6v2-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A32)) and (0>TABLEAU2A32 or 100<TABLEAU2A32))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6r6v2-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A32))  and round(TABLEAU2A32,0)<>TABLEAU2A32)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs71abh-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A33)) and (0>TABLEAU2A33 or 100<TABLEAU2A33))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs71abh-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A33))  and round(TABLEAU2A33,0)<>TABLEAU2A33)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs71r6u-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A34)) and (0>TABLEAU2A34 or 100<TABLEAU2A34))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs71r6u-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A34))  and round(TABLEAU2A34,0)<>TABLEAU2A34)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs70wj3-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A35)) and (0>TABLEAU2A35 or 100<TABLEAU2A35))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs70wj3-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A35))  and round(TABLEAU2A35,0)<>TABLEAU2A35)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6p839-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A21)) and (0>TABLEAU2A21 or 100<TABLEAU2A21))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6p839-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A21))  and round(TABLEAU2A21,0)<>TABLEAU2A21)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6qzke-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A22)) and (0>TABLEAU2A22 or 100<TABLEAU2A22))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6qzke-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A22))  and round(TABLEAU2A22,0)<>TABLEAU2A22)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6wcke-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A23)) and (0>TABLEAU2A23 or 100<TABLEAU2A23))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6wcke-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A23))  and round(TABLEAU2A23,0)<>TABLEAU2A23)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6swtm-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A24)) and (0>TABLEAU2A24 or 100<TABLEAU2A24))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6swtm-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A24))  and round(TABLEAU2A24,0)<>TABLEAU2A24)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6wkxw-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A25)) and (0>TABLEAU2A25 or 100<TABLEAU2A25))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6wkxw-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A25))  and round(TABLEAU2A25,0)<>TABLEAU2A25)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs74dod-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A11)) and (0>TABLEAU2A11 or 100<TABLEAU2A11))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs74dod-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A11))  and round(TABLEAU2A11,0)<>TABLEAU2A11)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs714gr-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A12)) and (0>TABLEAU2A12 or 100<TABLEAU2A12))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs714gr-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A12))  and round(TABLEAU2A12,0)<>TABLEAU2A12)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6yh8c-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A13)) and (0>TABLEAU2A13 or 100<TABLEAU2A13))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6yh8c-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A13))  and round(TABLEAU2A13,0)<>TABLEAU2A13)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6wx2s-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A14)) and (0>TABLEAU2A14 or 100<TABLEAU2A14))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6wx2s-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A14))  and round(TABLEAU2A14,0)<>TABLEAU2A14)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6ycig-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A15)) and (0>TABLEAU2A15 or 100<TABLEAU2A15))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 100."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzttm3-RDOP-kfs6ycig-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU2A15))  and round(TABLEAU2A15,0)<>TABLEAU2A15)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfkyvabw",
                            "page": "23",
                            "label": { "value": '"III - " || "Tableaux"', "type": "VTL|MD" },
                        },
                    },
                    "header": [
                        { "label": { "value": "", "type": "VTL|MD" } },
                        { "label": { "value": '"choix 1"', "type": "VTL|MD" } },
                        { "label": { "value": '"choix 2"', "type": "VTL|MD" } },
                        { "label": { "value": "\"[choix 3](. '1 2 3 soleil')\"", "type": "VTL|MD" } },
                        { "label": { "value": '"choix 4"', "type": "VTL|MD" } },
                        { "label": { "value": '"choix 5"', "type": "VTL|MD" } },
                    ],
                    "body": [
                        [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"code1 : le libellé du code 1 contient **du gras** "',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs74dod",
                                "response": { "name": "TABLEAU2A11" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs714gr",
                                "response": { "name": "TABLEAU2A12" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6yh8c",
                                "response": { "name": "TABLEAU2A13" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6wx2s",
                                "response": { "name": "TABLEAU2A14" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6ycig",
                                "response": { "name": "TABLEAU2A15" },
                            },
                        ],
                        [
                            {
                                "value": "2",
                                "label": {
                                    "value": '"code2 le libellé du code 2 contient *de l\'italique* "',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6p839",
                                "response": { "name": "TABLEAU2A21" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6qzke",
                                "response": { "name": "TABLEAU2A22" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6wcke",
                                "response": { "name": "TABLEAU2A23" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6swtm",
                                "response": { "name": "TABLEAU2A24" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6wkxw",
                                "response": { "name": "TABLEAU2A25" },
                            },
                        ],
                        [
                            {
                                "value": "3",
                                "label": {
                                    "value":
                                        '"code3 : le libellé du code 3 contient **du gras** et *de l\'italique*"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs74pe1",
                                "response": { "name": "TABLEAU2A31" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6r6v2",
                                "response": { "name": "TABLEAU2A32" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs71abh",
                                "response": { "name": "TABLEAU2A33" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs71r6u",
                                "response": { "name": "TABLEAU2A34" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs70wj3",
                                "response": { "name": "TABLEAU2A35" },
                            },
                        ],
                        [
                            {
                                "value": "4",
                                "label": {
                                    "value":
                                        '"code4 : le libellé du code 4 contient du ***gras italique***"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6std4",
                                "response": { "name": "TABLEAU2A41" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6wteu",
                                "response": { "name": "TABLEAU2A42" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6o4tr",
                                "response": { "name": "TABLEAU2A43" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs70s5e",
                                "response": { "name": "TABLEAU2A44" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs73tkt",
                                "response": { "name": "TABLEAU2A45" },
                            },
                        ],
                        [
                            {
                                "value": "5",
                                "label": {
                                    "value":
                                        '"code5 : le libellé du code 5 contient des retours à la ligne \n\nligne 2\n\nligne 3"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs765pz",
                                "response": { "name": "TABLEAU2A51" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6vlxk",
                                "response": { "name": "TABLEAU2A52" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs70fpo",
                                "response": { "name": "TABLEAU2A53" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6yf0h",
                                "response": { "name": "TABLEAU2A54" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs72bf8",
                                "response": { "name": "TABLEAU2A55" },
                            },
                        ],
                        [
                            { "value": "6", "label": { "value": '"code6"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6psi9",
                                "response": { "name": "TABLEAU2A61" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs714kn",
                                "response": { "name": "TABLEAU2A62" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs770cc",
                                "response": { "name": "TABLEAU2A63" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs75dsl",
                                "response": { "name": "TABLEAU2A64" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6pfhm",
                                "response": { "name": "TABLEAU2A65" },
                            },
                        ],
                        [
                            {
                                "value": "7",
                                "label": {
                                    "value":
                                        "\"[code7](. 'My name is Bond, James Bond') le code 7 porte une infobulle\"",
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6oi5b",
                                "response": { "name": "TABLEAU2A71" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs74cck",
                                "response": { "name": "TABLEAU2A72" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6zzlh",
                                "response": { "name": "TABLEAU2A73" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs77kxk",
                                "response": { "name": "TABLEAU2A74" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6wdle",
                                "response": { "name": "TABLEAU2A75" },
                            },
                        ],
                        [
                            { "value": "8", "label": { "value": '"code8"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6o718",
                                "response": { "name": "TABLEAU2A81" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6uhz5",
                                "response": { "name": "TABLEAU2A82" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs6r0f9",
                                "response": { "name": "TABLEAU2A83" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs751qu",
                                "response": { "name": "TABLEAU2A84" },
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 100.0,
                                "decimals": 0,
                                "id": "jfkzttm3-RDOP-kfs77396",
                                "response": { "name": "TABLEAU2A85" },
                            },
                        ],
                    ],
                },
            ],
        },
        {
            "id": "question-jfkzrwce",
            "componentType": "Question",
            "page": "28",
            "label": {
                "value": '"Tableau 1 axe avec hiérarchie , 1 mesure, avec unité (cas d\'école...)"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "jfkzrwce",
                    "componentType": "Table",
                    "mandatory": false,
                    "page": "28",
                    "positioning": "HORIZONTAL",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "jfkzrwce-RDOP-kfs7347h-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M61)) and (0>TABLEAU1AH1M61 or 999<TABLEAU1AH1M61))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzrwce-RDOP-kfs7347h-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M61))  and round(TABLEAU1AH1M61,0)<>TABLEAU1AH1M61)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzrwce-RDOP-kfs6vcz9-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M51)) and (0>TABLEAU1AH1M51 or 999<TABLEAU1AH1M51))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzrwce-RDOP-kfs6vcz9-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M51))  and round(TABLEAU1AH1M51,0)<>TABLEAU1AH1M51)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzrwce-RDOP-kfs77h7l-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M41)) and (0>TABLEAU1AH1M41 or 999<TABLEAU1AH1M41))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzrwce-RDOP-kfs77h7l-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M41))  and round(TABLEAU1AH1M41,0)<>TABLEAU1AH1M41)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzrwce-RDOP-kfs72t19-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M31)) and (0>TABLEAU1AH1M31 or 999<TABLEAU1AH1M31))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzrwce-RDOP-kfs72t19-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M31))  and round(TABLEAU1AH1M31,0)<>TABLEAU1AH1M31)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzrwce-RDOP-kfs6o7rs-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M21)) and (0>TABLEAU1AH1M21 or 999<TABLEAU1AH1M21))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzrwce-RDOP-kfs6o7rs-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M21))  and round(TABLEAU1AH1M21,0)<>TABLEAU1AH1M21)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzrwce-RDOP-kfs70aez-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M11)) and (0>TABLEAU1AH1M11 or 999<TABLEAU1AH1M11))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 999."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "jfkzrwce-RDOP-kfs70aez-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAU1AH1M11))  and round(TABLEAU1AH1M11,0)<>TABLEAU1AH1M11)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfkyvabw",
                            "page": "23",
                            "label": { "value": '"III - " || "Tableaux"', "type": "VTL|MD" },
                        },
                    },
                    "header": [
                        { "label": { "value": "", "type": "VTL|MD" }, "colspan": 2 },
                        {
                            "label": {
                                "value": '"Mesure de type numérique avec unité"',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "body": [
                        [
                            {
                                "value": "10",
                                "label": { "value": '"code1"', "type": "VTL|MD" },
                                "rowspan": 2,
                            },
                            { "value": "11", "label": { "value": '"code 1 1"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 999.0,
                                "decimals": 0,
                                "id": "jfkzrwce-RDOP-kfs70aez",
                                "unit": "k€",
                                "response": { "name": "TABLEAU1AH1M11" },
                            },
                        ],
                        [
                            { "value": "12", "label": { "value": '"code 1 2"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 999.0,
                                "decimals": 0,
                                "id": "jfkzrwce-RDOP-kfs6o7rs",
                                "unit": "k€",
                                "response": { "name": "TABLEAU1AH1M21" },
                            },
                        ],
                        [
                            {
                                "value": "20",
                                "label": { "value": '"code2"', "type": "VTL|MD" },
                                "rowspan": 3,
                            },
                            { "value": "21", "label": { "value": '"code 2 1"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 999.0,
                                "decimals": 0,
                                "id": "jfkzrwce-RDOP-kfs72t19",
                                "unit": "k€",
                                "response": { "name": "TABLEAU1AH1M31" },
                            },
                        ],
                        [
                            { "value": "22", "label": { "value": '"code 2 2"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 999.0,
                                "decimals": 0,
                                "id": "jfkzrwce-RDOP-kfs77h7l",
                                "unit": "k€",
                                "response": { "name": "TABLEAU1AH1M41" },
                            },
                        ],
                        [
                            { "value": "23", "label": { "value": '"code 2 3"', "type": "VTL|MD" } },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 999.0,
                                "decimals": 0,
                                "id": "jfkzrwce-RDOP-kfs6vcz9",
                                "unit": "k€",
                                "response": { "name": "TABLEAU1AH1M51" },
                            },
                        ],
                        [
                            {
                                "value": "30",
                                "label": { "value": '"code 3"', "type": "VTL|MD" },
                                "colspan": 2,
                            },
                            {
                                "componentType": "InputNumber",
                                "min": 0.0,
                                "max": 999.0,
                                "decimals": 0,
                                "id": "jfkzrwce-RDOP-kfs7347h",
                                "unit": "k€",
                                "response": { "name": "TABLEAU1AH1M61" },
                            },
                        ],
                    ],
                },
            ],
        },
        {
            "id": "question-k6c6kj14",
            "componentType": "Question",
            "page": "29",
            "label": {
                "value": '"Tableau dynamique jusque 5 lignes, 2 mesures dont une unité "',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "k6c6qh0u-SI",
                    "declarationType": "HELP",
                    "position": "BEFORE_QUESTION_TEXT",
                    "label": {
                        "value": '"La question suivante est une question de type tableau dynamique."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "components": [
                {
                    "id": "k6c6kj14",
                    "componentType": "RosterForLoop",
                    "mandatory": false,
                    "page": "29",
                    "positioning": "HORIZONTAL",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "k6c6kj14-RDOP-luciy7tz-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAUDYN2)) and (0.00>TABLEAUDYN2 or 10000.00<TABLEAUDYN2))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0.00 et 10000.00."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "k6c6kj14-RDOP-luciy7tz-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    "not(not(isnull(TABLEAUDYN2))  and round(TABLEAUDYN2,2)<>TABLEAUDYN2)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 2 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "jfkyvabw",
                            "page": "23",
                            "label": { "value": '"III - " || "Tableaux"', "type": "VTL|MD" },
                        },
                    },
                    "components": [
                        {
                            "componentType": "Input",
                            "maxLength": 249,
                            "id": "k6c6kj14-RDOP-lucj4zwh",
                            "response": { "name": "TABLEAUDYN1" },
                        },
                        {
                            "componentType": "InputNumber",
                            "min": 0.0,
                            "max": 10000.0,
                            "decimals": 2,
                            "id": "k6c6kj14-RDOP-luciy7tz",
                            "unit": "€",
                            "response": { "name": "TABLEAUDYN2" },
                        },
                    ],
                    "lines": {
                        "min": { "value": "1", "type": "VTL" },
                        "max": { "value": "5", "type": "VTL" },
                    },
                    "header": [
                        { "label": { "value": '"Description"', "type": "VTL|MD" } },
                        {
                            "label": {
                                "value": '"Montant (2 décimales) jusque 10000"',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                },
            ],
        },
        {
            "id": "k3opdj10",
            "componentType": "Sequence",
            "page": "30",
            "label": {
                "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "k6c39mjo",
                    "declarationType": "INSTRUCTION",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"Nous allons maintenant personnaliser ce questionnaire"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "k3opdj10",
                    "page": "30",
                    "label": {
                        "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "question-k6c3ia6n",
            "componentType": "Question",
            "page": "31",
            "label": { "value": '"Quel est votre prénom ? "', "type": "VTL|MD" },
            "declarations": [
                {
                    "id": "kzf8uqsy",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": { "value": '"Controle sur prénom vide"', "type": "VTL|MD" },
                },
            ],
            "components": [
                {
                    "id": "k6c3ia6n",
                    "componentType": "Input",
                    "mandatory": false,
                    "page": "31",
                    "maxLength": 25,
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "k6c3ia6n-CI-0",
                            "typeOfControl": "CONSISTENCY",
                            "criticality": "INFO",
                            "control": { "value": 'not(nvl(PRENOM,"")="")', "type": "VTL" },
                            "errorMessage": {
                                "value": '"Merci de renseigner votre prénom"',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "k3opdj10",
                            "page": "30",
                            "label": {
                                "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                                "type": "VTL|MD",
                            },
                        },
                    },
                    "response": { "name": "PRENOM" },
                },
            ],
        },
        {
            "id": "question-k6gjzooe",
            "componentType": "Question",
            "page": "32",
            "label": { "value": '"Quelle est votre adresse email ?"', "type": "VTL|MD" },
            "components": [
                {
                    "id": "k6gjzooe",
                    "componentType": "Input",
                    "mandatory": false,
                    "page": "32",
                    "maxLength": 80,
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "k3opdj10",
                            "page": "30",
                            "label": {
                                "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                                "type": "VTL|MD",
                            },
                        },
                    },
                    "response": { "name": "EMAIL" },
                },
            ],
        },
        {
            "id": "k3opeux2",
            "componentType": "Subsequence",
            "page": "33",
            "goToPage": "33",
            "label": { "value": '"Description socio démo de "|| PRENOM ', "type": "VTL|MD" },
            "declarations": [
                {
                    "id": "kzf8lbqn",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"Ajouter une décla sinon le titre de sous seq n\'apparait pas"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "k3opdj10",
                    "page": "30",
                    "label": {
                        "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "k3opeux2",
                    "page": "33",
                    "label": { "value": '"Description socio démo de "|| PRENOM ', "type": "VTL|MD" },
                },
            },
        },
        {
            "id": "question-k6c6mt9g",
            "componentType": "Question",
            "page": "34",
            "label": { "value": '"Bonjour " || PRENOM || ", êtes vous majeur ?" ', "type": "VTL|MD" },
            "declarations": [
                {
                    "id": "k6cbmkuw",
                    "declarationType": "INSTRUCTION",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"Si vous répondez oui, alors les questions 27/28 apparaîtront"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "components": [
                {
                    "id": "k6c6mt9g",
                    "componentType": "CheckboxOne",
                    "mandatory": false,
                    "page": "34",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "k3opdj10",
                            "page": "30",
                            "label": {
                                "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "k3opeux2",
                            "page": "33",
                            "label": {
                                "value": '"Description socio démo de "|| PRENOM ',
                                "type": "VTL|MD",
                            },
                        },
                    },
                    "options": [
                        { "value": "1", "label": { "value": '"Oui"', "type": "VTL|MD" } },
                        { "value": "2", "label": { "value": '"Non"', "type": "VTL|MD" } },
                    ],
                    "response": { "name": "MAJEUR" },
                },
            ],
        },
        {
            "id": "question-k6c36b39",
            "componentType": "Question",
            "page": "35",
            "label": { "value": 'PRENOM ||", quelle est votre date de naissance ?" ', "type": "VTL|MD" },
            "declarations": [
                {
                    "id": "kzf8r6ee",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": { "value": '"Format année : AAAA"', "type": "VTL|MD" },
                },
                {
                    "id": "kzf8wj2j",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": { "value": '"Controle sur age et fait d\'être majeur"', "type": "VTL|MD" },
                },
                {
                    "id": "kzf8pk3q",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"AGE calculé : " || cast(AGEPRENOM,string) ',
                        "type": "VTL|MD",
                    },
                },
            ],
            "components": [
                {
                    "id": "k6c36b39",
                    "componentType": "Datepicker",
                    "mandatory": false,
                    "page": "35",
                    "min": "1900",
                    "max": "2020",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "k6c36b39-format-date-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value":
                                    'not(not(isnull(NAISSANCE)) and (cast(NAISSANCE, date, "YYYY")<cast("1900", date, "YYYY") or cast(NAISSANCE, date, "YYYY")>cast("2020", date, "YYYY")))',
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '"La date saisie doit être comprise entre 1900 et 2020."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "k6c36b39-CI-0",
                            "typeOfControl": "CONSISTENCY",
                            "criticality": "INFO",
                            "control": {
                                "value":
                                    'not(MAJEUR = "1" and AGEPRENOM < 18 and not(isnull(NAISSANCE)))',
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Vous avez dit être majeur, or vous avez "|| cast(AGEPRENOM,string) || " ans." ',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "k3opdj10",
                            "page": "30",
                            "label": {
                                "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "k3opeux2",
                            "page": "33",
                            "label": {
                                "value": '"Description socio démo de "|| PRENOM ',
                                "type": "VTL|MD",
                            },
                        },
                    },
                    "dateFormat": "YYYY",
                    "response": { "name": "NAISSANCE" },
                },
            ],
        },
        {
            "id": "question-k6c7mdcb",
            "componentType": "Question",
            "page": "36",
            "label": { "value": '"Quel est votre sexe ?"', "type": "VTL|MD" },
            "declarations": [
                {
                    "id": "k6cc1one",
                    "declarationType": "INSTRUCTION",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"Si vous répondez homme, alors la question 28 disparaîtra"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "components": [
                {
                    "id": "k6c7mdcb",
                    "componentType": "CheckboxOne",
                    "mandatory": false,
                    "page": "36",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "k3opdj10",
                            "page": "30",
                            "label": {
                                "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "k3opeux2",
                            "page": "33",
                            "label": {
                                "value": '"Description socio démo de "|| PRENOM ',
                                "type": "VTL|MD",
                            },
                        },
                    },
                    "options": [
                        { "value": "1", "label": { "value": '"Homme"', "type": "VTL|MD" } },
                        { "value": "2", "label": { "value": '"Femme"', "type": "VTL|MD" } },
                    ],
                    "response": { "name": "SEXE" },
                },
            ],
        },
        {
            "id": "k6c9b3d2",
            "componentType": "Subsequence",
            "goToPage": "37",
            "label": {
                "value":
                    "\"Sous module masqué par défaut, qui s'affiche lorsque l'individu coche majeur\"",
                "type": "VTL|MD",
            },
            "conditionFilter": { "value": '(MAJEUR="1")', "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "k3opdj10",
                    "page": "30",
                    "label": {
                        "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "k6c9b3d2",
                    "page": "37",
                    "label": {
                        "value":
                            "\"Sous module masqué par défaut, qui s'affiche lorsque l'individu coche majeur\"",
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "question-k6c9pbc3",
            "componentType": "Question",
            "page": "37",
            "label": {
                "value":
                    "\"Question masquée par défaut, qui s'affiche lorsque l'individu coche majeur\"",
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "kzfa7bm2",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"Si a coché Homme, la question 33 disparaitra"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "components": [
                {
                    "id": "k6c9pbc3",
                    "componentType": "Textarea",
                    "mandatory": false,
                    "page": "37",
                    "maxLength": 255,
                    "conditionFilter": { "value": '(MAJEUR="1")', "type": "VTL" },
                    "hierarchy": {
                        "sequence": {
                            "id": "k3opdj10",
                            "page": "30",
                            "label": {
                                "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "k6c9b3d2",
                            "page": "37",
                            "label": {
                                "value":
                                    "\"Sous module masqué par défaut, qui s'affiche lorsque l'individu coche majeur\"",
                                "type": "VTL|MD",
                            },
                        },
                    },
                    "response": { "name": "QMASQUEE" },
                },
            ],
        },
        {
            "id": "k6c971cz",
            "componentType": "Subsequence",
            "goToPage": "38",
            "label": {
                "value": '"Sous module affiché par défaut, filtré si l\'individu est un homme"',
                "type": "VTL|MD",
            },
            "conditionFilter": { "value": '(MAJEUR="1") and (isnull(SEXE) or SEXE="2")', "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "k3opdj10",
                    "page": "30",
                    "label": {
                        "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "k6c971cz",
                    "page": "38",
                    "label": {
                        "value": '"Sous module affiché par défaut, filtré si l\'individu est un homme"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "question-k6c9al86",
            "componentType": "Question",
            "page": "38",
            "label": {
                "value": '"Question affichée par défaut, filtrée si l\'individu est un homme"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "k6c9al86",
                    "componentType": "Textarea",
                    "mandatory": false,
                    "page": "38",
                    "maxLength": 255,
                    "conditionFilter": {
                        "value": '(MAJEUR="1") and (isnull(SEXE) or SEXE="2")',
                        "type": "VTL",
                    },
                    "hierarchy": {
                        "sequence": {
                            "id": "k3opdj10",
                            "page": "30",
                            "label": {
                                "value": '"IV - " || "Séquence personnalisée et comportant des filtres"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "k6c971cz",
                            "page": "38",
                            "label": {
                                "value":
                                    '"Sous module affiché par défaut, filtré si l\'individu est un homme"',
                                "type": "VTL|MD",
                            },
                        },
                    },
                    "response": { "name": "QFILTRE" },
                },
            ],
        },
        {
            "id": "l262oeox",
            "componentType": "Sequence",
            "page": "39",
            "label": {
                "value": '"V - " || "PERSO - Composition du ménage - boucle type logement"',
                "type": "VTL|MD",
            },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "l262oeox",
                    "page": "39",
                    "label": {
                        "value": '"V - " || "PERSO - Composition du ménage - boucle type logement"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "k6c75pyx",
            "componentType": "Subsequence",
            "page": "40",
            "goToPage": "40",
            "label": { "value": '"Description de votre ménage"', "type": "VTL|MD" },
            "declarations": [
                {
                    "id": "k6c7kiym",
                    "declarationType": "INSTRUCTION",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Nous allons maintenant décrire les personnes qui vivent avec " || CIVILITE || PRENOM ',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": { "value": "true", "type": "VTL" },
            "hierarchy": {
                "sequence": {
                    "id": "l262oeox",
                    "page": "39",
                    "label": {
                        "value": '"V - " || "PERSO - Composition du ménage - boucle type logement"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "k6c75pyx",
                    "page": "40",
                    "label": { "value": '"Description de votre ménage"', "type": "VTL|MD" },
                },
            },
        },
        {
            "id": "question-k6c748uq",
            "componentType": "Question",
            "page": "41",
            "label": {
                "value": '"Combien de personnes vivent dans votre logement, y compris vous ?"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "k6c748uq",
                    "componentType": "InputNumber",
                    "mandatory": false,
                    "page": "41",
                    "min": 0.0,
                    "max": 20.0,
                    "decimals": 0,
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "controls": [
                        {
                            "id": "k6c748uq-format-borne-inf-sup",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value": "not(not(isnull(NBPERS)) and (0>NBPERS or 20<NBPERS))",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value": '" La valeur doit être comprise entre 0 et 20."',
                                "type": "VTL|MD",
                            },
                        },
                        {
                            "id": "k6c748uq-format-decimal",
                            "typeOfControl": "FORMAT",
                            "criticality": "ERROR",
                            "control": {
                                "value": "not(not(isnull(NBPERS))  and round(NBPERS,0)<>NBPERS)",
                                "type": "VTL",
                            },
                            "errorMessage": {
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "hierarchy": {
                        "sequence": {
                            "id": "l262oeox",
                            "page": "39",
                            "label": {
                                "value":
                                    '"V - " || "PERSO - Composition du ménage - boucle type logement"',
                                "type": "VTL|MD",
                            },
                        },
                        "subSequence": {
                            "id": "k6c75pyx",
                            "page": "40",
                            "label": { "value": '"Description de votre ménage"', "type": "VTL|MD" },
                        },
                    },
                    "response": { "name": "NBPERS" },
                },
            ],
        },
    ],
    "suggesters": [
        {
            "name": "L_PAYS-1-2-0",
            "fields": [
                {
                    "name": "label",
                    "rules": ["[\\w]+"],
                    "language": "French",
                    "min": 3,
                    "stemmer": false,
                },
            ],
            "queryParser": {
                "type": "tokenized",
                "params": { "language": "French", "min": 3, "pattern": "[\\w.]+", "stemmer": false },
            },
            "version": 1,
        },
        {
            "name": "L_PCS_HOMMES-2-1-0",
            "fields": [
                {
                    "name": "label",
                    "rules": ["[\\w]+"],
                    "language": "French",
                    "min": 3,
                    "stemmer": false,
                    "synonyms": {
                        "accueil": ["ACCEUIL"],
                        "fabrication": ["FABRICANT"],
                        "abattoir": ["ABATOIR", "ABBATOIR", "ABATOIRE", "ABATTOIRE"],
                        "distribution": ["DISTRIBUTEUR"],
                        "échafaudage": ["ECHAFFAUDAGE"],
                        "alimentaires": ["ALIMANTAIRE"],
                        "ascenseur": ["ASCENCEUR", "ASSENCEUR"],
                        "ingénierie": ["INGENIEURIE", "INGENERIE", "INGIENERIE"],
                        "agroalimentaires": ["AGROALIMANTAIRE", "AGGROALIMANTAIRES"],
                        "URSSAF": ["URSAF", "URSAFF"],
                        "construction": ["CONSTRUCTEUR"],
                        "agroalimentaire": ["AGROALIMANTAIRE", "AGGROALIMANTAIRE"],
                        "ascenseurs": ["ASCENCEURS", "ASSENCEURS"],
                    },
                },
            ],
            "meloto": true,
            "stopWords": [
                "a",
                "au",
                "dans",
                "de",
                "des",
                "du",
                "en",
                "et",
                "la",
                "le",
                "ou",
                "sur",
                "d",
                "l",
                "aux",
                "dans",
                "un",
                "une",
                "pour",
                "avec",
                "chez",
                "par",
                "les",
            ],
            "queryParser": {
                "type": "tokenized",
                "params": { "language": "French", "min": 3, "pattern": "[\\w.]+", "stemmer": false },
            },
            "version": 1,
        },
    ],
    "variables": [
        {
            "name": "AGEPRENOM",
            "variableType": "CALCULATED",
            "expression": {
                "value": "2022 - cast(substr(cast(NAISSANCE,string),1,4),integer)",
                "type": "VTL",
            },
            "bindingDependencies": ["NAISSANCE"],
        },
        {
            "name": "NBADULTES",
            "variableType": "CALCULATED",
            "expression": { "value": "nvl(NBPERS,0) - nvl($NBENFANT$,0)", "type": "VTL" },
            "bindingDependencies": ["NBPERS"],
        },
        {
            "name": "CIVILITE",
            "variableType": "CALCULATED",
            "expression": {
                "value":
                    'if (nvl(SEXE,"") = "1") then "monsieur" else if (nvl(SEXE,"") = "2") then "madame" else ""',
                "type": "VTL",
            },
            "bindingDependencies": ["SEXE"],
        },
        {
            "name": "TOTAL_TAB",
            "variableType": "CALCULATED",
            "expression": {
                "value":
                    "nvl(TABLEAU1A1M11,0)+nvl(TABLEAU1A1M21,0)+nvl(TABLEAU1A1M31,0)+nvl(TABLEAU1A1M41,0)+ nvl(TABLEAU1A1M51,0)",
                "type": "VTL",
            },
            "bindingDependencies": [
                "TABLEAU1A1M11",
                "TABLEAU1A1M21",
                "TABLEAU1A1M31",
                "TABLEAU1A1M41",
                "TABLEAU1A1M51",
            ],
        },
        {
            "name": "SOMME_TIC",
            "variableType": "CALCULATED",
            "expression": {
                "value":
                    "nvl(TABLEAUTIC11,0)+nvl(TABLEAUTIC21,0)+nvl(TABLEAUTIC31,0)+ nvl(TABLEAUTIC41,0)",
                "type": "VTL",
            },
            "bindingDependencies": ["TABLEAUTIC11", "TABLEAUTIC21", "TABLEAUTIC31", "TABLEAUTIC41"],
        },
        {
            "name": "TEXTECOURT",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TEXTELONG",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "INTEGER",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "FLOAT",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "UNIT",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "DATE",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "DATEAM",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "DATEA",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "DUREE",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "BOOLEEN",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "RADIO",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "CHECKBOX",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "IMAGE",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "DROPDOWN",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "SUGGGEO",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "SUGGPCS",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_B1",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_B2",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_B3",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_B4",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_B5",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_B6",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_B7",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_B8",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ON1",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ON2",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ON3",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ON4",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ON5",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ONR1",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ONR2",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ONR3",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ONR4",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ONR5",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ONR6",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ONR7",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QCM_ONR8",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAUTIC11",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAUTIC21",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAUTIC31",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAUTIC41",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A1M11",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A1M21",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A1M31",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A1M41",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A1M51",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M11",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M21",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M31",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M41",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M51",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M12",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M22",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M32",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M42",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M52",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M13",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M23",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M33",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M43",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1A3M53",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A11",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A21",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A31",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A41",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A51",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A61",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A71",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A81",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A12",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A22",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A32",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A42",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A52",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A62",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A72",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A82",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A13",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A23",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A33",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A43",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A53",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A63",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A73",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A83",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A14",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A24",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A34",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A44",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A54",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A64",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A74",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A84",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A15",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A25",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A35",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A45",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A55",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A65",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A75",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU2A85",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1AH1M11",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1AH1M21",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1AH1M31",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1AH1M41",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1AH1M51",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAU1AH1M61",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "TABLEAUDYN1",
            "variableType": "COLLECTED",
            "values": { "COLLECTED": [] },
        },
        {
            "name": "TABLEAUDYN2",
            "variableType": "COLLECTED",
            "values": { "COLLECTED": [] },
        },
        {
            "name": "PRENOM",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "EMAIL",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "MAJEUR",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "NAISSANCE",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "SEXE",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QMASQUEE",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "QFILTRE",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "NBPERS",
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "name": "FILTER_RESULT_TEXTECOURT",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_TEXTELONG",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_INTEGER",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_FLOAT",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_UNIT",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_DATE",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_DATEAM",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_DATEA",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_BOOLEEN",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_RADIO",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_CHECKBOX",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_IMAGE",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_DROPDOWN",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_SUGGGEO",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_SUGGPCS",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_QCM_B",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_QCM_ON",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_QCM_ONR",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_TABLEAUTIC",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_TABLEAU1A1M",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_TABLEAU1A3M",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_TABLEAU2A",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_TABLEAU1AH1M",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_TABLEAUDYN",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_PRENOM",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_EMAIL",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_MAJEUR",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_NAISSANCE",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_SEXE",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
        {
            "name": "FILTER_RESULT_QMASQUEE",
            "variableType": "CALCULATED",
            "expression": { "value": '(MAJEUR="1")', "type": "VTL" },
            "bindingDependencies": ["MAJEUR"],
        },
        {
            "name": "FILTER_RESULT_QFILTRE",
            "variableType": "CALCULATED",
            "expression": { "value": '(MAJEUR="1") and (isnull(SEXE) or SEXE="2")', "type": "VTL" },
            "bindingDependencies": ["MAJEUR", "SEXE"],
        },
        {
            "name": "FILTER_RESULT_NBPERS",
            "variableType": "CALCULATED",
            "expression": { "value": "true", "type": "VTL" },
        },
    ],
    "cleaning": {
        "MAJEUR": {
            "QMASQUEE": '(MAJEUR="1")',
            "QFILTRE": '(MAJEUR="1") and (isnull(SEXE) or SEXE="2")',
        },
        "SEXE": { "QFILTRE": '(MAJEUR="1") and (isnull(SEXE) or SEXE="2")' },
    },
    "resizing": {},
} as any; //TODO remove this any;
