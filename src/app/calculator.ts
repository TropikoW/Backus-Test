export class Calculator {
    multiply(a:number,b:number) {
        return a * b
    }
    divide(a:number,b:number) {
        if(b === 0){
            return false
        } else {
            return a / b
        }
    }
    substraction(a:number,b:number) {
        return a - b
    }
    add(a:number, b : number) {
        return a + b;
    }
}