const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test ("When booleanToWord is passed 'True' it reurns 'Yes'", () => {
    expect(booleanToWord(true)).toBe('Yes')
  });

  test ("When booleanToWord is passed 'False' it returns 'No'", () => {
    expect(booleanToWord(false)).toBe('No')
  });
});
