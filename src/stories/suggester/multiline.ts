import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "id": "lyphhj89",
    "label": {
        "type": "VTL|MD",
        "value": "DSFR  - tableaux dynamiques issue 1059",
    },
    "modele": "DSFRCOMPOS",
    "maxPage": "3",
    "resizing": {},
    "variables": [
        {
            "name": "SUGG",
            "values": {
                "COLLECTED": [],
            },
            "dimension": 1,
            "variableType": "COLLECTED",
            "iterationReference": "lsvppebo",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "SUGGESTER_SUGG_LABEL",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "SUGGESTER_QUELESTLEP_LABEL",
        },

        {
            "name": "CA",
            "values": {
                "COLLECTED": [],
            },
            "dimension": 1,
            "variableType": "COLLECTED",
            "iterationReference": "lsvppebo",
        },
        {
            "name": "CA2",
            "values": {
                "COLLECTED": [],
            },
            "dimension": 1,
            "variableType": "COLLECTED",
            "iterationReference": "lsvppebo",
        },
        {
            "name": "QUELESTLEP",
            "values": {
                "COLLECTED": null,
            },
            "dimension": 0,
            "variableType": "COLLECTED",
        },
        {
            "name": "FILTER_RESULT_TABESTANP",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "variableType": "CALCULATED",
        },
        {
            "name": "FILTER_RESULT_SUGG_HORSTAB",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "variableType": "CALCULATED",
        },
    ],
    "components": [
        {
            "id": "question-lsvppebo",
            "page": "1",
            "label": {
                "type": "VTL|MD",
                "value": '"1\\. " || "Tableau dynamique type Estanp 10 lignes max"',
            },
            "components": [
                {
                    "id": "lsvppebo",
                    "page": "2",
                    "lines": {
                        "max": {
                            "type": "VTL",
                            "value": "10",
                        },
                        "min": {
                            "type": "VTL",
                            "value": "1",
                        },
                    },
                    "header": [
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Libellé produit via suggester"',
                            },
                        },
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Montant CA"',
                            },
                        },
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Montant CA export"',
                            },
                        },
                    ],
                    "controls": [
                        {
                            "id": "lsvppebo-RDOP-lyphj3dg-format-borne-inf-sup",
                            "type": "SIMPLE",
                            "control": {
                                "type": "VTL",
                                "value": "not(not(isnull(CA)) and (0>CA or 100000<CA))",
                            },
                            "criticality": "ERROR",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value": '" La valeur doit être comprise entre 0 et 100000."',
                            },
                            "typeOfControl": "FORMAT",
                        },
                        {
                            "id": "lsvppebo-RDOP-lyphj3dg-format-decimal",
                            "type": "SIMPLE",
                            "control": {
                                "type": "VTL",
                                "value": "not(not(isnull(CA))  and round(CA,0)<>CA)",
                            },
                            "criticality": "ERROR",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                            },
                            "typeOfControl": "FORMAT",
                        },
                        {
                            "id": "lsvppebo-RDOP-lyphglrc-format-borne-inf-sup",
                            "type": "SIMPLE",
                            "control": {
                                "type": "VTL",
                                "value": "not(not(isnull(CA2)) and (0>CA2 or 100000<CA2))",
                            },
                            "criticality": "ERROR",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value": '" La valeur doit être comprise entre 0 et 100000."',
                            },
                            "typeOfControl": "FORMAT",
                        },
                        {
                            "id": "lsvppebo-RDOP-lyphglrc-format-decimal",
                            "type": "SIMPLE",
                            "control": {
                                "type": "VTL",
                                "value": "not(not(isnull(CA2))  and round(CA2,0)<>CA2)",
                            },
                            "criticality": "ERROR",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                            },
                            "typeOfControl": "FORMAT",
                        },
                    ],
                    "mandatory": false,
                    "components": [
                        {
                            "id": "lsvppebo-RDOP-lyphsg13",
                            "response": {
                                "name": "SUGG",
                            },
                            "storeName": "L_DECHETS",
                            "componentType": "Suggester",
                            "optionResponses": [
                                {
                                    "name": "SUGGESTER_SUGG_LABEL",
                                    "attribute": "label",
                                },
                            ],
                        },
                        {
                            "id": "lsvppebo-RDOP-lyphj3dg",
                            "max": 100000.0,
                            "min": 0.0,
                            "unit": "k€",
                            "decimals": 0,
                            "response": {
                                "name": "CA",
                            },
                            "componentType": "InputNumber",
                        },
                        {
                            "id": "lsvppebo-RDOP-lyphglrc",
                            "max": 100000.0,
                            "min": 0.0,
                            "unit": "k€",
                            "decimals": 0,
                            "response": {
                                "name": "CA2",
                            },
                            "componentType": "InputNumber",
                        },
                    ],
                    "positioning": "HORIZONTAL",
                    "componentType": "RosterForLoop",
                },
            ],
            "declarations": [
                {
                    "id": "lyphddyi",
                    "label": {
                        "type": "VTL|MD",
                        "value":
                            '"Tester la saisie de DEC et choisir vente de biens déchets de matières plastiques etc."',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                    "declarationType": "HELP",
                },
            ],
            "componentType": "Question",
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
        },
        {
            "id": "question-lxugy742",
            "page": "2",
            "label": {
                "type": "VTL|MD",
                "value": '"2\\. " || "Quel est le produit ?"',
            },
            "components": [
                {
                    "id": "lxugy742",
                    "page": "3",
                    "response": {
                        "name": "QUELESTLEP",
                    },
                    "mandatory": false,
                    "storeName": "L_DECHETS",
                    "componentType": "Suggester",
                    "optionResponses": [
                        {
                            "name": "SUGGESTER_QUELESTLEP_LABEL",
                            "attribute": "label",
                        },
                    ],
                },
            ],
            "declarations": [
                {
                    "id": "lyphoyb2",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Tester la saisie de DEC"',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                    "declarationType": "HELP",
                },
            ],
            "componentType": "Question",
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
        },
        {
            "id": "lt72r9cn",
            "page": "3",
            "label": {
                "type": "VTL|MD",
                "value": '"II - " || "FIN"',
            },
            "componentType": "Sequence",
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
        },
    ],
    "pagination": "question",
    "suggesters": [
        {
            "name": "L_DECHETS",
            "fields": [
                {
                    "min": 3,
                    "name": "id",
                    "rules": ["[\\w]+"],
                    "stemmer": false,
                    "language": "French",
                },
                {
                    "min": 3,
                    "name": "label",
                    "rules": ["[\\w]+"],
                    "stemmer": false,
                    "language": "French",
                },
                {
                    "min": 3,
                    "name": "nc",
                    "rules": ["[\\w]+"],
                    "stemmer": false,
                    "language": "French",
                },
            ],
            "version": 1,
            "queryParser": {
                "type": "tokenized",
                "params": {
                    "min": 3,
                    "pattern": "[\\w.]+",
                    "stemmer": false,
                    "language": "French",
                },
            },
        },
    ],
    "componentType": "Questionnaire",
    "enoCoreVersion": "3.23.8-SNAPSHOT",
    "generatingDate": "17-07-2024 06:57:46",
    "lunaticModelVersion": "3.12.0",
};
