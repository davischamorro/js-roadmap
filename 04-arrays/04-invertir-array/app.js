const btnSave = document.querySelector('#save-button');
const btnReverse = document.querySelector('#reverse-button');
const inputNumeric = document.querySelector('#numeric-input');
const message = document.querySelector('#message');

let numbers = [];

btnReverse.disabled = true;
btnSave.addEventListener('click', saveNumber);
btnReverse.addEventListener('click', reverseArray);

function saveNumber() {
    const entered = getValidNumber(inputNumeric, message);
    if (entered === null) return;

    numbers.push(entered);
    inputNumeric.value = '';

    if (numbers.length === 5) {
        btnSave.disabled = true;
        inputNumeric.disabled = true;
        btnReverse.disabled = false;
    }
    message.textContent = `[${numbers.join(', ')}]`;
}

function reverseArray() {
    const reverseArray = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        reverseArray.push(numbers[i])
    }

    message.textContent = `[${numbers.join(', ')}] - [${reverseArray.join(', ')}]`;

    btnSave.disabled = false;
    inputNumeric.disabled = false;
    btnReverse.disabled = true;
    numbers = [];
    inputNumeric.value = '';
}

function getValidNumber(input, errorContainer) {
    const textValue = input.value.trim();
    if (textValue === '') {
        errorContainer.textContent = "Debe digitar un número";
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