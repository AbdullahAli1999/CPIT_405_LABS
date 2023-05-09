const intitLikes = 100;
const initDislikes = 20;

let upCount = intitLikes
let downCount = initDislikes

let likesBtn = document.getElementById("likebutton");
let disLikesBtn = document.getElementById("dislikebutton");
likesBtn.innerHTML = "👍" + intitLikes;
disLikesBtn.innerHTML = "👎" + initDislikes;

function doLike(){
    upCount++;
    likesBtn.innerHTML = "👍" + upCount
    console.log("You Like this!!!!");
}

function doDislike(){

    downCount++;
    disLikeElement.innerText = "👎" + downCount;
    disLikeElement.disabled = true;
    console.log("u DisLike this!");
}