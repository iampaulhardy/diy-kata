const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    test("returns first human year", () => {
        expect(humanCatDogYears(1)).toEqual([1, 15, 15])
    });

    test("returns second human year", () => {
        expect(humanCatDogYears(2)).toEqual([2, 24, 24])
    });

    test("returns a 3rd or more human year", () => {
        expect(humanCatDogYears(10)).toEqual([10, 56, 64])
    });
});
