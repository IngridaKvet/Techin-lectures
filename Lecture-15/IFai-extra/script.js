"use strict"
/* 1. Parašiutininkas */
let aukstis = Number(prompt("Iš kokio aukščio šoka parašiutininkas?"));
let skleidimosiLaikas = Number(prompt("Per kiek sekundžių išsiskleidžia jo parašiutas? "));

let kritimoLaikas = Math.sqrt(2*aukstis/9.8);

if(kritimoLaikas > skleidimosiLaikas){
  console.log("Parašiutas išsiskleis");
} else {
    console.log("Parašiutas neišsiskleis");
}

/* 2. Didžioji kūdrinė varlė*/
let varlesSvoris = Number(prompt("Kiek sveria varlė?"));
let varliuKiekis = Number(prompt("Kiek varlių norima stebėti?"));

if((varlesSvoris*varliuKiekis) >= 5000){
  console.log("Varlių stebėjimui pakanka");
} else {
  console.log("Varlių stebėjimui per mažai");
}

/* 3. Matematika*/
let pazymiaiStr = prompt("Kokius pažymius gavo Petriukas?");
let pazymiai = pazymiaiStr.split(" ");
let pazymiuVidurkis = (Number(pazymiai[0]) + Number(pazymiai[1]) + Number(pazymiai[2]) + Number(pazymiai[3])+ Number(pazymiai[4]))/5;

if (pazymiuVidurkis > 9){
  console.log("Petriukas gaus tris saldainius");
} else if(pazymiuVidurkis >= 7){
  console.log("Petriukas gaus du saldainius");
} else {
  console.log("Petriukas gaus vieną saldainį");
}


/* 4. Bandelės */
let kainosStr = prompt("Įveskite kainas a ir b:");
let kiekiaiStr = prompt("Įveskite kiekius n1, n2 ir n3:");
let kainos = kainosStr.split(" ");
let kiekiai = kiekiaiStr.split(" ");

let a = Number(kainos[0]);
let b = Number(kainos[1]);
let n1 = Number(kiekiai[0]);
let n2 = Number(kiekiai[1]);
let n3 = Number(kiekiai[2]);
let k = Number(prompt("Įveskite bandelės kainą:"));

if(k <= a){
  console.log(`Už bandeles bus sumokėta: ${(n1*k).toFixed(2)} Lt`);
} else if(k > a && k < b){
  console.log(`Už bandeles bus sumokėta: ${(n2*k).toFixed(2)} Lt`);
} else if (k >= b){
  console.log(`Už bandeles bus sumokėta: ${(n3*k).toFixed(2)} Lt`);
}





