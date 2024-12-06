/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Escopo de variáveis
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nEscopo de variáveis",
    "\n" + "-".repeat(35))

/**
 * Variáveis criadas em um bloco, com escopo Bloco, só pode ser alterada dentro dele
 * Variáveis criadas fora do bloco, podem ser alteradas dentro do bloco
 */

if (1 > 0) {
    /**
     * Variável criada dentro do bloco, existe apenas no dentro dele
     * Escopo dessa variável: Bloco
    */
    var estudade = 'Diego'
    console.log(estudade)
}

/**
 * Agora estamos criando uma NOVA variável, um novo 'var estudande'
 * Escopo dessa variável: Global
 */
estudade = 'Regina'
console.log(estudade)

if (1 > 0) {
    /**
     * Variável criada dentro do bloco, existe apenas no dentro dele
     * Escopo dessa variável: Bloco
     */
    let estudade = 'Marcos'
    console.log(estudade)
}

/**
 * Esta é a variável que foi criada novamente, foi um novo 'var estudande', 
 * com o valor atribuído de 'Regina', de escopo Global
 */
//estudade = 'Mariana'
console.log(estudade)
console.log('-')

// Criar uma variável fora do bloco, depois aterar no bloco
let professor

if (1 > 0) {
    professor = 'Claudio'
    console.log(professor)
}
console.log(professor)
console.log('-')

if (true) {
    let num1 = 10;
    // var sempre deixa a variável com escopo global
    var num2 = 20;
}
console.log(num2)
//console.log(num1, num2)