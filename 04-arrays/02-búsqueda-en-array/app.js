const btnSave = document.querySelector('#save-button');
const btnSearch = document.querySelector('#search-button');
const inputNumeric = document.querySelector('#numeric-input');
const inputSearch = document.querySelector('#search-input');
const result = document.querySelector('#result');

let numbers = [];

inputSearch.disabled = true;
btnSearch.disabled = true;

btnSave.addEventListener('click', saveNumbers);
btnSearch.addEventListener('click', searchNumber);

function saveNumbers() {
    const entered = getValidNumber(inputNumeric, "Digite un numero")
    if (entered === null) return;

    numbers.push(entered);
    inputNumeric.value = '';

    if (numbers.length === 5) {
        btnSave.disabled = true;
        inputNumeric.disabled = true;
        inputSearch.disabled = false;
        btnSearch.disabled = false;
    }
}

function searchNumber() {
    const foundIndexes = [];
    let counter = 0;

    const entered = getValidNumber(inputSearch, "Digite un numero a buscar")
    if (entered === null) return;

    for (let [index, number] of numbers.entries()) {
        if (entered === number) {
            counter++;
            foundIndexes.push(index);
        }
    }
    result.textContent = `El numero buscado esta ${counter} veces en los indices ${foundIndexes.join(', ')}`;
}

function getValidNumber(input, errorMessage) {
    const textValue = input.value.trim();

    if (textValue === '') {
        result.textContent = errorMessage;
        return null;
    }
    const number = Number(textValue);

    if (isNaN(number)) {
        result.textContent = errorMessage;
        return null;
    }
    return number;
}

document.querySelectorAll('.numeric-only').forEach(input => {
    input.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^0-9]/g, "");
    });
});