
const pasosPredeterminados = [
  {
    imagen: "../img/imagenPasoExtra.jpg",
    titulo: "Nuevo Paso",
    descripcion: "Describe aquí las instrucciones de este paso de la receta.",
    tiempo: "5 min"
  }
];

let contadorPasos = document.querySelectorAll(".paso-item").length;

function crearPaso() {
  contadorPasos++;

  const paso = document.createElement("div");
  paso.classList.add("paso-item");

  paso.innerHTML = `
    <div class="paso-imagen">
      <img src="${pasosPredeterminados[0].imagen}" alt="Paso ${contadorPasos}">
    </div>
    <div class="paso-contenido">
      <h3>Paso #${contadorPasos}</h3>
      <p>${pasosPredeterminados[0].descripcion}</p>
      <div class="paso-tiempo">
        <i class="fa-solid fa-clock" style="color: rgb(247, 148, 72);"></i>
        <span>${pasosPredeterminados[0].tiempo}</span>
      </div>
    </div>
    <div class="paso-acciones">
      <button class="btn-editar" type="button"><i class="fa-solid fa-pen"></i></button>
      <button class="btn-eliminar" type="button"><i class="fa-solid fa-trash"></i></button>
    </div>
  `;

  agregarEventoDobleClick(paso);

  return paso;
}

function agregarEventoDobleClick(paso) {
  paso.addEventListener("dblclick", function () {
    paso.remove();
    renumerarPasos();
  });
}

function renumerarPasos() {
  const todosLosPasos = document.querySelectorAll(".paso-item");
  todosLosPasos.forEach((item, index) => {
    const titulo = item.querySelector("h3");
    if (titulo) titulo.textContent = `Paso #${index + 1}`;
  });
  contadorPasos = todosLosPasos.length;
}

const btnAgregarPaso = document.querySelector(".btn-agregar-ingrediente");

btnAgregarPaso.addEventListener("click", function () {
  const contenedorPasos = document.querySelector(".pasos-section");
  const nuevoPaso = crearPaso();
  contenedorPasos.insertBefore(nuevoPaso, btnAgregarPaso);
});

document.querySelectorAll(".paso-item").forEach(function (paso) {
  agregarEventoDobleClick(paso);
});