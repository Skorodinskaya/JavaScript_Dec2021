// #1 - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let one = 1;
let ten = 10;
let minusNum = -999;
let oneTwoThree = 123;
let pi = 3.14;
let twoPointSeven = 2.7;
let sixteen = 16;
let truth = true;
let lie = false;

console.log(hello);
console.log(owu);
console.log(com);
console.log(ua);
console.log(one);
console.log(ten);
console.log(minusNum);
console.log(oneTwoThree);
console.log(pi);
console.log(twoPointSeven);
console.log(sixteen);
console.log(truth);
console.log(lie);

// document.write(`<div>${hello}</div>`);
// document.write(`<div>${owu}</div>`);
// document.write(`<div>${com}</div>`);
// document.write(`<div>${ua}</div>`);
// document.write(`<div>${one}</div>`);
// document.write(`<div>${ten}</div>`);
// document.write(`<div>${minusNum}</div>`);
// document.write(`<div>${oneTwoThree}</div>`);
// document.write(`<div>${pi}</div>`);
// document.write(`<div>${twoPointSeven}</div>`);
// document.write(`<div>${sixteen}</div>`);
// document.write(`<div>${truth}</div>`);
// document.write(`<div>${lie}</div>`);
//
// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(one);
// alert(ten);
// alert(minusNum);
// alert(oneTwoThree);
// alert(pi);
// alert(twoPointSeven);
// alert(sixteen);
// alert(truth);
// alert(lie);

// #2 - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

hello = 'how';
com = 'you';
owu = 'are';
ua = 'developer';
one = 1111;
ten = 1010101;
minusNum = -8;
oneTwoThree = 123123;
pi = 3.141592653;
twoPointSeven = 'two point seven';
sixteen = 61;
truth = 'honest';
lie = 0;

// console.log(hello);
// console.log(owu);
// console.log(com);
// console.log(ua);
// console.log(one);
// console.log(ten);
// console.log(minusNum);
// console.log(oneTwoThree);
// console.log(pi);
// console.log(twoPointSeven);
// console.log(sixteen);
// console.log(truth);
// console.log(lie);
//
// document.write(`<div>${hello}</div>`);
// document.write(`<div>${owu}</div>`);
// document.write(`<div>${com}</div>`);
// document.write(`<div>${ua}</div>`);
// document.write(`<div>${one}</div>`);
// document.write(`<div>${ten}</div>`);
// document.write(`<div>${minusNum}</div>`);
// document.write(`<div>${oneTwoThree}</div>`);
// document.write(`<div>${pi}</div>`);
// document.write(`<div>${twoPointSeven}</div>`);
// document.write(`<div>${sixteen}</div>`);
// document.write(`<div>${truth}</div>`);
// document.write(`<div>${lie}</div>`);
//
// alert(hello);
// alert(owu);
// alert(com);
// alert(ua);
// alert(one);
// alert(ten);
// alert(minusNum);
// alert(oneTwoThree);
// alert(pi);
// alert(twoPointSeven);
// alert(sixteen);
// alert(truth);
// alert(lie);

// #3- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// let firstName = 'Anastasiia';
// let middleName = 'Vasylivna';
// let lastName = 'Skorodynska';
// let person = firstName + ' ' + middleName + ' ' + lastName;
// console.log(person);

// #4 За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let name = prompt('Please enter your name');
// let middlename = prompt('Please enter your middle name');
// let age = prompt('Please enter your age');
//
// if (name && middlename && age) {
//     document.write(`<div>Hello, ${name} ${middlename}. You're ${age}.</div>`)
// } else {
//     document.write(`<div>Please write your info</div>`)
// }

// #5 - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

// let a = 100;
// let b = '100';
// let c = true;
//
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

//#6 - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

console.log(5 < 6);
console.log(5 > 6);
console.log(5 === 6);
console.log(5 >= 6);

console.log(10 === 10);
console.log(10 >= 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 !== 10);

console.log(123 !== 123);
console.log(123 === 123);

// #7- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
let str = "20";
let a = 5;
document.write(str + a + "<br/>"); //205
document.write(str - a + "<br/>"); //15
document.write(str * "2" + "<br/>"); //40
document.write(str / 2 + "<br/>"); //10
