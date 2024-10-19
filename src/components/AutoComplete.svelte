<script lang='ts'>
    export let selectedOption = "Months";  // По умолчанию выбранный элемент
    let isOpen = false;          // Состояние открытия/закрытия списка
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

    <!-- Список опций, который показывается при открытии -->
    <div 
        class="dropdown-list"
        style:width = '100%'

        style:visibility = {isOpen ? '' : 'hidden'}
        style:opacity = {isOpen ? 1 : 0}
        style:transition = 'opacity 0.3s'
    >
    {#each options as option}
        <div 
            class="dropdown-item" 
            on:mousedown={() => selectOption(option)}>
        {option}
        </div>
    {/each}
    </div>
</div>
  
  <style>
    .dropdown-container {
        position: relative;
    }
  
    .dropdown-header {
        display: flex;
        justify-content: center; /* Центрирует по горизонтали */
        align-items: center;
        padding: 10px;
        background-color: #ebebeb;
        border: solid #ebebeb 3px;
        border-radius: 4px;
        cursor: pointer;
        height: 1.5rem;
        color: #303030;
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
        transition: background-color 0.3s;

        display: flex;
		justify-content: center; /* Центрирует по горизонтали */
    }
  
    .dropdown-item:hover {
        background-color: #ebf5ff;
    }
  </style>
  