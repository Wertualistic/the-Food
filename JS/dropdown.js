const dropdown = document.querySelector('#dropdown');
const arrow = document.querySelector('#arrow');
const dropdownOpen = document.querySelector('#dropdownopen');

dropdown.addEventListener('click', () => {
    dropdownOpen.classList.toggle('close');
    arrow.classList.toggle("transform");
})