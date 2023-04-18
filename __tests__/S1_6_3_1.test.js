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
  
// Mock de l'arxiu JSON
const mockData = {
    employees: [
        {id: 1, name: "Linux Torvalds"}, 
        {id: 2, name: "Bill Gates"}, 
        {id: 3, name: "Jeff Bezos"}
    ],
    salaries: [
        {id: 1, salary: 4000}, 
        {id: 2, salary: 1000}, 
        {id: 3, salary: 2000}
    ]
};
  
jest.mock('fs');
fs.readFileSync.mockReturnValue(JSON.stringify(mockData));
  
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