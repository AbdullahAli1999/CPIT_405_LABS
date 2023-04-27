// Mouse Eevents


function handleClick() {
    console.log("Ouch, I have been clicked!!")
}

let btn = document.getElementById("clickMeBtn");
btn.addEventListener("click", handleClick);
function handleClick() {
    alert("The btn was clicked")
}

// Keyboard events Inline

function handleMyKeyEvent(e) {
    let pElem = document.getElementById("result");

    const numeralsinAr = "٠١٢٣٤٥٦٧٨٩";
    const numeralsinEn = "0123456789";
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        let i = numeralsinAr.indexOf(e.key);
        if (i > -1) {
            pElem.innerText += numeralsinEn[i];
        } else {
            pElem.innerText += e.key;
        }
    }
}

// Keyboard Events in the DOM

let inputFieldElement = document.getElementById("inputField");
inputFieldElement.addEventListener("keyup", function (e) {
    document.getElementById("result").innerHTML += "<p>Key: " + e.key + "; Key code: " + e.key + "</p>"
});


// Removing Registered Mouse or Keyboard Events

let btn1 = document.getElementById("clickMeBtn");
btn1.addEventListener("click", handleClick);

function handleClick() {
  alert("The button was clicked. The mouse event will be removed");
  btn1.removeEventListener("click", handleClick, false);
}
