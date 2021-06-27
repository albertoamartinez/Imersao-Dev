function converter(){
    var campoOperacao = document.querySelector('#operacao')
    var campoValorC = document.querySelector('#valorC')
    var operacao = campoOperacao.value
    var valorC = parseFloat(campoValorC.value)
    var teste = Number.isNaN(valorC)


    if (teste != true){
        if (operacao == "LtD"){
            var valorF = valorC * 1.38
            var valorR = valorF.toFixed(2)
            impValor(valorR)
            campoValorC.value = ""
        } else if (operacao == "CtF"){
            var valorF = (valorC - 32) * 5/9
            var valorR = valorF.toFixed(2)
            impValor(valorR)
            campoValorC.value = ""
        } else if (operacao == "PtC"){
            var valorF = valorC * 30.48
            var valorR = valorF.toFixed(2)
            impValor(valorR)
            campoValorC.value = ""
        } else if (operacao == "LtK"){
            var valorF = valorC * 0.453592
            var valorR = valorF.toFixed(2)
            impValor(valorR)
            campoValorC.value = ""
        } else if (operacao == "MtK"){
            var valorF = valorC * 1.60934
            var valorR = valorF.toFixed(2)
            impValor(valorR)
            campoValorC.value = ""
        }
    } else {
        alert("Favor, insira o valor a ser convertido")
        var resultado = document.querySelector('#final')
        resultado.innerHTML = ""
        campoValorC.value = ""

    }
}
function impValor(valor){
    var resultado = document.querySelector('#final')
    var resultadoImp = "<p> " + valor + " </p>"
    resultado.innerHTML = ""
    resultado.innerHTML = resultado.innerHTML + resultadoImp
}