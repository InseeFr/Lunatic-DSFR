import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "3",
    "variables": [
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
                "EDITED": null,
                "INPUTTED": null,
                "FORCED": null,
                "PREVIOUS": null,
            },
            "name": "DATE",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
                "EDITED": null,
                "INPUTTED": null,
                "FORCED": null,
                "PREVIOUS": null,
            },
            "name": "DATE1",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
                "EDITED": null,
                "INPUTTED": null,
                "FORCED": null,
                "PREVIOUS": null,
            },
            "name": "DATE2",
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
                    "componentType": "Datepicker",
                    "max": "2000-12-12",
                    "dateFormat": "YYYY-MM-DD",
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "mandatory": false,
                    "min": "1900-01-01",
                    "response": {
                        "name": "DATE",
                    },
                    "id": "ltct556j",
                    "controls": [
                        {
                            "id": "id-control",
                            "typeOfControl": "CONSISTENCY",
                            "criticality": "WARN",
                            "control": { "value": "not(isnull(DATE))", "type": "VTL" },
                            "errorMessage": {
                                "value": '"Un controles affiché si DATE est null"',
                                "type": "VTL|MD",
                            },
                            "bindingDependencies": ["DATE"],
                        },
                    ],
                },
            ],
        },
        {
            "componentType": "Question",
            "id": "idQuestion",
            "page": "2",
            "label": {
                "type": "VTL|MD",
                "value": '"Question avec deux composants Datepicker"',
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
                    "componentType": "Datepicker",
                    "max": "2000-12-12",
                    "dateFormat": "YYYY-MM-DD",
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant Datepicker 1"',
                    },
                    "description": {
                        "type": "VTL|MD",
                        "value": '"Description du composant Datepicker"',
                    },
                    "mandatory": false,
                    "min": "1900-01-01",
                    "response": {
                        "name": "DATE1",
                    },
                    "id": "datepicker1",
                    "controls": [
                        {
                            "id": "id-control",
                            "typeOfControl": "CONSISTENCY",
                            "criticality": "WARN",
                            "control": { "value": "false", "type": "VTL" },
                            "errorMessage": {
                                "value": '"Un controles toujours affiché"',
                                "type": "VTL|MD",
                            },
                            "bindingDependencies": [],
                        },
                    ],
                },
                {
                    "componentType": "Datepicker",
                    "max": "2000-12-12",
                    "dateFormat": "YYYY-MM-DD",
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant Datepicker 2"',
                    },
                    "description": {
                        "type": "VTL|MD",
                        "value": '"Description du composant Datepicker"',
                    },
                    "mandatory": false,
                    "min": "1900-01-01",
                    "response": {
                        "name": "DATE2",
                    },
                    "id": "datepicker2",
                    "controls": [
                        {
                            "id": "id-control",
                            "typeOfControl": "CONSISTENCY",
                            "criticality": "WARN",
                            "control": { "value": "false", "type": "VTL" },
                            "errorMessage": {
                                "value": '"Un controles toujours affiché"',
                                "type": "VTL|MD",
                            },
                            "bindingDependencies": [],
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
