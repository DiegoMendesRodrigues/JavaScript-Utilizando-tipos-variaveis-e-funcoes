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

// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
function olaPessoa(nome = '') {
    return `Olá ${nome}! Tenha um bom dia`
}
console.log(olaPessoa('Glaucia'))
console.log('-')

// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
const maiorDeIdade = function (idade = 0) {
    if (idade >= 18) {
        return 'Maior de idade'
    }
    return 'Menor de idade'
}
console.log(maiorDeIdade(15))
console.log(maiorDeIdade(30))
console.log('-')

// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
const textoPalindromo = texto => texto.toString() === texto.split("").reverse().join("")
console.log(textoPalindromo('banana'))
console.log(textoPalindromo('ana'))
console.log(textoPalindromo('arara'))
console.log(textoPalindromo('reviver'))
console.log('-')

// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.
function maiorNumero(n1, n2, n3) {
    let maior = n1
    if (n2 > maior) {
        maior = n2
    }
    if (n3 > maior) {
        maior = n3
    }
    return maior
}
console.log(maiorNumero(10, 30, 5))
console.log(maiorNumero(5, 10, 5))
console.log(maiorNumero(5, 10, 15))
console.log(maiorNumero(50, 10, 15))
console.log(maiorNumero(100, 200, 300))
console.log('-')

// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.
const potencia = (base, expoente) => base ** expoente
console.log(potencia(2, 3))
console.log(potencia(3, 2))
console.log(potencia(2, 10))
console.log('-')