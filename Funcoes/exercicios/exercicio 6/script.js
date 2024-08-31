function DetectorDeDados(dado) {
    if (typeof dado === 'string') {
     console.log("O tipo de dado é: String");
    } else if (typeof dado === 'number') {
     console.log("O tipo de dado é: Number");
    } else {
        console.log("O tipo de dado é: Boolean");
    }
}

DetectorDeDados(254);
DetectorDeDados('Deni');
DetectorDeDados(true);