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
            question: "Quel est le prix de MEDIALOGIS ?",
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
            question:
              "Je me suis trompé de caisse lors du choix de la caisse du patient faisant suite à la lecture de sa carte Sésam-Vitale",
            answer: (
              <div className="answer">
                <div>Vous devez:</div>
                <div className="in_list">
                  <ol>
                    <li>
                      Supprimer l’association code Sésam-Vitale organisme de
                      tiers payant : sélectionnez l’option « Paramètres
                      comptabilité » du menu « Comptabilité ». Accédez à
                      l’onglet « Tiers payant », double-cliquez sur l’organisme
                      incorrectement associé et supprimer les code caisse et
                      centre inscrits. Fermez les fenêtres ;
                    </li>
                    <li>
                      Corriger l’organisme indiqué sur la fiche patient en lui
                      affectant le bon organisme.
                    </li>
                  </ol>
                </div>
              </div>
            ),
          },
          {
            id: 3,
            question:
              "Que faire si la lecture de la carte Vitale du patient n’ouvre pas son dossier mais affiche le contenu de la carte ?",
            answer: (
              <div class="faq_answer">
                <div>Cela signifie:</div>
                <div className="in_list">
                  <ul>
                    <li>
                      qu’il s’agit d’un nouveau patient (dans ce cas créer le
                      dossier en cliquant sur «{" "}
                      <img
                        src="/img/ico_gif/faq09.gif"
                        width="90"
                        height="21"
                      />{" "}
                      ») ;
                    </li>
                    <li>
                      ou que les indications de la carte diffèrent de celles de
                      la fiche patient. Il est nécessaire de corriger les
                      données de la fiche patient pour les rendre conforme à
                      celles de la carte Vitale :
                      <div className="in_list">
                        <ol>
                          <li>
                            Noter sur papier le nom, prénom et date de naissance
                            affichés dans la fenêtre « Informations sur la carte
                            » ;
                          </li>
                          <li>Ouvrir manuellement le dossier ;</li>
                          <li>
                            Accéder à la fiche patient et corriger les données
                            pour obtenir le même nom, prénom et date de
                            naissance que la carte Vitale ;
                          </li>
                          <li>
                            Refaire une ouverture du dossier à partir de la
                            carte Vitale du patient pour vérifier que le patient
                            est bien retrouvé.
                          </li>
                        </ol>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            id: 4,
            question:
              "Puis-je créer une FSE si je n’ai pas la carte du professionnel de santé (CPS) ?",
            answer: (
              <div class="answer">
                <p>
                  La création de FSE sans CPS n’est pas permise. Vous devez
                  impérativement disposer d’une carte de professionnel de santé.
                  Cependant, il est possible de créer une FSE avec une carte
                  employée en désynchronisant la FSE. Il suffit de l’indiquer en
                  cochant la case « Désynchronisation de la FSE » lors de la
                  création de la FSE. La FSE devra ensuite être synchronisée
                  avec la CPS pour pouvoir être télétransmise (voir option «
                  Télétransmission des FSE » du menu « Transfert »).
                </p>
              </div>
            ),
          },
          {
            id: 5,
            question:
              "Puis-je créer une FSE si je n’ai pas la carte Vitale du patient ?",
            answer: (
              <div class="faq_answer">
                <p>
                  La création de FSE sans carte Vitale du patient est permise,
                  il s’agit du mode sécurisé sans carte Vitale. Il suffit de
                  l’indiquer en cochant la case « Sans carte bénéficiaire » lors
                  de la création de la FSE. Vous devrez saisir tous les
                  renseignements nécessaires à la création d’une FSE. La plupart
                  de ces renseignements sont inscrits sur la carte papier de
                  sécurité sociale du patient mais il est difficile de les
                  retrouver.
                </p>
              </div>
            ),
          },
          {
            id: 6,
            question:
              "Puis-je télétransmettre les FSE si je n’ai pas la carte du professionnel de santé (CPS) ? ",
            answer:
              "La CPS est nécessaire pour le formatage des lots de factures qui utilise le lecteur de cartes Sésam-Vitale et effectue la sécurisation à partir de la carte CPS et du code porteur. Il est impossible de formater les lots sans CPS. En revanche, il est possible de préparer les fichiers à télétransmettre, de les envoyer et de recevoir les ARL disponibles sans CPS sur les réseaux Internet n’utilisant pas l’identification par une lecture de la carte CPS. ",
          },
          {
            id: 7,
            question:
              "L’acte saisi sur l’écran « Règlement » ne se retrouve pas sur la FSE",
            answer: (
              <div class="answer">
                <p>Il s’agit d’un problème de paramétrage :</p>
                <div className="in_list">
                  <ol>
                    <li>
                      <u>
                        La codification de l’acte dans Médialogis SQL est
                        incomplète ou incorrecte:
                      </u>
                      l’option « Paramètres comptabilité » du menu «
                      Comptabilité » affiche la liste des actes. La dernière
                      colonne de cette liste se nomme « Code pour FSE » et
                      permet d’indiquer la codification de l’acte pour le
                      système des FSE. Vous devez compléter cette codification
                      conformément à ce système ;
                    </li>
                    <li>
                      <u>
                        L’acte utilise une codification non reconnue par le
                        module FSE de RESIP:
                      </u>{" "}
                      il faut alors créer cet acte{" "}
                      <u>dans la liste des actes</u> de la fonction FSE de
                      RESIP.
                    </li>
                    <p></p>
                  </ol>
                </div>
              </div>
            ),
          },
          {
            id: 8,
            question:
              "En lecture de carte médecin ou patient, j’obtiens un message « Pas de réponse du lecteur lors d’un échange »",
            answer: (
              <div class="answer">
                <p>Il s’agit :</p>
                <div className="in_list">
                  <ol>
                    <li>
                      Soit d’une erreur de paramétrage du lecteur dans
                      Médialogis SQL. Il existe seulement deux paramètres pour
                      gérer l’accès au lecteur de cartes Sésam-Vitale :
                      <div className="in_list">
                        <ol>
                          <li>
                            le numéro du port série sur lequel est connecté le
                            lecteur. Les ordinateurs de bureau possèdent
                            généralement deux ports série, tandis que les
                            portables n’en ont qu’un ;
                          </li>
                          <li>
                            la vitesse de transfert des données paramétrée dans
                            le lecteur. Les lecteurs sont livrés paramétrés par
                            défaut à une vitesse de 9600 bauds. Il est possible
                            d’augmenter cette vitesse à 19200 bauds.
                          </li>
                        </ol>
                      </div>
                      Vous trouverez ces deux paramètres en sélectionnant
                      l’option « Paramètres Sésam Vitale » du menu «
                      Configuration », puis l’onglet « Paramètres systèmes »,
                      puis en cliquant sur le bouton « Gestion des paramètres de
                      la fonction », en accédant à l’onglet « Paramètres » et en
                      cliquant sur le bouton « Modifier les paramètres ».
                    </li>
                    <li>
                      Soit d’un problème de configuration du port série sur
                      lequel est connecté le lecteur. Certains appareils, tels
                      les Palm, connectés sur un port série de l’ordinateur
                      modifient la configuration de ce port pour en optimiser
                      l’utilisation. Windows se retrouve dans l’impossibilité
                      d’utiliser ce port de façon normale et ne peut plus
                      dialoguer avec les autres appareils. La solution la plus
                      rapide est de supprimer les ports COM dans le panneau de
                      configuration de Windows puis de redémarrer l’ordinateur.
                      Windows détectera les ports série et les réinstallera
                      conformément à son usage ;
                    </li>
                    <li>
                      Soit d’un problème matériel, cas le plus rare et le plus
                      difficile à déceler. Vous devrez contacter votre vendeur
                      de matériel.
                      <ol>
                        <p></p>
                      </ol>
                    </li>
                  </ol>
                </div>
              </div>
            ),
          },
          {
            id: 9,
            question: "Je me suis trompé sur la FSE et souhaite la modifier",
            answer: (
              <div class="answer">
                La modification d’une FSE est impossible. Vous devez la
                supprimer et la refaire.
              </div>
            ),
          },
          {
            id: 10,
            question: "Je me suis trompé sur la FSE et souhaite la supprimer",
            answer: (
              <div class="answer">
                <p>
                  La suppression d’une FSE se fait à partir du tableau de bord
                  des FSE, où à partir de l’écran de règlement. Pour y parvenir,
                  sélectionner l’option « Télétransmission des FSE » du menu «
                  Transfert », ou cliquer sur le bouton « Détail » de l’écran «
                  Règlement », puis cliquer sur le bouton « Supprimer la FSE ».
                </p>
                <p>
                  Pour pouvoir supprimer une FSE, elle doit être dans l’état «
                  Non mise en lot ». Dans ce cas, à partir du tableau de bord,
                  il suffit de la sélectionner et de cliquer sur le bouton « FSE
                  » puis « Supprimer la FSE ».
                </p>
                <p>
                  Si la FSE est dans l’état « Lot non regroupé », il faut
                  extraire la FSE du lot en cliquant sur le bouton « Lot » puis
                  « Défaire le lot », ce qui place la FSE dans l’état « Non mise
                  en lot » et permet donc de la supprimer.
                </p>
                <p>
                  Si la FSE est dans un autre état, il est impossible de la
                  supprimer.
                </p>
              </div>
            ),
          },
          {
            id: 11,
            question:
              "Comment imprimer la quittance de la FSE que je viens de créer ?",
            answer: (
              <div class="answer">
                <p>
                  Après création de la FSE, si vous souhaitez obtenir une
                  quittance, cliquez sur le bouton « Détail » de l’écran «
                  Règlement », puis cliquez sur le bouton « Editer la FSE ».
                </p>
              </div>
            ),
          },
          {
            id: 12,
            question:
              "Médialogis SQL ne parvient pas à télétransmettre les FSE et j’obtiens des messages d’erreur lors de la connexion à Internet",
            answer: (
              <div class="answer">
                <p>
                  Il s’agit généralement d’une anomalie de paramétrage de la
                  connexion au réseau et à la boîte aux lettres des FSE.
                  Vérifier ce paramétrage en sélectionnant l’option «
                  Télétransmission des FSE » du menu « Transfert », puis en
                  cliquant sur le bouton « Télétransmission (RSS ou XMODEM) ».
                </p>
                <ul>
                  <li>
                    Si vous utilisez le réseau santé social de Cégétel, vous
                    obtenez la fenêtre suivante :
                    <div align="center">
                      <img
                        src="/img/ico_gif/faq15.gif"
                        width="597"
                        height="344"
                      />
                    </div>
                    <p>
                      Aucun paramétrage n’est nécessaire. Contactez l’assistance
                      de Cégétel pour établir la connexion au serveur de
                      messagerie.{" "}
                    </p>
                  </li>
                  <li>
                    Si vous utilisez Wanadoo Santé de France Télécom, vous
                    obtenez la fenêtre suivante :
                    <div align="center">
                      <img
                        src="/img/ico_gif/faq16.gif"
                        width="597"
                        height="344"
                      />
                    </div>
                    <p>
                      Ouvrir la liste déroulante « Choix de la Connexion
                      Distante » et sélectionner « Wanadoo », « Wanadoo Plus »
                      ou « Wanadoo Santé » (diffère selon le kit d’installation
                      Wanadoo utilisé). Cliquer ensuite sur le bouton «
                      Paramétrage de la connexion » . Compléter les champs «
                      Login POP3 », « Mot de Passe POP3 » et « Adresse
                      Electronique » en indiquant les valeurs fournies par
                      Wanadoo Santé. Si ces valeurs sont incorrectes, la
                      connexion ne pourra pas se dérouler avec succès. Revenir
                      ensuite à l’onglet « Télétransmission » et valider la
                      fenêtre.{" "}
                    </p>
                  </li>
                  <li>
                    Si vous utilisez Libéralis de France Télécom, vous obtenez
                    la fenêtre suivante :
                    <div align="center">
                      <img
                        src="/img/ico_gif/faq17.gif"
                        width="595"
                        height="344"
                      />
                    </div>
                    <p>
                      Ouvrir la liste déroulant « Choix de la Connexion Distante
                      » et sélectionner « Libéralis ». Cliquer ensuite sur le
                      bouton « Paramétrage de la connexion » . Compléter tous
                      les champs en indiquant les valeurs fournies par Libéralis
                      (vous pouvez comparer avec les valeurs décrites ci-dessus
                      pour vous aider). Si ces valeurs sont incorrectes, la
                      connexion ne pourra pas se dérouler avec succès. Revenir
                      ensuite à l’onglet « Télétransmission » et valider la
                      fenêtre.
                    </p>
                  </li>
                  <li>
                    Si vous utilisez un accès Internet standard, votre
                    fournisseur d’accès doit impérativement posséder un serveur
                    de connexion répondant à la norme POP3. Par exemple, cela ne
                    peut pas fonctionner avec des fournisseurs tels que AOL ou
                    Infonie, non compatibles POP3. Vous obtenez la fenêtre
                    suivante :
                    <div align="center">
                      <img
                        src="/img/ico_gif/faq18.gif"
                        width="596"
                        height="345"
                      />
                    </div>
                    <p>
                      Ouvrir la liste déroulant « Choix de la Connexion Distante
                      » et sélectionner la connexion distante à utiliser pour se
                      connecter à Internet.
                    </p>
                    <p>
                      Cliquer ensuite sur le bouton « Paramétrage de la
                      connexion » . Attention, vous ne pouvez pas utiliser votre
                      boîte aux lettres personnelle pour télétransmettre les
                      FSE. En effet, après traitement de la FSE, la caisse de
                      sécurité sociale envoie un ARL dans la boîte aux lettres.
                      Cet ARL doit être récupéré par Médialogis SQL pour être
                      analysé et vous informer de l’acceptation ou du rejet de
                      la FSE. Si l’ARL est envoyé dans votre boîte aux lettres
                      personnelle, votre logiciel de messagerie électronique va
                      le récupérer et il ne sera plus à la disposition de
                      Médialogis SQL, l’empêchant ainsi de l’analyser. Vous
                      devez donc absolument indiquer ici une boîte aux lettres
                      qui ne sera utilisée que pour la télétransmission des FSE.
                    </p>
                    <p>
                      Vous pouvez créer une boîte aux lettres secondaire chez
                      votre fournisseur d’accès et indiquer son adresse sur
                      cette fenêtre. Attention, certains fournisseurs d’accès ne
                      permettent pas de consulter les boîtes aux lettres
                      secondaires à partir d’un logiciel de messagerie. Ces
                      boîtes aux lettres ne peuvent pas être utilisées pour la
                      télétransmission des FSE. Vous devez créer une boîte sur
                      un site gratuit tel que{" "}
                      <a href="http://www.netcourrier.com/" target="_blank">
                        www.netcourrier.com/
                      </a>
                      .
                    </p>
                  </li>
                </ul>
              </div>
            ),
          },
          {
            id: 13,
            question: "Comment créer une FSE avec une CMU ?",
            answer: (
              <div class="answer">
                <p>
                  La Complémentaire Maladie Universelle (CMU) est considérée par
                  la sécurité sociale comme une caisse complémentaire identifiée
                  sous le numéro « 99999997 » si les droits sont indiqués sur la
                  carte Vitale ou si le patient présente une attestation papier
                  de la caisse d'assurance maladie obligatoire, sous le numéro «
                  88888888 » dans le cas contraire.
                </p>
                <p>
                  Si la carte Vitale du patient est à jour, le tiers payant avec
                  CMU se fait automatiquement et il suffit de valider la FSE
                  sans autre traitement.
                </p>
                <p>
                  Si la carte Vitale n'est pas à jour, sur la FSE, cliquer sur
                  le bouton « TP (Aucun) » pour afficher la fenêtre de sélection
                  du tiers payant :
                </p>

                <div align="center">
                  <img src="/img/ico_gif/faq19.gif" width="456" height="245" />
                </div>

                <p>
                  Sélectionner la troisième option « Tiers Payant pratiqué sur
                  la Part Obligatoire et sur la Part Complémentaire » et cliquer
                  sur « Ok ».
                </p>
                <p>
                  On obtient la fenêtre où l’on doit préciser la complémentaire
                  du patient :
                </p>

                <div align="center">
                  <img src="/img/ico_gif/faq20.gif" width="528" height="494" />
                </div>

                <p>
                  Cocher la case « CMU Complémentaire », indiquer le numéro de
                  la caisse selon la présence ou non d'une attestation papier
                  délivrée par la caisse d'assurance maladie obligatoire, puis
                  cliquer sur « Ok » pour valider.
                </p>
                <p>
                  De retour sur la FSE, achever la saisie des éléments
                  nécessaires (inutile de préciser le mode de règlement car
                  l’intégralité de la consultation est prise en charge par les
                  tiers payants - les dépassements d’honoraires n’étant pas
                  autorisés avec la CMU) et valider la FSE en cliquant sur « Ok
                  ».
                </p>
                <p>
                  Si la caisse complémentaire indiquée (ici la CMU) n’est pas
                  renseignée sur la fiche patient, vous obtenez un message « La
                  Caisse Complémentaire n’est pas définie. Souhaitez-vous la
                  renseigner ? ». Cliquer sur « OK ». La fenêtre de sélection de
                  la caisse complémentaire apparaît. Sélectionner la caisse «
                  CMU » dans la liste (la créer si besoin) et valider la
                  fenêtre. Le traitement est terminé.
                </p>
                <p>
                  Vous devez créer cette caisse si elle n’existe pas dans la
                  liste. Cliquer sur le bouton « Ajouter 88888888 » pour
                  afficher la fenêtre de création d’une caisse complémentaire et
                  compléter les zones de saisies. Valider la création,
                  sélectionner cette nouvelle caisse dans la liste et valider la
                  sélection.
                </p>
              </div>
            ),
          },
          {
            id: 14,
            question: "Comment faire un titre médecin ?",
            answer: (
              <div class="answer">
                <p>
                  Le titre médecin se fait à partir du bouton «{" "}
                  <img src="/img/ico_gif/faq21.gif" width="79" height="53" /> »
                  de la FSE affichant une fenêtre regroupant tous les cas
                  entraînant une exonération à 100% :
                </p>
                <div align="center">
                  <img src="/img/ico_gif/faq22.gif" width="484" height="505" />
                </div>
                <p>
                  Les divers possibilités offertes par cette fenêtre sont
                  accessibles en fonction du contenu de la carte Sésam-Vitale du
                  patient. Ainsi, l’exonération de soins relatifs aux A.L.D. ne
                  sera possible que si la carte du patient indique effectivement
                  cette A.L.D.
                </p>
                <p></p>Cocher la case correspondant à l’exonération souhaitée et
                cliquer sur « Ok ».<p></p>
                <p>
                  <b>Attention</b>, le fait d’indiquer que l’acte doit être pris
                  en charge à 100% n’entraîne pas automatiquement un paiement
                  par tiers payant. Cela signifie simplement que le patient sera
                  remboursé à hauteur de 100% du tarif sécurité sociale. Vous
                  devez <u>saisir le paiement par tiers payant</u> si vous ne
                  souhaitez par faire payer votre patient.
                </p>
              </div>
            ),
          },
          {
            id: 15,
            question: "Comment faire un tiers payant ?",
            answer: (
              <div class="answer">
                <p>
                  Sur la FSE, cliquer sur le bouton « TP (Aucun) » pour afficher
                  la fenêtre de sélection du tiers payant :
                </p>

                <div align="center">
                  <img src="/img/ico_gif/faq23.gif" width="456" height="245" />
                </div>

                <p>Vous avez quatre possibilités :</p>
                <div className="in_list">
                  <ol>
                    <li>Ne pas faire de tiers payant ;</li>
                    <li>
                      Faire un tiers payant uniquement sur la part obligatoire,
                      c’est à dire sur la caisse de sécurité sociale du patient.
                      Le solde de la consultation doit être payé directement par
                      le patient;
                    </li>
                    <li>
                      Faire un tiers payant sur la part de la sécurité sociale
                      et sur celle de la complémentaire du patient. Attention,
                      si la caisse complémentaire du patient n’est pas indiquée
                      sur sa carte Sésam-Vitale, vous devrez accepter d’avancer
                      les frais correspondant aux droits non écrits. Vous
                      encourrez donc le risque de ne pas être rembourser par la
                      caisse complémentaire ;
                    </li>
                    <li>
                      Faire un tiers payant uniquement sur la part
                      complémentaire du patient. Là aussi, si la caisse
                      complémentaire du patient n’est pas indiquée sur sa carte
                      Sésam-Vitale, vous devrez accepter d’avancer les frais
                      correspondant aux droits non écrits. Vous encourrez donc
                      le risque de ne pas être rembourser par la caisse
                      complémentaire.
                    </li>
                  </ol>
                </div>
                <p></p>
                <p>
                  Sélectionner le type de tiers paiement souhaité et cliquer sur
                  « Ok ».
                </p>
              </div>
            ),
          },
          {
            id: 16,
            question: "Comment tarifer un dépassement ?",
            answer: (
              <div class="answer">
                <p>
                  Jusqu'à présent, le programme de RESIP ne permettait pas
                  d'automatiser les dépassements d'honoraires. Ce défaut, majeur
                  pour les praticiens en secteur 2, est corrigé par la nouvelle
                  version agréée selon le cahier des charges 1.31 du CNDA. Il
                  est enfin très simple d'effectuer un dépassement puisqu'il
                  suffit d'inscrire le(s) acte(s) facturés sur l'écran
                  règlement, en modifiant les tarifs si nécessaires, puis de
                  lancer la création de la F.S.E.. Vous parvenez alors sur la
                  F.S.E. valorisée selon les tarifs saisis sur l'écran de
                  Médialogis SQL.
                </p>
                <p>
                  Il est également possible de paramétrer directement les actes
                  avec le dépassement dans les paramètres de la comptabilité.
                </p>
              </div>
            ),
          },
          {
            id: 17,
            question:
              "J’obtiens un message « Le mode de règlement n’a pas été saisi » quand je valide la FSE mais j’ai fait un tiers payant intégral",
            answer: (
              <div class="answer">
                <p>
                  Le programme de RESIP ne calcule les montants affectés aux
                  tiers payants qu’après validation de la FSE. Quand vous
                  cliquez sur le bouton « Ok », rien n’indique qu’il n’existe
                  pas un solde à la charge du patient. Par conséquent, le
                  programme est obligé de demander la saisie du mode de paiement
                  du patient, même si l’intégralité de la consultation est
                  remboursée par les caisses. Cela n’entraîne aucune conséquence
                  pour les caisses et vous serez correctement remboursé.
                </p>
                <p>
                  En revanche, le mode de règlement saisi sera automatiquement
                  repris par Médialogis SQL pour compléter la partie « Paiement
                  » de l’écran « Règlement » en lui affectant la valeur de la
                  dette antérieure s’il en existe une.
                </p>
              </div>
            ),
          },
          {
            id: 18,
            question: "Exécuter CPS-GESTION sur un ordinateur PC (Windows)",
            answer: (
              <div class="answer">
                <p>On a besoin du programme CPS-GESTION pour :</p>
                <div className="in_list">
                  <ul>
                    <li>Contrôler la validité d’une CPS ;</li>
                    <li>Débloquer une carte ;</li>
                    <li>Etc.</li>
                  </ul>
                </div>

                <p>
                  Cette fiche explique comment trouver et exécuter le programme
                  CPS-GESTION sur un ordinateur PC équipé de Windows 95, 98, ou
                  NT.
                </p>

                <p>
                  Elle s'utilise en complément de l'une ou l'autre des fiches
                  citées ci-dessus.
                </p>

                <p>
                  Pour plus de commodité, il est recommandé d'imprimer cette
                  fiche avant de lancer les manipulations.
                </p>

                <p>Ce qu'il faut savoir :</p>
                <div className="in_list">
                  <ul>
                    <li>
                      A l'heure actuelle, la majorité des PS abonnés au Réseau
                      Santé Social (RSS) de Cégétel disposent du programme
                      CPS-GESTION installé sur leur machine ;
                    </li>
                    <li>
                      Ceux qui sont abonnés à un autre fournisseur d'accès
                      Intemet (Wanadoo, Medsyn, etc … ont peu de chances de
                      l'avoir ;
                    </li>
                    <li>
                      Dans tous les cas, on peut quand même essayer d'exécuter
                      cette fiche: si CPS-GESTION est absent, on s'arrêtera
                      forcément sur l'étape 5 ;
                    </li>
                  </ul>
                </div>

                <p>Suivre la procédure décrite ci-dessous :</p>
                <div className="in_list">
                  <ol>
                    <li>
                      Pour être sûr de démarrer dans un état "propre", éteindre
                      l'ordinateur et le lecteur de cartes puis les rallumer ;
                    </li>
                    <li>
                      Si l'application médicale est lancée automatiquement au
                      démarrage de l'ordinateur, il faut commencer par quitter
                      cette application ;
                    </li>
                    <li>
                      Ouvrir le menu Démarrer (en bas à gauche de l'écran) et
                      choisir l'option Exécuter ;
                    </li>
                    <li>
                      Dans la fenêtre Exécuter, taper cpgesw32 (en minuscules ou
                      en majuscules, cela n'a pas d'importance) puis valider
                      (cliquer sur OK).
                      <br />
                      Le choix de la prochaine étape (entre 5 et 10) se fait en
                      fonction de la fenêtre qui va maintenant apparaître à
                      l'écran.
                    </li>
                    <li>
                      Si cette fenêtre apparaît :
                      <div align="center">
                        <img
                          src="/img/ico_gif/faq24.gif"
                          width="500"
                          height="120"
                        />
                      </div>
                      <p>
                        Vérifier que le nom qui apparaît dans le titre de la
                        fenêtre (cpgesw32) est bien orthographié:{" "}
                      </p>
                      <ul>
                        <li>
                          si ce n'est pas le cas, cliquer sur OK et revenir à
                          l'étape 4 ;
                        </li>
                        <li>
                          si le nom a été saisi correctement, cela signifie que
                          le programme CPS-GESTION <b>n'est pas disponible</b>{" "}
                          sur ce poste !
                        </li>
                      </ul>
                      <p>
                        Cliquer sur OK et refermer la fenêtre Exécuter. La
                        manipulation est terminée.
                      </p>
                    </li>
                    <li>
                      {" "}
                      Si une fenêtre contenant un message d'erreur apparaît,
                      cliquer sur OK pour refermer la fenêtre. Il y a un
                      problème dans la configuration du poste qui empêche
                      CPS-GESTION de fonctionner correctement: vous devez
                      contacter votre installateur. On va quitter le programme
                      avant de terminer la manipulation. Voir étape 11.
                    </li>
                    <li>
                      Si le programme s'arrête en présentant un écran vide,
                      comme ceci :
                      <div align="center">
                        <img
                          src="/img/ico_gif/faq25.gif"
                          width="559"
                          height="481"
                        />
                      </div>
                      <p>
                        Il y a un problème dans la configuration du poste qui
                        empêche CPS-GESTION de fonctionner correctement: vous
                        devez contacter votre installateur. On va quitter le
                        programme avant de terminer la manipulation. Voir étape
                        11.
                      </p>
                    </li>
                    <li>
                      Si cette fenêtre apparaît :
                      <div align="center">
                        <img
                          src="/img/ico_gif/faq26.gif"
                          width="278"
                          height="178"
                        />
                      </div>
                      <p>
                        Introduire la CPS dans le lecteur et valider, puis
                        choisir la prochaine étape (9 ou 10) en fonction de la
                        fenêtre qui apparaît ensuite. Remarque: si la carte s'y
                        trouve déjà, vérifier qu'elle est bien enfoncée et
                        qu'elle a été introduite dans la bonne fente du lecteur,
                        puis valider pour refaire un essai.
                      </p>
                    </li>
                    <li>
                      Si ce message apparaît :
                      <div align="center">
                        <img
                          src="/img/ico_gif/faq27.gif"
                          width="232"
                          height="108"
                        />
                      </div>
                      <p>
                        La carte est peut-être en panne: il faut la retourner au
                        GIP pour complément d'analyse. Une nouvelle carte vous
                        sera envoyée si le diagnostic est confirmé à ce
                        moment-là.
                      </p>
                      <p>
                        Cliquer sur OK pour refermer la fenêtre. On va ensuite
                        quitter CPS-GESTION avant de terminer la manipulation.
                        Voir étape 11.
                      </p>
                    </li>
                    <li>
                      Après la phase d'initialisation (quelques secondes), les
                      premières informations lues dans la carte apparaissent
                      dans la fenêtre CPS-GESTION :
                      <div align="center">
                        <img
                          src="/img/ico_gif/faq28.gif"
                          width="561"
                          height="482"
                        />
                      </div>
                      <p>
                        CPS-GESTION s'est lancé correctement et il est
                        maintenant prêt à être utilisé.
                      </p>
                      <p>
                        Exécuter la manipulation souhaitée (vérification de la
                        carte, déblocage du code, ou autre…), puis terminer en
                        quittant le programme. Voir étape 11.
                      </p>
                    </li>
                    <li>
                      Quitter le programme CPS-GESTION en cliquant sur le bouton
                      représentant une porte et une flèche (en haut à droite):
                      <img
                        src="/img/ico_gif/faq29.gif"
                        width="35"
                        height="35"
                      />{" "}
                      .
                      <p>
                        Avant de se terminer, le programme propose de
                        sauvegarder certains fichiers :
                      </p>
                      <div align="center">
                        <img
                          src="/img/ico_gif/faq30.gif"
                          width="206"
                          height="262"
                        />
                      </div>
                      <p>
                        <b>Décocher</b> les 2 cases du bas (CPS-DIAG.TXT et
                        CPS-TRAC.TXT) afin de ne pas encombrer l'ordinateur avec
                        des fichiers inutiles. Cliquer sur valider. On a quitté
                        le programme. La manipulation est terminée.
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: 2,
        gr_name: "Questions/réponses sur la carte professionnel de santé",
        gr_questions: [
          {
            id: 1,
            question: "Qu'est-ce que la CPS ?",
            answer: (
              <div class="answer">
                <p>
                  La CPS est une carte à microprocesseur, un support
                  personnalisé permettant à son porteur, le professionnel de
                  santé :{" "}
                </p>
                <p></p>
                <div className="in_list">
                  <ol>
                    <li>de s'identifier,</li>
                    <li>
                      de s'authentifier pour accéder aux systèmes d'information
                      médicale,
                    </li>
                    <li>d'attester de sa qualité de professionnel,</li>
                    <li>
                      d'accéder à des informations dans le respect des droits
                      liés à sa fonction,
                    </li>
                    <li>
                      de signer électroniquement les opérations qu'il effectue.
                    </li>
                  </ol>
                </div>
                <p>
                  La CPS changera votre vie professionnelle. Elle vous apportera
                  des garanties de confidentialité, de sécurité et facilitera
                  votre communication avec l'ensemble du monde de la santé.
                </p>
                <p>
                  Le GIP "CPS" a mis en place une permanence téléphonique pour
                  répondre à vos questions et sollicitations relatives à la CPS
                  :
                </p>
                <p>
                  PERMANENCE TÉLÉPHONIQUE : 01 44 53 36 41
                  <br />
                  du lundi au vendredi, de 8h30 à 12h, 14h à 17h
                </p>
              </div>
            ),
          },
          {
            id: 2,
            question: "Qui y a droit ?",
            answer: (
              <div class="answer">
                <p>
                  La CPS est réservée aux professionnels de santé réglementés
                  par le Code de la Santé Publique :
                </p>
                <div className="in_list">
                  <ul>
                    <li>
                      aux professionnels appartenant à un Ordre: médecin,
                      chirurgien-dentiste, sage-femme, pharmacien,
                    </li>
                    <li>
                      aux auxiliaires: infirmier, masseur-kinésithérapeute,
                      pédicure-podologue, orthophoniste, orthoptiste,
                      opticien-lunetier, audioprothésiste, ergothérapeute,
                      psychomotricien, manipulateur d'électroradiologie
                      médicale,
                    </li>
                    <li>
                      aux professionnels de santé du Service de Santé des
                      Armées.
                    </li>
                  </ul>
                </div>
                <p>
                  Une CPS existe pour chaque catégorie de professionnels de
                  santé et chaque professionnel reçoit une CPS et un code
                  d'accès qui lui sont personnels.
                </p>
                <p>
                  Le système de la CPS est unique et compatible avec la plupart
                  des environnements informatiques existants: un même lecteur
                  peut reconnaître toutes les CPS. Des cartes spécifiques sont
                  attribuées aux :
                </p>
                <p></p>
                <div className="in_list">
                  <ul>
                    <li>
                      Professionnels de santé en formation habilités (Carte de
                      Professionnels en Formation ou CPF),
                    </li>
                    <li>
                      autres intervenants du système de soins (Carte de
                      Personnels d'Etablissement ou CPE),
                    </li>
                    <li>
                      autres intervenants du secteur de la santé (Carte de
                      Personnel Autorisé ou CPA).
                    </li>
                  </ul>
                </div>
                <p></p>
              </div>
            ),
          },
          {
            id: 3,
            question: "A quoi sert-elle ?",
            answer: (
              <div class="faq_answer">
                <p>La CPS permet :</p>
                <div className="in_list">
                  <ul>
                    <li>l'accès sécurisé à l'information médicale,</li>
                    <li>
                      la sécurité des messageries électroniques et des données
                      médicales,
                    </li>
                    <li>la communication entre les professionnels de santé,</li>
                    <li>
                      la signature électronique des documents dématérialisés
                      médicaux ou administratifs tels que la feuille de soins
                      électronique,
                    </li>
                    <li>
                      le droit d'accès à des réseaux professionnels d'échanges
                      d'informations,
                    </li>
                    <li>
                      l'accès à des locaux ou à des équipements sécurisés tels
                      que les établissements de soins.
                    </li>
                  </ul>
                </div>
                <p>
                  La CPS peut contenir pour un même professionnel huit
                  situations d'exercice différentes et autant de situations de
                  facturation pour les feuilles de soins. Il suffit de les
                  indiquer sur le formulaire de demande de carte.{" "}
                </p>
                <p>
                  Chaque professionnel de santé pourra avec une même carte
                  réaliser une feuille de soins électronique, dans son cabinet,
                  dans le cabinet d'un confrère s'il effectue un remplacement ou
                  encore dans un établissement de soins s'il exerce dans cet
                  établissement.
                </p>
              </div>
            ),
          },
          {
            id: 4,
            question: "Que contient la CPS ?",
            answer: (
              <div class="faq_answer">
                <p>
                  Les données relatives à l'identification du professionnel de
                  santé :{" "}
                </p>
                <p></p>
                <div className="in_list">
                  <ul>
                    <li>numéro d'identification ADELI,</li>
                    <li>
                      nom patronyme et d'exercice du professionnel de santé,
                    </li>
                    <li>profession et spécialité.</li>
                  </ul>
                </div>

                <p>
                  Les informations relatives à chaque activité, la CPS peut
                  contenir pour un même professionnel huit situations d'exercice
                  différentes et autant de situations de facturation pour les
                  feuilles de soins:
                </p>
                <div className="in_list">
                  <ul>
                    <li>mode d'exercice,</li>
                    <li>identification du lieu d'exercice,</li>
                    <li>données conventionnelles de l'assurance maladie.</li>
                  </ul>
                </div>

                <p>
                  Les éléments techniques nécessaires aux fonctions de sécurité
                  :
                </p>
                <div className="in_list">
                  <ul>
                    <li>authentification du professionnel de santé,</li>
                    <li>signature électronique.</li>
                  </ul>
                </div>
                <p></p>
              </div>
            ),
          },
          {
            id: 5,
            question: "Comment l'utiliser ?",
            answer: (
              <div class="faq_answer">
                <p>
                  Son utilisation est simple: la CPS est compatible avec les
                  environnements informatiques usuels. Elle ne nécessite que
                  l'installation sur votre poste de travail d'un lecteur de
                  cartes agréé . Il vous suffit de l'introduire dans votre
                  lecteur de cartes, en respectant le sens de lecture et de
                  saisir votre code personnel d'accès.
                </p>
                <div className="in_list">
                  <ul>
                    <li>
                      La CPS vous permet de sécuriser l'accès et la gestion de
                      vos fichiers administratifs et médicaux, de
                      télétransmettre des donnés stockées dans votre ordinateur
                      et de consulter des bases de données sécurisées,
                    </li>
                    <li>
                      La CPS et le code d'accès correspondant sont personnels.
                      Personne d'autre que vous ne peut les utiliser, demander
                      leur changement ou leur modification,
                    </li>
                    <li>
                      La CPS et votre code d'accès personnel sont
                      indissociables.
                    </li>
                  </ul>
                </div>
                <div align="center">
                  <strong>
                    LA CPS EST UNE CARTE STRICTEMENT PERSONNELLE.
                    <br />
                    VOUS ETES RESPONSABLE DE VOTRE CPS
                    <br />
                    Ne conservez pas votre code personnel d'accès et vote CPS au
                    même endroit.
                    <br />
                    Ne laissez pas traîner votre carte; dès que vous avez
                    terminé de vous en servir, rangez-la parmi vos papiers
                    personnels.
                  </strong>
                </div>
              </div>
            ),
          },
          {
            id: 6,
            question: "La CPS permet-elle de garantir le secret médical ?",
            answer: (
              <div class="faq_answer">
                <p>
                  La CPS est un élément essentiel de sécurisation de tous les
                  systèmes contenant des informations médicales et
                  administratives. Avec la CPS vous pouvez signer
                  électroniquement chacun de vos messages émis. Les choix
                  techniques qui permettent la réalisation de cette signature
                  donnent des garanties supérieures au support papier.
                  Prochainement, l'usage de la CPS permettra de rendre
                  confidentiels les envois de données en les chiffrant.
                </p>
                <p>
                  Dotée d'un système de reconnaissance "carte à carte", la CPS,
                  et elle seule, permettra l'accès aux informations médicales
                  contenues dans la future carte Vitale 2.
                </p>
              </div>
            ),
          },
          {
            id: 7,
            question:
              "Que faire en cas de changement de situation d'exercice, de perte, de vol ?",
            answer: (
              <div class="faq_answer">
                <p>Si votre situation a changé</p>
                <p>
                  Vous devez en informer, selon la nature de la modification :
                </p>
                <div className="in_list">
                  <ul>
                    <li>l'Ordre (par exemple: changement de spécialité),</li>
                    <li>
                      la DDASS (par exemple: changement d'adresse ou de
                      département),
                    </li>
                    <li>
                      ou la CPAM dont vous dépendez (par exemple: changement de
                      données conventionnelles).
                    </li>
                  </ul>
                </div>
                <p>
                  Lorsque le GIP "CPS" recevra les informations, votre carte
                  sera renouvelée.
                </p>
                <p>
                  Prochainement, courant 2000, vous pourrez effectuer les
                  modifications par télémise-à-jour en effectuant cette
                  opération directement sur votre poste de travail.
                </p>

                <p>
                  La CPS peut contenir pour un même professionnel huit
                  situations d'exercice différentes et autant de situations de
                  facturation pour les feuilles de soins. Il suffit de les
                  indiquer sur le formulaire de demande de carte. Chaque
                  professionnel de santé pourra avec une même carte réaliser une
                  feuille de soins électronique, dans son cabinet, dans le
                  cabinet d'un confrère s'il effectue un remplacement ou encore
                  dans un établissement de soins s'il exerce dans cet
                  établissement.
                </p>
              </div>
            ),
          },
          {
            id: 8,
            question: "Si vous avez perdu votre CPS",
            answer: (
              <div class="faq_answer">
                <p>Dès que vous constatez la perte ou le vol,</p>
                <div className="in_list">
                  <ul>
                    <li>
                      informez le Centre de gestion du GIP "CPS" par téléphone :
                      01 44 53 33 90,
                    </li>
                    <li>
                      avec confirmation par courrier ou télécopie : 01 40 16 90
                      15,
                    </li>
                    <li>votre CPS sera aussitôt mise en opposition.</li>
                  </ul>
                </div>
                <p></p>
              </div>
            ),
          },
          {
            id: 9,
            question: "Si vous avez oublié votre code",
            answer: (
              <div class="faq_answer">
                <p>
                  <strong>
                    Informez aussitôt le centre de gestion du GIP "CPS" : 01 44
                    53 33 90.
                  </strong>
                </p>
                <p>
                  Grâce à votre de code de déblocage reçu en même temps que
                  votre code porteur vous pourrez initialiser un code nouveau de
                  votre choix.
                </p>
              </div>
            ),
          },
          {
            id: 10,
            question: "Si votre lecteur de carte ne peut plus lire votre CPS",
            answer: (
              <div class="faq_answer">
                <p>
                  Votre carte a dû être endommagée accidentellement, vous pouvez
                  immédiatement joindre le centre de gestion du GIP "CPS" : 01
                  44 53 33 90. Si le défaut persiste, votre CPS sera remplacée.
                </p>
              </div>
            ),
          },
          {
            id: 11,
            question:
              "Si vous avez bloqué votre carte suite à 3 présentations successives d’un code porteur erroné",
            answer: (
              <div class="faq_answer">
                <p>
                  Cette fiche donne la procédure à suivre pour débloquer cette
                  carte.
                </p>

                <p>
                  Pour plus de commodité, il est recommandé d'imprimer cette
                  fiche avant de lancer les manipulations.
                </p>

                <p>
                  Pour pouvoir débloquer une CPS, deux conditions doivent être
                  remplies :
                </p>
                <div className="in_list">
                  <ol>
                    <li>
                      vous devez posséder votre code de déblocage. Si ce n'est
                      pas le cas voir la réfection des codes,
                    </li>
                    <li>
                      pour faire le déblocage directement sur l'ordinateur, il
                      faut en plus que celui-ci soit équipé du programme
                      CPS-GESTION.
                    </li>
                  </ol>
                </div>

                <p>
                  Cliquer ici pour atteindre la fiche "Exécuter CPS-GESTION".
                </p>

                <p>
                  Si le programme CPS-GESTION n'est pas disponible ou ne
                  fonctionne pas correctement, vous devez faire débloquer votre
                  carte par la CPAM la plus proche.
                </p>

                <p>
                  Si CPS-GESTION est disponible et s'est initialisé
                  correctement, on peut alors effectuer la manipulation décrite
                  ci-dessous :
                </p>
                <div className="in_list">
                  <ol>
                    <li>
                      Ouvrir le menu Gestion Carte et choisir l'option Débloquer
                      Code. Si l'option n'est pas accessible (elle apparaît
                      grisée au lieu d'être en noir), c'est que la carte n'est
                      pas bloquée (il s’agit probablement d’un dysfonctionnement
                      de la carte) et la manipulation est terminée ;
                    </li>
                    <li>
                      Le programme demande la saisie du code de déblocage.
                      Saisir les 8 chiffres du code de déblocage sur le clavier
                      de l'ordinateur et cliquer sur le bouton « Valider » ;
                    </li>
                    <li>
                      Le programme demande maintenant la saisie du code porteur.
                      Saisir les 4 chiffres du code porteur sur le clavier de
                      l'ordinateur. Remarque: le titre de cette boîte de
                      dialogue indique "Saisissez le nouveau code porteur..." où
                      le terme nouveau est inadapté: si vous le souhaitez, vous
                      avez effectivement la possibilité de changer de code
                      porteur à cette étape (ce n'est pas à conseiller); mais
                      vous pouvez aussi, bien sûr, saisir le même que vous aviez
                      auparavant. Cliquer sur le bouton « Valider » ;
                    </li>
                    <li>
                      Le programme demande la confirmation de ce code porteur.
                      Re-saisir exactement le même code qu'à l'étape précédente
                      et cliquer de nouveau sur « Valider », puis choisir
                      l'étape suivante (entre 5 et 7) en fonction du résultat
                      obtenu ;
                    </li>
                    <li>
                      Si on obtient le message "Code de confirmation erroné":
                      une erreur a été faite au moment de la saisie du code
                      porteur: cliquer sur OK pour retourner à l'étape 4 (bien
                      faire attention en retapant son code) ; Remarque: si on
                      revient une deuxième fois sur cette fenêtre, c'est que
                      l'erreur de saisie s'est produite à l'étape 3 (lère saisie
                      du code porteur) et non pas à l'étape 4 (confirmation).
                      Dans ce cas, cliquer sur OK pour revenir automatiquement à
                      l'étape 4, puis cliquer sur le bouton Annuler pour
                      recommencer alors la manipulation depuis le début.
                    </li>
                    <li>
                      Si on obtient le message "Code de déblocage erroné": il
                      faut commencer par s'assurer que l'on utilise le bon code
                      de déblocage, c’est à dire vérifier que le numéro de carte
                      inscrit sur le courrier initial envoyé par le GIP CPS
                      (dans la partie du haut) est bien le même que celui qui
                      apparaît dans la fenêtre CPS-GESTION (dans la partie
                      IDENTIFICA TION DE LA CARTE, juste au dessus de la date
                      d'expiration: Carte de Professionnel de Santé (CPS)
                      n°-------- ) :
                      <div className="in_list">
                        <ul>
                          <li>
                            si le code de déblocage utilisé est le bon, cliquer
                            sur le bouton Oui. On revient à l'étape 2 (bien
                            faire attention en retapant le code) ;
                          </li>
                          <li>
                            si le code de déblocage utilisé n'est pas celui de
                            cette carte, il faut essayer de retrouver le bon :
                            <div className="in_list">
                              <ul>
                                <li>
                                  si vous le trouvez, cliquer sur Oui pour
                                  retourner à l'étape 2 ;
                                </li>
                                <li>
                                  si vous ne le retrouvez pas, cliquer sur Non
                                  et quitter CPS-GESTION pour lancer une
                                  réfection de code. La tentative de déblocage
                                  pourra être recommencée dès que vous serez en
                                  possession du courrier initial envoyé par le
                                  GIP avec votre code. Fin de la manipulation.
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            Si, après avoir vu passer rapidement le message
                            "Recyclage en cours", on se retrouve sur la fenêtre
                            CPS-GESTION initiale la CPS a été débloquée avec
                            succès !
                          </li>
                        </ul>
                      </div>
                      <p>Quitter CPS-GESTION, la manipulation est terminée.</p>
                    </li>
                  </ol>
                </div>
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Medialogis. Qu’est-ce qu’il faut pour qu’il fonctionne ?",
    groups: [
      {
        id: 1,
        gr_name: "Configurations et équipement",
        gr_questions: [
          {
            id: 1,
            question:
              "Quelle est la configuration recommandée pour utiliser MEDIALOGIS ?",
            answer:
              "Quelle est la configuration recommandée pour utiliser MEDIALOGIS ?",
          },
        ],
      },
    ],
  },
];
