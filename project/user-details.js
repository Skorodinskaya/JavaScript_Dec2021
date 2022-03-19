const url = new URL(location.href);
const user = JSON.parse(url.searchParams.get('data'));
const userDetails = document.getElementsByClassName('user-details')[0];
userDetails.innerHTML = `<h2>${user.id} - ${user.name}</h2>
<h4>${user.username}</h4>
<h4>Email: ${user.email}</h4>
<h4>Address:</h4>
<p>Street: ${user.address.street}</p>
<p>Suite: ${user.address.suite}</p>
<p>City: ${user.address.city}</p>
<p>Zipcode: ${user.address.zipcode}</p>
<p>Geo</p>
<p>Lat: ${user.address.geo.lat}</p>
<p>Lng: ${user.address.geo.lng}</p>
<h4>Phone: ${user.phone}</h4>
<h4>Website: ${user.website}</h4>
<h4>Company:</h4>
<p>Name: ${user.company.name}</p>
<p>Catch phrase: ${user.company.catchPhrase}</p>
<p>BS: ${user.company.bs}</p>
`

const postBtn = document.createElement('button');
postBtn.classList.add('postBtn');
postBtn.innerText = 'post of current user';

const postsDiv = document.getElementsByClassName('posts')[0];

postBtn.onclick = function () {
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(response => response.json())
        .then(posts => {
            for (const post of posts) {
                const postDiv = document.createElement('div');
                postDiv.innerText = `${post.title}`;
                postsDiv.appendChild(postDiv);

                const postDetailsBtn = document.createElement('button');
                postDetailsBtn.classList.add('postDetailsBtn');
                postDetailsBtn.innerText = 'details';
                postDetailsBtn.onclick = () => {
                    location.href = `./post-details.html?data=${JSON.stringify(post)}`
                }

                const postContent = document.createElement('div');
                postContent.classList.add('post');
                postContent.append(postDiv, postDetailsBtn);
                postsDiv.appendChild(postContent);
            }
        })
}
userDetails.appendChild(postBtn);