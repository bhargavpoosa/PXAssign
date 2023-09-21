const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    if ((username === "Bhargav" && password === "1234") || (username === "Sasuke" && password === "1234")) {
        alert("You have successfully logged in.");
        location.href = "../homepage/home.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
