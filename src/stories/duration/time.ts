import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "components": [
        {
            "id": "kxi788",
            "componentType": "Duration",
            "mandatory": false,
            "format": "PTnHnM",
            "page": "1",
            "label": {
                "value": '"➡ 1. " || "Duration (format: PTnHnM) "',
                "type": "VTL|MD",
            },
            "description": { "value": '"Description"', "type": "VTL|MD" },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "response": { "name": "DUREE" },
        },
    ],
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "DUREE",
            "values": {
                "COLLECTED": "PT12H50M",
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
