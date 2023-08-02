const dropdown = document.querySelector('#dropdown');
const arrow = document.querySelector('#arrow');
const dropdownOpen = document.querySelector('#dropdownopen');
const dropdown1 = document.querySelector('#dropdown1');
const arrow1 = document.querySelector('#arrow1');
const dropdownOpen1 = document.querySelector('#dropdownopen1');

dropdown.addEventListener('click', () => {
    dropdownOpen.classList.toggle('close');
    arrow.classList.toggle("transform");
})

dropdown1.addEventListener('click', () => {
    dropdownOpen1.classList.toggle('close');
    arrow1.classList.toggle("transform");
})