// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".

const text = document.getElementById('text');
const text_Btn = document.getElementById('text_Btn');
text_Btn.onclick = function () {
    text.style.visibility = 'hidden';
}
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

const selfHidden = document.getElementById('self-hidden');
selfHidden.onclick = function () {
    this.style.display = 'none';
}
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const ageBtn = document.getElementById('ageBtn');
ageBtn.onclick = function (e) {
    e.preventDefault()
    const age = document.getElementById('age').value;
    if (age < 18) {
        alert('you are too young')
    } else if (age >= 18) {
        alert('welcome')
    } else {
        alert('Please, write your age')
    }
}

// - Создайте меню, которое раскрывается/сворачивается при клике

const title = document.querySelector('.title');
const frameworks = document.querySelector('.frameworks');
title.onclick = function () {
    frameworks.classList.toggle('hidden');
}
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

const comments = [
    {
        title: 'Euphoria',
        body: 'Euphoria follows a group of high school students as they navigate love and friendships in a world of drugs, sex, trauma and social media. '
    },
    {
        title: 'Teen Wolf',
        body: 'Teen Wolf is an American supernatural teen drama television series developed by Jeff Davis for MTV, loosely based on the 1985 film of the same name.'
    },
    {
        title: 'The Vampire Diaries',
        body: 'The Vampire Diaries is an American supernatural teen drama television series developed by Kevin Williamson and Julie Plec.'
    },
    {
        title: 'Once Upon a Time',
        body: 'Once Upon a Time is an American fantasy adventure drama television series that aired for seven seasons on ABC from October 23, 2011 to May 18, 2018.'
    },
    {
        title: 'Money Heist',
        body: 'Money Heist - Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan.'
    },
]
const commentsWrapper = document.createElement('div');
for (const comment of comments) {
    const commentContent = document.createElement('div');
    const commentTitle = document.createElement('h2');
    commentTitle.innerText = `Title - ${comment.title}`;

    const commentBody = document.createElement('p');
    commentBody.innerText = `Body - ${comment.body}`;

    const btn = document.createElement('button');
    btn.innerText = 'hide';

    btn.onclick = () => {
        commentBody.style.display = 'none'
    }

    commentContent.append(commentTitle, commentBody, btn);

    commentsWrapper.appendChild(commentContent);
}
document.body.appendChild(commentsWrapper);


