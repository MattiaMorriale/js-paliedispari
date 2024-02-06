// dobbiamo chiedere all'utente una parola
const buttonElement = document.querySelector("#avvia");

let pallina;

buttonElement.addEventListener("click",
function() {
    
    function trovaPalindromo(parola) {
        // questa parola deve essere controllata se è palindroma o meno
        
        // mettere delle condizioni dalla quale possiamo ricavare la parola se è palindroma o no
        for (let i=0; i < Math.floor(parola.length / 2); i++) {

            if (parola[i] !== parola[parola.length - 1 - i]) {


                return false;
            }
        
        }

        return true;

    }

    pallina = prompt("inserisci una parola ");

    let text = trovaPalindromo(pallina);
    
    // stamparte la parola in pagina se è palindroma con un messaggio che dice che pa parola selezionata è palindroma idem se non lo è.
if (text == false) {

    document.getElementById("parola").innerHTML = ('questa non è una parola palindroma');

} else {

    document.getElementById("parola").innerHTML = ('questa è una parola palindroma')
    
}

})