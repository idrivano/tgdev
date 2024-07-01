<script>
	// @ts-nocheck
    import { goto } from "$app/navigation";
    import { quiz } from '$lib/quiz.js';
	import toast, { Toaster } from 'svelte-french-toast';

    let i = 0;
    let currentQuestion = quiz[i];
    let answers = new Array(quiz.length).fill(null);
    let selectedAnswers = new Set();
    let answerSelected = false;
	let selectedAnswerText = '';

    const handlePrev = () => {
        if (i > 0) {
            i--;
            currentQuestion = quiz[i];
            selectedAnswers = new Set(answers[i] || []);
            answerSelected = selectedAnswers.size > 0;
			selectedAnswerText = Array.from(selectedAnswers).map(ans => `<li class="text-info">${ans}</li>`).join('');
        }
    };

    const handleNext = () => {
        if (i < quiz.length - 1) {
            if (currentQuestion.multiple) {
                answers[i] = Array.from(selectedAnswers);
            } else {
                answers[i] = Array.from(selectedAnswers)[0];
            }
            i++;
            currentQuestion = quiz[i];
            selectedAnswers = new Set(answers[i] || []);
            answerSelected = selectedAnswers.size > 0;
			selectedAnswerText = Array.from(selectedAnswers).map(ans => `<li class="text-info">${ans}</li>`).join('');
        }
    };

    const submitQuiz = async () => {
		if (currentQuestion.multiple) {
			answers[i] = Array.from(selectedAnswers);
		} else {
			answers[i] = Array.from(selectedAnswers)[0];
		}

		const requestBody = {
			salary: answers[0], experience: answers[1], employment_type: answers[2],
			team_status: answers[3], team_size: answers[4], company_size: answers[5],
			weekly_hours: answers[6], industry: answers[7], languages: answers[8],
			dev_type: answers[9], development_type: answers[10], project_tools: answers[11],
			agile_methods: answers[12], job_satisfaction: answers[13], job_stress: answers[14],
			work_life_balance: answers[15], job_motivation: answers[16], professional_goal: answers[17],
			sport_activity: answers[18], main_sport: answers[19], favorite_sport: answers[20],
		};

		// Vérifier que toutes les valeurs sont présentes
		for (const [key, value] of Object.entries(requestBody)) {
			if (value == null) {
				console.error(`Missing value for ${key}`);
				toast.error(`Veuillez remplir le champ ${key}`);
				return;
			}
		}

		try {
			const response = await fetch('https://tgdev.pythonanywhere.com/api/submit-quiz/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(requestBody),
			});

			if (response.ok) {
				toast.success("Enquête terminée avec succès, merci de votre participation !");
                await goto('/');
				location.reload();
			} else {
				console.error('Erreur lors de l\'envoi des données :', response.status, response.statusText);
				toast.error("Erreur lors de l'envoi. Réessayer!");
			}
		} catch (error) {
			console.error("Une erreur s'est produite lors de l'envoi des données :", error);
		}
	};


    const selectAnswer = (answer) => {
        if (currentQuestion.multiple) {
            if (selectedAnswers.has(answer)) {
                selectedAnswers.delete(answer);
            } else {
                selectedAnswers.add(answer);
            }
        } else {
            selectedAnswers = new Set([answer]);
        }
        answerSelected = selectedAnswers.size > 0;
		selectedAnswerText = Array.from(selectedAnswers).map(ans => `<li class="text-info">${ans}</li>`).join('');
    };

    const isAnswerSelected = (answer) => selectedAnswers.has(answer);
</script>

<svelte:head>
    <title>Home - TGDev Enquête</title>
    <meta name="description" content="TGDev Enquête" />
</svelte:head>

<section>
    <h1 class="text-danger">TGDev</h1>
    <h3>Enquête pour les Développeur Togolais </h3>

	<div class="container px-2 text-center">
		<div class="row gx-2 mb-5">
			{#each quiz as question, index}
				{#if currentQuestion === question}
					<h4 class="text mt-3 mb-5"><li>{question.question}</li></h4>

					{#each question.answer as answer}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div class="col-6 mb-3 p-3 alert alert-secondary" on:click={() => selectAnswer(answer.a)}>
							<div class:selected={isAnswerSelected(answer.a)}>
								{answer.a}
							</div>
						</div>
					{/each}

					{#if selectedAnswerText}
						<div class="row">
							<div class="col-12">
								Votre réponse est : {@html selectedAnswerText}
							</div>
						</div>
					{/if}
				{/if}
			{/each}
		</div>

		<div class="row">
			<div class="row gx-2">
				{#if i > 0}
					<button class="btn btn-warning btn-lg col-6" type="button" on:click={handlePrev}>Précédent</button>
				{/if}
				{#if i < quiz.length - 1}
					<button class="btn btn-primary btn-lg col-6" type="button" on:click={handleNext} disabled={!answerSelected}>Suivant</button>
				{:else}
					<div class="d-grid mt-3 mb-5">
						<button class="btn btn-success btn-lg" type="button" on:click={submitQuiz} disabled={!answerSelected}>Envoyer</button>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
