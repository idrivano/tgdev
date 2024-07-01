<script>
	import './styles.css';
	import toast, { Toaster } from 'svelte-french-toast';
</script>

<div class="app">
	<Toaster />

	<main class="container mt-5">
		<slot />
	</main>

	<footer class="container mt-5">
		<p class="px-2 text-center">
			&copy; 2024 All rights reserved by 
			<a href="https://adams-ebon.vercel.app/" target="_blank">Adams.</a>
		</p>
	</footer>
</div>
