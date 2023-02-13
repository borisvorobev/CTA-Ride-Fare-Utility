//const findGaavoPieces = require('./src/findGaavoCoins');

const {findGaavoCoinsRec} = require('./index');

// Testing function
describe("findGaavoPieces", () => {
    test("returns the combination of pieces that adds up to the fare", () => {
        expect(findGaavoCoinsRec(7, [1, 4, 6])).toEqual([1, 6]);
    });
  
    test("returns 'You cannot make the fare' if no combination of pieces adds up to the fare", () => {
        expect(findGaavoCoinsRec(8, [1, 4, 6])).toEqual(null);
    });
});