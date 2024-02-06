let primaP = prompt("Inserisci una parola a tuo piacimento");

let secondaP = prompt("Inserisci un altra parola a tuo piacimento");

if (primaP.length >= secondaP.length) {

   document.getElementById("parolaL").innerText = primaP;
   document.getElementById("parolaC").innerText = secondaP;

} else {

    document.getElementById("parolaC").innerText = primaP;
    document.getElementById("parolaL").innerText = secondaP;

}
