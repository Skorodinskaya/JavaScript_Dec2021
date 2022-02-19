// a) додає клас з назвою групи, елементу з ід main_header
document.getElementById('main_header').classList.add('dec-2021')

// b) робить шириниу елементу ul 400px
const ulElements = document.getElementsByTagName('ul');
for (const ulElement of ulElements) {
    ulElement.style.width = '400px';
    ulElement.style.border = '1px solid red';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
const linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
    linkListElement.style.border = '1px solid green'
}

// d) отримує текст який зберігається в елементі з класом listElement2
const listElement2 = document.getElementsByClassName('listElement2');
for (const listElement2Element of listElement2) {
    console.log(listElement2Element.innerHTML);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
const liElements = document.getElementsByTagName('li');
for (const liElement of liElements) {
    liElement.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
const aElements = document.getElementsByTagName('a');
for (const aElement of aElements) {
    aElement.classList.add('anchor')
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (const aElement of aElements) {
    if (aElement.innerText === 'link3') {
        aElement.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const aElement of aElements) {
    aElement.classList.add(`element_${aElement.innerText}`)
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const subHeaderElements = document.getElementsByClassName('sub-header');
// for (const subHeaderElement of subHeaderElements) {
//     subHeaderElement.style.backgroundColor = prompt('Enter color, please')
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// for (const subHeaderElement of subHeaderElements) {
//     if (subHeaderElement.innerText === 'content 2 segment') {
//         subHeaderElement.style.color = prompt('Enter color of the 2 segment')
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const content_1Elements = document.getElementsByClassName('content_1');
// for (const content1Element of content_1Elements) {
//     content1Element.innerText = prompt('Enter text');
// }

// l) отримати елементи p та змінити їм padding на 20px
const pElements = document.getElementsByTagName('p');
for (const pElement of pElements) {
    pElement.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
const text2Elements = document.getElementsByClassName('text2');
for (const text2Element of text2Elements) {
    text2Element.innerHTML = '<h2>dec-2021</h2>'
}