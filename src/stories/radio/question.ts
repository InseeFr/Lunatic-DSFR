import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "2",
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "Q1",
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
            "name": "rad1",
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
            "name": "rad2",
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
                    "id": "radiototo",
                    "componentType": "Radio",
                    "mandatory": false,
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "options": [
                        {
                            "value": "1",
                            "description": {
                                "value": '"Description de l\'option 1"',
                                "type": "VTL|MD",
                            },
                            "label": { "value": '"Label de l\'option 1"', "type": "VTL|MD" },
                        },
                        {
                            "value": "2",
                            "description": {
                                "value": '"Description de l\'option 2"',
                                "type": "VTL|MD",
                            },
                            "label": { "value": '"Label de l\'option 2"', "type": "VTL|MD" },
                        },
                    ],
                    "response": { "name": "Q1" },
                },
            ],
        },
        {
            "componentType": "Question",
            "id": "idQuestion2",
            "page": "2",
            "label": {
                "type": "VTL|MD",
                "value": '"Question avec 2 composants Radio"',
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
                    "id": "radio1",
                    "componentType": "Radio",
                    "mandatory": false,
                    "label": {
                        "value": '"Label du composant Radio"',
                        "type": "VTL|MD",
                    },
                    "description": {
                        "value": '"Description du composant Radio"',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "options": [
                        {
                            "value": "1",
                            "description": {
                                "value": '"Description de l\'option 1"',
                                "type": "VTL|MD",
                            },
                            "label": { "value": '"Label de l\'option 1"', "type": "VTL|MD" },
                        },
                        {
                            "value": "2",
                            "description": {
                                "value": '"Description de l\'option 2"',
                                "type": "VTL|MD",
                            },
                            "label": { "value": '"Label de l\'option 2"', "type": "VTL|MD" },
                        },
                    ],
                    "response": { "name": "rad1" },
                },
                {
                    "id": "radio2",
                    "componentType": "Radio",
                    "mandatory": false,
                    "label": {
                        "value": '"Label du composant Radio"',
                        "type": "VTL|MD",
                    },
                    "description": {
                        "value": '"Description du composant Radio"',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "options": [
                        {
                            "value": "1",
                            "description": {
                                "value": '"Description de l\'option 1"',
                                "type": "VTL|MD",
                            },
                            "label": { "value": '"Label de l\'option 1"', "type": "VTL|MD" },
                        },
                        {
                            "value": "2",
                            "description": {
                                "value": '"Description de l\'option 2"',
                                "type": "VTL|MD",
                            },
                            "label": { "value": '"Label de l\'option 2"', "type": "VTL|MD" },
                        },
                    ],
                    "response": { "name": "rad2" },
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
