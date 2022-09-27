fizzBuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
    it('outputs fizz for multiples of 3', () => {
        expect(fizzBuzz(3)).toEqual('fizz');
    })

    it('outputs fizz for multiples of 3', () => {
        expect(fizzBuzz(9)).toEqual('fizz');
    })

    it('outputs fizz for multiples of 3', () => {
        expect(fizzBuzz(66)).toEqual('fizz');
    })

    it('outputs fizz for multiples of 3', () => {
        expect(fizzBuzz(333)).toEqual('fizz');
    })

    it('outputs fizz for multiples of 3', () => {
        expect(fizzBuzz(3003)).toEqual('fizz');
    })

    it('outputs buzz for multiples of 5', () => {
        expect(fizzBuzz(5)).toEqual('buzz');
    })

    it('outputs buzz for multiples of 5', () => {
        expect(fizzBuzz(10)).toEqual('buzz');
    })

    it('outputs buzz for multiples of 5', () => {
        expect(fizzBuzz(55)).toEqual('buzz');
    })

    it('outputs buzz for multiples of 5', () => {
        expect(fizzBuzz(550)).toEqual('buzz');
    })

    it('outputs buzz for multiples of 5', () => {
        expect(fizzBuzz(5005)).toEqual('buzz');
    })

    it('outputs fizzbuzz for multiples of 5 and 3', () => {
        expect(fizzBuzz(15)).toEqual('FizzBuzz');
    })

    it('outputs fizzbuzz for multiples of 5 and 3', () => {
        expect(fizzBuzz(30)).toEqual('FizzBuzz');
    })

    it('outputs fizzbuzz for multiples of 5 and 3', () => {
        expect(fizzBuzz(45)).toEqual('FizzBuzz');
    })

    it('outputs fizzbuzz for multiples of 5 and 3', () => {
        expect(fizzBuzz(600)).toEqual('FizzBuzz');
    })

    it('outputs fizzbuzz for multiples of 5 and 3', () => {
        expect(fizzBuzz(6450)).toEqual('FizzBuzz');
    })

    it('returns number if not divisible by 3 or 5', () => {
        expect(fizzBuzz(8)).toEqual(8);
    })

    it('returns number if not divisible by 3 or 5', () => {
        expect(fizzBuzz(31)).toEqual(31);
    })

    it('returns number if not divisible by 3 or 5', () => {
        expect(fizzBuzz(6007)).toEqual(6007);
    })

    it('returns number if not divisible by 3 or 5', () => {
        expect(fizzBuzz(2)).toEqual(2);
    })
})