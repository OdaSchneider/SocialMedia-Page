function templatePost(user, i) {
    return `
            <div class="post find">
                <div class="postHead">
                    <div class="postHead-child">
                        <img class='profilepicture smallprofilepic' src="${user['profilepicture']}">
                        <p>${user['username']}</p>
                    </div>
                    <button>°°°</button>
                </div>

                <div>
                  <img class='postimage' src="${user['image']}">
                </div>

                <div class="post-icons">
                    <div class="post-icons-left">
                        <img src="img/icon/like.ico" id="likeIcon${i}" onclick="like(${i})">
                        <img src="img/icon/chat.png">
                        <img src="img/icon/send.ico">
                    </div>
                    <div class="post-icons-right">
                        <img src="img/icon/favourite.png" id="fav${i}" onclick="fav(${i})">
                    </div>
                </div>

                <div class="likes">Gefällt <span id="clicks${i}">${user['likes']}</span> Mal</div>

                <div class="description">
                    <p><span>${user['username']}</span>
                    ${user['description']}</p>
                </div>

                <div id="newComment${i}"></div>

           
                <form onsubmit="addComment(${i})" class="addComments">
                    <img src="img/icon/smily.ico">
                    <input required type='text' id="input${i}" placeholder="Kommentieren...">
                    <button>Posten</button
                </form>

              
            </div>`;
}

function templateNewComment(comment, i, j) {
    return `
    <div class="comment">
        <p><span>${user}</span> ${comment}</p>
        <img onclick="deleteComment(${i},${j})" src="img/icon/x.ico">
    </div>`;
}
