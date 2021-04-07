//prompt chiedere chilometri
var chilometri = prompt('Salve, quanti chilometri vuole percorrere oggi?');
//console.log(chilometri);

//prompt chiedere anni
var anni = prompt('Quanti anni ha?');
//console.log(anni);

//costo biglietto al km
var costoKm = 0.21;

//prezzo biglietto senza sconti
var prezzo_biglietto = (parseInt(chilometri) * costoKm).toFixed(2);
//console.log(prezzo_biglietto);

//over 65
var over_65 = (prezzo_biglietto - ((prezzo_biglietto* 40) / 100)).toFixed(2);
//console.log(over_65);

//minorenni
var minorenni = (prezzo_biglietto - ((prezzo_biglietto* 20) / 100)).toFixed(2);
//console.log(minorenni);

//prezzo biglietto + sconti
if(parseInt(anni) < 18){
  console.log(minorenni);
  document.getElementById("meg-prezzo").innerHTML = 'il costo del suo biglietto è di ' + minorenni;
}else if(parseInt(anni) > 65){
  console.log(over_65);
  document.getElementById("meg-prezzo").innerHTML = 'il costo del suo biglietto è di ' +
   over_65;
}else {
  console.log(prezzo_biglietto);
  document.getElementById("meg-prezzo").innerHTML = 'il costo del suo biglietto è di ' + prezzo_biglietto;
} 
