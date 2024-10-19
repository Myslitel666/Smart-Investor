<script lang='ts'>
    let isOpen = false;          // Состояние открытия/закрытия списка
    let selectedOption = "Years";  // По умолчанию выбранный элемент
    let options = ["Years", "Months"];  // Опции для выбора
    let autoCompleteRef: HTMLElement;

    export let width = '100%';
  
    // Функция для открытия/закрытия списка
    function toggleDropdown() {
        isOpen = !isOpen;
    }
  
    // Функция для выбора опции
    function selectOption(option) {
        selectedOption = option;
        isOpen = false;
    }

    // Функция, которая будет вызвана при клике вне AutoComplete
    function handleClickOutside(event: MouseEvent) {
        let node = event.target as Node;

        if (autoCompleteRef && !autoCompleteRef.contains(node)) {
            isOpen ? toggleDropdown() : ''
            document.removeEventListener('mousedown', handleClickOutside); //Удаляем обработчик из root после утраты фокуса AutoComplete
        }
    }
</script>
  
<div 
    class="dropdown-container"
    style:width = {width}
>
<!-- Элемент, который заменяет заголовок select -->
<div 
    class="dropdown-header"
    on:click={toggleDropdown}
    bind:this={autoCompleteRef}
    on:mousedown={()=>{
        document.addEventListener('mousedown', handleClickOutside);
    }}
>
    {selectedOption} <!-- Показ выбранного элемента -->
</div>

{#if isOpen}
    <!-- Список опций, который показывается при открытии -->
    <div 
        class="dropdown-list"
        style:width = {width}
    >
    {#each options as option}
        <div 
            class="dropdown-item" 
            on:mousedown={() => selectOption(option)}>
        {option}
        </div>
    {/each}
    </div>
{/if}
</div>
  
  <style>
    .dropdown-container {
        position: relative;
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
  