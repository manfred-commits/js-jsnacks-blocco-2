// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
var listaDiNomi=["Mario","Mirco","Mimmo"];
var listaDiCognomi=["Brisco","Brasco","Brango"];
var listaFalsa=[];
for(var i=0; i<3;i++){
    listaFalsa[i]=listaDiNomi[Math.floor(Math.random() * 2)]+listaDiCognomi[Math.floor(Math.random() * 2)];
}
console.log(listaFalsa);