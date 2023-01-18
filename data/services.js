module.exports = [
  {
    id: 1,
    imgIcon: "img/svg/noun-planning.svg",
    title: "Planning",
    subtitle:
      "Agenda des consulta- tions d’un médecin, planning de l’activité d’un cabinet médical ou de plusieurs cabinets faisant partie d’un réseau",
    popupImg: "img/service/1.jpg",
    popupTitle: `Planning`,
    firstDescriptionText: (
      <>
        <h4>Fonction du module</h4>
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
        <h6>Résumé des fonctionnalités</h6>
        <div className="in_list">
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
                jours du mois etc.){" "}
              </p>
            </li>
          </ul>
        </div>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h4>Fonctionnalités et atouts</h4>
        <h6>Accès au planning depuis tous les postes de travail</h6>
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
        <h6>Personnalisation des plannings</h6>
        <p>
          Les nombreuses possibilités de paramétrage de l’interface utilisateur
          rendent l’utilisation du module confortable et adaptée à différentes
          méthodes de travail ou différentes activités.
        </p>
        <div className="in_list">
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
        </div>
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
        <br />
        <div className="in_list">
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
        </div>
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
        <h5>Saisie rapide des antécédents du patient</h5>
        <p>
          Les examens, les résultats d'analyses et toutes les informations
          médicales sont saisis en créant des enregistrements qui peuvent
          adopter différentes présentations, spécialement étudiées pour tous
          types de spécialistes: généralistes, ophtalmologues, chirurgiens,
          cardiologues, pneumologues, etc. Le module DPE contient des écrans de
          saisie types, développés en collaboration avec des médecins et mis au
          point au cours des nombreuses années d'utilisation du système par des
          établissements de santé. Le système dispose d'outils permettant
          d'accélérer la saisie du texte.
        </p>
        <div className="in_list">
          <ul>
            <li>
              Des glossaires contextuels sont accessibles depuis les champs de
              saisie et proposent les termes et expressions les plus couramment
              utilisés. La structure hiérarchique des glossaires permet de
              former automatiquement des phrases longues. Le module DPE standard
              inclut de nombreux glossaires que l'on peut élargir soi-même.
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
        </div>
        {/* End list */}
        <h5>Saisie d'informations diverses</h5>
        <p>
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
        <h5>
          Souplesse du paramétrage de la base de données et des écrans de saisie
        </h5>
        <p>
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
        <h5>Recherche intuitive et rapide d’information dans le DPE</h5>
        <p>
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
        <h5>Documentation CIM-10</h5>
        <p>
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
        <h5>Documentation VIDAL®</h5>
        <p>
          L’outil d’aide à la prescription des traitements s’appuie sur une
          interaction entre le système MEDIALOG et la base de donnée
          électronique du dictionnaire d’information sur le médicament VIDAL® .
          Le système fournit directement les informations suivantes:
        </p>
        <div className="in_list">
          <ul>
            <li>Description de tous les médicaments.</li>

            <li>
              Compatibilité et effets secondaires des préparations
              médicamenteuses.
            </li>

            <li>
              Posologie, liste des médicaments contenant des substances toxiques
              ou narcotiques, liste des médicaments les plus forts.{" "}
            </li>
          </ul>
        </div>
        <p>
          Une liste des médicaments, habituellement prescrits pour une maladie
          donnée, peut être recommandée par le système.
        </p>

        <h5>Création et impression des documents</h5>
        <p>
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
        <h5>Connexion à un dictaphone professionnel</h5>
        <p>
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
        <h5>Export du DPE au format HTML</h5>
        <p>
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
    popupImg: "img/service/3.jpg",
    popupTitle: `Branding & Design Breakdown In Cinema 4D`,
    firstDescriptionText: (
      <>
        <p>
          Just because we cant get out and about like we normally would, doesn’t
          mean we have to taking pictures. There’s still plenty you can do,
          provided you are prepared to use some imagination. Here are a few
          ideas to keep you shooting until normal life resumes.
        </p>
        <p>
          Most photographers love to shoot the unusual, and you don’t get much
          more unusual than These Unprecedented Times. Right now everything
          counts as out of the ordinary. There are a number of remarkable things
          about these lockdown days that are worth photographing now we can
          remember them when it is all over.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>What Is Branding & Design?</h3>
        <p>
          Nullam blandit constituto eam ne, te nam ignota vituper.atoribus.
          Malis cetero quem saipe, prou thendrerit voluptaria.
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>Email is a crucial channel in any marketing.</p>
            </li>
            <li>
              <p>Curious what to say? How to say it?</p>
            </li>
            <li>
              <p>Whether you’re kicking off a new ca mpaign.</p>
            </li>
          </ul>
        </div>
        {/* End list */}
        <p>
          Streets empty that are usually busy are remarkable and can evoke the
          sense of historical pictures from before the invention of the
          motorcar. Other things that are different at the moment will be queues
          to get into stores and the lines marked out on the floor to show how
          far apart we should be.
        </p>
      </>
    ),
  },
  {
    id: 4,
    imgIcon: "img/svg/noun-accounting1.svg",
    title: "Comptabilité/FSE",
    subtitle:
      "Enregistrement et facturation des actes médicaux, télétrans- mission des FSE, suivi automatique des paiements via les retours Noémie.",
    popupImg: "img/service/4.jpg",
    popupTitle: `Mobile App Design is the trending Part of Graphics`,
    firstDescriptionText: (
      <>
        <p>
          Just because we cant get out and about like we normally would, doesn’t
          mean we have to taking pictures. There’s still plenty you can do,
          provided you are prepared to use some imagination. Here are a few
          ideas to keep you shooting until normal life resumes.
        </p>
        <p>
          Most photographers love to shoot the unusual, and you don’t get much
          more unusual than These Unprecedented Times. Right now everything
          counts as out of the ordinary. There are a number of remarkable things
          about these lockdown days that are worth photographing now we can
          remember them when it is all over.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>What Is Mobile App Design?</h3>
        <p>
          Nullam blandit constituto eam ne, te nam ignota vituper.atoribus.
          Malis cetero quem saipe, prou thendrerit voluptaria.
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>Email is a crucial channel in any marketing.</p>
            </li>
            <li>
              <p>Curious what to say? How to say it?</p>
            </li>
          </ul>
        </div>
        {/* End list */}
        <p>
          Streets empty that are usually busy are remarkable and can evoke the
          sense of historical pictures from before the invention of the
          motorcar. Other things that are different at the moment will be queues
          to get into stores and the lines marked out on the floor to show how
          far apart we should be.
        </p>
      </>
    ),
  },
  {
    id: 5,
    imgIcon: "img/svg/motion.svg",
    title: "Statistiques",
    subtitle:
      "Constitution de requêtes en mode visualisé et création de rapports via la base de données MEDIALOGIS.",
    popupImg: "img/service/4.jpg",
    popupTitle: `Mobile App Design is the trending Part of Graphics`,
    firstDescriptionText: (
      <>
        <p>
          Just because we cant get out and about like we normally would, doesn’t
          mean we have to taking pictures. There’s still plenty you can do,
          provided you are prepared to use some imagination. Here are a few
          ideas to keep you shooting until normal life resumes.
        </p>
        <p>
          Most photographers love to shoot the unusual, and you don’t get much
          more unusual than These Unprecedented Times. Right now everything
          counts as out of the ordinary. There are a number of remarkable things
          about these lockdown days that are worth photographing now we can
          remember them when it is all over.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>What Is Mobile App Design?</h3>
        <p>
          Nullam blandit constituto eam ne, te nam ignota vituper.atoribus.
          Malis cetero quem saipe, prou thendrerit voluptaria.
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>Email is a crucial channel in any marketing.</p>
            </li>
            <li>
              <p>Curious what to say? How to say it?</p>
            </li>
          </ul>
        </div>
        {/* End list */}
        <p>
          Streets empty that are usually busy are remarkable and can evoke the
          sense of historical pictures from before the invention of the
          motorcar. Other things that are different at the moment will be queues
          to get into stores and the lines marked out on the floor to show how
          far apart we should be.
        </p>
      </>
    ),
  },
  {
    id: 6,
    imgIcon: "img/svg/noun-photo.svg",
    title: "Imagerie médicale",
    subtitle:
      "Intégraion dans le dossier patient électronique des images de tout type et traitement adéquat de l’information visuelle.",
    popupImg: "img/service/4.jpg",
    popupTitle: `Mobile App Design is the trending Part of Graphics`,
    firstDescriptionText: (
      <>
        <p>
          Just because we cant get out and about like we normally would, doesn’t
          mean we have to taking pictures. There’s still plenty you can do,
          provided you are prepared to use some imagination. Here are a few
          ideas to keep you shooting until normal life resumes.
        </p>
        <p>
          Most photographers love to shoot the unusual, and you don’t get much
          more unusual than These Unprecedented Times. Right now everything
          counts as out of the ordinary. There are a number of remarkable things
          about these lockdown days that are worth photographing now we can
          remember them when it is all over.
        </p>
      </>
    ),
    serviceListDescriptions: (
      <>
        <h3>What Is Mobile App Design?</h3>
        <p>
          Nullam blandit constituto eam ne, te nam ignota vituper.atoribus.
          Malis cetero quem saipe, prou thendrerit voluptaria.
        </p>
        <div className="in_list">
          <ul>
            <li>
              <p>Email is a crucial channel in any marketing.</p>
            </li>
            <li>
              <p>Curious what to say? How to say it?</p>
            </li>
          </ul>
        </div>
        {/* End list */}
        <p>
          Streets empty that are usually busy are remarkable and can evoke the
          sense of historical pictures from before the invention of the
          motorcar. Other things that are different at the moment will be queues
          to get into stores and the lines marked out on the floor to show how
          far apart we should be.
        </p>
      </>
    ),
  },
];
