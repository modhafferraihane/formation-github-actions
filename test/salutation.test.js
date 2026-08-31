const test = require("node:test");
const assert = require("node:assert");
const { saluer, aujourdhui } = require("../src/salutation");

test("saluer ajoute le nom", () => {
  assert.strictEqual(saluer("Ada"), "Bonjours Ada");
});

test("saluer refuse un nom vide", () => {
  assert.throws(() => saluer(""));
});

test("aujourdhui renvoie une date ISO", () => {
  assert.match(aujourdhui(), /^\d{4}-\d{2}-\d{2}$/);
});