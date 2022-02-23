// const precio = 115;
// const descuento = 15;

function calcularDescuento(precio, descuento){
    const porcentajeDescuento = 100 - descuento;
    const precioFinal = (precio * porcentajeDescuento)/100;

    return precioFinal;
}

// console.log({
//     precio,
//     descuento,
//     porcentajeDescuento,
//     precioFinal,
// });

function buttonPriceDiscount(){
    let price = document.getElementById('InputPrice');
    const priceValue = price.value;

    let discount = document.getElementById('InputDiscount');
    const discountValue = discount.value;

    const finalPrice = calcularDescuento(priceValue, discountValue);
    const resultP = document.getElementById('finalPrice');

    resultP.innerText = "El precio final es: S/ " + finalPrice;
}