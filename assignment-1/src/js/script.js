function toggleSelect() {
    const dropdown = document.querySelector('[data-select-dropdown]');
    const toggler = document.querySelector('[data-select-toggler]');
    const openClass = 'select__dropdown--open';

    const isExpanded = dropdown.classList.toggle(openClass);
    toggler.setAttribute('aria-expanded', isExpanded);
}