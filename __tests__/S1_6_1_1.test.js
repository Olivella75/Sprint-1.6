//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.

const { add, substract, multiply, divide } = require("../app/S1_6_1");

describe("Funció add", () => {
    test('La suma de 1 i 2 ha de retornar 3', () => {
        const expected = 3;
        const actual = add(1, 2);
        expect(actual).toEqual(expected);
    });
    test('La suma de -4 i 2 ha de retornar -2', () => {
        const expected = -2;
        const actual = add(-4, 2);
        expect(actual).toEqual(expected);
    });
    test("Error només s'ha introduit un número", () => {
        try {
            add(3);
        } catch (error) {
            expect(error.message).toBe("Es necessiten 2 números per fer l'operació");
        }
    });
    test("S'han d'introduir números, no lletres", () => {
        try {
            add("a", "b");
        } catch (error) {
            expect(error.message).toBe("S'han d'introduir números");
        }
    })
});

describe("Funció substract", () => {
    test('La resta de 1 menys 2 ha de retornar -1', () => {
        const expected = -1;
        const actual = substract(1, 2);
        expect(actual).toEqual(expected);
    });
    test('La resta de 5 menys 3 ha de retornar 2', () => {
        const expected = 2;
        const actual = substract(5, 3);
        expect(actual).toEqual(expected);
    });
});

describe("Funció multiply", () => {
    test('La multiplicació de 2 per 3 ha de retornar 6', () => {
        const expected = 6;
        const actual = multiply(2, 3);
        expect(actual).toEqual(expected);
    });
    test('La multiplicació de 1 per -4 ha de retornar -4', () => {
        const expected = -4;
        const actual = multiply(1, -4);
        expect(actual).toEqual(expected);
    });
});

describe("Funció divide", () => {
    test('La divisió de 6 entre 2 ha de retornar 3', () => {
        const expected = 3;
        const actual = divide(6, 2);
        expect(actual).toEqual(expected);
    });
    test("La divisió de 2 entre 0 ha de retornar infinit", () => {
        const expected = Infinity;
        const actual = divide(2, 0);
        expect(actual).toEqual(expected);
    })
    test("La divisió de 0 entre 0 ha de retornar NaN", () => {
        const expected = NaN;
        const actual = divide(0, 0);
        expect(actual).toEqual(expected);
    })
});

//Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2. S_1_3_1_2

const {arrow1, write} = require ("../app/S1_3_1_2");

describe("Funció arrow1", () => {
    test('arrow1 15 ha de donar "Major de 10"', function (done) {
        function callback(result) {
            expect(result).toBe('Major de 10');
            done();
        }
        arrow1(15, callback);
    });
    test('arrow1 8 ha de donar "Menor de 10"', function (done) {
        function callback(result) {
            expect(result).toBe('Menor de 10');
            done();
        }
        arrow1(8, callback);
    });
    test ("Has d'introduir un número", () => {
        try {
            arrow1("A", write);
        } catch (error) {
            expect(error.message).toBe("Posa un número!!");
        }
    });
});

//Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici 
//Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()). S_1_3_2_1 i S_1_3_2_2

const getEmployee = require ("../app/S1_3_2_1b");
const getSalary = require ("../app/S1_3_2_2b");

describe("Funció getEmployee", () => {
    test('Error si el id no és un número', () => {
        expect(() => getEmployee('a')).toThrow('Ha de ser un número');
    });  
    test('Error si el id que es passa és negatiu', () => {
        expect(() => getEmployee(-1)).toThrow('Ha de ser un número positiu');
    });
    test('Ok si el id existeix', async () => {
        const result = await getEmployee(2);
        expect(result).toEqual({id: 2, name: 'Bill Gates'});
    });
    test('Error si el id no existeix a la base de dades', async () => {
        await expect(getEmployee(4)).rejects.toEqual('No existeix el id 4.');
    });
});
    
describe("Funció getSalary", () => {
    test('Error si el id no és un número', () => {
        expect(() => getSalary({id: 'a'})).toThrow("Has d'introduir un número");
    });
    test('Error si el id que es passa és negatiu', () => {
        expect(() => getSalary({id: -1})).toThrow("El número no pot ser negatiu");
    });
    test('Ok si el id existeix', async () => {
        const result = await getSalary({id: 2});
        expect(result).toEqual({id: 2, salary: 1000});
    });
    test('Error si el id no existeix a la base de dades', async () => {
        await expect(getSalary({id: 4})).rejects.toEqual('No existeix el client 4.');
    });
});

//Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2. S1_4_1_2

const {promise, fAsincrona} = require ("../app/S1_4_1_2b");

describe("Funció promise", () => {
    test('Promesa ok quan es passa un número', async () => {
        const result = await promise(5);
        expect(result).toEqual('El 5 és un número!');
    });
    test('Promesa no ok quan no es passa un número', async () => {
        await expect(promise('a')).rejects.toEqual('Error. La dada a no és un número');
    });
});

describe("Funció fAsincrona", () => {
    test("Executar la promesa i el resultat és ok al passar un número", async () => {
        const consoleTest = jest.spyOn(console, 'log');
        await fAsincrona(5);
        expect(consoleTest).toHaveBeenCalledWith('El 5 és un número!');
        consoleTest.mockRestore();
    });
    test("Executar la promesa i el resultat es no ok al passar un string", async () => {
        const consoleTest = jest.spyOn(console, 'log');
        await fAsincrona('a');
        expect(consoleTest).toHaveBeenCalledWith('Error. La dada a no és un número');
        consoleTest.mockRestore();
    });
});