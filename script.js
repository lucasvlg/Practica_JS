//#region variables
var num1 = 15;
var num2 = 20;
var esc1 = "La suma es: ";
var esc2 = "La resta es: ";
var esc3 = "La multiplicación es: ";
var esc4 = "La división es: ";
console.log(esc1, num1 + num2);
console.log(esc2, num1 - num2);
console.log(esc3, num1 * num2);
console.log(esc4, num1 / num2);

//#region let
if (true){
let num1 = 12;
let esc = "El número es: "
console.log(esc, num1);
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
const nom = "Nombres: "
const eda = "Edades: ";
const nombrespersonas = persona.map(mostrarnombre);
const edadpersonas = persona.map(mostraredad);
console.log(nom, nombrespersonas);
console.log(eda, edadpersonas);