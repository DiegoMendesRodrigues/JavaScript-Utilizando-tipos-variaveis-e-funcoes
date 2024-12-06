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

// Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
const nomeUsuario = 'Diego'
const idadeUsuario = 42
const ativoUsuario = false
console.log(typeof nomeUsuario, typeof idadeUsuario, typeof ativoUsuario)
console.log('-')

// Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.
const primeiroNomeAluno = 'Diego'
const sobrenomeAluno = 'Rodrigues'
const nomeCompletoAluno = primeiroNomeAluno + ' ' + sobrenomeAluno
const nomeSobrenomeAluno = `${primeiroNomeAluno} ${sobrenomeAluno}`
console.log(nomeCompletoAluno)
console.log(nomeSobrenomeAluno)
console.log('-')

// Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
const cursoNome = 'Aprendendo JS'
const cursoHoras = 40
const cursoDescricao = `O curso ${cursoNome} possui ${cursoHoras} horas de duração`
console.log(cursoDescricao)
console.log('-')

// Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
let irmaNome = 'Natalia'
console.log(irmaNome)
irmaNome = 'Bruna'
console.log(irmaNome)
console.log('-')

// Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
var sistemaOperacional = 'Linux'
let linguagemProgramacao = 'JavaScript'
console.log(sistemaOperacional, linguagemProgramacao)

if (true) {
    var sistemaOperacional = 'Windows'  // Global também, sobrescreve a anterior
    let linguagemProgramacao = 'Python' // Variável de bloco, não sobrescreve a anterior
    console.log(sistemaOperacional, linguagemProgramacao)
}
console.log(sistemaOperacional, linguagemProgramacao)
console.log('-')

// Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
let estaChovendo = true
if (estaChovendo) {
    console.log('Levar o guarda-chuva, pois está chovendo!')
} else {
    console.log('Hoje é um dia de sol! Não leve o guarda-chuva!')
}
console.log('-')

// Operador Ternário
console.log(`Hoje ${estaChovendo ? 'é' : 'não é'} necessário levar o guarda-chuva.`)