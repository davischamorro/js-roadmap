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
    const entered = getValidNumber(inputNumber, message, "Digite un número");
    if (entered === null) return;

    numbers.push(entered);
    inputNumber.value = '';

    if (numbers.length === 8) {
        resetUI("save");
        const newArray = getLongestConsecutiveSequence(numbers);
        if (newArray.length > 1) {
            newMessage.textContent = `Segmento mas largo: [${newArray.join(', ')}]
            Cantidad: ${newArray.length}`;
        } else {
            newMessage.textContent = `No se encontraron segmentos consecutivos ascendentes`;
        }
    }
    message.textContent = `[${numbers.join(', ')}]`;
}

function reset() {
    resetUI("reset");
    numbers = [];
    message.textContent = '';
    newMessage.textContent = '';
}

function getLongestConsecutiveSequence(array) {
    let currentSegment = [];
    let longestSegment = [];

    currentSegment.push(array[0]);

    for (let i = 1; i < array.length; i++) {
        if (array[i] === array[i - 1] + 1) {
            currentSegment.push(array[i]);
        } else {
            if (currentSegment.length > longestSegment.length) {
                longestSegment = currentSegment
            }
            currentSegment = [array[i]];
        }
    }

    if (currentSegment.length > longestSegment.length) {
        longestSegment = currentSegment
    }
    return longestSegment;
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
            console.warn(`No es una accion: ${option}`);
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
        errorContainer.textContent = "No es un número";
        return null;
    }
    return number;
}


document.querySelectorAll('.numeric-only').forEach(input => {
    input.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^0-9-]/g, "");
    });
});
