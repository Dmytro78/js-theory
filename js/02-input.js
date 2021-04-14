/* window.confirm() подтверждение диалоговое окно и выбрать ок или отмена*/
/* window.prompt() получить от пользователя самый минимальный ввод*/

/*shouldRenew = confirm('Хотите продлить подписку?');
console.log(shouldRenew);*/

/*const quantity = prompt('Введите количество товаров');
console.log(quantity);
console.log(typeof quantity); /*будет строка*/

let quantity = prompt('Введите количество товаров');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);