let resposta = document.querySelector('.resultado')

function insert(valor){
    resposta.innerHTML+=valor
}

function clean(){
    resposta.innerHTML = ' '
}

function back(){
    if(resposta.textContent){
        let result = document.getElementById('resultado').innerHTML
        resposta.innerHTML=result.substring(0, result.length -1)
    }
}

function confirm(){
    if(resposta.textContent!='Erro'){
        document.getElementById('resultado').innerHTML=eval(resultado.innerHTML)
    }
}

let x = document.querySelector('#ponto')
x.addEventListener('mouseenter, entrar')
x.addEventListener('mouseout, sair')
function entrar(){
    x.style.background='#4F4F4F'
}

function sair(){
    x.innerHTML
    x.style.background='#1C1C1C'

}