function MultiplicarNumeros(x,y,z) {
    return x * y * z;
}

console.log(MultiplicarNumeros(2, 3, 4));

const mult = MultiplicarNumeros(5, 8, 0);

console.log("O valor de mult é " + mult);

function PodeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode Dirigir");
    } else {
        console.log("Não Pode Dirigir");
    }
}

console.log(PodeDirigir(19, true));
console.log(PodeDirigir(15, false));
console.log(PodeDirigir(45, false));