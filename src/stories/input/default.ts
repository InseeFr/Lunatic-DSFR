import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "components": [
        {
            "page": "1",
            "componentType": "Input",
            "bindingDependencies": ["NAME"],
            "label": { "value": '"What\'s your name?"', "type": "VTL|MD" },
            "description": { "value": '"No more than 30 characters"', "type": "VTL|MD" },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "maxLength": 30,
            "id": "name",
            "response": {
                "name": "NAME",
            },
        },
    ],
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "NAME",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
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
