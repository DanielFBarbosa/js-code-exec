var nome = 'João';
var idade = 15 ;
const senha = 123456
if(nome =='João' || idade > 14){ // operador OR ou ||
    console.log('Pode entrar na natação');
}else if(senha === 123456 && nome === 'lucas' && idade === 13){
    console.log('A senha esta correta, pode entrar')
}else{
    console.log('Não pode entrar, a senha não confere');
}

if(nome == "Pedro" || 15 > 20 && 10 == 10){
    console.log('Testando');
}else{
    console.log('Não entrou');
}