/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Trabalhando com operadores aritiméticos
 * Apoio:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com operadores aritiméticos",
    "\n" + "-".repeat(35))

const notaPriBi = 8
const notaSegBi = 6.3
const notaTerBi = 7
const notaQuaBi = 8.3
let media = (notaPriBi + notaSegBi + notaTerBi + notaQuaBi) / 4

// Bônus na média maior que 7
if (media >= 7) {
    media *= 1.1
}

console.log(`Média = ${media.toFixed(2)}`)
console.log('-')

// Precedência de operações
const salarioMensal = 3500;
const despesasFixas = 1200;
const despesasVariaveis = 500;
const economiasMensais = 800;
const bonusAnual = 3000;

const resultado = (salarioMensal - despesasFixas - despesasVariaveis)
    * 12 + (economiasMensais * 12) + bonusAnual;
console.log(resultado)
console.log('-')

// Precedência de operações
const operacoes = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log(operacoes)