console.log("Funzioni?");

class Veicolo {
    marca;
    anno;
    colore;
    porte;
    carburante;

    constructor(marca, anno, colore, porte, carburante) {
        this.marca = marca;
        this.anno = anno;
        this.colore = colore;
        this.porte = porte;
        this.carburante = carburante;
    }

    calcolaEta() {
        const currentYear = new Date().getFullYear()
        return currentYear - this.anno
    }

    informazioni() {
        for (let key in this) {
            console.log(key + ": " + this[key]);
        }
    }
}

const fiat = new Veicolo("Fiat", 2019, "Blu", 5, "Benzina")
console.log(fiat.calcolaEta());
console.log(fiat.informazioni());


