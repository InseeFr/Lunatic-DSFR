import type { LunaticData, LunaticSource } from "@inseefr/lunatic";

export const source: LunaticSource = {
    "id": "ltr03p2c",
    "modele": "FILAUTO",
    "enoCoreVersion": "3.18.2",
    "lunaticModelVersion": "3.4.2",
    "generatingDate": "25-03-2024 15:04:15",
    "pagination": "question",
    "maxPage": "58",
    "label": {
        "value": "Enquête Filière Automobile - 14/03/2023 sans bouton radio",
        "type": "VTL|MD",
    },
    "components": [
        {
            "id": "lp8fz42d",
            "componentType": "Sequence",
            "page": "1",
            "label": {
                "value": '"I - " || "Données de cadrage"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lp8gebxa",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"**Cette enquête porte sur l’exercice comptable 2023.**"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": "true",
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lp8fz42d",
                    "page": "1",
                    "label": {
                        "value": '"I - " || "Données de cadrage"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "lp8g0a9z",
            "componentType": "Datepicker",
            "mandatory": false,
            "page": "2",
            "min": "2023-01-01",
            "max": "2024-12-01",
            "label": {
                "value": '"Quelle est la date de clôture de votre exercice 2023 ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": "true",
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lp8g0a9z-format-date-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            'not(not(isnull(CLOT_EX)) and (cast(CLOT_EX, date, "YYYY-MM-DD")<cast("2023-01-01", date, "YYYY-MM-DD") or cast(CLOT_EX, date, "YYYY-MM-DD")>cast("2024-12-01", date, "YYYY-MM-DD")))',
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"La date saisie doit être comprise entre 2023-01-01 et 2024-12-01."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lp8fz42d",
                    "page": "1",
                    "label": {
                        "value": '"I - " || "Données de cadrage"',
                        "type": "VTL|MD",
                    },
                },
            },
            "dateFormat": "YYYY-MM-DD",
            "response": {
                "name": "CLOT_EX",
            },
        },
        {
            "id": "lp8g3yo1",
            "componentType": "InputNumber",
            "mandatory": false,
            "page": "3",
            "min": 0.0,
            "max": 24.0,
            "decimals": 0,
            "label": {
                "value": '"Quelle est la durée en mois de cet exercice ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": "true",
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lp8g3yo1-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(DUREE_EX)) and (0>DUREE_EX or 24<DUREE_EX))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 24."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lp8g3yo1-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(DUREE_EX))  and round(DUREE_EX,0)<>DUREE_EX)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lp8fz42d",
                    "page": "1",
                    "label": {
                        "value": '"I - " || "Données de cadrage"',
                        "type": "VTL|MD",
                    },
                },
            },
            "unit": "mois",
            "response": {
                "name": "DUREE_EX",
            },
        },
        {
            "id": "lp8gdv9u",
            "componentType": "InputNumber",
            "mandatory": false,
            "page": "4",
            "min": 0.0,
            "max": 99999999.0,
            "decimals": 0,
            "label": {
                "value":
                    '"Quel est le chiffre d’affaires hors taxes de votre entreprise au cours de cet exercice (en milliers d’euros) ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": "true",
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lp8gdv9u-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(CAHT)) and (0>CAHT or 99999999<CAHT))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 99999999."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lp8gdv9u-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(CAHT))  and round(CAHT,0)<>CAHT)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lp8gdv9u-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": 'not(nvl(CAHT,"")="")',
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            "\"Merci de renseigner le chiffre d'affaires hors taxes EN MILLIERS D'EUROS de votre entreprise pour l'exercice comptable 2023.\"",
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lp8fz42d",
                    "page": "1",
                    "label": {
                        "value": '"I - " || "Données de cadrage"',
                        "type": "VTL|MD",
                    },
                },
            },
            "unit": "k€",
            "response": {
                "name": "CAHT",
            },
        },
        {
            "id": "lp8g6sye",
            "componentType": "Sequence",
            "page": "5",
            "label": {
                "value": '"II - " || "Activité dans la filière automobile"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lp8gkl6n",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"L’enquête concerne les entreprises qui contribuent à la conception, à la fabrication, à la transformation, au reconditionnement, au rétrofit et au recyclage de véhicules circulant sur la voie publique :"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": "true",
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lp8g6sye",
                    "page": "5",
                    "label": {
                        "value": '"II - " || "Activité dans la filière automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "lq5cfpju",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "6",
            "label": {
                "value": '"Conformément à la définition " || LIBELLE_STRATE ',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": "true",
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lq5cfpju-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": 'not(nvl(AUTO,"")="")',
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            "\"Vous n'avez pas répondu à la question II.1 sur l'appartenance de votre entreprise à la filière automobile. Cette information est essentielle, merci d'y répondre.\"",
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cfpju-CI-1",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": 'not(nvl(AUTO,"")="0")',
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            '"Attention, vous venez de déclarer ne pas appartenir à la filière automobile. Nous vous incitons fortement à relire la définition de la filière automobile pour confirmer ou corriger votre réponses si besoin. "',
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lp8g6sye",
                    "page": "5",
                    "label": {
                        "value": '"II - " || "Activité dans la filière automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "AUTO",
            },
        },
        {
            "id": "lq5c5uay",
            "componentType": "InputNumber",
            "mandatory": false,
            "page": "7",
            "min": 0.0,
            "max": 100.0,
            "decimals": 0,
            "label": {
                "value":
                    '"Quelle est la part du chiffre d’affaires de votre entreprise concerné par la filière automobile au cours de l’exercice 2023 ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lq5c9w6y",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Une estimation même approximative est préférable à une absence de réponse."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lq5c5uay-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(CA_AUTO)) and (0>CA_AUTO or 100<CA_AUTO))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5c5uay-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(CA_AUTO))  and round(CA_AUTO,0)<>CA_AUTO)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5c5uay-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(CA_AUTO)) and CA_AUTO = 0)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            "\"Vous avez indiqué précédement appartenir à la filière automobile et vous déclarez une part nulle de votre chiffre d'affaires dédié à l'automobile. Merci de bien vouloir vous assurer de vos réponses.\"",
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5c5uay-CI-1",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": 'not(nvl(CA_AUTO,"")="")',
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            "\"Vous n'avez pas répondu à la question II.2 sur la part du chiffre d'affaires de votre entreprise dédiée à l'automobile. Cette information est essentielle, merci d'y répondre.\"",
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lp8g6sye",
                    "page": "5",
                    "label": {
                        "value": '"II - " || "Activité dans la filière automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "unit": "%",
            "response": {
                "name": "CA_AUTO",
            },
        },
        {
            "id": "lq5cf72t",
            "componentType": "Table",
            "mandatory": false,
            "page": "8",
            "positioning": "HORIZONTAL",
            "label": {
                "value":
                    '"Quelle(s) est (sont) la (les) fonction(s) de votre entreprise dans la filière automobile ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lq5cfiy3",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Indiquez la part de chaque fonction dans le chiffre d’affaires dédié à l’automobile de votre entreprise."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls0e9k2f",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"Vous avez ventilé "|| cast(FCT_SOMME, string) || "% de votre CA." ',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lq5cf72t-RDOP-lto8yvgs-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT9)) and (0>FCT9 or 100<FCT9))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto8yvgs-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT9))  and round(FCT9,0)<>FCT9)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto90wqw-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT8)) and (0>FCT8 or 100<FCT8))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto90wqw-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT8))  and round(FCT8,0)<>FCT8)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto98wsv-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT7)) and (0>FCT7 or 100<FCT7))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto98wsv-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT7))  and round(FCT7,0)<>FCT7)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto8ttca-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT6)) and (0>FCT6 or 100<FCT6))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto8ttca-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT6))  and round(FCT6,0)<>FCT6)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto97t1s-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT5)) and (0>FCT5 or 100<FCT5))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto97t1s-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT5))  and round(FCT5,0)<>FCT5)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto94lbi-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT4)) and (0>FCT4 or 100<FCT4))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto94lbi-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT4))  and round(FCT4,0)<>FCT4)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto921ak-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT3)) and (0>FCT3 or 100<FCT3))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto921ak-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT3))  and round(FCT3,0)<>FCT3)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto96i8x-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT2)) and (0>FCT2 or 100<FCT2))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto96i8x-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT2))  and round(FCT2,0)<>FCT2)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto8upcq-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT1)) and (0>FCT1 or 100<FCT1))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-RDOP-lto8upcq-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(FCT1))  and round(FCT1,0)<>FCT1)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lq5cf72t-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(FCT_SOMME < 100 or FCT_SOMME > 100)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            '"Attention, "|| cast(FCT_SOMME, string) || " % de votre chiffre d\'affaires automobile a été réparti. Merci de vérifier votre saisie pour atteindre 100 %" ',
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lp8g6sye",
                    "page": "5",
                    "label": {
                        "value": '"II - " || "Activité dans la filière automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "header": [
                {
                    "label": {
                        "value": "",
                        "type": "VTL|MD",
                    },
                },
                {
                    "label": {
                        "value": '"Part dans le chiffre d’affaires automobile en 2023"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value": '"**Construction automobile**"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lq5cf72t-RDOP-lto8upcq",
                        "unit": "%",
                        "response": {
                            "name": "FCT1",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value":
                                '"**Fabrication d’équipements automobiles** (pare-chocs, planches de bord, bennes, pneumatiques, électronique, logiciels, etc.)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lq5cf72t-RDOP-lto96i8x",
                        "unit": "%",
                        "response": {
                            "name": "FCT2",
                        },
                    },
                ],
                [
                    {
                        "value": "3",
                        "label": {
                            "value":
                                '"**Fabrication de biens intermédiaires** (fonderie, revêtement, pièces de fixation, etc.)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lq5cf72t-RDOP-lto921ak",
                        "unit": "%",
                        "response": {
                            "name": "FCT3",
                        },
                    },
                ],
                [
                    {
                        "value": "4",
                        "label": {
                            "value":
                                '"**Fabrication de biens d’équipement** (machines-outils et autres outillages)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lq5cf72t-RDOP-lto94lbi",
                        "unit": "%",
                        "response": {
                            "name": "FCT4",
                        },
                    },
                ],
                [
                    {
                        "value": "5",
                        "label": {
                            "value": '"**Commerce de gros d\'équipements automobiles**"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lq5cf72t-RDOP-lto97t1s",
                        "unit": "%",
                        "response": {
                            "name": "FCT5",
                        },
                    },
                ],
                [
                    {
                        "value": "6",
                        "label": {
                            "value": '"**Ingénierie, conception, recherche et développement (R&D)**"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lq5cf72t-RDOP-lto8ttca",
                        "unit": "%",
                        "response": {
                            "name": "FCT6",
                        },
                    },
                ],
                [
                    {
                        "value": "7",
                        "label": {
                            "value": '"**Transport et logistique**"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lq5cf72t-RDOP-lto98wsv",
                        "unit": "%",
                        "response": {
                            "name": "FCT7",
                        },
                    },
                ],
                [
                    {
                        "value": "8",
                        "label": {
                            "value":
                                '"**Services de mobilité automobile** (location courte durée, location longue durée, location sur mesure, autopartage, etc.)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lq5cf72t-RDOP-lto90wqw",
                        "unit": "%",
                        "response": {
                            "name": "FCT8",
                        },
                    },
                ],
                [
                    {
                        "value": "9",
                        "label": {
                            "value": '"**Autre(s) fonction(s) dans la filière automobile**"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lq5cf72t-RDOP-lto8yvgs",
                        "unit": "%",
                        "response": {
                            "name": "FCT9",
                        },
                    },
                ],
            ],
        },
        {
            "id": "ls0ehpzt",
            "componentType": "Input",
            "mandatory": false,
            "page": "9",
            "maxLength": 249,
            "label": {
                "value":
                    '"Veuillez préciser les autres fonctions de votre entreprise dans la filière automobile :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(FCT9, 0) > 0)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lp8g6sye",
                    "page": "5",
                    "label": {
                        "value": '"II - " || "Activité dans la filière automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "FCT9CL",
            },
        },
        {
            "id": "lq5dilup",
            "componentType": "CheckboxGroup",
            "page": "10",
            "label": {
                "value":
                    '"En 2023, quels sont vos principaux marchés autres que celui de l’automobile ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lq5dvrzr",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lp8g6sye",
                    "page": "5",
                    "label": {
                        "value": '"II - " || "Activité dans la filière automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "lq5dilup-QOP-lto8zlez",
                    "label": {
                        "value": '"Aéronautique et spatial"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "AM1",
                    },
                },
                {
                    "id": "lq5dilup-QOP-lto92rsf",
                    "label": {
                        "value": '"Énergie"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "AM2",
                    },
                },
                {
                    "id": "lq5dilup-QOP-lto9c9n0",
                    "label": {
                        "value": '"Ferroviaire"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "AM3",
                    },
                },
                {
                    "id": "lq5dilup-QOP-lto98esw",
                    "label": {
                        "value": '"Autre(s) marché(s)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "AM4",
                    },
                },
                {
                    "id": "lq5dilup-QOP-lto90gv9",
                    "label": {
                        "value": '"Non concerné"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "AM5",
                    },
                },
            ],
        },
        {
            "id": "ls0f1c2q",
            "componentType": "Input",
            "mandatory": false,
            "page": "11",
            "maxLength": 249,
            "label": {
                "value": '"Veuillez préciser les principaux autres marchés de votre entreprise :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100) and (nvl(AM4, false) = true)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lp8g6sye",
                    "page": "5",
                    "label": {
                        "value": '"II - " || "Activité dans la filière automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "AM4CL",
            },
        },
        {
            "id": "lq5dhfbx",
            "componentType": "Sequence",
            "page": "12",
            "label": {
                "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "ls1iftk8",
            "componentType": "Subsequence",
            "goToPage": "13",
            "label": {
                "value": '"Votre positionnement dans la filière automobile en 2023"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1iftk8",
                    "page": "13",
                    "label": {
                        "value": '"Votre positionnement dans la filière automobile en 2023"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "lq5dxfe7",
            "componentType": "CheckboxGroup",
            "page": "13",
            "label": {
                "value":
                    '"En 2023, votre entreprise a-t-elle réalisé des travaux de recherche-développement (R&D) pour son activité automobile ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lq5dkgf4",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1iftk8",
                    "page": "13",
                    "label": {
                        "value": '"Votre positionnement dans la filière automobile en 2023"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "lq5dxfe7-QOP-ls0heaw1",
                    "label": {
                        "value": '"Oui, en interne"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "RD1",
                    },
                },
                {
                    "id": "lq5dxfe7-QOP-ls0h0qj4",
                    "label": {
                        "value":
                            '"Oui, en partenariat avec une autre entreprise (y compris interne au groupe)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "RD2",
                    },
                },
                {
                    "id": "lq5dxfe7-QOP-ls0hgv17",
                    "label": {
                        "value": '"Oui, en partenariat avec un organisme de recherche public"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "RD3",
                    },
                },
                {
                    "id": "lq5dxfe7-QOP-ls0h6u04",
                    "label": {
                        "value": '"Oui, en partenariat avec un pôle de compétitivité automobile"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "RD4",
                    },
                },
                {
                    "id": "lq5dxfe7-QOP-ls0hhdts",
                    "label": {
                        "value":
                            '"Oui, pour le compte d’une autre entreprise (y compris interne au groupe)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "RD5",
                    },
                },
                {
                    "id": "lq5dxfe7-QOP-ls0h95sq",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "RD6",
                    },
                },
            ],
        },
        {
            "id": "lq5dyddc",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "14",
            "label": {
                "value":
                    '"En 2023, avez-vous eu un ou plusieurs donneurs d’ordres pour votre production en lien avec la filière automobile ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "ls0etjvh",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Un donneur d’ordres est une entité qui confie à un sous-traitant la réalisation d’une ou de plusieurs opérations de conception, d’élaboration, de fabrication, de mise en œuvre ou de maintenance du produit."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and ((nvl(FCT1, 0) > 0 or nvl(FCT2, 0) > 0 or nvl(FCT3, 0) > 0) or (isnull(FCT1) or isnull(FCT2) or isnull(FCT3)))',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lq5dyddc-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": 'not(nvl(DO,"")="")',
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            '"Vous n’avez pas répondu à la question III.2 sur l’existence d’un ou de plusieurs éventuel(s) donneur(s) d’ordres. Cette information est essentielle, merci d’y répondre."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1iftk8",
                    "page": "13",
                    "label": {
                        "value": '"Votre positionnement dans la filière automobile en 2023"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui, pour toute la production"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "2",
                    "label": {
                        "value": '"Oui, pour une partie de la production"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "DO",
            },
        },
        {
            "id": "lqzc16m5",
            "componentType": "CheckboxGroup",
            "page": "15",
            "label": {
                "value":
                    '"En 2023, vos activités ont-elles contribué à la conception ou à la production de véhicules hybrides, à moteur électrique, à hydrogène ou thermique ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lqzc20xn",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1iftk8",
                    "page": "13",
                    "label": {
                        "value": '"Votre positionnement dans la filière automobile en 2023"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "lqzc16m5-QOP-ls0gyw1d",
                    "label": {
                        "value": '"Hybrides"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "CONTRIB_HYB",
                    },
                },
                {
                    "id": "lqzc16m5-QOP-ls0hctil",
                    "label": {
                        "value": '"À moteur électrique ou hydrogène"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "CONTRIB_ELEC",
                    },
                },
                {
                    "id": "lqzc16m5-QOP-ls0hfqyi",
                    "label": {
                        "value": '"À moteur thermique"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "CONTRIB_THERM",
                    },
                },
                {
                    "id": "lqzc16m5-QOP-ls0h2019",
                    "label": {
                        "value": '"Ne sais pas"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "CONTRIB_NSP",
                    },
                },
            ],
        },
        {
            "id": "lqzcvhmc",
            "componentType": "CheckboxGroup",
            "page": "16",
            "label": {
                "value":
                    '"En 2023, votre entreprise a-t-elle fait évoluer son activité pour s’adapter à la conception ou la production de véhicules hybrides, à moteur électrique, à hydrogène ou thermique ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lqzcr101",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1iftk8",
                    "page": "13",
                    "label": {
                        "value": '"Votre positionnement dans la filière automobile en 2023"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "lqzcvhmc-QOP-ls0hif9o",
                    "label": {
                        "value": '"Hybrides"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "EVOL_HYB",
                    },
                },
                {
                    "id": "lqzcvhmc-QOP-ls0h0xhs",
                    "label": {
                        "value": '"À moteur électrique ou hydrogène"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "EVOL_ELEC",
                    },
                },
                {
                    "id": "lqzcvhmc-QOP-ls0h667b",
                    "label": {
                        "value": '"À moteur thermique"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "EVOL_THERM",
                    },
                },
                {
                    "id": "lqzcvhmc-QOP-ls0gz3cc",
                    "label": {
                        "value": '"Ne sais pas"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "EVOL_NSP",
                    },
                },
            ],
        },
        {
            "id": "lqzcs8bs",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "17",
            "label": {
                "value":
                    '"En 2023, vos activités ont-elles contribué à la production de véhicules à carburant alternatif (carburant de synthèse, éthanol, superéthanol E85, GPL, GNV, bio GNV, B30, B100, etc.) ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1iftk8",
                    "page": "13",
                    "label": {
                        "value": '"Votre positionnement dans la filière automobile en 2023"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "2",
                    "label": {
                        "value": '"Ne sais pas"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "CONTRIB_ALTER",
            },
        },
        {
            "id": "lqzc7k3n",
            "componentType": "Table",
            "mandatory": false,
            "page": "18",
            "positioning": "HORIZONTAL",
            "label": {
                "value":
                    '"Comment les facteurs suivants ont-ils freiné votre activité automobile en 2023 ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lto8nh41",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(une réponse par ligne)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1iftk8",
                    "page": "13",
                    "label": {
                        "value": '"Votre positionnement dans la filière automobile en 2023"',
                        "type": "VTL|MD",
                    },
                },
            },
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value": '"La demande en France"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48cdkv",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT1",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value": '"La demande à l’étranger"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48kxjv",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT2",
                        },
                    },
                ],
                [
                    {
                        "value": "3",
                        "label": {
                            "value": '"Problèmes d’approvisionnement en semi-conducteurs"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48pjcw",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT3",
                        },
                    },
                ],
                [
                    {
                        "value": "4",
                        "label": {
                            "value":
                                '"Problèmes d’approvisionnement en composants (hors semi-conducteurs)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48rxdo",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT4",
                        },
                    },
                ],
                [
                    {
                        "value": "5",
                        "label": {
                            "value": '"Le coût de l’énergie"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48sf63",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT5",
                        },
                    },
                ],
                [
                    {
                        "value": "6",
                        "label": {
                            "value": '"Le coût des matières premières"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48f1ad",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT6",
                        },
                    },
                ],
                [
                    {
                        "value": "7",
                        "label": {
                            "value": '"Les capacités de financement"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48jby6",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT7",
                        },
                    },
                ],
                [
                    {
                        "value": "8",
                        "label": {
                            "value": '"Les difficultés de logistique"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48rfc4",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT8",
                        },
                    },
                ],
                [
                    {
                        "value": "9",
                        "label": {
                            "value":
                                '"La réglementation (fin programmée des moteurs thermiques, réglementation liée à la sécurité, etc.)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48tup4",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT9",
                        },
                    },
                ],
                [
                    {
                        "value": "10",
                        "label": {
                            "value":
                                '"Le profil du personnel inadapté aux besoins (compétences ou qualifications spécifiques)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48bbdw",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT10",
                        },
                    },
                ],
                [
                    {
                        "value": "11",
                        "label": {
                            "value": '"Les difficultés de recrutement"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48cqd7",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT11",
                        },
                    },
                ],
                [
                    {
                        "value": "12",
                        "label": {
                            "value":
                                '"Stratégie de groupe (décisions d’actionnaires, risque de fermeture ou délocalisation, optimisation et concurrence intragroupe, etc.)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lqzc7k3n-RDOP-lt48rqmz",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Frein important"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Frein modéré"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Pas un frein"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FACT_ACT12",
                        },
                    },
                ],
            ],
        },
        {
            "id": "ls0fk8fo",
            "componentType": "Subsequence",
            "goToPage": "19",
            "label": {
                "value": '"Vos relations interentreprises"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0fk8fo",
                    "page": "19",
                    "label": {
                        "value": '"Vos relations interentreprises"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "lqzdl68d",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "19",
            "label": {
                "value":
                    '"En 2023, l’un de vos clients représentait-il plus de 50 % du chiffre d’affaires de votre entreprise dédié à la filière automobile ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0fk8fo",
                    "page": "19",
                    "label": {
                        "value": '"Vos relations interentreprises"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "2",
                    "label": {
                        "value": '"Ne sais pas"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "P_PCLI",
            },
        },
        {
            "id": "lqzdrwgp",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "20",
            "label": {
                "value":
                    "\"En 2023, votre [entreprise](. 'il s’agit bien de votre entreprise et non de votre groupe') était-elle implantée à l’étranger dans le cadre de son activité automobile (succursale ou établissement localisé à l’étranger) ?\"",
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0fk8fo",
                    "page": "19",
                    "label": {
                        "value": '"Vos relations interentreprises"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "IMPL_ETR",
            },
        },
        {
            "id": "lr4pk780",
            "componentType": "CheckboxGroup",
            "page": "21",
            "label": {
                "value":
                    '"Pour quelle(s) raison(s) votre entreprise était-elle implantée à l’étranger dans le cadre de son activité automobile ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lr4pllhf",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0fk8fo",
                    "page": "19",
                    "label": {
                        "value": '"Vos relations interentreprises"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "lr4pk780-QOP-lto9207g",
                    "label": {
                        "value": '"Accompagner un donneur d’ordres ou par obligation contractuelle"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "IMPL_ETR_OBJ1",
                    },
                },
                {
                    "id": "lr4pk780-QOP-lto8v623",
                    "label": {
                        "value": '"Se rapprocher des sites clients ou du client constructeur"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "IMPL_ETR_OBJ2",
                    },
                },
                {
                    "id": "lr4pk780-QOP-lto8wf80",
                    "label": {
                        "value": '"Réduire le coût de la main d’œuvre"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "IMPL_ETR_OBJ3",
                    },
                },
                {
                    "id": "lr4pk780-QOP-lto93dh3",
                    "label": {
                        "value": '"Pénétrer un marché"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "IMPL_ETR_OBJ4",
                    },
                },
                {
                    "id": "lr4pk780-QOP-lto92idn",
                    "label": {
                        "value": '"Bénéficier d’un savoir-faire existant"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "IMPL_ETR_OBJ5",
                    },
                },
                {
                    "id": "lr4pk780-QOP-lto8ukmo",
                    "label": {
                        "value": '"Produire dans la monnaie locale"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "IMPL_ETR_OBJ6",
                    },
                },
                {
                    "id": "lr4pk780-QOP-lto8xv5w",
                    "label": {
                        "value": '"S’adapter au prix de l’énergie"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "IMPL_ETR_OBJ7",
                    },
                },
                {
                    "id": "lr4pk780-QOP-lto91y1g",
                    "label": {
                        "value": '"Faire face aux difficultés de recrutement et au manque de personnel"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "IMPL_ETR_OBJ8",
                    },
                },
                {
                    "id": "lr4pk780-QOP-lto93u5u",
                    "label": {
                        "value": '"Autre(s) raison(s)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "IMPL_ETR_OBJ9",
                    },
                },
            ],
        },
        {
            "id": "ls0gg8ho",
            "componentType": "Input",
            "mandatory": false,
            "page": "22",
            "maxLength": 249,
            "label": {
                "value": '"Veuillez préciser les autres raisons de votre implantation à l’étranger :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1") and (nvl(IMPL_ETR_OBJ9, false) = true)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0fk8fo",
                    "page": "19",
                    "label": {
                        "value": '"Vos relations interentreprises"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "IMPL_ETR_OBJ9CL",
            },
        },
        {
            "id": "lr4qmnhf",
            "componentType": "Table",
            "mandatory": false,
            "page": "23",
            "positioning": "HORIZONTAL",
            "label": {
                "value":
                    '"Veuillez répartir le chiffre d’affaires de l’activité automobile de votre entreprise en 2023 selon la localisation de vos clients :"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lr4ql8xo",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Une estimation même approximative est préférable à une absence de réponse."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls0gw2kg",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Vous avez ventilé "|| cast(P_LOC_CLI_SOMME, string) || "% de votre CA." ',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lr4qmnhf-RDOP-ls0hd7bm-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI10)) and (0>P_LOC_CLI10 or 100<P_LOC_CLI10))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0hd7bm-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI10))  and round(P_LOC_CLI10,0)<>P_LOC_CLI10)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0higrs-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI9)) and (0>P_LOC_CLI9 or 100<P_LOC_CLI9))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0higrs-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI9))  and round(P_LOC_CLI9,0)<>P_LOC_CLI9)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0hgyey-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI8)) and (0>P_LOC_CLI8 or 100<P_LOC_CLI8))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0hgyey-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI8))  and round(P_LOC_CLI8,0)<>P_LOC_CLI8)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0hf75e-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI7)) and (0>P_LOC_CLI7 or 100<P_LOC_CLI7))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0hf75e-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI7))  and round(P_LOC_CLI7,0)<>P_LOC_CLI7)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0hd0al-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI6)) and (0>P_LOC_CLI6 or 100<P_LOC_CLI6))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0hd0al-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI6))  and round(P_LOC_CLI6,0)<>P_LOC_CLI6)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0h112l-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI5)) and (0>P_LOC_CLI5 or 100<P_LOC_CLI5))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0h112l-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI5))  and round(P_LOC_CLI5,0)<>P_LOC_CLI5)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0gxskc-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI4)) and (0>P_LOC_CLI4 or 100<P_LOC_CLI4))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0gxskc-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI4))  and round(P_LOC_CLI4,0)<>P_LOC_CLI4)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0h6kas-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI3)) and (0>P_LOC_CLI3 or 100<P_LOC_CLI3))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0h6kas-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI3))  and round(P_LOC_CLI3,0)<>P_LOC_CLI3)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0gyjm9-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI2)) and (0>P_LOC_CLI2 or 100<P_LOC_CLI2))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0gyjm9-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI2))  and round(P_LOC_CLI2,0)<>P_LOC_CLI2)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0h909b-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI1)) and (0>P_LOC_CLI1 or 100<P_LOC_CLI1))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-RDOP-ls0h909b-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_CLI1))  and round(P_LOC_CLI1,0)<>P_LOC_CLI1)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qmnhf-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(P_LOC_CLI_SOMME < 100 or P_LOC_CLI_SOMME > 100)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            '"Attention, "|| cast(P_LOC_CLI_SOMME, string) ||" % de votre chiffre d\'affaires automobile a été réparti suivant la localisation de vos clients. Merci de vérifier votre saisie pour atteindre 100 %" ',
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0fk8fo",
                    "page": "19",
                    "label": {
                        "value": '"Vos relations interentreprises"',
                        "type": "VTL|MD",
                    },
                },
            },
            "header": [
                {
                    "label": {
                        "value": "",
                        "type": "VTL|MD",
                    },
                },
                {
                    "label": {
                        "value": '"Répartition du chiffre d’affaires automobile"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value": '"France"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qmnhf-RDOP-ls0h909b",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_CLI1",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value": '"Pays de l’Union européenne (hors France)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qmnhf-RDOP-ls0gyjm9",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_CLI2",
                        },
                    },
                ],
                [
                    {
                        "value": "3",
                        "label": {
                            "value": '"Royaume-Uni"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qmnhf-RDOP-ls0h6kas",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_CLI3",
                        },
                    },
                ],
                [
                    {
                        "value": "4",
                        "label": {
                            "value": '"Autres pays d’Europe (y compris Russie et Turquie)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qmnhf-RDOP-ls0gxskc",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_CLI4",
                        },
                    },
                ],
                [
                    {
                        "value": "5",
                        "label": {
                            "value": '"Chine"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qmnhf-RDOP-ls0h112l",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_CLI5",
                        },
                    },
                ],
                [
                    {
                        "value": "6",
                        "label": {
                            "value": '"Autres pays d’Asie"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qmnhf-RDOP-ls0hd0al",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_CLI6",
                        },
                    },
                ],
                [
                    {
                        "value": "7",
                        "label": {
                            "value": '"Maghreb"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qmnhf-RDOP-ls0hf75e",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_CLI7",
                        },
                    },
                ],
                [
                    {
                        "value": "8",
                        "label": {
                            "value": '"Autres pays d’Afrique"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qmnhf-RDOP-ls0hgyey",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_CLI8",
                        },
                    },
                ],
                [
                    {
                        "value": "9",
                        "label": {
                            "value": '"Amérique"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qmnhf-RDOP-ls0higrs",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_CLI9",
                        },
                    },
                ],
                [
                    {
                        "value": "10",
                        "label": {
                            "value": '"Autres pays"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qmnhf-RDOP-ls0hd7bm",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_CLI10",
                        },
                    },
                ],
            ],
        },
        {
            "id": "lr4qurx6",
            "componentType": "Table",
            "mandatory": false,
            "page": "24",
            "positioning": "HORIZONTAL",
            "label": {
                "value":
                    '"Veuillez répartir les montants facturés liés à l’activité automobile de votre entreprise en 2023 selon la localisation de vos fournisseurs :"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lr4qq28y",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Une estimation même approximative est préférable à une absence de réponse."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls0h9134",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Vous avez ventilé "|| cast(P_LOC_FOUR_SOMME, string) || "% des montants facturés à vos fournisseurs." ',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lr4qurx6-RDOP-ls0gyfq1-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(P_LOC_FOUR10)) and (0>P_LOC_FOUR10 or 100<P_LOC_FOUR10))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0gyfq1-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(P_LOC_FOUR10))  and round(P_LOC_FOUR10,0)<>P_LOC_FOUR10)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0h390j-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR9)) and (0>P_LOC_FOUR9 or 100<P_LOC_FOUR9))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0h390j-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR9))  and round(P_LOC_FOUR9,0)<>P_LOC_FOUR9)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0hdup2-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR8)) and (0>P_LOC_FOUR8 or 100<P_LOC_FOUR8))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0hdup2-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR8))  and round(P_LOC_FOUR8,0)<>P_LOC_FOUR8)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0h039u-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR7)) and (0>P_LOC_FOUR7 or 100<P_LOC_FOUR7))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0h039u-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR7))  and round(P_LOC_FOUR7,0)<>P_LOC_FOUR7)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0hcjak-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR6)) and (0>P_LOC_FOUR6 or 100<P_LOC_FOUR6))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0hcjak-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR6))  and round(P_LOC_FOUR6,0)<>P_LOC_FOUR6)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0h1puc-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR5)) and (0>P_LOC_FOUR5 or 100<P_LOC_FOUR5))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0h1puc-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR5))  and round(P_LOC_FOUR5,0)<>P_LOC_FOUR5)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0gzj7w-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR4)) and (0>P_LOC_FOUR4 or 100<P_LOC_FOUR4))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0gzj7w-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR4))  and round(P_LOC_FOUR4,0)<>P_LOC_FOUR4)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0hijje-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR3)) and (0>P_LOC_FOUR3 or 100<P_LOC_FOUR3))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0hijje-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR3))  and round(P_LOC_FOUR3,0)<>P_LOC_FOUR3)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0hazbv-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR2)) and (0>P_LOC_FOUR2 or 100<P_LOC_FOUR2))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0hazbv-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR2))  and round(P_LOC_FOUR2,0)<>P_LOC_FOUR2)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0h1l5v-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR1)) and (0>P_LOC_FOUR1 or 100<P_LOC_FOUR1))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-RDOP-ls0h1l5v-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_FOUR1))  and round(P_LOC_FOUR1,0)<>P_LOC_FOUR1)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4qurx6-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(P_LOC_FOUR_SOMME < 100 or P_LOC_FOUR_SOMME > 100)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            '"Attention, "|| cast(P_LOC_FOUR_SOMME, string) ||" %  des montants facturés pour l\'activité automobile ont été répartis suivant la localisation de vos fournisseurs. Merci de vérifier votre saisie pour atteindre 100 %" ',
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0fk8fo",
                    "page": "19",
                    "label": {
                        "value": '"Vos relations interentreprises"',
                        "type": "VTL|MD",
                    },
                },
            },
            "header": [
                {
                    "label": {
                        "value": "",
                        "type": "VTL|MD",
                    },
                },
                {
                    "label": {
                        "value": '"Répartition des montants facturés pour l’activité automobile"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value": '"France"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qurx6-RDOP-ls0h1l5v",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_FOUR1",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value": '"Pays de l’Union européenne (hors France)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qurx6-RDOP-ls0hazbv",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_FOUR2",
                        },
                    },
                ],
                [
                    {
                        "value": "3",
                        "label": {
                            "value": '"Royaume-Uni"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qurx6-RDOP-ls0hijje",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_FOUR3",
                        },
                    },
                ],
                [
                    {
                        "value": "4",
                        "label": {
                            "value": '"Autres pays d’Europe (y compris Russie et Turquie)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qurx6-RDOP-ls0gzj7w",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_FOUR4",
                        },
                    },
                ],
                [
                    {
                        "value": "5",
                        "label": {
                            "value": '"Chine"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qurx6-RDOP-ls0h1puc",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_FOUR5",
                        },
                    },
                ],
                [
                    {
                        "value": "6",
                        "label": {
                            "value": '"Autres pays d’Asie"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qurx6-RDOP-ls0hcjak",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_FOUR6",
                        },
                    },
                ],
                [
                    {
                        "value": "7",
                        "label": {
                            "value": '"Maghreb"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qurx6-RDOP-ls0h039u",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_FOUR7",
                        },
                    },
                ],
                [
                    {
                        "value": "8",
                        "label": {
                            "value": '"Autres pays d’Afrique"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qurx6-RDOP-ls0hdup2",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_FOUR8",
                        },
                    },
                ],
                [
                    {
                        "value": "9",
                        "label": {
                            "value": '"Amérique"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qurx6-RDOP-ls0h390j",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_FOUR9",
                        },
                    },
                ],
                [
                    {
                        "value": "10",
                        "label": {
                            "value": '"Autres pays"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4qurx6-RDOP-ls0gyfq1",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_FOUR10",
                        },
                    },
                ],
            ],
        },
        {
            "id": "ls0jagld",
            "componentType": "Subsequence",
            "goToPage": "25",
            "label": {
                "value": '"Vos activités de donneur d’ordres pour l’activité automobile"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0jagld",
                    "page": "25",
                    "label": {
                        "value": '"Vos activités de donneur d’ordres pour l’activité automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "lr4ra4ru",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "25",
            "label": {
                "value":
                    '"En 2023, votre entreprise a-t-elle sous-traité une partie de son activité automobile, y compris au sein du groupe ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "ls0j3ksf",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Est considérée comme sous-traitance toute tâche confiée à une autre entreprise (y compris du groupe) entrant dans le processus de production."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lr4ra4ru-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": 'not(nvl(ST,"")="")',
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            "\"Vous n'avez pas répondu à la question III.13 sur la sous-traitance éventuelle d'une partie de vos activités à une autre entreprise. Cette information est essentielle, merci d'y répondre.\"",
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0jagld",
                    "page": "25",
                    "label": {
                        "value": '"Vos activités de donneur d’ordres pour l’activité automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "ST",
            },
        },
        {
            "id": "lr4r76q9",
            "componentType": "Table",
            "mandatory": false,
            "page": "26",
            "positioning": "HORIZONTAL",
            "label": {
                "value": '"Quel était le type de sous-traitance confiée ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lr4r7b90",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"**La sous-traitance est dite de spécialité** lorsque le donneur d’ordres fait appel à un « spécialiste » disposant d’équipements et de savoir faire dont il n’est pas lui-même pourvu. Par exemple, une société de transport souhaitant développer un logiciel interne de « traçabilité » des camions et faisant appel à une société d’informatique pour exécuter la tâche."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0jagld",
                    "page": "25",
                    "label": {
                        "value": '"Vos activités de donneur d’ordres pour l’activité automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value":
                                '"Sous-traitance de spécialité (votre entreprise n’a pas le savoir-faire)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr4r76q9-RDOP-lr4rv90a",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "ST_SPE",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value":
                                '"Sous-traitance de capacité (votre entreprise n’a pas les moyens de production suffisants)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr4r76q9-RDOP-lr4rryo5",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "ST_CAP",
                        },
                    },
                ],
            ],
        },
        {
            "id": "lt4ergxl",
            "componentType": "InputNumber",
            "mandatory": false,
            "page": "27",
            "min": 0.0,
            "max": 100.0,
            "decimals": 0,
            "label": {
                "value":
                    '"Quelle est la part de sous-traitance dans le total des achats concernant la filière automobile de votre entreprise ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lt4ew6kd",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Une estimation même approximative est préférable à une absence de réponse."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lt4ergxl-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_ST)) and (0>P_ST or 100<P_ST))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lt4ergxl-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_ST))  and round(P_ST,0)<>P_ST)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0jagld",
                    "page": "25",
                    "label": {
                        "value": '"Vos activités de donneur d’ordres pour l’activité automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "unit": "%",
            "response": {
                "name": "P_ST",
            },
        },
        {
            "id": "lr4rl9iu",
            "componentType": "Table",
            "mandatory": false,
            "page": "28",
            "positioning": "HORIZONTAL",
            "label": {
                "value":
                    '"Veuillez répartir les dépenses de sous-traitance liées à l’activité automobile de votre entreprise selon la localisation géographique de vos sous-traitants :"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lr4rdy4f",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Une estimation même approximative est préférable à une absence de réponse."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls0jftrq",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Vous avez ventilé "|| cast(P_LOC_ST_SOMME, string) || "% de vos dépenses de sous-traitance." ',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lr4rl9iu-RDOP-ls0jskk7-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST10)) and (0>P_LOC_ST10 or 100<P_LOC_ST10))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0jskk7-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST10))  and round(P_LOC_ST10,0)<>P_LOC_ST10)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0jy5hw-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST9)) and (0>P_LOC_ST9 or 100<P_LOC_ST9))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0jy5hw-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST9))  and round(P_LOC_ST9,0)<>P_LOC_ST9)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0jp20d-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST8)) and (0>P_LOC_ST8 or 100<P_LOC_ST8))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0jp20d-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST8))  and round(P_LOC_ST8,0)<>P_LOC_ST8)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0js7aj-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST7)) and (0>P_LOC_ST7 or 100<P_LOC_ST7))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0js7aj-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST7))  and round(P_LOC_ST7,0)<>P_LOC_ST7)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0k19he-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST6)) and (0>P_LOC_ST6 or 100<P_LOC_ST6))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0k19he-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST6))  and round(P_LOC_ST6,0)<>P_LOC_ST6)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0juvw8-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST5)) and (0>P_LOC_ST5 or 100<P_LOC_ST5))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0juvw8-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST5))  and round(P_LOC_ST5,0)<>P_LOC_ST5)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0js2kt-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST4)) and (0>P_LOC_ST4 or 100<P_LOC_ST4))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0js2kt-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST4))  and round(P_LOC_ST4,0)<>P_LOC_ST4)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0jw4es-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST3)) and (0>P_LOC_ST3 or 100<P_LOC_ST3))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0jw4es-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST3))  and round(P_LOC_ST3,0)<>P_LOC_ST3)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0jstmn-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST2)) and (0>P_LOC_ST2 or 100<P_LOC_ST2))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0jstmn-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST2))  and round(P_LOC_ST2,0)<>P_LOC_ST2)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0k78xd-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST1)) and (0>P_LOC_ST1 or 100<P_LOC_ST1))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-RDOP-ls0k78xd-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(not(isnull(P_LOC_ST1))  and round(P_LOC_ST1,0)<>P_LOC_ST1)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "lr4rl9iu-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": "not(P_LOC_ST_SOMME < 100 or P_LOC_ST_SOMME > 100)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            '"Attention, "|| cast(P_LOC_ST_SOMME, string) ||" % de vos dépenses de sous-traitance ont été réparties suivant la localisation de vos fournisseurs. Merci de vérifier votre saisie pour atteindre 100 %" ',
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0jagld",
                    "page": "25",
                    "label": {
                        "value": '"Vos activités de donneur d’ordres pour l’activité automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "header": [
                {
                    "label": {
                        "value": "",
                        "type": "VTL|MD",
                    },
                },
                {
                    "label": {
                        "value":
                            '"Répartition des dépenses de sous-traitance pour l’activité automobile"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value": '"France"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4rl9iu-RDOP-ls0k78xd",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_ST1",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value": '"Pays de l’Union européenne (hors France)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4rl9iu-RDOP-ls0jstmn",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_ST2",
                        },
                    },
                ],
                [
                    {
                        "value": "3",
                        "label": {
                            "value": '"Royaume-Uni"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4rl9iu-RDOP-ls0jw4es",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_ST3",
                        },
                    },
                ],
                [
                    {
                        "value": "4",
                        "label": {
                            "value": '"Autres pays d’Europe (y compris Russie et Turquie)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4rl9iu-RDOP-ls0js2kt",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_ST4",
                        },
                    },
                ],
                [
                    {
                        "value": "5",
                        "label": {
                            "value": '"Chine"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4rl9iu-RDOP-ls0juvw8",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_ST5",
                        },
                    },
                ],
                [
                    {
                        "value": "6",
                        "label": {
                            "value": '"Autres pays d’Asie"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4rl9iu-RDOP-ls0k19he",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_ST6",
                        },
                    },
                ],
                [
                    {
                        "value": "7",
                        "label": {
                            "value": '"Maghreb"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4rl9iu-RDOP-ls0js7aj",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_ST7",
                        },
                    },
                ],
                [
                    {
                        "value": "8",
                        "label": {
                            "value": '"Autres pays d’Afrique"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4rl9iu-RDOP-ls0jp20d",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_ST8",
                        },
                    },
                ],
                [
                    {
                        "value": "9",
                        "label": {
                            "value": '"Amérique"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4rl9iu-RDOP-ls0jy5hw",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_ST9",
                        },
                    },
                ],
                [
                    {
                        "value": "10",
                        "label": {
                            "value": '"Autres pays"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "lr4rl9iu-RDOP-ls0jskk7",
                        "unit": "%",
                        "response": {
                            "name": "P_LOC_ST10",
                        },
                    },
                ],
            ],
        },
        {
            "id": "lr4rxiry",
            "componentType": "CheckboxGroup",
            "page": "29",
            "label": {
                "value":
                    '"Pour quelle(s) raison(s) votre entreprise sous-traite-t-elle à l’étranger dans le cadre de son activité automobile ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lr4sa6k7",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0jagld",
                    "page": "25",
                    "label": {
                        "value": '"Vos activités de donneur d’ordres pour l’activité automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "lr4rxiry-QOP-lto96nle",
                    "label": {
                        "value": '"Sous-traiter au sein du même groupe"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "ST_ETR_OBJ1",
                    },
                },
                {
                    "id": "lr4rxiry-QOP-lto9bm82",
                    "label": {
                        "value": '"Accompagner un donneur d’ordres ou par obligation contractuelle"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "ST_ETR_OBJ2",
                    },
                },
                {
                    "id": "lr4rxiry-QOP-lto97u52",
                    "label": {
                        "value": '"Réduire le coût de la main d’œuvre"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "ST_ETR_OBJ3",
                    },
                },
                {
                    "id": "lr4rxiry-QOP-lto8um1f",
                    "label": {
                        "value": '"Pénétrer un marché"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "ST_ETR_OBJ4",
                    },
                },
                {
                    "id": "lr4rxiry-QOP-lto8zx47",
                    "label": {
                        "value": '"Bénéficier d’un savoir-faire existant"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "ST_ETR_OBJ5",
                    },
                },
                {
                    "id": "lr4rxiry-QOP-lto8u69k",
                    "label": {
                        "value": '"Produire dans la monnaie locale"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "ST_ETR_OBJ6",
                    },
                },
                {
                    "id": "lr4rxiry-QOP-lto8x3yx",
                    "label": {
                        "value": '"S’adapter au prix de l’énergie"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "ST_ETR_OBJ7",
                    },
                },
                {
                    "id": "lr4rxiry-QOP-lto9epo0",
                    "label": {
                        "value": '"Faire face aux difficultés de recrutement et au manque de personnel"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "ST_ETR_OBJ8",
                    },
                },
                {
                    "id": "lr4rxiry-QOP-lto97gl9",
                    "label": {
                        "value": '"Autre(s) raison(s)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "ST_ETR_OBJ9",
                    },
                },
            ],
        },
        {
            "id": "ls0k2lba",
            "componentType": "Input",
            "mandatory": false,
            "page": "30",
            "maxLength": 249,
            "label": {
                "value": '"Veuillez préciser les autres raisons de votre sous-traitance à l’étranger :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100) and (nvl(ST_ETR_OBJ9, false) = true)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0jagld",
                    "page": "25",
                    "label": {
                        "value": '"Vos activités de donneur d’ordres pour l’activité automobile"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "ST_ETR_OBJ9CL",
            },
        },
        {
            "id": "ls0k1t61",
            "componentType": "Subsequence",
            "goToPage": "31",
            "label": {
                "value": '"Vos difficultés de recrutement"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0k1t61",
                    "page": "31",
                    "label": {
                        "value": '"Vos difficultés de recrutement"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "lr4sz5ql",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "31",
            "label": {
                "value":
                    '"Avez-vous rencontré des difficultés de recrutement en 2023 dans le cadre de votre activité automobile ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lr4sz5ql-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": 'not(nvl(DIFF_RECRUT,"")="")',
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            "\"Vous n'avez pas répondu à la question III.19 sur les difficultés de recrutement éventuelles de votre entreprise dans le cadre de son activité automobile. Cette information est essentielle, merci d'y répondre.\"",
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0k1t61",
                    "page": "31",
                    "label": {
                        "value": '"Vos difficultés de recrutement"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "DIFF_RECRUT",
            },
        },
        {
            "id": "lr4svotp",
            "componentType": "CheckboxGroup",
            "page": "32",
            "label": {
                "value": '"Quelle(s) difficulté(s) avez-vous rencontrée(s) ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lr4spouo",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0k1t61",
                    "page": "31",
                    "label": {
                        "value": '"Vos difficultés de recrutement"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "lr4svotp-QOP-lto9dpxk",
                    "label": {
                        "value": '"Le manque de candidatures"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIFF_RECRUT_TYPE1",
                    },
                },
                {
                    "id": "lr4svotp-QOP-lto9at7c",
                    "label": {
                        "value":
                            '"Le décalage existant entre les compétences des candidats et les besoins de l’entreprise"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIFF_RECRUT_TYPE2",
                    },
                },
                {
                    "id": "lr4svotp-QOP-lto96agk",
                    "label": {
                        "value": '"Le manque de parcours de formation adaptés"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIFF_RECRUT_TYPE3",
                    },
                },
                {
                    "id": "lr4svotp-QOP-lto96ob6",
                    "label": {
                        "value": '"Le manque d’expertise de l’entreprise en recrutement"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIFF_RECRUT_TYPE4",
                    },
                },
                {
                    "id": "lr4svotp-QOP-lto94ooy",
                    "label": {
                        "value": '"Le manque d’attractivité du métier"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIFF_RECRUT_TYPE5",
                    },
                },
                {
                    "id": "lr4svotp-QOP-lto94srf",
                    "label": {
                        "value":
                            '"Les conditions de travail (salaire, statut, horaires, durée de travail)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIFF_RECRUT_TYPE6",
                    },
                },
                {
                    "id": "lr4svotp-QOP-lto99t96",
                    "label": {
                        "value": '"La localisation de l’entreprise"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIFF_RECRUT_TYPE7",
                    },
                },
                {
                    "id": "lr4svotp-QOP-lto8zhjz",
                    "label": {
                        "value": '"La concurrence avec d’autres entreprises"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIFF_RECRUT_TYPE8",
                    },
                },
                {
                    "id": "lr4svotp-QOP-lto97bi1",
                    "label": {
                        "value": '"Autre(s) difficulté(s)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIFF_RECRUT_TYPE9",
                    },
                },
            ],
        },
        {
            "id": "ls1huqiz",
            "componentType": "Input",
            "mandatory": false,
            "page": "33",
            "maxLength": 249,
            "label": {
                "value": '"Veuillez préciser les autres difficultés de recrutement rencontrées :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1") and (nvl(DIFF_RECRUT_TYPE9, false) = true)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0k1t61",
                    "page": "31",
                    "label": {
                        "value": '"Vos difficultés de recrutement"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "DIFF_RECRUT_TYPE9CL",
            },
        },
        {
            "id": "lr4t2y0a",
            "componentType": "Table",
            "mandatory": false,
            "page": "34",
            "positioning": "HORIZONTAL",
            "label": {
                "value":
                    '"Pour pallier ces difficultés, quelle(s) stratégie(s) avez-vous développée(s) ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "ls1hvwa5",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(une réponse par ligne)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0k1t61",
                    "page": "31",
                    "label": {
                        "value": '"Vos difficultés de recrutement"',
                        "type": "VTL|MD",
                    },
                },
            },
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value": '"La polyvalence de vos salariés"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr4t2y0a-RDOP-lto94q5p",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "DIFF_DEV1",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value": '"La formation interne"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr4t2y0a-RDOP-lto9d33v",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "DIFF_DEV2",
                        },
                    },
                ],
                [
                    {
                        "value": "3",
                        "label": {
                            "value": '"Le recours à l’alternance"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr4t2y0a-RDOP-lto9cojf",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "DIFF_DEV3",
                        },
                    },
                ],
                [
                    {
                        "value": "4",
                        "label": {
                            "value": '"Le recours à l’intérim"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr4t2y0a-RDOP-lto8z4on",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "DIFF_DEV4",
                        },
                    },
                ],
                [
                    {
                        "value": "5",
                        "label": {
                            "value": '"Autre(s) stratégie(s)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr4t2y0a-RDOP-lto96gps",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "DIFF_DEV5",
                        },
                    },
                ],
            ],
        },
        {
            "id": "ls1igru9",
            "componentType": "Input",
            "mandatory": false,
            "page": "35",
            "maxLength": 249,
            "label": {
                "value": '"Veuillez préciser les autres stratégies mises en place :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1") and (nvl(DIFF_DEV5, "0") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lq5dhfbx",
                    "page": "12",
                    "label": {
                        "value": '"III - " || "Analyse de l’activité sur le marché automobile"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls0k1t61",
                    "page": "31",
                    "label": {
                        "value": '"Vos difficultés de recrutement"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "DIFF_DEV5CL",
            },
        },
        {
            "id": "lr8yj12s",
            "componentType": "Sequence",
            "page": "36",
            "label": {
                "value": '"IV - " || "Adaptations et perspectives"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "ls1i9s68",
            "componentType": "Subsequence",
            "goToPage": "37",
            "label": {
                "value":
                    '"Les projets d’amélioration de la performance environnementale de votre entreprise"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1i9s68",
                    "page": "37",
                    "label": {
                        "value":
                            '"Les projets d’amélioration de la performance environnementale de votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "lr8z6nl5",
            "componentType": "Table",
            "mandatory": false,
            "page": "37",
            "positioning": "HORIZONTAL",
            "label": {
                "value":
                    '"Dans le cadre de son activité automobile, votre entreprise a-t-elle mis en place des projets pour améliorer la performance environnementale ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lto8hhw9",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(une réponse par ligne)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lr8z6nl5-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            'not(nvl(PROJ_ENV1,"")="" and nvl(PROJ_ENV2,"")="" and nvl(PROJ_ENV3,"")="" and nvl(PROJ_ENV4,"")="" and nvl(PROJ_ENV5,"")="")',
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            "\"Vous n'avez pas répondu à la question IV.1 sur les projets pour améliorer la performance environnementale de votre entreprise dans le cadre de son activité automobile . Cette information est essentielle, merci d'y répondre.\"",
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1i9s68",
                    "page": "37",
                    "label": {
                        "value":
                            '"Les projets d’amélioration de la performance environnementale de votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value": '"Pour les locaux et / ou sites de production"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr8z6nl5-RDOP-lr8zv3za",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "PROJ_ENV1",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value": '"Pour les procédés de production"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr8z6nl5-RDOP-lr8zeul4",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "PROJ_ENV2",
                        },
                    },
                ],
                [
                    {
                        "value": "3",
                        "label": {
                            "value": '"Pour les transports et / ou la logistique d’approvisionnement"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr8z6nl5-RDOP-lr8zh72j",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "PROJ_ENV3",
                        },
                    },
                ],
                [
                    {
                        "value": "4",
                        "label": {
                            "value": '"Lors des essais, certifications"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr8z6nl5-RDOP-lr8zpl3r",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "PROJ_ENV4",
                        },
                    },
                ],
                [
                    {
                        "value": "5",
                        "label": {
                            "value": '"Pour les produits finaux"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr8z6nl5-RDOP-lr8zfm2j",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Non concerné"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "PROJ_ENV5",
                        },
                    },
                ],
            ],
        },
        {
            "id": "lr8zgae2",
            "componentType": "CheckboxGroup",
            "page": "38",
            "label": {
                "value":
                    '"Concernant les produits finaux, quel(s) est (sont) le(s) type(s) de projets mis en place (seul ou à la demande de vos clients) ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lr8zbf9d",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1i9s68",
                    "page": "37",
                    "label": {
                        "value":
                            '"Les projets d’amélioration de la performance environnementale de votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "lr8zgae2-QOP-lto994e2",
                    "label": {
                        "value": '"Réduction de la consommation de carburant"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "PROJ_PF1",
                    },
                },
                {
                    "id": "lr8zgae2-QOP-lto8xbh0",
                    "label": {
                        "value": '"Déploiement de carburants alternatifs"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "PROJ_PF2",
                    },
                },
                {
                    "id": "lr8zgae2-QOP-lto98aaa",
                    "label": {
                        "value": '"Véhicule hybride, électrique ou à hydrogène"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "PROJ_PF3",
                    },
                },
                {
                    "id": "lr8zgae2-QOP-lto8wc7y",
                    "label": {
                        "value": '"Amélioration de l\'aérodynamisme du véhicule"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "PROJ_PF4",
                    },
                },
                {
                    "id": "lr8zgae2-QOP-lto92h3p",
                    "label": {
                        "value": '"Allègement des matériaux"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "PROJ_PF5",
                    },
                },
                {
                    "id": "lr8zgae2-QOP-lto96snx",
                    "label": {
                        "value": '"Utilisation de matériaux recyclés ou bas carbone"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "PROJ_PF6",
                    },
                },
                {
                    "id": "lr8zgae2-QOP-lto9cxx6",
                    "label": {
                        "value": '"Réparabilité des produits"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "PROJ_PF7",
                    },
                },
                {
                    "id": "lr8zgae2-QOP-lto9egrd",
                    "label": {
                        "value": '"Autre(s) type(s) de projets"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "PROJ_PF8",
                    },
                },
            ],
        },
        {
            "id": "ls1i8zhg",
            "componentType": "Input",
            "mandatory": false,
            "page": "39",
            "maxLength": 249,
            "label": {
                "value": '"Veuillez préciser les autres projets mis en place :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1") and (nvl(PROJ_PF8, false) = true)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1i9s68",
                    "page": "37",
                    "label": {
                        "value":
                            '"Les projets d’amélioration de la performance environnementale de votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "PROJ_PF8CL",
            },
        },
        {
            "id": "ls1jhh19",
            "componentType": "Subsequence",
            "goToPage": "40",
            "label": {
                "value": '"Diversification des activités de votre entreprise"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jhh19",
                    "page": "40",
                    "label": {
                        "value": '"Diversification des activités de votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "lr8zxnq1",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "40",
            "label": {
                "value":
                    "\"Votre entreprise a-t-elle cherché à diversifier son activité au sein du [marché automobile](. 'développement de votre activité en lien avec la filière') ?\"",
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jhh19",
                    "page": "40",
                    "label": {
                        "value": '"Diversification des activités de votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui, avec succès"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "2",
                    "label": {
                        "value": '"Oui, sans succès"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "3",
                    "label": {
                        "value": '"Oui, en attente de résultats"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "DIV_INT",
            },
        },
        {
            "id": "lr9132f2",
            "componentType": "CheckboxGroup",
            "page": "41",
            "label": {
                "value": '"Pour quel(s) type(s) d’activités ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lr90lnzl",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jhh19",
                    "page": "40",
                    "label": {
                        "value": '"Diversification des activités de votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "lr9132f2-QOP-lto98fmb",
                    "label": {
                        "value": '"Commerce"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIV_INT_ACT1",
                    },
                },
                {
                    "id": "lr9132f2-QOP-lto8txoz",
                    "label": {
                        "value": '"Production"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIV_INT_ACT2",
                    },
                },
                {
                    "id": "lr9132f2-QOP-lto8v4e1",
                    "label": {
                        "value": '"Ingénierie"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIV_INT_ACT3",
                    },
                },
                {
                    "id": "lr9132f2-QOP-lto9atx4",
                    "label": {
                        "value": '"Services de mobilité"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIV_INT_ACT4",
                    },
                },
                {
                    "id": "lr9132f2-QOP-lto8yvtc",
                    "label": {
                        "value": '"Autre(s) activité(s)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIV_INT_ACT5",
                    },
                },
            ],
        },
        {
            "id": "ls1jw0hg",
            "componentType": "Input",
            "mandatory": false,
            "page": "42",
            "maxLength": 249,
            "label": {
                "value": '"Veuillez préciser les autres activités :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0") and (nvl(DIV_INT_ACT5, false) = true)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jhh19",
                    "page": "40",
                    "label": {
                        "value": '"Diversification des activités de votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "DIV_INT_ACT5CL",
            },
        },
        {
            "id": "lr91clpt",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "43",
            "label": {
                "value":
                    '"Votre entreprise a-t-elle cherché à diversifier son activité en dehors du marché automobile ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jhh19",
                    "page": "40",
                    "label": {
                        "value": '"Diversification des activités de votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui, avec succès"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "2",
                    "label": {
                        "value": '"Oui, sans succès"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "3",
                    "label": {
                        "value": '"Oui, en attente de résultats"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "DIV_EXT",
            },
        },
        {
            "id": "lr91iw5d",
            "componentType": "CheckboxGroup",
            "page": "44",
            "label": {
                "value": '"Pour quel(s) marché(s) ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lr91v4bs",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jhh19",
                    "page": "40",
                    "label": {
                        "value": '"Diversification des activités de votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "lr91iw5d-QOP-lto95180",
                    "label": {
                        "value": '"Aéronautique et spatial"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIV_EXT_MAR1",
                    },
                },
                {
                    "id": "lr91iw5d-QOP-lto8v6d3",
                    "label": {
                        "value": '"Énergie"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIV_EXT_MAR2",
                    },
                },
                {
                    "id": "lr91iw5d-QOP-lto99zds",
                    "label": {
                        "value": '"Ferroviaire"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIV_EXT_MAR3",
                    },
                },
                {
                    "id": "lr91iw5d-QOP-lto8vz2j",
                    "label": {
                        "value": '"Autre(s) marché(s)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "DIV_EXT_MAR4",
                    },
                },
            ],
        },
        {
            "id": "ls1k5ber",
            "componentType": "Input",
            "mandatory": false,
            "page": "45",
            "maxLength": 249,
            "label": {
                "value": '"Veuillez préciser les autres marchés :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0") and (nvl(DIV_EXT_MAR4, false) = true)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jhh19",
                    "page": "40",
                    "label": {
                        "value": '"Diversification des activités de votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "DIV_EXT_MAR4CL",
            },
        },
        {
            "id": "ls1jshd0",
            "componentType": "Subsequence",
            "goToPage": "46",
            "label": {
                "value": '"Soutiens financiers reçus par votre entreprise"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jshd0",
                    "page": "46",
                    "label": {
                        "value": '"Soutiens financiers reçus par votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "lr92mqpo",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "46",
            "label": {
                "value":
                    '"En 2023, votre entreprise a-t-elle bénéficié d’aides publiques dans le cadre de son activité automobile ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "ls1jt5zx",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"On entend par aides publiques : les crédits d’impôts, les subventions des collectivités et des organismes gouvernementaux nationaux ou européens."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "lr92mqpo-CI-0",
                    "typeOfControl": "CONSISTENCY",
                    "criticality": "INFO",
                    "control": {
                        "value": 'not(nvl(SOUTFIN,"")="")',
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value":
                            "\"Vous n'avez pas répondu à la question IV.10 sur les aides publiques dont votre entreprise a pu potentiellement bénéficier dans le cadre de son activité automobile. Cette information est essentielle, merci d'y répondre.\"",
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jshd0",
                    "page": "46",
                    "label": {
                        "value": '"Soutiens financiers reçus par votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "SOUTFIN",
            },
        },
        {
            "id": "lr92gnsw",
            "componentType": "CheckboxGroup",
            "page": "47",
            "label": {
                "value": '"De quel(s) type(s) d’aides publiques votre entreprise a-t-elle bénéficié ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "lr92tdad",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jshd0",
                    "page": "46",
                    "label": {
                        "value": '"Soutiens financiers reçus par votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "lr92gnsw-QOP-lto997nc",
                    "label": {
                        "value": '"Crédit d’impôt recherche (CIR)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "SOUTFIN_TYPE1",
                    },
                },
                {
                    "id": "lr92gnsw-QOP-lto9eww6",
                    "label": {
                        "value":
                            '"Financement des collectivités territoriales (région, département, commune, etc.)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "SOUTFIN_TYPE2",
                    },
                },
                {
                    "id": "lr92gnsw-QOP-lto97526",
                    "label": {
                        "value":
                            '"Financement des organismes gouvernementaux nationaux (y compris Bpifrance, ANR, Ademe et aussi ministères, DREETS, PIA etc.)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "SOUTFIN_TYPE3",
                    },
                },
                {
                    "id": "lr92gnsw-QOP-lto97ln5",
                    "label": {
                        "value":
                            '"Financement de l’Union européenne via les projets Importants d’Intérêt Européen Commun (PIIEC)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "SOUTFIN_TYPE4",
                    },
                },
                {
                    "id": "lr92gnsw-QOP-lto94v84",
                    "label": {
                        "value":
                            '"Financement de l’Union européenne via les programmes pour la Recherche et l’Innovation (EUREKA, Horizon Europe)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "SOUTFIN_TYPE5",
                    },
                },
                {
                    "id": "lr92gnsw-QOP-lto9b46d",
                    "label": {
                        "value": '"Autre(s) aide(s)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "SOUTFIN_TYPE6",
                    },
                },
            ],
        },
        {
            "id": "ls1kf4f6",
            "componentType": "Input",
            "mandatory": false,
            "page": "48",
            "maxLength": 249,
            "label": {
                "value": '"Veuillez préciser les autres aides publiques reçues :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1") and (nvl(SOUTFIN_TYPE6, false) = true)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jshd0",
                    "page": "46",
                    "label": {
                        "value": '"Soutiens financiers reçus par votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "SOUTFIN_TYPE6CL",
            },
        },
        {
            "id": "ls1kcyso",
            "componentType": "Table",
            "mandatory": false,
            "page": "49",
            "positioning": "HORIZONTAL",
            "label": {
                "value":
                    '"Avez-vous répondu à l’appel à projet « France 2030 » pour produire en France les véhicules routiers de demain et leurs composants ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1jshd0",
                    "page": "46",
                    "label": {
                        "value": '"Soutiens financiers reçus par votre entreprise"',
                        "type": "VTL|MD",
                    },
                },
            },
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value": '"Développement et assemblage des véhicules"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "ls1kcyso-RDOP-ls1mjpjw",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui, avec succès"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Oui, sans succès"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Oui, en attente de réponse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FR2030_PROJ1",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value": '"Principaux composants et équipements"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "ls1kcyso-RDOP-ls1moudi",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui, avec succès"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Oui, sans succès"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Oui, en attente de réponse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FR2030_PROJ2",
                        },
                    },
                ],
                [
                    {
                        "value": "3",
                        "label": {
                            "value":
                                '"Infrastructures de recharge et d’avitaillement pour les véhicules électriques à batterie et à hydrogène"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "ls1kcyso-RDOP-ls1mrxh1",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui, avec succès"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Oui, sans succès"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Oui, en attente de réponse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FR2030_PROJ3",
                        },
                    },
                ],
                [
                    {
                        "value": "4",
                        "label": {
                            "value": '"Diversification des sous-traitants automobiles"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "ls1kcyso-RDOP-ls1mxjej",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui, avec succès"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Oui, sans succès"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Oui, en attente de réponse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FR2030_PROJ4",
                        },
                    },
                ],
                [
                    {
                        "value": "5",
                        "label": {
                            "value":
                                '"Amélioration de la performance environnementale des procédés et sites de production"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "ls1kcyso-RDOP-ls1mjxav",
                        "options": [
                            {
                                "value": "1",
                                "label": {
                                    "value": '"Oui, avec succès"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Oui, sans succès"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "3",
                                "label": {
                                    "value": '"Oui, en attente de réponse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Non"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "FR2030_PROJ5",
                        },
                    },
                ],
            ],
        },
        {
            "id": "ls1kliyy",
            "componentType": "Subsequence",
            "goToPage": "50",
            "label": {
                "value": '"Les perspectives d’évolution de votre entreprise en 2025"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1kliyy",
                    "page": "50",
                    "label": {
                        "value": '"Les perspectives d’évolution de votre entreprise en 2025"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "lr98oarp",
            "componentType": "Table",
            "mandatory": false,
            "page": "50",
            "positioning": "HORIZONTAL",
            "label": {
                "value":
                    '"En 2025, pour l’activité automobile de votre entreprise, quelles évolutions prévoyez-vous concernant les thèmes suivants ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1kliyy",
                    "page": "50",
                    "label": {
                        "value": '"Les perspectives d’évolution de votre entreprise en 2025"',
                        "type": "VTL|MD",
                    },
                },
            },
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value": '"L’effectif salarié"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr98oarp-RDOP-lr98w92j",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"En hausse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Stable"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"En baisse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Sans objet"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "EVOL_ACT_TYPE1",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value": '"Le recours à l’intérim"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr98oarp-RDOP-lr995163",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"En hausse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Stable"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"En baisse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Sans objet"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "EVOL_ACT_TYPE2",
                        },
                    },
                ],
                [
                    {
                        "value": "3",
                        "label": {
                            "value": '"La formation, les compétences des salariés"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr98oarp-RDOP-lr992jid",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"En hausse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Stable"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"En baisse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Sans objet"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "EVOL_ACT_TYPE3",
                        },
                    },
                ],
                [
                    {
                        "value": "4",
                        "label": {
                            "value": '"La recherche et développement (R&D)"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr98oarp-RDOP-lr98zs3l",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"En hausse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Stable"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"En baisse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Sans objet"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "EVOL_ACT_TYPE4",
                        },
                    },
                ],
                [
                    {
                        "value": "5",
                        "label": {
                            "value": '"L’investissement"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr98oarp-RDOP-lr98rpjr",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"En hausse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Stable"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"En baisse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Sans objet"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "EVOL_ACT_TYPE5",
                        },
                    },
                ],
                [
                    {
                        "value": "6",
                        "label": {
                            "value": '"Le recours à la sous-traitance"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr98oarp-RDOP-lr99c8zq",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"En hausse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Stable"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"En baisse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Sans objet"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "EVOL_ACT_TYPE6",
                        },
                    },
                ],
            ],
        },
        {
            "id": "lr98h7zw",
            "componentType": "Table",
            "mandatory": false,
            "page": "51",
            "positioning": "HORIZONTAL",
            "label": {
                "value":
                    '"Quelle évolution de l’activité de votre entreprise anticipez-vous pour 2025 ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1kliyy",
                    "page": "50",
                    "label": {
                        "value": '"Les perspectives d’évolution de votre entreprise en 2025"',
                        "type": "VTL|MD",
                    },
                },
            },
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value": '"Activité destinée au marché automobile"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr98h7zw-RDOP-lr99bd5n",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"En hausse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Stable"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"En baisse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Sans objet"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "EVOL_MAR1",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value": '"Activité destinée à d\'autres marchés"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "CheckboxOne",
                        "id": "lr98h7zw-RDOP-lr98wud5",
                        "options": [
                            {
                                "value": "3",
                                "label": {
                                    "value": '"En hausse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "2",
                                "label": {
                                    "value": '"Stable"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "1",
                                "label": {
                                    "value": '"En baisse"',
                                    "type": "VTL|MD",
                                },
                            },
                            {
                                "value": "0",
                                "label": {
                                    "value": '"Sans objet"',
                                    "type": "VTL|MD",
                                },
                            },
                        ],
                        "response": {
                            "name": "EVOL_MAR2",
                        },
                    },
                ],
            ],
        },
        {
            "id": "lr997jp2",
            "componentType": "Input",
            "mandatory": false,
            "page": "52",
            "maxLength": 249,
            "label": {
                "value":
                    '"Veuillez préciser les autres marchés pour lesquels une hausse de l’activité est anticipée :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(EVOL_MAR2, "1") = "3")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1kliyy",
                    "page": "50",
                    "label": {
                        "value": '"Les perspectives d’évolution de votre entreprise en 2025"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "MAR_HAUSSE_ACT",
            },
        },
        {
            "id": "lr99zm4n",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "53",
            "label": {
                "value":
                    '"Hors relocalisation de fournisseurs et sous-traitants, comptez-vous relocaliser en France certaines de vos activités liées à l’automobile ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1kliyy",
                    "page": "50",
                    "label": {
                        "value": '"Les perspectives d’évolution de votre entreprise en 2025"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui, dans les 12 prochains mois"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "2",
                    "label": {
                        "value": '"Oui, à plus long terme"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "3",
                    "label": {
                        "value": '"Ne sais pas"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "RELOC",
            },
        },
        {
            "id": "ls1mjdc1",
            "componentType": "CheckboxGroup",
            "page": "54",
            "label": {
                "value":
                    '"Quelles sont vos principales inquiétudes pour l’avenir concernant l’activité automobile de votre entreprise ?"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "ls1mf64s",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value": '"(plusieurs réponses possibles)"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1kliyy",
                    "page": "50",
                    "label": {
                        "value": '"Les perspectives d’évolution de votre entreprise en 2025"',
                        "type": "VTL|MD",
                    },
                },
            },
            "responses": [
                {
                    "id": "ls1mjdc1-QOP-lto9539c",
                    "label": {
                        "value": '"Indécision liée à la réglementation sur l’arrêt du moteur thermique"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "INQUIET1",
                    },
                },
                {
                    "id": "ls1mjdc1-QOP-lto95oma",
                    "label": {
                        "value": '"Évolution des relations entre donneurs d’ordres et sous-traitants"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "INQUIET2",
                    },
                },
                {
                    "id": "ls1mjdc1-QOP-lto9ch8v",
                    "label": {
                        "value": '"Difficultés de recrutement"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "INQUIET3",
                    },
                },
                {
                    "id": "ls1mjdc1-QOP-lto9aw9h",
                    "label": {
                        "value": '"Concurrence étrangère"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "INQUIET4",
                    },
                },
                {
                    "id": "ls1mjdc1-QOP-lto9dp2z",
                    "label": {
                        "value": '"Évolution de la demande"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "INQUIET5",
                    },
                },
                {
                    "id": "ls1mjdc1-QOP-lto90bt4",
                    "label": {
                        "value": '"Évolution des coûts de production"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "INQUIET6",
                    },
                },
                {
                    "id": "ls1mjdc1-QOP-lto8xify",
                    "label": {
                        "value": '"Autre(s) inquiétude(s)"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "INQUIET7",
                    },
                },
                {
                    "id": "ls1mjdc1-QOP-lto91joo",
                    "label": {
                        "value": '"Aucune inquiétude particulière"',
                        "type": "VTL|MD",
                    },
                    "response": {
                        "name": "INQUIET8",
                    },
                },
            ],
        },
        {
            "id": "ls1moarb",
            "componentType": "Input",
            "mandatory": false,
            "page": "55",
            "maxLength": 249,
            "label": {
                "value": '"Veuillez préciser vos autres inquiétudes :"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(INQUIET7, false) = true)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr8yj12s",
                    "page": "36",
                    "label": {
                        "value": '"IV - " || "Adaptations et perspectives"',
                        "type": "VTL|MD",
                    },
                },
                "subSequence": {
                    "id": "ls1kliyy",
                    "page": "50",
                    "label": {
                        "value": '"Les perspectives d’évolution de votre entreprise en 2025"',
                        "type": "VTL|MD",
                    },
                },
            },
            "response": {
                "name": "INQUIET7CL",
            },
        },
        {
            "id": "lr9a3qqv",
            "componentType": "Sequence",
            "page": "56",
            "label": {
                "value": '"V - " || "Établissements"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr9a3qqv",
                    "page": "56",
                    "label": {
                        "value": '"V - " || "Établissements"',
                        "type": "VTL|MD",
                    },
                },
            },
        },
        {
            "id": "lr99y1t4",
            "componentType": "CheckboxOne",
            "mandatory": false,
            "page": "57",
            "label": {
                "value":
                    '"La part de l’activité automobile est-elle la même dans tous les établissements de votre entreprise ?"',
                "type": "VTL|MD",
            },
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100)',
                "type": "VTL",
            },
            "hierarchy": {
                "sequence": {
                    "id": "lr9a3qqv",
                    "page": "56",
                    "label": {
                        "value": '"V - " || "Établissements"',
                        "type": "VTL|MD",
                    },
                },
            },
            "options": [
                {
                    "value": "1",
                    "label": {
                        "value": '"Oui"',
                        "type": "VTL|MD",
                    },
                },
                {
                    "value": "0",
                    "label": {
                        "value": '"Non"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "response": {
                "name": "ACT_IDENT",
            },
        },
        {
            "id": "ls1mxi9q",
            "componentType": "Table",
            "mandatory": false,
            "page": "58",
            "positioning": "HORIZONTAL",
            "label": {
                "value":
                    '"Veuillez indiquer la part de l’automobile dans l’activité des établissements de votre entreprise listés ci-dessous :"',
                "type": "VTL|MD",
            },
            "declarations": [
                {
                    "id": "ls1mnokh",
                    "declarationType": "HELP",
                    "position": "AFTER_QUESTION_TEXT",
                    "label": {
                        "value":
                            '"Une estimation même approximative est préférable à une absence de réponse."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "conditionFilter": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
                "type": "VTL",
            },
            "controls": [
                {
                    "id": "ls1mxi9q-RDOP-lu72ue1h-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(TAB_REGROUP51)) and (0>TAB_REGROUP51 or 100<TAB_REGROUP51))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls1mxi9q-RDOP-lu72ue1h-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(TAB_REGROUP51))  and round(TAB_REGROUP51,0)<>TAB_REGROUP51)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls1mxi9q-RDOP-lu73autv-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(TAB_REGROUP41)) and (0>TAB_REGROUP41 or 100<TAB_REGROUP41))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls1mxi9q-RDOP-lu73autv-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(TAB_REGROUP41))  and round(TAB_REGROUP41,0)<>TAB_REGROUP41)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls1mxi9q-RDOP-lu730sa1-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(TAB_REGROUP31)) and (0>TAB_REGROUP31 or 100<TAB_REGROUP31))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls1mxi9q-RDOP-lu730sa1-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(TAB_REGROUP31))  and round(TAB_REGROUP31,0)<>TAB_REGROUP31)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls1mxi9q-RDOP-lu72qz51-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(TAB_REGROUP21)) and (0>TAB_REGROUP21 or 100<TAB_REGROUP21))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls1mxi9q-RDOP-lu72qz51-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(TAB_REGROUP21))  and round(TAB_REGROUP21,0)<>TAB_REGROUP21)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls1mxi9q-RDOP-lu739t4m-format-borne-inf-sup",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(TAB_REGROUP11)) and (0>TAB_REGROUP11 or 100<TAB_REGROUP11))",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '" La valeur doit être comprise entre 0 et 100."',
                        "type": "VTL|MD",
                    },
                },
                {
                    "id": "ls1mxi9q-RDOP-lu739t4m-format-decimal",
                    "typeOfControl": "FORMAT",
                    "criticality": "INFO",
                    "control": {
                        "value":
                            "not(not(isnull(TAB_REGROUP11))  and round(TAB_REGROUP11,0)<>TAB_REGROUP11)",
                        "type": "VTL",
                    },
                    "errorMessage": {
                        "value": '"Le nombre doit comporter au maximum 0 chiffre(s) après la virgule."',
                        "type": "VTL|MD",
                    },
                },
            ],
            "hierarchy": {
                "sequence": {
                    "id": "lr9a3qqv",
                    "page": "56",
                    "label": {
                        "value": '"V - " || "Établissements"',
                        "type": "VTL|MD",
                    },
                },
            },
            "header": [
                {
                    "label": {
                        "value": "",
                        "type": "VTL|MD",
                    },
                },
                {
                    "label": {
                        "value":
                            '"Part de l’activité de l’établissement consacrée à la filière automobile"',
                        "type": "VTL|MD",
                    },
                },
            ],
            "body": [
                [
                    {
                        "value": "1",
                        "label": {
                            "value": '"test siret1"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "ls1mxi9q-RDOP-lu739t4m",
                        "unit": "%",
                        "response": {
                            "name": "TAB_REGROUP11",
                        },
                    },
                ],
                [
                    {
                        "value": "2",
                        "label": {
                            "value": '"test siret2"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "ls1mxi9q-RDOP-lu72qz51",
                        "unit": "%",
                        "response": {
                            "name": "TAB_REGROUP21",
                        },
                    },
                ],
                [
                    {
                        "value": "3",
                        "label": {
                            "value": '"test siret3"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "ls1mxi9q-RDOP-lu730sa1",
                        "unit": "%",
                        "response": {
                            "name": "TAB_REGROUP31",
                        },
                    },
                ],
                [
                    {
                        "value": "4",
                        "label": {
                            "value": '"test siret4"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "ls1mxi9q-RDOP-lu73autv",
                        "unit": "%",
                        "response": {
                            "name": "TAB_REGROUP41",
                        },
                    },
                ],
                [
                    {
                        "value": "5",
                        "label": {
                            "value": '"test siret5"',
                            "type": "VTL|MD",
                        },
                    },
                    {
                        "componentType": "InputNumber",
                        "min": 0.0,
                        "max": 100.0,
                        "decimals": 0,
                        "id": "ls1mxi9q-RDOP-lu72ue1h",
                        "unit": "%",
                        "response": {
                            "name": "TAB_REGROUP51",
                        },
                    },
                ],
            ],
        },
    ],
    "variables": [
        {
            "name": "FCT_SOMME",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    "nvl(FCT1, 0) + nvl(FCT2, 0) + nvl(FCT3, 0) + nvl(FCT4, 0) + nvl(FCT5, 0) + nvl(FCT6, 0) + nvl(FCT7, 0) + nvl(FCT8, 0) + nvl(FCT9, 0)",
                "type": "VTL",
            },
            "bindingDependencies": [
                "FCT1",
                "FCT2",
                "FCT3",
                "FCT4",
                "FCT5",
                "FCT6",
                "FCT7",
                "FCT8",
                "FCT9",
            ],
        },
        {
            "name": "P_LOC_CLI_SOMME",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    "nvl(P_LOC_CLI1, 0) + nvl(P_LOC_CLI2, 0) + nvl(P_LOC_CLI3, 0) + nvl(P_LOC_CLI4, 0) + nvl(P_LOC_CLI5, 0) + nvl(P_LOC_CLI6, 0) + nvl(P_LOC_CLI7, 0) + nvl(P_LOC_CLI8, 0) + nvl(P_LOC_CLI9, 0) + nvl(P_LOC_CLI10, 0)",
                "type": "VTL",
            },
            "bindingDependencies": [
                "P_LOC_CLI1",
                "P_LOC_CLI2",
                "P_LOC_CLI3",
                "P_LOC_CLI4",
                "P_LOC_CLI5",
                "P_LOC_CLI6",
                "P_LOC_CLI7",
                "P_LOC_CLI8",
                "P_LOC_CLI9",
                "P_LOC_CLI10",
            ],
        },
        {
            "name": "P_LOC_FOUR_SOMME",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    "nvl(P_LOC_FOUR1, 0) + nvl(P_LOC_FOUR2, 0) + nvl(P_LOC_FOUR3, 0) + nvl(P_LOC_FOUR4, 0) + nvl(P_LOC_FOUR5, 0) + nvl(P_LOC_FOUR6, 0) + nvl(P_LOC_FOUR7, 0) + nvl(P_LOC_FOUR8, 0) + nvl(P_LOC_FOUR9, 0) + nvl(P_LOC_FOUR10, 0)",
                "type": "VTL",
            },
            "bindingDependencies": [
                "P_LOC_FOUR1",
                "P_LOC_FOUR2",
                "P_LOC_FOUR3",
                "P_LOC_FOUR4",
                "P_LOC_FOUR5",
                "P_LOC_FOUR6",
                "P_LOC_FOUR7",
                "P_LOC_FOUR8",
                "P_LOC_FOUR9",
                "P_LOC_FOUR10",
            ],
        },
        {
            "name": "P_LOC_ST_SOMME",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    "nvl(P_LOC_ST1, 0) + nvl(P_LOC_ST2, 0) + nvl(P_LOC_ST3, 0) + nvl(P_LOC_ST4, 0) + nvl(P_LOC_ST5, 0) + nvl(P_LOC_ST6, 0) + nvl(P_LOC_ST7, 0) + nvl(P_LOC_ST8, 0) + nvl(P_LOC_ST9, 0) + nvl(P_LOC_ST10, 0)",
                "type": "VTL",
            },
            "bindingDependencies": [
                "P_LOC_ST1",
                "P_LOC_ST2",
                "P_LOC_ST3",
                "P_LOC_ST4",
                "P_LOC_ST5",
                "P_LOC_ST6",
                "P_LOC_ST7",
                "P_LOC_ST8",
                "P_LOC_ST9",
                "P_LOC_ST10",
            ],
        },
        {
            "name": "LIBELLE_STRATE",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    'if ((STRATE = "1") or (STRATE = "2")) then "ci-dessus et d’après nos informations, votre entreprise appartient à la filière automobile. Le confirmez-vous ?" else if ((STRATE = "3") or (STRATE = "4")) then "ci-dessus, votre entreprise est susceptible d’appartenir à la filière automobile, éventuellement pour une part faible de son activité. Le confirmez-vous ?" else ""',
                "type": "VTL",
            },
            "bindingDependencies": ["STRATE"],
        },
        {
            "name": "STRATE",
            "variableType": "EXTERNAL",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "MULTI_ETAB",
            "variableType": "EXTERNAL",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SIRET_ETAB_1",
            "variableType": "EXTERNAL",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SIRET_ETAB_2",
            "variableType": "EXTERNAL",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SIRET_ETAB_3",
            "variableType": "EXTERNAL",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SIRET_ETAB_4",
            "variableType": "EXTERNAL",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SIRET_ETAB_5",
            "variableType": "EXTERNAL",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "CLOT_EX",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DUREE_EX",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "CAHT",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "AUTO",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "CA_AUTO",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FCT1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FCT2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FCT3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FCT4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FCT5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FCT6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FCT7",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FCT8",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FCT9",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FCT9CL",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "AM1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "AM2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "AM3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "AM4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "AM5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "AM4CL",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "RD1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "RD2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "RD3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "RD4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "RD5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "RD6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DO",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "CONTRIB_HYB",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "CONTRIB_ELEC",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "CONTRIB_THERM",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "CONTRIB_NSP",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_HYB",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_ELEC",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_THERM",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_NSP",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "CONTRIB_ALTER",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT7",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT8",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT9",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT10",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT11",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FACT_ACT12",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_PCLI",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "IMPL_ETR",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "IMPL_ETR_OBJ1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "IMPL_ETR_OBJ2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "IMPL_ETR_OBJ3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "IMPL_ETR_OBJ4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "IMPL_ETR_OBJ5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "IMPL_ETR_OBJ6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "IMPL_ETR_OBJ7",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "IMPL_ETR_OBJ8",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "IMPL_ETR_OBJ9",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "IMPL_ETR_OBJ9CL",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_CLI1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_CLI2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_CLI3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_CLI4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_CLI5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_CLI6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_CLI7",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_CLI8",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_CLI9",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_CLI10",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_FOUR1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_FOUR2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_FOUR3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_FOUR4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_FOUR5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_FOUR6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_FOUR7",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_FOUR8",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_FOUR9",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_FOUR10",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_SPE",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_CAP",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_ST",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_ST1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_ST2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_ST3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_ST4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_ST5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_ST6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_ST7",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_ST8",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_ST9",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "P_LOC_ST10",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_ETR_OBJ1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_ETR_OBJ2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_ETR_OBJ3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_ETR_OBJ4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_ETR_OBJ5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_ETR_OBJ6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_ETR_OBJ7",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_ETR_OBJ8",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_ETR_OBJ9",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ST_ETR_OBJ9CL",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_RECRUT",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_RECRUT_TYPE1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_RECRUT_TYPE2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_RECRUT_TYPE3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_RECRUT_TYPE4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_RECRUT_TYPE5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_RECRUT_TYPE6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_RECRUT_TYPE7",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_RECRUT_TYPE8",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_RECRUT_TYPE9",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_RECRUT_TYPE9CL",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_DEV1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_DEV2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_DEV3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_DEV4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_DEV5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIFF_DEV5CL",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_ENV1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_ENV2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_ENV3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_ENV4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_ENV5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_PF1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_PF2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_PF3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_PF4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_PF5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_PF6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_PF7",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_PF8",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "PROJ_PF8CL",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_INT",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_INT_ACT1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_INT_ACT2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_INT_ACT3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_INT_ACT4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_INT_ACT5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_INT_ACT5CL",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_EXT",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_EXT_MAR1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_EXT_MAR2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_EXT_MAR3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_EXT_MAR4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "DIV_EXT_MAR4CL",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SOUTFIN",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SOUTFIN_TYPE1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SOUTFIN_TYPE2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SOUTFIN_TYPE3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SOUTFIN_TYPE4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SOUTFIN_TYPE5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SOUTFIN_TYPE6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "SOUTFIN_TYPE6CL",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FR2030_PROJ1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FR2030_PROJ2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FR2030_PROJ3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FR2030_PROJ4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FR2030_PROJ5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_ACT_TYPE1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_ACT_TYPE2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_ACT_TYPE3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_ACT_TYPE4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_ACT_TYPE5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_ACT_TYPE6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_MAR1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "EVOL_MAR2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "MAR_HAUSSE_ACT",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "RELOC",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "INQUIET1",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "INQUIET2",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "INQUIET3",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "INQUIET4",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "INQUIET5",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "INQUIET6",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "INQUIET7",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "INQUIET8",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "INQUIET7CL",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "ACT_IDENT",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "TAB_REGROUP11",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "TAB_REGROUP21",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "TAB_REGROUP31",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "TAB_REGROUP41",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "TAB_REGROUP51",
            "variableType": "COLLECTED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
        },
        {
            "name": "FILTER_RESULT_CLOT_EX",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": "true",
                "type": "VTL",
            },
        },
        {
            "name": "FILTER_RESULT_DUREE_EX",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": "true",
                "type": "VTL",
            },
        },
        {
            "name": "FILTER_RESULT_CAHT",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": "true",
                "type": "VTL",
            },
        },
        {
            "name": "FILTER_RESULT_AUTO",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": "true",
                "type": "VTL",
            },
        },
        {
            "name": "FILTER_RESULT_CA_AUTO",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_FCT",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_FCT9CL",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(FCT9, 0) > 0)',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO", "FCT9"],
        },
        {
            "name": "FILTER_RESULT_AM",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
                "type": "VTL",
            },
            "bindingDependencies": ["CA_AUTO", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_AM4CL",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100) and (nvl(AM4, false) = true)',
                "type": "VTL",
            },
            "bindingDependencies": ["CA_AUTO", "AUTO", "AM4"],
        },
        {
            "name": "FILTER_RESULT_RD",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_DO",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and ((nvl(FCT1, 0) > 0 or nvl(FCT2, 0) > 0 or nvl(FCT3, 0) > 0) or (isnull(FCT1) or isnull(FCT2) or isnull(FCT3)))',
                "type": "VTL",
            },
            "bindingDependencies": ["FCT1", "FCT2", "FCT3", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_CONTRIB_VEH",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_EVOL_VEH",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_CONTRIB_ALTER",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_FACT_ACT",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_P_PCLI",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_IMPL_ETR",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_IMPL_ETR_OBJ",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["IMPL_ETR", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_IMPL_ETR_OBJ9CL",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1") and (nvl(IMPL_ETR_OBJ9, false) = true)',
                "type": "VTL",
            },
            "bindingDependencies": ["IMPL_ETR", "IMPL_ETR_OBJ9", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_P_LOC_CLI",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_P_LOC_FOUR",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_ST",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_ST_CONFIEE",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["ST", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_P_ST",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["ST", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_P_LOC_ST",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["ST", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_ST_ETR_OBJ",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
                "type": "VTL",
            },
            "bindingDependencies": ["ST", "AUTO", "P_LOC_ST1"],
        },
        {
            "name": "FILTER_RESULT_ST_ETR_OBJ9CL",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100) and (nvl(ST_ETR_OBJ9, false) = true)',
                "type": "VTL",
            },
            "bindingDependencies": ["ST", "ST_ETR_OBJ9", "AUTO", "P_LOC_ST1"],
        },
        {
            "name": "FILTER_RESULT_DIFF_RECRUT",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_DIFF_RECRUT_TYPE",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["DIFF_RECRUT", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_DIFF_RECRUT_TYPE9CL",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1") and (nvl(DIFF_RECRUT_TYPE9, false) = true)',
                "type": "VTL",
            },
            "bindingDependencies": ["DIFF_RECRUT_TYPE9", "DIFF_RECRUT", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_DIFF_DEV",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["DIFF_RECRUT", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_DIFF_DEV5CL",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1") and (nvl(DIFF_DEV5, "0") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["DIFF_DEV5", "DIFF_RECRUT", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_PROJ_ENV",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_PROJ_PF",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["PROJ_ENV5", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_PROJ_PF8CL",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1") and (nvl(PROJ_PF8, false) = true)',
                "type": "VTL",
            },
            "bindingDependencies": ["PROJ_ENV5", "PROJ_PF8", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_DIV_INT",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_DIV_INT_ACT",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
                "type": "VTL",
            },
            "bindingDependencies": ["DIV_INT", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_DIV_INT_ACT5CL",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0") and (nvl(DIV_INT_ACT5, false) = true)',
                "type": "VTL",
            },
            "bindingDependencies": ["DIV_INT", "DIV_INT_ACT5", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_DIV_EXT",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_DIV_EXT_MAR",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO", "DIV_EXT"],
        },
        {
            "name": "FILTER_RESULT_DIV_EXT_MAR4CL",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0") and (nvl(DIV_EXT_MAR4, false) = true)',
                "type": "VTL",
            },
            "bindingDependencies": ["DIV_EXT_MAR4", "AUTO", "DIV_EXT"],
        },
        {
            "name": "FILTER_RESULT_SOUTFIN",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_SOUTFIN_TYPE",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["SOUTFIN", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_SOUTFIN_TYPE6CL",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1") and (nvl(SOUTFIN_TYPE6, false) = true)',
                "type": "VTL",
            },
            "bindingDependencies": ["SOUTFIN_TYPE6", "SOUTFIN", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_FR2030_PROJ",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_EVOL_ACT_TYPE",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_EVOL_MAR",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_MAR_HAUSSE_ACT",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(EVOL_MAR2, "1") = "3")',
                "type": "VTL",
            },
            "bindingDependencies": ["EVOL_MAR2", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_RELOC",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["IMPL_ETR", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_INQUIET",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1")',
                "type": "VTL",
            },
            "bindingDependencies": ["AUTO"],
        },
        {
            "name": "FILTER_RESULT_INQUIET7CL",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value": '(nvl(AUTO, "1") = "1") and (nvl(INQUIET7, false) = true)',
                "type": "VTL",
            },
            "bindingDependencies": ["INQUIET7", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_ACT_IDENT",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100)',
                "type": "VTL",
            },
            "bindingDependencies": ["MULTI_ETAB", "CA_AUTO", "AUTO"],
        },
        {
            "name": "FILTER_RESULT_TAB_REGROUP",
            "variableType": "CALCULATED",
            "variableDimension": 0,
            "values": {
                "PREVIOUS": null,
                "COLLECTED": null,
                "FORCED": null,
                "EDITED": null,
                "INPUTED": null,
            },
            "expression": {
                "value":
                    '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
                "type": "VTL",
            },
            "bindingDependencies": ["MULTI_ETAB", "ACT_IDENT", "CA_AUTO", "AUTO"],
        },
    ],
    "cleaning": {
        "AUTO": {
            "CA_AUTO": '(nvl(AUTO, "1") = "1")',
            "FCT1": '(nvl(AUTO, "1") = "1")',
            "FCT2": '(nvl(AUTO, "1") = "1")',
            "FCT3": '(nvl(AUTO, "1") = "1")',
            "FCT4": '(nvl(AUTO, "1") = "1")',
            "FCT5": '(nvl(AUTO, "1") = "1")',
            "FCT6": '(nvl(AUTO, "1") = "1")',
            "FCT7": '(nvl(AUTO, "1") = "1")',
            "FCT8": '(nvl(AUTO, "1") = "1")',
            "FCT9": '(nvl(AUTO, "1") = "1")',
            "FCT9CL": '(nvl(AUTO, "1") = "1") and (nvl(FCT9, 0) > 0)',
            "AM1": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
            "AM2": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
            "AM3": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
            "AM4": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
            "AM5": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
            "AM4CL": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100) and (nvl(AM4, false) = true)',
            "RD1": '(nvl(AUTO, "1") = "1")',
            "RD2": '(nvl(AUTO, "1") = "1")',
            "RD3": '(nvl(AUTO, "1") = "1")',
            "RD4": '(nvl(AUTO, "1") = "1")',
            "RD5": '(nvl(AUTO, "1") = "1")',
            "RD6": '(nvl(AUTO, "1") = "1")',
            "DO": '(nvl(AUTO, "1") = "1") and ((nvl(FCT1, 0) > 0 or nvl(FCT2, 0) > 0 or nvl(FCT3, 0) > 0) or (isnull(FCT1) or isnull(FCT2) or isnull(FCT3)))',
            "CONTRIB_HYB": '(nvl(AUTO, "1") = "1")',
            "CONTRIB_ELEC": '(nvl(AUTO, "1") = "1")',
            "CONTRIB_THERM": '(nvl(AUTO, "1") = "1")',
            "CONTRIB_NSP": '(nvl(AUTO, "1") = "1")',
            "EVOL_HYB": '(nvl(AUTO, "1") = "1")',
            "EVOL_ELEC": '(nvl(AUTO, "1") = "1")',
            "EVOL_THERM": '(nvl(AUTO, "1") = "1")',
            "EVOL_NSP": '(nvl(AUTO, "1") = "1")',
            "CONTRIB_ALTER": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT1": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT2": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT3": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT4": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT5": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT6": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT7": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT8": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT9": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT10": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT11": '(nvl(AUTO, "1") = "1")',
            "FACT_ACT12": '(nvl(AUTO, "1") = "1")',
            "P_PCLI": '(nvl(AUTO, "1") = "1")',
            "IMPL_ETR": '(nvl(AUTO, "1") = "1")',
            "IMPL_ETR_OBJ1": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ2": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ3": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ4": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ5": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ6": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ7": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ8": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ9": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ9CL":
                '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1") and (nvl(IMPL_ETR_OBJ9, false) = true)',
            "P_LOC_CLI1": '(nvl(AUTO, "1") = "1")',
            "P_LOC_CLI2": '(nvl(AUTO, "1") = "1")',
            "P_LOC_CLI3": '(nvl(AUTO, "1") = "1")',
            "P_LOC_CLI4": '(nvl(AUTO, "1") = "1")',
            "P_LOC_CLI5": '(nvl(AUTO, "1") = "1")',
            "P_LOC_CLI6": '(nvl(AUTO, "1") = "1")',
            "P_LOC_CLI7": '(nvl(AUTO, "1") = "1")',
            "P_LOC_CLI8": '(nvl(AUTO, "1") = "1")',
            "P_LOC_CLI9": '(nvl(AUTO, "1") = "1")',
            "P_LOC_CLI10": '(nvl(AUTO, "1") = "1")',
            "P_LOC_FOUR1": '(nvl(AUTO, "1") = "1")',
            "P_LOC_FOUR2": '(nvl(AUTO, "1") = "1")',
            "P_LOC_FOUR3": '(nvl(AUTO, "1") = "1")',
            "P_LOC_FOUR4": '(nvl(AUTO, "1") = "1")',
            "P_LOC_FOUR5": '(nvl(AUTO, "1") = "1")',
            "P_LOC_FOUR6": '(nvl(AUTO, "1") = "1")',
            "P_LOC_FOUR7": '(nvl(AUTO, "1") = "1")',
            "P_LOC_FOUR8": '(nvl(AUTO, "1") = "1")',
            "P_LOC_FOUR9": '(nvl(AUTO, "1") = "1")',
            "P_LOC_FOUR10": '(nvl(AUTO, "1") = "1")',
            "ST": '(nvl(AUTO, "1") = "1")',
            "ST_SPE": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "ST_CAP": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_ST": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST1": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST2": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST3": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST4": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST5": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST6": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST7": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST8": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST9": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST10": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "ST_ETR_OBJ1":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ2":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ3":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ4":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ5":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ6":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ7":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ8":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ9":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ9CL":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100) and (nvl(ST_ETR_OBJ9, false) = true)',
            "DIFF_RECRUT": '(nvl(AUTO, "1") = "1")',
            "DIFF_RECRUT_TYPE1": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE2": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE3": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE4": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE5": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE6": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE7": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE8": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE9": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE9CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1") and (nvl(DIFF_RECRUT_TYPE9, false) = true)',
            "DIFF_DEV1": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_DEV2": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_DEV3": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_DEV4": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_DEV5": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_DEV5CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1") and (nvl(DIFF_DEV5, "0") = "1")',
            "PROJ_ENV1": '(nvl(AUTO, "1") = "1")',
            "PROJ_ENV2": '(nvl(AUTO, "1") = "1")',
            "PROJ_ENV3": '(nvl(AUTO, "1") = "1")',
            "PROJ_ENV4": '(nvl(AUTO, "1") = "1")',
            "PROJ_ENV5": '(nvl(AUTO, "1") = "1")',
            "PROJ_PF1": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF2": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF3": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF4": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF5": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF6": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF7": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF8": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF8CL":
                '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1") and (nvl(PROJ_PF8, false) = true)',
            "DIV_INT": '(nvl(AUTO, "1") = "1")',
            "DIV_INT_ACT1": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
            "DIV_INT_ACT2": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
            "DIV_INT_ACT3": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
            "DIV_INT_ACT4": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
            "DIV_INT_ACT5": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
            "DIV_INT_ACT5CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0") and (nvl(DIV_INT_ACT5, false) = true)',
            "DIV_EXT": '(nvl(AUTO, "1") = "1")',
            "DIV_EXT_MAR1": '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0")',
            "DIV_EXT_MAR2": '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0")',
            "DIV_EXT_MAR3": '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0")',
            "DIV_EXT_MAR4": '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0")',
            "DIV_EXT_MAR4CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0") and (nvl(DIV_EXT_MAR4, false) = true)',
            "SOUTFIN": '(nvl(AUTO, "1") = "1")',
            "SOUTFIN_TYPE1": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE2": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE3": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE4": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE5": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE6": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE6CL":
                '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1") and (nvl(SOUTFIN_TYPE6, false) = true)',
            "FR2030_PROJ1": '(nvl(AUTO, "1") = "1")',
            "FR2030_PROJ2": '(nvl(AUTO, "1") = "1")',
            "FR2030_PROJ3": '(nvl(AUTO, "1") = "1")',
            "FR2030_PROJ4": '(nvl(AUTO, "1") = "1")',
            "FR2030_PROJ5": '(nvl(AUTO, "1") = "1")',
            "EVOL_ACT_TYPE1": '(nvl(AUTO, "1") = "1")',
            "EVOL_ACT_TYPE2": '(nvl(AUTO, "1") = "1")',
            "EVOL_ACT_TYPE3": '(nvl(AUTO, "1") = "1")',
            "EVOL_ACT_TYPE4": '(nvl(AUTO, "1") = "1")',
            "EVOL_ACT_TYPE5": '(nvl(AUTO, "1") = "1")',
            "EVOL_ACT_TYPE6": '(nvl(AUTO, "1") = "1")',
            "EVOL_MAR1": '(nvl(AUTO, "1") = "1")',
            "EVOL_MAR2": '(nvl(AUTO, "1") = "1")',
            "MAR_HAUSSE_ACT": '(nvl(AUTO, "1") = "1") and (nvl(EVOL_MAR2, "1") = "3")',
            "RELOC": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "INQUIET1": '(nvl(AUTO, "1") = "1")',
            "INQUIET2": '(nvl(AUTO, "1") = "1")',
            "INQUIET3": '(nvl(AUTO, "1") = "1")',
            "INQUIET4": '(nvl(AUTO, "1") = "1")',
            "INQUIET5": '(nvl(AUTO, "1") = "1")',
            "INQUIET6": '(nvl(AUTO, "1") = "1")',
            "INQUIET7": '(nvl(AUTO, "1") = "1")',
            "INQUIET8": '(nvl(AUTO, "1") = "1")',
            "INQUIET7CL": '(nvl(AUTO, "1") = "1") and (nvl(INQUIET7, false) = true)',
            "ACT_IDENT":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100)',
            "TAB_REGROUP11":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP21":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP31":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP41":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP51":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
        },
        "FCT9": {
            "FCT9CL": '(nvl(AUTO, "1") = "1") and (nvl(FCT9, 0) > 0)',
        },
        "CA_AUTO": {
            "AM1": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
            "AM2": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
            "AM3": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
            "AM4": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
            "AM5": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100)',
            "AM4CL": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100) and (nvl(AM4, false) = true)',
            "ACT_IDENT":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100)',
            "TAB_REGROUP11":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP21":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP31":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP41":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP51":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
        },
        "AM4": {
            "AM4CL": '(nvl(AUTO, "1") = "1") and (nvl(CA_AUTO, 0) < 100) and (nvl(AM4, false) = true)',
        },
        "FCT1": {
            "DO": '(nvl(AUTO, "1") = "1") and ((nvl(FCT1, 0) > 0 or nvl(FCT2, 0) > 0 or nvl(FCT3, 0) > 0) or (isnull(FCT1) or isnull(FCT2) or isnull(FCT3)))',
        },
        "FCT2": {
            "DO": '(nvl(AUTO, "1") = "1") and ((nvl(FCT1, 0) > 0 or nvl(FCT2, 0) > 0 or nvl(FCT3, 0) > 0) or (isnull(FCT1) or isnull(FCT2) or isnull(FCT3)))',
        },
        "FCT3": {
            "DO": '(nvl(AUTO, "1") = "1") and ((nvl(FCT1, 0) > 0 or nvl(FCT2, 0) > 0 or nvl(FCT3, 0) > 0) or (isnull(FCT1) or isnull(FCT2) or isnull(FCT3)))',
        },
        "IMPL_ETR": {
            "IMPL_ETR_OBJ1": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ2": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ3": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ4": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ5": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ6": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ7": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ8": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ9": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
            "IMPL_ETR_OBJ9CL":
                '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1") and (nvl(IMPL_ETR_OBJ9, false) = true)',
            "RELOC": '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1")',
        },
        "IMPL_ETR_OBJ9": {
            "IMPL_ETR_OBJ9CL":
                '(nvl(AUTO, "1") = "1") and (nvl(IMPL_ETR, "1") = "1") and (nvl(IMPL_ETR_OBJ9, false) = true)',
        },
        "ST": {
            "ST_SPE": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "ST_CAP": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_ST": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST1": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST2": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST3": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST4": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST5": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST6": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST7": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST8": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST9": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "P_LOC_ST10": '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1")',
            "ST_ETR_OBJ1":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ2":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ3":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ4":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ5":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ6":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ7":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ8":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ9":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ9CL":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100) and (nvl(ST_ETR_OBJ9, false) = true)',
        },
        "P_LOC_ST1": {
            "ST_ETR_OBJ1":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ2":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ3":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ4":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ5":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ6":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ7":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ8":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ9":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100)',
            "ST_ETR_OBJ9CL":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100) and (nvl(ST_ETR_OBJ9, false) = true)',
        },
        "ST_ETR_OBJ9": {
            "ST_ETR_OBJ9CL":
                '(nvl(AUTO, "1") = "1") and (nvl(ST, "1") = "1") and (nvl(P_LOC_ST1, 0) < 100) and (nvl(ST_ETR_OBJ9, false) = true)',
        },
        "DIFF_RECRUT": {
            "DIFF_RECRUT_TYPE1": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE2": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE3": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE4": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE5": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE6": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE7": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE8": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE9": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_RECRUT_TYPE9CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1") and (nvl(DIFF_RECRUT_TYPE9, false) = true)',
            "DIFF_DEV1": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_DEV2": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_DEV3": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_DEV4": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_DEV5": '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1")',
            "DIFF_DEV5CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1") and (nvl(DIFF_DEV5, "0") = "1")',
        },
        "DIFF_RECRUT_TYPE9": {
            "DIFF_RECRUT_TYPE9CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1") and (nvl(DIFF_RECRUT_TYPE9, false) = true)',
        },
        "DIFF_DEV5": {
            "DIFF_DEV5CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIFF_RECRUT, "1") = "1") and (nvl(DIFF_DEV5, "0") = "1")',
        },
        "PROJ_ENV5": {
            "PROJ_PF1": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF2": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF3": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF4": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF5": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF6": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF7": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF8": '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1")',
            "PROJ_PF8CL":
                '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1") and (nvl(PROJ_PF8, false) = true)',
        },
        "PROJ_PF8": {
            "PROJ_PF8CL":
                '(nvl(AUTO, "1") = "1") and (nvl(PROJ_ENV5, "1") = "1") and (nvl(PROJ_PF8, false) = true)',
        },
        "DIV_INT": {
            "DIV_INT_ACT1": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
            "DIV_INT_ACT2": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
            "DIV_INT_ACT3": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
            "DIV_INT_ACT4": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
            "DIV_INT_ACT5": '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0")',
            "DIV_INT_ACT5CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0") and (nvl(DIV_INT_ACT5, false) = true)',
        },
        "DIV_INT_ACT5": {
            "DIV_INT_ACT5CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIV_INT, "1") <> "0") and (nvl(DIV_INT_ACT5, false) = true)',
        },
        "DIV_EXT": {
            "DIV_EXT_MAR1": '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0")',
            "DIV_EXT_MAR2": '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0")',
            "DIV_EXT_MAR3": '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0")',
            "DIV_EXT_MAR4": '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0")',
            "DIV_EXT_MAR4CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0") and (nvl(DIV_EXT_MAR4, false) = true)',
        },
        "DIV_EXT_MAR4": {
            "DIV_EXT_MAR4CL":
                '(nvl(AUTO, "1") = "1") and (nvl(DIV_EXT, "1") <> "0") and (nvl(DIV_EXT_MAR4, false) = true)',
        },
        "SOUTFIN": {
            "SOUTFIN_TYPE1": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE2": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE3": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE4": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE5": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE6": '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1")',
            "SOUTFIN_TYPE6CL":
                '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1") and (nvl(SOUTFIN_TYPE6, false) = true)',
        },
        "SOUTFIN_TYPE6": {
            "SOUTFIN_TYPE6CL":
                '(nvl(AUTO, "1") = "1") and (nvl(SOUTFIN, "1") = "1") and (nvl(SOUTFIN_TYPE6, false) = true)',
        },
        "EVOL_MAR2": {
            "MAR_HAUSSE_ACT": '(nvl(AUTO, "1") = "1") and (nvl(EVOL_MAR2, "1") = "3")',
        },
        "INQUIET7": {
            "INQUIET7CL": '(nvl(AUTO, "1") = "1") and (nvl(INQUIET7, false) = true)',
        },
        "MULTI_ETAB": {
            "TAB_REGROUP11":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP21":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP31":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP41":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP51":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
        },
        "ACT_IDENT": {
            "TAB_REGROUP11":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP21":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP31":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP41":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
            "TAB_REGROUP51":
                '(nvl(AUTO, "1") = "1") and (nvl(MULTI_ETAB, "1") = "1" and nvl(CA_AUTO, 0) < 100) and (nvl(ACT_IDENT, "0") = "0")',
        },
    },
    "resizing": {},
    "componentType": "Questionnaire",
};

export const data: LunaticData = {};
