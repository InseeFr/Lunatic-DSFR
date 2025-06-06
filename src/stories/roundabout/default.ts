import type { LunaticData, LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "maxPage": "4",
    "components": [
        {
            "id": "how",
            "componentType": "InputNumber",
            "mandatory": false,
            "page": "1",
            "min": 1,
            "max": 10,
            "decimals": 0,
            "label": {
                "value": '"Combien de personnes vivent habituellement à votre adresse ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "response": { "name": "NB_HAB" },
        },
        {
            "id": "loop",
            "componentType": "Loop",
            "page": "2",
            "depth": 1,
            "paginatedLoop": false,
            "conditionFilter": { "value": "true", "type": "VTL" },
            "loopDependencies": ["NHAB"],
            "lines": {
                "min": { "value": "NB_HAB", "type": "VTL" },
                "max": { "value": "NB_HAB", "type": "VTL" },
            },
            "components": [
                {
                    "id": "prenom",
                    "componentType": "Input",
                    "mandatory": false,
                    "maxLength": 20,
                    "label": {
                        "value": '"Prénom"))',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": {
                        "value": "true",
                        "type": "VTL",
                    },
                    "response": { "name": "PRENOMS" },
                },
                {
                    "id": "age",
                    "componentType": "InputNumber",
                    "maxLength": 3,
                    "label": {
                        "value": '"Age"))',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": {
                        "value": "true",
                        "type": "VTL",
                    },
                    "response": { "name": "AGE" },
                },
            ],
        },
        {
            "id": "roundabout",
            "componentType": "Roundabout",
            "page": "3",
            "conditionFilter": { "value": "true", "type": "VTL" },
            "iterations": { "value": "NB_HAB", "type": "VTL" },
            "label": { "value": '"Libellé du rondpoint"', "type": "VTL" },
            "locked": false,
            "progressVariable": "PROGRESS",
            "item": {
                "label": {
                    "value": '"Questions de " || PRENOMS',
                    "type": "VTL",
                },
                "description": {
                    "value":
                        'if AGE > 18 then "Aller aux question destinées à " || PRENOMS else PRENOMS || " n\'est pas majeur, il/elle n\'a pas à répondre aux questions"',
                    "type": "VTL",
                },
                "disabled": {
                    "value": "AGE < 18",
                    "type": "VTL",
                },
            },
            "controls": [],
            "components": [
                {
                    "id": "radio",
                    "componentType": "Radio",
                    "mandatory": false,
                    "page": "3.1",
                    "label": {
                        "value": '"Connaissez-vous le recensement de la population ?"',
                        "type": "VTL|MD",
                    },

                    "conditionFilter": { "value": "true", "type": "VTL" },

                    "options": [
                        { "value": "1", "label": { "value": '"oui"', "type": "VTL|MD" } },

                        { "value": "2", "label": { "value": '"non"', "type": "VTL|MD" } },
                    ],
                    "response": { "name": "KNOWREC" },
                },
                {
                    "id": "jsygk7m7",
                    "componentType": "Subsequence",
                    "page": "3.2",
                    "label": {
                        "value": '"Deuxième page de questions pour "|| PRENOMS',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                },
                {
                    "id": "sexe",
                    "componentType": "Radio",
                    "page": "3.2",
                    "label": {
                        "value": '"Sexe"',
                        "type": "VTL",
                    },
                    "conditionFilter": {
                        "value": "true",
                        "type": "VTL",
                    },
                    "options": [
                        {
                            "value": "1",
                            "label": { "value": '"Homme"', "type": "VTL|MD" },
                        },
                        {
                            "value": "2",
                            "label": { "value": '"Femme"', "type": "VTL|MD" },
                        },
                    ],
                    "response": { "name": "SEXE" },
                },
                {
                    "id": "jsygk7m7",
                    "componentType": "Subsequence",
                    "page": "3.3",
                    "label": {
                        "value": '"Troisième page de questions " || PRENOMS',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                },
                {
                    "id": "kmno1n7m",
                    "componentType": "Input",
                    "maxLength": 30,
                    "page": "3.3",
                    "label": {
                        "value": '"Dites quelque chose."))',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": {
                        "value": "true",
                        "type": "VTL",
                    },
                    "response": { "name": "SOMETHING" },
                },
            ],
        },

        {
            "id": "seq",
            "componentType": "Sequence",
            "label": {
                "value": '"Merci !"',
                "type": "VTL|MD",
            },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "page": "4",
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
            "name": "SOMETHING",
            "values": {
                "COLLECTED": [],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "AGE",
            "values": {
                "COLLECTED": [15, 15],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "SEXE",
            "values": {
                "COLLECTED": [],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "PRENOMS",
            "values": {
                "COLLECTED": ["Fanny", "Ines"],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "KNOWREC",
            "values": {
                "COLLECTED": [],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "PROGRESS",
            "values": {
                "COLLECTED": [],
            },
        },
        {
            "variableType": "CALCULATED",
            "name": "PRENOMREF",
            "expression": { "value": "first_value(PRENOMS over())", "type": "VTL" },
            "bindingDependencies": ["PRENOMS"],
            "inFilter": "true",
        },
        {
            "variableType": "CALCULATED",
            "name": "COMPLETE",
            "expression": {
                "value": "not(isnull(KNOWREC)) and not(isnull(SEXE)) and not(isnull(SOMETHING))",
                "type": "VTL",
            },
            "bindingDependencies": ["KNOWREC", "SEXE", "SOMETHING"],
            "shapeFrom": "PRENOMS",
            "inFilter": "true",
        },
        {
            "variableType": "CALCULATED",
            "name": "PARTIAL",
            "expression": {
                "value": "not(isnull(KNOWREC)) or not(isnull(SEXE)) or not(isnull(SOMETHING))",
                "type": "VTL",
            },
            "bindingDependencies": ["KNOWREC", "SEXE", "SOMETHING"],
            "shapeFrom": "PRENOMS",
            "inFilter": "true",
        },
    ],
    "resizing": {
        "NB_HAB": {
            "size": "NB_HAB",
            "variables": ["PRENOMS", "AGE", "SEXE", "SOMETHING", "DATNAIS"],
        },
    },
};

export const data: LunaticData = {
    "COLLECTED": {
        "NB_HAB": {
            "COLLECTED": 2,
        },
        "PRENOMS": {
            "COLLECTED": ["Fanny", "Ines"],
        },
        "AGE": {
            "COLLECTED": [24, 22],
        },
        "PROGRESS": {
            "COLLECTED": [-1, -1],
        },
    },
};
