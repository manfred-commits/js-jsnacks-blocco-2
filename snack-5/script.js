// Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi casuali all’array che ha meno elementi,
// fino a quando ne avrà tanti quanti l’altro.

// 1.Crea due array che hanno un numero di elementi diversi.
var primo=[];
var secondo=[];
for(var i=0; i<Math.floor(Math.random() * 30);i++){
    primo[i]=Math.floor(Math.random() * 30);
}
for(var i=0; i<Math.floor(Math.random() * 30);i++){
    secondo[i]=Math.floor(Math.random() * 30);
}

console.log("La dimensione iniziale dell'Array primo é: "+primo.length);
console.log("La dimensione iniziale dell'Array secondo é: "+secondo.length);

//2. Aggiungi elementi casuali all’array che ha meno elementi,fino a quando ne avrà tanti quanti l’altro.

while(primo.length>secondo.length){
    secondo.push(Math.floor(Math.random() * 99));
}
while(secondo.length>primo.length){
    primo.push(Math.floor(Math.random() * 99));
}


console.log("Il primo Array, è di dimensioni: "+primo.length);
console.log("Il secondo Array, è di dimensioni: "+secondo.length);

console.log("Il primo Array, contiene: "+primo);
console.log("Il secondo Array, contiene: "+secondo);

