import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "2",
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "DUREE",
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
            "name": "DUREE1",
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
            "name": "DUREE2",
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
                    "id": "kxi788",
                    "componentType": "Duration",
                    "mandatory": false,
                    "format": "PnYnM",
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "response": { "name": "DUREE" },
                },
            ],
        },
        {
            "componentType": "Question",
            "id": "idQuestion2",
            "page": "2",
            "label": {
                "type": "VTL|MD",
                "value": '"Question avec deux composants Duration"',
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
                    "id": "duration1",
                    "componentType": "Duration",
                    "mandatory": false,
                    "format": "PnYnM",
                    "label": {
                        "value": '"Label du composant Duration 1"',
                        "type": "VTL|MD",
                    },
                    "description": {
                        "value": '"Description du composant Duration"',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "response": { "name": "DUREE1" },
                },
                {
                    "id": "duration2",
                    "componentType": "Duration",
                    "mandatory": false,
                    "format": "PnYnM",
                    "label": {
                        "value": '"Label du composant Duration 2"',
                        "type": "VTL|MD",
                    },
                    "description": {
                        "value": '"Description du composant Duration"',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "response": { "name": "DUREE2" },
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
