//parseFloat 10.0 vai transformar string em Number ponto flutuante 

console.log(parseFloat("12.999"));
console.log(Number.parseFloat("12.999"));

//parseInt

console.log(parseInt('10')); //transforma string em Number inteiro
console.log(parseInt(16.77)); //transforma em inteiro

//toFixed

console.log(25.74659.toFixed(1));//diminui as casas decimais com o valor entre parentes dentro de parentes.


//isNaN
console.log(isNaN('teste'));//teste de true or false
console.log(isNaN(12));//NaN = NOT a Number o u não é um número
console.log(isNaN('12'));//converte string para Number

//MAX _ VALUE e MIN_VALUE

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(2.7976931348623157e+308);//Infinity

//parseFloat
var a = "1.2";
var b = 3;
console.log(parseFloat(a)+ b);//transforma string em Number

//parseInt
var c = '1.2';
var d =3;
console.log(parseInt(a)+b);//transforma em inteiro