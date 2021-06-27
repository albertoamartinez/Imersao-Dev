var valorEmDolarTexto = prompt("Qual o valor em dolar que você quer converter?")

var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

alert(valorEmDolarNumero)

var valorEmReal = valorEmDolarNumero * 5.5
var valorEmRealDecimal = valorEmReal.toFixed(2)

alert(valorEmRealDecimal)