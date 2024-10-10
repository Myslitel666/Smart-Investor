<script>
  function handleInput(event) {
    // Удаляем все символы, кроме цифр
    event.target.value = event.target.value.replace(/\D/g, "");
  }
</script>

<div class="p-4">
  <div class="flex items-center space-x-4">
    <p>Deposit amount:</p>
    <input
      on:input={handleInput}
      type="text"
      placeholder="100 000"
      class="input input-bordered w-30"
    />
    <p>₽</p>
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
