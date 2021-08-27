// Crea un array di numeri interi
// e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

//1. Crea un array di numeri interi
var numeri=[];
for(var i=0;i<20;i++){
    numeri[i]=Math.floor(Math.random() * 20);
}
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
console.log("La somma dei contenuti degli indici dispari è: "+somma);