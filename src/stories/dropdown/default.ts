import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "components": [
        {
            "id": "j4nw5cqz",
            "page": "1",
            "componentType": "Dropdown",
            "mandatory": false,
            "label": {
                "value": '"In which state do The Simpsons reside?"',
                "type": "VTL|MD",
            },
            "description": {
                "value": '"The state is within the USA"',
                "type": "VTL|MD",
            },
            "response": {
                "name": "STATE",
            },
            "controls": [
                {
                    "id": "j4nw5cqz",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "WARN",
                    "control": {
                        "value": 'not(nvl(STATE,"") = "")',
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Please choose a state!"',
                        "type": "VTL|MD",
                    },
                    "bindingDependencies": ["STATE"],
                },
            ],
            "options": [
                {
                    "value": "1",
                    "label": { "value": '"Washington"', "type": "VTL|MD" },
                },
                {
                    "value": "2",
                    "label": { "value": '"Kentucky"', "type": "VTL" },
                },
                { "value": "3", "label": { "value": '"Ohio"', "type": "VTL" } },
                { "value": "4", "label": { "value": '"Maine"', "type": "VTL" } },
                {
                    "value": "5",
                    "label": { "value": '"North Dakota"', "type": "VTL" },
                },
                { "value": "6", "label": { "value": '"Florida"', "type": "VTL" } },
                {
                    "value": "7",
                    "label": { "value": '"North Takoma"', "type": "VTL" },
                },
                {
                    "value": "8",
                    "label": { "value": '"California"', "type": "VTL" },
                },
                { "value": "9", "label": { "value": '"Texas"', "type": "VTL" } },
                {
                    "value": "10",
                    "label": { "value": '"Massachusetts"', "type": "VTL" },
                },
                { "value": "11", "label": { "value": '"Nevada"', "type": "VTL" } },
                {
                    "value": "12",
                    "label": { "value": '"Illinois"', "type": "VTL" },
                },
                {
                    "value": "13",
                    "label": {
                        "value": '"Not in any state, you fool!"',
                        "type": "VTL",
                    },
                },
            ],
        },
    ],
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "STATE",
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
