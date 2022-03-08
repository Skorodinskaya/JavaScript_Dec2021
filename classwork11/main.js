let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

const wrapper = document.createElement('div');
const key = 'users';

const link = document.createElement('a');
link.href = 'favourites.html';
link.innerText = 'Favourites Page';

for (const user of users) {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `<h2>${user.name}</h2>
<p>Age: ${user.age}</p>
<p>Status: ${user.status}</p>
`
    const button = document.createElement('button');
    button.innerText = 'Click';
    button.onclick = () => {
        const send = JSON.parse(localStorage.getItem(key)) || [];
        send.push(user);
        localStorage.setItem(key, JSON.stringify(send));
    }
    userDiv.appendChild(button);
    wrapper.appendChild(userDiv);
}
document.body.appendChild(wrapper);
