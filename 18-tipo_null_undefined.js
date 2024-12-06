/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Trabalhando com null e undefined
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com null e undefined",
    "\n" + "-".repeat(35))

/**
 * undefined (valor não definido, não está associado a nenhum valor)
 * Costuma ser retornado depois de possíveis erros!
 */
let nomeEstudante
console.log(nomeEstudante)
console.log(typeof nomeEstudante)

// null (valor nulo)
let telefoneEstudante = null
console.log(telefoneEstudante)

// Devolve objeto! Esse é um erro do JS
console.log(typeof telefoneEstudante)

// Exibe 3, pois posso somar null com um inteiro
console.log(telefoneEstudante + 3)

// Exibe NaN, pois o tipo do nomeEstudante é undefined
console.log(nomeEstudante + 3)