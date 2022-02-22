// Calcular altura de un triangulo isóceles

let lado1 = parseInt(prompt('Inserte el valor del lado 1'));
let lado2 = parseInt(prompt('Inserte el valor del lado 2'));
let base = parseInt(prompt('Inserte el valor de la base'));

function calcularAltura(){
    let altura = 0;
    altura = Math.sqrt((Math.pow(lado1, 2) - ((Math.pow(base, 2)) / 4)));

    alert('La altura es: ' + altura);
}

function trianguloIsosceles(){
    if(lado1 == lado2){
        calcularAltura();
    }else {
        alert('El triangulo no es isosceles');
    }
}

trianguloIsosceles();