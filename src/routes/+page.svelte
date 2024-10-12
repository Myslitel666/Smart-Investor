<script>
  let isOpen = false;

  function toggleDropdown() {
    isOpen = true;
  }

  function closeDropdown() {
    isOpen = false;
  }

  function handleInput(event) {
    // Удаляем все символы, кроме цифр
    event.target.value = event.target.value.replace(/\D/g, "");
  }

  let m = 2;
  let mb = `mb-${m}`;
  let mr = `mr-${m}`;
  let wLabel = `w-52`;
  let wInput = `w-40`;
</script>

<div class={`p-${m}`}>
  <div class="flex items-center {mb}">
    <p class="{wLabel} text-right {mr}">Deposit amount:</p>
    <!-- Установим фиксированную ширину для метки -->
    <input
      on:input={handleInput}
      type="text"
      placeholder="100 000"
      class="input input-bordered {wInput} {mr}"
    />
    <p>₽</p>
  </div>
  <div class="flex items-center {mb}">
    <p class="{wLabel} text-right {mr}">Income:</p>
    <!-- Установим фиксированную ширину для метки -->
    <input
      on:input={handleInput}
      type="text"
      placeholder="20"
      class="input input-bordered {wInput} {mr}"
    />
    <p>%</p>
  </div>
  <div class="flex items-center {mb}">
    <p class="{wLabel} text-right {mr}">Duration of the investment:</p>
    <!-- Установим фиксированную ширину для метки -->
    <input
      on:input={handleInput}
      type="text"
      placeholder="1"
      class="input input-bordered {wInput} {mr}"
    />

    <details class="dropdown">
      <summary class="btn {wInput}" on:click={toggleDropdown}>
        open or close
      </summary>
      {#if isOpen}
        <ul
          class="menu dropdown-content bg-base-100 rounded-box z-[1] {wInput} p-2 shadow"
        >
          <li><a on:click={closeDropdown}>Years</a></li>
          <li><a on:click={closeDropdown}>Months</a></li>
        </ul>
      {/if}
    </details>

    <style>
    </style>
  </div>
</div>
