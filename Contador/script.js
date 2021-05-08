function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        alert('[ERRO] Faltam dados!')
        resultado.textContent = 'Impossivel contar! preencha os dados acimas '
    } else {
        resultado.innerHTML = 'Contando... <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('[ERRO] Passo invalido! considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1f449}`
            }
        } else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c} \u{1f449}`
            }
        }
    } resultado.innerHTML += `\u{1f3c1}`
}