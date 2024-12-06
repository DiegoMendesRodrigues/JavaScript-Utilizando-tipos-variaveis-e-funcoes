/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Trabalhando com operadores de comparação
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators#operador_comparacao
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com operadores de comparação",
    "\n" + "-".repeat(35))

const estaAprovado = true

/**
 * Operador Estritamente Igual (===)
 * SEMPRE UTILIZAR ESTE EM COMPARAÇÕES
*/
if (estaAprovado === true) {
    console.log('Aprovado')
}
console.log('-')

/**
 * Operador Igual (==)
 * Neste caso, o JS avaliou que uma string contendo 0 dentro, é a mesma coisa que
 * o número zero, portanto o resultado foi true
 */
if ('0' == 0) {
    console.log('Passou')
} else {
    console.log('Não passou')
}
console.log('-')

/**
 * Agora o JS também avaliou o tipo de dado, por isso uma String '0' não
 * é igual ao número 0, portanto o resultado foi false
 *  */
if ('0' === 0) {
    console.log('Passou')
} else {
    console.log('Não passou')
}
console.log('-')

// Operador Não Igual (!=)
const nome = 'Regina'
if (nome != 'Diego') {
    console.log(`Não te conheço ${nome}`)
} else {
    console.log(`Olá ${nome}`)
}
console.log('-')

/**
 * Operador extritamente Não Igual (!==)
 * PREFERENCIAMENTE UTILIZAR ESTE
 *  */
if (nome !== 'Diego') {
    console.log(`Não te conheço ${nome}`)
} else {
    console.log(`Olá ${nome}`)
}
console.log('-')

// Operadores (>) (>=) (<) (<=)
const idade = 21
if (idade >= 18) {
    console.log('Maior de idade')
} else {
    console.log('Menor de idade')
}
console.log('-')

// Exemplos
let valor1 = '5';
let valor2 = 5;

let resultado1 = valor1 + valor2;
let resultado2;

if (valor1 === valor2) {
    resultado2 = 'Os valores são iguais.';
} else {
    resultado2 = 'Os valores são diferentes.';
}

console.log('Resultado 1:', resultado1);
console.log('Resultado 2:', resultado2);
console.log('-')

// Outro exemplo
const numero = 10;
const resultado3 = (numero > 5 && numero < 15);
const resultado4 = (numero === 10 || numero > 20);
const resultado5 = !(numero < 5);

console.log("Resultado 1:", resultado3);
console.log("Resultado 2:", resultado4);
console.log("Resultado 3:", resultado5);