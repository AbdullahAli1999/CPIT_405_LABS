document.cookie = "name:Abdullah; Secure"

function showCookies(){
    let output = document.getElementById('cookies');
    output.textContent =  document.cookie;
}