// Espera que la estructura html este lista antes de empezar a trabajar con los elementos.

document.addEventListener('DOMContentLoaded', () => {

    // Mostrar ocultar calculadora

    const botonMostrar = document.getElementById('botonMostrar');
    const calculadoraContainer = document.getElementById('calculadoraContainer');

    botonMostrar.addEventListener('click', () => {
    calculadoraContainer.classList.toggle('show');
    botonMostrar.textContent = calculadoraContainer.classList.contains('show') ? 'Ocultar Calculadora' : 'Mostrar Calculadora';
    });

    //variables

    const display = document.getElementById('display');
    const botones = document.querySelectorAll('.botones button');

    let entradaActual = '0';      // Lo que se muestra en la pantalla
    
    // para actualizar el display
    function updateDisplay() {
        display.textContent = entradaActual;
    }

    // para introducir los numeros 
    function introducirNumero(num) {
    if (entradaActual === '0' || entradaActual === 'Error') {
        entradaActual = num;
    } else {
        entradaActual += num;
    }
    updateDisplay();
    }
    
    // para asignar los numeros a los botones
    botones.forEach(btn => {
        const id = btn.id;
        const classList = btn.classList;

        if (id >= '0' && id <= '9') {
            // Números
            btn.addEventListener('click', () => {
                introducirNumero(id);
            });       
        }
    });
















});