import {question,questionInt} from "readline-sync";
var Abecedario:string[]=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var AbecedariRecorrido:string[]= new Array(Abecedario.length-1) 
function Recorre(pocision:number){
    var index=pocision
    var i:number
    for(i=0;i<Abecedario.length;i++){
        AbecedariRecorrido[i]=Abecedario[index]
        index++
        if (index==Abecedario.length){
            index=0;
        }
    }
}
function Encripta(palabra:string,llave:string[]):string{
    var i:number;
    var y:number;
    var bandera:boolean
    var palabraEncriptada:string="";
    for(i=0;i<palabra.length;i++){
        bandera=false
        if(palabra.charAt(i)!=" "){
            for(y=0;y<Abecedario.length&&!bandera;y++){
                if(Abecedario[y]==palabra.charAt(i)){
                    palabraEncriptada+=llave[y]
                    bandera=true
                }
            }
        }else{
            palabraEncriptada+=" "
        }
    }
    return palabraEncriptada

}
function imprimeCadenas(llave:string[]):string{
    var cadena:string=""
    var i:number
    for(i=0;i<llave.length;i++){
        cadena+=llave[i]+"|"
    }
    return cadena
}

console.clear()
var pos:number
do{
    pos=questionInt("Pocisiones a recorrer: ")
    Recorre(pos)
    if(pos>Abecedario.length){
        console.log("La pocision no debe superar mas de "+Abecedario.length+" posiciones, intente con otra pocision.")
    }
}while(pos>Abecedario.length)

var palabra:string=question("Palabra encriptada: ")
console.log(imprimeCadenas(Abecedario))
console.log(imprimeCadenas(AbecedariRecorrido))
console.log(Encripta(palabra.toUpperCase().trim(),AbecedariRecorrido))
