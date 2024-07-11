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
            "name": "CHECKBOXBO",
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
            "name": "CHECK_ONE_1",
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
            "name": "CHECK_ONE_2",
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
                    "componentType": "CheckboxOne",
                    "response": {
                        "name": "CHECKBOXBO",
                    },
                    "options": [
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Label de l\'option 1"',
                            },
                            "description": {
                                "type": "VTL|MD",
                                "value": '"Description de l\'option 1"',
                            },
                            "value": "1",
                        },
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Label de l\'option 2"',
                            },
                            "description": {
                                "type": "VTL|MD",
                                "value": '"Description de l\'option 2"',
                            },
                            "value": "2",
                        },
                    ],
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
                    "componentType": "CheckboxOne",
                    "response": {
                        "name": "CHECK_ONE_1",
                    },
                    "options": [
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Label de l\'option 1"',
                            },
                            "description": {
                                "type": "VTL|MD",
                                "value": '"Description de l\'option 1"',
                            },
                            "value": "1",
                        },
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Label de l\'option 2"',
                            },
                            "description": {
                                "type": "VTL|MD",
                                "value": '"Description de l\'option 2"',
                            },
                            "value": "2",
                        },
                    ],
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "checkboxone1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant CheckboxOne 1"',
                    },
                    "description": {
                        "type": "VTL|MD",
                        "value": '"Description du composant CheckboxOne"',
                    },
                    "mandatory": false,
                },
                {
                    "componentType": "CheckboxOne",
                    "response": {
                        "name": "CHECK_ONE_2",
                    },
                    "options": [
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Label de l\'option 1"',
                            },
                            "description": {
                                "type": "VTL|MD",
                                "value": '"Description de l\'option 1"',
                            },
                            "value": "1",
                        },
                        {
                            "label": {
                                "type": "VTL|MD",
                                "value": '"Label de l\'option 2"',
                            },
                            "description": {
                                "type": "VTL|MD",
                                "value": '"Description de l\'option 2"',
                            },
                            "value": "2",
                        },
                    ],
                    "conditionFilter": {
                        "type": "VTL",
                        "value": "true",
                    },
                    "id": "checkboxone2",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Label du composant CheckboxOne 2"',
                    },
                    "description": {
                        "type": "VTL|MD",
                        "value": '"Description du composant CheckboxOne"',
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
