import type { LunaticData, LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "components": [
        {
            "id": "seq",
            "componentType": "Sequence",
            "label": {
                "value": '"Sequence label"',
                "type": "VTL|MD",
            },
            "description": {
                "value":
                    '"je suis la description / saut de ligne / \r\n après saut de ligne. \r\n Maintenant, encore un autre saut à la ligne, des explications :\r\n- tiret un\r\n- tiret deux\r\n"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": "true",
                "type": "VTL",
            },
            "page": "1",
            "declarations": [
                {
                    "declarationType": "INSTRUCTION",
                    "id": "jruq5os5-kqhuxnyt",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"\n\n declaration instruction after label!"',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
                {
                    "declarationType": "INSTRUCTION",
                    "id": "jruq5os5-kqhfdsfdsuxnyt",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"declaration instruction before label"',
                    },
                    "position": "BEFORE_QUESTION_TEXT",
                },
                {
                    "declarationType": "INSTRUCTION",
                    "id": "jruq5os5-kqhuxnytfdsfds",
                    "label": {
                        "type": "VTL|MD",
                        "value":
                            '"![Texte alternatif](https://i.ytimg.com/vi/tlgTegVjFCk/hqdefault.jpg)"',
                    },
                    "position": "AFTER_QUESTION_TEXT",
                },
            ],
        },
        {
            "id": "seq",
            "componentType": "Sequence",
            "label": {
                "value": '"Sequence label"',
                "type": "VTL",
            },
            "conditionFilter": {
                "value": "true",
                "type": "VTL",
            },
            "page": "2",
        },
    ],
    "variables": [],
    "pagination": "question",
    "resizing": {},
    "label": {
        "type": "VTL",
        "value": '"Example Sequence"',
    },
    "lunaticModelVersion": "2.2.13",
    "modele": "SEQUENCE",
    "enoCoreVersion": "2.3.10",
    "generatingDate": "05-09-2022 14:37:43",
    "missing": false,
    "id": "l7ovbqou",
    "maxPage": "2",
};

export const data: LunaticData = {
    "COLLECTED": { "NAME": { "COLLECTED": "Bob Dylan" } },
};
