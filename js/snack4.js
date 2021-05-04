/* Generatore di “nomi cognomi” casuali: scrivere una funzione che, partendo da una lista di nomi e una lista di cognomi, generi una coppia nome-cognome casuale, così da permettere al signor Gatsby di costruire una falsa lista di 10 invitati alla sua festa, da stampare in pagina, utilizzando il tag adatto alle liste. */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function generatoreNomiCasuale(nomi, cognomi) {
    var nomeCasuale = nomi[randomNumber(0, nomi.length - 1)];
    var cognomeCasuale = cognomi[randomNumber(0, cognomi.length - 1)];
    var nomeCompleto = nomeCasuale + " " + cognomeCasuale;
    return nomeCompleto;
}

function generaLista() {
    lista.innerHTML = "";
    for (var i = 0; i < inputNumero.value; i++) {
        lista.innerHTML += "<li>" + generatoreNomiCasuale(listaNomi, listaCognomi) + "</li>";
    }
}

var listaNomi = ["Alessandro",
    "Lorenzo",
    "Diego",
    "Tommaso",
    "Riccardo",
    "Matteo",
    "Lorenzo",
    "Leonardo",
    "Gabriele",
    "Edoardo",
    "Samuele"
];

var listaCognomi = ["Rossi",
    "Ferrari",
    "Russo",
    "Bianchi",
    "Romano",
    "Gallo",
    "Costa",
    "Fontana",
    "Conti",
    "Esposito",
    "Ricci",
    "Bruno",
    "De Luca",
    "Moretti",
    "Marino"
];
var lista = document.getElementById("lista");

var inputNumero = document.getElementById("number");