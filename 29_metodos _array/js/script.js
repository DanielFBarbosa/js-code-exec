//length conta os elementos do array
var arr = [1,2,3,4,5];
console.log(arr.length);

//push - adiciona elementos ao array
arr.push(6);
arr.push("Qualquer coisa");
arr.push(true , false);
console.log(arr);

//pop - retira o ultimo elemento.
arr.pop();
console.log(arr);

//unshift  - coloca elementos no inicio do array
arr.unshift(0); // acrescentou o zero
arr.unshift("teste");
console.log(arr);

//shift - retira elementos do inicio do array
arr.shift();
console.log(arr);

//acessar o ultimo elemento do array.
console.log(arr[arr.length -1]);

//isArray - mostra se o array é true ou false
console.log(Array.isArray(5));
console.log(Array.isArray(arr));

