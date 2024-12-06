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

// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.
const saldo = 1000
const deposito = 250
const saque = 100
let operacao
operacao = saldo + deposito
console.log(operacao)
operacao = saldo + deposito - saque
console.log(operacao)
console.log('-')

// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.
const valor = 20
const numeroImparOuPar = (valor % 2) !== 0 ? 'Ímpar' : 'Par'
console.log(numeroImparOuPar)
console.log('-')

// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
const usuarioLogado = false
const usuarioAdministrador = true
if (usuarioLogado && usuarioAdministrador) {
    console.log('Bem vindo ao sistema adiministrador!')
} else if (usuarioLogado && !usuarioAdministrador) {
    console.log('Bem vindo ao sistema usuário!')
} else {
    console.log('Usuário não autenticado!')
}
console.log('-')

// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
let variavelA = false
let variavelB = false
console.log(variavelA || variavelB)

variavelA = true
console.log(variavelA || variavelB)

variavelB = true
console.log(variavelA || variavelB)
console.log('-')

// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
const idadaMinimaCompra = 18
let idadeComprador = 16
if (idadeComprador >= idadaMinimaCompra) {
    console.log('A compra pode ser realizada')
} else {
    console.log('A compra não pode ser realizada')
}

idadeComprador = 30
if (idadeComprador >= idadaMinimaCompra) {
    console.log('A compra pode ser realizada')
} else {
    console.log('A compra não pode ser realizada')
}
console.log('-')