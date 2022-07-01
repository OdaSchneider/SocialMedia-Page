
function render() {
    storyTimeline();
    post();
}


function storyTimeline() {
    let story = document.getElementById('stories');
    story.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        let user = posts[i];
        story.innerHTML += `
        
        <a href="#">
            <img class='profilepicture' src="${user['profilepicture']}">
            <p>${user['username']}</p>
        </a>`
    }
}

function post() {
    let post = document.getElementById('posts');
    post.innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        let user = posts[i];
        post.innerHTML += templatePost(user, i);

        comments(i);
    }
}


function comments(i) {
    let newComment = document.getElementById(`newComment${i}`);
    newComment.innerHTML = '';

    for (let j = 0; j < posts[i]['comments'].length; j++) {
        let comment = posts[i]['comments'][j];
        newComment.innerHTML += templateNewComment(comment, i, j);
    }
}


function save() {
    let postStorage = JSON.stringify(posts);
    localStorage.setItem('posts', postStorage);
    load();
}


function load() {
    let postStorage = localStorage.getItem('posts');
    if (postStorage) {
        posts = JSON.parse(postStorage);
    }
    render();
}


function deleteComment(i, j) {
    let element = posts[i]['comments'];
    element.splice(j, 1);
    save();
}


function addComment(i) {
    let newComment = document.getElementById(`input${i}`);
    posts[i]['comments'].push(newComment.value);
    newComment.innerHTML = '';
    save();
}

function like(i) {
    document.getElementById(`clicks${i}`).innerHTML = posts[i]['likes'] + 1;
    document.getElementById(`likeIcon${i}`).src = 'img/icon/heart.ico';
    document
        .getElementById(`likeIcon${i}`)
        .setAttribute('onclick', `javascript: dislike(${i})`);
}

function dislike(i) {
    document.getElementById(`clicks${i}`).innerHTML = posts[i]['likes'];
    document.getElementById(`likeIcon${i}`).src = 'img/icon/like.ico';
    document
        .getElementById(`likeIcon${i}`)
        .setAttribute('onclick', `javascript: like(${i})`);
}

function fav(i) {
    let favourite = document.getElementById(`fav${i}`);
    favourite.classList.toggle('fav');
}


function search() {
    let input = document.getElementById('search');
    let filter = input.value.toLocaleLowerCase();
    let search = document.getElementsByClassName('find');

    for (i = 0; i < search.length; i++) {
        if (search[i].innerText.toLowerCase().includes(filter)) {
            search[i].style.display = '';
        } else {
            search[i].style.display = "none";
        }
    }
}


function openNav(){
    let nav = document.getElementById('responsive');
    nav.style.height = '300px';
    document
        .getElementById('responsiveNavButton')
        .setAttribute('onclick', 'javascript: closeNav()');
}

function closeNav(){
    let nav = document.getElementById('responsive');
    nav.style.height = '50px';
    document
        .getElementById('responsiveNavButton')
        .setAttribute('onclick', 'javascript: openNav()');
}