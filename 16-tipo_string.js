/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Trabalhando com strings
 * Apoio:
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com strings",
    "\n" + "-".repeat(35))

const estudante = "Ana Maria"
const professor = 'Regina Marcia'
const nossoLema = "Nossa lema é 'estudar JavaScript'!"
const estudanteProfessor = `O aluno ${estudante} possui o professor ${professor}`
console.log(estudante)
console.log(professor)
console.log(nossoLema)
console.log(estudanteProfessor)
console.log('-')

console.log(estudante.toLowerCase())
console.log(estudante.toUpperCase())
console.log(estudante.endsWith('ia'))
console.log(estudante.endsWith('go'))
console.log(estudante.replace('Ana', 'Juliana'))
console.log(estudante.substring(4, 8))
console.log(estudante.search('Ana'))
console.log(estudante.search('Maria'))
console.log(estudante.search('Regina'))
console.log('='.repeat(10))
console.log(estudante.concat(' Braga'))
console.log(estudante.split(' '))
console.log(estudante.split(' ')[1])
console.log('estudando JavaScript'.includes('Java'))    // Retorna true

console.log('-')

/**
 * Padrão UTF (de Unicode Transformation Format ou “formato de conversão
 * de unicode”, em tradução livre)
 * 
 * O JavaScript usa, por padrão, o UTF-16
 * 
 * Bancos de dados podem aceitar outros tipos de codificação de caracteres,
 * o que faz sentido se pensarmos que o UTF-16 utiliza uma quantidade relativamente
 * grande de espaço em memória para salvar cada caractere
 */
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
console.log('-')

let valor1 = 0
let abacate
let valor2 = "10"

console.log("valor1 é do tipo:", typeof valor1)
console.log("abacate é do tipo:", typeof abacate)
console.log("valor2 é do tipo:", typeof valor2)