// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = Math.floor(Math.random() * 60)
console.log(time);

if (time <= 15) {
    console.log('the first part of an hour')
} else if (time <= 30) {
    console.log('the second part on an hour')
} else if (time <= 45) {
    console.log('the third part on an hour')
} else {
    console.log('the fourth part on an hour')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = Math.floor(Math.random() * 32) + 1;

if (day <= 10) {
    console.log(`${day}th day is the first part of the month`)
} else if (day <= 20) {
    console.log(`${day}th day is the second part of the month`)
} else {
    console.log(`${day}th day is the third part of the month`)
}

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = !!'Hello'
if (test === true) {
    console.log('Correct')
} else {
    console.log('Incorrect')
}

let test2 = 'Hello' ? 'Correct' : 'Incorrect'
console.log(test2);

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let number = +prompt('Write a number 1, 0 or -3');
if (number !== 0) {
    console.log('Correct')
} else {
    console.log('Incorrect')
}

// let number = +prompt('Write a number 1, 0 or -3');
// (number !==0) ? console.log('Well done') : console.log('Try again');

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
let agenda = +prompt('Write a serial number of the day of the week')
switch (agenda) {
    case 1:
        console.log('Monday: Clean the floor');
        break;
    case 2:
        console.log('Tuesday: Do homework');
        break;
    case 3:
        console.log('Wednesday: Film Tik Tok');
        break;
    case 4:
        console.log('Thursday: Cook dinner');
        break;
    case 5:
        console.log('Friday: Read a book');
        break;
    case 6:
        console.log('Saturday: Meet friends');
        break;
    case 7:
        console.log('Sunday: Watch a lecture');
        break;
    default:
        console.log('Write a number from 1 to 7')
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let year = +prompt('Write the year')

if (year % 4 === 0) {
    console.log(`It's a leap year`);
} else {
    console.log(`It's not a leap year`);
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let javaScript = prompt('What is the official name of JavaScript?');
// if (javaScript === 'ECMAScript') {
//     console.log('Correct!');
// } else {
//     console.log('Dunno? It is ECMAScript!');
// }

(javaScript === 'ECMAScript') ? console.log('Correct!') : console.log('Dunno? It is ECMAScript!');
