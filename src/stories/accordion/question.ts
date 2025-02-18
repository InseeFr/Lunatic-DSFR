import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "1",
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "NAME",
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
                    "page": "1",
                    "componentType": "Input",
                    "bindingDependencies": ["NAME"],
                    "label": { "value": '"Label du composant Input"', "type": "VTL|MD" },
                    "description": { "value": '"Description du composant Input"', "type": "VTL|MD" },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "maxLength": 249,
                    "id": "name",
                    "response": {
                        "name": "NAME",
                    },
                },
                {
                    "componentType": "Accordion",
                    "items": [
                        {
                            "label": {
                                "value": '"Pourquoi cette question ?"',
                                "type": "VTL|MD",
                            },
                            "body": {
                                "value": '"Pour en connaître plus sur vous **1984**"',
                                "type": "VTL|MD",
                            },
                        },
                    ],
                    "page": "1",
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
