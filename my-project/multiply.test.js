multiply = require('./multiply')

describe('multiply', () => {
    it('multiplies 2 by 5', () => {
        expect(multiply(2,5)).toEqual(10);
    })

    it('rfails with a string', () => {
        expect(multiply(10,'a')).toEqual(NaN);
    })

    it('multiplies minus numbers', () => {
        expect(multiply(-1,10)).toEqual(-10);
    })

    it('multiplies two negative numbers', () => {
        expect(multiply(-2,-5)).toEqual(10);
    })
})