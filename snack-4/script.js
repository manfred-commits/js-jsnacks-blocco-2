// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

//1. Crea un array di numeri interi
var numeri=[5,2,12,4,5,24,7,42,9,10];
var somma=0;
contatore=0;
while(contatore<numeri.length){
// 2. e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari
    
    if(contatore%2==1){
        somma+=numeri[contatore];
        console.log(numeri[contatore]);
    }
    contatore++;
}
console.log(somma);