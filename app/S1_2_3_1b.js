//1.2.3.1 Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions

class Furniture {
    constructor() {
        throw new Error("Error a l'instanciar")
    }
}

class CreateFurniture {
    constructor(name) {
        this.name = name;
    }
}

function createObject (param) {
    CreateFurniture.prototype = Object.create(Furniture.prototype);
    let furniture1 = new CreateFurniture(param);
    return furniture1;
}

console.log(createObject("Table"));
console.log(createObject("Chair"));
// const cadira = new Furniture("Cadira"); AIXÒ DONA ERROR AL SER UNA CLASSE ABSTRACTA

module.exports = {Furniture, CreateFurniture, createObject}