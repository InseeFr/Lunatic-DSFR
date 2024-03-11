import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "components": [
        {
            "id": "radiototo",
            "bindingDependencies": ["Q1"],
            "componentType": "Radio",
            "mandatory": false,
            "label": {
                "value": '"Does Spongebob live in a pineapple under the sea?"',
                "type": "VTL|MD",
            },
            "description": {
                "value": '"Spongebob works for Mr. Krabs"',
                "type": "VTL|MD",
            },
            "page": "1",
            "conditionFilter": { "value": "true", "type": "VTL" },
            "controls": [
                {
                    "id": "radio",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "WARN",
                    "control": { "value": 'not(Q1= "2")', "type": "VTL" },
                    "errorMessage": {
                        "value": '"What else would Spongebob live in?"',
                        "type": "VTL|MD",
                    },
                    "bindingDependencies": ["Q1"],
                },
            ],
            "options": [
                {
                    "value": "1",
                    "description": {
                        "value": '"Spongebob lives in a pineapple"',
                        "type": "VTL|MD",
                    },
                    "label": { "value": '"Yes"', "type": "VTL|MD" },
                },
                {
                    "value": "2",
                    "description": {
                        "value": '"Spongebob does not live in a pineapple"',
                        "type": "VTL|MD",
                    },
                    "label": { "value": '"No"', "type": "VTL|MD" },
                },
            ],
            "response": { "name": "Q1" },
        },
    ],
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "Q2",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "Q1",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
    ],
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
