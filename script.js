const hamburger =document.querySelector (".hamburger");
const navMenu =document.querySelector (".nav-menu");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n. addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

/* Scroll */ 
ScrollReveal().reveal('.navbar', { delay: 50});

function validar(){
    var nombre, celular, email, expresion;
    nombre= document.getElementById("nombre").value;
    celular= document.getElementById("celular").value;
    email= document.getElementById("email").value;
    mensaje = document.getElementById("cuadroMensaje").value;
    expresion = /\w + @\w +\.+[a-z]/;
    
    if(nombre === "" || celular === ""|| email === ""){
        alert("Complete el formulario con los campos requeridos");
        return false;
    }
    else if(nombre.length>30){
            alert("Nombre es muy largo");
            return false;
    }
    else if(celular.length>10) {
        alert("Celular debe tener 10 numeros");
        return false;
    } else if(celular.length<10) {
        alert("Celular debe tener 10 numeros");
        return false;
    }
    else if(isNaN(celular)) {
        alert("Celular no es un número");
        return false;
    }
    else if(email.length>100){
        alert("Email debe tener maximo 100 caracteres");
        return false;
    }
    else if(expresion.test(email)){
        alert("Email debe ser valido");
        return false;    
    }
    else if(mensaje.length<30) {
        alert("El mensaje debe contener 30 caracteres");
        return false;
    
}
    
    
} 
