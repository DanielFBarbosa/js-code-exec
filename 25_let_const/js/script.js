let x = 5;  //mesma coisa de var e pode ser usada em outro local

const p = 10; //não pode ser usada novamente no escopo global
x = 12;
console.log(x);
console.log("const 1 : " + p);

    if(true){
        let x = 20;
        console.log(x)
        const p = 50; //pode utilizar a mesma constante do escopo global no local .

        console.log("const if 2: " + p);
    }
    
    console.log(x);

    if(20 > 10){
        const p = 100;
        console.log("Consta if 3: " +p);
    }
    
    for(let x = 0; x < 10; x++){
        console.log(x);
    }
