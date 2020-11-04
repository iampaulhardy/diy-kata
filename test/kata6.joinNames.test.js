const { joinNames } = require("../src");

describe("joinNames", () => {
  const namesObj = [];
  
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(namesObj)).toEqual('No Names');
  });
});

describe("joinNames", () => {
  const namesObj = [ { name: 'Bart' } ];
  
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(namesObj)).toEqual('Bart');
  });
});

describe("joinNames", () => {
  const namesObj = [ { name: 'Bart' }, { name: 'Lisa'}, { name: 'Maggie'} ];
  
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(namesObj)).toEqual('Bart, Lisa & Maggie');
  });
});

describe("joinNames", () => {
  const namesObj = [ { name: 'Homer'}, { name: 'Bart' }, { name: 'Lisa'}, { name: 'Maggie'} ];
  
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(namesObj)).toEqual('Homer, Bart, Lisa & Maggie');
  });
});

describe("joinNames", () => {
  const namesObj = [ { name: 'Homer'}, { name: 'Marge' }, { name: 'Bart' }, { name: 'Lisa'}, { name: 'Maggie'} ];
  
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames(namesObj)).toEqual('Homer, Marge, Bart, Lisa & Maggie');
  });
});