// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div = document.createElement('div');
div.innerText = 'JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.'

div.classList.add('wrap', 'collapse', 'alpha', 'beta');

div.style.backgroundColor = 'pink';
div.style.color = 'green';
div.style.fontSize = '50px';
div.style.textDecoration = 'underline';

document.body.appendChild(div);

const cloneNodeDiv = div.cloneNode(true);
document.body.appendChild(cloneNodeDiv);

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.

let array = ['Main', 'Products', 'About us', 'Contacts'];
const menu = document.getElementsByClassName('menu')[0];
for (const item of array) {
    const li = document.createElement('li');
    li.innerText = item;
    menu.appendChild(li)
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const item of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `${item.title} - ${item.monthDuration}`
    document.body.appendChild(div);
}

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const item of coursesAndDurationArray2) {
    const div = document.createElement('div');
    div.classList.add('item');
    const h1 = document.createElement('h1');
    div.classList.add('heading');
    h1.innerText = item.title;
    const p = document.createElement('p');
    div.classList.add('description');
    p.innerText = item.monthDuration;

    div.appendChild(p);
    div.appendChild(h1);
    document.body.appendChild(div);
}

