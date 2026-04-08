const btnSave = document.querySelector('#save-button');
const btnDelete = document.querySelector('#delete-button');
const inputNumber = document.querySelector('#numbers-input');
const inputDelete = document.querySelector('#delete-input');
const message = document.querySelector('#message');
const newMessage = document.querySelector('#new-message');

let numbers = [];

inputDelete.disabled = true;
btnDelete.disabled = true;

btnSave.addEventListener('click', saveNumber);
btnDelete.addEventListener('click', deleteNumber)

function saveNumber() {
    newMessage.textContent = '';
    const entered = getValidNumber(inputNumber, newMessage, "Digitar un número");
    if (entered === null) return;

    numbers.push(entered);
    inputNumber.value = '';

    if (numbers.length === 5) {
        inputDelete.disabled = false;
        btnDelete.disabled = false;
        inputNumber.disabled = true;
        btnSave.disabled = true;
    }
    message.textContent = `[${numbers.join(', ')}]`;
}

function deleteNumber() {
    const newNumbers = [];
    const entered = getValidNumber(inputDelete, newMessage, "Digitar un número");

    if (entered === null) return;

    for (let number of numbers) {
        if (entered !== number) {
            newNumbers.push(number);
        }
    }

    if (newNumbers.length === numbers.length) {
        newMessage.textContent = `El número digitado no existe en el array`;
        inputDelete.value = '';
        return;
    }

    newMessage.textContent = (numbers.length - newNumbers.length) === 1
        ? `Se eliminó ${numbers.length - newNumbers.length} elemento`
        : `Se han eliminado ${numbers.length - newNumbers.length} elementos`;

    numbers = newNumbers;
    inputDelete.value = '';

    message.textContent = `[${numbers.join(', ')}]`;

    if (numbers.length === 0) {
        btnSave.disabled = false;
        inputNumber.disabled = false;
        btnDelete.disabled = true;
        inputDelete.disabled = true;
        message.textContent = '';
        newMessage.textContent = '';
    }

}

function getValidNumber(input, errorContainer, errorMessage) {
    const textValue = input.value.trim();
    if (textValue === '') {
        errorContainer.textContent = errorMessage;
        return null;
    }

    const number = Number(textValue);
    if (isNaN(number)) {
        errorContainer.textContent = "Ingrese un número válido";
        return null;
    }
    return number;
}

document.querySelectorAll('.numeric-only').forEach(input => {
    input.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });
});