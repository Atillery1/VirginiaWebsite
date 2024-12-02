document.addEventListener("DOMContentLoaded", () => {
    const email = document.getElementById("email");
    const confirmEmail = document.getElementById("confirmEmail");
    const errorMessage = document.getElementById("error-message");

    confirmEmail.addEventListener("input", () => {
        if (email.value !== confirmEmail.value) {
            errorMessage.textContent = "Emails do not match!";
            errorMessage.style.color = "red";
        } else {
            errorMessage.textContent = "";
        }
    });
});


