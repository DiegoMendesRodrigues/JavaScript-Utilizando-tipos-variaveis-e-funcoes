/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Exercícios
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nExercícios",
    "\n" + "-".repeat(35))

// Crie uma variável contendo uma frase. Em seguida, exiba no console o comprimento da frase e a mesma frase com letras maiúsculas.
const frase = '3 patinhos foram passear'
console.log(frase.length)
console.log(frase.toUpperCase())
console.log('-')

// Declare duas variáveis, uma inicializada com valor null e outra que não recebe atribuição (resultando em undefined). Exiba os valores no console.
const variavelNula = null
let variavelNaoDefinida
console.log(variavelNula)
console.log(variavelNaoDefinida)
console.log(typeof variavelNula)
console.log(typeof variavelNaoDefinida)
console.log('-')

// Crie 3 variáveis de tipos diferentes, utilize template strings para combinar os diferentes tipos de dados (number, string, boolean) em uma única string e exiba o resultado no console.
const nome = 'Diego'
const idade = 42
const ativo = false
console.log(`O ${nome} possui ${idade} anos e está ${ativo ? 'ativo' : 'inativo'}`)
console.log('-')

// Crie uma variável numérica e uma string. Faça a conversão da variável numérica para string e da string para número. Exiba os tipos de dados resultantes no console.
const variavelNumerica = 20
const variavelString = 'JavaScript'
//const variavelString = '30'
const variavelNumericaString = String(variavelNumerica)
const variavelStringNumerica = Number(variavelString)

console.log(variavelNumericaString)
console.log(variavelStringNumerica)
console.log(typeof variavelNumericaString)
console.log(typeof variavelStringNumerica)
console.log('-')

// Crie uma variável com uma string e utilize métodos de manipulação de strings, como toUpperCase, toLowerCase, slice ou outros, para modificar a string original. Exiba os resultados finais no console.
const nomeCompleto = 'Diego Mendes Rodrigues'
console.log(nomeCompleto)
console.log(nomeCompleto.toUpperCase())
console.log(nomeCompleto.toLowerCase())
console.log(nomeCompleto.endsWith('Lobato'))
console.log(nomeCompleto.endsWith('Rodrigues'))
console.log(nomeCompleto.split(' '))
console.log(nomeCompleto.split(' ')[1])
console.log('-')