import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "2",
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "NB",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "NB1",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "NB2",
            "values": {
                "COLLECTED": null,
            },
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
                    "id": "kze792d8",
                    "componentType": "InputNumber",
                    "mandatory": false,
                    "min": 0,
                    "decimals": 2,
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "response": { "name": "NB" },
                },
            ],
        },
        {
            "componentType": "Question",
            "id": "idQuestion2",
            "page": "2",
            "label": {
                "type": "VTL|MD",
                "value": '"Question avec 2 composants InputNumber"',
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
                    "id": "input1",
                    "componentType": "InputNumber",
                    "mandatory": false,
                    "min": 0,
                    "max": 10,
                    "decimals": 2,
                    "label": { "value": '"Label du composant InputNumber"', "type": "VTL|MD" },
                    "description": {
                        "value": '"Description du composant InputNumber"',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "response": { "name": "NB1" },
                },
                {
                    "id": "input2",
                    "componentType": "InputNumber",
                    "mandatory": false,
                    "min": 0,
                    "max": 10,
                    "decimals": 2,
                    "label": { "value": '"Label du composant InputNumber"', "type": "VTL|MD" },
                    "description": {
                        "value": '"Description du composant InputNumber"',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "response": { "name": "NB2" },
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
    "id": "lsvuvtbg",
};
