import type { LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "components": [
        {
            "id": "checkboxbooleanGroupNumeric",
            "componentType": "CheckboxGroup",
            "page": "1",
            "label": {
                "value": "Situation matrimoniale",
                "type": "TXT",
            },
            "missingResponse": { "name": "SITUMATRI_MISSING" },
            "responses": [
                {
                    "id": "kmort6x9-QOP-kmosa98y",
                    "label": {
                        "value": "Française de naissance ou par réintégration",
                        "type": "TXT",
                    },
                    "response": { "name": "NATIO1N1" },
                },

                {
                    "id": "kmort6x9-QOP-kmos360k",
                    "label": {
                        "value": '"Française par déclaration, naturalisation, option à la majorité"',
                        "type": "VTL",
                    },
                    "response": { "name": "NATIO1N2" },
                },

                {
                    "id": "kmort6x9-QOP-kmos37e1",
                    "label": { "value": "Étrangère", "type": "TXT" },
                    "response": { "name": "NATIO1N3" },
                },

                {
                    "id": "kmort6x9-QOP-kmorue9c",
                    "label": {
                        "value": "Apatride (pas de nationalité)",
                        "type": "TXT",
                    },
                    "response": { "name": "NATIO1N4" },
                },

                {
                    "id": "kmort6x9-QOP-kmorue9d",
                    "label": {
                        "value": "Autre",
                        "type": "TXT",
                    },
                    "description": {
                        "value": "description",
                        "type": "TXT",
                    },
                    "response": { "name": "NATIO1N_OTHER" },
                    "detail": {
                        "label": {
                            "value": '"Préciser : "',
                            "type": "VTL",
                        },
                        "response": {
                            "name": "NATIO1N_DETAIL",
                        },
                    },
                },
            ],
        },
        {
            "id": "end",
            "componentType": "Sequence",
            "page": "2",
            "label": {
                "value": "FIN",
                "type": "TXT",
            },
        },
    ],
    "maxPage": "2",
    "variables": [
        {
            "variableType": "COLLECTED",
            "name": "NATIO1N1",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "NATIO1N2",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "NATIO1N3",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "NATIO1N4",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS1",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS2",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS3",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS4",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS5",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS6",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS7",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS8",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS9",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS10",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS11",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },

        {
            "variableType": "COLLECTED",
            "name": "MOIS12",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "NATIO1N_OTHER",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },
        {
            "variableType": "COLLECTED",
            "name": "NATIO1N_DETAIL",
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTTED": null,
            },
        },
    ],
};
