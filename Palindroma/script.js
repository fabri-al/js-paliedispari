
//Introduzione

let parolaInserita = prompt("inserisci la parola"); //creo un prompt


//Svolgimento
//Creo una funzione che controlla se la parola inserita dall'utente si possa leggere sia
//da destra che da sinistra
function checkPalindrome(str) {

    str = parolaInserita.split("").reverse().join("");

    if (parolaInserita == str) {
        return true;
    }
    return false;
}

checkPalindrome(parolaInserita); //Richiamo la funzione
console.log(checkPalindrome()); //stampo la funzione


