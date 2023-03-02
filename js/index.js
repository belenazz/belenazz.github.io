let fondoMain = document.getElementById("main")

let nombreH1 = document.getElementById("nombre");

let li1= document.getElementById("li1");
let li2= document.getElementById("li2");
let li3= document.getElementById("li3");

let avatar = document.getElementById("avatar");


document.getElementById("oscuro").addEventListener('click',function () {

    fondoMain.classList.toggle("modoOscuro");
    nombreH1.classList.toggle("modoOscuro2")
})

avatar.addEventListener('mouseover',function() {
   avatar.classList.add("agrandar");
})

avatar.addEventListener('mouseleave',function() {
    avatar.classList.remove("agrandar");
 })