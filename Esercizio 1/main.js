//Chiedo all'utente di inserire una parola 
let domanda = prompt("Inserisci una parola o una frase");

alert(parolaPalindroma(domanda));

//Creo una funzione che potrò riutilizzare
function parolaPalindroma(parola) {

    let frase;

    let minuscolo = parola.toLowerCase();
    console.log(minuscolo);

   
    let togliSpazi = minuscolo.replace(/ /g, '');
    console.log(togliSpazi);

    let dividiParola = togliSpazi.split("");
    console.log(dividiParola);

    let invertiParola = dividiParola.reverse();
    console.log(invertiParola);

    let unisciParola = invertiParola.join("");
    console.log(unisciParola);

    if (togliSpazi == unisciParola && contaParole(domanda) == 1) {

        frase = "La parola è palindroma";

    } else if (togliSpazi == unisciParola && contaParole(domanda) > 1) {

        frase = "La frase è palindroma";

    } else if (togliSpazi != unisciParola && contaParole(domanda) == 1) {

        frase = "La parola non è palindroma";

    } else if (togliSpazi != unisciParola && contaParole(domanda) > 1) {

        frase = "La frase non è palindroma";

    }

    return frase;

}

//Creo una funzione per contare il numero di parole in una frase (non funziona con doppi spazi). 
//mi servirà per sapere se l'utente sta scrivendo una parola o una frase
function contaParole(parola) {

    return parola.split(" ").length;

}

console.log(contaParole(domanda) + " parole/a");