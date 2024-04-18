import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
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
    ],
    "maxPage": "1",
    "variables": [],
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
