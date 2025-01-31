const menu = document.getElementById('menu');

function toggleMenu() {
    menu.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !document.querySelector('.burger').contains(event.target)) {
        menu.classList.remove('active');
    }
});
