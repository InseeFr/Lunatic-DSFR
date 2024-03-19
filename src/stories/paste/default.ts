import type { LunaticData, LunaticSource } from "@inseefr/lunatic";

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
    "maxPage": "2",
};

export const data: LunaticData = {
    "COLLECTED": { "NAME": { "COLLECTED": "Bob Dylan" } },
};
