import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "1",
    "suggesters": [
        {
            "name": "L_PAYS-1-2-0",
            "fields": [
                {
                    "name": "label",
                    "rules": ["[\\w]+"],
                    "language": "French",
                    "min": 3,
                    "stemmer": false,
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
            "version": 1,
        },
    ],
    "variables": [
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
                "EDITED": null,
                "INPUTED": null,
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
                "INPUTED": null,
                "FORCED": null,
                "PREVIOUS": null,
            },
            "name": "VARIABLEPA",
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
                    "page": "1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant Suggester"',
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
    "missing": false,
    "id": "lsvuvtbg",
};
