// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let nums = [1, 2, 3, 4, 5];
let strings = ['hello', 'how', 'are', 'you', 'today'];
let mix = [1, 5, 'fine', true, false];
console.log(nums, strings, mix);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консольemptyArrayempty = [];
let empty = [];
empty[0] = 'today';
empty[1] = 'is';
empty[2] = 2;
empty[3] = 'Saturday';
empty[4] = true;
empty[5] = false;

console.log(empty);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>let text</div>')
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>some text with index - ${i}</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write('<h1>while text</h1>');
    i++
}

// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let e = 0;
while (e < 20) {
    document.write(`<h1>while text with index - ${e}</h1>`);
    e++
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < num.length; i++) {
    console.log(num[i])
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let stringArray = ['hello', 'how', 'are', 'you', 'today', 'hope', 'you', 'are', 'fine'];
for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i])
}

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixedArray = [1, 2, 'hello', true, 54, false, 'Saturday', 90, 'name', 8];
for (let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}

// Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let mixedArrayBoolean = [1, 2, 'hello', true, 54, false, 'Saturday', 90, 'name', 8];
for (let i = 0; i < mixedArrayBoolean.length; i++) {
    if (typeof mixedArrayBoolean[i] === 'boolean') {
        console.log(mixedArrayBoolean[i])
    }
}

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let mixedArrayNumbers = [1, 2, 'hello', true, 54, false, 'Saturday', 90, 'name', 8];
for (let i = 0; i < mixedArrayNumbers.length; i++) {
    if (typeof mixedArrayNumbers[i] === 'number') {
        console.log(mixedArrayNumbers[i])
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let mixedArrayString = [1, 2, 'hello', true, 54, false, 'Saturday', 90, 'name', 8];
for (let i = 0; i < mixedArrayString.length; i++) {
    if (typeof mixedArrayString[i] === 'string') {
        console.log(mixedArrayString[i])
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArray = [];
emptyArray[0] = 'today';
emptyArray[1] = 'is';
emptyArray[2] = 2;
emptyArray[3] = 'Saturday';
emptyArray[4] = true;
emptyArray[5] = false;
emptyArray[6] = 56;
emptyArray[7] = 'nice';
emptyArray[8] = true;
emptyArray[9] = 'weather'

for (let i = 0; i < emptyArray.length; i++) {
    console.log(emptyArray[i])
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<div>${i}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(`100 iterations - ${i}`)
    document.write(`<div>100 iterations - ${i}</div>`)
}

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(`100 iterations 2 steps - ${i}`)
    document.write(`<div>100 iterations 2 steps - ${i}</div>`)
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(`100 iterations even - ${i}`)
        document.write(`<div>100 iterations even - ${i}</div>`)
    }
}

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        console.log(`100 iterations odd - ${i}`)
        document.write(`<div>100 iterations odd - ${i}</div>`)
    }
}