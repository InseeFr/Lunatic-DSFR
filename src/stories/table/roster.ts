import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "componentType": "Questionnaire",
    "variables": [
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": [null, null],
                "EDITED": [],
                "FORCED": [],
                "INPUTTED": [],
                "PREVIOUS": [],
            },
            "name": "DOMAINES",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": [null, null],
                "EDITED": [],
                "FORCED": [],
                "INPUTTED": [],
                "PREVIOUS": [],
            },
            "name": "ACTIVITE",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": [null, null],
                "EDITED": [],
                "FORCED": [],
                "INPUTTED": [],
                "PREVIOUS": [],
            },
            "name": "CA",
        },
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "count(DOMAINES)",
            },
            "name": "NB",
        },
    ],
    "components": [
        {
            "componentType": "RosterForLoop",
            "components": [
                {
                    "componentType": "Input",
                    "response": {
                        "name": "DOMAINES",
                    },
                    "id": "luwgwkow-RDOP-luwhao3o",
                    "maxLength": 249,
                    "page": "1",
                    label: { type: "VTL", value: "" },
                },
                {
                    "componentType": "Input",
                    "response": {
                        "name": "ACTIVITE",
                    },
                    "id": "luwgwkow-RDOP-luwhb9vm",
                    "maxLength": 249,
                    "page": "1",
                    label: { type: "VTL", value: "" },
                },
                {
                    "componentType": "InputNumber",
                    "unit": "€",
                    "min": 0.0,
                    "max": 999999,
                    "response": {
                        "name": "CA",
                    },
                    "decimals": 0,
                    "id": "luwgwkow-RDOP-luwh6zes",
                    "page": "1",
                    label: { type: "VTL", value: "" },
                },
            ],
            "controls": [
                {
                    "type": "ROW",
                    "criticality": "ERROR",
                    "errorMessage": {
                        "type": "VTL|MD",
                        "value": '"Row level : CA > 10"',
                    },
                    "typeOfControl": "FORMAT",
                    "control": {
                        "type": "VTL",
                        "value": "CA > 10",
                    },
                    "id": "luwgwkow-RDOP-luwh6zes-format-borne-inf-sup",
                },
                {
                    "criticality": "ERROR",
                    "errorMessage": {
                        "type": "VTL|MD",
                        "value": '"Global level : Vous devez entrer 3 lignes minimum"',
                    },
                    "typeOfControl": "FORMAT",
                    "control": {
                        "type": "VTL",
                        "value": "NB >= 3",
                    },
                    "id": "kfxmjupm-CI-1",
                },
            ],
            "positioning": "HORIZONTAL",

            "header": [
                {
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Domaines"',
                    },
                },
                {
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Activité"',
                    },
                },
                {
                    "label": {
                        "type": "VTL|MD",
                        "value": '"Chiffre d\'affaire"',
                    },
                },
            ],
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "id": "luwgwkow",
            "page": "1",
            "label": {
                "type": "VTL|MD",
                "value": '"Tableau dynamic"',
            },
            "lines": {
                "min": {
                    "type": "VTL",
                    "value": "2",
                },
                "max": {
                    "type": "VTL",
                    "value": "10",
                },
            },
            "mandatory": false,
        },
        {
            "id": "seq",
            "componentType": "Sequence",
            "label": {
                "value": '"Bye!"',
                "type": "VTL|MD",
            },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "page": "2",
        },
    ],
    "pagination": "question",
    "lunaticModelVersion": "3.5.1",
    "modele": "TESTDYLAN",
    "enoCoreVersion": "3.18.5",
    "generatingDate": "12-04-2024 10:52:10",
    "resizing": {},
    "id": "luv7k9hw2",
    "label": {
        "type": "VTL|MD",
        "value": "Test Dylan",
    },
    "maxPage": "2",
} as any; //TODO remove any
