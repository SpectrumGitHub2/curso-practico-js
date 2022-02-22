const precio = 115;
const descuento = 15;

const porcentajeDescuento = 100 - descuento;
const precioFinal = (precio * porcentajeDescuento)/100;

console.log({
    precio,
    descuento,
    porcentajeDescuento,
    precioFinal,
});