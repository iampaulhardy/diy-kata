const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
    const employees = [ {
      name: 'Satti',
      role: 'Developer'
    }, {
      name: 'Jenny',
      role: 'Sales Associate'
    }, {
      name: 'Javid',
      role: 'Human Recommended Reading Assistant'
    }, {
      name: 'Paul',
      role: 'Director'
    }]

  test("returns the employee's role in the company", () => {
    expect(getEmployerRole('', employees)).toEqual('No Name/Incorrect Name Entered');
  });

  xtest("returns the employee's role in the company", () => {
    expect(getEmployerRole('Fred', employees)).toEqual('No Name/Incorrect Name Entered');
  });

  test("returns the employee's role in the company", () => {
    expect(getEmployerRole('Javid', employees)).toEqual('Human Recommended Reading Assistant');
  });

  test("returns the employee's role in the company", () => {
    expect(getEmployerRole('Paul', employees)).toEqual('Director');
  });
});
