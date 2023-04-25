//clearTimeOut
var x = 0;

var myTimer = setTimeout(function(){
    console.log("O x é 0");
}, 1500);

x = 5;

  if(x > 0){
        clearTimeout(myTimer);
        console.log("O x passou de 0");
    }
  
    //clearInterval

    var myInterval = setInterval(function(){
        console.log("Imprimindo Interval com tempo de meio segundo");
    }, 500);

    setTimeout(function(){
        console.log("Não precisamos mais do Interval");
        clearInterval(myInterval);
    }, 1500);