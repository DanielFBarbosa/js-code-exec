//Escopo global
var x = 1;
var y = 3;

console.log(x, y);

//Escopo local
function teste(){
    var z = 5;
    console.log(z);
}
teste();

//Escopo local
function testando(){
    var z= 0;
    console.log(z);
}
testando();

    //Escopo local também
    if(true){
        var p = 1;
    }
    console.log(p);

    //Escopo global
x = 7;
console.log(x);
console.log(x + y);