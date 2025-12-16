export const sageX3 = {

    "Formations": {
        "Sage X3 - instalation": {
            "Sujet1": {
                Titre: "installation de Sage X3",
                PT: "",
                Etapes: {
                    "Etape1": {
                        Titre: "Installer un JDK-JAVA",
                        Path: "",
                        body: [
                            "intaller un JDK-JAVA"
                        ],
                        SousEtape: []
                    },
                    "Etape2": {
                        Titre: "Apache",
                        Path: "",
                        body: [
                            "Apache"
                        ],
                        SousEtape: {
                            "SousEtape1": {
                                body: [
                                    "mettre le dossier apache24 dans le path C:\\",
                                    "taper dans le terminal en mode admin :"
                                ],
                                SousEtape1_1: {
                                    body: [
                                        "cd C:\\apache24\\bin",
                                        ".\\httpd.exe -k install -n 'Apache2.4'"
                                    ]
                                },
                                bodySuite: [
                                    "aller dans service et activer le service apache"
                                ]
                            }
                        }
                    },
                    "Etape3": {
                        Titre: "SQL Server",
                        Path: "",
                        body: [
                            "SQL Server"
                        ],
                        SousEtape: {
                            "SousEtape2": {
                                body: [
                                    "aller dans le dossier de l'installation de SQL Server C:\\Users\\user\\Desktop\\VM install\\INSTALLX32024R2A\\SQL2019\\Developer_FRA",
                                    "demarer le setup",
                                    "copier et coller la cle"
                                ]
                            }
                        }
                    },
                    "Etape4": {
                        Titre: "X3",
                        Path: "",
                        body: [
                            "adxAdmin : ecoute les ports pour X3",
                            "application : c'est le server d'application",
                            "Console :generation,parametrage server d'impression duplication et import de dossier",
                            "DBsql ou DBOracle : base de donnee sql ou oracle",
                            "MongoDB : retranscrition de donnee",
                            "Print server : serveur d'imperssion",
                            "Runtime",
                            "installer msodbcsql,PowerShell-win-x64 et Vcredist-x64",
                            "relancer le runtime.",
                            "syracuse server: serveur web qui entraine une duplication des utilisateurs cree a l'interieur de mongoDB",
                            "se connecter sur 'localhost:8124' avec le login 'admin' et le mot de passe 'Admin123456789-'"
                        ],
                        SousEtape: {
                            "SousEtape3_1": {
                                body: [
                                    "nom du composant (choisir un nom sans espace,en lettre capitale et commun ex: SAGEX3)"
                                ]
                            },
                            "SousEtape3_2": {
                                body: [
                                    "nom du composant (choisir un nom sans espace,en lettre capitale et commun ex: SAGEX3)"
                                ]
                            },
                            "SousEtape3_4": {
                                body: [
                                    "Décocher le serveur accepte uniquement les connectionS securiser SSL"
                                ],
                                SousEtape3_4_1: {
                                    body: [
                                        "nom du composant (choisir un nom sans espace,en lettre capitale et commun ex: SAGEX3)",
                                        "aller dans C:\\SAGE\\SAGEX3\\runtime depences"
                                    ]
                                }
                            },
                            "SousEtape3_5": {
                                body: [
                                    "mette le path de la licence (un fichier.json)",
                                    "mette le le nom et le password",
                                    "remplir le passPhrase (ici Loggy120320)",
                                    "remplir le formulaire 'donnee du certificat'",
                                    "remplir le passPhrase (ici Loggy120320) sur la page suivante"
                                ]
                            }
                        }
                    },
                    "Etape5": {
                        Titre: "Console de configuration SAGEX3",
                        Path: "",
                        body: [
                            "-cliquer nouvaux, remplir les champs et valider pour creer la solution",
                            "-nom du server (nom du pc)",
                            "-utilisateur (ici Administrateur)",
                            "-mot de passe (ici Loggy120320)",
                            "-cliquer sur la solution et remplir les champs:"
                        ],
                        SousEtape: {
                            "SousEtape4_1": {
                                body: [
                                    "->Donnee application:",
                                    "->connection avec la base de donnee (remplir TOUT le formulaire 'Serveur de donnee SQLserver sur win-xxxxx')",
                                    "->connection avec le serveur apache (remplir TOUT le formulaire 'Serveur application SAGEX3 sur win-xxxxx')",
                                    "->connection avec la session utilisateur cense demarer les services (remplir tout le formulaire 'Serveur de traitement principale')",
                                    "->enregistrer",
                                    "->Configurer base de donnee:",
                                    "->entrer un mot de passe (ici Loggy120320) puis valider",
                                    "->Configure application:",
                                    "->valider",
                                    "->publication:",
                                    "->valider"
                                ]
                            },
                            "SousEtape4_2": {
                                body: [
                                    "->Serveur de donnee SQLserver sur win-xxxxx ---------> lien entre sqlserver et Sage X3",
                                    "->Serveur application SAGEX3 sur win-xxxxx ---------> lien entre apache et Sage X3",
                                    "->Serveur de traitement principale ---------> lien entre la machine et Sage X3"
                                ]
                            }
                        }
                    },
                    "Etape6": {
                        Titre: "Installer l'interface de SQLserver (SSMS-Setup-fra)",
                        Path: "",
                        body: [
                            "Installer l'interface de SQLserver (SSMS-Setup-fra)"
                        ],
                        SousEtape: []
                    }
                },
                NB: [],
                Infos: [
                    "Changer son mot de passe de maniere a ce qu' il n'est que des valeurs alpha numerique sans signe",
                    "avoir un JDK-java",
                    "Ouvrir une session entant que service avant de commencer l'instalation",
                    `(
        Dans 'Strategie de securite locale:attribution des droits d'utilisateur  ouvir une session entant que service 
        clicker sur ajouter un utilisateur 
        dans nom des objets a selectionner, ecrir le nom d'utiliateur: (ici Administrateur) 
        puis cliquer sur appliquer et ok
        )`
                ]
            },
            "Sujet2": {
                Titre: "Parametrage de du dossier X3",
                PT: "",
                Etapes: {
                    "Etape1": {
                        Titre: "Copie et création",
                        Path: "",
                        body: [
                            "Copie du fichier .pem (dans le dossier 'C:\\Sage\\SyracuseComponent\\Syracuse\\certTools\\outpout') vers 'C:\\Sage\\SAGEX3\\runtime\\keys'",
                            "Creation du dossier X3 "
                        ],
                        SousEtape: []
                    },
                    "Etape2": {
                        Titre: "Création d'une solution",
                        Path: "",
                        body: [
                            "Creation d'une solution"
                        ],
                        SousEtape: {
                            "SousEtape1_1": {
                                body: [
                                    "Code(nom de la solution ici SAGEX3)",
                                    "...",
                                    "Application (toujours choisir ERP)",
                                    "Hote du serveur(nom du pc)",
                                    "Port (choisir le port designe au debut (ici 81))"
                                ]
                            },
                            "SousEtape1_2": {
                                body: [
                                    "Cliquer sur les trois ligne du tableau, puis 'personalisation et initialisation' (cela ne se fait que sur le dossier X3 et qune fois)"
                                ]
                            },
                            "SousEtape1_3": {
                                body: [
                                    "Se deconecter puis se reconnecter, le dossier X3 est creer et visible."
                                ]
                            }
                        }
                    }
                },
                NB: [],
                Infos: []
            },
            "Sujet3": {
                Titre: "Creation du dossier de Test",
                PT: "",
                Etapes: {
                    "Etape1": {
                        Titre: "Parametrage dossier",
                        Path: "X3/module de parametrage/dossier",
                        body: [
                            "dossier(id de lentreprise, sans espace)",
                            "nom(nom de l'entreprise)",
                            "...",
                            "date de debut",
                            "devise (XOF)",
                            "localisation (tout les actif doivent etre sur Non)",
                            "langue (entrer FRA)",
                            "legistation (entrer FRA)",
                            "langue par defaut (FRA)",
                            "pays par defaut (TG)",
                            "cliquer sur validation et decocher validation differer (6H)"
                        ],
                        SousEtape: []
                    },
                    "Etape2": {
                        Titre: "Vérification dossier",
                        Path: "C:\\Sage\\SAGEX3\\Dossier",
                        body: [
                            "--------->si il y a abcence du dossier generer dans (ici LOGGYSTD): aller dans C:\\Sage\\SAGEX3\\Dossier et ouvir Folder pour y ajouter la balise",
                            `<FOLDER ID='LOGGYSTD' MOTH1='X3'>
                <IAD>SAGEX3</IAD>
                <VERSION>R090.029.058</VERSION>
                <RELEASE>R090.029.058</RELEASE>
                <NEWVER>2022 R1 (12.0.29)</NEWVER>
                <UPDATE>15/01/2022</UPDATE>
                <PUBLIASEAR>YES</PUBLIASEAR>
                <LANGS>FRA;ENG;ITA;POR;SPA;BRI;GER;POL;CHI;ARB;AUS</LANGS>
                </FOLDER>
                , dans <ACTUAL>`,
                            "--------->si le dossier generer n'a pas de probleme ",
                            "-remplir les champs puis valider",
                            "->solution (SageX3)",
                            "->Dossier du serveur(nom du donnier conserner)",
                            "->Dossier de reference (X3)",
                            "-groupe (choisir superAdministrateur)"
                        ],
                        SousEtape: []
                    }
                },
                NB: [
                    "groupe (choisir superAdministrateur)",
                    "ne pas faire  'personalisation et initialisation' car cela ne se fait que pour le dossier X3"
                ],
                Infos: []
            },
            "Sujet4": {
                Titre: "creation du dossier d'exploitation",
                PT: "",
                Etapes: {
                    "Etape1": {
                        Titre: "Extraction des données",
                        Path: "vide",
                        body: [
                            "choisir les tables a sauvegarder ou mettre * pour tout sauvegarder",
                            "volume de sauvegarde(par convention le nom de la sauvegarde doit etre 'SVG-dateDaujourDHuit')"
                        ],
                        SousEtape: []
                    },
                    "Etape2": {
                        Titre: "Duplication de dossier",
                        Path: "vide",
                        body: [
                            "choisir sur la fenetre Dossier",
                            "selectioner le dossier a dupliquer et Cliquer sur dupliquer",
                            "mettre un nom de dossier",
                            "ecrir le nom de la sauvegarde faite precedemment ('SVG-dateDaujourDHuit')",
                            "cliquer sur suivant puis suivant"
                        ],
                        SousEtape: []
                    },
                    "Etape3": {
                        Titre: "Integration de donnee",
                        Path: "vide",
                        body: [
                            "vide"
                        ],
                        SousEtape: []
                    }
                },
                NB: [],
                Infos: []
            },
            "Sujet5": {
                Titre: "parametrage du dossier d'exploitation",
                PT: "dossier > societes > sites",
                Etapes: {
                    "Sous-Etape1": {
                        Titre: "créer des axes",
                        Path: "parametrage/structure generale/axes",
                        body: [
                            "entete colone (nom de l'axe)",
                            "format des sessions (3c)"
                        ],
                        NB: "integration de dossier != integration de donnee"
                    },
                    "Sous-Etape2": {
                        Titre: "créer une société",
                        Path: "",
                        body: [
                            "-> (code comptable:société)",
                            "-> (code comptable:site)",
                            "->aller dans 'parametrage/structure general/societe'",
                            "- (intitule de 5 lettres)",
                            "- (nom)",
                            "- (intitule court 10 lettres)",
                            "- forme juridique (SA:Societe anonyme)",
                            "- capital social (XOF)",
                            "- (capital) 20 000 000 par exemple",
                            "- site principale",
                            "-> site (nom du site Principale (SIEGE))",
                            "-> description (SIEGE)",
                            "-> intitule court (SIEGE)",
                            "-> Societe juridique ()",
                            "-> pays (TG)",
                            "- ..."
                        ],
                        NB: "integration de dossier != integration de donnee"
                    },
                    "Sous-Etape3": {
                        Titre: "parametrage comptable",
                        Path: "parametrage/structure general/compta",
                        body: [
                            "- referentiel (lettre LIMITER)",
                            "- designation (nom du model compta)",
                            "- ...",
                            "-> plan comptable (a créer ou ajouter)",
                            "- code plan (lettre LIMITER)",
                            "- designation (nom du plan comptable)",
                            "- intitule court (code plan)",
                            "- entete de colonne (code plan)",
                            "- cocher (suivie generale, auxiliarisation, gestion des taxes)",
                            "- format des comptes 6#",
                            "- Classe par defaut",
                            "-> créer les différentes classes:"
                        ],
                        SousEtape3_1: [
                            "+------------------------------------------------------------------------------------------------+",
                            "    code         intitule        RAN       Sens par defaut       Sens analytique",
                            "+------------------------------------------------------------------------------------------------+",
                            "    1-capitaux         - normal -      oui           - credit        - produit",
                            "    2-Immobilisation   - normal -      oui           - debit         - charge",
                            "    3-stock            - normal -      oui           - indeterminer  - charge",
                            "    4-tier             - normal -      oui           - indeterminer  - charge",
                            "    5-financier        - normal -      oui           - indeterminer  - charge",
                            "    6-charge           - normal -      non           - debit         - charge",
                            "    7-produit          - normal -      non           - credit        - produit",
                            "    8-autres           - normal -      non           - indeterminer  - produit",
                            "+------------------------------------------------------------------------------------------------+"
                        ],
                        SousEtape3_2: [
                            "-> selon le type de plan on a :",
                            "  (analytique):",
                            "+------------------------------------------------------------------------+",
                            "  prefix         classe            intitule",
                            "+------------------------------------------------------------------------+",
                            "  2             -  2               - (se remplit automatiquement)",
                            "  6             -  6               - (se remplit automatiquement)",
                            "  7             -  7               - (se remplit automatiquement)",
                            "+------------------------------------------------------------------------+",
                            "  (social):",
                            "+------------------------------------------------------------------------+",
                            "  prefix         classe            intitule",
                            "+------------------------------------------------------------------------+",
                            "  1             -  1               - (se remplit automatiquement)",
                            "  2             -  2               - (se remplit automatiquement)",
                            "  3             -  3               - (se remplit automatiquement)",
                            "  4             -  4               - (se remplit automatiquement)",
                            "  5             -  5               - (se remplit automatiquement)",
                            "  6             -  6               - (se remplit automatiquement)",
                            "  7             -  7               - (se remplit automatiquement)",
                            "  8             -  8               - (se remplit automatiquement)",
                            "+------------------------------------------------------------------------+"
                        ],
                        SousEtape3_3: [
                            "-> date premiere exer (date de creation mis dans le dossier)",
                            "-> devise comptable (XOF)",
                            "-> code comptable (créer dans le module 'transaction de saisie code comptable'):",
                            "   - code transaction (5 lettres)",
                            "   - intitule (nom du code comptable)",
                            "   - tableau (conf. plan comptable)",
                            "-> créer des axes (dans parametrage - structure generale - axes)",
                            "- adresse",
                            "-> tableau adresse: (ecrire un nom a l'adresse dans le tableau)",
                            "-> code ::: intitule (rue, pays, quartier ...)",
                            "-> pays ::: intitule (nom pays)"
                        ],
                        NB: "le code comptable permet d'initialiser des comptes en fonction de la nature de l'operation"
                    }
                },
                NB: [],
                Infos: []
            },
            "Sujet6": {
                Titre: "Creation d'un site (dans parametrage - structure generale - sites)",
                PT: "",
                Etapes: {
                    "Etape1": {
                        Titre: "generalites",
                        body: [
                            "site (nom du site)",
                            "description (nom du site)",
                            "intitule court (nom du site)",
                            "societe juridique (societe auquel appartient le site)",
                            "pays (TG)"
                        ]
                    },
                    "Etape2": {
                        Titre: "compta",
                        body: [
                            "site financier (le site principale de l'entreprise)",
                            "code comptable (code comptable)",
                            "tableau: Axe"
                        ]
                    },
                    "Etape3": {
                        Titre: "adresse",
                        body: [
                            "tableau adresse : (ecrire un nom a l'adresse dans le tableau)",
                            "code ::: intitule (rue, pays, quartier ...)",
                            "pays ::: intitule (nom pays)"
                        ]
                    },
                    "Etape4": {
                        Titre: "Details",
                        body: [
                            "jour ouver par defaut (de lundi a samedi)"
                        ]
                    }
                }
            },
            "Sujet7": {
                Titre: "Configuration du serveur d'impression (console de X3)",
                PT: "",
                Etapes: {
                    "Etape1": {
                        Titre: "Création d'un print server",
                        Path: "console de X3",
                        body: [
                            "cliquer sur X3 print server puis cliquer sur 'nouvaux print server'"
                        ],
                        SousEtape: []
                    },
                    "Etape2": {
                        Titre: "Ajouter une solution à la publication",
                        Path: "console de X3",
                        body: [
                            "aller sur publication et impression - 'ajouter une solution'"
                        ],
                        SousEtape: []
                    },
                    "Etape3": {
                        Titre: "Sélection de la solution X3",
                        Path: "console de X3",
                        body: [
                            "choisir l'identifiant de solution X3"
                        ],
                        SousEtape: []
                    },
                    "Etape4": {
                        Titre: "Appliquer la publication",
                        Path: "console de X3",
                        body: [
                            "choisir les dossiers test et d'exploitation puis cliquer sur 'appliquer la publication'"
                        ],
                        SousEtape: []
                    }
                },
                NB: [],
                Infos: []
            }

        },
        "Sage X3 - Tiers": {
            "Sujet1": {
                "Titre": "Créer un utilisateur",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Créer un utilisateur coté Parametrage",
                        "Path": "",
                        "body": [],
                        "SousEtape": {
                            "SousEtape1_1": {
                                "Titre": "Profil menu",
                                "body": [
                                    "affiche les modules au user (sans lui donner de droit)",
                                    "menue de depart (entrer le profil menu du debut, permet de créer un menu de depart vide et y ajouter des fonctions)"
                                ],
                                "SousEtape": []
                            },
                            "SousEtape1_2": {
                                "Titre": "Profil fonction - habilitation",
                                "body": [
                                    "specifie les droits de l'utilisateur (CRUD sur le module)"
                                ],
                                "SousEtape": []
                            },
                            "SousEtape1_3": {
                                "Titre": "Profil métier",
                                "body": [
                                    "permet de lier un profil menu a un profil fonction (afin de ne pas avoir a lier et le Profil Fonction et le Profil Menu au user)"
                                ],
                                "SousEtape": []
                            },
                            "SousEtape1_4": {
                                "Titre": "Utilisateur",
                                "body": [
                                    "code: (a une dimension a ne pas depasser, tu mets ce que tu veux)",
                                    "nom",
                                    "Identifiant (pas d'espace)",
                                    "code metier (choisir un profil metier)",
                                    "profil menu et profil fonction (ne pas remplir le code metier si on veut remplir ces inputs)"
                                ],
                                "SousEtape": []
                            }
                        }
                    },
                    "Etape2": {
                        "Titre": "Donner les rôles à un utilisateur coté module administration",
                        "Path": "",
                        "body": [],
                        "SousEtape": {
                            "SousEtape2_1": {
                                "Titre": "Page de navigation",
                                "body": [
                                    "nom (nom de ta page)",
                                    "titre (equivalent de code)",
                                    "module (les modules visibles)",
                                    "role (choisir les rôles qui pourront utiliser la page de navigation)"
                                ],
                                "SousEtape": []
                            },
                            "SousEtape2_2": {
                                "Titre": "Groupe",
                                "body": [
                                    "intitule (nom du groupe)",
                                    "role (choisir)",
                                    "point de connection (choisir les dossiers sur lesquels le user pourra se connecter)",
                                    "..."
                                ],
                                "SousEtape": []
                            },
                            "SousEtape2_3": {
                                "Titre": "Rôle",
                                "body": [
                                    "code (a une dimension à ne pas dépasser)",
                                    "intitule (nom du rôle)",
                                    "factory owner (toujours SAGE)",
                                    "badges (type de licence)",
                                    "profil securite (choisir utilisateur par défaut)",
                                    "page de navigation (tri ce qui doit être vu par le user)",
                                    "page d'accueil (affiche la liste des modules visibles sur la page d'accueil du user)"
                                ],
                                "SousEtape": []
                            },
                            "SousEtape2_4": {
                                "Titre": "Utilisateur",
                                "body": [
                                    "Identifiant (écrire l'identifiant du user créé dans paramétrage)",
                                    "mot de passe",
                                    "groupe (choisir un groupe préalablement créé)"
                                ],
                                "SousEtape": []
                            }
                        },
                        "NB": [
                            "À part pour la création d'un user la première lettre de son nom (intitulé) doit être X, Y ou Z",
                            "Menu = module",
                            "Généralement les Codes des menu (profil menu) commencent par M, le reste est pour les fonctions (P, G)"
                        ]
                    }
                },
                "NB": [],
                "Infos": []
            },

            "Sujet2": {
                "Titre": "Créer un tiers (fournisseur)",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Création des catégories",
                        "Path": "'donnée de base' - 'catégorie fournisseurs'",
                        "body": [
                            "categorie (nbre de caractere min 2 max 5)",
                            "intitule (description)",
                            "intitule court (nbre de caractere max 12)",
                            "pays (FRA)",
                            "langue (FR)",
                            "devise (XOF)",
                            "type fournisseur (normal, prospect (potentiel fournisseur))",
                            "...",
                            "Code comptable (à créer puis remplir)",
                            "régime taxe exo (à créer puis remplir)",
                            "condition de paiement (choisir)"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Code comptable fournisseur",
                        "Path": "",
                        "body": [
                            "(code comptable:fournisseur)"
                        ],
                        "SousEtape": []
                    },
                    "Etape3": {
                        "Titre": "Création d'un fournisseur",
                        "Path": "'donnée de base' - 'fournisseurs'",
                        "body": [
                            "categorie (choisir une catégorie préalablement créée)",
                            "fournisseur (mettre le compteur créé dans catégorie pour le lier ou en écrire un)",
                            "intitule court (nom du fournisseur)",
                            "sigle (raccourci de l'intitule court)",
                            "raison sociale (nom complet du fournisseur)",
                            "pays (SN)",
                            "langue (FRA)",
                            "devise (XOF)",
                            "...",
                            "'remplir le formulaire adresse, rien n'est obligatoire'",
                            "condition de paiement (à créer puis remplir)"
                        ],
                        "SousEtape": []
                    },
                    "Etape4": {
                        "Titre": "Création d'un compteur",
                        "Path": "",
                        "body": [
                            "compteur (nom du compteur)",
                            "intitule (description)",
                            "niveaux Dossier (degré de visibilité du dossier)",
                            "niveaux RAZ (Remise à zéro)",
                            "Type (Alphanumérique)",
                            "composant (générer automatiquement des numéros de compte)"
                        ],
                        "SousEtape": {
                            "SousEtape4_1": {
                                "body": [
                                    "(type composant): Constante (on va gérer les valeurs constantes dans le numéro de compte)",
                                    "(longueur): 2 par exemple donc formule doit avoir 2 caractères (ici F et C)",
                                    "(formule): FC par exemple"
                                ]
                            },
                            "SousEtape4_2": {
                                "body": [
                                    "(type composant): No Sequence",
                                    "(longueur): 3 par exemple donc FC est suivie de 3 lettres (de 001 à 999)",
                                    "(formule): vide"
                                ]
                            }
                        }
                    }
                },
                "NB": [],
                "Infos": []
            },

            "Sujet 3": {
                "Titre": "Créer un tiers (Client)",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Création des catégories",
                        "Path": "'donnée de base' - 'catégorie client'",
                        "body": [
                            "(confer avec fournisseur)"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Code comptable Client",
                        "Path": "",
                        "body": [
                            "(code comptable:Client)"
                        ],
                        "SousEtape": []
                    },
                    "Etape3": {
                        "Titre": "Création d'un compteur",
                        "Path": "",
                        "body": [
                            "(confer avec fournisseur)"
                        ],
                        "SousEtape": []
                    },
                    "Etape4": {
                        "Titre": "Création d'un client",
                        "Path": "'donnée de base' - 'client'",
                        "body": [],
                        "SousEtape": []
                    },
                    "Etape5": {
                        "Titre": "Création d'une taxe",
                        "Path": "",
                        "body": [
                            "se fait au niveau du tableau de ligne colonne TAUX"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            }
        },
        "Sage X3 - Taxes": {
            "Sujet1": {
                "Titre": "Gestion des taxes",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Création des taux de taxes",
                        "Path": "",
                        "body": [
                            "Créer une taxe et lui affecter le pourcentage",
                            "...",
                            "(tableau: ligne) dans taux, écrire le pourcentage de la taxe"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Création des régimes de taxes",
                        "Path": "",
                        "body": [
                            "Créer les régimes de taxes"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            }

        },
        "Sage X3 - circuit NEGOCE (achat-vente-stock)": {
            "Sujet1": {
                "Titre": "Création d'un code comptable",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Créer un code comptable",
                        "Path": "/parametre comptabilitité/codes comptables/",
                        "body": [
                            "Aller dans '/parametre comptabilitité/codes comptables/'",
                            "(tableau: détail) mettre un compte social et un compte analytique"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet2": {
                "Titre": "Créer un article",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Création des catégories d’articles",
                        "Path": "'donnée de base' - 'catégorie article'",
                        "body": [
                            "Il existe 3 types d'article (A., A. de dépôt et A. site)",
                            "Catégorie (min 2, max 5)",
                            "Intitulé (description)",
                            "Intitulé court (nom de l'article)",
                            "Compteur d'article (créer ou lier)",
                            "'Cocher service, acheter, vendu et livrable'",
                            "Unité stock (créer ou lier)",
                            "Unité vente (créer ou lier) ::: car on a coché vente",
                            "Code comptable (créer ou lier)",
                            "Niveaux de taxe 1...3 (créer ou lier)"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Création d’un article",
                        "Path": "'donnée de base/article'",
                        "body": [
                            "Catégorie (créer ou lister)",
                            "Statut article (actif)",
                            "Article (auto-génération)",
                            "Intitulé (nom article)"
                        ],
                        "SousEtape": []
                    },
                    "Etape3": {
                        "Titre": "Affecter un emplacement et un dépôt à un article géré en stock",
                        "Path": "",
                        "body": [
                            "Un article dépôt est utilisé pour le stockage des articles"
                        ],
                        "SousEtape": {
                            "SousEtape3_1": {
                                "body": [
                                    "Aller dans le site auquel attribuer le dépôt et cocher 'gestion dépôt'"
                                ]
                            },
                            "SousEtape3_2": {
                                "body": [
                                    "Aller dans 'donnée de base/dépôt'",
                                    "- ..."
                                ]
                            },
                            "SousEtape3_3": {
                                "body": [
                                    "Aller dans 'donnée de base/table article/type emplacement'",
                                    "- ...",
                                    "- Catég emplacement: Interne",
                                    "- Format emplacement: AAAAA",
                                    "- Ordre proposition: AAAAA",
                                    "Cliquer ensuite sur 'Créer empl.'",
                                    "→ Création emplacements",
                                    "- Dépôt: <dépôt créé>",
                                    "- Format emplacement: AAAAA",
                                    "- Emplacement début: AAAAA",
                                    "- Emplacement fin: AAAAA"
                                ]
                            },
                            "SousEtape3_4": {
                                "body": [
                                    "Aller dans 'donnée de base/article'",
                                    ">> Sélectionner l'article puis aller sur 'article site'",
                                    ">>> Cocher 'Gestion emplacement'",
                                    ">>> (tableau: stockage) <type d'emplacement> - AAAA",
                                    ">>> Cliquer sur 'article dépôt' tout en haut",
                                    ">>>> Cocher 'emplacement par défaut'",
                                    ">>>> (tableau: stockage) <type d'emplacement> - AAAA"
                                ]
                            }
                        }
                    },
                    "Etape4": {
                        "Titre": "Création d’un article site",
                        "Path": "'donnée de base' - 'article-site'",
                        "body": [],
                        "SousEtape": []
                    },
                    "Etape5": {
                        "Titre": "Code comptable article",
                        "Path": "",
                        "body": [
                            "(code comptable: article)"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet3": {
                "Titre": "Gérer un achat",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Créer une demande d'achat",
                        "Path": "'achats' > 'demande d'achat'",
                        "body": [
                            "Pour devenir une commande, une demande d'achat doit être validée par un utilisateur",
                            "Après avoir rempli la demande d'achat, cliquer sur 'commande' tout en haut pour vérifier les erreurs et générer la/les commande(s)",
                            "(Ne pas oublier de remplir la colonne 'social' avec un compte de type 6)"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Faire un appel d’offre (facultatif)",
                        "Path": "'appel d’offre'",
                        "body": [
                            "Permet de demander des prix des articles à différents fournisseurs"
                        ],
                        "SousEtape": {
                            "SousEtape2_1": {
                                "body": [
                                    "Faire une demande d’appel d’offre",
                                    "- Aller dans 'appel d’offre/demande' et remplir",
                                    "- Puis imprimer"
                                ]
                            },
                            "SousEtape2_2": {
                                "body": [
                                    "Faire une relance (facultatif) : dans le cas où il n’y a pas de retour du fournisseur",
                                    "- Aller dans 'appel d’offre/relance' et remplir",
                                    "- Puis imprimer (créer préalablement un modèle sur Crystal Report)"
                                ]
                            },
                            "SousEtape2_3": {
                                "body": [
                                    "Faire une réponse à la demande d’offre",
                                    "- Aller dans 'appel d’offre/relance' et remplir",
                                    "- Puis imprimer (créer préalablement un modèle sur Crystal Report)"
                                ]
                            }
                        }
                    },
                    "Etape3": {
                        "Titre": "Tarif (facultatif)",
                        "Path": "'achat' > 'génération ligne de tarif'",
                        "body": [
                            "Représente le prix de l’article auquel le fournisseur le vend, selon la quantité"
                        ],
                        "SousEtape": {
                            "SousEtape3_1": {
                                "body": [
                                    "Renseigner le fournisseur et remplir le tableau"
                                ]
                            },
                            "SousEtape3_2": {
                                "body": [
                                    "Aller dans 'saisie de tarif', choisir T20 et vérifier si le tarif a bien été créé"
                                ]
                            },
                            "SousEtape3_3": {
                                "body": [
                                    "Retourner dans 'demande d’achat' pour vérifier que les prix varient bien en fonction de la quantité"
                                ]
                            }
                        }
                    },
                    "Etape4": {
                        "Titre": "Créer une commande",
                        "Path": "'achats/commandes'",
                        "body": [
                            "Remplir la commande (fournisseur, BL, date)",
                            "Aller dans 'sélection commande' et choisir la commande précédemment créée",
                            "NB : L’article doit être en 'non-géré' s’il n’a pas de stock (voir 'gestion de stock' et 'article site')"
                        ],
                        "SousEtape": []
                    },
                    "Etape5": {
                        "Titre": "Réception de la commande",
                        "Path": "'achats/réceptions'",
                        "body": [],
                        "SousEtape": []
                    },
                    "Etape6": {
                        "Titre": "Créer une facture",
                        "Path": "'achats/facture'",
                        "body": [
                            "Choisir 'bon à payer'",
                            "Aller dans 'sélection commande' et choisir la commande précédemment créée",
                            "HT ligne (HT saisi = HT calculé, total taxe saisi = écart taxe)",
                            "Cliquer sur 'validation' tout en haut pour créer une pièce comptable"
                        ],
                        "SousEtape": []
                    },
                    "Etape7": {
                        "Titre": "Configurer les articles pour l’achat",
                        "Path": "",
                        "body": [],
                        "SousEtape": {
                            "SousEtape7_1": {
                                "body": [
                                    "Gestion stock :",
                                    "- Choisir 'à gérer' si les articles sont stockés",
                                    "- Choisir 'article non géré' si l’article n’est pas stocké"
                                ]
                            },
                            "SousEtape7_2": {
                                "body": [
                                    "Gestion lot (identification collective de produits) :",
                                    "- Pas de gestion lot",
                                    "- Lot facultatif",
                                    "- Lot obligatoire",
                                    "- Lot et sous-lot (un lot peut avoir plusieurs sous-lots individuels)"
                                ]
                            },
                            "SousEtape7_3": {
                                "body": [
                                    "Gestion série (identification individuelle de produit) :",
                                    "- Pas de gestion",
                                    "- En sortie",
                                    "- Entrée/Sortie",
                                    "- Entrée/Sortie globale",
                                    "NB :",
                                    "- Les lots et séries sont des matricules : lot = commun, série = unique",
                                    "- Un matricule ne peut pas être modifié",
                                    "- Sortie = vente",
                                    "- Entrée = achat"
                                ]
                            },
                            "SousEtape7_4": {
                                "body": [
                                    "Unités :",
                                    "- L’unité de vente, d’achat et de stock peuvent varier selon les usages"
                                ]
                            },
                            "SousEtape7_5": {
                                "body": [
                                    "Comptabilité générale :",
                                    "- Le niveau de taxe dépend du nombre de taxes appliquées à l’article"
                                ]
                            }
                        }
                    },
                    "Etape8": {
                        "Titre": "Configurer les fournisseurs pour l’achat",
                        "Path": "",
                        "body": [],
                        "SousEtape": {
                            "SousEtape8_1": {
                                "body": [
                                    "Les encours :",
                                    "→ Contrôle encours :",
                                    "- Contrôlé : les dettes sont vérifiées avant achat",
                                    "- Libre : aucun contrôle",
                                    "- Bloqué : aucun achat possible chez ce fournisseur"
                                ]
                            },
                            "SousEtape8_2": {
                                "body": [
                                    "→ Encours autorisé : seuil d’alerte",
                                    "→ Total encours : dette actuelle",
                                    "→ Litige : niveau de blocage ou conflit"
                                ]
                            },
                            "SousEtape8_3": {
                                "body": [
                                    "→ Condition de paiement : type de paiement défini pour le fournisseur"
                                ]
                            }
                        }
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet4": {
                "Titre": "Gérer une vente",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Réaliser une vente",
                        "Path": "",
                        "body": [],
                        "SousEtape": {
                            "SousEtape1_1": {
                                "body": [
                                    "Aller dans 'vente/devis'",
                                    "- Choisir un client",
                                    "- Pour la détermination de taxe, utiliser TSN (régime de taxe)",
                                    "- Remplir les informations dans le tableau ligne"
                                ]
                            },
                            "SousEtape1_2": {
                                "body": [
                                    "Commande : après avoir rempli le devis, cliquer sur 'commande' tout en haut"
                                ]
                            },
                            "SousEtape1_3": {
                                "body": [
                                    "Livraison : après avoir rempli la commande, cliquer sur 'commande' tout en haut",
                                    "- Après avoir rempli les champs, cliquer sur 'validation'"
                                ]
                            },
                            "SousEtape1_4": {
                                "body": [
                                    "Facture",
                                    "- Type",
                                    "  + Dans la législation, cocher OHA",
                                    "  + Dans l’onglet LIGNE / législation, cocher OHA (ligne HT, ligne TVA, ligne tiers, et 'facture à émettre')",
                                    "- Après avoir rempli les champs, cliquer sur 'validation' pour créer la pièce comptable"
                                ]
                            }
                        }
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet5": {
                "Titre": "Gérer un stock",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Entrée de stock (achat ou ajustement)",
                        "Path": "Gestion de stock > Entrée diverse",
                        "body": [
                            "+ Entrée diverse (dans le cas d'un achat pour ajouter du stock)",
                            "- Famille mouvement : définir le type d'opération pour traçabilité et comptabilité"
                        ],
                        "SousEtape": {}
                    },
                    "Etape2": {
                        "Titre": "Sortie de stock (vente ou ajustement)",
                        "Path": "Gestion de stock > Sortie diverse",
                        "body": [
                            "+ Sortie diverse (dans le cas d'une vente pour retirer du stock)",
                            "- Famille mouvement : définir le type d'opération pour traçabilité et comptabilité"
                        ],
                        "SousEtape": {}
                    },
                    "Etape3": {
                        "Titre": "Consulter les stocks",
                        "Path": "",
                        "body": [],
                        "SousEtape": {
                            "SousEtape3_1": {
                                "body": [
                                    "+ Stock par site : permet de voir les stocks d’un site spécifique pour consultation ou impression"
                                ]
                            },
                            "SousEtape3_2": {
                                "body": [
                                    "+ Stock par article : permet de voir les stocks d’un article spécifique pour consultation ou impression"
                                ]
                            }
                        }
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet6": {
                "Titre": "Gérer un compte",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Créer un compte",
                        "Path": "table comptable/comptes",
                        "body": [],
                        "SousEtape": {
                            "SousEtape1_1": {
                                "body": [
                                    "Cliquer sur plan (ici choisir social)",
                                    "plan: soc",
                                    "compte: compte de l'entreprise (valeur numérique)",
                                    "nom de l'entreprise"
                                ]
                            }
                        }
                    },
                    "Etape2": {
                        "Titre": "Exporter un compte",
                        "Path": "",
                        "body": [],
                        "SousEtape": {
                            "SousEtape2_1": {
                                "Titre": "Créer le modèle d'export",
                                "Path": "imports-exports/modele imports-exports",
                                "body": [
                                    "Prendre le modèle GAC et le renommer YGAC",
                                    "(tableau) identificateur : ne conserver que la ligne de 1",
                                    "(tableau) champs : ne conserver que les lignes d'intitulé 'code plan','compte','intitulé','collectif','code d'appel','devise' et 'classification'",
                                    "Cliquer sur export"
                                ],
                                "SousEtape2_1_1": {
                                    "body": [
                                        "(tableau) pour bornes : effacer le contenu de valeur de début et de fin",
                                        "(tableau) pour critère : effacer critère"
                                    ]
                                }
                            },
                            "SousEtape2_2": {
                                "Titre": "Lancer l'export",
                                "Path": "exploitation/import-export/exports",
                                "body": [
                                    "Modèle à utiliser : YGAC (qu'on vient de créer)"
                                ],
                                "SousEtape2_2_1": {
                                    "body": [
                                        "(tableau) pour bornes : effacer le contenu de début et de fin",
                                        "(tableau) pour critère : effacer critère",
                                        "En cliquant sur OK le fichier (à ouvrir dans Excel) se télécharge",
                                        "Remplir le fichier destiné à être ouvert avec Excel en se basant sur les écritures déjà présentes",
                                        "(Vérifier si dans pièce auto '/paramétrage/comptabilité/pièce automatique' le OHA est coché pour chaque pièce)"
                                    ]
                                },
                                "SousEtape2_2_2": {
                                    "body": [
                                        "NB: la case G doit rester G SUR TOUTES LES LIGNES et SOC aussi",
                                        "Le fichier après modification doit être au format CSV (avec point-virgule)"
                                    ]
                                }
                            }
                        }
                    },
                    "Etape3": {
                        "Titre": "Importer un fichier CSV vers Sage",
                        "Path": "",
                        "body": [],
                        "SousEtape": {
                            "SousEtape3_1": {
                                "Titre": "Configurer le format",
                                "Path": "exploitation/model/import-export",
                                "body": [
                                    "Aller sur format fichier et mettre utf-8"
                                ]
                            },
                            "SousEtape3_2": {
                                "Titre": "Faire l'import",
                                "Path": "exploitation/import-export/import",
                                "body": [
                                    "Choisir le fichier à importer (.txt ou .csv)"
                                ]
                            }
                        }
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet7": {
                "Titre": "Lier le compte social et compte analytique",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Associer un compte social à un compte analytique",
                        "Path": "table comptable/comptes par défaut",
                        "body": [],
                        "SousEtape": {
                            "SousEtape1_1": {
                                "body": [
                                    "Remplir 'autre plan comptable' (ici avec ANA)",
                                    "Remplir 'COMPTE PAR DÉFAUT' (avec un numéro de compte analytique)"
                                ]
                            }
                        }
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet8": {
                "Titre": "Désactiver les signatures",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Désactivation des signatures dans les paramètres",
                        "Path": "paramétrage/valeur paramètre",
                        "body": [],
                        "SousEtape": {
                            "SousEtape1_1": {
                                "body": [
                                    "Sélectionner 'ACH achat/dossier/<nom du dossier>' dans le menu de gauche",
                                    "Chercher 'gestion signature' puis cliquer sur les trois traits à droite et choisir 'détail'",
                                    "Mettre toutes les lignes à 'non' sauf la dernière",
                                    "Cliquer sur OK pour valider"
                                ]
                            }
                        }
                    }
                },
                "NB": [],
                "Infos": []
            },


            NB: [
                "Pour pouvoir effectuer le circuit de negociation il faut créer des comptes, des taxes un tier peu etre client,fournisseur , un personnel ou un prospect"
            ]
        },
        "Sage X3 - Finance": {
            "Sujet1": {
                "Titre": "Créer un journal",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Création d'un journal comptable",
                        "Path": "Table Comptable/journaux comptables",
                        "body": [],
                        "SousEtape": {
                            "SousEtape1_1": {
                                "body": [
                                    "Remplir les informations nécessaires du journal",
                                    "Définir le type de journal",
                                    "Si le journal est de type 'trésorerie', ajouter un plan comptable dans le tableau (OHADA)",
                                    "Ajouter un numéro de compte approprié"
                                ]
                            }
                        }
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet2": {
                "Titre": "Créer un type de pièce",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Paramétrage d'un type de pièce",
                        "Path": "parametrage/comptabilite/types de piece",
                        "body": [],
                        "SousEtape": {
                            "SousEtape1_1": {
                                "body": [
                                    "Choisir un journal par défaut (précédemment créé)",
                                    "Choisir entre un compteur manuel ou lier un compteur existant",
                                    "Définir la catégorie (cocher 'pièce' et 'simulation')",
                                    "(Tableau : type de journal) cocher les types de journaux concernés",
                                    "Dans 'gestion' : cocher 'création dépense' et 'gestion échéance'",
                                    "(Tableau : référentiel) autoriser toutes les lignes"
                                ]
                            }
                        }
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet3": {
                "Titre": "Faire la saisie",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Ouvrir l'exercice et la période comptable",
                        "Path": "",
                        "body": [
                            "Ouvrir l'exercice comptable (dans 'parametrage/comptabilite/exercice') et cliquer sur ouvrir",
                            "Ouvrir la période comptable (dans 'parametrage/comptabilite/periode') et cliquer sur ouvrir"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Saisie des pièces comptables",
                        "Path": "comptabilite/piece/saisie pieces",
                        "body": [
                            "Catégorie : choisir 'réel'",
                            "État : choisir 'provisoire'",
                            "Libellé : saisir comme intitulé",
                            "Bon à payer : choisir 'Bon à payer'"
                        ],
                        "SousEtape": {
                            "SousEtape2_1": {
                                "body": [
                                    "(Tableau) : créer une colonne pour fournisseur (le compte doit être classe 4 et faire un crédit)",
                                    "(Tableau) : créer une colonne pour charge (le compte doit être classe 6 et faire un débit)",
                                    "NB : la somme des débits doit être égale à la somme des crédits (règle comptable)"
                                ]
                            }
                        }
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet4": {
                "Titre": "Extourner une écriture comptable",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Méthode 1 - Extourne via saisie pièce",
                        "Path": "comptabilite/piece/saisie pieces",
                        "body": [
                            "Aller sur saisie pièce et cliquer sur les barres de paramètre tout en haut",
                            "Choisir 'extourne'",
                            "Sélectionner 'Montant <=> montant négatif' pour faire l'extourne négative (recommandé)"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Méthode 2 - Extourne via menu extourne",
                        "Path": "comptabilite/extournes",
                        "body": [
                            "Aller sur extourne et choisir 'extourner à'",
                            "Date d'extourne : choisir une date (exemple : aujourd'hui)"
                        ],
                        "SousEtape": {
                            "SousEtape2_1": {
                                "body": [
                                    "Aller sur 'Comptabilité/extournes'",
                                    "Choisir la société (toute société ou préciser une société)",
                                    "Définir date début et date fin (entre ces dates, toutes les écritures comptables seront extournées)",
                                    "Choisir type de génération : 'Montant <=> montant négatif'"
                                ]
                            }
                        }
                    }
                },
                "NB": [
                    "Afin d'extourner, il faut absolument utiliser un compteur au niveau de 'type de pièce'"
                ],
                "Infos": []
            },
            "Sujet5": {
                "Titre": "Faire une Consultation (connaître les activités effectuées sur un élément)",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Consultation de compte",
                        "Path": "comptabilite/consultation/compte",
                        "body": [
                            "Aller sur 'comptabilité/consultation/compte'",
                            "...",
                            "Remplir date de début et date de fin pour l'écart concerné",
                            "Si la saisie est de classe 5, remplir 'compte'",
                            "Si la saisie est de classe 4, remplir 'collectif' et 'tiers'",
                            "Cliquer sur recherche"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Consultation d'écriture",
                        "Path": "comptabilite/consultation/ecriture",
                        "body": [
                            "Aller sur 'comptabilité/consultation/ecriture'",
                            "...",
                            "Remplir date de début et date de fin pour l'écart concerné",
                            "Cliquer sur Critère pour choisir un journal ou un type de pièce (optionnel)",
                            "Cliquer sur recherche"
                        ],
                        "SousEtape": []
                    },
                    "Etape3": {
                        "Titre": "Consultation de balance",
                        "Path": "comptabilite/consultation/balance",
                        "body": [
                            "Aller sur 'comptabilité/consultation/balance'",
                            "...",
                            "Remplir date de début et date de fin pour l'écart concerné",
                            "Remplir compte de début et compte de fin pour l'écart concerné",
                            "Cliquer sur recherche"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet6": {
                "Titre": "Faire un lettrage (lier la ou les factures fournisseurs aux règlements client)",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Créer deux saisies de pièce",
                        "Path": "",
                        "body": [
                            "Créer 2 saisies de pièce, un pour l'achat (facture) et l'autre pour la trésorerie (règlement)"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Accéder à lettrage manuel",
                        "Path": "comptabilite/lettrage manuel",
                        "body": [
                            "Aller dans 'comptabilité/lettrage manuel'",
                            "...",
                            "Remplir 'collectif' et remplir 'tiers'",
                            "Cocher les 2 lignes (achats et règlement)",
                            "Puis cliquer sur lettrer"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet7": {
                "Titre": "Faire une simulation",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Créer une simulation actif (impact sur la valeur des comptes)",
                        "Path": "",
                        "body": [
                            "Faire la saisie",
                            "Ouvrir l'exercice comptable (dans 'parametrage/comptabilite/exercice') et cliquer sur ouvrir",
                            "Ouvrir la période comptable (dans 'parametrage/comptabilite/periode') et cliquer sur ouvrir",
                            "Aller dans 'comptabilite/piece/saisie pièces'",
                            "...",
                            "Catégorie (choisir 'simulation actif')",
                            "État (choisir 'provisoire')",
                            "Libellé (comme intitulé)",
                            "Bon à payer (choisir Bon à payé)",
                            "(tableau):",
                            "Créer une colonne pour fournisseur (compte classe 4, crédit)",
                            "Créer une colonne pour Charge (compte classe 6, débit)",
                            "NB : la somme des débits doit être égale à la somme des crédits (comptabilité)"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Créer une simulation inactif (sans impact sur la valeur des comptes)",
                        "Path": "",
                        "body": [
                            "Faire la saisie",
                            "Ouvrir l'exercice comptable (dans 'parametrage/comptabilite/exercice') et cliquer sur ouvrir",
                            "Ouvrir la période comptable (dans 'parametrage/comptabilite/periode') et cliquer sur ouvrir",
                            "Aller dans 'comptabilite/piece/saisie pièces'",
                            "...",
                            "Catégorie (choisir 'simulation actif')",
                            "État (choisir 'provisoire')",
                            "Libellé (comme intitulé)",
                            "Bon à payer (choisir Bon à payé)",
                            "(tableau):",
                            "Créer une colonne pour fournisseur (compte classe 4, crédit)",
                            "Créer une colonne pour Charge (compte classe 6, débit)",
                            "NB : la somme des débits doit être égale à la somme des crédits (comptabilité)"
                        ],
                        "SousEtape": []
                    },
                    "Etape3": {
                        "Titre": "Rendre une simulation inactive active",
                        "Path": "contact/Simulation/activation",
                        "body": [
                            "Aller dans 'contact/Simulation/activation'",
                            "...",
                            "Cocher tous utilisateurs",
                            "Cliquer sur 'ok'",
                            "Les simulations concernées seront activées"
                        ],
                        "SousEtape": []
                    },
                    "Etape4": {
                        "Titre": "Rendre une simulation active inactive",
                        "Path": "contact/Simulation/desactivation",
                        "body": [
                            "Aller dans 'contact/Simulation/desactivation'",
                            "...",
                            "Cocher tous utilisateurs",
                            "Cliquer sur 'ok'",
                            "Les simulations concernées seront désactivées"
                        ],
                        "SousEtape": []
                    },
                    "Etape5": {
                        "Titre": "Faire une annulation",
                        "Path": "contact/Simulation/annulation",
                        "body": [
                            "Aller dans 'contact/Simulation/annulation'",
                            "...",
                            "Cocher tous utilisateurs",
                            "Si",
                            "* 'Simulations non actives' est coché, il supprimera toutes les simulations inactif et actif",
                            "* 'Simulations non actives' n'est pas coché, il supprimera que les simulations actif",
                            "Cliquer sur 'ok'",
                            "Les simulations concernées seront supprimées"
                        ],
                        "SousEtape": []
                    },
                    "Etape6": {
                        "Titre": "Faire une validation",
                        "Path": "contact/Simulation/annulation",
                        "body": [
                            "Aller dans 'contact/Simulation/annulation'",
                            "...",
                            "Cocher tous utilisateurs",
                            "Si",
                            "* 'Simulations non actives' est coché, il rendra réel toutes les simulations inactif et actif",
                            "* 'Simulations non actives' n'est pas coché, il rendra réel que les simulations actif",
                            "Cliquer sur 'ok'",
                            "Les simulations concernées seront réelles"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet8": {
                "Titre": "Faire une facture tiers client (généralement utilisée pour factures éléments non articles, aussi pour abonnements)",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Saisie facture tiers client",
                        "Path": "",
                        "body": [
                            "...",
                            "(ligne) table : mettre le compte du produit et à somme au niveau débiteur"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet9": {
                "Titre": "Faire une facture tiers fournisseur (généralement utilisée pour factures éléments non articles, aussi pour abonnements)",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Saisie facture tiers fournisseur",
                        "Path": "",
                        "body": [
                            "...",
                            "(ligne) table : mettre le compte de charge et à somme au niveau débiteur"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet10": {
                "Titre": "Gérer les échéances (date limite pour régler la facture entraînant)",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Accéder à la saisie des échéances",
                        "Path": "comptabilite tier/saisie echeance",
                        "body": [
                            "Aller dans 'comptabilite tier/saisie echeance'",
                            "Choisir les critères puis cliquer sur 'ok'",
                            "(tableau: bon à payer) choisir 'bon à payer' pour payer ou 'en attente' pour dire qu'il peut être payé par l'entreprise"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet11": {
                "Titre": "Gérer les saisies règlement",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Créer une pièce automatique",
                        "Path": "parametrage/Comptabilite piece automatique",
                        "body": [
                            "Aller dans 'parametrage/Comptabilité piece automatique'",
                            "Sélectionner 'princ' et cocher OHA",
                            "Cliquer sur ligne, cocher le OHA de chaque élément un à un"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Créer une transaction de saisie règlement",
                        "Path": "parametrage/comptabilite tier/transaction saisie de reglement",
                        "body": [
                            "Aller dans 'parametrage/comptabilite tier/transaction saisie de reglement'",
                            "...",
                            "Sens : si achat, choisir 'depense', si vente, choisir 'recette'",
                            "Au niveau de saisie : cocher les champs à saisir obligatoire ou non",
                            "Etape :",
                            "-> Groupe pièce : step1",
                            "Regroupement règlement : Règlement",
                            "Regroupement escompte : Règlement",
                            "Type journal : banque"
                        ],
                        "SousEtape": []
                    },
                    "Etape3": {
                        "Titre": "Créer une formule par législation (type de pièce)",
                        "Path": "parametrage/comptabilite/type de piece",
                        "body": [
                            "Aller dans 'parametrage/comptabilite/type de piece'",
                            "Créer DECAI et ENCAI",
                            "Pour DECAI : vente, trésorerie et OD1 sont à oui",
                            "Pour ENCAI : achat, trésorerie et OD1 sont à oui",
                            "Cocher 'réel' et 'simulation'"
                        ],
                        "SousEtape": []
                    },
                    "Etape4": {
                        "Titre": "Créer une formule par législation (formule par législation)",
                        "Path": "parametrage/comptabilite/formule par legislation",
                        "body": [
                            "Aller dans 'parametrage/comptabilite/formule par legislation'",
                            "Code : écrire 'PRG'",
                            "Au niveau de formule écrire : string$([F:TB0]SNS=1, 'DECAI') + string$([F:TB0]SNS=2, 'ENC')"
                        ],
                        "SousEtape": []
                    },
                    "Etape5": {
                        "Titre": "Créer une saisie de règlement à une étape",
                        "Path": "parametrage/Transaction saisie règlement",
                        "body": [
                            "Aller dans 'parametrage/Transaction saisie règlement'",
                            "Choisir le choix de transaction créé précédemment",
                            "...",
                            "Libellé : mettre la valeur de son choix",
                            "Montant Tiers : ne pas remplir le montant",
                            "Valider"
                        ],
                        "SousEtape": []
                    },
                    "Etape6": {
                        "Titre": "Créer une saisie de règlement à plusieurs étapes",
                        "Path": "parametrage/Transaction saisie règlement",
                        "body": [
                            "Aller dans 'parametrage/Transaction saisie règlement'",
                            "Aller dans étape, comptabilisation des effets :",
                            "Groupe pièce : STEP1",
                            "Type journal : Chq à encaisser",
                            "Aller dans étape, comptabilité intermédiaire des effets :",
                            "Groupe pièce : STEPN",
                            "Type journal encaissement : Remise à l'encaissement",
                            "Type journal escompte : banque",
                            "Aller dans étape, comptabilité :",
                            "Groupe pièce : STEPN",
                            "Type journal règlement : Règlement",
                            "Regroupement escompte : Règlement",
                            "Type journal : banque",
                            "Aller dans 'donne de base/compte en banque' (créer et lier chaque step à un compte)",
                            "...",
                            "(tableau : journaux) sur chaque ligne mettre les différents journaux (afin d'adapter chaque compte de trésorerie à chaque étape)"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },
            "Sujet12": {
                "Titre": "Enregistrer une pièce comptable",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Enregistrement de la pièce comptable",
                        "Path": "",
                        "body": [
                            "..."
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            }
        },
        "Sage X3 - Immobilisation": {
            Sujet1: {
                "Titre": "Faire l'immobilisation d'un article",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Configurer les contextes d'amortissements",
                        "Path": "parametrage/immobilisation/Contextes d'amortissements",
                        "body": [
                            "Aller dans 'parametrage/immobilisation/Contextes d'amortissements'",
                            "(tableau : liste des plans gérés)"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Créer une famille d'immobilisation",
                        "Path": "donnee de base/table immobilisation/famille immobilisation",
                        "body": [
                            "Aller dans 'donnee de base/table immobilisation/famille immobilisation'",
                            "Groupe de société : <nom société>",
                            "Code famille : <nom de la famille d'immobilisation>",
                            "Désignation : <...>",
                            "Intitulé court : <...>"
                        ],
                        "SousEtape": []
                    },
                    "Etape3": {
                        "Titre": "Déclarer le bien comptable",
                        "Path": "parametrage/immobilisation/bien comptable",
                        "body": [
                            "Aller dans 'parametrage/immobilisation/bien comptable'",
                            "..."
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            }

        },
        "Sage X3 - Patch": {
            Sujet1: {
                "Titre": "Créer des modèles d'import et créer le patch",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Créer des modèles d'import",
                        "Path": "model d'import/export",
                        "body": [
                            "Dans 'model d'import/export', choisir un modèle (ex: client) puis le dupliquer et le modifier selon sa convenance",
                            "Créer un code d'activité (ex: YMOD) qui permettra de retrouver l'ensemble des modèles concernés pour le patch"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Créer le patch",
                        "Path": "developpement/patch/developpement de patch",
                        "body": [
                            "Aller dans 'developpement/patch/developpement de patch'",
                            "Choisir le type de destination (choisir client)",
                            "(tableau) Objet :",
                            " - La première ligne doit être 'ACV | code model (ex : YMOD) | nom du modèle'",
                            " - Les autres lignes commencent par 'AOE | code donnée de base | nom de la donnée de base'",
                            "(tableau) Code activité :",
                            " - La ligne doit être 'YMOD | nom du modèle'",
                            "Cliquer sur OK. Cela téléchargera le fichier donc le patch."
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },

        },
        "Sage X3 - EcranS et Tables": {
            Sujet1: {
                "Titre": "Aller dans le module concerné et taper Echap + F6",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Structure de l'alerte",
                        "Path": "Champ PQHNUM / Ecran PQF1 [DIA]",
                        "body": [
                            "PQHNUM = champ (column)",
                            "PQF1 = Ecran",
                            "DIA = abréviation"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Prendre le code de l'écran et chercher les tables liées",
                        "Path": "",
                        "body": [
                            "Prendre le code de l'écran puis chercher les tables qui y sont liées (les tables n'ont pas toujours le même nom que la donnée de base)",
                            "À partir de la table, récupérer les colonnes recherchées (on peut s'aider de SQL Server)"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },

        },
        "Sage X3 - Module developpement": {
            Sujet1: {
                "Titre": "Ajouter un champ à un module",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Ajouter une colonne dans la table",
                        "Path": "écran du module",
                        "body": [
                            "Aller sur l'écran du module et trouver la table déterminée",
                            "Créer une nouvelle colonne dans la table via 'aller à'",
                            "...",
                            "Type : mettre 'A' pour Alphanumérique, 'D' pour date, ...",
                            "Enregistrer puis valider"
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Créer une colonne de même nom sur l'écran",
                        "Path": "écran du module",
                        "body": [
                            "Créer une colonne de même nom sur l'écran",
                            "...",
                            "Type : mettre 'A' pour Alphanumérique, 'D' pour date, ...",
                            "Enregistrer puis valider",
                            "Le champ devrait être créé"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },

            Sujet2: {
                "Titre": "Créer une transaction de saisie (permettre l'apparition de certains inputs)",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Créer une transaction",
                        "Path": "/parametrage/'nomDuModule'/'nomDusousModule'",
                        "body": [
                            "Aller dans '/parametrage/'nomDuModule'/'nomDusousModule''",
                            "Créer via duplication la nouvelle transaction de saisie",
                            "Valider"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            },

            Sujet3: {
                "Titre": "Lier une transaction de saisie à un utilisateur",
                "PT": "",
                "Etapes": {
                    "Etape1": {
                        "Titre": "Créer un code d'accès",
                        "Path": "parametrage/code d'acces",
                        "body": [
                            "Aller dans 'parametrage/code d'acces'",
                            "..."
                        ],
                        "SousEtape": []
                    },
                    "Etape2": {
                        "Titre": "Lier le code d'accès à la transaction de saisie",
                        "Path": "/parametrage/'nomDuModule'/'nomDusousModule'",
                        "body": [
                            "Aller dans '/parametrage/'nomDuModule'/'nomDusousModule''",
                            "Dans 'code d'acces', mettre le nouveau code d'accès"
                        ],
                        "SousEtape": []
                    },
                    "Etape3": {
                        "Titre": "Lier le code d'accès à l'utilisateur",
                        "Path": "parametre/utilisateur",
                        "body": [
                            "Aller dans 'parametre/utilisateur'",
                            "(tableau) Mettre le nom du nouveau code d'accès puis cliquer sur 'oui' à tous pour permettre les interactions"
                        ],
                        "SousEtape": []
                    }
                },
                "NB": [],
                "Infos": []
            }

        },
        "Sage X3 - QCM": {
            "Titre": "NEGOCE",
            "PT": "",
            "Etapes": {
                "Etape1": {
                    "Titre": "Achat",
                    "Path": "",
                    "body": [],
                    "SousEtape": {
                        "SousEtape1": {
                            "body": [
                                "(achat:réception) Erreur zone \"Commande\" - Commande non signée ou déjà réceptionnée.",
                                "☑️ Retirer les signatures du module achat (ou gérer les signatures si nécessaire)"
                            ]
                        },
                        "SousEtape2": {
                            "body": [
                                "(achat:réception:trace) \"MAT-000001\" Prix de valorisation nul non autorisé !",
                                "☑️ (article:article-site) Changer la valorisation en \"AVC\""
                            ]
                        },
                        "SousEtape3": {
                            "body": [
                                "(achat:facture) Erreur zone \"Date comptable\" - Période non ouverte",
                                "☑️ (données de base : journaux comptables) puis créer achat et lui donner le type achat, cliquer sur ouverture et donner \"01/01/<année actuelle>\" puis \"OK\""
                            ]
                        },
                        "SousEtape4": {
                            "body": [
                                "(achat:facture) Erreur de l'application - Type de pièce non défini",
                                "☑️ Cliquez sur les traits de \"type de facture fournisseur\"",
                                "- Catégorie facture achat : Facture",
                                "- Pièce auto achat : PIHI2",
                                "- Pièce auto tiers : BPSIN",
                                "- Journal : ACHAT",
                                "- Type de pièce : DBR (vérifier si dans DBR achat est à oui)"
                            ]
                        },
                        "SousEtape5": {
                            "body": [
                                "(achat:facture) DBRSIEGE25/00000003 La pièce automatique n'autorise pas la validation",
                                "☑️ (achat:facture) aller dans type de facture fournisseur",
                                "-> Pièce auto achat : PIHI",
                                "- Cocher OHA dans l'entrée en tunnel de PIHI",
                                "- Cliquer sur \"ligne\" puis cocher OHA pour chaque ligne",
                                "- Aller dans \"pièces automatiques\" et cocher OHA pour chaque ligne"
                            ]
                        },
                        "SousEtape6": {
                            "body": [
                                "(achat:facture) erreur : evalue(func SUBTFO.FC(\"PIF\")) et (achat:facture) DBRSIEGE25/00000003 PIHI Ligne 20 : FREREF Erreur en évaluation de zone",
                                "☑️ (achat:facture) aller dans type de facture fournisseur",
                                "-> Pièce auto achat : PIHI",
                                "-> Cliquer sur \"ligne\" puis sur la ligne 20 retirer (func SUBTFO.FC(\"PIF\"))",
                                "-> Lancer le serveur batch dans \"exploitation / tâche comptable\""
                            ]
                        }
                    }
                },
                "Etape2": {
                    "Titre": "Vente",
                    "Path": "",
                    "body": [],
                    "SousEtape": {
                        "SousEtape1": {
                            "body": [
                                "(vente:devis) Erreur zone \"Niveau taxe 1\" - Code taxe obligatoire : Aucune règle de détermination des taxes ne s'applique",
                                "☑️ La taxe sur le client ne doit pas être \"CEE\"",
                                "- Créer la détermination de taxe (TSNEXO)",
                                "- Aller dans l'écran, puis chercher \"gestion devis\" de code WK1ALL2, mettre \"oblig\" à non sur la ligne \"VACITM\" dans les deux tableaux",
                                "- Valider"
                            ]
                        }
                    }
                },
                "Etape3": {
                    "Titre": "Stock",
                    "Path": "",
                    "body": [],
                    "SousEtape": {
                        "SousEtape1": {
                            "body": [
                                "(donnée de base : dépôts) Erreur zone \"Site stock\" - Il n'y a pas de gestion de dépôt sur ce site.",
                                "☑️ Aller dans le site auquel attribuer le dépôt et cocher \"gestion dépôt\""
                            ]
                        },
                        "SousEtape2": {
                            "body": [
                                "MAT-000001 SIEGE : Article site non géré en emplacement --> l'article dépôt est inutile : MAT-000001 CHANT",
                                "☑️ Créer un type d'emplacement puis ajouter un emplacement"
                            ]
                        }
                    }
                },
                "Etape4": {
                    "Titre": "Finance",
                    "Path": "",
                    "body": [],
                    "SousEtape": {
                        "SousEtape1": {
                            "body": [
                                "(Comptabilité : saisie pièces) Message d'information - Aucune transaction autorisée",
                                "☑️ Dans le dossier principal \"SAGE X3 / X3\" autoriser tous les dossiers",
                                "-> Créer \"les saisies de pièces\" FACLI ET FAFOU",
                                "-> Aller dans \"paramétrage / compta / transaction saisie pièce\"",
                                "- Copier la transaction de saisie de pièce STDCO puis valider"
                            ]
                        }
                    }
                },
                "Etape5": {
                    "Titre": "Immobilisation",
                    "Path": "",
                    "body": [],
                    "SousEtape": {
                        "SousEtape1": {
                            "body": [
                                "Erreur zone \"Site financier\" - Opération impossible. Le contexte \"fiscal & comptable\" de la société doit avoir été défini au préalable.",
                                "☑️ (paramétrage : immobilisation) créer un \"Contexte d'amortissement\" lié à la société"
                            ]
                        }
                    }
                }
            },
            "NB": [],
            "Infos": []
        }

    },

    "Cristal Report": {
        Sujet1: {
            "Titre": "Créer une connexion",
            "PT": "",
            "Etapes": {
                "Etape1": {
                    "Titre": "Créer la connexion ODBC",
                    "Path": "fichier/nouveau/creer une connection",
                    "body": [
                        "Aller fichier/nouveau/creer une connection",
                        "Choisir ODBC puis choisir la source de donnée (mot de passe et nom doivent être ceux de SQLSERVER)",
                        "Choisir ensuite le schéma (la base de données concernée)"
                    ],
                    "SousEtape": []
                }
            },
            "NB": [],
            "Infos": []
        },
        Sujet2: {
            "Titre": "Créer un rapport (état)",
            "PT": "",
            "Etapes": {
                "Etape1": {
                    "Titre": "Choisir les tables concernées",
                    "Path": "module concerné",
                    "body": [
                        "Aller dans le module concerné",
                        "Aller sur un input et taper 'ECHAP + F6' et récupérer le code de l'objet (la valeur dans le [] tout à la fin)",
                        "X3/developpement/dictionnaire des scripts/ecrans",
                        "Filtrer la liste des tables par abréviation",
                        "Dans table de référence, on a la liste des tableaux du module à chercher dans SQLSERVER",
                        "Dans Crystal Report, sélectionner les tables en question puis joindre en respectant 2 règles :",
                        "Les colonnes doivent avoir le même nom dans chaque colonne et doivent être des index (chercher dans Developpement/tables puis voir dans index)",
                        "Cliquer sur 'suivant'",
                        "Sélectionner les colonnes à afficher (optionnel), puis suivre jusqu'à la fin"
                    ],
                    "SousEtape": []
                },
                "Etape2": {
                    "Titre": "Designer l'affichage sur Crystal Report",
                    "Path": "Crystal Report",
                    "body": [
                        "Dans explorateur de champ, il y a la liste des colonnes des tables sélectionnées plus tôt",
                        "Dans détail, utiliser les fonctions qui se répètent (agit comme un foreach)",
                        "Pour écrire un texte, aller sur insérer/champ texte",
                        "Voir les modifications dans aperçu"
                    ],
                    "SousEtape": []
                }
            },
            "NB": [],
            "Infos": []
        },
        Sujet3: {
            "Titre": "Créer une fonction",
            "PT": "",
            "Etapes": {
                "Etape1": {
                    "Titre": "Créer une formule dans Crystal Report",
                    "Path": "explorateur de champ",
                    "body": [
                        "Dans l'explorateur de champ, faire un clic gauche sur 'champ de formule' puis donner un nom à la formule",
                        "Après validation, pour récupérer une variable d'un tableau de la base de données, il faut ouvrir '{}' (ex: {table1.prix}+{table2.tva})",
                        "Appuyer sur enregistrer et valider puis sauvegarder le rapport",
                        "Toujours dans l'explorateur de champ, en dessous de 'champ de formule' il y aura le champ de la fonction pour l'utiliser"
                    ],
                    "SousEtape": []
                }
            },
            "NB": [],
            "Infos": []
        },
        Sujet4: {
            "Titre": "Faire un filtre d'affichage",
            "PT": "",
            "Etapes": {
                "Etape1": {
                    "Titre": "Créer le filtre",
                    "Path": "barre latérale",
                    "body": [
                        "Sur la barre latérale, appuyer sur l'icône noire orange puis choisir le champ qui permettra la sélection puis valider",
                        "Appuyer sur 'éditeur de formule', ensuite écrire sa formule (ex: {table1.prix} > 1000)",
                        "Appuyer sur enregistrer et valider puis sauvegarder le rapport",
                        "À moins de supprimer le filtre, le tableau n'affichera que les éléments qui respectent le filtre"
                    ],
                    "SousEtape": []
                }
            },
            "NB": [],
            "Infos": []
        },
        Sujet5: {
            "Titre": "Importer un fichier Crystal Report sur Sage",
            "PT": "",
            "Etapes": {
                "Etape1": {
                    "Titre": "Copier le fichier .rpt dans le dossier",
                    "Path": "C:\\Sage\\SAGEX3\\dossiers\\X3\\REPORT\\FRA",
                    "body": [
                        "Aller dans 'C:\\Sage\\SAGEX3\\dossiers\\X3 (si tu veux pouvoir l'utiliser dans tout dossier)\\REPORT\\FRA (selon la langue choisie)'",
                        "Coller le fichier .rpt"
                    ],
                    "SousEtape": []
                },
                "Etape2": {
                    "Titre": "Créer un champ de paramètre et un filtre dans Crystal Report",
                    "Path": "Crystal Report",
                    "body": [
                        "Dans Crystal Report, créer un champ de paramètre (ex: numCde) puis un filtre (ex: {PORDER.POHNUM_0} = {?numCde})"
                    ],
                    "SousEtape": []
                },
                "Etape3": {
                    "Titre": "Configurer dans X3",
                    "Path": "X3",
                    "body": [
                        "Aller dans 'dictionnaire des états' puis dupliquer le modèle et lui donner le nom du fichier .rpt",
                        "Si il y a des paramètres à remplir, remplir le tableau paramètre (nom du paramètre sur Crystal Report | intitulé au choix | code objet | ... | unique | oui | [M:code objet]code du champ ou [F:abréviation table]code colonne | ...)",
                        "Aller sur la donnée de base et récupérer le solde de l'objet (ECHAP + F6 : la valeur avant le [])",
                        "Aller dans dictionnaire de script/objet de base, chercher le code objet dans la liste, chercher le champ impression et récupérer le code",
                        "Aller dans 'paramétrage/destination/code d'impression' et remplir le tableau (code du champ 'impression' | états | nom du fichier | non | | )",
                        "Retourner sur la donnée de base puis cliquer sur l'icône imprimante, choisir fichier, sélectionner le nouvel état précédemment créé puis valider (le fichier devrait se télécharger)"
                    ],
                    "SousEtape": []
                }
            },
            "NB": [],
            "Infos": []
        },
        Sujet6: {
            "Titre": "Actualiser",
            "PT": "",
            "Etapes": {
                "Etape1": {
                    "Titre": "Actualiser le rapport",
                    "Path": "rapport",
                    "body": [
                        "Cliquer sur rapport/actualiser"
                    ],
                    "SousEtape": []
                }
            },
            "NB": [],
            "Infos": []
        },
        Sujet7: {
            "Titre": "Les liens entre plusieurs tables",
            "PT": "",
            "Etapes": {
                "Etape1": {
                    "Titre": "Trouver les colonnes à joindre",
                    "Path": "",
                    "body": [
                        "Cas 1 :",
                        "Aller sur 'https://online-help.sagex3.com/erp/12/fr-fr/Content/MCD/ATB_0.htm'",
                        "Taper le nom du tableau et tu sauras les index concernés",
                        "Cas 2 :",
                        "Aller sur SQL Server et taper le nom des tableaux pour trouver les colonnes aux valeurs communes"
                    ],
                    "SousEtape": []
                }
            },
            "NB": [],
            "Infos": []
        }

    },

    "Specificite LS": {
        "Sujet1": {
            Titre: "Les phases d'un projet",
            PT: "(C IP Ho T FGA)",
            Etapes: [
                "Cadrage: comprendre le besoin du Client ET REMPLIR LES ANCIENNES DONNEES DU CLIENT",
                "Instalation et paramétrage : installation puis paramétrage de SageX3 chez le client",
                "Homologation: Validation du paramétrage par le client",
                "Test: Simulation de l'application avec les données du client",
                "Formation: Apprentissage de la solution au client ou à ses employés",
                "GO LIFE: début d'utilisation de la solution par le client ou ses employés",
                "Assistance: accompagner le client durant une certaine période de temps"
            ],
            NB: [
                "Toujours faire un livrable entre chaque phase et doit être signé par le Client avant de passer à la phase suivante."
            ],
            Infos: []
        },
        "Sujet2": {
            Titre: "Les types de fournisseurs ou de clients à Djago-i",
            PT: "",
            Etapes: [
                "Fournisseurs ou clients Locaux:",
                "- ont une TVA",
                "- les pays sont les mêmes",
                "- la devise est la même",
                "Fournisseurs ou clients Étrangers:",
                "- n'ont pas de TVA",
                "- le pays est différent",
                "- la devise peut différer"
            ],
            NB: [],
            Infos: []
        },
        "Sujet3": {
            Titre: "Les Articles",
            PT: "",
            Etapes: [],
            NB: [
                "Pour les modules 'production' il faut utiliser comme catégorie d’article, 'matière première' et 'semi-fini'."
            ],
            Infos: []
        },
        "Sujet4": {
            Titre: "Créer une connexion",
            PT: "",
            Etapes: [
                "Aller dans 'Fichier > Nouveau > Créer une connexion'",
                "Choisir ODBC puis sélectionner la source de données (le mot de passe et le nom doivent être ceux de SQLSERVER)",
                "Choisir ensuite le schéma (la base de données concernée)"
            ],
            NB: [],
            Infos: []
        },
        "Sujet5": {
            Titre: "Créer un rapport (état)",
            PT: "",
            Etapes: [
                "Aller dans le module concerné et taper 'ECHAP + F6' sur un champ pour récupérer le code de l’objet (la valeur entre crochets)",
                "Aller dans 'X3 > Développement > Dictionnaire des scripts > Écrans'",
                "Filtrer les écrans avec l’abréviation récupérée",
                "Identifier les tables liées via 'table de référence'",
                "Dans Crystal Report, sélectionner les tables nécessaires puis faire les jointures :",
                "- les colonnes doivent avoir le même nom",
                "- les colonnes doivent être des index",
                "Cliquer sur 'Suivant', sélectionner les colonnes à afficher et terminer"
            ],
            NB: [],
            Infos: []
        },
        "Sujet6": {
            Titre: "Designer l’affichage sur Crystal Report",
            PT: "",
            Etapes: [
                "Dans l’explorateur de champs, retrouver les colonnes sélectionnées",
                "Utiliser la section 'Détail' pour afficher les données (fonctionne comme un foreach)",
                "Pour ajouter un texte, aller dans 'Insérer > Champ texte'",
                "Afficher l’aperçu pour vérifier les données"
            ],
            NB: [],
            Infos: []
        },
        "Sujet7": {
            Titre: "Créer une fonction dans Crystal Report",
            PT: "",
            Etapes: [
                "Dans l’explorateur de champs, clic droit sur 'Champ de formule' > Nouveau",
                "Donner un nom à la formule",
                "Utiliser la syntaxe {table.colonne} pour créer des calculs (ex: {facture.prix} + {facture.tva})",
                "Enregistrer et valider",
                "La fonction est maintenant utilisable dans l’affichage"
            ],
            NB: [],
            Infos: []
        },
        "Sujet8": {
            Titre: "Faire un filtre d’affichage dans Crystal Report",
            PT: "",
            Etapes: [
                "Cliquer sur l’icône filtre (entonnoir orange)",
                "Choisir le champ à filtrer",
                "Cliquer sur 'Éditeur de formule' et écrire une condition (ex: {facture.prix} > 1000)",
                "Enregistrer, valider et sauvegarder le rapport",
                "Le filtre sera appliqué à l’affichage"
            ],
            NB: [],
            Infos: []
        },
        "Sujet9": {
            Titre: "Importer un fichier Crystal Report dans Sage",
            PT: "",
            Etapes: [
                "Copier le fichier .rpt dans 'C:\\Sage\\SAGEX3\\dossiers\\X3\\REPORT\\FRA'",
                "Créer un champ de paramètre dans Crystal Report (ex: numCde)",
                "Créer un filtre sur ce champ (ex: {PORDER.POHNUM_0} = {?numCde})",
                "Aller dans 'X3 > Dictionnaire des états', dupliquer un modèle et lui donner le nom du .rpt",
                "Si nécessaire, remplir les paramètres requis dans l’état",
                "Aller dans 'Dictionnaire de script > Objet de base', trouver le champ d’impression",
                "Aller dans 'Paramétrage > Destination > Code d’impression', lier le champ d’impression à l’état",
                "Retourner sur la donnée de base et cliquer sur l’icône imprimante, choisir l’état"
            ],
            NB: [],
            Infos: []
        },
        "Sujet10": {
            Titre: "Actualiser un rapport",
            PT: "",
            Etapes: [
                "Cliquer sur 'Rapport > Actualiser'"
            ],
            NB: [],
            Infos: []
        },
        "Sujet11": {
            Titre: "Les liens entre plusieurs tables",
            PT: "",
            Etapes: [
                "Cas 1 : Utiliser le site 'https://online-help.sagex3.com/erp/12/fr-fr/Content/MCD/ATB_0.htm' pour rechercher les colonnes d’index des tables",
                "Cas 2 : Rechercher les colonnes communes directement dans SQL Server pour créer les jointures"
            ],
            NB: [],
            Infos: []
        }
    },

    "Droit du travail": {}

}