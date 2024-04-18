import type { LunaticData, LunaticSource } from "@inseefr/lunatic";

/*Experimental component not modelised */
export const source: LunaticSource = {
    "maxPage": "1",
    "components": [
        {
            "id": "Summary",
            // @ts-expect-error
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
                "PREVIOUS": null,
                "COLLECTED": 2,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "VIVEZVOUSDS",
            "values": {
                "PREVIOUS": [null],
                "COLLECTED": [null],
                "FORCED": [null],
                "EDITED": [null],
                "INPUTTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "DATENAISS",
            "values": {
                "PREVIOUS": [null],
                "COLLECTED": [null],
                "FORCED": [null],
                "EDITED": [null],
                "INPUTTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "SEXES",
            "values": {
                "PREVIOUS": [null],
                "COLLECTED": [null],
                "FORCED": [null],
                "EDITED": [null],
                "INPUTTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "PRENOMS",
            "values": {
                "PREVIOUS": [null],
                "COLLECTED": [null],
                "FORCED": [null],
                "EDITED": [null],
                "INPUTTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "NOMS",
            "values": {
                "PREVIOUS": [null],
                "COLLECTED": [null],
                "FORCED": [null],
                "EDITED": [null],
                "INPUTTED": [null],
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
            "EDITED": null,
            "FORCED": null,
            "INPUTTED": null,
            "PREVIOUS": null,
            "COLLECTED": 2,
        },
        "PRENOMS": {
            "EDITED": [null],
            "FORCED": [null],
            "INPUTTED": [null],
            "PREVIOUS": [null],
            "COLLECTED": ["John", "Martin"],
        },
        "NOMS": {
            "EDITED": [null],
            "FORCED": [null],
            "INPUTTED": [null],
            "PREVIOUS": [null],
            "COLLECTED": ["Doe", "Dupont"],
        },
        "DATENAISS": {
            "EDITED": [null],
            "FORCED": [null],
            "INPUTTED": [null],
            "PREVIOUS": [null],
            "COLLECTED": ["1993-01-18", "1990-10-10"],
        },
        "AGE": {
            "EDITED": [null],
            "FORCED": [null],
            "INPUTTED": [null],
            "PREVIOUS": [null],
            "COLLECTED": [26, 31],
        },
        "SEXES": {
            "EDITED": [null],
            "FORCED": [null],
            "INPUTTED": [null],
            "PREVIOUS": [null],
            "COLLECTED": ["1", "2"],
        },
    },
};
