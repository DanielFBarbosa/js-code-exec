var teste = 5;

console.log(this.teste);
console.log(teste);

let pessoa = {
    nome: "Daniel",
    idade: 47,
    falar: function(){
        console.log("Olá, Jesus te ama!");
    },
    dizerNome: function(){
        console.log("Meu nome é " + this.nome);
        console.log("Minha idade é " + this.idade);
    },
    aniversario: function(){
        this.idade += 1;
    },
    saudacao: function(){
        return 'Sr. ' + this.nome;
    }
};
pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();

console.log(pessoa.idade);

var sdc = pessoa.saudacao();
console.log("ola " + sdc );