const buttonElement = document.querySelector("#avvia");


buttonElement.addEventListener("click",
function() {
    
    let scelta;
    
    let utente;
    
    let somma = 0;
    
    let random = computerNumber();

    do {

        scelta = prompt('Scegli "pari" o "dispari"');

        if (!(scelta === "dispari" || scelta === "pari") || (!isNaN(scelta))) {

            alert('Il valore inserito non è valido')

        }

    } while (!(scelta == "pari" || scelta == "dispari"));
    

    do{

        utente = Number(prompt('Inserisci un numero da [1 a 5]'));

        if (isNaN(utente) || (utente < 1 || utente > 5)) {

            alert('Il valore inserito non è consentito, riprova.');

        } else {

            utente = Number(utente);

        }

    } while (!(utente >= 1 && utente <= 5));
    
   
    
    function computerNumber() {
        
        let computer = Math.floor(Math.random() * 5) + 1;
        
        return computer;
        
    }
    console.log(utente);

    document.getElementById("utente").innerHTML = utente;

    document.getElementById("computer").innerHTML = random;

    console.log(random);

    somma = utente + random;

    document.getElementById("somma").innerHTML = somma;

    console.log(somma)

    let risultato = totalResult(somma);

    function totalResult (cassone) {

        if (cassone % 2 === 0) {

            return "pari";

        } else {

            return "dispari";

        }

    }

    if (somma % 2 === 0 && scelta == "pari") {

        document.getElementById("risultato").innerHTML = "HAI VINTO"

    } else if (somma % 2 != 0 && scelta == "dispari") {

        document.getElementById("risultato").innerHTML = "HAI VINTO"

    } else {

        document.getElementById("risultato").innerHTML = "HAI PERSO"

    }


})



