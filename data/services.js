module.exports = [
  {
    id: 1,
    imgIcon: "img/svg/noun-planning.svg",
    title: "Planning",
    subtitle:
      "Agenda des consulta- tions d’un médecin, planning de l’activité d’un cabinet médical ou de plusieurs cabinets faisant partie d’un réseau",
    //popupImg: "img/service/1.jpg",
    popupTitle: "Planning",
    firstDescriptionText: (
      <>
        <h3>Fonction du module</h3>
        <p>
          Le module est conçu pour prendre en charge la planification de
          l’agenda et la gestion des rendez-vous des médecins, ainsi que la
          planification de l’utilisation des ressources d’un cabinet médical. Le
          module est installé sur les postes de travail de l’accueil, du médecin
          et de tous les employés qui doivent consulter l’agenda des médecins et
          les dossiers patient électroniques (accès en lecture seule). Le
          travail est facilité par le fait que le module permette, outre la
          consultation du dossier électronique du patient, la création et la
          saisie de la fiche administrative patient.
        </p>
        <h5>Résumé des fonctionnalités</h5>
        <p className="in_list">
          <ul>
            <li>
              <p>Agenda, gestion des RDV monoposte et réseau</p>
            </li>
            <li>
              <p>Gestion de la disponibilité des ressources du cabinet</p>
            </li>
            <li>
              <p>Gestion des schémas de consultation complexes</p>
            </li>
            <li>
              <p>
                Création de plannings types, qui déterminent l’utilisation des
                ressources par défaut. Différents rythmes de travail peuvent
                être pris en compte (jours pairs et impairs, premier et dernier
                jours du mois etc.)
              </p>
            </li>
          </ul>
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>Fonctionnalités et atouts</h3>
        <h5>Accès au planning depuis tous les postes de travail</h5>
        <p>
          Le module PLANNING est utilisable aussi bien par le personnel de
          l’accueil que par les spécialistes. Le médecin peut consulter son
          agenda (ou l’agenda d’un autre spécialiste) directement depuis son
          poste de travail et enregistrer l’admission d’un patient en
          consultation sans passer par le secrétariat.
        </p>
        <p>
          Le module est étroitement intégré au dossier patient électronique.
          Certaines fonctionnalités du module planning, par exemple
          l’enregistrement automatique d’un patient pour une consultation sont
          accessibles directement lors de la saisie électronique du dossier
          médical.
        </p>
        <h5>Personnalisation des plannings</h5>
        <p>
          Les nombreuses possibilités de paramétrage de l’interface utilisateur
          rendent l’utilisation du module confortable et adaptée à différentes
          méthodes de travail ou différentes activités.
        </p>
        <p className="in_list">
          <ul>
            <li>
              <p>affichage journalier ou hebdomadaire ;</p>
            </li>
            <li>
              <p>
                Affichage en mode développé (tranches horaires régulières) ou
                condensé (seules les plages horaires occupées sont visibles),
                paramétrage de la durée des tranches horaires affichées ;
              </p>
            </li>
            <li>
              <p>
                utilisation de codes couleurs pour les évènements spécifiques ;
              </p>
            </li>
            <li>
              <p>
                création de configurations adaptées à différents contextes de
                travail ;
              </p>
            </li>
          </ul>
        </p>
      </>
    ),
  },
  {
    id: 2,
    imgIcon: "img/svg/noun-appointment.svg",
    title: "Dossier patient",
    subtitle:
      "Outil de traitement efficace des informations. Le module est facilement paramétrable et adapté à diverses spécialités médicales.",
    //popupImg: "img/service/2.jpg",

    popupTitle: "Dossier patient",
    firstDescriptionText: (
      <>
        <h3>Fonction du module</h3>
        <p>
          Le module DOSSIER PATIENT ELECTRONIQUE (DPE) est conçu pour créer et
          gérer sous forme électronique un dossier sur chaque patient contenant
          toutes les informations administratives et médicales sur ce patient
          (identité, antécédents, traitements en cours etc.).
        </p>
        <br />
        <h5>Résumé des fonctionnalités</h5>
        <p className="in_list">
          <ul>
            <li>Gestion administrative du dossier patient</li>
            <li>Recherche d'un dossier par la carte SESAM-Vitale</li>
            <li>
              Enregistrement des informations médicales de base (antécédents,
              allergies, pathologies)
            </li>
            <li>Consultations type personnalisables</li>
            <li>Historique des consultations</li>
            <li>Module de vaccination</li>
            <li>Rappel des vaccinations et des examens</li>
            <li>Dictionnaire des pathologies (CIM 10)</li>
            <li>Aide au diagnostic, rédaction des certificats médicaux</li>
            <li>Traitement de texte intégré</li>
            <li>Glossaires des formules usuelles pour l'aide à la rédaction</li>
            <li>Gestion des documents multimédia</li>
            <li>Cerfa (?), courriers type</li>
            <li>
              Importation d'images, courriers et fichiers en pièces jointes
            </li>
            <li>
              Export de dossiers (en format XML) lisibles par tout médecin
              équipé du navigateur Internet Explorer et échange de dossiers
              entre praticiens
            </li>
            <li>Formulaires pour les biologies</li>
            <li>
              Réception des fichiers des laboratoires de biologie médicale à la
              norme HPRIM sur le poste de travail du praticien via la ligne
              téléphonique
            </li>
            <li>Enregistrement sonore</li>
          </ul>
        </p>
      </>
    ),
    slideShow: [
      {
        img: "img/service/ui13.jpg",
        title: "Dossier patient éléctronique. Fenêtre de sélection du patient",
      },
      {
        img: "img/service/ui1.jpg",
        title: 'Présentation de l\'écran "Examen clinique du patient"',
      },
      {
        img: "img/service/ui3.jpg",
        title:
          "Mode édition des écrans de saisie: facile et accessible à tout utilisateur",
      },
      {
        img: "img/service/ui4.jpg",
        title: "La structure de la base de données peut être modifiée",
      },
    ],
    serviceListDescriptions: (
      <>
        <h3>Fonctionnalités et atouts</h3>
        <p>
          <h5>Saisie rapide des antécédents du patient</h5>
          Les examens, les résultats d'analyses et toutes les informations
          médicales sont saisis en créant des enregistrements qui peuvent
          adopter différentes présentations, spécialement étudiées pour tous
          types de spécialistes: généralistes, ophtalmologues, chirurgiens,
          cardiologues, pneumologues, etc. Le module DPE contient des écrans de
          saisie types, développés en collaboration avec des médecins et mis au
          point au cours des nombreuses années d'utilisation du système par des
          établissements de santé. Le système dispose d'outils permettant
          d'accélérer la saisie du texte.
          <p className="in_list">
            <ul>
              <li>
                Des glossaires contextuels sont accessibles depuis les champs de
                saisie et proposent les termes et expressions les plus
                couramment utilisés. La structure hiérarchique des glossaires
                permet de former automatiquement des phrases longues. Le module
                DPE standard inclut de nombreux glossaires que l'on peut élargir
                soi-même.
              </li>
              <li>
                Le mode saisie semi-automatique vient compléter les mots
                automatiquement au cours de la saisie en utilisant les mots
                figurant dans le glossaire.
              </li>
              <li>
                Le mode recherche permet de trouver rapidement dans le glossaire
                les termes recherchés.
              </li>
              <li>
                Une macro permet de copier les données des précédents
                enregistrements figurant dans les antécédents et également de
                faciliter la saisie des informations type (compte-rendus
                d'opération, consultations médicales etc.)
              </li>
            </ul>
          </p>
        </p>
        <p>
          <h5>Saisie d'informations diverses</h5>
          Le module DPE de MEDIALOG offre au médecin un large éventail d'outils
          d'aide à la saisie des données, adapté à tous les types
          d'informations.
          <br />
          Le programme prévoit d'affecter un type aux champs de saisie, c'est à
          dire de définir des champs textuels, numériques ou logiques, de listes
          ou de dates, qui serviront à leur tour lors de la collecte de données
          statistiques et du tracé de graphes ou de courbes. Un éditeur
          graphique permet d'ajouter des annotations ou des dessins, par exemple
          de représenter la cornée. Le DPE accepte les images sous tous les
          formats les plus couramment utilisés.
          <br />
          L'’écran contient un protocole d'angiographie : Sur le schéma du cœur
          un médecin pointe la zone où une lésion a été décelée et il en donne
          une description dans la fenêtre d’annotation.
          <br />
          Les outils de saisie des données sont variés. Ils peuvent être
          universels, étroitement spécialisés, fonctionner selon une logique
          élémentaire ou au contraire très élaborée. L'architecture ouverte du
          programme permet constamment d'élargir et de perfectionner l'ensemble
          de ces outils de saisie.
        </p>
        <p>
          <h5>
            Souplesse du paramétrage de la base de données et des écrans de
            saisie
          </h5>
          La saisie des données s'effectue non seulement rapidement mais
          également en totale adéquation avec les exigences professionnelles des
          spécialistes.
          <br />
          La gamme des écrans standards présents dans les modules de MEDIALOG,
          peut être facilement modifiée et développée en utilisant l'éditeur
          d'écran du programme. Cet outil fonctionnel permet à l'utilisateur de
          créer de nouveaux écrans et champs de saisie, de modifier l'aspect de
          l’interface et les positions respectives des principaux outils (de
          l’interface). De cette manière, il est possible à tout moment
          d'introduire dans le système de nouveaux types d’examen ou d’optimiser
          le dossier patient électronique, sans faire appel au concepteur du
          programme.
          <br />
          Le basculement du mode saisie des données vers le mode édition des
          écrans de saisie, et inversement, se fait en un instant, mais peut
          être verrouillé afin de protéger le programme contre une utilisation
          par un opérateur non qualifié.
          <br />
          Il est possible de visualiser en mode édition tous les écrans de
          saisie:
          <br />
          Il est également possible de modifier la structure de la base de
          données. Il est possible d’ajouter aux tableaux de nouveaux champs de
          différents types.
        </p>
        <p>
          <h5>Recherche intuitive et rapide d’information dans le DPE</h5>
          Le module DPE de MEDIALOG a été spécialement conçu pour que non
          seulement la saisie, mais également la consultation et l'analyse
          ultérieures des données, soient fonctionnelles, intuitives et
          informatives et que toute information stockée dans la base MEDIALOG
          soit facilement accessible à l’utilisateur.
          <br />
          Le volet « résumé » est un outil important de consultation du DPE, il
          donne les principaux indicateurs de l’état de santé du patient,
          l’évolution de la maladie, le traitement prescrit en cours et permet
          de visualiser rapidement n’importe quel écran du dossier.
          <br />
          Le médecin visualise sur un seul écran les informations relatives au
          patient (fiche administrative, antécédents médicaux, etc.)
          <br />
          Le volet « liste des prescriptions » indique quels médicaments ont été
          prescrits au patient, à quel moment et pour quelle durée, et quels
          médicaments ont été supprimés avant la fin du traitement.
          <br />
          Une autre spécificité intéressante du programme est la possibilité
          d’analyser à l’aide de graphiques ou de courbes l'évolution dans le
          temps de tous les paramètres chiffrés.
          <br />
          Le médecin observe les résultats des analyses de sang biochimiques et
          les variations du taux de cholestérol ou de sucre dans le sang etc.
        </p>
        <p>
          <h5>Documentation CIM-10</h5>
          Le module DPE contient la « 10ème édition de la Classification
          Internationale des Maladies » qui peut être utilisée pour la rédaction
          d’un diagnostic sous une présentation standardisée.
          <br />
          La possibilité de rédiger son propre diagnostic et de le relier au
          diagnostic «officiel » de la CIM est prévue, ainsi que de nombreuses
          autres fonctionnalités utiles.
          <br />
          Par exemple un médecin peut trouver dans la CIM des diagnostics en
          effectuant une recherche par mots clés, MEDIALOG en réalise une
          traduction anglaise à l’aide de la version anglaise de la CIM et
          remplit une requête dans la base médicale Internet MEDLINE qui
          recherche des articles sur la même thématique.
        </p>
        <p>
          <h5>Documentation VIDAL®</h5>
          L’outil d’aide à la prescription des traitements s’appuie sur une
          interaction entre le système MEDIALOG et la base de donnée
          électronique du dictionnaire d’information sur le médicament VIDAL® .
          Le système fournit directement les informations suivantes:
          <p className="in_list">
            <ul>
              <li>Description de tous les médicaments.</li>

              <li>
                Compatibilité et effets secondaires des préparations
                médicamenteuses.
              </li>

              <li>
                Posologie, liste des médicaments contenant des substances
                toxiques ou narcotiques, liste des médicaments les plus forts.
              </li>
            </ul>
          </p>
          <p>
            Une liste des médicaments, habituellement prescrits pour une maladie
            donnée, peut être recommandée par le système.
          </p>
        </p>

        <p>
          <h5>Création et impression des documents</h5>
          La création de différents types de documents (rapports, lettres,
          extraits, conclusions) fait partie du travail quotidien d’un médecin.
          Le module DPE de MEDIALOG met à sa disposition des outils facilitant
          considérablement cette tâche et garantissant un archivage électronique
          fiable de tous les documents.
          <br />
          Le dossier de chaque patient contient un ensemble de documents triés
          par catégories et dotés d’attributs spécifiques. La simplicité de la
          classification permet aux médecins de trouver rapidement les documents
          recherchés dans les archives.
          <br />
          L’éditeur de texte intégré ou le logiciel Microsoft Word® peuvent être
          utilisés indifféremment comme outils de création et de traitement de
          texte.
          <br />
          Les données peuvent être copiées depuis le dossier patient et collées
          vers le document.
          <br />
          Les lettres, comme les autres documents standards, peuvent être créées
          automatiquement sur la base de modèles pré-définis. Les modèles
          peuvent être modifiés par l’ajout de champs venant du dossier patient
          électronique, qui seront remplis automatiquement à l'aide des données
          présentes dans le dossier, au moment de la création du document. Les
          documents créés à partir d’un modèle sont automatiquement joints au
          dossier et peuvent être modifiés à la main.
          <br />
          La présentation d’un modèle de document est entièrement paramétrable.
          Ci-dessus un modèle d'écran de saisie de consultation pour
          ophtalmologues
        </p>

        <h3>Options du module DPE</h3>
        <p>
          <h5>Connexion à un dictaphone professionnel</h5>
          Cette option permet aux médecins de joindre à leur notes dans le DPE
          des messages vocaux, enregistrés à l'aide d'un dictaphone
          professionnel, par exemple un dictaphone PHILIPS.
          <br />
          Une sauvegarde, sous forme écrite, de ces messages vocaux peut ensuite
          être insérée dans le DPE par des opérateurs qui vont saisir les
          messages en utilisant un équipement spécifique (une pédale pour fait
          défiler le message et un casque d’écoute ou une oreillette).
          <br />
          Cette option pour être fonctionnelle doit être installée sur tous les
          postes de travail des médecins et des opérateurs équipés de
          dictaphones professionnels ou d’un matériel équivalent. Notre société
          peut vous fournir le matériel PHILIPS adéquat.
        </p>
        <p>
          <h5>Export du DPE au format HTML</h5>
          Les DPE créés dans MEDIALOG peuvent être exportés dans un format
          ouvert (HTML) pouvant être lu par n'importe quel ordinateur.
          <br />
          Le système MEDIALOG peut exporter les DPE en plusieurs langues, par
          exemple en russe et en anglais. Le patient dispose ainsi de son
          dossier patient qu'il peut montrer en cas d’urgence lorsqu’il se
          trouve à l’étranger.
          <br />
          Le DPE au format HTML peut être sauvegardé sur tout support externe
          (USB, CD etc.) et également être envoyé à d’autres médecins par
          Internet.
          <br />
          Pour disposer de cette option, il est indispensable de l’installer sur
          tous les postes de travail où des exports de DPE devront être réalisés
          (habituellement les postes de l'accueil).
        </p>
      </>
    ),
  },
  {
    id: 3,
    imgIcon: "img/svg/noun-medicine-list.svg",
    title: "Prescriptions",
    subtitle:
      "Prescription des médica- ments et création rapide et simplifiée des ordonnances au sein du dossier patient électronique.",
    //popupImg: "img/service/3.jpg",
    popupTitle: "Prescriptions",
    firstDescriptionText: (
      <>
        <h3>Fonction du module</h3>
        <p>
          Le module sert à faciliter la prescription des médicaments et la
          création des ordonnances et à les enregistrer dans le dossier patient
          électronique.
        </p>
        <p>
          <h5>Résumé des fonctionnalités</h5>
          <ul className="in_list">
            <li>Rédaction et édition d'ordonnance ALD, non-ALD (?)</li>
            <li>Modèles d'ordonnances utiles</li>
            <li>
              Aide à la prescription : intégration avec la base de données de
              médicaments VIDAL
            </li>
          </ul>
        </p>
        <p>
          <h5>Documentation VIDAL®</h5>
          L’outil d’aide à la prescription des traitements s’appuie sur une
          interaction entre le système MEDIALOG et la base de donnée
          électronique du dictionnaire d’information sur le médicament VIDAL® .
          Le système fournit directement les informations suivantes :
          <br />
          Description de tous les médicaments. <br />
          Compatibilité et effets secondaires des préparations médicamenteuses.
          <br />
          Posologie, liste des médicaments contenant des substances toxiques ou
          narcotiques, liste des médicaments les plus forts.
          <br />
          Liste des médicaments recommandés par la CIM-10 selon le diagnostic
          porté sur le patient.
        </p>
        <p>
          Une liste des médicaments, habituellement prescrits pour une maladie
          donnée, peut être recommandée par le système.
          <br />
          Le volet « liste des prescriptions » du dossier patient électronique
          indique quels médicaments ont été prescrits au patient, à quel moment
          et pour quelle durée, et quels médicaments ont été supprimés avant la
          fin du traitement.
          <br />
          Les ordonnances peuvent être rédigées à partir de modèles dans
          lesquels l'utilisateur entre uniquement les paramètres voulus : par
          exemple les doses et la fréquence de prise du médicament.
        </p>
      </>
    ),
    serviceListDescriptions: null,
  },
  {
    id: 4,
    imgIcon: "img/svg/noun-accounting1.svg",
    title: "Comptabilité/FSE",
    subtitle:
      "Enregistrement et facturation des actes médicaux, télétrans- mission des FSE, suivi automatique des paiements via les retours Noémie.",
    //popupImg: "img/service/4.jpg",
    popupTitle: `Comptabilité/FSE`,
    firstDescriptionText: (
      <>
        <h3>Fonction du module</h3>
        <p>
          Le module sert à la facturation des actes ainsi qu'à la tenue des
          comptes avec les tiers (assurances, mutuelles et personnes physiques)
          et à la télétransmission des FSE.
          <br />
          L’utilisation de ce module renforce efficacement le contrôle de
          l’activité économique et optimise sa planification dans les
          établissements de santé.
        </p>
        <p>
          Most photographers love to shoot the unusual, and you don’t get much
          more unusual than These Unprecedented Times. Right now everything
          counts as out of the ordinary. There are a number of remarkable things
          about these lockdown days that are worth photographing now we can
          remember them when it is all over.
        </p>
        <p>
          <h5>Résumé des fonctionnalités</h5>
          <ul className="in_list">
            <li>
              <h6>
                Comptabilité complète (recettes, dépenses, différés, tiers
                payant, édition de la 2035, rapprochement bancaire, grand livre,
                balances)
              </h6>
              <ul>
                <li>Paiement par carte bancaire</li>
                <li>Traçabilité et opposabilité des actes</li>
                <li>
                  Création de la déclaration fiscale 2035 et 2036 ( ? A
                  préciser)
                </li>
                <li>
                  Vérification les encaissements pour la période souhaitée
                </li>
              </ul>
            </li>
            <li>
              <h6>Télétransmission:</h6>
              <ul>
                <li>Facturation de l'acte</li>
                <li>
                  Création de la feuille de Soins Electronique (Agrément du 1.40
                  SESAM-Vitale)
                </li>
                <li>
                  FSE 1.40, CCAM V13 (это новая Classification Commune des Actes
                  Médicaux, нужно выяснить, поддерживает ли ее фр Медиалог –
                  похоже, это нужно тк у нескольких конкурентов декларировано:
                  Аксилог, Сежедим)
                </li>
                <li>Télétransmission des FSE</li>
                <li>Gestion des accusés de réception logique (ARL)</li>
                <li>
                  Prise en compte de la Couverture Médicale Universelle (CMU)
                </li>
                <li>Gestion des retours Noémie (?! À préciser)</li>
                <li>Intégration avec le logiciel de gestion de cabinet</li>
              </ul>
            </li>
          </ul>
        </p>
        <p>
          <h5>Gestion des grilles de tarifs des actes</h5>
          <p>
            Le programme prévoit la création et la gestion de diverses grilles
            de tarifs : celles de l'établissement mais aussi celles d'autres
            prestataires (par exemple celles des laboratoires vers lesquels les
            patients sont orientés).
          </p>
          Vue générale "Grille de tarifs des actes".L’historique des tarifs est
          conservé, les actes peuvent former des lots et comprendre une liste de
          consommables.
          <br />
          Chaque acte peut être rattaché à différentes catégories de tarifs,
          applicables à des groupes différents de patients. Un historique des
          tarifs est créé séparément pour chaque catégorie de tarif. Lorsqu’un
          acte est dispensé, le tarif applicable à la date de réalisation de
          l'acte est automatiquement sélectionné.
          <br />
          Les actes peuvent être regroupés pour faciliter leur classement dans
          l'interface utilisateur et dans les états statistiques.
          <br />
          Les actes sont également rassemblés en lots de prestations, qui
          constituent les éléments de base des garanties médicales, par exemple
          "soins ambulatoires" ou "soins de stomatologie".
          <br />
          Il est possible de poser des limites en fonction du nombre d'actes, de
          l’âge ou du sexe du patient pour contrôler la réalisation d'un acte
          (contrôle d'admissibilité). Tous les actes peuvent être classés comme
          "archivés" s’ils ne sont plus pratiqués, temporairement ou
          définitivement.
          <br />
          ???Une liste de consommables peut être rattachée à chaque acte et les
          articles consommés sont alors sortis du stock à chaque fois qu’un acte
          est dispensé. Ces informations sont ensuite utilisées pour comparer
          les consommations réelles par service avec le volume d'actes réalisé.
          Cette évaluation des dépenses de consommables par acte permet
          d'estimer le coût de revient d’un traitement (par exemple le coût d'un
          cas médical)
        </p>
        <p>
          <h5></h5>
          Le contrat est le document qui décrit les conditions de règlement des
          actes pour les patients qui y sont rattachés. <br />
          ??????????????????????????????????????????????????????????????????????
        </p>
        <p>
          <h5>Enregistrement des actes dispensés</h5>
          <p>
            Les soins dispensés au patient et les médicaments administrés sont
            enregistrés sur une fiche d'activité. L’ajout d’actes sur la fiche
            d'activité entraîne d’une part la vérification de la possibilité de
            dispenser ces actes au patient en fonction de son contrat, et
            d'autre part la détermination du tarif des actes et de la
            répartition de leur prise en charge. Il est possible de savoir quel
            est le contrat et quelles sont les garanties médicales de chaque
            patient. Cette information est accessible au moment de la rédaction
            de la fiche d'activité et permet de répartir la somme à payer entre
            les tiers payants et le patient. Le prix des actes est renseigné
            soit à partir des informations figurant dans les garanties
            médicales, soit à partir des grilles de tarifs, le choix dépendant
            du type de tarif paramétré par défaut.
          </p>
          <p>
            La fiche d'activité avec la liste des actes dispensés et des
            médicaments délivrés. Le médecin ou l'opérateur qui crée la fiche
            d'activité, saisit obligatoirement la ventilation du règlement entre
            le patient et les tiers payants.
            <br />
            Le tarif des actes est modifiable au moment de la rédaction de la
            fiche d'activité, il est également possible de saisir des réductions
            de tarif ou des suppléments individuellement pour chaque acte. La
            somme totale à régler est calculée automatiquement dans la devise de
            la grille de tarif. Les actes pratiqués peuvent être enregistrés
            soit par le personnel de l'accueil, soit par les médecins
            directement dans l'interface du dossier patient électronique, soit
            par le personnel du service comptable (notamment lorsque les postes
            de travail des médecins ne sont pas équipés du programme).
          </p>
          <p>
            Enregistrement des actes dispensés dans le dossier patient
            électronique.
          </p>
        </p>

        <p>
          <h5>Edition de la facture et règlement</h5>
          <p>
            La facture est éditée automatiquement par le programme. Une facture
            séparée est créée pour les actes qui doivent être réglés par le
            patient. Lors de l’édition de la facture du patient, il est possible
            de visualiser une liste complète des actes non réglés et les actes
            peuvent être regroupés par consultation sur cette liste. A la
            demande du patient, il est possible d'éditer une ou plusieurs
            factures, et également de modifier les débiteurs prenant en charge
            le règlement, si ces modifications restent compatibles avec les
            dispositions contractuelles.
          </p>

          <p>
            Lors de l'édition de la facture, l'opérateur peut inclure
            automatiquement tous les actes déjà dispensés et non encore facturés
            ou en sélectionner seulement certains manuellement.
            <br />
            Une fois la facture éditée, elle peut être soit validée soit
            supprimée. En cas de validation, un numéro unique est attribué à la
            facture et les actes qui y figurent ne peuvent plus être ni modifiés
            ni supprimés. Une fois le règlement enregistré, une facture validée
            ne peut plus être éditée. Les soins à facturer à des tiers payants
            font l'objet d'une facturation globale pour tous les patients pour
            une période donnée ou sont facturés selon une répartition prévue
            dans les contrats. Dans l'interface de règlement, l'enregistrement
            des paiements du patient et des tiers payants se fait dans des
            comptes individuels. Différents moyens de paiement sont disponibles
            : espèces, carte de crédit, virement etc. Des comptes individuels
            dans différentes devises sont tenus pour les patients et les tiers
            payants; des écritures de virement d'un compte vers un autre sont
            possibles avec une conversion automatique d'une devise en une autre.
            Le programme permet d'éditer une balance client.
          </p>
        </p>

        <p>
          <h5>Rapports financiers</h5>
          <p>
            Les données du module Facturation et règlements peuvent être
            récupérées et analysées dans le module de statistique. Les données
            de toutes les listes peuvent servir aux requêtes et les liens
            nécessaires entre les listes sont créés automatiquement. La majorité
            des rapports demandés peut être générée en seulement quelques
            minutes.
          </p>

          <p>
            Dans ce rapport, le chiffre d'affaires de chaque médecin est
            calculé, puis un total par service et ces chiffres sont regroupés
            par codes analytiques des contrats.
          </p>
        </p>

        <p>
          <h5>FSE</h5>
          <p>
            La Feuille de Soins Électronique (ou FSE) remplace la traditionnelle
            feuille de soins papier. Comment le Professionnel de Santé créé-t-il
            une Feuille de Soins Electronique ?
            <ol>
              <li>
                Le Professionnel de Santé introduit, en début de journée, sa
                carte CPS dans le lecteur et saisi son code personnel. La carte
                CPS est utilisée pour contrôler l'accès aux informations privées
                de l'assuré (prise en charge, etc), à un réseau ou à des bases
                de données médicales.
              </li>
              <li>
                Après une consultation ou un acte médical, le Professionnel de
                santé lit la carte Vitale du patient au moyen de son lecteur. Il
                peut ainsi vérifier les droits à l'assurance maladie de son
                patient.
              </li>
              <li>
                Il créé rapidement une Feuille de Soins Électronique au moyen de
                MEDIALOGIS et des informations de la carte Vitale.
                [соответствующие скриншоты из Медиалога]
              </li>
              <li>
                MEDIALOGIS s'occupe de chiffrer les données privées du patient
                et de signer électroniquement la FSE. Cette signature garantit
                l'intégrité des données entre le moment de la signature et le
                traitement de la FSE par le régime d'Assurance Maladie. En fin
                de journée, MEDIALOGIS s'occupe de rassembler les Feuilles de
                Soins Électroniques en lots, de les mettre en forme et de les
                télétransmettre vers l'Assurance Maladie. Pour plus de détails
                sur la télétransmission des FSE et sur SESAM-VITALE, nous vous
                invitons à consulter la rubrique Généralités sur Sésam-Vitale de
                notre site [переход]
              </li>
            </ol>
          </p>

          <p>
            Dans ce rapport, le chiffre d'affaires de chaque médecin est
            calculé, puis un total par service et ces chiffres sont regroupés
            par codes analytiques des contrats.
          </p>
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>Options du module COMPTABILITE/FSE</h3>
        <p>
          <h5>Option "Caisse"</h5>
          L'option permet de relier un terminal de caisse aux postes de travail.
          Toutes les opérations enregistrées par le terminal sont alors
          utilisées pour entrer automatiquement les mouvements financiers dans
          les comptes de tiers individuels. Le poste de travail de la caisse
          présente des fonctionnalités standards, la clôture de la session est
          sélectionnée dans un menu et cette opération génère un rapport de
          caisse journalier.
        </p>
        <p>
          Toutes les factures non réglées apparaissent en "paiement à recevoir".
          Lorsque le terminal de caisse est en service, le règlement de la
          facture s'accompagne de l'impression d'un reçu.
        </p>
        <h5>Option "Intégration avec l'informatique de la comptabilité"</h5>
        <p>
          L'option permet d'exporter les écritures ou les pièces comptables vers
          le système informatique du service comptable, au format souhaité. Le
          paramétrage approfondi du chargement des données et du format du
          fichier d'export est l'avantage majeur de ce module. Cette souplesse
          du paramétrage permet de prendre en compte toutes les exigences du
          service comptable.
        </p>{" "}
      </>
    ),
  },
  {
    id: 5,
    imgIcon: "img/svg/motion.svg",
    title: "Statistiques",
    subtitle:
      "Constitution de requêtes en mode visualisé et création de rapports via la base de données MEDIALOGIS.",
    //popupImg: "img/service/4.jpg",
    popupTitle: "Statistiques",
    firstDescriptionText: (
      <>
        <p>
          Le module « Statistiques » représente un outil de constitution
          visualisée de requêtes et de création de rapports via la base de
          données « MEDIALOGIS ». Le module permet de créer et de traiter les
          rapports de tout niveau de complexité (rapports de gestion,
          financiers, de statistique médicale, de comptabilité des stocks)
          moyennant un éditeur visuel intégré.
        </p>
        <p>
          <h5>Résumé des fonctionnalités</h5>
          <p className="in_list">
            <ul>
              <li>
                Moteur d’analyse et de synthèse qui permet d’extraire les
                informations nécessaires de la base de données
              </li>
              <li>
                Surveillance généralisée de la patientèle en fonction de
                différents critères
              </li>
            </ul>
          </p>
        </p>
      </>
    ),
    serviceListDescriptions: null,
  },
  {
    id: 6,
    imgIcon: "img/svg/noun-photo.svg",
    title: "Imagerie médicale",
    subtitle:
      "Intégraion dans le dossier patient électronique des images de tout type et traitement adéquat de l’information visuelle.",
    //popupImg: "img/service/4.jpg",
    popupTitle: "Fonction du module",
    firstDescriptionText: (
      <>
        <p>
          Le module d’imagerie médicale permet d’intégrer dans le dossier
          patient électronique des images de tout type et offre plusieurs
          possibilités de traitement de l’information visuelle. Un archivage
          structuré des images peut être réalisé.
        </p>
        <p>
          <h5>Résumé des fonctionnalités</h5>
          <p className="in_list">
            <ul>
              <li>
                Connexion directe à l'appareillage médical via le protocole
                DICOM
              </li>
              <li>Editeur d'images </li>
              <li>PACS intégré au logiciel</li>
            </ul>
          </p>
        </p>
      </>
    ),
    serviceListDescriptions: null,
  },
];
