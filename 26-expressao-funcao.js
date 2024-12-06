/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Usando Expressões de Funções
 * Apoio:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_hoisting
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nUsando Expressões de Funções",
    "\n" + "-".repeat(35))

/**
 * Uma expressão de funçao, ou seja, ela está em uma variável
 * Não acontece o hoisted
 */
const estudanteReprovou = function (notaFinal, faltas) {
    if (notaFinal < 7 && faltas > 4) {
        return true
    }
    return false
}

console.log(estudanteReprovou(6, 5))
console.log(estudanteReprovou(9, 1))

// Exemplo com valores padrões nos argumentos
function calculaProduto(a, b = 2, c = 1) {
    console.log(b)
    return a * b * c;
}

const resultado1 = calculaProduto(3);
const resultado2 = calculaProduto(2, 4);
const resultado3 = calculaProduto(1, 2, 3);
const resultado4 = calculaProduto(2, undefined, 5);

console.log("Resultado 1:", resultado1);
console.log("Resultado 2:", resultado2);
console.log("Resultado 3:", resultado3);
console.log("Resultado 4:", resultado4);