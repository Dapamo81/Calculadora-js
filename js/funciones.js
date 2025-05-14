// Espera que la estructura html este lista antes de empezar a trabajar con los elementos.

document.addEventListener('DOMContentLoaded', () => {

    // Mostrar ocultar calculadora

    const botonMostrar = document.getElementById('botonMostrar');
    const calculadoraContainer = document.getElementById('calculadoraContainer');

    botonMostrar.addEventListener('click', () => {
    calculadoraContainer.classList.toggle('show');
    botonMostrar.textContent = calculadoraContainer.classList.contains('show') ? 'Ocultar Calculadora' : 'Mostrar Calculadora';
    });













    

});