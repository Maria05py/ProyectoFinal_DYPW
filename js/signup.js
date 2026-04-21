const inputs = document.querySelectorAll("#formulario input");

const formulario=document.getElementById("formulario");
const expresion={
    //llave: valor
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/,
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    password: /^.{4,12}$/,
    correo:/^[a-zA-Z0-9\_]+@[a-zA-Z]+\.[a-zA-Z]+$/,
    telefono: /^\d{8,11}$/ 
}

const campos={
    usuario:false,
    nombre:false,
    password:false,
    correo:false,
    telefono:false
}

const validarFormulario=(e)=>{
    switch(e.target.name){
        case "usuario":
            validarCampo(expresion.usuario,e.target,"usuario");
        break;
        case "nombre":
            validarCampo(expresion.nombre,e.target,"nombre");
        break;
        case "password":
            validarCampo(expresion.password,e.target,"password");
            validarPassword2();
        break;
        case "password2":
            validarPassword2();
        break;
        case "correo":
            validarCampo(expresion.correo,e.target,"correo");
        break;
        case "telefono":
            validarCampo(expresion.telefono,e.target,"telefono");
        break;
    }

}

const validarCampo=(expresion,input,campo)=>{
    if(expresion.test(input.value)){
        console.log("Correcto",campo,input.value)
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("bx-x-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("bx-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo]=true;
    }else{
        console.log("Incorrecto",campo,input.value)
        document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("bx-x-circle");
        document.querySelector(`#grupo__${campo} i`).classList.remove("bx-check-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo]=false;
    }
}

const validarPassword2=()=>{
    let inputPassword1= document.getElementById("password");
    let inputPassword2= document.getElementById("password2");

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById("grupo__password2").classList.add("formulario__grupo-incorrecto");
        document.getElementById("grupo__password2").classList.remove("formulario__grupo-correcto");
        document.querySelector("#grupo__password2 i").classList.add("bx-x-circle");
        document.querySelector("#grupo__password2 i").classList.remove("bx-check-circle");
        document.querySelector("#grupo__password2 .formulario__input-error").classList.add("formulario__input-error-activo");
        campos[password]=false;
    }else{
        document.getElementById("grupo__password2").classList.remove("formulario__grupo-incorrecto");
        document.getElementById("grupo__password2").classList.add("formulario__grupo-correcto");
        document.querySelector("#grupo__password2 i").classList.remove("bx-x-circle");
        document.querySelector("#grupo__password2 i").classList.add("bx-check-circle");
        document.querySelector("#grupo__password2 .formulario__input-error").classList.remove("formulario__input-error-activo");
        campos[password]=true;
    }

}

inputs.forEach((input)=>{
    input.addEventListener("blur",validarFormulario);//blur evento cuando quitamos el foco del input
    input.addEventListener("keyup",validarFormulario);//Keyup evento cuando presionamos una tecla
})

formulario.addEventListener("submit",(e)=>{
    e.preventDefault(); //Evita que se recargue la página


    const terminos = document.getElementById("terminos");
    //if(checked):
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){
        console.log("Lleno")
        document.getElementById("formulario__mensaje").classList.remove("formulario__mensaje-activo");
        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(()=>{
            location.reload();//Recargar la pagina donde se encuentra
        },4000)
        
    }else{
        console.log("Vacio")
        document.getElementById("formulario__mensaje").classList.add("formulario__mensaje-activo");
    }
})