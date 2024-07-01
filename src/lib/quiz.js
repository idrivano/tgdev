export const quiz = [
    // Informations professionnelles :
    {
        question: "Quel est votre salaire net mensuel ?",
        answer: [
            { a: "Moins de 50 000 FCFA" },
            { a: "50 000 FCFA - 100 000 FCFA" },
            { a: "100 001 FCFA - 150 000 FCFA" },
            { a: "150 001 FCFA - 200 000 FCFA" },
            { a: "200 001 FCFA - 300 000 FCFA" },
            { a: "Plus de 300 000 FCFA" },
        ]
    },
    {
        question: "Combien d'années d'expérience avez-vous en développement ?",
        answer: [
            { a: "Moins de 1 an" },
            { a: "1-3 ans" },
            { a: "4-6 ans" },
            { a: "7-10 ans" },
            { a: "Plus de 10 ans" },
        ]
    },
    {
        question: "Êtes-vous freelance ou salarié(e) ?",
        answer: [
            { a: "Freelance" },
            { a: "Salarié(e)" },
        ]
    },
    {
        question: "Travaillez-vous en équipe ou en solo ?",
        answer: [
            { a: "En équipe" },
            { a: "En solo" },
        ]
    },
    {
        question: "Si vous travaillez en équipe, combien de personnes sont dans votre équipe ?",
        answer: [
            { a: "Moins de 2 personnes" },
            { a: "2-5 personnes" },
            { a: "6-10 personnes" },
            { a: "11-20 personnes" },
            { a: "Plus de 20 personnes" },
        ]
    },
    {
        question: "Quelle est la taille de l'entreprise pour laquelle vous travaillez ?",
        answer: [
            { a: "Moins de 10 employés" },
            { a: "10-50 employés" },
            { a: "51-200 employés" },
            { a: "201-500 employés" },
            { a: "Plus de 500 employés" },
        ]
    },
    {
        question: "Combien d'heures travaillez-vous par semaine en moyenne ?",
        answer: [
            { a: "Moins de 20 heures" },
            { a: "20-30 heures" },
            { a: "31-40 heures" },
            { a: "41-50 heures" },
            { a: "Plus de 50 heures" },
        ]
    },
    {
        question: "Quelle est la principale industrie dans laquelle vous travaillez ?",
        answer: [
            { a: "Technologie de l'information" },
            { a: "Finance" },
            { a: "Santé" },
            { a: "Éducation" },
            { a: "Autre" },
        ]
    },

    // Technologies et méthodes :
    {
        multiple: true,
        question: "Quel(s) langage(s) de programmation utilisez-vous principalement ? (Cochez tout ce qui s'applique)",
        answer: [
            { a: "JavaScript" },
            { a: "Python" },
            { a: "Java" },
            { a: "C#" },
            { a: "Ruby" },
            { a: "PHP" },
            { a: "C++" },
            { a: "Dart" },
            { a: "TypeScript" },
            { a: "Autre(s)" },
        ]
    },
    {
        question: "Êtes-vous développeur front-end, back-end, ou full-stack ?",
        answer: [
            { a: "Front-end" },
            { a: "Back-end" },
            { a: "Full-stack" },
        ]
    },
    {
        multiple: true,
        question: "Quel type de développement faites-vous principalement ?",
        answer: [
            { a: "Développement mobile" },
            { a: "Développement web" },
            { a: "Développement desktop" },
            { a: "Développement cloud" },
            { a: "Autre(s)" },
        ]
    },
    {
        multiple: true,
        question: "Quels outils de gestion de projet utilisez-vous principalement ?",
        answer: [
            { a: "Jira" },
            { a: "Trello" },
            { a: "Asana" },
            { a: "GitHub Projects" },
            { a: "GitLab Projects" },
            { a: "Autre(s)" },
        ]
    },
    {
        question: "Utilisez-vous des méthodes de développement agile ?",
        answer: [
            { a: "Oui, toujours" },
            { a: "Oui, parfois" },
            { a: "Non" },
        ]
    },

    // Satisfaction et bien-être :
    {
        question: "Quel est votre niveau de satisfaction avec votre travail actuel ?",
        answer: [
            { a: "Très satisfait(e)" },
            { a: "Satisfait(e)" },
            { a: "Neutre" },
            { a: "Insatisfait(e)" },
            { a: "Très insatisfait(e)" },
        ]
    },
    {
        question: "À quel point vous sentez-vous stressé par votre travail ?",
        answer: [
            { a: "Pas du tout stressé(e)" },
            { a: "Moyennement stressé(e)" },
            { a: "Très stressé(e)" },
            { a: "Extrêmement stressé(e)" },
        ]
    },
    {
        question: "Comment évaluez-vous votre équilibre travail-vie personnelle ?",
        answer: [
            { a: "Excellent" },
            { a: "Bon" },
            { a: "Acceptable" },
            { a: "Mauvais" },
            { a: "Très mauvais" },
        ]
    },
    {
        question: "Quelle est votre principale source de motivation dans votre travail ?",
        answer: [
            { a: "Apprentissage et développement personnel" },
            { a: "Salaire et avantages" },
            { a: "Environnement de travail" },
            { a: "Reconnaissance et valorisation" },
            { a: "Autre" },
        ]
    },

    // Objectifs professionnels :
    {
        question: "Quel est votre principal objectif professionnel pour l'année à venir ?",
        answer: [
            { a: "Acquérir de nouvelles compétences" },
            { a: "Obtenir une promotion" },
            { a: "Changer d'emploi" },
            { a: "Travailler sur des projets plus intéressants" },
            { a: "Autre" },
        ]
    },

    // Questions personnelles et sportives :
    {
        question: "Pratiquez-vous régulièrement une activité sportive ?",
        answer: [
            { a: "Oui, tous les jours" },
            { a: "Oui, plusieurs fois par semaine" },
            { a: "Oui, une fois par semaine" },
            { a: "Rarement" },
            { a: "Jamais" },
        ]
    },
    {
        multiple: true,
        question: "Quel type de sport pratiquez-vous principalement ?",
        answer: [
            { a: "Course à pied" },
            { a: "Natation" },
            { a: "Cyclisme" },
            { a: "Musculation" },
            { a: "Football" },
            { a: "Basket" },
            { a: "Autre(s)" },
        ]
    },
    {
        question: "Quel est votre sport préféré ?",
        answer: [
            { a: "Course à pied" },
            { a: "Natation" },
            { a: "Cyclisme" },
            { a: "Musculation" },
            { a: "Football" },
            { a: "Basket" },
            { a: "Autre" },
        ]
    },
]
