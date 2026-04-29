const btnSave = document.querySelector('#save-button');
const inputNumber = document.querySelector('#number-input');
const message = document.querySelector('#message');
const newMessage = document.querySelector('#newMessage');
const selectControl = document.querySelector('#control-select');

let numbers = [];
let newArray = [];

const options = [
    { value: '1', text: 'Referencia' },
    { value: '2', text: 'Copiar' },
    { value: '3', text: 'Reset' }
];

loadOption();
resetUI("start");

btnSave.addEventListener('click', saveNumber);
selectControl.addEventListener('change', hanledSelect);

function saveNumber() {
    const entered = getValidNumber(inputNumber, message, "Digite un número")
    if (entered === null) return;

    if (numbers.length < 5) {
        numbers.push(entered);
        inputNumber.value = '';

        if (numbers.length === 5) {
            resetUI("save");
        }
    } else {
        newArray.push(entered);
        inputNumber.value = '';
        newMessage.textContent = `[${newArray.join(', ')}]`;
    }
    message.textContent = `[${numbers.join(', ')}]`;
}

function hanledSelect() {
    const select = getValidNumber(selectControl, message, "Seleccione una opcion");

    switch (select) {
        case 1:
            newArray = referenceArray(numbers);
            newMessage.textContent = `[${newArray.join(', ')}]`;
            resetUI("afterSaving");
            break;
        case 2:
            newArray = copyArray(numbers);
            newMessage.textContent = `[${newArray.join(', ')}]`;
            resetUI("afterSaving");
            break;
        case 3:
            resetUI("reset");
            numbers = [];
            newArray = [];
            message.textContent = '';
            newMessage.textContent = '';
            selectControl.value = '';
            break;
        default:
            console.warn("Seleccione una opcion");
    }
}

function referenceArray(array) {
    const referenceArray = array
    return referenceArray;
}

function copyArray(array) {
    const copyArray = [...array];
    return copyArray;
}

function loadOption() {
    selectControl.innerHTML = `<option value="">Seleccionar</option>`;

    options.forEach(option => {
        const newOption = document.createElement('option');
        newOption.value = option.value;
        newOption.textContent = option.text;

        selectControl.appendChild(newOption);
    });
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
    return number
}

/**
 * 
 * @param {'start' | 'save'| 'reset' | 'afterSaving'} action 
 */
function resetUI(action) {
    const option = action.toLowerCase();

    switch (option) {
        case 'start':
            selectControl.disabled = true;
            break;
        case 'save':
            selectControl.disabled = false;
            btnSave.disabled = true;
            inputNumber.disabled = true;
            break;
        case 'reset':
            selectControl.disabled = true;
            btnSave.disabled = false;
            inputNumber.disabled = false;
            break;
        case 'aftersaving':
            btnSave.disabled = false;
            inputNumber.disabled = false;
            break;
        default:
            console.warn(`No es una opcion: ${option}`);
    }
}

document.querySelectorAll('.numeric-only').forEach(input => {
    input.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^0-9-]/g, "");
    });
});
