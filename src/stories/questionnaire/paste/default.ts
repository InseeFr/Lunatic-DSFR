import type { LunaticData, LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": { "AGE": { "DIVERS": "(SUM_MAJEUR > 0)" } },
    "componentType": "Questionnaire",
    "variables": [
        {
            "variableType": "CALCULATED",
            "bindingDependencies": ["AGE"],
            "expression": {
                "type": "VTL",
                "value": "if nvl(AGE,0) > 17 then 1 else 0",
            },
            "name": "IND_MAJEUR",
            "shapeFrom": "PRENOM",
        },
        {
            "variableType": "CALCULATED",
            "bindingDependencies": ["IND_MAJEUR", "AGE"],
            "expression": { "type": "VTL", "value": "sum(IND_MAJEUR)" },
            "name": "SUM_MAJEUR",
        },
        {
            "variableType": "CALCULATED",
            "bindingDependencies": ["AGE"],
            "expression": { "type": "VTL", "value": "sum(AGE)" },
            "name": "SUM_AGE",
        },
        {
            "variableType": "CALCULATED",
            "bindingDependencies": ["AGE"],
            "expression": { "type": "VTL", "value": "min(AGE)" },
            "name": "MIN_AGE",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
                "EDITED": null,
                "FORCED": null,
                "INPUTTED": null,
                "PREVIOUS": null,
            },
            "name": "NB",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": [],
                "EDITED": [],
                "FORCED": [],
                "INPUTTED": [],
                "PREVIOUS": [],
            },
            "name": "PRENOM",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": [],
                "EDITED": [],
                "FORCED": [],
                "INPUTTED": [],
                "PREVIOUS": [],
            },
            "name": "QCM1",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": [],
                "EDITED": [],
                "FORCED": [],
                "INPUTTED": [],
                "PREVIOUS": [],
            },
            "name": "QCM2",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": [],
                "EDITED": [],
                "FORCED": [],
                "INPUTTED": [],
                "PREVIOUS": [],
            },
            "name": "QCM3",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": [],
                "EDITED": [],
                "FORCED": [],
                "INPUTTED": [],
                "PREVIOUS": [],
            },
            "name": "AGE",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
                "EDITED": null,
                "FORCED": null,
                "INPUTTED": null,
                "PREVIOUS": null,
            },
            "name": "DIVERS",
        },
        {
            "variableType": "CALCULATED",
            "expression": { "type": "VTL", "value": "true" },
            "name": "FILTER_RESULT_NB",
        },
        {
            "variableType": "CALCULATED",
            "expression": { "type": "VTL", "value": "true" },
            "name": "FILTER_RESULT_PRENOM",
            "shapeFrom": "PRENOM",
        },
        {
            "variableType": "CALCULATED",
            "expression": { "type": "VTL", "value": "true" },
            "name": "FILTER_RESULT_QCM",
        },
        {
            "variableType": "CALCULATED",
            "expression": { "type": "VTL", "value": "true" },
            "name": "FILTER_RESULT_AGE",
            "shapeFrom": "PRENOM",
        },
        {
            "variableType": "CALCULATED",
            "bindingDependencies": ["SUM_MAJEUR"],
            "expression": { "type": "VTL", "value": "(SUM_MAJEUR > 0)" },
            "name": "FILTER_RESULT_DIVERS",
        },
    ],
    "components": [
        {
            "componentType": "Sequence",
            "hierarchy": {
                "sequence": {
                    "id": "ksyjs7vy",
                    "page": "1",
                    "label": { "type": "VTL|MD", "value": '"I - " || "S0"' },
                },
            },
            "conditionFilter": { "type": "VTL", "value": "true" },
            "id": "ksyjs7vy",
            "page": "1",
            "label": { "type": "VTL|MD", "value": '"I - " || "S0"' },
        },
        {
            "componentType": "Question",
            "components": [
                {
                    "componentType": "InputNumber",
                    "min": 0.0,
                    "controls": [
                        {
                            "criticality": "ERROR",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value": '" La valeur doit être comprise entre 0 et 10."',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value": "not(not(isnull(NB)) and (0>NB or 10<NB))",
                            },
                            "id": "kze792d8-format-borne-inf-sup",
                        },
                        {
                            "criticality": "ERROR",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value": "not(not(isnull(NB))  and round(NB,0)<>NB)",
                            },
                            "id": "kze792d8-format-decimal",
                        },
                    ],
                    "max": 10.0,
                    "response": { "name": "NB" },
                    "decimals": 0,
                    "hierarchy": {
                        "sequence": {
                            "id": "ksyjs7vy",
                            "page": "1",
                            "label": { "type": "VTL|MD", "value": '"I - " || "S0"' },
                        },
                    },
                    "conditionFilter": { "type": "VTL", "value": "true" },
                    "id": "kze792d8",
                    "page": "2",
                    "mandatory": false,
                },
            ],
            "id": "question-kze792d8",
            "page": "2",
            "label": { "type": "VTL|MD", "value": '"➡ 1. " || "NB"' },
        },
        {
            "paginatedLoop": false,
            "componentType": "Loop",
            "loopDependencies": ["NB"],
            "components": [
                {
                    "componentType": "Subsequence",
                    "goToPage": "3",
                    "hierarchy": {
                        "sequence": {
                            "id": "ksyjs7vy",
                            "page": "1",
                            "label": { "type": "VTL|MD", "value": '"I - " || "S0"' },
                        },
                        "subSequence": {
                            "id": "ksynhpl3",
                            "page": "3",
                            "label": { "type": "VTL|MD", "value": '"Habitants"' },
                        },
                    },
                    "conditionFilter": { "type": "VTL", "value": "true" },
                    "id": "ksynhpl3",
                    "page": "3",
                    "label": { "type": "VTL|MD", "value": '"Habitants"' },
                },
                {
                    "componentType": "Question",
                    "components": [
                        {
                            "componentType": "Input",
                            "controls": [
                                {
                                    "criticality": "INFO",
                                    "errorMessage": {
                                        "type": "VTL|MD",
                                        "value": '"Prenom est vide - controle nvl"',
                                    },
                                    "typeOfControl": "CONSISTENCY",
                                    "control": {
                                        "type": "VTL",
                                        "value": 'not(nvl(PRENOM,"")="")',
                                    },
                                    "id": "ksyjvi40-CI-0",
                                },
                                {
                                    "criticality": "INFO",
                                    "errorMessage": {
                                        "type": "VTL|MD",
                                        "value": '"PRénom vaut A"',
                                    },
                                    "typeOfControl": "CONSISTENCY",
                                    "control": { "type": "VTL", "value": 'not(PRENOM = "A")' },
                                    "id": "ksyjvi40-CI-1",
                                },
                            ],
                            "response": { "name": "PRENOM" },
                            "hierarchy": {
                                "sequence": {
                                    "id": "ksyjs7vy",
                                    "page": "1",
                                    "label": { "type": "VTL|MD", "value": '"I - " || "S0"' },
                                },
                                "subSequence": {
                                    "id": "ksynhpl3",
                                    "page": "3",
                                    "label": { "type": "VTL|MD", "value": '"Habitants"' },
                                },
                            },
                            "conditionFilter": { "type": "VTL", "value": "true" },
                            "id": "ksyjvi40",
                            "page": "3",
                            "mandatory": false,
                            "maxLength": 249,
                        },
                    ],
                    "id": "question-ksyjvi40",
                    "page": "3",
                    "label": { "type": "VTL|MD", "value": '"➡ 2. " || "prénom"' },
                    "declarations": [
                        {
                            "declarationType": "HELP",
                            "id": "l7uj49ok",
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Tester Prénom vide et Prénom = A"',
                            },
                            "position": "AFTER_QUESTION_TEXT",
                        },
                    ],
                },
                {
                    "componentType": "Question",
                    "components": [
                        {
                            "componentType": "CheckboxGroup",
                            "hierarchy": {
                                "sequence": {
                                    "id": "ksyjs7vy",
                                    "page": "1",
                                    "label": { "type": "VTL|MD", "value": '"I - " || "S0"' },
                                },
                                "subSequence": {
                                    "id": "ksynhpl3",
                                    "page": "3",
                                    "label": { "type": "VTL|MD", "value": '"Habitants"' },
                                },
                            },
                            "responses": [
                                {
                                    "response": { "name": "QCM1" },
                                    "id": "lqaypaka-QOP-lqayrwnz",
                                    "label": { "type": "VTL|MD", "value": '"a"' },
                                },
                                {
                                    "response": { "name": "QCM2" },
                                    "id": "lqaypaka-QOP-lqayksoi",
                                    "label": { "type": "VTL|MD", "value": '"b"' },
                                },
                                {
                                    "response": { "name": "QCM3" },
                                    "id": "lqaypaka-QOP-lqaysmb0",
                                    "label": { "type": "VTL|MD", "value": '"c"' },
                                },
                            ],
                            "conditionFilter": { "type": "VTL", "value": "true" },
                            "id": "lqaypaka",
                            "page": "3",
                        },
                    ],
                    "id": "question-lqaypaka",
                    "page": "3",
                    "label": { "type": "VTL|MD", "value": '"➡ 3. " || "QCM"' },
                    "declarations": [
                        {
                            "declarationType": "HELP",
                            "id": "lqay9trz",
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Tester Prénom vide et Prénom = A"',
                            },
                            "position": "AFTER_QUESTION_TEXT",
                        },
                    ],
                },
            ],
            "depth": 1,
            "hierarchy": {
                "sequence": {
                    "id": "ksyjs7vy",
                    "page": "1",
                    "label": { "type": "VTL|MD", "value": '"I - " || "S0"' },
                },
            },
            "conditionFilter": { "type": "VTL", "value": "true" },
            "id": "ksykfdm9",
            "page": "3",
            "lines": {
                "min": { "type": "VTL", "value": "nvl(NB,1)" },
                "max": { "type": "VTL", "value": "nvl(NB,1)" },
            },
        },
        {
            "componentType": "Sequence",
            "hierarchy": {
                "sequence": {
                    "id": "ksyniqzx",
                    "page": "4",
                    "label": { "type": "VTL|MD", "value": '"II - " || "S1"' },
                },
            },
            "conditionFilter": { "type": "VTL", "value": "true" },
            "id": "ksyniqzx",
            "page": "4",
            "label": { "type": "VTL|MD", "value": '"II - " || "S1"' },
        },
        {
            "paginatedLoop": true,
            "componentType": "Loop",
            "loopDependencies": ["PRENOM"],
            "components": [
                {
                    "componentType": "Subsequence",
                    "goToPage": "5.1",
                    "hierarchy": {
                        "sequence": {
                            "id": "ksyniqzx",
                            "page": "4",
                            "label": { "type": "VTL|MD", "value": '"II - " || "S1"' },
                        },
                        "subSequence": {
                            "id": "ksyjxw3a",
                            "page": "5.1",
                            "label": { "type": "VTL|MD", "value": '"Les ages"' },
                        },
                    },
                    "conditionFilter": { "type": "VTL", "value": "true" },
                    "id": "ksyjxw3a",
                    "label": { "type": "VTL|MD", "value": '"Les ages"' },
                },
                {
                    "componentType": "Question",
                    "components": [
                        {
                            "componentType": "InputNumber",
                            "min": 0.0,
                            "controls": [
                                {
                                    "criticality": "ERROR",
                                    "errorMessage": {
                                        "type": "VTL|MD",
                                        "value": '" La valeur doit être comprise entre 0 et 100."',
                                    },
                                    "typeOfControl": "FORMAT",
                                    "control": {
                                        "type": "VTL",
                                        "value": "not(not(isnull(AGE)) and (0>AGE or 100<AGE))",
                                    },
                                    "id": "ksyke448-format-borne-inf-sup",
                                },
                                {
                                    "criticality": "ERROR",
                                    "errorMessage": {
                                        "type": "VTL|MD",
                                        "value":
                                            '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                                    },
                                    "typeOfControl": "FORMAT",
                                    "control": {
                                        "type": "VTL",
                                        "value": "not(not(isnull(AGE))  and round(AGE,0)<>AGE)",
                                    },
                                    "id": "ksyke448-format-decimal",
                                },
                                {
                                    "criticality": "INFO",
                                    "errorMessage": {
                                        "type": "VTL|MD",
                                        "value": '"Age est vide"',
                                    },
                                    "typeOfControl": "CONSISTENCY",
                                    "control": { "type": "VTL", "value": "not(isnull(AGE))" },
                                    "id": "ksyke448-CI-0",
                                },
                            ],
                            "max": 100.0,
                            "response": { "name": "AGE" },
                            "decimals": 0,
                            "hierarchy": {
                                "sequence": {
                                    "id": "ksyniqzx",
                                    "page": "4",
                                    "label": { "type": "VTL|MD", "value": '"II - " || "S1"' },
                                },
                                "subSequence": {
                                    "id": "ksyjxw3a",
                                    "page": "5.1",
                                    "label": { "type": "VTL|MD", "value": '"Les ages"' },
                                },
                            },
                            "conditionFilter": { "type": "VTL", "value": "true" },
                            "id": "ksyke448",
                            "page": "5.1",
                            "mandatory": false,
                        },
                    ],
                    "id": "question-ksyke448",
                    "page": "5.1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"➡ 4. " || "Age de l\'individu : " || PRENOM ',
                    },
                    "declarations": [
                        {
                            "declarationType": "HELP",
                            "id": "ktwsl4qu",
                            "label": {
                                "type": "VTL|MD",
                                "value": '"AGE vaut : " || cast(AGE,string) ',
                            },
                            "position": "AFTER_QUESTION_TEXT",
                        },
                        {
                            "declarationType": "HELP",
                            "id": "l7g2enbf",
                            "label": {
                                "type": "VTL|MD",
                                "value": '"IND_MAJEUR :" || cast(IND_MAJEUR,string) ',
                            },
                            "position": "AFTER_QUESTION_TEXT",
                        },
                    ],
                },
            ],
            "depth": 1,
            "hierarchy": {
                "sequence": {
                    "id": "ksyniqzx",
                    "page": "4",
                    "label": { "type": "VTL|MD", "value": '"II - " || "S1"' },
                },
            },
            "conditionFilter": { "type": "VTL", "value": "true" },
            "id": "ksynkaoo",
            "page": "5",
            "maxPage": "1",
            "iterations": { "type": "VTL", "value": "count(PRENOM)" },
        },
        {
            "componentType": "Subsequence",
            "goToPage": "6",
            "hierarchy": {
                "sequence": {
                    "id": "ksyniqzx",
                    "page": "4",
                    "label": { "type": "VTL|MD", "value": '"II - " || "S1"' },
                },
                "subSequence": {
                    "id": "ku2pnlmr",
                    "page": "6",
                    "label": { "type": "VTL|MD", "value": '"Affichage de qq var" "' },
                },
            },
            "conditionFilter": { "type": "VTL", "value": "true" },
            "id": "ku2pnlmr",
            "page": "6",
            "label": { "type": "VTL|MD", "value": '"Affichage de qq var" "' },
            "declarations": [
                {
                    "declarationType": "HELP",
                    "id": "l7t4dzz2",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Affichage du nb de majeurs : " || cast(SUM_MAJEUR,string) ',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
                {
                    "declarationType": "HELP",
                    "id": "l806u4c8",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Affichage du somme age : " || cast(SUM_AGE,string) ',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
                {
                    "declarationType": "HELP",
                    "id": "lg6mo14c",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Affichage du min des ages sans cast: " || cast(MIN_AGE,string) ',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
            ],
        },
        {
            "componentType": "Question",
            "components": [
                {
                    "componentType": "Input",
                    "response": { "name": "DIVERS" },
                    "hierarchy": {
                        "sequence": {
                            "id": "ksyniqzx",
                            "page": "4",
                            "label": { "type": "VTL|MD", "value": '"II - " || "S1"' },
                        },
                        "subSequence": {
                            "id": "ku2pnlmr",
                            "page": "6",
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Affichage de qq var" "',
                            },
                        },
                    },
                    "conditionFilter": { "type": "VTL", "value": "(SUM_MAJEUR > 0)" },
                    "id": "ku2pxugf",
                    "page": "7",
                    "mandatory": false,
                    "maxLength": 249,
                },
            ],
            "id": "question-ku2pxugf",
            "page": "7",
            "label": { "type": "VTL|MD", "value": '"➡ 5. " || "divers"' },
        },
        {
            "componentType": "Sequence",
            "hierarchy": {
                "sequence": {
                    "id": "l7yz0fe5",
                    "page": "8",
                    "label": { "type": "VTL|MD", "value": '"III - " || "S3"' },
                },
            },
            "conditionFilter": { "type": "VTL", "value": "true" },
            "id": "l7yz0fe5",
            "page": "8",
            "label": { "type": "VTL|MD", "value": '"III - " || "S3"' },
            "declarations": [
                {
                    "declarationType": "HELP",
                    "id": "l7yyye9y",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Affichage de la somme des ages : " || cast(SUM_AGE,string) ',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
                {
                    "declarationType": "HELP",
                    "id": "l7yz5mgk",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Affichage du nb de majeurs : " || cast(SUM_MAJEUR,string) ',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
                {
                    "declarationType": "HELP",
                    "id": "l7yyrp0q",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Affichage du min des ages : " || cast(MIN_AGE,string) ',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
            ],
        },
    ],
    "pagination": "question",
    "resizing": {
        "NB": {
            "variables": ["QCM2", "QCM1", "QCM3", "PRENOM"],
            "size": "nvl(NB,1)",
        },
        "PRENOM": { "variables": ["AGE"], "size": "count(PRENOM)" },
    },
    "label": {
        "type": "VTL|MD",
        "value": "QNONREG - sum, min dans une boucle et sur controle prénom et test filtre occurrence",
    },
    "lunaticModelVersion": "3.8.0",
    "modele": "TESTSURSUM",
    "enoCoreVersion": "3.21.0-SNAPSHOT",
    "generatingDate": "02-05-2024 13:50:11",
    "id": "lb3ei722",
    "maxPage": "8",
};

export const data: LunaticData = {
    "COLLECTED": { "NAME": { "COLLECTED": "Bob Dylan" } },
};
