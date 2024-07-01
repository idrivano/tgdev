# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Explication

1 Variables et importations :
- i : Indice de la question actuelle.
- currentQuestion : La question actuellement affichée.
- answers : Tableau pour stocker les réponses des utilisateurs.
- selectedAnswers : Set pour stocker les réponses sélectionnées.
- answerSelected : Booléen pour indiquer si une réponse a été sélectionnée.
- selectedAnswerText : Texte HTML des réponses sélectionnées.

2 Fonctions de navigation :
- handlePrev : Permet de revenir à la question précédente.
- handleNext : Permet d'aller à la question suivante.

3 Fonction de soumission :
- submitQuiz : Prépare les données à envoyer et les soumet à l'API.

4 Sélection de réponse :
- selectAnswer : Permet de sélectionner une réponse.
- isAnswerSelected : Vérifie si une réponse est sélectionnée.

5 HTML :
#each : Boucle pour afficher les questions et leurs réponses.
#if : Conditions pour afficher le bouton suivant ou envoyer selon la progression dans le quiz.