import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "3",
    "variables": [
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TABLEAUCLA11",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TABLEAUCLA21",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TABLEAUCLA31",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TABLEAUCLA12",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TABLEAUCLA22",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TABLEAUCLA32",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TABLEAUCLA13",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TABLEAUCLA23",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TABLEAUCLA33",
        },

        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB1_TABLEAUCLA11",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB1_TABLEAUCLA21",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB1_TABLEAUCLA31",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB1_TABLEAUCLA12",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB1_TABLEAUCLA22",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB1_TABLEAUCLA32",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB1_TABLEAUCLA13",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB1_TABLEAUCLA23",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB1_TABLEAUCLA33",
        },

        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB2_TABLEAUCLA11",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB2_TABLEAUCLA21",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB2_TABLEAUCLA31",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB2_TABLEAUCLA12",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB2_TABLEAUCLA22",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB2_TABLEAUCLA32",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB2_TABLEAUCLA13",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB2_TABLEAUCLA23",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "TAB2_TABLEAUCLA33",
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
                                "value": '"Les valeurs du chiffre d\'affaire ne doivent pas être null"',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value":
                                    "not(isnull(TABLEAUCLA33) or isnull(TABLEAUCLA13) or isnull(TABLEAUCLA23))",
                            },
                            "id": "luwhnbxk-RDOP-luwhcilc-format-borne-inf-sup",
                        },
                    ],
                    "header": [
                        {
                            "label": {
                                "type": "TXT",
                                "value": "",
                            },
                        },
                        {
                            "label": {
                                "type": "TXT",
                                "value": "Domaines",
                            },
                        },
                        {
                            "label": {
                                "type": "TXT",
                                "value": "Activité",
                            },
                        },
                        {
                            "label": {
                                "type": "TXT",
                                "value": "Chiffre d'affaire",
                            },
                        },
                    ],
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "table",
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
                                "id": "input11",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TABLEAUCLA12",
                                },
                                "id": "input12",
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
                                "id": "input13",
                            },
                        ],
                        [
                            {
                                "label": {
                                    "type": "VTL|MD",
                                    "value": '"Libelle 2"',
                                },
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TABLEAUCLA21",
                                },
                                "id": "input21",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TABLEAUCLA22",
                                },
                                "id": "input22",
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
                                "id": "input23",
                            },
                        ],
                        [
                            {
                                "label": {
                                    "type": "VTL|MD",
                                    "value": '"Libelle 3"',
                                },
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TABLEAUCLA31",
                                },
                                "id": "input31",
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
                                "id": "input32",
                            },
                        ],
                    ],
                    "mandatory": false,
                },
            ],
        },

        {
            "componentType": "Question",
            "id": "idQuestion2",
            "page": "2",
            "label": {
                "type": "VTL|MD",
                "value": '"Question avec 2 composants Table"',
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
                                "value": '"Les valeurs du chiffre d\'affaire ne doivent pas être null"',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value":
                                    "not(isnull(TAB1_TABLEAUCLA33) or isnull(TAB1_TABLEAUCLA13) or isnull(TAB1_TABLEAUCLA23))",
                            },
                            "id": "control-tab1",
                        },
                    ],
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
                    "id": "table-1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant Table 1"',
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
                                    "name": "TAB1_TABLEAUCLA11",
                                },
                                "id": "TAB1_INPUT11",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TAB1_TABLEAUCLA12",
                                },
                                "id": "TAB1_INPUT12",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "InputNumber",
                                "unit": "€",
                                "min": 0.0,
                                "max": 9999.0,
                                "response": {
                                    "name": "TAB1_TABLEAUCLA13",
                                },
                                "decimals": 0,
                                "id": "TAB1_INPUT13",
                            },
                        ],
                        [
                            {
                                "label": {
                                    "type": "VTL|MD",
                                    "value": '"Libelle 2"',
                                },
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TAB1_TABLEAUCLA21",
                                },
                                "id": "TAB1_INPUT21",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TAB1_TABLEAUCLA22",
                                },
                                "id": "TAB1_INPUT22",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "InputNumber",
                                "unit": "€",
                                "min": 0.0,
                                "max": 9999.0,
                                "response": {
                                    "name": "TAB1_TABLEAUCLA23",
                                },
                                "decimals": 0,
                                "id": "TAB1_INPUT23",
                            },
                        ],
                        [
                            {
                                "label": {
                                    "type": "VTL|MD",
                                    "value": '"Libelle 3"',
                                },
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TAB1_TABLEAUCLA31",
                                },
                                "id": "TAB1_INPUT31",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TAB1_TABLEAUCLA32",
                                },
                                "id": "TAB1_INPUT32",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "InputNumber",
                                "unit": "€",
                                "min": 0.0,
                                "max": 9999.0,
                                "response": {
                                    "name": "TAB1_TABLEAUCLA33",
                                },
                                "decimals": 0,
                                "id": "TAB1_INPUT33",
                            },
                        ],
                    ],
                    "mandatory": false,
                },
                {
                    "componentType": "Table",
                    "controls": [
                        {
                            "criticality": "INFO",
                            "errorMessage": {
                                "type": "VTL|MD",
                                "value": '"Les valeurs du chiffre d\'affaire ne doivent pas être null"',
                            },
                            "typeOfControl": "FORMAT",
                            "control": {
                                "type": "VTL",
                                "value":
                                    "not(isnull(TAB2_TABLEAUCLA33) or isnull(TAB2_TABLEAUCLA13) or isnull(TAB2_TABLEAUCLA23))",
                            },
                            "id": "control-tab2",
                        },
                    ],
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
                    "id": "table-2",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant Table 2"',
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
                                    "name": "TAB2_TABLEAUCLA11",
                                },
                                "id": "TAB2_INPUT11",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TAB2_TABLEAUCLA12",
                                },
                                "id": "TAB2_INPUT12",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "InputNumber",
                                "unit": "€",
                                "min": 0.0,
                                "max": 9999.0,
                                "response": {
                                    "name": "TAB2_TABLEAUCLA13",
                                },
                                "decimals": 0,
                                "id": "TAB2_INPUT13",
                            },
                        ],
                        [
                            {
                                "label": {
                                    "type": "VTL|MD",
                                    "value": '"Libelle 2"',
                                },
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TAB2_TABLEAUCLA21",
                                },
                                "id": "TAB2_INPUT21",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TAB2_TABLEAUCLA22",
                                },
                                "id": "TAB2_INPUT22",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "InputNumber",
                                "unit": "€",
                                "min": 0.0,
                                "max": 9999.0,
                                "response": {
                                    "name": "TAB2_TABLEAUCLA23",
                                },
                                "decimals": 0,
                                "id": "TAB2_INPUT23",
                            },
                        ],
                        [
                            {
                                "label": {
                                    "type": "VTL|MD",
                                    "value": '"Libelle 3"',
                                },
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TAB2_TABLEAUCLA31",
                                },
                                "id": "TAB2_INPUT31",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "Input",
                                "response": {
                                    "name": "TAB2_TABLEAUCLA32",
                                },
                                "id": "TAB2_INPUT32",
                                "maxLength": 249,
                            },
                            {
                                "componentType": "InputNumber",
                                "unit": "€",
                                "min": 0.0,
                                "max": 9999.0,
                                "response": {
                                    "name": "TAB2_TABLEAUCLA33",
                                },
                                "decimals": 0,
                                "id": "TAB2_INPUT33",
                            },
                        ],
                    ],
                    "mandatory": false,
                },
            ],
        },
        {
            "id": "seq",
            "componentType": "Sequence",
            "label": {
                "value": '"Bye!"',
                "type": "VTL|MD",
            },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "page": "3",
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
    "id": "lsvuvtbg",
};
