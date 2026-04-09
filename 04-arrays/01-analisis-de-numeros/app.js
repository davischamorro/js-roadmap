const btn = document.querySelector('#guardar');
const inputNumeros = document.querySelector('#numeros');
const resultado = document.querySelector('#resultado');

let numero = [5, 2, 9, 1, 2];

btn.addEventListener('click', () => {

    if (numero.length < 5) {
        numero.push(Number(inputNumeros.value));
    }

    if (numero.length === 5) {

        btn.disabled = true;
        inputNumeros.disabled = true;

        let numMayor = -Infinity;
        let numMenor = Infinity;
        let numPar = 0;
        let numImpar = 0;
        let promedio = 0;
        let suma = 0;

        for (let num of numero) {
            suma += num;
            if (num > numMayor) numMayor = num;
            if (num < numMenor) numMenor = num;
            num % 2 === 0 ? numPar++ : numImpar++;
        }
        promedio = suma / numero.length

        let mayorPromedio = 0;

        for (let num of numero) {
            if (num > promedio) mayorPromedio++;
        }

        resultado.innerHTML = ` <br>
        El numero mayor es: ${numMayor} <br>
        El menor es: ${numMenor} <br>
        El promedio es: ${promedio / numero.length} <br>
        ${numPar} son pares, ${numImpar} son impares <br>
        ${mayorPromedio} son mayores al promedio`;
    }
});

document.querySelectorAll('.soloNumeros').forEach(input => {
    input.addEventListener('input', e => {
        e.target.value = e.target.value.replace(/[^0-9.]/g, "");
    });
});