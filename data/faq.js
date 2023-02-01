module.exports = [
  {
    id: 1,
    title: "Medialogis. Combien ça coute ?",
    groups: [
      {
        id: 1,
        gr_name: "Politique des prix",
        gr_questions: [
          {
            id: 1,
            question: "MQuel est le prix de MEDIALOGIS ?",
            answer:
              "Tout établissement de santé ayant sa spécificité, une analyse préalable est recommandée. Nous vous invitons à contacter notre équipe qui vous aidera à définir les modalités de votre commande et en estimer le prix. Vous pouvez également consulter notre grille tarifaire sur tarifs.",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Medialogis. Comment l’installer ? Comment le paramétrer ?",
    groups: [
      {
        id: 1,
        gr_name: "Installation et paramétrage du logiciel",
        gr_questions: [
          {
            id: 1,
            question:
              "Je viens d’installer Médialogis et je ne retrouve pas les patients du cabinet",
            answer: (
              <div className="answer">
                <div>
                  Médialogis a été démarré sur une autre base de données que
                  celle du cabinet. Il suffit de redéfinir correctement le
                  chemin vers la base de données à utiliser :
                </div>
                <div className="in_list">
                  <ul>
                    <li>
                      Démarrer Médialogis et attendre l’affichage de la fenêtre
                      de démarrage;
                    </li>
                    <li>Cliquer sur le bouton « Sélectionner » ;</li>
                    <li>Cliquer sur le bouton « Parcourir » ;</li>
                    <li>
                      Utiliser les diverses parties de la fenêtre pour retrouver
                      la base de données à utiliser (il est possible d’accéder à
                      un serveur sur le réseau en passant par le voisinage
                      réseau) et double cliquer sur le fichier « Automedi.ver »
                      recherché ;
                    </li>
                    <li>
                      Valider la fenêtre de sélection d’une base de données et
                      le message de confirmation ;
                    </li>
                    <li>
                      Cliquer sur « Démarrer » pour lancer Médialogis sur la
                      base de données sélectionnée.
                    </li>
                  </ul>
                </div>
                <div>
                  Si la fenêtre de démarrage ne s’affiche pas au lancement de
                  Médialogis, vous pouvez l’obtenir en maintenant la touche «
                  Shift » (la flèche des majuscules à gauche du clavier,
                  au-dessus de la touche Ctrl) enfoncée juste après avoir double
                  cliqué sur l’icône de Médialogis.
                </div>
              </div>
            ),
          },
          {
            id: 2,
            question:
              "Je ne vois plus le glossaire et je ne parviens pas à l’afficher",
            answer:
              "La solution la plus simple et rapide est de supprimer le fichier « Automedi.ini » de votre disque dur. Il se trouve dans le répertoire d’installation de Médialogis. Au premier lancement de Médialogis, vous obtiendrez le glossaire et les autres parties de l’écran résumé du dossier patient à la taille définie par défaut. Vous pouvez modifier ces tailles à l’aide de la souris.",
          },
          {
            id: 3,
            question: "Comment puis-je modifier mon mot de passe ?",
            answer:
              "Ouvrez Médialogis, sélectionnez votre nom d’utilisateur et validez la fenêtre de sélection d’un dossier patient. Appuyez sur la touche de raccourci clavier « F5 » pour accéder à la fiche médecin et cliquez sur le bouton « Code d’accès ». Saisissez le code dans chacune des deux zones de saisies et validez la fenêtre.",
          },
          {
            id: 4,
            question: "Comment puis-je supprimer mon mot de passe ?",
            answer:
              "Ouvrez Médialogis, sélectionnez votre nom d’utilisateur et validez la fenêtre de sélection d’un dossier patient. Appuyez sur la touche de raccourci clavier « F5 » pour accéder à la fiche médecin et cliquez sur le bouton « Code d’accès ». Validez directement la fenêtre sans saisir de mot de passe. Validez ensuite le message de confirmation.",
          },
          {
            id: 5,
            question:
              "La mise à jour de ma version modifie t’elle mes données ?",
            answer:
              "Nous mettons régulièrement des mises à jour à votre disposition par le biais de notre programme spécifique nommé LiveUpdate. Ces mises à jour permettent de faire évoluer votre version afin de vous fournir les dernières fonctionnalités et améliorer encore votre confort d’utilisation. Ces mises à jour ne concernent que le programme et les données dites « systèmes » du logiciel. Elles ne modifient en aucun cas ni les données de vos dossiers patients, ni votre configuration (écrans, tables de données, planning…). Vous devez donc exécuter régulièrement LiveUpdate et systématiquement mettre à jour votre logiciel à chaque évolution proposée.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Medialogis. Comment l’utiliser ?",
    groups: [
      {
        id: 1,
        gr_name: "Le dossier patient",
        gr_questions: [
          {
            id: 1,
            question: "Puis-je supprimer un dossier patient ?",
            answer:
              "Il est possible de supprimer un dossier tant qu’il ne contient aucune donnée comptable. Il suffit d’afficher la fenêtre de sélection des dossiers patients, de sélectionner le dossier à supprimer, et de cliquer sur le bouton « Supprimer ». La suppression sera refusée si des données comptables ont été saisies, ou si l'utilisateur n'a pas les droits nécessaires (voir la configuration des médecins, utilisateurs du manuel de l'utilisateur).",
          },
          {
            id: 2,
            question: "Puis-je changer la date de la consultation ?",
            answer: (
              <div>
                Non, vous pouvez seulement supprimer la consultation et en créer
                une nouvelle à la bonne date.
                <span>
                  Attention, la suppression d’une date de consultation entraîne
                  la suppression de toutes les données saisies sur cette date.
                </span>
              </div>
            ),
          },
          {
            id: 3,
            question:
              "Je ne parviens pas à quitter un champ date sans saisir une date",
            answer:
              "Vous devez cliquer sur le bandeau marron, en haut du glossaire, où est indiqué le nom du champ en cours. Vous obtenez la petite fenêtre de navigation du glossaire où il suffit de cliquer sur l’allumette pour effacer le contenu du champ. Vous pouvez alors accéder à un autre champ de l’écran.",
          },
          {
            id: 4,
            question:
              "J’ai importé des données des appareils de mesures mais la courbe d’évolution n’en tient pas compte",
            answer:
              "Après importation des données à partir des appareils, ou après saisie manuelle de ces données, vous devez revenir sur le résumé du dossier patient pour rafraîchir l’écran. Normalement, cela devrait suffire. Si ce n’est pas le cas, sélectionnez l’option « Liste des variables » du menu « Configuration » et vérifiez le bon paramétrage des variables que vous souhaitez retrouver sur l’écran.",
          },
          {
            id: 5,
            question: "Comment archiver un dossier patient ?",
            answer: (
              <div className="answer">
                <div>
                  L’archivage d’un dossier patient se fait en le transférant
                  dans le groupe « Archive »:
                </div>
                <div className="in_list">
                  <ul>
                    <li>Ouvrez le dossier patient à archiver ;</li>
                    <li>
                      Accédez à la fiche patient (touche de raccourci « F7 ») ;
                    </li>
                    <li>
                      Ouvrez la liste déroulante « Groupe » et cliquez sur «
                      Archive » ;
                    </li>
                    <li>
                      Cochez la case « Dossier archivé » (vous pouvez aussi
                      compléter la date de clôture si vous le souhaitez).
                    </li>
                  </ul>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: 2,
        gr_name: "Le courrier ",
        gr_questions: [
          {
            id: 1,
            question: "Je veux utiliser Word comme traitement de textes",
            answer:
              "Médialogis est conçu pour utiliser indifféremment Word 95, 97, 2000 ou XP de façon optimisée, ainsi que l’ensemble des traitements de textes du marché de façon non optimisée. Il suffit d’indiquer l’emplacement du programme à utiliser. Sélectionner l’option « Paramètres » du menu « Configuration ». En description, saisir le nom de traitement de texte. Utiliser les listes de la fenêtre pour accéder à l'emplacement de l'exécutable du traitement de texte souhaité et double cliquer sur le programme à utiliser (fichier « Winword.exe » pour Word). Cocher la case « Utiliser par défaut » pour utiliser systématiquement ce traitement de textes en remplacement de celui intégré à Médialogis.",
          },
          {
            id: 2,
            question: "Comment imprimer tout ou partie du dossier patient ?",
            answer: (
              <div className="answer">
                <div>
                  La solution la plus simple est de créer un courrier dans le
                  traitement de textes de Médialogis. Cliquez sur le bouton «
                  Lettres patient », décochez la case de votre traitement de
                  texte si besoin, et cliquez sur le bouton « Lettre ». Vous
                  parvenez à notre traitement de textes. Cliquez sur le bouton «
                  Dossier patient » donnant accès à l’intégralité du dossier
                  ouvert. Cliquez sur le bouton « Copier » pour copier toutes
                  les données de la fiche patient et refermez la fenêtre.
                  Cliquez sur le bouton « Coller » pour coller les éléments dans
                  le document actif. Cliquez une seconde fois sur le bouton «
                  Dossier patient », ouvrez la liste déroulante du haut de la
                  fenêtre et sélectionnez « Antécédents ». Cliquez sur « Copier
                  », refermez la fenêtre et collez dans le document actif.
                  Renouvelez l’opération en prenant « Consultations » dans la
                  liste déroulante. Ceci fait, il ne reste qu’à imprimer le
                  document.
                </div>

                <div>
                  Il est possible de restreindre les données à coller en
                  effectuant préalablement une sélection des données à copier à
                  l’aide de la souris.
                </div>
              </div>
            ),
          },
          {
            id: 3,
            question:
              "Je veux transférer les courriers écrits sous Word dans le dossier patient",
            answer: (
              <div className="answer">
                <div>Deux solutions existent:</div>
                <div className="in_list">
                  <ul>
                    <li>Insérer le courrier comme un « document importé » ;</li>
                    <li>
                      Retrouver le courrier dans la liste des courriers du
                      dossier.
                    </li>
                  </ul>
                </div>

                <div>
                  La première solution est la plus simple mais elle a
                  l’inconvénient de classer le document dans la liste des «
                  Images et documents intégrés dans le dossier » et non dans
                  celle des lettres patient. Cliquez sur le bouton « Images et
                  documents intégrés dans le dossier » (le septième de la barre)
                  puis sur cliquez sur le document « Document » et utilisez la
                  fenêtre de recherche pour sélectionner votre courrier. Cliquez
                  sur « Ouvrir » pour valider la sélection. Vous pouvez ensuite
                  indiquer le nom de sauvegarde du document, la rubrique où il
                  doit être placé, la date de création et préciser si une copie
                  doit être effectuée dans le dossier du patient. Validez la
                  fenêtre. Le document figure dans la liste et il est possible
                  de la visualiser à tout moment.
                </div>

                <div>
                  La seconde solution est plus compliquée. Il s’agit de créer un
                  courrier vierge (soit dans notre traitement de texte, soit
                  dans celui que vous avez paramétré) et d’utiliser les
                  fonctions d’insertion de fichier ou de copier/coller pour y
                  insérer votre document d’origine. Vous devrez probablement
                  refaire la mise en forme du document, paragraphes et polices,
                  récupérer les en-têtes et pieds de page…
                </div>
              </div>
            ),
          },
          {
            id: 4,
            question:
              "Je viens de créer un courrier mais il ne figure pas sur la bonne date de consultation",
            answer:
              "Les courriers sont automatiquement enregistrés sur la date de consultation en cours. Si la date sélectionnée n'est pas la bonne lors de la création du courrier, il est possible de modifier cette date d'enregistrement du courrier à partir de la liste des lettres patient (le sixième bouton de la barre). Sélectionner le courrier en question dans cette liste et cliquer sur « Nom ». Corriger la date et valider la fenêtre. Refermer la liste des lettres patient et cliquer sur le bouton d’accès au résumé du dossier pour rafraîchir l’écran (le deuxième bouton de la barre). Si la date saisie correspond à une des dates de consultation du patient, le courrier figurera automatiquement dans le résumé du dossier.",
          },
        ],
      },
      {
        id: 3,
        gr_name: "Le glossaire",
        gr_questions: [
          {
            id: 1,
            question:
              "Comment puis-je avoir un glossaire différent des autres membres du cabinet ?",
            answer: (
              <div className="answer">
                <div>
                  Il est possible, pour chaque champ du logiciel, d’avoir un
                  glossaire personnel. Vous devez :
                </div>
                <div className="in_list">
                  <ol>
                    <li>
                      ouvrir l’éditeur de glossaire en cliquant sur le bouton «
                      <img
                        src="/img/ico_gif/faq01.gif"
                        width="28"
                        height="28"
                      />
                      »;
                    </li>
                    <li>
                      cochez la case « Glossaire personnel » du bas de la
                      fenêtre ;
                    </li>
                    <li>renseigner votre glossaire ;</li>
                    <li>Valider la fenêtre.</li>
                  </ol>
                </div>
              </div>
            ),
          },
          {
            id: 2,
            question:
              "Comment puis-je communiquer un/des glossaires à des confrères ?",
            answer: (
              <div className="answer">
                <div>
                  Il est possible d’enregistrer le glossaire de chaque champ du
                  logiciel sur le support physique de votre choix (disque dur
                  local ou réseau, disquette…).
                </div>
                <div>Vous devez :</div>
                <div className="in_list">
                  <ul>
                    <li>
                      Ouvrir l’éditeur de glossaire en cliquant sur le bouton «
                      <img
                        src="/img/ico_gif/faq01.gif"
                        width="28"
                        height="28"
                      />
                      » ;
                    </li>
                    <li>
                      Cliquer sur le bouton «
                      <img
                        src="/img/ico_gif/faq02.gif"
                        width="25"
                        height="22"
                      />
                      » ;
                    </li>
                    <li>
                      Utiliser la fenêtre « Enregistrer sous » pour préciser le
                      lieu (une disquette par exemple) et le nom du fichier
                      texte (le nom utilisé par défaut est le nom du champ) ;
                    </li>
                    <li>Valider la fenêtre ;</li>
                    <li>Refermer l’éditeur de glossaire ;</li>
                    <li>
                      Répéter les 5 premiers points pour chaque glossaire à
                      diffuser ;
                    </li>
                    <li>Diffuser le fichier aux personnes intéressées.</li>
                  </ul>
                </div>
                <div></div>
              </div>
            ),
          },
          {
            id: 3,
            question: "Comment puis-je importer le glossaire d’un confrère ?",
            answer: (
              <div className="answer">
                <div>
                  Il n’est pas possible de récupérer tous les glossaires en une
                  seule manipulation. En revanche, il est possible de récupérer
                  un à un les glossaires intéressants. Votre confrère doit vous
                  fournir une disquette, cédérom… sur lequel il a enregistré
                  l’ensemble des glossaires souhaités.
                </div>
                <div>Vous devez ensuite :</div>
                <div className="in_list">
                  <ul>
                    <li>
                      Ouvrir l’éditeur de glossaire en cliquant sur le bouton «
                      <img
                        src="/img/ico_gif/faq01.gif"
                        width="28"
                        height="28"
                      />
                      » ;
                    </li>
                    <li>
                      Cliquer sur le bouton «
                      <img
                        src="/img/ico_gif/faq03.gif"
                        width="25"
                        height="25"
                      />
                      » ;
                    </li>
                    <li>
                      Utiliser la fenêtre « Ouvrir » pour accéder au lieu
                      (support fourni) et nom du fichier texte (le nom utilisé
                      par défaut lors de l’enregistrement du glossaire est le
                      nom du champ) à importer ;
                    </li>
                    <li>Valider la fenêtre ;</li>
                    <li>Refermer l’éditeur de glossaire ;</li>
                    <li>
                      Répéter les 5 premiers points pour chaque glossaire à
                      importer.
                    </li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            id: 4,
            question: "Puis-je avoir le même glossaire pour plusieurs champs ?",
            answer: (
              <div className="answer">
                <div>
                  Oui, il s’agit des glossaires attachés. Le principal avantage
                  des glossaires attachés est le report automatique des
                  modifications apportées à l’un glossaire sur l’ensemble des
                  glossaires qui lui sont attachés.
                </div>
                <div>Pour attacher deux glossaires entre eux, il suffit :</div>
                <div className="in_list">
                  <ul>
                    <li>
                      De placer le curseur dans le champ qui doit avoir le même
                      contenu qu’un autre ;
                    </li>
                    <li>
                      Cliquer au-dessus du glossaire avec le bouton droit pour
                      appeler le menu contextuel ;
                    </li>
                    <li>
                      Cliquer sur l’option « Attacher ce glossaire à un autre
                      champ » ;
                    </li>
                    <li>
                      Sur la fenêtre, cocher la case « Attacher ce glossaire à
                      un autre champ » et utiliser les deux listes déroulantes
                      pour rechercher le glossaire de référence ;
                    </li>
                    <li>Valider la fenêtre.</li>
                  </ul>
                </div>
                Le glossaire du champ en cours prend aussitôt le même contenu
                que le glossaire du champ « cible ». Répéter les 5 points pour
                lier un troisième champ aux deux précédents et ainsi de suite.
                <div></div>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Télétransmission. Jeu de cartes.",

    groups: [
      {
        id: 1,
        gr_name: "Questions/réponses sur Sésam-Vitale",
        gr_questions: [
          {
            id: 1,
            question:
              "Comment ouvrir un dossier patient à l’aide de la carte Sésam vitale ?",
            answer: (
              <div className="answer">
                <div>
                  Cliquer sur le bouton «
                  <img src="/img/ico_gif/faq01.gif" width="23" height="26" /> »
                  pour afficher la fenêtre de sélection d’un dossier :
                </div>

                <div align="center">
                  <img src="/img/ico_gif/faq05.jpg" width="555" height="436" />
                </div>

                <div>
                  Cliquer sur le bouton «
                  <img src="/img/ico_gif/faq04.gif" width="77" height="39" /> »
                  pour lancer la lecture de la carte Vitale du patient. La carte
                  doit donc être insérée dans le lecteur avant de cliquer sur ce
                  bouton. Après quelques instants liés au temps de traitement du
                  lecteur, une fenêtre liste les patients inscrits sur la carte
                  :
                </div>

                <div align="center">
                  <img src="/img/ico_gif/faq06.gif" width="405" height="243" />
                </div>

                <div>
                  Sélectionner le patient souhaité et cliquer sur « Ok » (un
                  double-clique sur le patient a le même effet. Si le dossier du
                  patient existe déjà, Médialogis SQL l’ouvre automatiquement
                  sans autre manipulation.
                </div>
                <div>
                  S’il s’agit d’un patient ne possédant pas déjà de dossier, on
                  obtient une nouvelle fenêtre reprenant l’intégralité des
                  données inscrites sur la carte :
                </div>

                <div align="center">
                  <img src="/img/ico_gif/faq07.gif" width="442" height="419" />
                </div>

                <div>
                  Vous avez la possibilité de lancer une nouvelle lecture de la
                  carte en cas d’erreur lors de la sélection du patient en
                  cliquant sur le bouton «
                  <img src="/img/ico_gif/faq08.gif" width="90" height="21" /> ».
                  Si le dossier du patient existe déjà mais n’a pas été reconnu
                  lors de la lecture de la carte Vitale, fermer la fenêtre,
                  ouvrir manuellement le dossier du patient, accéder à la fiche
                  patient et modifier les données de sorte que son contenu
                  corresponde aux indications de la carte Vitale pour les champs
                  nom, prénom, et date de naissance. Une seconde lecture de la
                  carte à partir de la fenêtre de sélection d’un dossier devrait
                  ouvrir automatiquement le dossier.
                </div>
                <div>
                  Cliquer sur le bouton «
                  <img src="/img/ico_gif/faq09.gif" width="90" height="21" /> »
                  pour créer le dossier de ce nouveau patient. On obtient la
                  fenêtre de création d’un dossier patient sur laquelle les nom
                  et prénom du patient sont déjà indiqués :
                </div>

                <div align="center">
                  <img src="/img/ico_gif/faq10.gif" width="308" height="134" />
                </div>

                <div>
                  Corriger le groupe et la date de la première consultation si
                  nécessaire puis valider la fenêtre. Si la caisse de sécurité
                  sociale du patient n’a pas déjà été référencée, on obtient une
                  fenêtre listant l’ensemble des caisses déjà créées dans
                  Médialogis SQL, et indiquant la caisse mentionnée sur la carte
                  Vitale du patient :
                </div>

                <div align="center">
                  <img src="/img/ico_gif/faq12.gif" width="388" height="412" />
                </div>

                <div>
                  Sur cet exemple, la caisse du patient possède le code 999 et
                  se nomme « Caisse de TEST ». Si cet organisme a déjà été créé
                  et figure dans la liste de gauche, la sélectionner dans la
                  liste et valider la fenêtre. Dans le cas contraire, il est
                  nécessaire de créer la caisse et en cliquant sur «
                  <img src="/img/ico_gif/faq14.gif" width="91" height="20" /> »
                  pour afficher la fenêtre de création d’une caisse :
                </div>

                <div align="center">
                  <img src="/img/ico_gif/faq13.gif" width="337" height="364" />
                </div>

                <div>
                  Le code caisse et code centre ne doivent pas être modifiés car
                  ils sont issus de la carte Vitale du patient. Il est
                  nécessaire de compléter/modifier le code de l’organisme (10
                  caractères au maximum - nous vous conseillons de reprendre les
                  deux codes précédents en les séparant par un trait d’union
                  (exemple : « 999 - 9999 » dans la fenêtre ci-dessus), le type,
                  taux, base de remboursement et nom de l’organisme. Les autres
                  champs sont facultatifs. Valider la fenêtre pour achever la
                  création du dossier.
                </div>
              </div>
            ),
          },
          {
            id: 2,
            question: "",
            answer: "",
          },
          {
            id: 3,
            question: "",
            answer: "",
          },
          {
            id: 4,
            question: "",
            answer: "",
          },
          {
            id: 5,
            question: "",
            answer: "",
          },
          {
            id: 6,
            question: "",
            answer: "",
          },
          {
            id: 7,
            question: "",
            answer: "",
          },
          {
            id: 8,
            question: "",
            answer: "",
          },
          {
            id: 9,
            question: "",
            answer: "",
          },
          {
            id: 10,
            question: "",
            answer: "",
          },
          {
            id: 11,
            question: "",
            answer: "",
          },
          {
            id: 12,
            question: "",
            answer: "",
          },
          {
            id: 13,
            question: "",
            answer: "",
          },
          {
            id: 14,
            question: "",
            answer: "",
          },
          {
            id: 15,
            question: "",
            answer: "",
          },
          {
            id: 16,
            question: "",
            answer: "",
          },
          {
            id: 17,
            question: "",
            answer: "",
          },
          {
            id: 18,
            question: "",
            answer: "",
          },
        ],
      },
    ],
  },
  // {
  //   id: 5,
  //   title: "",
  //   groups: [
  //     {
  //       id: 1,gr_name: "",
  //       gr_questions: [
  //         {
  //           id: 1,
  //           question: "",
  //           answer: "",
  //         },
  //         {
  //           id: 2,
  //           question: "",
  //           answer: "",
  //         },
  //         {
  //           id: 3,
  //           question: "",
  //           answer: "",
  //         },
  //         {
  //           id: 4,
  //           question: "",
  //           answer: "",
  //         },
  //         {
  //           id: 5,
  //           question: "",
  //           answer: "",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
