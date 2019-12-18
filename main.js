'use strict';

(function () {

    // Area
    let btn = document.querySelector('.button');
    btn.onclick = area;

    //Time
    let btn1 = document.querySelector('.butt');
    btn1.onclick = time;

    //Factorial
    let btnn = document.querySelector('.but');
    btnn.onclick = factorial;


})();

function area() {
    let inputW = parseInt(prompt('Введите ширину')),
        inputH = parseInt(prompt('Введите высоту')),
        result = inputW * inputH;
    if ((isNaN(inputW)) && (isNaN(inputH))) {
        alert('Введите число');
    }
    else if (isNaN(inputW)) {
        result = Math.pow(inputH, 2);
    }
    else if (isNaN(inputH)) {
        result = Math.pow(inputW, 2);
    }
    numbers.innerHTML = `<p> Площадь: ${result} M2</p>`;
}

function time() {
    let hours = parseInt(prompt('Введите часы'));

    if (isNaN(hours) || hours > 24) {
        alert('Введите чacы от 00 до 24');
        hours = parseInt(prompt('Введите часы'));
    };

    let minutes = parseInt(prompt('Введите минуты')),
        seconds = parseInt(prompt('Введите секунды'));

    if (isNaN(minutes)) {
        minutes = '00';
    };
    if (isNaN(seconds)) {
        seconds = '00';
    };

    times.innerHTML = `<p> Время: чч: ${hours} мм: ${minutes} сс: ${seconds} </p>`;

}


function factorial() {
    let n = prompt('Введите число');
    if (n == 0 || n == 1) {
        let fact = 1;
        fct.innerHTML = `<p> ${fact} </p>`

    }

    else {
        let fact = parseInt(n);
        for (let i = 1; i < n; i++) {
            fact *= i;
            fct.innerHTML = `<p> ${fact} </p>`
        }
    }
}


