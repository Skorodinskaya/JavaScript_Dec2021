// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const postsDiv = document.createElement('div');
        postsDiv.classList.add('posts');
        const wrapper = document.getElementById('wrapper');
        wrapper.appendChild(postsDiv);
        for (const post of posts) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `<h2>${post.id}.</h2>
<p>${post.title}</p>
`
            const button = document.createElement('button');
            button.innerText = 'comments';
            postsDiv.append(postDiv, button);

            button.onclick = () => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then(response => response.json())
                    .then(comments => {
                        const commentsDiv = document.createElement('div');
                        commentsDiv.classList.add('comments');
                        for (const comment of comments) {
                            const commentDiv = document.createElement('div');
                            commentDiv.classList.add('comment');
                            commentDiv.innerHTML = `<h4>${comment.id})</h4>
<p>${comment.email}</p>
<p>${comment.body}</p>
`
                            commentsDiv.appendChild(commentDiv);
                            postDiv.appendChild(commentsDiv);
                            button.disabled = true;
                        }
                    })
            }
        }
    })