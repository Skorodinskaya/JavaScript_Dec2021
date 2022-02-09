// - створити функцію яка обчислює та повертає площу прямокутника висотою

const rectangle = (a, b) => {
    return a * b;
}
console.log(rectangle(5, 8));

// - створити функцію яка обчислює та повертає площу кола
const cycle = (r) => {
    return (Math.PI * Math.pow(r, 2)).toFixed(2)
}
console.log(cycle(5));

// - створити функцію яка обчислює та повертає площу циліндру
const cylinder = (r, h) => {
    return (2 * Math.PI * r * h).toFixed(2)
}
console.log(cylinder(5, 8));

// - створити функцію яка приймає масив та виводить кожен його елемент
const arrayShower = (arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

const arrayTest = [1, 'hello', true, 5, false];

arrayShower(arrayTest);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
const textCreator = (text) => {
    document.write(`<p>${text}</p>`)
}
textCreator('hello')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const listCreator = (text) => {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
listCreator('love');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const listCreatorWithLength = (text, length) => {
    document.write('<ul>')
    for (let i = 0; i < length; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}
listCreatorWithLength('forever', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrayIntoList = (arr) => {
    document.write('<uL>')
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write('</uL>')
}

arrayIntoList(arrayTest);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'Anna', age: 50},
    {id: 2, name: 'Ivan', age: 10},
    {id: 3, name: 'Maria', age: 16}
]

const usersDisplayer = (arr) => {
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id}) ${arrElement.name} - ${arrElement.age}</div>`)
    }
}
usersDisplayer(users);