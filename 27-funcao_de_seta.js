/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Arrow Functions - Funções de Seta
 * Apoio:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nArrow Functions - Funções de Seta",
    "\n" + "-".repeat(35))

/**
 * Versão mais moderna e recomendada para utilização (Arrow function)
 * Muito utilizadas em rollback
 * Não acontece o hoisted
 */
const estudanteReprovou = (notaFinal, faltas) => {
    if (notaFinal < 7 && faltas > 4) {
        return true
    }
    return false
}
console.log(estudanteReprovou(6, 5))
console.log(estudanteReprovou(9, 1))
console.log('-')

// Arrow function com apenas uma linha de código
const exibeNome = (nome) => nome.toUpperCase()
console.log(exibeNome('Natalia'))
console.log('-')

// Envolver o corpo da função em parênteses, para retornar uma expressão literal de objeto
const fooBar = (foo, bar) => ({ foo, bar })
console.log(fooBar('Diego', 'Bruna'))
console.log('-')