import type { LunaticData, LunaticSource } from "@inseefr/lunatic";

/*Experimental component not modelised */
export const source: LunaticSource = {
    "maxPage": "1",
    "components": [
        {
            "id": "Summary",
            "componentType": "Summary",
            "label": {
                "value": '"Récapulatif des habitants "',
                "type": "VTL",
            },
            "sections": [
                {
                    "iterations": { "value": "NB_HAB", "type": "VTL" },
                    "title": {
                        "value": 'PRENOMS || " " || NOMS',
                        "type": "VTL",
                    },
                    "responses": [
                        {
                            "label": {
                                "value": '(if(SEXES = "1") then ("Né") else ("Née")) || " le "',
                                "type": "VTL",
                            },
                            "value": { "value": 'cast(DATENAISS,string, "DD-MM-YYYY")', "type": "VTL" },
                        },
                        {
                            "label": { "value": '"de sexe "', "type": "VTL" },
                            "value": {
                                "value": 'if(SEXES = "1") then "Masculin" else "Féminin"',
                                "type": "VTL",
                            },
                        },
                    ],
                },
            ],
            "conditionFilter": { "value": "true", "type": "VTL" },
            "page": "1",
        },
    ],
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "NB_HAB",
            "values": {
                "COLLECTED": 2,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "VIVEZVOUSDS",
            "values": {
                "COLLECTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "DATENAISS",
            "values": {
                "COLLECTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "SEXES",
            "values": {
                "COLLECTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "PRENOMS",
            "values": {
                "COLLECTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "NOMS",
            "values": {
                "COLLECTED": [null],
            },
        },
    ],
    "resizing": {
        "NB_HAB": {
            "size": "NB_HAB",
            "variables": ["PRENOMS", "SEXES", "DATENAISS"],
        },
    },
};

export const data: LunaticData = {
    "COLLECTED": {
        "NB_HAB": {
            "COLLECTED": 2,
        },
        "PRENOMS": {
            "COLLECTED": ["John", "Martin"],
        },
        "NOMS": {
            "COLLECTED": ["Doe", "Dupont"],
        },
        "DATENAISS": {
            "COLLECTED": ["1993-01-18", "1990-10-10"],
        },
        "AGE": {
            "COLLECTED": [26, 31],
        },
        "SEXES": {
            "COLLECTED": ["1", "2"],
        },
    },
};
