import type { LunaticData, LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "cleaning": {},
    "maxPage": "5",
    "components": [
        {
            "id": "seq",
            "componentType": "Sequence",
            "label": {
                "value": '"Description des individus de votre logement"',
                "type": "VTL",
            },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "page": "1",
        },
        {
            "id": "kze792d8",
            "componentType": "InputNumber",
            "mandatory": false,
            "page": "2",
            "min": 0,
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
            "id": "kmnolkxb",
            "componentType": "Loop",
            "page": "3",
            "depth": 1,
            "paginatedLoop": false,
            "conditionFilter": { "value": "true", "type": "VTL" },
            "loopDependencies": ["NHAB"],
            "lines": {
                "min": { "value": "NB_HAB", "type": "VTL" },
                "max": { "value": "NB_HAB", "type": "VTL" },
            },
            "label": {
                "value": '"Label de la boucle"',
                "type": "VTL|MD",
            },
            "components": [
                {
                    "id": "kmno1n7m1",
                    "componentType": "Input",
                    "mandatory": false,
                    "maxLength": 20,
                    "page": "3",
                    "label": {
                        "value": '"Prénom"',
                        "type": "VTL",
                    },
                    "conditionFilter": {
                        "value": "true",
                        "type": "VTL",
                    },
                    "response": { "name": "PRENOMS" },
                },
                {
                    "id": "kmno1n7m2",
                    "componentType": "Input",
                    "mandatory": false,
                    "maxLength": 20,
                    "page": "3",
                    "label": {
                        "value": '"Nom de famille"',
                        "type": "VTL|MD",
                    },
                    "conditionFilter": {
                        "value": "true",
                        "type": "VTL",
                    },
                    "response": { "name": "NOMS" },
                },
                {
                    "id": "kmno1n7m3",
                    "componentType": "InputNumber",
                    "mandatory": false,
                    "page": "3",
                    "label": {
                        "value": '"Age"))',
                        "type": "VTL",
                    },
                    "conditionFilter": {
                        "value": "true",
                        "type": "VTL",
                    },
                    "response": { "name": "AGES" },
                },
                {
                    "id": "kmno1n7m4",
                    "componentType": "Radio",
                    "mandatory": false,
                    "label": {
                        "value": '"Resident"',
                        "type": "VTL",
                    },
                    "page": "3",
                    "conditionFilter": {
                        "value": "true",
                        "type": "VTL",
                    },
                    "options": [
                        {
                            "value": "1",
                            "label": { "value": '"Oui"', "type": "VTL" },
                        },
                        {
                            "value": "2",
                            "label": { "value": '"Non"', "type": "VTL" },
                        },
                    ],
                    "response": { "name": "RESIDENTS" },
                },
            ],
        },
        {
            "id": "roundabout",
            "componentType": "Roundabout",
            "page": "4",
            "conditionFilter": { "value": "true", "type": "VTL" },
            "iterations": { "value": "NB_HAB", "type": "VTL" },
            "label": { "value": '"Les questionnaires individuels"', "type": "VTL" },
            "locked": true,
            "expressions": {
                "complete": {
                    "value": "not(isnull(COLOR)) and not(isnull(SEXE)) and not(isnull(SOMETHING))",
                    "type": "VTL",
                },
                "partial": {
                    "value": "not(isnull(COLOR)) or not(isnull(SEXE)) or not(isnull(SOMETHING))",
                    "type": "VTL",
                },
                "unnecessary": {
                    "value":
                        'if (AGES < "14") or (RESIDENTS = "2") then (PRENOMS || " " || NOMS ||if AGES < "14" then " n’a pas à compléter de questionnaire individuel car il est âgé de moins de 14 ans." else " n’a pas à compléter de questionnaire individuel car il n’est pas catégoriser comme un résident permanent de ce logement.") else ""',
                    "type": "VTL",
                },
                "label": {
                    "value": 'PRENOMS || " " || NOMS',
                    "type": "VTL",
                },
            },
            "components": [
                {
                    "id": "jsygk7m7",
                    "componentType": "Subsequence",
                    "page": "4.1",
                    "label": {
                        "value": '"Première page de questions pour " || PRENOMS',
                        "type": "VTL",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                },
                {
                    "id": "kmno1n7m",
                    "componentType": "Input",
                    "maxLength": 3,
                    "page": "4.1",
                    "label": {
                        "value": '"colour?"))',
                        "type": "VTL",
                    },
                    "conditionFilter": {
                        "value": "true",
                        "type": "VTL",
                    },
                    "response": { "name": "COLOR" },
                },
                {
                    "id": "jsygk7m7",
                    "componentType": "Subsequence",
                    "page": "4.2",
                    "label": {
                        "value": '"Deuxième page de questions pour "|| PRENOMS',
                        "type": "VTL",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                },
                {
                    "id": "sexe",
                    "componentType": "Radio",
                    "page": "4.2",
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
                            "label": { "value": '"Homme"', "type": "VTL" },
                        },
                        {
                            "value": "2",
                            "label": { "value": '"Femme"', "type": "VTL" },
                        },
                    ],
                    "response": { "name": "SEXE" },
                },
                {
                    "id": "jsygk7m7",
                    "componentType": "Subsequence",
                    "page": "4.3",
                    "label": {
                        "value": '"Troisième page de questions " || PRENOMS',
                        "type": "VTL",
                    },
                    "conditionFilter": { "value": "true", "type": "VTL" },
                },
                {
                    "id": "kmno1n7m",
                    "componentType": "Input",
                    "maxLength": 30,
                    "page": "4.3",
                    "label": {
                        "value": '"Dites quelque chose."))',
                        "type": "VTL",
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
                "type": "VTL",
            },
            "conditionFilter": { "value": "true", "type": "VTL" },
            "page": "5",
        },
    ],
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "NB_HAB",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "SOMETHING",
            "values": {
                "PREVIOUS": [null],
                "COLLECTED": [null],
                "FORCED": [null],
                "EDITED": [null],
                "INPUTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "COLOR",
            "values": {
                "PREVIOUS": [null],
                "COLLECTED": [null],
                "FORCED": [null],
                "EDITED": [null],
                "INPUTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "SEXE",
            "values": {
                "PREVIOUS": [null],
                "COLLECTED": [null],
                "FORCED": [null],
                "EDITED": [null],
                "INPUTED": [null],
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
                "INPUTED": [null],
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
                "INPUTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "AGES",
            "values": {
                "PREVIOUS": [null],
                "COLLECTED": [null],
                "FORCED": [null],
                "EDITED": [null],
                "INPUTED": [null],
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "RESIDENTS",
            "values": {
                "PREVIOUS": [null],
                "COLLECTED": [null],
                "FORCED": [null],
                "EDITED": [null],
                "INPUTED": [null],
            },
        },
        {
            "variableType": "CALCULATED",
            "name": "PRENOMREF",
            "expression": { "value": "first_value(PRENOMS over())", "type": "VTL" },
            "bindingDependencies": ["PRENOMS"],
            "inFilter": "true",
        },
    ],
    "resizing": {
        "NB_HAB": {
            "size": "NB_HAB",
            "variables": ["PRENOMS", "COLOR", "SEXE", "SOMETHING"],
        },
    },
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
};

export const data: LunaticData = {
    "COLLECTED": {
        "NB_HAB": {
            "EDITED": null,
            "FORCED": null,
            "INPUTED": null,
            "PREVIOUS": null,
            "COLLECTED": 4,
        },
        "PRENOMS": {
            "EDITED": [null],
            "FORCED": [null],
            "INPUTED": [null],
            "PREVIOUS": [null],
            "COLLECTED": ["Pierre", "Louise", "Maxime", "Spongebob"],
        },
        "NOMS": {
            "EDITED": [null],
            "FORCED": [null],
            "INPUTED": [null],
            "PREVIOUS": [null],
            "COLLECTED": ["Dupont", "Dupont", "Dupont", "Squarepants"],
        },
        "AGES": {
            "EDITED": [null],
            "FORCED": [null],
            "INPUTED": [null],
            "PREVIOUS": [null],
            "COLLECTED": ["30", "35", "12", "99"],
        },
        "RESIDENTS": {
            "EDITED": [null],
            "FORCED": [null],
            "INPUTED": [null],
            "PREVIOUS": [null],
            "COLLECTED": ["1", "1", "1", "2"],
        },
    },
};
