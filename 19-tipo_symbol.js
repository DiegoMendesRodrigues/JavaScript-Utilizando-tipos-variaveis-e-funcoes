/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Trabalhando com Symbol()
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com Symbol()",
    "\n" + "-".repeat(35))

/**
 * O tipo Symbol é um dos tipos primitivos em JavaScript, introduzido no 
 * ES6 (ECMAScript 2015), e representa um identificador único e imutável. 
 * Símbolos são frequentemente utilizados para criar propriedades de objeto 
 * que são únicas e não interferem com outras propriedades existentes.
 * 
 * Dado que os símbolos são únicos, mesmo quando criados com a mesma descrição, 
 * tornam-se ideais para a criação de chaves de propriedades de objetos. 
 * Essa característica evita conflitos com outras chaves, prevenindo a sobrescrita 
 * acidental de propriedades.
 */

// Criar um símbolo
const meuSimbolo = Symbol()
console.log(meuSimbolo)

// Símbolo pode ter descrição
const simboloComDescricao = Symbol('Descrição aqui')
console.log(simboloComDescricao)
console.log(simboloComDescricao.description)
console.log('-')

// Símbolos são únicos
const outroSimbolo = Symbol()
const outroCopia = meuSimbolo
console.log(meuSimbolo == outroSimbolo)
console.log(meuSimbolo == outroCopia)
console.log('-')

// Símbolos podem ser usados como chaves de propriedades de objetos
const obj = {
    [meuSimbolo]: 'Casa do Saber'
}
console.log(obj)
console.log(obj[meuSimbolo])