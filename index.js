"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var Abecedario = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var AbecedariRecorrido = new Array(Abecedario.length - 1);
function Recorre(pocision) {
    var index = pocision;
    var i;
    for (i = 0; i < Abecedario.length; i++) {
        AbecedariRecorrido[i] = Abecedario[index];
        index++;
        if (index == Abecedario.length) {
            index = 0;
        }
    }
}
function Encripta(palabra, llave) {
    var i;
    var y;
    var bandera;
    var palabraEncriptada = "";
    for (i = 0; i < palabra.length; i++) {
        bandera = false;
        if (palabra.charAt(i) != " ") {
            for (y = 0; y < Abecedario.length && !bandera; y++) {
                if (Abecedario[y] == palabra.charAt(i)) {
                    palabraEncriptada += llave[y];
                    bandera = true;
                }
            }
        }
        else {
            palabraEncriptada += " ";
        }
    }
    return palabraEncriptada;
}
function imprimeCadenas(llave) {
    var cadena = "";
    var i;
    for (i = 0; i < llave.length; i++) {
        cadena += llave[i] + "|";
    }
    return cadena;
}
console.clear();
var pos;
do {
    pos = readline_sync_1.questionInt("Pocisiones a recorrer: ");
    Recorre(pos);
    if (pos > Abecedario.length) {
        console.log("La pocision no debe superar mas de " + Abecedario.length + " posiciones, intente con otra pocision.");
    }
} while (pos > Abecedario.length);
var palabra = readline_sync_1.question("Palabra encriptada: ");
console.log(imprimeCadenas(Abecedario));
console.log(imprimeCadenas(AbecedariRecorrido));
console.log(Encripta(palabra.toUpperCase().trim(), AbecedariRecorrido));
