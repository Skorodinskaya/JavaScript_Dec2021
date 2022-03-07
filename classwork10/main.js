// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
const box1 = document.createElement('div');
box1.style.margin = '10px';
const box2 = document.createElement('div');
box2.style.margin = '10px';

const firstForm = document.createElement('form');
firstForm.setAttribute('id', 'firstForm');
box1.appendChild(firstForm);

const firstInput = document.createElement('input');
firstInput.setAttribute('name', 'firstInput');
firstInput.style.marginRight = '10px'

const secondInput = document.createElement('input');
secondInput.setAttribute('name', 'secondInput');

firstForm.append(firstInput, secondInput);

const secondForm = document.createElement('form');
secondForm.setAttribute('id', 'secondForm');
box2.appendChild(secondForm);

const thirdInput = document.createElement('input');
thirdInput.setAttribute('name', 'thirdInput');
thirdInput.style.marginRight = '10px'

const fourthInput = document.createElement('input');
fourthInput.setAttribute('name', 'fourthInput');
secondForm.append(thirdInput, fourthInput);

const button = document.createElement('button');
button.innerText = 'click';
button.style.marginLeft = '160px';


button.onclick = function () {
    console.log(document.forms.firstForm.firstInput.value);
    console.log(document.forms.firstForm.secondInput.value);
    console.log(document.forms.secondForm.thirdInput.value);
    console.log(document.forms.secondForm.fourthInput.value);
}
document.body.append(box1, box2, button);

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

const wrapper = document.createElement('div');
wrapper.style.margin = '10px';
const inputOne = document.createElement('input');
inputOne.style.margin = '5px';
const inputTwo = document.createElement('input');
inputTwo.style.margin = '5px';
const inputThree = document.createElement('input');
inputThree.style.margin = '5px';
const buttonElement = document.createElement('button');
buttonElement.innerText = 'Click';

wrapper.append(inputOne, inputTwo, inputThree, buttonElement);
document.body.appendChild(wrapper);

buttonElement.onclick = function () {
    const tr = inputOne.value;
    const td = inputTwo.value;
    const content = inputThree.value;

    function tableCreator(tr, td, content) {
        const table = document.createElement('table');
        table.style.border = '2px solid black'
        const tableDiv = document.createElement('div');
        tableDiv.appendChild(table);
        document.body.appendChild(tableDiv);

        for (let i = 0; i < tr; i++) {
            const tr = document.createElement('tr');
            tr.style.border = '2px solid black';
            for (let j = 0; j < td; j++) {
                const td = document.createElement('td');
                td.style.border = '2px solid black';
                td.innerText = `${content}`;
                tr.appendChild(td);
                table.appendChild(tr)
            }
        }
    }

    tableCreator(tr, td, content);
}

//     - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
const swearing = ['Arsehole', 'Balls', 'Bint', 'Bitch', 'Bollocks', 'Bullshit', 'Feck', 'Munter', 'Shit', 'Tits'];
const inputWrapper = document.createElement('div');
inputWrapper.style.margin = '10px';
const input = document.createElement('input');
input.setAttribute('type', 'text');
input.style.margin = '5px';
const btn = document.createElement('button');
btn.innerText = 'Check';
inputWrapper.append(input, btn);
document.body.appendChild(inputWrapper);

btn.onclick = function () {
    const inputValue = input.value;
    for (const item of swearing) {
        if (item.toLowerCase() === inputValue) {
            alert('Do not say bad words');
            input.value = '';
            return;
        }
    }
    if (inputValue) {
        alert(`You wrote: ${inputValue}`);
        input.value = '';
    }
}

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

const divForInput = document.createElement('div');
divForInput.style.margin = '10px';
const inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.style.margin = '5px';
const btnElement = document.createElement('button');
btnElement.innerText = 'Click';
divForInput.append(inputElement, btnElement);
document.body.appendChild(divForInput);

btnElement.onclick = function () {
    const inputValue = inputElement.value;
    for (const swear of swearing) {
        if (inputValue.includes(swear.toLowerCase())) {
            alert('That is a bad word')
            inputElement.value = '';
            return;
        }
    }
    if (inputValue) {
        alert('Good job');
        inputElement.value = '';
    }
}
