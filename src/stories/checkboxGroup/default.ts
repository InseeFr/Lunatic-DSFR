import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "components": [
        {
            "id": "checkboxgroup",
            "componentType": "CheckboxGroup",
            "mandatory": false,
            "page": "1",
            "label": {
                "value": '"Which of these cities are in France?"',
                "type": "VTL|MD",
            },
            "description": {
                "value": '"If you select a city that is not in France, an error will appear!"',
                "type": "VTL",
            },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "controls": [
                {
                    "id": "checkboxgroup",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "WARN",
                    "control": { "value": "OPT3 = false or isnull(OPT3)", "type": "VTL" },
                    "errorMessage": {
                        "value": '"Take another guess"',
                        "type": "VTL|MD",
                    },
                    "bindingDependencies": ["OPT3"],
                },
            ],
            "responses": [
                {
                    "id": "opt1",
                    "description": {
                        "value": '"Paris is the capital city!"',
                        "type": "VTL|MD",
                    },
                    "label": {
                        "value": '"Paris"',
                        "type": "VTL|MD",
                    },
                    "response": { "name": "OPT1" },
                },
                {
                    "id": "opt2",
                    "description": {
                        "value": '"Bordeaux is where you can find great wine!"',
                        "type": "VTL|MD",
                    },
                    "label": {
                        "value": '"Bordeaux"',
                        "type": "VTL|MD",
                    },
                    "response": { "name": "OPT2" },
                },
                {
                    "id": "opt3",
                    "description": {
                        "value": '"There is great Swiss chocolate in Geneva"',
                        "type": "VTL|MD",
                    },
                    "label": {
                        "value": '"Geneva"',
                        "type": "VTL|MD",
                    },
                    "response": { "name": "OPT3" },
                },
            ],
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
            "name": "OPT1",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "OPT2",
            "values": {
                "COLLECTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "OPT3",
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
    "maxPage": "2",
};
