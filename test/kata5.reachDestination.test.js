const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(40, 10)).toEqual('I should be there in 4 hours')
  });

  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(42, 10)).toEqual('I should be there in 4 hours')
  });

  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(43, 10)).toEqual('I should be there in 4.5 hours')
  });

  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(45, 10)).toEqual('I should be there in 4.5 hours')
  });

  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(47, 10)).toEqual('I should be there in 4.5 hours')
  });


  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(48, 10)).toEqual('I should be there in 5 hours')
  });

  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(50, 10)).toEqual('I should be there in 5 hours')
  });

});
