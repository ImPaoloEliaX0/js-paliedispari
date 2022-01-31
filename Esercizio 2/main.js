//funzione per generare numero random compreso tra un min e un max
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function pariDispari(valore) {

    let ritorno;

    if (valore % 2 == 0) {
        ritorno = "pari";
    } else {
        ritorno = "dispari";
    }

    return ritorno;

}let sceltaUtente = document.getElementById('select');
let numeroUtente = document.getElementById('numero');
let button = document.getElementById('button');

let esito = document.getElementById('risultato');
button.addEventListener('click',
function() {
    
    let casuale = random(1,5);
    let somma = parseInt(numeroUtente.value) + casuale;
    console.log(somma);
    let risultato = pariDispari(somma);
    console.log(risultato);
    
    if (sceltaUtente.value == risultato) {
        esito.innerHTML = 'hai vinto';
    } else {
        esito.innerHTML = 'hai perso';
    }

}

)
