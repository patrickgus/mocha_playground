const divide = require("../index");
const expect = require("chai").expect;

describe("Divide function", () => {
  it("should divide positive integers correctly", () => {
    expect(divide(8, 4)).to.equal(2);
  });

  it("should throw an error when divide by zero", () => {
    expect(() => {
      divide(8, 0);
    }).to.throw();
  });

  it("should equal each other", () => {
    const a = { x: 5 };
    const b = { x: 5 };

    // expect(2).to.equal(2, '2 === 2');
    // expect(2).to.equal("2", '2 === "2"');
    // expect(2).to.equal(3, '2 === 3');
    // expect('hen').to.equal('Hen', "'hen' == 'Hen'");
    expect(a).to.deep.equal(b);
  });
});
