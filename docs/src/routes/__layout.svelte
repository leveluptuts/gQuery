<script>
	import '../app.css';
</script>

<main>
	<aside>
		<h1>gQuery</h1>
		<a href="https://github.com/leveluptuts/gQuery" target="_blank">
			<svg viewBox="0 0 24 24" class="svelte-bpn430" style="width: 40px;"
				><path
					fill="white"
					stroke="white"
					d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
				/></svg
			>
		</a>
		<nav>
			<h5>Docs</h5>
			<a href="#how-to-use">How To Use</a>
			<a href="#examples">Examples</a>

			<h5>Links</h5>
			<a href="https://github.com/leveluptuts/gQuery/tree/main/example" target="_blank"
				>Example Repo</a
			>
			<a href="https://leveluptutorials.com/" target="_blank">Level Up Tutorials</a>
		</nav>
	</aside>
	<section>
		<slot />
	</section>
</main>

<style>
	main {
		display: grid;
		grid-template-columns: 20% 80%;
		color: white;
		min-height: 100vh;
		background: rgba(0, 0, 0, 0.8);
		position: relative;
	}

	aside {
		padding: 1.5rem 2.5rem;
		top: 0;
		position: sticky;
		height: 100vh;
	}

	section {
		padding: 1.5rem 2.5rem;
	}

	h1 {
		margin-bottom: 0;
	}

	svg {
		margin: 1rem 0 4rem;
	}

	nav {
		display: flex;
		flex-direction: column;
	}

	nav a {
		margin-bottom: 1rem;
	}
</style>
