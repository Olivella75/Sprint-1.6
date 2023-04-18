// Crea una arrow function que rebi un paràmetre i una funció callback i li passi a la funció un missatge o un altre en funció del paràmetre rebut.

const arrow1 = (param, callback) => {
    if (param > 10) {
        result = "Major de 10";
    } else {
        result = "Menor de 10";
    }
    callback (result);
}
function write (param1) {
    console.log(param1);
}
arrow1(15, write);
arrow1(8, write);

module.exports = {arrow1, write};