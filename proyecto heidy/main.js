let estudiantes=[];

const nombre = document.querySelector("nombre");
const edad=document.querySelector("edad");
const email=document.querySelector("email");
const cedula=document.querySelector("cedula");
const agregar=document.querySelector("agregar");

estudiantes={
    nombre:nombre,
    edad:edad,
    email:email,
    cedula:cedula,
    nota:nota,

};
formulario=addEventListener("submit",function(event){
    event.preventDefault();

    console.log(datosformulario.entries().toarray);

})  
    