/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Trabalhando com números
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com números",
    "\n" + "-".repeat(35))

// Número inteiro (number)
const notaPriBi = 8

// Número de ponto flutuante (number)
const notaSegBi = 6.3
const notaTerBi = -2

// Essa string será concatenada adiante
const notaQuaBi = '7'

const notaTotal = notaPriBi.to + notaSegBi + notaTerBi + notaQuaBi
console.log(notaTotal)
console.log('-')

// Concatenação de strings
console.log(12.3 + '7')
console.log('-')

const notaTotalFinal = notaPriBi + notaSegBi + notaTerBi + Number.parseInt(notaQuaBi)
const mediaFinal = notaTotalFinal / 4
console.log('A soma das notas é ' + notaTotalFinal.toFixed(2))
console.log('A média é ' + mediaFinal.toFixed(2))
console.log('-')

const base = 123456
const expoente = 2
const resultado = Number.parseFloat(base).toExponential(expoente)
console.log(resultado)
console.log('-')

const numero = 10
const nome = 'Regina'
console.log(Number.isNaN(numero))

// Analisar bem esse resultado!
console.log(Number.isNaN(nome))
console.log(Number.isNaN(NaN))
console.log('-')

console.log(isNaN(numero))

// Agora está correto
console.log(isNaN(nome))
console.log(isNaN(NaN))
console.log('-')

// Número hexadecimal

// Representa o número 2588 em hexadecimal
let numHex = 0xA1C;

// Saída: 2588
console.log(numHex);
console.log(Number(numHex).toString(16))
console.log('-')

// Número octal

// Representa o número 8 em octal
let numOctal = 0o10;

// Saída: 8
console.log(numOctal);
console.log('-')

console.log(Number(true))
console.log(Number(false))

let valor3 = 0;
console.log(typeof valor3)