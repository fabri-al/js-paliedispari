
let pariOrDispari = prompt("Scegli pari o dispari");

  
    while (pariOrDispari.toLowerCase() !== "pari" && pariOrDispari.toLowerCase() !== "dispari" ){ //se la stringa 
                                                                                            //è diversa da pari o
                                                                                            //dispari fai alert
        alert("Scegli 'Pari' o 'Dispari'");

    pariOrDispari = prompt("Devi Scegle pari o dispari!");
    
}

let numeroInseritoString = prompt("Inserisci un numero da 1 a 5");
let numeroInserito = parseInt(numeroInseritoString);


while (numeroInserito <1 || numeroInserito >5 || isNaN(numeroInserito)) {

    alert("Inserisci un numero da 1 a 5");

    numeroInserito = prompt("Devi inserire un numero da 1 a 5!");
}



function randomNumber () {

    let numRan = Math.floor(Math.random() *5) + 1;
   return numRan;
}

let random = randomNumber();

    
let somma = random + numeroInserito;

console.log(somma);


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



console.log("il numero random è: " + random);
console.log("il numero inserito è: " + numeroInserito);
console.log("la somma è: " + somma);
