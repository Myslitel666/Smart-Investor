<script>
  function handleInput(event) {
    // Удаляем все символы, кроме цифр
    event.target.value = event.target.value.replace(/\D/g, "");
  }
</script>

<div class="p-8">
  <div class="flex items-center mb-2">
    <p class="w-32 text-right mr-2">Deposit amount:</p>
    <!-- Установим фиксированную ширину для метки -->
    <input
      on:input={handleInput}
      type="text"
      placeholder="100 000"
      class="input input-bordered w-40"
    />
    <p class="ml-2">₽</p>
  </div>
  <div class="flex items-center">
    <p class="w-32 text-right mr-2">Income:</p>
    <!-- Установим фиксированную ширину для метки -->
    <input
      on:input={handleInput}
      type="text"
      placeholder="20"
      class="input input-bordered w-40"
    />
    <p class="ml-2">%</p>
  </div>
</div>

<details class="dropdown">
  <summary class="btn m-1">open or close</summary>
  <ul
    class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
  >
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</details>
