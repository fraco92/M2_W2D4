// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti 
sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
};

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
};

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
};

const prices = [34, 5, 2];
const shippingCost = 50;
let arrayUtenti = []; //cambia il valore qui per provare se il tuo algoritmo funziona!

arrayUtenti.push(marco, paul, amy);

// console.log(i[3].lastName);
console.log();
console.log("-------------LISTA DEGLI UTENTI-------------");
console.log();

for (let i = 0; i < arrayUtenti.length; i++) {
  if (arrayUtenti[i].isAmbassador === true) {
    console.log(
      arrayUtenti[i].name + " " + arrayUtenti[i].lastName + " è un Ambassador"
    );
  } else if (arrayUtenti[i].isAmbassador === false) {
    console.log(
      arrayUtenti[i].name +
        " " +
        arrayUtenti[i].lastName +
        " non è un Ambassador"
    );
  }
}

// console.log(" ");
// console.log("ARRAY SOLO AMBASSADOR");
let arrayUtentiAmbassador = [];

for (let i = 0; i < arrayUtenti.length; i++) {
  if (arrayUtenti[i].isAmbassador === true) {
    arrayUtentiAmbassador.push(arrayUtenti[i]);
  }
}

// console.log(arrayUtentiAmbassador);

// CALCOLO TOTALE CARRELLO

let totalPrice = 0;

for (i = 0; i < prices.length; i++) {
  totalPrice += prices[i];
}
// console.log(totalPrice);

//  TOTALE SPESA PER UTENTE
console.log();
console.log("-------------TOTALE SPESA PER UTENTE-------------");
console.log();

for (let i = 0; i < arrayUtenti.length; i++) {
  if (arrayUtenti[i].isAmbassador === true && totalPrice > 100) {
    console.log(
      "Gentile " +
        arrayUtenti[i].name +
        " " +
        arrayUtenti[i].lastName +
        ", la tua spesa supera 100€, pertanto hai diritto alla spedizione gratuita, il totale ammonta a €" +
        totalPrice +
        ". Il sistema ha rilevato che sei un utente Ambassador, pertanto hai diritto ad un ulteriore sconto del 30%. Il prezzo totale scontato è di €" +
        totalPrice * 0,
      7
    );
  } else if (arrayUtenti[i].isAmbassador === false && totalPrice > 100) {
    console.log(
      "Gentile " +
        arrayUtenti[i].name +
        " " +
        arrayUtenti[i].lastName +
        ", la tua spesa supera 100€, pertanto hai diritto alla spedizione gratuita, il totale ammonta a €" +
        totalPrice
    );
  } else if (arrayUtenti[i].isAmbassador === true && totalPrice < 100) {
    console.log(
      "Gentile " +
        arrayUtenti[i].name +
        " " +
        arrayUtenti[i].lastName +
        ", il totale della tua spesa, comprese di spedizione, ammonta a €" +
        (totalPrice + shippingCost) +
        ". Il sistema ha rilevato che sei un utente Ambassador, pertanto hai diritto ad un ulteriore sconto del 30%. Il prezzo totale scontato e compreso di spedizione è di €" +
        (totalPrice * 0.7 + shippingCost)
    );
  } else if (arrayUtenti[i].isAmbassador === false && totalPrice < 100) {
    console.log(
      "Gentile " +
        arrayUtenti[i].name +
        " " +
        arrayUtenti[i].lastName +
        ", il totale della tua spesa, comprese di spedizione, ammonta a €" +
        (totalPrice + shippingCost)
    );
  }
  console.log();
}
