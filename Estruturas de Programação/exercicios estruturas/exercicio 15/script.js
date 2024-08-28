let num = 5;
let divisoes = 0;

for(let i = 1; i <= num; i++) {

    if(num % 1 == 0) {
        divisoes++;
    }
}

if(divisoes == 2) {
    console.log("é um Numero Primo")
} else {
    console.log("Não é um numero primo")
}

