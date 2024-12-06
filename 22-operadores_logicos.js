/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Trabalhando com operadores lógicos
 * Apoio:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
 * @public
 * @author Diego Mendes Rodrigues
 */
/**
 * Truthy
 * https://developer.mozilla.org/pt-BR/docs/Glossary/Truthy
 * Em JavaScript, um valor truthy é um valor que se traduz em verdadeiro 
 * quando avaliado em um contexto Booleano. 
 * Todos os valores são truthy a menos que eles sejam definidos como falsy 
 * (ou seja., exceto para false, 0, "", null, undefined, e NaN).
 * if (true)
 * if ({})
 * if ([])
 * if (42)
 * if ("foo")
 * if (new Date())
 * if (-42)
 * if (3.14)
 * if (-3.14)
 * if (Infinity)
 * if (-Infinity)
 * 
 * Falsy 
 * https://developer.mozilla.org/pt-BR/docs/Glossary/Falsy
 * Um valor falsy é um valor que se traduz em falso quando avaliado em um 
 * contexto Boolean.
 * JavaScript usa tipo coercion em contextos booleanos.
 * Exemplos de valores falsy em JavaScript (que se traduzirá em false e 
 * assim ignorar o bloco if):
  * if (false)
 * if (null)
 * if (undefined)
 * if (0)
 * if (-0)
 * if (0n)
 * if (NaN)
 * if ("")
 * if (document.all)
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nTrabalhando com operadores lógicos",
    "\n" + "-".repeat(35))

let media = 7.5
let faltas = 5
let advertencias = 0

// Operador OR
console.log(media < 7 || faltas > 4)
if (media < 7 || faltas > 4) {
    console.log('Aluno reprovado')
} else {
    console.log('Aluno aprovado')
}
console.log('-')

// Operador AND
console.log(media < 7 && faltas > 4)
if (media < 7 && faltas > 4) {
    console.log('Aluno reprovado')
} else {
    console.log('Aluno aprovado')
}
console.log('-')

// Operador AND
media = 6
console.log(media < 7 && faltas > 4)
if (media < 7 && faltas > 4) {
    console.log('Aluno reprovado')
} else {
    console.log('Aluno aprovado')
}
console.log('-')

// Operador NOT
const reprovado = media < 7 && faltas > 4
if (!reprovado) {
    console.log('Aluno aprovado')
} else {
    console.log('Aluno reprovado')
}
console.log('-')

// Operador AND
//faltas = 2
if (faltas <= 2 && !advertencias) {
    console.log('Parabéns, irá ganhar um bônus! :)')
} else {
    console.log('Não recebeu o bonus! :(')
}