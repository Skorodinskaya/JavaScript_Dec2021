const url = new URL(location.href);
const post = JSON.parse(url.searchParams.get('data'));

const postDetails = document.getElementsByClassName('postDetails')[0];
postDetails.innerHTML = `
<h4>User-Id - ${post.userId}. ID - ${post.id} </h4>
<h3>Title - ${post.title}</h3>
<p>Body - ${post.body}</p>
`
const commentsDiv = document.getElementsByClassName('comments')[0];

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        for (const comment of comments) {
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment')
            commentDiv.innerText = comment.body;
            commentsDiv.appendChild(commentDiv);
        }
    })