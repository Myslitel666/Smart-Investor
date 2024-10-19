<script>
	import { ThemeProvider,
			TextField
	} from "svelte-elegant";

	let primary = '#0074e1'
</script>

<ThemeProvider>
	<div class = 'header'>
		<img src = './USD-Coin-Logo-PNG-Images1.png' class = 'logo'>
		<p class = 'logo-p'>
			<span style:color={primary}>
				Smart
			</span> 
			Investor
		</p>
	</div>
	<div class = 'content'>
		<div class = 'main-box'>
			<img src = './smart-investor-logo.png' class = 'box-logo'/>
			<TextField 
				label = 'Deposit' 
				primaryColor = {primary}
			/>
		</div>
	</div>
</ThemeProvider>

<style>
	.header {
		height: 4rem;
		display: flex;
		align-items: center; /* Центрирует по вертикали */
	}

	.content {
		display: flex;
		justify-content: center; /* Центрирует по горизонтали */
	}

	.main-box {
		padding: 1rem;
		display: flex;
		flex-direction: column; /* Располагает элементы вертикально */
		align-items: center; /* Опционально: центрирует элементы по горизонтали */
		width: 35rem;
		border: solid #d2d2d2 1px;
		background-color: #fafafa;
		border-radius: 7px;
		gap: 1rem; /* Вертикальный отступ */
	}

	.logo {
		margin-left: 0.5rem;
		width: 4.25rem;
		height: 4.25rem;
		transition: transform 0.5s;
	}

	.logo-p {
		margin-left: 0.5rem;
		font-size: 26px;
		color: #383838;
	}

	.box-logo {
		width: 6.25rem;
		height: 6.25rem;
		border-radius: 50%;
	}

	.logo:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
</style>