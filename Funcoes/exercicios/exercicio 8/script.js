function LimiteCaracteres(texto) {
    if(texto.length >= 10) {
     console.log("Você ultrapassou o limite de caracteres.")
    } else {
        console.log("Texto dentro do limite.")
    }
}

LimiteCaracteres("Denner");
LimiteCaracteres("Dennisclebyson");