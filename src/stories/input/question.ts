import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "3",
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "NAME",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "FIRSTNAME",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "LASTNAME",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
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
                    "componentType": "Input",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "maxLength": 249,
                    "id": "name",
                    "response": {
                        "name": "NAME",
                    },
                },
            ],
        },
        {
            "componentType": "Question",
            "id": "idQuestion",
            "page": "2",
            "label": {
                "type": "VTL|MD",
                "value": '"Question avec 2 composants Input"',
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
                    "componentType": "Input",
                    "label": { "value": '"Label du composant Input 1"', "type": "VTL|MD" },
                    "description": { "value": '"Description du composant Input"', "type": "VTL|MD" },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "maxLength": 249,
                    "id": "name",
                    "response": {
                        "name": "FIRSTNAME",
                    },
                },
                {
                    "componentType": "Input",
                    "label": { "value": '"Label du composant Input 2"', "type": "VTL|MD" },
                    "description": { "value": '"Description du composant Input"', "type": "VTL|MD" },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "maxLength": 249,
                    "id": "name",
                    "response": {
                        "name": "LASTNAME",
                    },
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
