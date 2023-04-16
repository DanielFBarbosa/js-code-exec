//length  = comprimento ou quantidades de caractéres que a  string possui
var nome = 'Daniel';
console.log(nome.length);

/*indexOf = Dá o caractére especifico da strings :
 Exemplo: [2] terei a segunda letra da string, 
 sabendo que a contagem começa com o 0.Também é contado os espaços entre as letras
*/
console.log(nome[2]);

var frase = "O rato roeu a roupa teste do rei de Roma teste";
console.log(frase.indexOf("roupa"));

//lastIndexOf = busca a ultima palavra da frase
var fraseDois = "Eu quero a palavra teste do final da frase teste";
console.log(fraseDois.indexOf("teste"));
console.log(fraseDois.lastIndexOf("teste"));

//slice = tira  letra ou palavra da frase contando a partir do caractere da letra ou palavra
var roeu = frase.slice(14, 19);
console.log(roeu);

//replace = muda a palavra escolhida por outra
var novaFrase = frase.replace("roupa", "calça");
console.log(novaFrase); 