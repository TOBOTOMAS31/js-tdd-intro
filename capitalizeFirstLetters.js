// capitalizeFirstLetters.js
const assert = require('assert');
  

// on vérifie que capitaliszeFirstLetters est bien une fonction
assert.strictEqual(typeof capitalizeFirstLetters, 'function');
// on vérifie que capitaliszeFirstLetters accepte un argument
assert.strictEqual(capitalizeFirstLetters.length, 1);
// on vérifie que capitaliszeFirstLetters transforme bien une chaîne de caractères
assert.strictEqual(capitalizeFirstLetters('i am learning TDD'), 'I Am Learning TDD');
// on vérifie que capitaliszeFirstLetters fonctionne pour 1 caractère
assert.strictEqual(capitalizeFirstLetters('z'), 'Z');
// on vérifie que capitaliszeFirstLetters fonctionne pour une chaîne vide
assert.strictEqual(capitalizeFirstLetters(''), '');