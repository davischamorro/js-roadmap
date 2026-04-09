/**
 * 🟡 Reto: Filtrar y Analizar Números
 * 
 * 📌 Descripción
 * Desarrollar una aplicación en JavaScript que permita ingresar una serie de números y
 * realizar un análisis basado en el promedio, filtrando aquellos valores que cumplan una condición específica.
 * 
 * El objetivo es reforzar el uso de funciones, la transformación de datos y la separación de responsabilidades.
 * 
 * 🎯 Objetivo
 * Dado un conjunto de 8 números ingresados por el usuario, el sistema debe:
 * - Calcular el promedio
 * - Crear un nuevo array con los números mayores al promedio
 * - Mostrar los resultados en pantalla
 * 
 * ⚙️ Requisitos
 * - Permitir al usuario ingresar exactamente 8 números
 * - Al completar los 8 números:
 *   - Deshabilitar el ingreso
 *   - Calcular el promedio
 *   - Generar un nuevo array con los números mayores al promedio
 *   - Mostrar:
 *       - El array original
 *       - El promedio
 *       - El nuevo array filtrado
 * 
 * - Si no existen números mayores al promedio:
 *   - Mostrar un mensaje indicando que no hay resultados
 * 
 * ⚠️ Reglas
 * ❌ No usar métodos avanzados (filter, map, reduce, sort)
 * ❌ No mezclar lógica con manipulación del DOM dentro de las funciones
 * ❌ No repetir lógica innecesaria
 * ✅ Usar for para recorrer el array
 * ✅ Usar funciones separadas
 * ✅ Usar return correctamente
 * ✅ Las funciones deben recibir el array como parámetro
 * 
 * 🚀 Bonus (Opcional)
 * - Contar cuántos números son mayores al promedio
 */

const btnSave = document.querySelector('#save-button');
const btnReset = document.querySelector('#reset-button');
const inputNumber = document.querySelector('#number-input');
const message = document.querySelector('#message');
const newMessage = document.querySelector('#newMessage');

let numbers = [];

resetUI("start");

btnSave.addEventListener('click', saveNumber);
btnReset.addEventListener('click', reset);

function saveNumber() {
    const entered = getValidNumber(inputNumber, message, "Digite un numero");
    if (entered === null) return;

    numbers.push(entered);
    inputNumber.value = '';

    if (numbers.length === 8) {
        resetUI("save");
        let avge = avg(numbers);
        let newArray = arrayFilter(numbers, avge);
        newArray.length > 0 ?
            newMessage.textContent = `
                Promedio: ${avge}
                \nCantidad mayores al promedio: ${newArray.length}
                \nMayores al promedio: [${newArray.join(', ')}]` :
            newMessage.textContent =
            `Promedio: ${avge}
                \nno hay mas resultados`;
    }
    message.textContent = `[${numbers.join(', ')}]`;
}

function reset() {
    resetUI("reset");
    numbers = [];
    message.textContent = '';
    newMessage.textContent = '';
}

function avg(array) {
    let sum = 0;
    for (let number of array) {
        sum += number
    }
    return sum / array.length;
}

function arrayFilter(array, avge) {
    let newArray = [];
    for (let number of array) {
        if (number > avge) {
            newArray.push(number)
        }
    }
    return newArray;
}

function getValidNumber(input, errorContainer, errorMessage) {
    const textValue = input.value.trim();
    if (textValue === '') {
        errorContainer.textContent = errorMessage;
        return null;
    }

    const number = Number(textValue);
    if (isNaN(number)) {
        errorContainer.textContent = "No es un número"
        return null;
    }

    return number;
}

/**
 * 
 * @param {'start' | 'save' | 'reset'} action 
 */
function resetUI(action) {
    const option = action.toLowerCase();

    switch (option) {
        case 'start':
            btnReset.disabled = true;
            break;
        case 'save':
            btnReset.disabled = false;
            btnSave.disabled = true;
            inputNumber.disabled = true;
            break;
        case 'reset':
            btnReset.disabled = true;
            btnSave.disabled = false;
            inputNumber.disabled = false;
            break;
        default:
            console.warn(`No es una opcion: ${action}`);
    }
}

document.querySelectorAll('.numeric-only').forEach(input => {
    input.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^0-9-]/g, "");
    });
});