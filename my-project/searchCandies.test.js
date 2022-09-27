const searchCandies= require('./searchCandies');

describe('searchCandies', () => {
    it('searches for Mars and returns result', () => {
        expect(searchCandies('Ma', 10)).toBe('')
    })
})