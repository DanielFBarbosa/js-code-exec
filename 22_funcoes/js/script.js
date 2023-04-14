//Declaração da função
function primeiraFuncao(){
   
    console.log("Hello word das funções");

}
//Chamada da função
primeiraFuncao();

function dizerNome(nome){

console.log("O nome é: " + nome);

}

dizerNome("Daniel");

var nomeBancoDeDados = "João";

dizerNome(nomeBancoDeDados);

function soma(a , b){
    var soma = a + b
    return soma;
}

var somaUm = soma(2 , 5);

console.log(somaUm);

var somaDois = soma(5 , 5);
console.log(somaDois);

console.log(soma(4 , 5));