// отримує текст з параграфа з id "content"
console.log(document.getElementById('content'));

// отримує текст з блоку з id "rules"
console.log(document.getElementById('rules'));

// замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = 'Hello. How are you?'

// -- замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = 'I changed text in rules block'

// -- змініть кожному елементу колір фону на червоний
const changeColor = document.body.children;

for (const changeBackgroundElement of changeColor) {
    changeBackgroundElement.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій
for (const changeColorElement of changeColor) {
    changeColorElement.style.color = 'blue'
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log

console.log(document.getElementById('rules').classList);

// -- поміняти колір тексту у всіх елементів fc_rules на yellow
let fc_rules = document.getElementsByClassName('fc_rules');
for (const fcRule of fc_rules) {
    fcRule.style.color = 'yellow'
}