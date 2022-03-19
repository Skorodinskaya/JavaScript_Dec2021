const usersDiv = document.getElementsByClassName('users')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            const userContent = document.createElement('div');
            userContent.classList.add('userContent');
            userContent.innerText = `${user.id} - ${user.name}`

            const userBtn = document.createElement('button');
            userBtn.innerText = 'details';
            userBtn.onclick = () => {
                location.href = `./user-details.html?data=${JSON.stringify(user)}`
            }
            const userBlock = document.createElement('div');
            userBlock.classList.add('userBlock');
            userBlock.append(userContent, userBtn);
            userDiv.appendChild(userBlock);
            usersDiv.appendChild(userDiv);
        }
    })
