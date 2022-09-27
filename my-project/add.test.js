add = require('./add')

describe('add', () => {
    it('adds 2 and 2', () => {
        expect(add(2, 2)).toEqual(4);
    })

    it('adds 10 to minus 10', () => {
        expect(add(10,-10)).toEqual(0);
    })

    it('adds a string and an integer', () => {
        expect(add('a',5)).toEqual('a5');
    })
})