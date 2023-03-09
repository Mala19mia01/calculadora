let operando1 = 0;
let operando2 = 0;
let operacionActual = "";

function agregarNumero(numero) {
    const display = document.getElementById("display");
    display.value += numero;
}

function borrar() {
    const display = document.getElementById("display");
    display.value = "";
    operando1 = 0;
    operando2 = 0;
    operacionActual = "";
}

function operacion(op) {
    const display = document.getElementById("display");
    operacionActual = op;
    operando1 = parseFloat(display.value);
    display.value = "";
}

function calcular() {
    const display = document.getElementById("display");
    operando2 = parseFloat(display.value);
    let resultado = 0;
    switch (operacionActual) {
        case "+":
            resultado = operando1 + operando2;
            break;
        case "-":
            resultado = operando1 - operando2;
            break;
        case "*":
            resultado = operando1 * operando2;
            break;
        case "/":
            resultado = operando1 / operando2;
            break;
        default:
            break;
    }
    display.value = resultado;
}
