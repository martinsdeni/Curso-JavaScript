function LembrarSoma(x) {
    return function(y) {
        return x + y;
    }
}

let soma1 = LembrarSoma(2);

console.log(soma1(5));

let soma2 = LembrarSoma(5);

console.log(soma2(7));

function contador(i) {
    let cont = i;
    let somarContador = function() {
        console.log(cont);
        cont++;
    }
    return somarContador;
}

let MeuContador = contador(5);

MeuContador();
MeuContador();
MeuContador();
MeuContador();