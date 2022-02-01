// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let randoms = [...Array(10)].map(() => Math.floor(Math.random() * 11));

document.write(`<div>${randoms}</div>`)

let result = (previousValue, currentValue) => previousValue + currentValue;

document.write(`<div>${randoms.reduce(result)}</div>`)

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    title: 'Harry Potter',
    pages: 401,
    genre: 'fantasy'
}
console.log(book);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let bookSecond = {
    title: 'Harry Potter',
    pages: 401,
    genre: 'fantasy',
    authors: ['Victor', 'J. K. Rowling', 'Iryna']
}
console.log(bookSecond);

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let books = [
    {title: 'Harry Potter', pages: 401, genre: 'fantasy', authors: ['Victor', 'Sofia', 'J. K. Rowling']},
    {title: 'Don Quixote', pages: 401, genre: 'fantasy', authors: ['Miguel de Cervantes', 'Sofia', 'Iryna']},
    {title: 'The Great Gatsby', pages: 401, genre: 'fantasy', authors: ['Victor', 'F. Scott Fitzgerald', 'Iryna']}
]
document.write(`<div>${books[0].title}, ${books[0].pages} pages. Genre - ${books[0].genre}. Authors: ${books[0].authors}.</div>`)
console.log(books[1]);
console.log(books[2].title, books[2].pages, books[2].genre, books[2].authors);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;

let s = height * width;

console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;

let v = Math.PI * Math.pow((dC / 2), 2) * heightC;
console.log(v.toFixed(2));

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.sqrt((Math.pow(n, 2) + Math.pow(m, 2)));

console.log(k);

//error

let a = 100;
let b = 500;
let c = 'hello';
let d = 'okten';
let x = 'constant value';
{
    console.log(a);
    let x = 'new value';
    console.log(x);
}
{
    let b = 'new value';
    console.log(b)
}
let results = 100 + a;

console.log(results);
console.log(b, c, d, x);

