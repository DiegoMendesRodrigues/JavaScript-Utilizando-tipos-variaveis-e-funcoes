/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Usando Funções
 * Apoio:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nUsando Funções",
    "\n" + "-".repeat(35))

// Criar uma função
function olaDiego() {
    console.log('Olá Diego!')
}
// Invocar a função
olaDiego()
console.log('-')

// Criar uma função com um parâmetro
function olaPessoa(nomePessoa) {
    console.log(`Olá ${nomePessoa}, bem vindo ao curso!`)
}
olaPessoa('Regina')
console.log('-')

// Criar uma função com um parâmetro e seu retorno
function podeDirigir(idade) {
    return idade >= 18 ? true : false
}
console.log(podeDirigir(16))
console.log(podeDirigir(18))
console.log(podeDirigir(30))
console.log('-')

// Criar uma função com 2 parâmetros e o retorno sendo um array
function pessoaPodeDirigir(nome, idade) {
    const informacoes = new Array(nome, idade >= 18 ? 'sim' : 'não')
    return informacoes
}
let verificarPessoa = pessoaPodeDirigir('Julia', 10)
console.log(`A ${verificarPessoa[0]} pode dirigir: ${verificarPessoa[1]}`)
verificarPessoa = pessoaPodeDirigir('Natasha', 45)
console.log(`A ${verificarPessoa[0]} pode dirigir: ${verificarPessoa[1]}`)
console.log('-')

// Validar o parâmetro
function divisao(dividendo, divisor) {
    if (divisor !== 0) {
        return dividendo / divisor
    }
    return 'Não podemos dividir por zero'
}
console.log(divisao(10, 2))
console.log(divisao(10, 3).toFixed(2))
console.log(divisao(10, 0))
console.log('-')

// Parâmetro pré-definido
function matricularAluno(nome, integral = false) {
    console.log(`O aluno ${nome} ${integral ? 'irá' : 'não irá'} participar do período integral`)
}
matricularAluno('Marcio')
matricularAluno('Nayara', true)
console.log('-')

// Função que recebe 'n' parâmetros
function pontoMediano() {
    return (Math.min.apply(null, arguments) + Math.max.apply(null, arguments)) / 2
}
console.log(pontoMediano(3, 1, 4, 1, 5))
console.log(pontoMediano(100, 20, 99, 15, 10))
console.log('-')

// Função que concatena diversas strings
function concatenar(separador) {
    const partes = Array.prototype.slice.call(arguments, 1)
    return partes.join(separador)
}
console.log(concatenar(';', 'C', 'Python', 'C#', 'JavaScript'))
console.log('-')