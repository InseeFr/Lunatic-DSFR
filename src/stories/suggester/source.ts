import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "suggesters": [
        {
            "name": "L_PAYS-1-2-0",
            "fields": [
                {
                    "name": "label",
                    "rules": ["[\\w]+"],
                    "language": "French",
                    "min": 3,
                    "stemmer": false,
                },
            ],
            "queryParser": {
                "type": "tokenized",
                "params": {
                    "language": "French",
                    "pattern": "[\\w.]+",
                    "min": 3,
                },
            },
            "version": 1,
        },
    ],
    "components": [
        {
            "componentType": "Suggester",
            "response": {
                "name": "VARIABLEPA",
            },
            "optionResponses": [
                {
                    "name": "SUGGESTER_VARIABLEPA_LABEL",
                    "attribute": "label",
                },
            ],
            "storeName": "L_PAYS-1-2-0",
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "id": "lt4fjoev",
            "page": "1",
            "label": {
                "type": "VTL|MD",
                "value": '"➡ 2. " || "Variable Pays"',
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
            "name": "SUGGESTER_VARIABLEPA_LABEL",
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
            "name": "VARIABLEPA",
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
    "maxPage": "2",
};
