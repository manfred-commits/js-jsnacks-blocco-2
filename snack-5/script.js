// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// 1.Crea due array che hanno un numero di elementi diversi.
var primo=["Bianco","Rosso","Verde","Giallo","Nero"];
var secondo=["Banco","Osso","Ero"];
//2. Aggiungi elementi casuali all’array che ha meno elementi,fino a quando ne avrà tanti quanti l’altro.
while(primo.length!=secondo.length){
    secondo.push(primo[Math.floor(Math.random() * primo.length)]);
}
console.log("Il primo Array, è di dimensioni: "+primo.length);
console.log("Il secondo Array, è di dimensioni: "+secondo.length);

console.log("Il primo Array, contiene: "+primo);
console.log("Il secondo Array, contiene: "+secondo);

