import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "2",
    "suggesters": [
        {
            "name": "L_PAYS-1-2-0",
            "fields": [
                {
                    "name": "label",
                    "rules": ["[\\w]+"],
                    "min": 3,
                },
            ],
            "queryParser": {
                "type": "tokenized",
                "params": {
                    "language": "French",
                    "pattern": "[\\w.]+",
                    "min": 3,
                },
            },
        },
    ],
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
            "name": "SUGGESTER_VARIABLEPA_LABEL",
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
            "name": "VARIABLEPA",
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
            "name": "SUG1_LABEL",
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
            "name": "SUG1",
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
            "name": "SUG2_LABEL",
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
            "name": "SUG2",
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
                    "componentType": "Suggester",
                    "response": {
                        "name": "VARIABLEPA",
                    },
                    "optionResponses": [
                        {
                            "name": "SUGGESTER_VARIABLEPA_LABEL",
                            "attribute": "label",
                        },
                    ],
                    "storeName": "L_PAYS-1-2-0",
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "lt4fjoev",
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
                "value": '"Question avec 2 composants Suggester"',
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
                    "componentType": "Suggester",
                    "response": {
                        "name": "SUG1",
                    },
                    "optionResponses": [
                        {
                            "name": "SUG1_LABEL",
                            "attribute": "label",
                        },
                    ],
                    "storeName": "L_PAYS-1-2-0",
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "suggester1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant Suggester 1"',
                    },
                    "description": {
                        "type": "VTL|MD",
                        "value": '"Description du composant Suggester"',
                    },
                    "mandatory": false,
                },
                {
                    "componentType": "Suggester",
                    "response": {
                        "name": "SUG2",
                    },
                    "optionResponses": [
                        {
                            "name": "SUG2_LABEL",
                            "attribute": "label",
                        },
                    ],
                    "storeName": "L_PAYS-1-2-0",
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "suggester1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant Suggester 2"',
                    },
                    "description": {
                        "type": "VTL|MD",
                        "value": '"Description du composant Suggester"',
                    },
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
    "id": "lsvuvtbg",
};
