//inserir novo elemento na página . ex no body
var novoParagrafo = document.createElement('p');

var texto = document.createTextNode("Novo parágrafo da página");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector('body');

console.log(body);

body.appendChild(novoParagrafo);

//Inserir em um container ou div

var container = document.getElementById('container');
console.log(container);

var el = document.createElement('span');
el.appendChild(document.createTextNode('Texto do span'));

console.log(el);

container.appendChild(el);

var conteudo = document.createElement('p');

var texto = document.createTextNode('Este é um novo texto do body');
console.log(conteudo);

body.appendChild(conteudo);
