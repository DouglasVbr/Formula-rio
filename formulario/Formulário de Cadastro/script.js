function validaPassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm_password").value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return false;
    }
    return true;
}
