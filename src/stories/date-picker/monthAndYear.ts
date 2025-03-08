import type { LunaticData, LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "variables": [
        {
            "variableType": "COLLECTED",
            "values": {
                "COLLECTED": null,
            },
            "name": "MONTHANDYE",
        },
        {
            "variableType": "CALCULATED",
            "expression": {
                "type": "VTL",
                "value": "true",
            },
            "name": "FILTER_RESULT_MONTHANDYE",
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
                        "value": '"La date saisie doit être comprise entre 1900-01 et 2300-12."',
                    },
                    "typeOfControl": "FORMAT",
                    "control": {
                        "type": "VTL",
                        "value":
                            'not(not(isnull(MONTHANDYE)) and (cast(MONTHANDYE, date, "YYYY-MM")>cast("2300-12", date, "YYYY-MM") or cast(MONTHANDYE, date, "YYYY-MM")<cast("1900-01", date, "YYYY-MM")))',
                    },
                    "id": "ltwrnvod-format-borne-inf-sup",
                },
            ],
            "max": "2300-12",
            "dateFormat": "YYYY-MM",
            "conditionFilter": {
                "type": "VTL",
                "value": "true",
            },
            "label": {
                "type": "VTL|MD",
                "value": '"➡ 1. " || "Month and Year"',
            },
            "mandatory": false,
            "bindingDependencies": ["MONTHANDYE"],
            "min": "1900-01",
            "response": {
                "name": "MONTHANDYE",
            },
            "id": "ltwrnvod",
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
    "generatingDate": "18-03-2024 09:42:07",
    "missing": false,
    "id": "lsvuvtbg",
    "maxPage": "2",
};

export const data: LunaticData = {
    "COLLECTED": { "DATENAISS": { "COLLECTED": "1993-01" } },
};
