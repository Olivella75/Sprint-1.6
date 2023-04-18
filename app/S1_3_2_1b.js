// Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni una Promise efectuant la cerca en l'objecte pel seu id.

const employees = [
    {id: 1, name: "Linux Torvalds"}, 
    {id: 2, name: "Bill Gates"}, 
    {id: 3, name: "Jeff Bezos"}
];

const salaries = [
    {id: 1, salary: 4000}, 
    {id: 2, salary: 1000}, 
    {id: 3, salary: 2000}
];

const getEmployee = (param) => {
    if (typeof param !== 'number') throw new Error ('Ha de ser un número');
    if (param < 0) throw new Error ('Ha de ser un número positiu');
    return new Promise (function(resolve, reject) {
        const employeeFound = employees.find((e) => e.id === param);
        employeeFound ? resolve (employeeFound) : reject (`No existeix el id ${param}.`);
    });
}
getEmployee(2)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

getEmployee(4)
.then((data) => console.log(data))
.catch((err) => console.log(err));

module.exports = getEmployee;

const employees = require("./employees.json");