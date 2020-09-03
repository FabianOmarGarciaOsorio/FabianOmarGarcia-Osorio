document.getElementById("boton").onclick=calculo;
function calculo()
{
var radio = document.getElementById("Radio").value
var Area = radio*radio*3.14;
document.write("El área de su circulo es: "+Area + "metros");
}