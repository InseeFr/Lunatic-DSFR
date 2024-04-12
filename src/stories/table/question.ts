import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "1",
    "variables": [
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
                "EDITED": null,
                "FORCED": null,
                "INPUTTED": null,
                "PREVIOUS": null,
            },
            "name": "TABLEAUCLA11",
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
            "name": "TABLEAUCLA21",
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
            "name": "TABLEAUCLA31",
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
            "name": "TABLEAUCLA12",
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
            "name": "TABLEAUCLA22",
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
            "name": "TABLEAUCLA32",
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
            "name": "TABLEAUCLA13",
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
            "name": "TABLEAUCLA23",
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
            "name": "TABLEAUCLA33",
        },
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "name": "FILTER_RESULT_LIBELLEDUT",
        },
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "name": "FILTER_RESULT_TABLEAUCLA",
        },
    ],
    "components": [
        {
            "componentType": "Question",
            "id": "idQuestion",
            "page": "1",
            "label": {
                "type": "VTL|MD",
                "value": '"Label de la Question"',
            },
            "description": {
                "type": "VTL|MD",
                "value": '"Description de la question"',
            },
            "declarations": [
                {
                    "declarationType": "HELP",
                    "id": "idQuestion-help1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label de la déclaration en position : `BEFORE_QUESTION_TEXT`"',
                    },
                    "position": "BEFORE_QUESTION_TEXT",
                },
                {
                    "declarationType": "HELP",
                    "id": "idQuestion-help3",
                    "label": {
                        "type": "VTL|MD",
                        "value":
                            '"Label de la déclaration en position  en position : `AFTER_QUESTION_TEXT`"',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
            ],
            "components": [
                {
                    "componentType": "Table",
                    "controls": [
                        {
                            "criticality": "INFO",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value": '" La valeur doit être comprise entre 0 et 9999."',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value":
                                    "not(not(isnull(TABLEAUCLA33)) and (0>TABLEAUCLA33 or 9999<TABLEAUCLA33))",
                            },
                            "id": "luwhnbxk-RDOP-luwhcilc-format-borne-inf-sup",
                        },
                        {
                            "criticality": "INFO",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value":
                                    "not(not(isnull(TABLEAUCLA33))  and round(TABLEAUCLA33,0)<>TABLEAUCLA33)",
                            },
                            "id": "luwhnbxk-RDOP-luwhcilc-format-decimal",
                        },
                        {
                            "criticality": "INFO",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value": '" La valeur doit être comprise entre 0 et 9999."',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value":
                                    "not(not(isnull(TABLEAUCLA23)) and (0>TABLEAUCLA23 or 9999<TABLEAUCLA23))",
                            },
                            "id": "luwhnbxk-RDOP-luwh4tva-format-borne-inf-sup",
                        },
                        {
                            "criticality": "INFO",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value":
                                    "not(not(isnull(TABLEAUCLA23))  and round(TABLEAUCLA23,0)<>TABLEAUCLA23)",
                            },
                            "id": "luwhnbxk-RDOP-luwh4tva-format-decimal",
                        },
                        {
                            "criticality": "INFO",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value": '" La valeur doit être comprise entre 0 et 9999."',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value":
                                    "not(not(isnull(TABLEAUCLA13)) and (0>TABLEAUCLA13 or 9999<TABLEAUCLA13))",
                            },
                            "id": "luwhnbxk-RDOP-luwh7btb-format-borne-inf-sup",
                        },
                        {
                            "criticality": "INFO",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value":
                                    '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value":
                                    "not(not(isnull(TABLEAUCLA13))  and round(TABLEAUCLA13,0)<>TABLEAUCLA13)",
                            },
                            "id": "luwhnbxk-RDOP-luwh7btb-format-decimal",
                        },
                    ],
                    "positioning": "HORIZONTAL",
                    "hierarchy": {
                        "sequence": {
                            "id": "luwgeoe5",
                            "page": "1",
                            "label": {
                                "type": "VTL|MD",
                                "value": '"I - " || "Sequence"',
                            },
                        },
                    },
                    "header": [
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": "",
                            },
                        },
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Domaines"',
                            },
                        },
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Activité"',
                            },
                        },
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Chiffre d\'affaire"',
                            },
                        },
                    ],
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "luwhnbxk",
                    "page": "1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"➡ 2. " || "Tableau classique"',
                    },
                    "body": [
                        [
                            {
                                "label": {
                                    "type": "VTL|MD",
                                    "value": '"Libelle 1"',
                                },
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TABLEAUCLA11",
                                },
                                "id": "luwhnbxk-RDOP-luwhcrpg",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TABLEAUCLA12",
                                },
                                "id": "luwhnbxk-RDOP-luwhnkls",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "InputNumber",
                                "unit": "€",
                                "min": 0.0,
                                "max": 9999.0,
                                "response": {
                                    "name": "TABLEAUCLA13",
                                },
                                "decimals": 0,
                                "id": "luwhnbxk-RDOP-luwh7btb",
                            },
                        ],
                        [
                            {
                                "label": {
                                    "type": "VTL|MD",
                                    "value": '"Libelle 2"',
                                },
                                "value": "2",
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TABLEAUCLA21",
                                },
                                "id": "luwhnbxk-RDOP-luwhmbp1",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TABLEAUCLA22",
                                },
                                "id": "luwhnbxk-RDOP-luwhlejc",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "InputNumber",
                                "unit": "€",
                                "min": 0.0,
                                "max": 9999.0,
                                "response": {
                                    "name": "TABLEAUCLA23",
                                },
                                "decimals": 0,
                                "id": "luwhnbxk-RDOP-luwh4tva",
                            },
                        ],
                        [
                            {
                                "label": {
                                    "type": "VTL|MD",
                                    "value": '"Libelle 3"',
                                },
                                "value": "3",
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TABLEAUCLA31",
                                },
                                "id": "luwhnbxk-RDOP-luwhalhn",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TABLEAUCLA32",
                                },
                                "id": "luwhnbxk-RDOP-luwhd3mk",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "InputNumber",
                                "unit": "€",
                                "min": 0.0,
                                "max": 9999.0,
                                "response": {
                                    "name": "TABLEAUCLA33",
                                },
                                "decimals": 0,
                                "id": "luwhnbxk-RDOP-luwhcilc",
                            },
                        ],
                    ],
                    "mandatory": false,
                },
            ],
        },
    ],
    "pagination": "question",
    "resizing": {},
    "label": {
        "type": "VTL|MD",
        "value": "Test-Dylan",
    },
    "lunaticModelVersion": "2.5.0",
    "modele": "TESTDYLAN",
    "enoCoreVersion": "2.7.1",
    "generatingDate": "06-03-2024 12:46:44",
    "missing": false,
    "id": "lsvuvtbg",
} as any; //TODO remove any
