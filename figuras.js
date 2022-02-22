// Código del cuadrado
console.group('Cuadrado');

// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

function perimetroCuadrado(lado){
    return lado * 4;
} 
// console.log('El perimetro del cuadrado mide: ' + perimetroCuadrado() + ' cm');

function areaCuadrado(lado){
    return Math.pow(lado, 2);
} 
// console.log('El área del cuadrado mide: ' + areaCuadrado + ' cm²');
console.groupEnd();

// Código del triángulo

console.group('Triangulo');

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     'Los lados del triangulo son: ' 
//     + ladoTriangulo1 
//     + ' cm, ' 
//     + ladoTriangulo2 
//     + ' cm y ' 
//     + baseTriangulo 
//     + ' cm'
// );

// const alturaTriangulo = 5.5;
// console.log('La altura del triangulo es de: ' + alturaTriangulo + ' cm');

function perimetroTriangulo(lado1, lado2, base){
    return parseInt(lado1) + parseInt(lado2) + parseInt(base);
}
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
// console.log('El perimetro del triangulo es de: ' + perimetroTriangulo + ' cm');

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
// console.log('El area del triangulo es de: ' + areaTriangulo + ' cm²');

console.groupEnd();

// Código del circulo
console.group('Círculo');

// const radio = 4;
// const diametro = 2 * radio;
const pi = Math.PI;

function diametroCirculo(radio){
    return 2 * radio;
}
// console.log('El radio del circulo es : ' + radio + ' cm');
// console.log('El diámetro del circulo es : ' + diametro + ' cm');
// console.log('pi es: ' + pi);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}
// const perimetroCirculo = diametro * pi;
// console.log('El perimetro del circulo es : ' + perimetroCirculo + ' cm');

function areaCirculo(radio){
    return Math.pow(radio, 2) * pi;
}
// const areaCirculo = Math.pow(radio, 2) * pi;
// console.log('El area del circulo es : ' + areaCirculo + ' cm²'); 

console.groupEnd();

// Interactuar con html

// CUADRADO

function calcularPerimetroCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById('InputCuadrado');
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

// TRIANGULO

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById('InputTrianguloL1');
    const value1 = input1.value;

    const input2 = document.getElementById('InputTrianguloL2');
    const value2 = input2.value;

    const input3 = document.getElementById('InputTrianguloB');
    const value3 = input3.value;
    
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById('InputTrianguloB');
    const value1 = input1.value;

    const input2 = document.getElementById('InputTrianguloH');
    const value2 = input2.value;
    
    const area = areaTriangulo(value1, value2);
    alert(area);
}

// CIRCULO

function calcularDiametroCirculo(){
    const input = document.getElementById('InputCirculo');
    const value = input.value;

    const diametro = diametroCirculo(value);
    alert(diametro);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById('InputCirculo');
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById('InputCirculo');
    const value = input.value;
    
    const area = areaCirculo(value);
    alert(area);
}