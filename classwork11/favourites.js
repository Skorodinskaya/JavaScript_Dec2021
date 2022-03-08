const wrapper = document.createElement('div');
const link = document.createElement('a');
link.href = 'index.html';
link.innerText = 'Home';
const key = 'favourites';
const users = JSON.parse(localStorage.getItem(key));

for (const user of users) {
    const userDiv = document.createElement('div');
    userDiv.innerHTML = `<h2>${user.name}</h2>
<p>Age: ${user.age}</p>
<p>Status: ${user.status}</p>
`
    wrapper.appendChild(userDiv);
}
document.body.append(link, wrapper);
