// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function minNumber(a, b, c) {
    if (a < b && a < c) {
        console.log(a)
    } else if (b < a && b < c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

minNumber(2, 5, 9);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function maxNumber(a, b, c) {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > c && b > a) {
        console.log(b)
    } else {
        console.log(c)
    }
}

maxNumber(5, 2, 1);

// - створити функцію яка повертає найбільше число з масиву
let arrayForTest = [1, 3, 85, 5, 6, 2];

function maxInArray(arr) {
    let max = arr[0];
    for (const arrElement of arr) {
        if (arrElement > max) {
            max = arrElement;
        }
    }
    return max;
}

console.log(maxInArray(arrayForTest));

// - створити функцію яка повертає найменьше число з масиву
function minInArray(arr) {
    let min = arr[0];
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement;
        }
    }
    return min;
}

console.log(minInArray(arrayForTest));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function sumOfArray(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum = arrElement + sum;
    }
    return sum;
}

console.log(sumOfArray(arrayForTest));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function averageOfArray(arr) {
    let sum = 0;
    for (const arrElement of arr) {
        sum = arrElement + sum
    }
    return sum / arr.length
}

console.log(averageOfArray(arrayForTest));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function minAndMax(...arg) {
    let min = arg[0];
    let max = arg[0];
    for (const argElement of arg) {
        if (argElement > max) {
            max = argElement
        }
        if (argElement < min) {
            min = argElement
        }
    }
    console.log(max);
    return min;
}

console.log(minAndMax(5, 9, 87, 3, 6));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function random(lengthOfArr) {
    let array = [];
    for (let i = 0; i < lengthOfArr; i++) {
        array.push(Math.floor(Math.random() * 100))
    }
    return array;
}

console.log(random(20));

// створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomLimit(length, limit) {
    let emptyArray = [];
    for (let i = 0; i < length; i++) {
        emptyArray.push(Math.floor(Math.random() * limit))
    }
    return emptyArray;
}

console.log(randomLimit(10, 50));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverse(arr) {
    let revArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    return revArr;
}

console.log(arrayForTest)
console.log(reverse(arrayForTest));

// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
function oneOrTwoArg(a, b) {
    if (!b) {
        console.log(a);
    } else {
        return a + b;
    }
}

console.log(oneOrTwoArg(5, 5));

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
let array1 = [1, 2, 3, 4];
let array2 = [2, 3, 4, 5];

function sumOfTwoArrays(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i] + arr2[i])
    }
    return arr3;
}

console.log(sumOfTwoArrays(array1, array2));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let users = [{name: 'Dima', age: 13}, {model: 'Camry'}];

function keyReturner(array) {
    let newArray = [];
    for (const arrayElement of array) {
        for (const value of Object.keys(arrayElement)) {
            newArray.push(value);
        }
    }
    return newArray;
}

console.log(keyReturner(users));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function valueReturner(array) {
    let newArray = [];
    for (const arrayElement of array) {
        for (const value of Object.values(arrayElement)) {
            newArray.push(value)
        }
    }
    return newArray;
}

console.log(valueReturner(users));