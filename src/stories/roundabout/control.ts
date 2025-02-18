import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "maxPage": "2",
    "components": [
        {
            "id": "q1",
            "page": "1",
            "componentType": "Roundabout",
            "label": {
                "type": "TXT",
                "value": "Informations",
            },
            "iterations": {
                "type": "VTL",
                "value": "count(PRENOMS)",
            },
            "item": {
                "label": {
                    "value": '"Questions de " || PRENOMS',
                    "type": "VTL",
                },
            },
            "locked": false,
            "progressVariable": "PROGRESS",
            "controls": [
                {
                    "type": "ROW",
                    "criticality": "ERROR",
                    "errorMessage": {
                        "type": "TXT",
                        "value": "Contrôle sur chaque item : Age doit être > 18",
                    },
                    "typeOfControl": "FORMAT",
                    "control": {
                        "type": "VTL",
                        "value": "AGES > 18",
                    },
                    "id": "c1",
                },
                {
                    "criticality": "ERROR",
                    "errorMessage": {
                        "type": "TXT",
                        "value": "Contrôle tous le temps affiché",
                    },
                    "typeOfControl": "FORMAT",
                    "control": {
                        "type": "VTL",
                        "value": "false",
                    },
                    "id": "c2",
                },
            ],
            "components": [
                {
                    "id": "qq1",
                    "componentType": "InputNumber",
                    "response": {
                        "name": "AGES",
                    },
                    "label": {
                        "type": "TXT",
                        "value": "Age",
                    },
                    "page": "1.1",
                },
            ],
        },
        {
            "id": "end",
            "componentType": "Sequence",
            "label": {
                "type": "TXT",
                "value": "END",
            },
            "page": "2",
        },
    ],
    "variables": [
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": ["John", "Jane"],
            },
            "name": "PRENOMS",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": [null],
            },
            "name": "PROGRESS",
        },
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": [17, 22],
            },
            "name": "AGES",
        },
    ],
};
