const sort = require("../sort");
const expect = require("chai").expect;

describe("Sort function", () => {
  it("should sort the array in ascending order", () => {
    const arr1 = sort([3, 2, 4, 1]);
    const arr2 = [1, 2, 3, 4];

    expect(arr1).to.deep.equal(arr2);
  });
});
