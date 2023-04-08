var obj = {
    nome: "Daniel",
    idade: 47,
    profissao: "Programador",
    estaTrabalhando: true,
};

console.log(obj);
console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);
console.log("O meu nome é " + obj.nome);
console.log("Minha idade é " + obj.idade );

obj.nome = "Pedro";
console.log(obj.nome);

console.log(obj);

obj.graduacao = true;
console.log(obj);

console.log(obj.nome, obj.idade, obj.profissao);