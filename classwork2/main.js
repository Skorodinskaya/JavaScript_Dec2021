// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let firstNumber = +prompt('Please enter the first number');
// let secondNumber = +prompt('Please enter the second number');
//
// if (firstNumber > secondNumber) {
//     console.log(firstNumber)
// } else if (firstNumber < secondNumber) {
//     console.log(secondNumber)
// } else {
//     console.log('please write a number')
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let flat = +prompt('Please enter your flat number')
//
// if (flat > 0 && flat <= 20) {
//     console.log('The first entrance')
// } else if (flat >= 21 && flat <= 48) {
//     console.log('The second entrance')
// } else if (flat >= 49 && flat <= 90) {
//     console.log('The third entrance')
// } else {
//     console.log(`There's no flat with that number`)
// }

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = +prompt('Please write a number')
//
// if (number === 10) {
//     console.log('Correct')
// } else {
//     console.log('Incorrect')
// }

// (+prompt('Please write a number') === 10) ? console.log('Correct') : console.log('Incorrect')

//     - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

// let x = 'test';
// if (typeof x == 'number') {
//     console.log(1)
// } else if (typeof x == 'string') {
//     console.log(2)
// } else if (typeof x == 'boolean') {
//     console.log(3)
// } else if (typeof x == 'object') {
//     console.log(4)
// } else {
//     console.log('Error')
// }

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let weather = +prompt(`What's the temperature today?`);
//
// if (weather >= 10 && weather <= 22) {
//     document.write('Study')
// } else {
//     document.write('Online')
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let game = +prompt('Please entre the number from 1 to 5');
 switch (game) {
     case 1:
         console.log('You won a mobile phone');
         break;
     case 2:
         console.log('You won a flat');
         break;
     case 3:
         console.log('You won a automobile');
         break;
     case 4:
         console.log('You won a bubblegum');
         break;
     case 5:
         console.log('You won a concert ticket');
         break;
     default:
         console.log('The number is incorrect')
 }
