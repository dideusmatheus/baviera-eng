// Toggle do menu lateral
document.getElementById('hamburgerMenu').addEventListener('click', function(event) {
    event.stopPropagation(); // Impede que o clique se propague para o listener do document
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('open');
});

// Fechar o menu quando clicar em um item do menu lateral
const sideMenuOptions = document.querySelectorAll('.side-menu-option');
sideMenuOptions.forEach(option => {
    option.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique se propague
        document.getElementById('sideMenu').classList.remove('open');
    });
});

// Fechar o menu quando clicar fora do menu lateral
document.addEventListener('click', function(event) {
    const sideMenu = document.getElementById('sideMenu');
    const menuButton = document.getElementById('hamburgerMenu');
    
    // Se o clique for fora do sideMenu e do botão, fecha o menu
    if (!sideMenu.contains(event.target) && !menuButton.contains(event.target)) {
        sideMenu.classList.remove('open');
    }
});
