// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangle(a, b) {
    return a * b;
}

console.log(rectangle(7, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle(r) {
    return Math.PI * Math.pow(r, 2);
}

console.log(circle(5).toFixed(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r) {
    return 2 * Math.PI * r * h;
}

console.log(cylinder(5, 8).toFixed(2));

// - створити функцію яка приймає масив та виводить кожен його елемент

let arrayForShower = ['hello', true, 55, 'fine']

function arrayForShowerIter(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}

(arrayForShowerIter(arrayForShower));

//OR

function arrayShowerItar(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

arrayShowerItar(arrayForShower)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function textGenerator(text) {
    document.write(`<p>${text}</p>`)
}

textGenerator('hello');
textGenerator('sweet');
textGenerator('world');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listCreator(item) {
    document.write('<ul>')
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${item}</li>`)
    }
    document.write('</ul>')
}

listCreator('hola, amigo');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function listSetAmount(text, amount) {
    document.write('<ul>')
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write('</ul>')
}

listSetAmount('cómo estás?', 4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayToList(arr) {
    document.write('<ul>')
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write('</ul>')
}

arrayToList(arrayForShower);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'Anna', age: 50},
    {id: 2, name: 'Maria', age: 20},
    {id: 3, name: 'Petro', age: 35}
]

function userInfo(info) {
    for (const infoElement of info) {
        document.write(`<div>${infoElement.id}. ${infoElement.name}. Age - ${infoElement.age}</div>`)
    }
}

userInfo(users)



