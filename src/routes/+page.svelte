<script>
	import { ThemeProvider,
			TextField,
			Button
	} from "svelte-elegant";
	import AutoComplete from "../components/AutoComplete.svelte";

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
			<div class = 'row'>
				<TextField 
					label = 'Deposit' 
					primaryColor = {primary}
					backgroundColor = 'white'
					width = '100%'
				/>
				<img src = './icons/shutterstock_2069344.png' class = 'ico'/>
			</div>
			<div class = 'row'>
				<TextField 
					label = 'Income' 
					primaryColor = {primary}
					backgroundColor = 'white'
					width = '100%'
				/>
				<img src = './icons/percent.png' class = 'ico'/>
			</div>
			<div 
				class = 'row'
				style:margin-top = '0.1rem'
			>
				<TextField 
					label = 'Investment Term' 
					primaryColor = {primary}
					backgroundColor = 'white'
					width = '60%'
				/>
				<AutoComplete width = '40%'/>
			</div>
			<div 
				class = 'row'
				style:margin-top = '0.5rem'
			>
				<button 
					class = 'calculate-button'
					style:background-color = {primary}
				>
					<p style:color = 'white'>GET RESULT</p>
				</button>
			</div>
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
		margin-top: 0.5rem;
		padding: 1rem;
		display: flex;
		flex-direction: column; /* Располагает элементы вертикально */
		align-items: center; /* Опционально: центрирует элементы по горизонтали */
		width: 650px;
		border: solid #d2d2d2 1px;
		background-color: #fafafa;
		border-radius: 7px;
		gap: 0.2rem
	}

	.row {
		display: flex;
		flex-direction: row; /* Элементы располагаются горизонтально (в строку) */
		align-items: center; /* Центрирует элементы по вертикали */
		gap: 0.5rem; /* Отступ между TextField и иконкой */
		width: 100%;
  	}

	.calculate-button {
		width: 100%;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		transition: filter 0.3s;
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
		margin-bottom: 0.5rem;
	}

	.logo:hover {
		cursor: pointer;
		transform: scale(1.2);
	}

	.calculate-button:hover {
		filter: brightness(1.25);
	}

	.ico {
		width: 3.75rem;
	}

	@media (max-width: 725px) {
		.main-box {
			width: 100%; /* Ширина main-box станет 100% на экранах меньше 768px */
		}

		.content {
			padding-left: 1rem;
			padding-right: 1rem;
		}
	}
</style>