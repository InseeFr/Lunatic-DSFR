import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "3",
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "STATE",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "STATE_1",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "STATE_2",
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
                    "id": "j4nw5cqz",
                    "componentType": "Dropdown",
                    "mandatory": false,
                    "response": {
                        "name": "STATE",
                    },
                    "options": [
                        {
                            "value": "1",
                            "label": { "value": '"Label de l\'option 1"', "type": "VTL" },
                        },
                        {
                            "value": "2",
                            "label": { "value": '"Label de l\'option 2"', "type": "VTL" },
                        },
                        { "value": "3", "label": { "value": '"Label de l\'option 3"', "type": "VTL" } },
                        { "value": "4", "label": { "value": '"Label de l\'option 4"', "type": "VTL" } },
                    ],
                    "controls": [
                        {
                            "id": "id-control",
                            "typeOfControl": "CONSISTENCY",
                            "criticality": "WARN",
                            "control": { "value": "not(isnull(STATE))", "type": "VTL" },
                            "errorMessage": {
                                "value": '"Un controles de nullité"',
                                "type": "VTL|MD",
                            },
                            "bindingDependencies": [],
                        },
                    ],
                },
            ],
        },
        {
            "componentType": "Question",
            "id": "idQuestion2",
            "page": "2",
            "label": {
                "type": "VTL|MD",
                "value": '"Question avec deux composants Dropdown"',
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
                    "id": "drop1",
                    "componentType": "Dropdown",
                    "mandatory": false,
                    "label": {
                        "value": '"Label du composant Dropdown"',
                        "type": "VTL|MD",
                    },
                    "description": {
                        "value": '"Description du composant Dropdown"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "STATE_1",
                    },
                    "options": [
                        {
                            "value": "1",
                            "label": { "value": '"Label de l\'option 1"', "type": "VTL" },
                        },
                        {
                            "value": "2",
                            "label": { "value": '"Label de l\'option 2"', "type": "VTL" },
                        },
                        { "value": "3", "label": { "value": '"Label de l\'option 3"', "type": "VTL" } },
                        { "value": "4", "label": { "value": '"Label de l\'option 4"', "type": "VTL" } },
                    ],
                    "controls": [
                        {
                            "id": "id-control1",
                            "typeOfControl": "CONSISTENCY",
                            "criticality": "WARN",
                            "control": { "value": "not(isnull(STATE_1))", "type": "VTL" },
                            "errorMessage": {
                                "value": '"Un controles de nullité"',
                                "type": "VTL|MD",
                            },
                            "bindingDependencies": ["STATE_1"],
                        },
                    ],
                },
                {
                    "id": "drop2",
                    "componentType": "Dropdown",
                    "mandatory": false,
                    "label": {
                        "value": '"Label du composant Dropdown"',
                        "type": "VTL|MD",
                    },
                    "description": {
                        "value": '"Description du composant Dropdown"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "STATE_2",
                    },
                    "options": [
                        {
                            "value": "1",
                            "label": { "value": '"Label de l\'option 1"', "type": "VTL" },
                        },
                        {
                            "value": "2",
                            "label": { "value": '"Label de l\'option 2"', "type": "VTL" },
                        },
                        { "value": "3", "label": { "value": '"Label de l\'option 3"', "type": "VTL" } },
                        { "value": "4", "label": { "value": '"Label de l\'option 4"', "type": "VTL" } },
                    ],
                    "controls": [
                        {
                            "id": "id-control2",
                            "typeOfControl": "CONSISTENCY",
                            "criticality": "WARN",
                            "control": { "value": "not(isnull(STATE_2))", "type": "VTL" },
                            "errorMessage": {
                                "value": '"Un controles de nullité"',
                                "type": "VTL|MD",
                            },
                            "bindingDependencies": ["STATE_2"],
                        },
                    ],
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
