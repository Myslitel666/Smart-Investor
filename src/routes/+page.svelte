<script lang='ts'>
	import { ThemeProvider,
			TextField,
			Switch
	} from "svelte-elegant";
	import AutoComplete from "../components/AutoComplete.svelte";

	//Styles
	let primary = '#0074e1'

	//Functions
	let deposit = ''
	let rate = ''
	let term = ''
	let timeUnits = 'Years'
	let replenishmentAmount = ''
	let isReplenishable = false;

	//Result
	let error = false
	let result = ''

	// Функция для форматирования числа с пробелами
    function handleInput(str: string) {
        str = str.replace(/[^\d.,]/g, ''); // Убираем все нецифровые символы
		str = str.replace(',','.') // Заменяем запятые на точки\
		const firstDotIndex = str.indexOf('.'); //Запоминаем индекс точки, если он есть
		str = str.slice(0, firstDotIndex + 1) + str.slice(firstDotIndex + 1).replace(/\./g, ''); //Запрещаем ввод нескольких точек
		
		return str;
    }

	function getResult() {
		if (!(deposit)||!(term)||!(rate)) {
			error = true;

			// Сбрасываем error через 3 секунды
			setTimeout(() => {
				error = false;
			}, 2250); // 3000 мс = 3 секунды
		}
		else {
			error = false;
			
			const P = parseFloat(deposit); // Начальная сумма
            const r = parseFloat(rate) / 100; // Годовая ставка в десятичной форме
            const t = parseFloat(term); // Срок
			let a = parseFloat(replenishmentAmount); // Сумма пополнения
			let n = 12; // Проценты начисляются ежемесячно

			console.log(a);
			if (Number.isNaN(a)) {
				a = 0;
			}

            if (timeUnits === "Months") {
                n = 1; // Если месяцы, то начисляем 1 раз в месяц
            }

			let finallySum = P;
			// Цикл for для расчета сложного процента
			for (let i = 0; i < n * t; i++) {
                finallySum *= (1 + r/12); // Применяем формулу сложного процента для каждого периода
				finallySum += a; // Добавляем сумму пополнения
            }
            result = finallySum.toFixed(2); // Форматируем результат до 2 знаков после запятой
		}
	}
</script>

