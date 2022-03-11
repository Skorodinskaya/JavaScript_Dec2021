// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(posts => {
        const postsDiv = document.createElement('div');
        postsDiv.classList.add('posts');
        const wrapperPosts = document.getElementById('wrapperPosts');
        wrapperPosts.appendChild(postsDiv);
        for (const post of posts) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');
            postDiv.innerHTML = `<h3>${post.id}.</h3>
                                 <p>${post.title}</p>
`;
            postsDiv.appendChild(postDiv);
        }
    })


// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(comments => {
        const commentsDiv = document.createElement('div');
        commentsDiv.classList.add('comments');
        const wrapperComments = document.getElementById('wrapperComments');
        wrapperComments.appendChild(commentsDiv);
        for (const comment of comments) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.innerHTML = `
            <h2>${comment.id}</h2>
            <p>${comment.body}</p>
            `
            commentsDiv.appendChild(commentDiv);
        }
    })