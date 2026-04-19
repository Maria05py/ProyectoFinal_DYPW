const itemsGaleria = document.querySelectorAll(".galeria-item");

itemsGaleria.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.classList.add("activa");
    });
    item.addEventListener("mouseleave", () => {
        item.classList.remove("activa");
    });
});