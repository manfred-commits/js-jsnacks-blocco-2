// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
var listaDiNomi=["Mario","Mirco","Mimmo"];
var listaDiCognomi=["Brisco","Brasco","Brango"];
var listaFalsa=[];
var numeroCognomi=0;
var numeroNomi=0;

for(var i=0; i<3;i++){
    listaFalsa.push(listaDiNomi[Math.floor(Math.random() * 3)]+" "+listaDiCognomi[Math.floor(Math.random() * 3)]);

    // if(listaFalsa.includes(listaDiNomi[Math.floor(Math.random() * 3)]+" "+listaDiCognomi[Math.floor(Math.random() * 3)])){
    //     i--;
    // }else{
    //     listaFalsa.push(listaDiNomi[Math.floor(Math.random() * 3)]+" "+listaDiCognomi[Math.floor(Math.random() * 3)]);
    // }

}
console.log(listaFalsa);