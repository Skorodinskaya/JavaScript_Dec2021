// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersDiv = document.createElement('div');
        for (const user of users) {
            const userDiv = document.createElement('div');
            userDiv.innerHTML = `<h2>${user.id}.</h2>
<p>${user.name}</p>
<p>${user.email}</p>
`
            const userBtn = document.createElement('button');
            userBtn.innerText = 'get posts';
            document.body.appendChild(usersDiv);
            usersDiv.append(userDiv, userBtn);

            userBtn.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(response => response.json())
                    .then(posts => {
                        const postsDiv = document.createElement('div');
                        userDiv.appendChild(postsDiv);

                        for (const post of posts) {
                            const postDiv = document.createElement('div');
                            postDiv.innerHTML = `
<p>Post: </p>
<h4>${post.id})</h4>
<p>${post.title}</p>
`
                            userBtn.disabled = true;
                            const postBtn = document.createElement('button');

                            postBtn.innerText = 'get comments';
                            postsDiv.append(postDiv, postBtn);
                            postBtn.onclick = () => {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(response => response.json())
                                    .then(comments => {
                                        const commentsDiv = document.createElement('div');
                                        postDiv.appendChild(commentsDiv);
                                        for (const comment of comments) {
                                            const commentDiv = document.createElement('div');
                                            commentDiv.innerHTML = `
<p>Comment: </p>
<h4>${comment.id})</h4>
<p>${comment.body}</p>
`
                                            postBtn.disabled = true;
                                            commentsDiv.appendChild(commentDiv);
                                        }
                                    })
                            }

                        }
                    })
            }
        }
    })