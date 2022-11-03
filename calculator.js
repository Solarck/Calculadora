let answer = document.querySelector('.result')

function insert(valor){
    answer.innerHTML+=valor
}

function clean(){
    answer.innerHTML = ' '
}

function back(){
    if(answer.textContent){
        let result = document.querySelector('.result').innerHTML
        answer.innerHTML=result.substring(0, result.length -1)
    }
}

function confirm(){
    if(answer.textContent!='Erro'){
        document.querySelector('.result').innerHTML=eval(answer.innerHTML)
    }
}