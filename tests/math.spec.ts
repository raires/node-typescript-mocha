import {
  powerOf,
  divide,
  root,
  multiply,
  hypotensuse,
  substract,
  sum,
  cosine,
  sum2,
} from "../src/math";

// https://nodejs.org/api/assert.html
import assert from "assert";

describe("Initial tests", function () {
  it("2 + 2 should not be equal to 5 but 4", function () {
    assert.notEqual(sum(2, 2), 5);
    assert.equal(sum(2, 2), 4);
  });
  it("2 - 2 should return 0", function () {
    assert.strictEqual(substract(2, 2), 0);
  });
  it("2 * 2 should return 4", function () {
    assert.equal(multiply(2, 2), 4);
  });
  it("2 / 2 should return 1", function () {
    assert.equal(divide(2, 2), 1);
  });

  it("45 and 20 should return hypotenuse 49.24428900898052", () =>
    assert.equal(hypotensuse(45, 20), 49.24428900898052));
  it("7 to the power of 2 retun 49", () => 
    assert.equal(powerOf(7, 2), 49));
});

describe("Other tests", () => {
  it("6 cosine is always that number", function () {
    assert.equal(cosine(0), 1);
  });
  it("4 square  root is 2", function () {
    assert.equal(root(4), 2);
  });
  it("1 + 1 should return 2", function () {
    assert.equal(sum2(1, 1), 2);
  });
  it("'1' + '1' return 2", function () {
    assert.equal(sum2(1, 1), 2);
  });
});
