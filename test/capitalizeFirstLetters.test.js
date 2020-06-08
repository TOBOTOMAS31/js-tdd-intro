const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
  it("is a function accepting one argument", () => {
    // on vérifie que capitaliszeFirstLetters est bien une fonction
    assert.strictEqual(typeof capitalizeFirstLetters, "function");
    // on vérifie que capitaliszeFirstLetters accepte un argument
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it("transforme correctement une chaîne de caractères", () => {
    // on vérifie que capitaliszeFirstLetters transforme bien une chaîne de caractères
    assert.strictEqual(
      capitalizeFirstLetters("i am learning TDD"),
      "I Am Learning TDD"
    );
  });

  it("fonctionne avec 1 caractère", () => {
    // on vérifie que capitaliszeFirstLetters fonctionne pour 1 caractère
    assert.strictEqual(capitalizeFirstLetters("z"), "Z");
  });

  it("fonctionne avec une chaîne de caractère vice", () => {
    // on vérifie que capitaliszeFirstLetters fonctionne pour une chaîne vide
    assert.strictEqual(capitalizeFirstLetters(""), "");
  });
});
