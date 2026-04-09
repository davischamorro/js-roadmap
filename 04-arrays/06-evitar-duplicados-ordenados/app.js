const btnSave = document.querySelector('#save-button');
const btnPush = document.querySelector('#push-button');
const inputNumber = document.querySelector('#number-input');
const inputPush = document.querySelector('#push-number-input');
const message = document.querySelector('#message');

let numbers = [];

btnSave.addEventListener('click', saveNumber);
btnPush.addEventListener('click', pushNumber);

inputPush.disabled = true;
btnPush.disabled = true;

function saveNumber() {
    const entered = getValidNumber(inputNumber, message, "Digitar un numero");
    if (entered === null) return;

    const exists = numberExists(numbers, entered)
    if (exists) {
        message.textContent = "Número ya existe"
        inputNumber.value = ''
        return;
    }

    inputNumber.value = '';
    numbers.push(entered);

    if (numbers.length === 5) {
        inputPush.disabled = false;
        btnPush.disabled = false;
        inputNumber.disabled = true;
        btnSave.disabled = true;
    }
    message.textContent = `[${numbers.join(', ')}]`;
}

function pushNumber() {
    let temp = 0;
    const entered = getValidNumber(inputPush, message, "Digitar un nuemro");
    if (entered === null) return;

    const exists = numberExists(numbers, entered)
    if (exists) {
        message.textContent = "Número ya existe"
        inputPush.value = '';
        return;
    }

    inputPush.value = '';
    numbers.push(entered);

    for (let k = 0; k < numbers.length; k++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[k] < numbers[j]) {
                temp = numbers[k];
                numbers[k] = numbers[j];
                numbers[j] = temp;
            }
        }
    }

    message.textContent = `[${numbers.join(', ')}]`;
}

function numberExists(array, number) {
    for (let i = 0; i < array.length; i++) {
        if (number === array[i]) {
            return true;
        }
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
        errorContainer.textContent = "No es un número";
        return null;
    }
    return number;
}

document.querySelectorAll('.numeric-only').forEach(input => {
    input.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });
});