<ThemeProvider>
	<div class = 'header'>
		<button 
			onclick = {()=>{
				deposit = '100000'
				rate = '20'
				term = '1'
				isReplenishable = true
				replenishmentAmount = '20000'
				timeUnits = "Years"
			}}
		>
			<img src = './USD-Coin-Logo-PNG-Color.png' class = 'logo'>
			<p class = 'logo-p'>
				<span style:color={primary}>
					Smart
				</span> 
				Investor
			</p>
		</button>
	</div>
	<div class = 'content'>
		<div 
			class = 'main-box'
			style:margin-top = 0.25rem
			style:border = 'solid #d2d2d2 1px'
			style:background-color = #fafafa
		>
			<img src = './smart-investor-logo.png' class = 'box-logo'/>
			{#if error}
				<p class = 'message'>✘Enter the data</p>
			{/if}
			<div class = 'row'>
				<TextField 
					bind:value = {deposit} 
					oninput = {()=>{deposit = handleInput(deposit)}}
					label = 'Deposit' 
					primaryColor = {primary}
					backgroundColor = 'white'
					width = '100%'
				/>
				<img src = './icons/shutterstock_2069344.png' class = 'ico'/>
			</div>
			<div class = 'row'>
				<TextField 
					bind:value = {rate}
					oninput = {()=>{rate = handleInput(rate)}}
					label = 'Interest Rate' 
					primaryColor = {primary}
					backgroundColor = 'white'
					width = '100%'
				/>
				<img src = './icons/percent.png' class = 'ico'/>
			</div>
			{#if isReplenishable}
				<div 
					class = 'row'
					style:margin-bottom = '0.33rem'
				>
					<TextField 
						bind:value = {replenishmentAmount}
						oninput = {()=>{replenishmentAmount = handleInput(replenishmentAmount)}}
						label = 'Replenishment amount' 
						primaryColor = {primary}
						backgroundColor = 'white'
						width = '100%'
					/>
					<img src = './icons/plus.png' style:width = '3.75rem'/>
				</div>
			{/if}
			<div 
				class = 'row'
				style:margin-top = '0.1rem'
			>
				<TextField 
					bind:value = {term}
					oninput = {()=>{term = handleInput(term)}}
					label = 'Investment Term' 
					primaryColor = {primary}
					backgroundColor = 'white'
					width = '60%'
				/>
				<AutoComplete 
					bind:selectedOption = {timeUnits}
					width = '40%'
				/>
			</div>
			<div 
				class = 'row'
				style:margin-top = '0.33rem'
			>
				<div 
					style:display = flex
					style:align-items = center 
					style:margin-left = auto
				>
					<p style:margin-right = 0.4rem>Replenishable deposit:</p>
					<Switch 
						bind:isChecked = {isReplenishable}
						color = {primary}
					/>
				</div>
			</div>
			<div 
				class = 'row'
				style:margin-top = '0.33rem'
			>
				<button 
					class = 'calculate-button'
					onclick = {getResult}
					style:background-color = {primary}
				>
					<p style:color = 'white'>GET RESULT</p>
				</button>
			</div>
			<div 
				class = 'row'
				style:margin-top = '0.5rem'
			>
				<button 
					class = 'clear-button'
					style:border-color = {primary}
					style:margin-bottom = 0.3rem
					onclick = {()=>{
						deposit = ''
						rate = ''
						term = ''
						result = ''
						replenishmentAmount = ''
						isReplenishable = false
						error = false
					}}
				>
					<p style:color = {primary}>CLEAR</p>
				</button>
			</div>
		</div>
		{#if result}
			<div 
				class = 'main-box'
				style:margin-top = 0.88rem
				style:border = 'solid #B0CAD2 1px'
				style:background-color = #F5FBFF
			>
				<div 
					class = 'row'
				>
					<p class = 'result' style:font-weight = 600>Result</p>
				</div>
				<div 
					class = 'row'
				>
					<p class = 'result'>The Final Amount: <strong style:font-weight='600'>{result} CU </strong> (Currency Unit)</p>
				</div>
			</div>
		{/if}
	</div>
</ThemeProvider>

<style>
	.header {
		height: 4rem;
		display: flex;
		align-items: center; /* Центрирует по вертикали */
	}

	.content {
		margin-left: 1rem;
		margin-right: 1rem;
		display: flex;
		flex-direction: column; /* Располагает элементы в колонку */
		align-items: center;
		justify-content: center; /* Центрирует по горизонтали */
	}

	.main-box {
		position: relative;
		padding: 1rem;
		display: flex;
		flex-direction: column; /* Располагает элементы вертикально */
		align-items: center; /* Опционально: центрирует элементы по горизонтали */
		width: 650px;
		border-radius: 7px;
		gap: 0.2rem
	}

	.row {
		display: flex;
		flex-direction: row; /* Элементы располагаются горизонтально (в строку) */
		justify-content: center;
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

	.clear-button {
		width: 100%;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 3rem;
		transition: filter 0.3s;
		border: solid 1px;
		transition: background-color 0.3s;
	}

	.clear-button:hover {
		background-color: #ebf5ff;
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

	.ico {
		width: 3.75rem;
	}

	.result {
		font-size: 16px;
		color: #115BA0
	}

	.message {
		position: absolute;
		color: #ee2f2f;
		left: 0;
		margin-top: 5.28rem;
		margin-left: 1rem;
	}

	.logo:hover {
		transform: scale(1.2);
	}

	.calculate-button:hover {
		filter: brightness(1.25);
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