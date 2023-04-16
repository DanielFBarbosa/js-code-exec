//toLowerCase = transforma a frase em letras minúsculas

var frase = "Esta é a frase que iremos transformar ";
console.log(frase.toLowerCase());

//toUpperCase
var fraseCaixaAlta = frase.toUpperCase();
console.log(fraseCaixaAlta);
console.log(fraseCaixaAlta.toUpperCase());
 
//trim
var nome = "     Daniel     ";
console.log(nome);
var nomeTrim = nome.trim();
console.log(nomeTrim); 

//SPLIT

console.log(frase.split(" "));

var tags = "PHP, JavaScript, Pyton, HTML, CSS";

console.log(tags.split(","));