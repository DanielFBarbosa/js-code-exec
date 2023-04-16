//splice  - retira e coloca elementos em qualquer posição do array

var arr = [1,2,3,4,5];
arr.splice(2, 0, 999);
console.log(arr);

arr.splice(4,1);
console.log(arr);

//indexOf - Diz em qual posição o elemento esta ocupando dentro do array
var arr2 = ["o", "rato", "roeu", "a", "roupa"];
console.log(arr2.join(" , "));

//reverse - inverte a ordem da frase e deixa de trás para frente
console.log(arr2.reverse());