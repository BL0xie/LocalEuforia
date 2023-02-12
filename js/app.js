//variables

let precioParcial = 1
let precioParcial2 = 1
let trabajoARealizar = 1

//Definicion de precios

const retirarTrabajo = 1000
const semi = 2000
const capping = 3000



//Establece si hay que retirar un trabajo previo o no

do{
let trabajoPrevio = prompt ("Debe retirar un trabajo previo?")
if (trabajoPrevio == "si"){
        precioParcial = retirarTrabajo
    }
    else if (trabajoPrevio == "no") {precioParcial = 0}
    else {alert("especifique 'si' o 'no'")}
}
while (precioParcial !== 0 && precioParcial !== retirarTrabajo)


console.log(precioParcial)



//Establece trabajo principal a realizar

do{
let trabajoARealizar = prompt ("Desea realizarse capping o semi?")
    if(trabajoARealizar == "capping") {
        precioParcial2 = capping
    }
    else if (trabajoARealizar == "semi"){
        precioParcial2 = semi
    }
    else {alert("especifique 'capping' o 'semi'")}
}
while (precioParcial2 !== semi && precioParcial2 !== capping)



function precioSub(precioParcial, precioParcial2)
{
    return precioParcial + precioParcial2
}
let precioFinal = precioSub (precioParcial, precioParcial2)
console.log("El subtotal es: " + precioFinal)



//Establece medio de pago

let medioPago = prompt ("Cual es su medio de pago?")
switch (medioPago){
    case "efectivo":
        precioFinal = precioFinal / 100 * 90
        console.log("Descuento del 10%")
        break
    case "tarjeta":
        precioFinal = precioFinal / 100 * 110
        console.log("Recargo del 10% extra")
        break
    case "debito":
        precioFinal = precioFinal
        console.log("Corresponde precio de lista")
        break
    default :
        console.log("No especifica medio de pago")
        break
}

// while (medioPago !== "efectivo" && medioPago !== "tarjeta" && medioPago !== "debito")

console.log("El trabajo a realizar cuesta: " + precioFinal)

