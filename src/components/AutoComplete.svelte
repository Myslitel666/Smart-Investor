<script>
    let isOpen = false;          // Состояние открытия/закрытия списка
    let selectedOption = "Years";  // По умолчанию выбранный элемент
    let options = ["Years", "Months"];  // Опции для выбора
  
    // Функция для открытия/закрытия списка
    function toggleDropdown() {
      isOpen = !isOpen;
    }
  
    // Функция для выбора опции
    function selectOption(option) {
      selectedOption = option;
      isOpen = false;
    }
  </script>
  
  <div class="dropdown-container">
    <!-- Элемент, который заменяет заголовок select -->
    <div class="dropdown-header" on:click={toggleDropdown}>
      {selectedOption} <!-- Показ выбранного элемента -->
    </div>
  
    {#if isOpen}
      <!-- Список опций, который показывается при открытии -->
      <div class="dropdown-list">
        {#each options as option}
          <div class="dropdown-item" on:click={() => selectOption(option)}>
            {option}
          </div>
        {/each}
      </div>
    {/if}
  </div>
  
  <style>
    .dropdown-container {
      position: relative;
      width: 100%;
    }
  
    .dropdown-header {
      padding: 10px;
      background-color: #f0f0f0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      height: 1.5rem;
    }
  
    .dropdown-list {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #fff;
      border: none;
      border-radius: 4px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 10;
    }
  
    .dropdown-item {
      padding: 10px;
      cursor: pointer;
    }
  
    .dropdown-item:hover {
      background-color: #f1f1f1;
    }
  </style>
  