const intitLikes = 100;
const initDislikes = 20;

let upCount = intitLikes
let downCount = initDislikes

let likesBtn = document.getElementById("likebutton");
let disLikesBtn = document.getElementById("dislikebutton");
likesBtn.innerHTML = "👍" + intitLikes;
disLikesBtn.innerHTML = "👎" + initDislikes;

//check for cookies 

window.onload = function(){
    if(document.cookie != undefined && document.cookie.indexOf('voted')!= -1){
        disableBtn();
    }
}

function setCookie(){
    document.cookie = "voted=true; Max-Age" + 60;

}

function doLike(){
    upCount++;
    likesElment.innerText = "👍" + upCount
    console.log("You Like this!!!!");
}

function doDislike(){

    downCount++;
    disLikeElement.innerText = "👎" + downCount;
    disableBtn();
    setCookie();
    console.log("u DisLike this!");
}

function disableBtn() {
    likesElment.disabled = true;
    disLikeElement.disabled = true;    
}