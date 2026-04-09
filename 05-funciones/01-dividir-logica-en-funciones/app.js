/**
 * 🟡 Reto: Análisis de Números con Funciones
 * 📌 Descripción
 * Desarrollar una aplicación en JavaScript que permita ingresar una serie de números y 
 * calcular estadísticas básicas utilizando funciones separadas y reutilizables.
 * El objetivo principal es reforzar el uso de funciones, la separación de responsabilidades y el manejo de arrays.
 * 
 * 🎯 Objetivo
 * Dado un conjunto de 5 números ingresados por el usuario, el sistema debe calcular:
 * El número mayor
 * El número menor
 * El promedio
 * 
 * ⚙️ Requisitos
 * Permitir al usuario ingresar exactamente 5 números
 * Al completar los 5 números:
 * Deshabilitar el ingreso
 * Procesar los datos
 * Mostrar los resultados en pantalla
 * 
 * ⚠️ Reglas
 * ❌ No repetir lógica innecesaria
 * ❌ No mezclar lógica con manipulación del DOM dentro de las funciones
 * ❌ No usar métodos avanzados (Math.max, Math.min, etc.)
 * ✅ Usar for para recorrer el array
 * ✅ Usar return en cada función
 * ✅ Las funciones deben recibir el array como parámetro
 */

const btnSave = document.querySelector('#save-button');
const btnNew = document.querySelector('#new-button');
const inputNumber = document.querySelector('#number-input');
const message = document.querySelector('#message');
const newMessage = document.querySelector('#newMessage');

resetUI("inicio");

let numbers = [];

btnSave.addEventListener('click', saveNumber);
btnNew.addEventListener('click', reset);

function saveNumber() {
    const entered = getValidNumber(inputNumber, message, "Digitar un número")
    if (entered === null) return;

    numbers.push(entered);
    inputNumber.value = '';

    message.textContent = `[${numbers.join(', ')}]`;

    const length = isValidLength(numbers, 5);
    if (length === false) return;

    resetUI("save");

    const numberMax = findMaxNumber(numbers);
    const numberMin = findMinNumber(numbers);
    const average = calculateAverage(numbers);

    newMessage.textContent = `
    Mayor: ${numberMax}\n
    Menor: ${numberMin}\n
    Promedio: ${average}`;
}

function reset() {
    resetUI("afterSaving");
}

function findMaxNumber(array) {
    let numberMax = -Infinity;
    for (let number of array) {
        if (number > numberMax) {
            numberMax = number
        }
    }
    return numberMax;
}

function findMinNumber(array) {
    let numberMin = Infinity;
    for (let number of array) {
        if (number < numberMin) {
            numberMin = number;
        }
    }
    return numberMin;
}

function calculateAverage(array) {
    let sum = 0;
    for (let number of array) {
        sum += number;
    }

    return sum / array.length;
}

function isValidLength(array, length) {
    if (array.length === length) {
        return true;
    }
    return false;
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
    return number
}

/**
 * 
 * @param {'inicio' | 'save'| 'afterSaving'} action 
 */
function resetUI(action) {
    const option = action.toLowerCase();

    switch (option) {
        case 'inicio':
            btnNew.disabled = true;
            break;
        case 'save':
            btnNew.disabled = false;
            btnSave.disabled = true;
            inputNumber.disabled = true;
            break;
        case 'aftersaving':
            btnNew.disabled = true;
            btnSave.disabled = false;
            inputNumber.disabled = false;
            message.textContent = '';
            newMessage.textContent = '';
            numbers = [];
            break;
        default:
            console.warn(`Estado no valido: ${option}`);
    }
}

document.querySelectorAll('.numeric-only').forEach(input => {
    input.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });
});