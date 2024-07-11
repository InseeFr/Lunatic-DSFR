import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "2",
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
            "name": "CHECKBOXBoolean",
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
            "name": "BOL1",
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
            "name": "BOL2",
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
                    "componentType": "CheckboxBoolean",
                    "response": {
                        "name": "CHECKBOXBoolean",
                    },
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "ltfrftp8",
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
                "value":
                    '"Question avec 2 composants CheckboxBoolean (à ne surtout pas faire), utiliser un CheckboxGroup à la place"',
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
                    "componentType": "CheckboxBoolean",
                    "response": {
                        "name": "BOL1",
                    },
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "check1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant CheckboxBoolean 1"',
                    },
                    "description": {
                        "type": "VTL|MD",
                        "value": '"Description du composant CheckboxBoolean"',
                    },
                    "mandatory": false,
                },
                {
                    "componentType": "CheckboxBoolean",
                    "response": {
                        "name": "BOL2",
                    },
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "check2",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant CheckboxBoolean 2"',
                    },
                    "description": {
                        "type": "VTL|MD",
                        "value": '"Description du composant CheckboxBoolean"',
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
