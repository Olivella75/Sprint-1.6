// Crea una altra arrow function getSalary() similar a l'anterior que rebi com a paràmetre un objecte employee i retorni el seu salari.

const { type } = require("os");

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

const getSalary = (param) => {
    if (typeof param.id !== "number") throw new Error ("Has d'introduir un número");
    if (param.id < 0) throw new Error ("El número no pot ser negatiu");
    return new Promise (function(resolve, reject) {
        const employeeFound = employees.find((employees) => employees.id === param.id);
        employeeFound ? resolve (salaries[param.id - 1]) : reject (`No existeix el client ${param.id}.`);
        
    });
}
//const x = parseInt(Math.random() * 4); // 0 la promise dona error, el 1, 2 i 3 dona ok.
//const x = 2
getSalary({id: 2, param2: 1000}) //employees[x]})
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

module.exports = getSalary;