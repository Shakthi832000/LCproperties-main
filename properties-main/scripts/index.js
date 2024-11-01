// Blurring loading landing page starts
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++
    if(load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}

// Blurring loading landing page ends

// login

function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let userType = document.getElementById("usertype").value;
    if(username == "admin" && password == "admin" && userType == "admin")
    {
        window.location.href = "admin.html";
    }else if (username == "user" && password == "user" && userType == "user"){
        window.location.href = "user.html";
    }
    else{
        window.location.href = "index.html";
        alert("Login failed, incorrect username, password, or user type not selected or incorrect");
    }
}