/*Creamos un evento que espera un click sobre la hamburguesa*/
document.getElementById("menuInicial").addEventListener("click", funcionDeLaHamburguesa);

/*Cuando se hace click en la hamburguesa se ejecuta la siguiente funcion*/
function funcionDeLaHamburguesa() {
  document.getElementById("menuInicial").classList.toggle('rotate');
  document.getElementsByClassName("menuDeNavegacion")[0].classList.toggle('transform');
  document.body.classList.toggle("classScrollHidden");
}