//adicionar atributos
var title = document.querySelector("#title");

title.setAttribute("class", "testando-atributo");
console.log(title);

var btn = document.querySelector("#btn");

btn.setAttribute("disabled", "disabled");
console.log(btn);

var subtitle = document.querySelector(".subtitle");
subtitle.setAttribute("id", "título-2");

//remover atributos
var lista2 = document.querySelector("#lista-2");
lista2.removeAttribute("id");