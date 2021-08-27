// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// 1.Crea due array che hanno un numero di elementi diversi.
var primo=[1,2,3,4,5];
var secondo=[1,2,3];
console.log("La dimensione iniziale dell'Array primo é: "+primo.length);
console.log("La dimensione iniziale dell'Array secondo é: "+secondo.length);

//2. Aggiungi elementi casuali all’array che ha meno elementi,fino a quando ne avrà tanti quanti l’altro.
while(primo.length!=secondo.length){
    secondo.push(Math.floor(Math.random() * 99));
}
console.log("Il primo Array, è di dimensioni: "+primo.length);
console.log("Il secondo Array, è di dimensioni: "+secondo.length);

console.log("Il primo Array, contiene: "+primo);
console.log("Il secondo Array, contiene: "+secondo);

