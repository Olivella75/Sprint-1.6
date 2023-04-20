//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.
//Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2. S_1_3_1_2
//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).
//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.

function add (param1, param2) {
    if(typeof param1 !== "number" || typeof param2 !== "number") {
        throw new Error ("Has d'introduir 2 números");
    }
    return param1 + param2;
}

function substract (param1, param2) {
    return param1 - param2;
}

function multiply (param1, param2) {
    return param1 * param2;
}

function divide (param1, param2) {
    if (param2 === 0) {
        throw new Error ("No es pot dividir per 0");
    }
    return param1 / param2;
}

module.exports = { add, substract, multiply, divide };