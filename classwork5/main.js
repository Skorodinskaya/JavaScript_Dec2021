// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const minNumber = (a, b, c) => {
    if (a < b && a < c) {
        console.log(a)
    } else if (b < a && b < c) {
        console.log(b)
    } else {
        console.log(c)
    }
}
minNumber(2, 8, 4);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const maxNumber = (a, b, c) => {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else {
        console.log(c)
    }
}
maxNumber(5, 80, 42);

// - створити функцію яка повертає найбільше число з масиву
const maxInArray = (arr) => {
    let max = arr[0];
    for (const arrElement of arr) {
        if (arrElement > max) {
            max = arrElement;
        }
    }
    return max;
}
const arrayTest = [5, 84, 4, 6, 7];
console.log(maxInArray(arrayTest));

// - створити функцію яка повертає найменьше число з масиву
const minInArray = (arr) => {
    let min = arr[0];
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement;
        }
    }
    return min;
}
console.log(minInArray(arrayTest));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const sumOfArray = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum = arrElement + sum;
    }
    return sum;
}
console.log(sumOfArray(arrayTest));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
const averageOfArray = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum = arrElement + sum;
    }
    return sum / arr.length;
}
console.log(averageOfArray(arrayTest));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
const maxAndMinOfArray = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (const argElement of arg) {
        if (argElement > max) {
            max = argElement;
            console.log(max);
        }
        if (argElement < min) {
            min = argElement;
        }
    }
    return min;
}
console.log(maxAndMinOfArray(2, 5, 40, 17));

// - створити функцію яка заповнює масив рандомними числами
const random = (length) => {
    let newArray = [];
    for (let i = 0; i < length; i++) {
        newArray.push(Math.floor(Math.random() * 100));
    }
    return newArray;
}
console.log(random(10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
const randomWithLimits = (length, limit) => {
    let newArray = [];
    for (let i = 0; i < length; i++) {
        newArray.push(Math.floor(Math.random() * limit))
    }
    return newArray;
}
console.log(randomWithLimits(15, 50));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
const reverse = (arr) => {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
}
console.log(arrayTest);
console.log(reverse(arrayTest));

// - Дано натуральное число n. Выведите все числа от 1 до n.

const getNums = (n) => {
    const newArray = [];
    for (let i = 1; i <= n; i++) {
        newArray.push(i)
    }
    return newArray;
}
console.log(getNums(10));

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const numsShower = (a, b) => {
    let newArray = [];
    if(a < b) {
        for (let i = a; i <= b; i++) {
            newArray.push(i)
        }
    }
    if(a > b) {
        for (let i = a; i >= b; i--) {
            newArray.push(i)
        }
    }
    return newArray;
}
console.log(numsShower(15, 10));

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const arrayChanger = (arr, i) => {
   let variable = arr[i];
   arr[i] = arr[i+1];
   arr[i+1] = variable;


   return arr;
}
const foo = [9,8,0,4];
console.log(arrayChanger(foo, 0));
console.log(arrayChanger(foo, 1));
console.log(arrayChanger(foo, 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

const zeroToTheEnd = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            let x = arr.indexOf(arr[i]);
            arr.splice(x, 1);
            arr.push(0)
        }
    }
    return arr;
}
console.log(zeroToTheEnd([1, 0, 6, 0, 3]));
console.log(zeroToTheEnd([0,1,2,3,4]));
console.log(zeroToTheEnd([0,0,1,0]));
