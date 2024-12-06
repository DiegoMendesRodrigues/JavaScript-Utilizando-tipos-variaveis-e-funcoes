/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Trabalhando com boolean
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com boolean",
    "\n" + "-".repeat(35))

//const nomeAluno = 'Diego'
const nomeAluno = 'Bruna'
const estaAprovado = true
const estaAtivo = false

if (estaAprovado === true) {
    console.log('Estudante aprovado! :)')
} else {
    console.log('Estudande reprovado! :(')
}

if (estaAtivo) {
    console.log('Estudante ativo! :)')
} else {
    console.log('Estudante inativo! :(')
}

if (nomeAluno === 'Diego') {
    console.log(`Olá ${nomeAluno}`)
} else {
    console.log(`Aluno ${nomeAluno} não identificado`)
}