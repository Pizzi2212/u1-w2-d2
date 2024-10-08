/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n1 = 10
const n2 = 15

let greater 



if (n1>n2){
  greater = n1
}
else if (n2>n1){
  greater = n2
}
else if (n1=n2){
  console.log ("i numeri sono uguali")
}
console.log (greater)



//  ESERCIZIO 2 
//   Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
// */

/* SCRIVI QUI LA TUA RISPOSTA */
const n3 = 9

if (n3!==5){
  console.log ("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n4 = 35

if (n4 % 5 === 0) {
  console.log ("divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n5 = 8
const n6 = 18

if (n5 - 8 === 0 || n6 - 8 === 0 ){
  console.log ("uno dei due numeri è otto")
}
else if (n5 + n6 === 8 && n5 - n6 === 8){
  console.log ("la loro addizione/sottrazione è uguale a otto")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 50


 if (totalShoppingCart>50){
  totalShoppingCart = totalShoppingCart + 0
 }
 else {
  totalShoppingCart = totalShoppingCart + 10
 }

console.log ("il prezzo finale al checkout è", totalShoppingCart , "euro")

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart2 = 33
const discount = 20/100*totalShoppingCart2

 if (totalShoppingCart2>50){
  totalShoppingCart2 = totalShoppingCart2 + 0
 }
 else {
  totalShoppingCart2 = totalShoppingCart2 + 10
 }

 console.log ("il prezzo finale dopo lo sconto è", totalShoppingCart2 - discount , "euro" )
 


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n7 = 32
let n8 = 20
let n9 = 69
let greaterNumber = []

if (n9 > n8 && n8 > n7){
   greaterNumber.push(n9,n8,n7)
}
else if (n8 > n9 && n9 > n7){
  greaterNumber.push(n8,n9,n7)
}
  else if (n7 > n8 && n8 > n9){
    greaterNumber.push(n7,n8,n9)
  }
 else if (n9 > n7 && n7 > n8){
  greaterNumber.push (n9,n7,n8)
 }
else if (n7 > n9 && n9 > n8)
{
  greaterNumber.push(n7,n9,n8)
}
else if (n8 > n7 && n7 > n9){
  greaterNumber.push(n8,n7,n9)
}

console.log("il numero dal più alto al più basso è ", greaterNumber )



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n10 = 20
if (typeof n10 === "number"){
  console.log ("è un numero")
}
else {
  console.log("non è un numero")
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const n11 = 10

if (n11 % 2 === 0){
  console.log ("il numero è pari")
}
else if (n11 % 2 === 1){
  console.log("il numero è dispari")
}



// ESERCIZIO 10
//   Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

  let val = 7
  
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else  {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}



/* SCRIVI QUI LA TUA RISPOSTA */
me.city= "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName

console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop([2])
console.log(me.skills)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let vod = []
vod.push(1,2,3,4,5,6,7,8,9,10)
 console.log(vod)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

// /* SCRIVI QUI LA TUA RISPOSTA
vod.splice[0,9]
vod.push (100)

console.log(vod)