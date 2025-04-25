let posts = [];

function openPostModal() {
    document.getElementById('postModal').style.display = 'flex';
}

function closePostModal() {
    document.getElementById('postModal').style.display = 'none';
    document.getElementById('newPostText').value = '';
}

function addPost() {
    const text = document.getElementById('newPostText').value;
    if (text.trim() === '') return;

    const newPost = {
        id: Date.now(),
        text,
        likes: 0,
        bookmarks: 0
    };
    posts.unshift(newPost);
    renderPosts();
    closePostModal();
}

function renderPosts() {
    const container = document.getElementById('posts');
    container.innerHTML = '';
    posts.forEach(post => {
        const div = document.createElement('div');
        div.className = 'post';
        div.innerHTML = `
            <p>${post.text}</p>
            <div class="post-icons">
                <span onclick="likePost(${post.id})">👍 ${post.likes}</span>
                <span onclick="bookmarkPost(${post.id})">🔖 ${post.bookmarks}</span>
            </div>
        `;
        container.appendChild(div);
    });
}

function likePost(id) {
    const post = posts.find(p => p.id === id);
    if (post) {
        post.likes++;
        renderPosts();
    }
}

function bookmarkPost(id) {
    const post = posts.find(p => p.id === id);
    if (post) {
        post.bookmarks++;
        renderPosts();
    }
}

function filterPosts(type) {
    // You can add filtering logic here for 'myposts' or 'bookmarked'
    if (type === 'everyone') renderPosts();
    else alert('Filtering not yet implemented.');
}

window.onclick = function(event) {
    const modal = document.getElementById('postModal');
    if (event.target == modal) {
        closePostModal();
    }
}
