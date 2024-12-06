/**
 * Curso de JavaScript: utilizando tipos, variáveis e funções
 * Erros no JavaScript
 * Apoio:
 * https://www.alura.com.br/artigos/lidando-com-erros-node-js
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 * @public
 * @author Diego Mendes Rodrigues
 */
// Cabeçalho
console.log("-".repeat(35),
    "\nErros no JavaScript",
    "\n" + "-".repeat(35))

// ReferenceError: variavel is not defined
//console.log(variavel)

// SyntaxError: missing ) after argument list
//console.log('Oi'

/**
 *  Usando try ... cat
 *  try {
 *      tryStatements
 *  } catch (exceptionVar) {
 *      catchStatements
 *  } finally {
 *      finallyStatements
 *  }
 */
try {
    funcaoNaoExistente();
} catch (error) {
    console.log('Erro no script')
    console.error(error);
    /**
     * Expected output: ReferenceError: nonExistentFunction is not defined
     * (Note: the exact output may be browser-dependent)
     */
} finally {
    console.log('Encerrando')
}
console.log('-')

try {
    throw new TypeError("oops");
} catch ({ name, message }) {
    // "TypeError"
    console.log(name);

    // "oops" 
    console.log(message);
}
console.log('-')

try {
    console.log(variavel)
} catch ({ name, message }) {
    // ReferenceError
    console.log(name);

    // variavel is not defined
    console.log(message);
}
console.log('-')

try {
    throw "Oops; this is not an Error object";
} catch (e) {
    if (!(e instanceof Error)) {
        e = new Error(e);
    }
    console.error(e.message);
}
console.log('-')

function logMyErrors(erro) {
    console.log(`Erro = ${erro.message}`)
    return false
}

try {
    // may throw three types of exceptions
    myRoutine()
} catch (e) {
    if (e instanceof TypeError) {
        // statements to handle TypeError exceptions
    } else if (e instanceof RangeError) {
        // statements to handle RangeError exceptions
    } else if (e instanceof EvalError) {
        // statements to handle EvalError exceptions
    } else {
        // statements to handle any unspecified exceptions
        logMyErrors(e) // pass exception object to error handler
    }
}