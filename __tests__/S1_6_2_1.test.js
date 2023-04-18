//Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers

const {double, sum} = require("../app/S1_4_2_1b");

jest.useFakeTimers(); // Configurar Jest para utilizar los fake timers

describe("Funció double", () => {
    test("Funció double", async () => {
        const promise = double(22);
        jest.advanceTimersByTime(1000);
        const result = await promise;
        expect(result).toBe(44);
    });
    test("Error, s'ha de passar un número", async () => {
        try {
            await double('a');
        } catch (error) {
            expect(error).toBe('La dada introduida a no és un número.');
        }
    });
});

describe("Funció sum", () => {
    test("Funció sum", async () => {
        jest.useRealTimers(); // No funciona amb jest.advanceTimersByTime
        const result = await sum(1, 2, 3);
        expect(result).toBe(12);
    });
    test("Error s'han de passar 3 números", async () => {
        jest.useRealTimers();   
        try {
            const result = await sum(1, "2", 3);
            expect(result).toBe(12);
        } catch (error) {
            expect(error).toBe("La dada introduida 2 no és un número.");
        }
    });
});

//Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode
//dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen S_1_2_2_2

const { Persona} = require("../app/S1_2_2_2b");

// Mock de la clase Persona
class PersonaMock {
    constructor(nom) {
        this.nom = nom;
    }
    dirNom() {
        console.log(`El meu nom és ${this.nom}.`);
    }
}

// Mock del método dirNom
const dirNomMock = jest.fn();

// Reemplazar la clase Persona y el método dirNom con los mocks
jest.mock("", () => {
    const {Persona: PersonaMock, dirNom: dirNomMock} = require("../app/S1_2_2_2b")
    return {Persona: PersonaMock, dirNom: dirNomMock};
});

describe("Classe Persona", () => {
    test("El constructor es crida amb el nom correcte", () => {
        const persones = new Persona("Jordi");
        expect(persones.nom).toBe("Jordi");
    });
    test("El constructor es crida amb un nom incorrecte", () => {
        const persones = new Persona("Juan");
        expect(persones.nom).not.toBe("Jordi");
    });
    it("Es crida al mètode dirNom", () => {
        const persones = new Persona('Jordi');
        const spy = jest.spyOn(persones, 'dirNom');
        persones.dirNom();
        expect(spy).toHaveBeenCalledTimes(1);
        spy.mockRestore();
      });
});

//Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.

const { Furniture, CreateFurniture, createObject} = require("../app/S1_2_3_1b");

describe('Furniture', () => {
    test("Error a l'intentar instanciar la clase abstracta", () => {
        expect(() => {
            new Furniture();
        }).toThrow("Error a l'instanciar");
    });
});
describe("CreateFurniture", () => {
    test("Error a l'instanciar Furniture directament", () => {
      expect(() => new Furniture()).toThrow("Error a l'instanciar");
    });
  
    test("Crea una instància de CreateFurniture amb el nom 'Table'", () => {
      expect(() => createObject("Table")).not.toThrow();
      const furniture = createObject("Table");
      expect(furniture.name).toBe("Table");
    });
  
    test("Crea una intstància de CreateFurniture amb el nom 'Chair'", () => {
      expect(() => createObject("Chair")).not.toThrow();
      const furniture = createObject("Chair");
      expect(furniture.name).toBe("Chair");
    });
  });
  
  