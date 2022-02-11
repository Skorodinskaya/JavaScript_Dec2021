// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

const nameChanger = (str) => {
    return str.replace(/[^a-zа-яё0-9/ +\s]/gi, ' ')
        .replace(/ +/g, ' ').trim();
}
console.log(nameChanger(n1));
console.log(nameChanger(n2));
console.log(nameChanger(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
const numberGenerator = (length, num) => {
    let newArray = [];
    for (let i = 0; i < length; i++) {
        newArray.push(Math.floor(Math.random() * num));
    }
    return newArray;
}
let numsArray = numberGenerator(10, 50);
console.log(numsArray);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(numsArray.sort((a, b) => a - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log(numsArray.filter(value => value % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log(numsArray.map(value => value.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

const sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
    }
    if (direction === 'descending') {
        arr.sort((a, b) => b - a);
    }
    return arr;
}
console.log(sortNums(numsArray, 'ascending'));
console.log(sortNums(numsArray, 'descending'));

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((value) => value.monthDuration > 5));