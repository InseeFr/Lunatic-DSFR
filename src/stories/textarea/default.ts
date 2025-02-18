import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},

    "components": [
        {
            "id": "name",
            "componentType": "Textarea",
            "label": {
                "value": '"Label"',
                "type": "VTL|MD",
            },
            "description": {
                "value": '"Description"',
                "type": "VTL|MD",
            },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "maxLength": 30,
            "response": {
                "name": "SOMETHING",
            },
            "page": "1",
        },
    ],
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "SOMETHING",
            "values": {
                "COLLECTED": null,
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
