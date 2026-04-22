document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let user = document.getElementById("login-user");
    let pass = document.getElementById("login-pass");

    let userValue = user.value.trim();
    let passValue = pass.value.trim();
    user.classList.remove("error");
    pass.classList.remove("error");
    let error = false;
    if(userValue === ""){
        user.classList.add("error");
        error = true;
    }
    if(passValue === ""){
        pass.classList.add("error");
        error = true;
    }
    if(error){
        alert("Debe completar todos los campos");
        return;
    }
    let usuarioCorrecto = "admin";
    let passwordCorrecto = "1234";

    if(userValue === usuarioCorrecto && passValue === passwordCorrecto){
        alert("Acceso correcto ✅");
        window.location.href = "panelgestionchef.html";
    } else {
        alert("Usuario o contraseña incorrectos");
        user.classList.add("error");
        pass.classList.add("error");
    }
});