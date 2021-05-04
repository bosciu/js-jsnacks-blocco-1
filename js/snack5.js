/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari (verifichiamolo con una funzione) inseriscilo nell’array.
Stampa l'array nella console. */

function isOdd(numero) {
    if (numero % 2 != 0) {
        return "dispari";
    }
}

var numeri = [];

for (var i = 0; i < 6; i++) {
    var numero = parseInt(prompt("Inserisci un numero!"));
    if (isOdd(numero) == "dispari") {
        numeri.push(numero);
    }
}

console.log(numeri);