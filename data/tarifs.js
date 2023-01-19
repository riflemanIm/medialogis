module.exports = [
  {
    id: "1",
    title: "Licence utilisateur",
    items: [
      {
        id: 1,
        name: "Module initial",
        descr:
          "Fiche patient, ordonnances (Vidal), courriers et comptes rendus, comptabilité, PMSI, interface dictée vocale…",
        price: 500,
      },
      {
        id: 2,
        name: "Module « Sésam-Vitale - Gestion des FSE »",
        descr:
          "Pour créer et télétransmettre vos feuilles de soins électroniques (version CCAM 1.40).      Tarif pour chaque médecin utilisant le module.",
        price: 300,
      },
    ],
  },
  {
    id: "2",
    title:
      "Licence site (options activées automatiquement pour tous les utilisateurs du site)",
    items: [
      {
        id: 1,
        name: "Module « Utilisation en réseau »",
        descr:
          "Pour partager les données avec vos confrères, secrétaires et auxiliaires médicaux.",
        price: 500,
      },
      {
        id: 2,
        name: "Module « Paramétrage de la base »",
        descr: "Pour adapter le logiciel à votre pratique professionnelle.",
        price: 500,
      },
      {
        id: 3,
        name: "Module « Statistiques et recherches »",
        descr:
          "Pour extraire et exporter des données selon vos différents critères.",
        price: 500,
      },
    ],
  },
  {
    id: "3",
    title:
      "Licence serveur (conseillée à partir de 3 postes clients et nécessaire au delà de 5)",
    items: [
      {
        id: 1,
        descr:
          "Comprend la licence « runtime » Microsoft SQL Server et 5 accès « clients »",
        price: "1 250",
      },
      {
        id: 2,
        descr: "L’accès client supplémentaire (nombre illimité)",
        price: 100,
      },
    ],
  },
  {
    id: "4",
    title: "Maintenance et mises à jour (tarifs mensuels)",
    items: [
      {
        id: 1,
        name: "",
        descr:
          "Poste serveur (poste où la base de données Microsoft SQL Server est installée)",
        price: 60,
      },
      {
        id: 2,
        name: "",
        descr:
          "Poste client supplémentaire (connecté à la base de données du serveur)",
        price: 30,
      },
      {
        id: 3,
        name: "",
        descr: (
          <>
            <a
              href="http://www.medialogis.com/documents/contrat.pdf"
              target="_blank"
            >
              Télécharger le contrat de maintenance
            </a>
            <br />
            <a
              href="http://www.medialogis.com/documents/prelevement.pdf"
              target="_blank"
            >
              Télécharger l'autorisation de prélèvement
            </a>
          </>
        ),
      },
    ],
  },
  {
    id: "5",
    title: "Installation et formation sur site (hors frais de déplacement)",
    items: [
      { id: 1, name: "", descr: "La demi-journée", price: 400 },
      { id: 2, name: "", descr: "La 1ère journée", price: 600 },
      { id: 3, name: "", descr: "À partir de la 2ème journée", price: 450 },
    ],
  },
  {
    id: "6",
    title: "Cédérom d’installation",
    items: [
      {
        id: 1,
        name: "",
        descr:
          "L’installation est gratuite en téléchargement sur notre site internet.",
        price: 100,
      },
    ],
  },
];
