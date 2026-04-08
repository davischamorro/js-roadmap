const btnSave = document.querySelector('#save-button');
const btnSort = document.querySelector('#sort-button');
const inputNumber = document.querySelector('#number-input');
const message = document.querySelector('#message');

let numbers = [];
btnSort.disabled = true;

btnSave.addEventListener('click', saveNumber);
btnSort.addEventListener('click', sortArray);

function saveNumber() {
    const entered = getValidNumber(inputNumber, message);
    if (entered === null) return;

    numbers.push(entered)
    inputNumber.value = '';

    if (numbers.length === 5) {
        inputNumber.disabled = true;
        btnSave.disabled = true;
        btnSort.disabled = false;
    }
    message.textContent = `[${numbers.join(', ')}]`;
}

function sortArray() {
    let temp = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    message.textContent = `[${numbers.join(', ')}]`;

    inputNumber.disabled = false;
    btnSave.disabled = false;
    btnSort.disabled = true;
    inputNumber.value = '';
    numbers = [];
}

function getValidNumber(input, errorContainer) {
    const textValue = input.value.trim();
    if (textValue === '') {
        errorContainer.textContent = "Digitar un número";
        return null
    }

    const number = Number(textValue);
    if (isNaN(number)) {
        errorContainer.textContent = "No es un número"
        return null;
    }
    return number
}

document.querySelectorAll('.numeric-only').forEach(input => {
    input.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });
});