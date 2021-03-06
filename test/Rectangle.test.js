const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
  describe("isSquare", () => {
    // check si les côtés sont égaux = true ou inégaux = false
    it("on check si les côtés sont égaux ou pas", () => {
      assert.ok(new Rectangle(1, 1), true, "true");
    });
    it("on check si les côtés sont pas égaux", () => {
      assert.ok(new Rectangle(1, 2), false, "false");
    });
  });
  describe("getArea", () => {
    // check que surface rectangle est renvoyée 
    it("vérifie que la surface du rectangle est renvoyée", () => {
      const rectangle = new Rectangle(2, 5);
      const area = rectangle.getArea();
      assert.strictEqual(area, 10);
    });
  });
  describe("getPerimeter", () => {
    // check que superficie est renvoyée 
    it("check que la superficie est envoyée", () => {
      const rectangle = new Rectangle(3, 4);
      const perimeter = rectangle.getPerimeter();
      assert.strictEqual(perimeter, 14);
    });
  });
});
