console.log("Funzioni?");

class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor(marca, anno, colore, porte, carburante){
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }

    calcolaeta(){
        const currentYear = new Date().getFullYear()
        return currentYear - this.anno
    }
}

const fiat = new Veicolo ("Fiat", 2019, "Blu", 5, "Benzina")
console.log(fiat.calcolaeta());

