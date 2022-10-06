//#region variables
var num1 = 15;
var num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//#region let
if (true){
let num1 = 12;
console.log(num1);
}

//#region constantes
const num4 = {
    num1: 5,
    num2: 6,
}
console.log(num4);

//#region array
const persona = [
    {
        nombre: "Lucas",
        edad: 17
    },
    {
        nombre: "Mateo",
        edad: 22
    },
    {
        nombre: "Elias",
        edad: 27
    },
];
const mostrarnombre = function(nombres) {
    return nombres.nombre;
}
const mostraredad = function(edades) {
    return edades.edad;
}
const nombrespersonas = persona.map(mostrarnombre);
const edadpersonas = persona.map(mostraredad);
console.log(nombrespersonas);
console.log(edadpersonas);