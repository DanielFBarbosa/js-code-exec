let pessoa = {
    nome: "Daniel",
    idade: 47,
    falar: function(){
        console.log("Olá, Jesus te ama!");
    },
    trabalhar: function () {
        console.log("Tenho que acordar cedo para trabalhar.")
    },
    soma: function(a,b){
            return a + b;
    },
};
console.log(pessoa.nome);
pessoa.falar();
pessoa.trabalhar();
var soma = pessoa.soma(2,2);
console.log(soma);