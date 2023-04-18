//Crea una nova funció asíncrona que cridi a una altra que retorni una Promise 
//que efectuï la seva funció resolve() després de 2 segons de la seva invocació.

function promise (param) {
    if (typeof param !== "number") {
        return Promise.reject(`Error. La dada ${param} no és un número`);
    } else {
        return new Promise (function(resolve, reject) {
            setTimeout(() => {
                resolve(`El ${param} és un número!`);
            }, 2000);
        });
    }
}

async function fAsincrona (param) {
    try {
        let data = await promise(param);
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
//fAsincrona(5);
//fAsincrona("5");

module.exports = {promise, fAsincrona};