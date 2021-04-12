/* Number .parseInt() выводит целое число значения после точки и без букв
let elementWidth = '50px';
const result = Number.parseInt(elementWidth);
console.log(result);
*/

/* Number .parseFloat() выводит число без букв*/

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth: ', elementWidth);

let elementHeight = '249.67px';
elementHeight = Number.parseFloat(elementHeight);
console.log('elementHeight: ', elementHeight);

/*-------------------------------------------------------------------------*/

/*метод число.toFixed(digits) для работы с деньгами оставляет количество символов после точки
console.log(Number(число.toFixed(digits)))

/*let salary = 2389.369874;
salary = salary.toFixed(1);
salary = Number(salary);
console.log(salary);*/

let salary = 2389.369874;
salary = Number(salary.toFixed(1));
console.log(salary);

/*===============================================================*/

/* Приведение(преоброзование) к чеслу с Number(value)
Значение NaN (Not a Number) и метод Number.isNaN(value) */

let quantity = '30';
let value = 'Эту строку невозможно привести к числу';

console.log(Number(quantity));
console.log(Number(value));

/*-----------------------------------------------------------------*/

/* Math
возведение в степень Math.pow
Exponent operator*/

const base = 2;
const power = 7;

/*const result = Math.pow(2, 8);*/

const result = Math.pow(base, power);
console.log(result);

console.log(2 ** 7); /*БОЛЕЕ СОВРЕМЕННОЕ*/

/*----------------------------------------------------------------*/

/*Напиши скрипт который просит пользователя ввести число и степень,
возводит число вэтустепень и выводит результат в консоль*/


/*1. попросить ввести число и сохранить в переменную;
let base = prompt('ввести число');
base = Number(base);

console.log(base);

2. попросить ввести степень и сохранить в переменную;
let power = prompt('ввести степень');
power = Number(power);

console.log(power);
3. Возвести введенные данные в степень и вывести
const result = base ** power;

console.log(result);
*/

/*=============================================================================*/

/* Генерим псевдослучайные числа
Math.random()
Math.round()
*/

console.log(Math.random());


//Math.random()*(max-min)+min;
console.log(Math.random() * (50 - 30) + 30);

//console.log(Math.round(2.8));

//const max = 80;
//const min = 20;

//console.log(Math.random() * (max - min) + min);

/*------------------------------------------------------------*/
const max = 80;
const min = 10;

const total = Math.round(Math.random() * (max - min) + min);

console.log(total);
