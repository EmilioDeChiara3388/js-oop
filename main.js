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
        let infos = "";
        for (let key in this) {
            infos += key + ": " + this[key] + "; ";
        }
        return infos
    }
}

const audi = new Veicolo("Audi", 2015, "Rossa", 5, "Gpl")
const fiat = new Veicolo("Fiat", 2019, "Blu", 5, "Benzina")
console.log(fiat.calcolaEta());
console.log(audi.calcolaEta());

console.log(fiat.informazioni());
console.log(audi.informazioni());



