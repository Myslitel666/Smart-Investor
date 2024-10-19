<script>
	import { ThemeProvider } from "svelte-elegant";
</script>

<ThemeProvider>
	<div class = 'header'>
		<img src = './USD-Coin-Logo-PNG-Images.png' class = 'logo'>
	</div>
	<div class = 'content'>
		<img src = './smart-investor-logo.png' class = 'box-logo'>
	</div>
</ThemeProvider>

<style>
	.header {
		height: 4rem;
		background-color: #f9f9f9;
		display: flex;
		align-items: center; /* Центрирует по вертикали */
	}

	.content {
		display: flex;
		justify-content: center; /* Центрирует по горизонтали */
		height: 100vh;
	}

	.logo {
		margin-left: 0.5rem;
		width: 4.25rem;
		height: 4.25rem;
		transition: transform 0.5s;
	}

	.box-logo {
		margin-top: 1rem;
		width: 4.25rem;
		height: 4.25rem;
		border-radius: 50%;
	}

	.logo:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
</style>