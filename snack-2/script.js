// Inserisci un Numero, se è pari stampa il numero, se è dispari stampa il numero successivo
// 1.richiesta numero
var valido=true;
while(valido){
    var inputUser= parseInt(prompt("Inserisci un numero: "));
    // 1.2. validazione del numero
    while(isNaN(inputUser)){
        inputUser= parseInt(prompt("Inserisci un numero!!!! "));
    }
    valido=false;
}
// 2.verifica pari e disparii e print a video
if(inputUser%2==0){
    alert("Il tuo numero è: "+inputUser+" NUMERO PARI");
}else{
    alert("Il tuo numero è: "+(inputUser+1)+" NUMERO PARI (dopo trasformazione)");
}

console.log(inputUser);
