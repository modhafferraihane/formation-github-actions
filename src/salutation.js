const dayjs = require("dayjs");

function saluer(nom) {
  if (!nom) throw new Error("nom requis");
  return `Bonjour ${nom}`;
}

function aujourdhui() {
  return dayjs().format("YYYY-MM-DD");
}

module.exports = { saluer, aujourdhui };