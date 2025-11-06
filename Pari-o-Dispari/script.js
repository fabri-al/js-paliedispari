
//Introduzione
let pariOrDispari = prompt("Scegli pari o dispari"); //creo un prompt per scrivere
//pari o dispari

//Ciclo che trasforma in minuscolo ciò che viene inserito nel prompt
while (pariOrDispari.toLowerCase() !== "pari" &&
    pariOrDispari.toLowerCase() !== "dispari") { //se la stringa è diversa da pari o
    //dispari crea un alert

    alert("Scegli 'Pari' o 'Dispari'");
    pariOrDispari = prompt("Devi Scegle pari o dispari!");

}

let numeroInseritoString = prompt("Inserisci un numero da 1 a 5"); //creo un altro prompt,
//questa volta per inserire un numero
//compreso tra 1 e 5

let numeroInserito = parseInt(numeroInseritoString); //converto in intero la stringa che ho
//scritto nel prompt

//Ciclo che verifica se ciò che inserisco nel prompt non sia un numero inferiore a 1,
//un numero inferiore a 5, o una stringa
while (numeroInserito < 1 || numeroInserito > 5 || isNaN(numeroInserito)) {

    alert("Inserisci un numero da 1 a 5");
    numeroInserito = prompt("Devi inserire un numero da 1 a 5!");
}


//Svolgimento

//Creo una funzione che mi crea un numero casuale
function randomNumber() {

    let numRan = Math.floor(Math.random() * 5) + 1;
    return numRan;
}

let random = randomNumber(); //assegno la funzione ad una variabile
let somma = random + numeroInserito; // creo una variabile che mi somma il numero 
// da 1 a 5 inserito, e il numero casuale creato dalla funzione 

console.log(somma); //stampo la somma in console

//Creo una funzione che verifica se il numero inserito dall'utente sia pari o dispari
function sommaPariOdispari() {

    if (pariOrDispari == "pari" && somma % 2 == 0) {
        alert("Hai vinto!");

    }

    else if (pariOrDispari == "dispari" && somma % 2 != 0) {
        alert("Hai vinto!");

    }

    else if (pariOrDispari == "pari" && somma % 2 != 0) {
        alert("Purtroppo hai perso.");

    }

    else if (pariOrDispari == "dispari" && somma % 2 == 0) {
        alert("Purtroppo hai perso.");

    }

}

//Conclusione
sommaPariOdispari(); //invoco (richiamo) la funzione

console.log("il numero random è: " + random); //stampo in console il numero random
console.log("il numero inserito è: " + numeroInserito); //stampo in console il numero inserito dall'utente
console.log("la somma è: " + somma); //stampo in console la somma
