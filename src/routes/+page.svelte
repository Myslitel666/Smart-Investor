<script>
  let isOpen = false;

  function toggleDropdown() {
    isOpen = true;
  }

  function closeDropdown(index) {
    isOpen = false;
    durationIndex = index;
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

  let durationUnits = ["Years", "Months"];
  let durationIndex = 0;
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
        {durationUnits[durationIndex]}
      </summary>
      {#if isOpen}
        <ul
          class="menu dropdown-content bg-base-100 rounded-box z-[1] {wInput} p-2 shadow"
        >
          {#each durationUnits as unit, index}
            <li><a on:click={() => closeDropdown(index)}>{unit}</a></li>
          {/each}
        </ul>
      {/if}
    </details>

    <style>
    </style>
  </div>
</div>
