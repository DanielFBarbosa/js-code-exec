//event mouseover
var title = document.querySelector("#title");

title.addEventListener("mouseover", function(){

    this.style.backgroundColor = "yellow";

});

//event mouseout
title.addEventListener("mouseout", function(){

    this.style.backgroundColor= "white"

});

//afetar outro elemento com mouseover e mouseout
var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function(){

var legenda = document.querySelector("#legenda");

legenda.classList.remove("hide");

})

var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseout", function(){

var legenda = document.querySelector("#legenda");

legenda.classList.add("hide");

})
