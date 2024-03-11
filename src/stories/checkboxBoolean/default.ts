import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
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
            "componentType": "CheckboxBoolean",
            "bindingDependencies": ["CHECKBOXBoolean"],
            "response": {
                "name": "CHECKBOXBoolean",
            },
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "id": "ltfrftp8",
            "page": "1",
            "label": {
                "type": "VTL|MD",
                "value": '"Checkbox Boolean"',
            },
            "mandatory": false,
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
    "maxPage": "1",
};

export const toto: LunaticSource = {
    "cleaning": {},
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
            "name": "COMMENT_QE",
        },
        {
            "variableType": "EXTERNAL",
            "name": "EXTERNAL1",
            "value": null,
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
            "name": "Q1",
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
            "name": "Q2",
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
            "name": "Q3",
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
            "name": "Q4",
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
            "name": "Q5",
        },
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "name": "FILTER_RESULT_Q1",
            "inFilter": "false",
        },
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "name": "FILTER_RESULT_Q2",
            "inFilter": "false",
        },
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "name": "FILTER_RESULT_Q3",
            "inFilter": "false",
        },
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "name": "FILTER_RESULT_Q4",
            "inFilter": "false",
        },
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "name": "FILTER_RESULT_Q5",
            "inFilter": "false",
        },
        {
            "variableType": "CALCULATED",
            "bindingDependencies": ["Q3"],
            "expression": {
                "type": "VTL",
                "value": "cast(Q3, integer) + 5",
            },
            "name": "CALCULATED1",
            "inFilter": "false",
        },
    ],
    "components": [
        {
            "componentType": "Sequence",
            "hierarchy": {
                "sequence": {
                    "id": "lk6zlgzm",
                    "page": "1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"I - " || "Types of declaration"',
                    },
                },
            },
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "id": "lk6zlgzm",
            "page": "1",
            "label": {
                "type": "VTL|MD",
                "value": '"I - " || "Types of declaration"',
            },
        },
        {
            "componentType": "Input",
            "bindingDependencies": ["Q1"],
            "response": {
                "name": "Q1",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lk6zlgzm",
                    "page": "1",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"I - " || "Types of declaration"',
                    },
                },
            },
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "id": "lk6zkkfr",
            "page": "2",
            "label": {
                "type": "VTL|MD",
                "value": '"➡ 1. " || "Question 1"',
            },
            "mandatory": false,
            "maxLength": 249,
        },
        {
            "componentType": "Sequence",
            "bindingDependencies": ["Q1"],
            "hierarchy": {
                "sequence": {
                    "id": "lk6znaqx",
                    "page": "3",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"II - " || "Dynamic declarations"',
                    },
                },
            },
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "id": "lk6znaqx",
            "page": "3",
            "label": {
                "type": "VTL|MD",
                "value": '"II - " || "Dynamic declarations"',
            },
            "declarations": [],
        },
        {
            "componentType": "Input",
            "bindingDependencies": ["Q1", "Q2"],
            "response": {
                "name": "Q2",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lk6znaqx",
                    "page": "3",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"II - " || "Dynamic declarations"',
                    },
                },
            },
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "id": "lk6zs7tw",
            "page": "4",
            "label": {
                "type": "VTL|MD",
                "value": '"➡ 2. " || "Question 2"',
            },
            "mandatory": false,
            "maxLength": 249,
            "declarations": [
                {
                    "declarationType": "STATEMENT",
                    "id": "lk709w0i-SI",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Dynamic declaration using one collected: " || Q1',
                    },
                    "position": "BEFORE_QUESTION_TEXT",
                },
            ],
        },
        {
            "componentType": "InputNumber",
            "controls": [
                {
                    "criticality": "ERROR",
                    "errorMessage": {
                        "type": "VTL|MD",
                        "value": '" La valeur doit être comprise entre 0 et 10."',
                    },
                    "typeOfControl": "FORMAT",
                    "control": {
                        "type": "VTL",
                        "value": "not(not(isnull(Q3)) and (0>Q3 or 10<Q3))",
                    },
                    "id": "lk709m8o-format-borne-inf-sup",
                },
                {
                    "criticality": "ERROR",
                    "errorMessage": {
                        "type": "VTL|MD",
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                    },
                    "typeOfControl": "FORMAT",
                    "control": {
                        "type": "VTL",
                        "value": "not(not(isnull(Q3))  and round(Q3,0)<>Q3)",
                    },
                    "id": "lk709m8o-format-decimal",
                },
            ],
            "max": 10,
            "hierarchy": {
                "sequence": {
                    "id": "lk6znaqx",
                    "page": "3",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"II - " || "Dynamic declarations"',
                    },
                },
            },
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "label": {
                "type": "VTL|MD",
                "value": '"➡ 3. " || "Question 3"',
            },
            "mandatory": false,
            "declarations": [
                {
                    "declarationType": "STATEMENT",
                    "id": "lk703vgg-SI",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Dynamic declaration using two collected: " || Q1 || " and " || Q2',
                    },
                    "position": "BEFORE_QUESTION_TEXT",
                },
            ],
            "bindingDependencies": ["Q1", "Q2", "Q3"],
            "min": 0,
            "response": {
                "name": "Q3",
            },
            "decimals": 0,
            "id": "lk709m8o",
            "page": "5",
        },
        {
            "componentType": "CheckboxBoolean",
            "bindingDependencies": ["CALCULATED1", "Q4"],
            "response": {
                "name": "Q4",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lk6znaqx",
                    "page": "3",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"II - " || "Dynamic declarations"',
                    },
                },
            },
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "id": "lk702f0b",
            "page": "6",
            "label": {
                "type": "VTL|MD",
                "value": '"➡ 4. " || "Question 4"',
            },
            "mandatory": false,
            "declarations": [],
        },
        {
            "componentType": "CheckboxBoolean",
            "bindingDependencies": ["EXTERNAL1", "Q5"],
            "response": {
                "name": "Q5",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lk6znaqx",
                    "page": "3",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"II - " || "Dynamic declarations"',
                    },
                },
            },
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "id": "lk70b3kk",
            "page": "7",
            "label": {
                "type": "VTL|MD",
                "value": '"➡ 5. " || "Question 5"',
            },
            "mandatory": false,
            "declarations": [],
        },
        {
            "componentType": "Sequence",
            "hierarchy": {
                "sequence": {
                    "id": "COMMENT-SEQ",
                    "page": "8",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Commentaire"',
                    },
                },
            },
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "id": "COMMENT-SEQ",
            "page": "8",
            "label": {
                "type": "VTL|MD",
                "value": '"Commentaire"',
            },
        },
        {
            "componentType": "Textarea",
            "bindingDependencies": ["COMMENT_QE"],
            "response": {
                "name": "COMMENT_QE",
            },
            "hierarchy": {
                "sequence": {
                    "id": "COMMENT-SEQ",
                    "page": "8",
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Commentaire"',
                    },
                },
            },
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "id": "COMMENT-QUESTION",
            "page": "9",
            "label": {
                "type": "VTL|MD",
                "value": '"Avez-vous des remarques concernant l\'enquête ou des commentaires ?"',
            },
            "mandatory": false,
            "maxLength": 2000,
        },
    ],
    "pagination": "question",
    "resizing": {},
    "label": {
        "type": "VTL|MD",
        "value": "Eno - Declarations and instructions",
    },
    "lunaticModelVersion": "2.5.0",
    "modele": "ENODECLARATIONS",
    "enoCoreVersion": "2.7.1",
    "generatingDate": "29-01-2024 13:50:24",
    "missing": false,
    "id": "lrkdvib9",
    "maxPage": "9",
};
