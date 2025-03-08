import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "TESTTEXTE",
            "values": {
                "COLLECTED": null,
            },
        },
    ],
    "components": [
        {
            "id": "seq",
            "componentType": "Subsequence",
            "label": {
                "value": '"Subsequence label"',
                "type": "VTL|MD",
            },
            "description": {
                "value": '"Subsequence description"',
                "type": "VTL|MD",
            },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "page": "1",
            "declarations": [
                {
                    "declarationType": "HELP",
                    "id": "jruq5os5-kqhuxnytfszzz",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"declaration help before label"',
                    },
                    "position": "BEFORE_QUESTION_TEXT",
                },
                {
                    "declarationType": "INSTRUCTION",
                    "id": "jruq5os5-kwghgdffs1n9c",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"declaration Instruction after label"',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
            ],
        },
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
                        "value": '"Label de la déclaration en position : `AFTER_QUESTION_TEXT`"',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
            ],
            "components": [
                {
                    "componentType": "Input",
                    "bindingDependencies": ["TESTTEXTE"],
                    "response": { "name": "TESTTEXTE" },
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "kfxn6f16",
                    "page": "1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant (Input ici)"',
                    },
                    "description": {
                        "type": "VTL|MD",
                        "value": '"Description du composant"',
                    },
                    "mandatory": false,
                    "maxLength": 15,
                },
            ],
        },
    ],
    "maxPage": "1",
    "pagination": "question",
    "resizing": {},
    "label": { "type": "VTL", "value": '"Example Sequence"' },
    "lunaticModelVersion": "2.2.13",
    "modele": "SEQUENCE",
    "enoCoreVersion": "2.3.10",
    "generatingDate": "05-09-2022 14:37:43",
    "missing": false,
    "id": "l7ovbqou",
};
