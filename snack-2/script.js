// Inserisci un Numero, se è pari stampa il numero, se è dispari stampa il numero successivo
// 1.richiesta numero
var inputUser= parseInt(prompt("Inserisci un numero: "));
console.log(inputUser);
// 2.condizione pari
if(inputUser%2==0){
    alert("Il tuo numero è: "+inputUser+" NUMERO PARI");
}else{
    alert("Il tuo numero è: "+(inputUser+1)+" NUMERO PARI (dopo trasformazione)");
}