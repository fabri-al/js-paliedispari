
let parolaInserita = prompt("inserisci la parola");

function checkPalindrome(str) {

parolaInserita = str.split("").reverse().join("");

    if (parolaInserita == str){
        return true;
    }
    return false;
}

checkPalindrome(parolaInserita);

