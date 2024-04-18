import type { LunaticData, LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "variables": [
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
                "EDITED": null,
                "INPUTTED": null,
                "FORCED": null,
                "PREVIOUS": null,
            },
            "name": "YEAR",
        },
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "name": "FILTER_RESULT_YEAR",
            "inFilter": "false",
        },
    ],
    "components": [
        {
            "componentType": "Datepicker",
            "controls": [
                {
                    "criticality": "ERROR",
                    "errorMessage": {
                        "type": "VTL|MD",
                        "value": '"La date saisie doit être comprise entre 1900 et 2300."',
                    },
                    "typeOfControl": "FORMAT",
                    "control": {
                        "type": "VTL",
                        "value":
                            'not(not(isnull(YEAR)) and (cast(YEAR, date, "YYYY")>cast("2300", date, "YYYY") or cast(YEAR, date, "YYYY")<cast("1900", date, "YYYY")))',
                    },
                    "id": "ltws6kqm-format-borne-inf-sup",
                },
            ],
            "max": "2300",
            "dateFormat": "YYYY",
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "label": {
                "type": "VTL|MD",
                "value": '"➡ 1. " || "Year"',
            },
            "mandatory": false,
            "bindingDependencies": ["YEAR"],
            "min": "1900",
            "response": {
                "name": "YEAR",
            },
            "id": "ltws6kqm",
            "page": "1",
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
    "pagination": "question",
    "resizing": {},
    "label": {
        "type": "VTL|MD",
        "value": "Test-Dylan",
    },
    "lunaticModelVersion": "2.5.0",
    "modele": "TESTDYLAN",
    "enoCoreVersion": "2.7.1",
    "generatingDate": "18-03-2024 09:50:54",
    "missing": false,
    "id": "lsvuvtbg",
    "maxPage": "2",
};

export const data: LunaticData = {
    "COLLECTED": { "DATENAISS": { "COLLECTED": "1993" } },
};
