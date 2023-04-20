//Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()) de manera que accedeixin a les 
//dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON S1_3_2_1 i S1_3_2_2

const fs = require('fs');

const data = require('./data.json');

const getEmployee = (param) => {
    if (typeof param !== 'number') throw new Error ('Ha de ser un número');
    if (param < 0) throw new Error ('Ha de ser un número positiu');
    return new Promise (function(resolve, reject) {
        const employeeFound = data.employees.find((e) => e.id === param);
        employeeFound ? resolve (employeeFound) : reject (`No existeix el id ${param}.`);
    });
};

const getSalary = (param) => {
    if (typeof param !== 'number') throw new Error ('Ha de ser un número');
    if (param < 0) throw new Error ('Ha de ser un número positiu');
    return new Promise (function(resolve, reject) {
        const salaryFound = data.salaries.find((s) => s.id === param);
        salaryFound ? resolve (salaryFound) : reject (`No existeix el id ${param}.`);
    });
};

//Exemples
/*getEmployee(2)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

getEmployee(4)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
*/
  
jest.mock('fs');
fs.readFileSync.mockReturnValue(JSON.stringify(data));
  
describe('getEmployee', () => {
    test("Retorna ok si el id existeix", async () => {
        const result = await getEmployee(2);
        expect(result).toEqual({id: 2, name: 'Bill Gates'});
    });
  
    test("Error si el id no existeix", async () => {
        await expect(getEmployee(4)).rejects.toBe('No existeix el id 4.');
    });
});

describe('getSalary', () => {
    test("Retorna ok si el id existeix", async () => {
        const result = await getSalary(2);
        expect(result).toEqual({id: 2, salary: 1000});
    });
  
    test("Error si el id no existeix", async () => {
        await expect(getSalary(4)).rejects.toBe('No existeix el id 4.');
    });
});

//Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de funcionament i 
//verifiqui que els errors llançats són els esperats. S1_4_2_1b

const { double, sum } = require("../app/S1_4_2_1c");

describe("Funció double, forçar errors", () => {
    test("Si es passa un string per multiplicar per 2 dona error",  async () => {
        const param = "a";
        jest.useFakeTimers();
        const result = double(param);
        const expectedResult = `La dada introduida ${param} no és un número.`;
        jest.runAllTimers();
        await expect(result).rejects.toStrictEqual(expectedResult);
    })
});

describe("Funció sum, forçar errors.", () => {
  test("Si es passas un string per sumar dona error", async () => {
    await expect(sum('1', 2, 3)).rejects.toThrow('Alguna dada que has passat no era un número');
    await expect(sum('1', '2', '3')).rejects.toThrow('Alguna dada que has passat no era un número');
  });
});