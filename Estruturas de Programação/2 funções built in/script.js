//função prompt - exibe uma caixinha de pergunta.
let nome = prompt("Qual seu nome?"); 
let idade = prompt(`Olá ${nome}, Qual é sua idade?`);
console.log(`Seu nome é ${nome}, e sua idade é ${idade}`);


//função alert - exime uma mensagem na tela.
alert("ATENÇÃO!!!!!!");


//função Math - Funções de matematica
let maior = Math.max(6, 12, 18, 54); //Mostra o maior numero
console.log(maior);

let menor = Math.min(2, 5, 8, 7, 14); //Mostra o menor numero
console.log(menor);

let arredondar = Math.round(5.45); //Arredonda o numero 
console.log(arredondar);

let arredondarcima = Math.ceil(5.45); //Arredonda pra cima
console.log(arredondarcima);