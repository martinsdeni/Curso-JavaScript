let idade = 20;
let cnh = true;

if(idade >= 18 && cnh == false) {
    console.log("Sem CNH, Não Pode dirigir!");
} else if (idade >= 18 && cnh == true) {
    console.log("Pode dirigir tranquilo!");
} else {
    console.log("Ta totalmente errado, vou te levar pra delegacia!");
}
