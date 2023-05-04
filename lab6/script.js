const intitLikes = 100;
const initDislikes = 20;

let upCount = intitLikes
let downCount = initDislikes

let likesElment = document.getElementById("likebutton");
let disLikeElement = document.getElementById("dislikebutton");
likesElment.innerText = "👍" + intitLikes;
disLikeElement.innerText = "👎" + initDislikes;

function doLike(){
    upCount++;
    likesElment.innerText = "👍" + upCount
    console.log("You Like this!!!!");
}

function doDislike(){
    downCount--;
    disLikeElement.innerText = "👎" + downCount;
    console.log("u DisLike this!");
}