import { Calculator } from "./calculator";

describe('Test for Calculator, this test is for some operations match',()=>{
    describe('operation for add',()=>{
        it('it must return 4',()=>{
            //AAA
            //Arrange
            const calculator = new Calculator;
    
            //AAA
            //Active
            const operations = calculator.add(2,2);
            const result = 4;
    
            //AAA
            //Assert
            expect(operations).toEqual(result);
        })
    })
    describe('operation for substract',()=>{
        it('it must return 0',()=>{
            //AAA
            //Arrange
            const calculator = new Calculator;
    
            //AAA
            //Active
            const operations = calculator.substraction(2,2);
            const result = 0;
    
            //AAA
            //Assert
            expect(operations).toEqual(result);
        })
    })
    describe('operation for multiply',()=>{
        it('it must return 9',()=>{
            //AAA
            //Arrange
            const calculator = new Calculator;
    
            //AAA
            //Active
            const operations = calculator.multiply(3,3);
            const result = 9;
    
            //AAA
            //Assert
            expect(operations).toEqual(result);
        })
    })
    describe('operations for divide',()=>{
        it('#it must return 5',()=>{
            //AAA
            //Arrange
            const calculator = new Calculator;
    
            //AAA
            //Active
            const operations = calculator.divide(10,2);
            const result = 5;
    
            //AAA
            //Assert
            expect(operations).toEqual(result);
        })
        it('it must return false',()=>{
            const calculator = new Calculator
            expect(calculator.divide(10,0)).toBeFalse();
        })
    })
    describe('its for know other expression math',()=>{
        it('its return a defined and a undefined',()=>{
            let colour = 'green';   //initialize a var for containt something
            let withoutColor; //initilaize another var for containing nothing
            
            expect(colour).toBeDefined();
            expect(withoutColor).toBeUndefined();
        })
        it('its return a truth and a false',()=>{
            expect(1 + 3 === 4).toBeTruthy();  //It calculate how much 1 + 3 and if result is 4,then it will not pass.
            expect(1  + 3 === 5).toBeFalsy(); // It calcualte and the result must be different from the truth
        })
        it('its return a less and a greater',()=>{
            expect(9).toBeLessThan(10); //The result must be less to 10
            expect(20).toBeGreaterThan(10); //The result must be greater to 10
        })
        it('this looking in a string, and a array',()=>{
            expect('123456').toMatch(/123/); // The result must looking if 123 be in the string
            expect(['Apples','oranges','pears']).toContain('pears'); //The result looking if pears be in the array
        })
    })
})

// con fdescribeejecuta únicamente el suite de test

// con xdescribe se omite el suite de test

// con fit ejecuta el focus sobre un test

// con xit se omite un test

// en la terminal puedes ejecutar para utilizar el comando (ng test --no-watch --code-coverage) para ejecutar el coverage

// para poder exigir que las pruebas tengan un minimo de aprobacion puedes ir a la hoja karma y en coverage reporter crea un objeto llamado check : {global : {statements : 'numero minimo que pidas',branches : 'numero minimo que pidas',functions : , lines : }}