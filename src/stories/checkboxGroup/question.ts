import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "1",
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
            "name": "CHECKBOXBoolean",
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
                    "id": "checkboxgroup",
                    "componentType": "CheckboxGroup",
                    "mandatory": false,
                    "page": "1",
                    "label": {
                        "value": '"Label du composant CheckboxGroup"',
                        "type": "VTL|MD",
                    },
                    "description": {
                        "value": '"Description du composant CheckboxGroup"',
                        "type": "VTL",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                    "responses": [
                        {
                            "id": "opt1",
                            "description": {
                                "value": '"Description de l\'option 1"',
                                "type": "VTL|MD",
                            },
                            "label": {
                                "value": '"Label de l\'option 1"',
                                "type": "VTL|MD",
                            },
                            "response": { "name": "OPT1" },
                        },
                        {
                            "id": "opt2",
                            "description": {
                                "value": '"Description de l\'option 2"',
                                "type": "VTL|MD",
                            },
                            "label": {
                                "value": '"Label de l\'option 2"',
                                "type": "VTL|MD",
                            },
                            "response": { "name": "OPT2" },
                        },
                        {
                            "id": "opt3",
                            "description": {
                                "value": '"Description de l\'option 3"',
                                "type": "VTL|MD",
                            },
                            "label": {
                                "value": '"Label de l\'option 3"',
                                "type": "VTL|MD",
                            },
                            "response": { "name": "OPT3" },
                        },
                    ],
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
