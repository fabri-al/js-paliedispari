
let parolaInserita = prompt("inserisci la parola");



function checkPalindrome(str) {

parolaInserita = str.split("").reverse().join("");



    

    if (parolaInserita == str){

        return true;
    }

    return false;
    


}

checkPalindrome(parolaInserita);

let stringa1 = "ciao";
let stringa2 = "anna";
let stringa3 = "wow";

console.log(checkPalindrome(stringa1));
console.log(checkPalindrome(stringa2));
console.log(checkPalindrome(stringa3));