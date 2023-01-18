let answer = document.querySelector('[data-resposta]')
insert = (valor) => {
    answer.innerHTML += valor
}

clean = () => {
    answer.innerHTML = ' '
}

back = () => {
    if (answer.textContent) {
        let result = answer.innerHTML
        answer.innerHTML = result.substring(0, result.length - 1)
    }
}

confirm = () => {
    if (answer.textContent) {
        let dataResposta = document.querySelector('[data-resposta]').innerHTML = eval(answer.innerHTML)
    }

    else {
        answer.innerHTML = ''
    }
}