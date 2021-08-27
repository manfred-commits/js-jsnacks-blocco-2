// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// 1. Il software deve chiedere per 5 volte all’utente di inserire un numero.
var inputUtente=0;
var somma=0;
// 2. Il programma stampa la somma di tutti i numeri inseriti.
// for(var i=0; i<5;i++){
//     inputUtente=parseInt(prompt("Inserisci il "+ (i+1)+ "° numero: "));
//     somma+=inputUtente;
//     console.log(somma);
// }

// Esegui questo programma in due versioni, con il for e con il while.
// 3. versione con il ciclo while
var contatore=0;
while(contatore<5){        
    inputUtente=parseInt(prompt("Inserisci il "+ (contatore+1)+ "° numero: "));
    if(!isNaN(inputUtente)){    
        somma+=inputUtente;
        console.log(inputUtente),
        console.log(somma);
        contatore++;}
    else{
        alert("Inserisci un numero!");
        inputUtente=0;
    } 
}

alert("La somma dei numeri inseriti è: "+somma);