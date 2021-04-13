
 /* 
 Длина строки, свойство length количе символов в строке
 */
const message = 'В этой строке 26 символов.';
  console.log(message.length);

/*
 Конкатенация строк когда надо сшить два и более зачения
 */
const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName1 = firstName + lastName;
const fullName2 = firstName + ' ' + lastName;

console.log(fullName1);
console.log(fullName2);

console.log('kjh' + 'fgfh' + ' bjb');

/*
 Напиши скрипт который выведет строку в формате:
 «Гость x y поселяется в z номер q»,  подставив вместо x y z q значения переменных
 */

const room = 716;
const type = 'VIP';

// const welcomeMsg =
//   'Гость ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' поселяется в ' +
//   type +
//   ' номер ' +
//   room;

const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log(welcomeMsg);

/*
 Шаблонные строки (template strings)
 Возвращаемся к составлению строки поселения в отель
 */

const quantity = 15;
const orderMsg = `Вы заказываете ${quantity} холодильников.`;

console.log(orderMsg);

/*
 Нормализация с методом toLowerCase()
 */

/*const brand = 'Samsung';
const normalizedBrand = brand.toLowerCase();
console.log(normalizedBrand);
console.log(brand);*/

/*let brand = 'SamSUnG';
brand = brand.toLowerCase();
console.log(brand);*/


/*let brand = prompt('Давай бренд');
 brand = brand.toLowerCase();
console.log(brand);*/


let brand = 'SamSUnG';
 console.log(brand[4]);
 console.log(brand.slice(3).toLowerCase());

brand = brand[0] + brand.slice(1).toLowerCase();

 console.log(brand);

/*
 Поиск в строке с методом includes()
 */
const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион!';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная кампания #fatlivesmatter';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));

const normalizedString2 = string2.toLowerCase();
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));