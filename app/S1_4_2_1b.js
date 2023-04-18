//Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons.
//Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir la funció anterior.

function double (param) {
    return new Promise(function(resolve, reject) {
        if(typeof param === "number") {
            setTimeout(() => {
                resolve(param * 2);
            }, 100);
        }
        else {
            reject(`La dada introduida ${param} no és un número.`);
        } 
    });
}
double(22)
    //.then((data) => console.log(`El doble del número ${data/2} és ${data}`)) Trec els console log pq els test es veuen millor aixi
    //.catch((error) => console.log(error));

async function sum(number1, number2, number3) {
    try {
        let doubleNum1 = await double(number1);
        let doubleNum2 = await double(number2);
        let doubleNum3 = await double(number3);
        let sumTotal = (doubleNum1 + doubleNum2 + doubleNum3);
        return sumTotal;
    } catch (error) {
        //console.log(error);
        throw error;
    }
}
sum(1, 2, 3);

module.exports = {double, sum};