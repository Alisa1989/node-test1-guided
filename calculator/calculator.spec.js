const calculator = require("./calculator")

describe("calculator unit tests",()=>{
//no difference between test or it, just readability
    it("adds", ()=> {
        expect(calculator.sum(2, 2)).toBe(4)
        expect(calculator.sum(3, 2)).toBe(5)
        expect(calculator.sum(0, 2)).toBe(2)
        expect(calculator.sum(-1, 1)).toBe(0)
        expect(calculator.sum(1)).toBe(1)
        expect(calculator.sum(0)).toBe(0)
        //new feature
        expect(calculator.sum(2,2,2)).toBe(6)
        expect(calculator.sum(1,2,3,4,5,6,7,8,9)).toBe(45)
    })

    it("subtracts", () => {
        expect(calculator.difference(3,2)).toBe(1)
        expect(calculator.difference(2,2)).toBe(0)
        expect(calculator.difference(1,2)).toBe(-1)
        expect(calculator.difference(-1,-2)).toBe(1)
        expect(calculator.difference(1)).toBe(1)
        expect(calculator.difference()).toBe(0)
    })

    it("multiplies", () => {
        expect(calculator.product(3,2)).toBe(6)
        expect(calculator.product(3,-3)).toBe(-9)
        expect(calculator.product(3,0)).toBe(0)
        expect(calculator.product(10,20)).toBe(200)
        expect(calculator.product(5)).toBe(5)
        expect(calculator.product()).toBe(1)
    })

    it("divides", () => {
        expect(calculator.quotient(2,1)).toBe(2)
        expect(calculator.quotient(10,2)).toBe(5)
        expect(calculator.quotient(10,-2)).toBe(-5)
        expect(calculator.quotient(2)).toBe(2)
        expect(calculator.quotient()).toBe(0)
        expect(()=> calculator.quotient(2,0)).toThrow() //we don't want to trigger the error, 
        //we want to jest to control it so we call it with a callback
    })

    it("parses", () => {
        expect(calculator.parse({
            sum: [1,2,3],
            difference: [3,2,1],
            product: [1,2,3],
            quotient: [2,2,2]
            //we can no longer use '.toBe' sunce we're doing a deep equality check
            //with an object rather than a primitive value (number,string, etc.)
        })).toEqual({
            sum: 6,
            difference: 0,
            product: 6,
            quotient: 0.5,
        })
    })
})