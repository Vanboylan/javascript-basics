const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
    it('returns two results for Ma, 10', () => {
        expect(searchCandies('Ma', 10)).toEqual(["Mars", "Maltesers"]);
    });

    it('returns one result for Ma, 2', () => {
        expect(searchCandies('Ma', 2)).toEqual(["Mars"]);
    });

    it('returns three results for S, 10', () => {
        expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
    });

    it('returns two results for S, 4', () => {
        expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
    });

    it('returns two results for ma, 10', () => {
        expect(searchCandies('ma', 10)).toEqual(["Mars", "Maltesers"]);
    });
    
});