import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "components": [
        {
            "id": "kze792d8",
            "componentType": "InputNumber",
            "mandatory": false,
            "page": "1",
            "unit": "€",
            "min": 0,
            "max": 1000000,
            "decimals": 0,
            "label": { "value": '"What\'s your ideal annual salary in euros?"', "type": "VTL|MD" },
            "description": { "value": '"A number in euro between 0 and 1000000."', "type": "VTL|MD" },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "controls": [
                {
                    "id": "kze792d8",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "WARN",
                    "control": { "value": "NB = 5", "type": "VTL" },
                    "errorMessage": {
                        "value": '"Maybe try 5"',
                        "type": "VTL|MD",
                    },
                    "bindingDependencies": ["NB"],
                },
            ],
            "bindingDependencies": ["NB"],
            "response": { "name": "NB" },
        },
    ],
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "NB",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
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
