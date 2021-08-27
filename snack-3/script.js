// Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.
var listaDiNomi=["Mario","Mirco","Mimmo"];
var listaDiCognomi=["Brisco","Brasco","Brango"];
var listaFalsa=[];
var cognomiFalsi=[];
var nomiFalsi=[];

// for(var i=0; i<3;i++){
//     nomiFalsi[i]=listaDiNomi[Math.floor(Math.random() * 3)];
//     while(nomiFalsi[i].includes(listaDiNomi[i])){
//         nomiFalsi[i]=listaDiNomi[Math.floor(Math.random() * 3)];
//     }
//     console.log(nomiFalsi);
//     cognomiFalsi[i]=listaDiCognomi[Math.floor(Math.random() * 3)];
//     while(cognomiFalsi[i].includes(listaDiNomi[i])){
//         cognomiFalsi[i]=listaDiNomi[Math.floor(Math.random() * 3)];
//     }
//     console.log(nomiFalsi);
    

// }
var i=0; 
while(listaFalsa.length < 3){
	var nomeCompleto = listaDiNomi[Math.floor(Math.random() * 3)]+" "+listaDiCognomi[Math.floor(Math.random() * 3)];

    if( !listaFalsa.includes(nomeCompleto) ){
    	listaFalsa.push(nomeCompleto);
    }
}
console.log(listaFalsa);