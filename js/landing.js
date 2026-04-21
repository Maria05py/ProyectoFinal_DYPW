const itemsGaleria = document.querySelectorAll(".galeria-item");

itemsGaleria.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("activa");
    });
    item.addEventListener("mouseleave", () => {
        item.classList.remove("activa");
    });
});

const email = document.getElementById("e-mail");
const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

email.addEventListener("blur", () => {

    const mensaje = document.getElementById("mensaje");

    if (email.value === "" || !regexCorreo.test(email.value)) {
        mensaje.textContent = "Escribe un correo electrónico válido";
        mensaje.style.display = "block";
        mensaje.style.color = "#ff6b6b";
    } else {
        mensaje.textContent = "Se ha enviado el correo electrónico correctamente";
        mensaje.style.display = "block";
        mensaje.style.color = "#4CAF50";
    }
});