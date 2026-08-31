const http = require("node:http");
const { saluer } = require("./salutation");

const port = process.env.PORT || 3000;

http
  .createServer((req, res) => res.end(saluer("Ada") + "\n"))
  .listen(port, () => console.log(`Écoute sur le port ${port}`));