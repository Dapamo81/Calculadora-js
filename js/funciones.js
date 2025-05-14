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
    let primerOperador= null;
    let operador= null;
    let esperandoSegundoOperador = false;
    
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

    // Función para realizar la operación
    function calcular() {
        if (operador && primerOperador !== null) {
            const segundoOperador = parseFloat(entradaActual);
            let resultado = 0;
            switch (operador) {
                case '+':
                    resultado = primerOperador + segundoOperador;
                    break;
                case '-':
                    resultado = primerOperador - segundoOperador;
                    break;
                case '*':
                    resultado = primerOperador * segundoOperador;
                    break;
                case '/':
                    if (segundoOperador === 0) {
                        entradaActual = 'Error';
                        updateDisplay();
                        return;
                    } else {
                        resultado = primerOperador / secondOperand;
                    }
                    break;
                case 'power':
                    resultado = Math.pow(primerOperador, segundoOperador);
                    break;
            }
            entradaActual = resultado.toString();
            primerOperador = null;
            operador = null;
            esperandoSegundoOperador = false;
            updateDisplay();
        }
    }

    // para introducir los operadores
    function setOperator(op) {
        if (esperandoSegundoOperador) {
            // Si ya hay un primer operando y se presiona otro operador, calcular primero
            calcular();
        }
        primerOperador = parseFloat(entradaActual);
        operador = op;
        esperandoSegundoOperador = true;
        entradaActual = '0';
    }

    //para el boton igual
    function igual() {
        if (operador) {
            calcular();
        }
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
        }else if (classList.contains('operador')) {
            // Operadores
            const op = btn.getAttribute('data-op');
            btn.addEventListener('click', () => {
                setOperator(op);
            });
        }else if (id === 'igual') {
        btn.addEventListener('click', () => {
            igual();
        });}

    });
















});