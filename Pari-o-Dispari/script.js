
let pariOrDispari = prompt("Scegli pari o dispari");

    // - L’utente sceglie se puntare su un esito "pari" o "dispari"
    while (pariOrDispari.toLowerCase() !== "pari" && pariOrDispari.toLowerCase() !== "dispari" ){ //se la stringa 
                                                                                            //è diversa da pari o
                                                                                            //dispari fai alert
        alert("Scegli 'Pari' o 'Dispari'");

    pariOrDispari = prompt("Devi Scegle pari o dispari!");
    
}

let numeroInseritoString = prompt("Inserisci un numero da 1 a 5");
let numeroInserito = parseInt(numeroInseritoString);

// - L'utente inserisce un numero da 1 a 5.
while (numeroInserito <1 || numeroInserito >5 || isNaN(numeroInserito)) {

    alert("Inserisci un numero da 1 a 5");

    numeroInserito = prompt("Devi inserire un numero da 1 a 5!");
}


//- Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber () {

    let numRan = Math.floor(Math.random() *5) + 1;
   return numRan;
}

let random = randomNumber();

    // - Sommiamo i due numeri
let somma = random + numeroInserito;

console.log(somma);

//- Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function sommaPariOdispari (){

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

/* randomNumber();
sommaPariOdispari(); */


console.log("il numero random è: " + random);
console.log("il numero inserito è: " + numeroInserito);
console.log("la somma è: " + somma);
