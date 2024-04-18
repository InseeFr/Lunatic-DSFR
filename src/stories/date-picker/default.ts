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
            "name": "DATE",
        },
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "name": "FILTER_RESULT_DATE",
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
                        "value": '"La date saisie doit être comprise entre 1900-01-01 et 2000-12-12."',
                    },
                    "typeOfControl": "FORMAT",
                    "control": {
                        "type": "VTL",
                        "value":
                            'not(not(isnull(DATE)) and (cast(DATE, date, "YYYY-MM-DD")>cast("2000-12-12", date, "YYYY-MM-DD") or cast(DATE, date, "YYYY-MM-DD")<cast("1900-01-01", date, "YYYY-MM-DD")))',
                    },
                    "id": "ltct556j-format-borne-inf-sup",
                },
            ],
            "max": "2000-12-12",
            "dateFormat": "YYYY-MM-DD",
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "label": {
                "type": "VTL|MD",
                "value": '"➡ 1. " || "Date"',
            },
            "mandatory": false,
            "bindingDependencies": ["DATE"],
            "min": "1900-01-01",
            "response": {
                "name": "DATE",
            },
            "id": "ltct556j",
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
    "generatingDate": "04-03-2024 10:33:53",
    "missing": false,
    "id": "lsvuvtbg",
    "maxPage": "2",
};

export const data: LunaticData = {
    "COLLECTED": { "DATENAISS": { "COLLECTED": "1993-01-30" } },
};
