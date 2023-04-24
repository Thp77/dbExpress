/** Import des modules */
require("dotenv").config();

const express = require("express");
const app = express();
let db = require("./config/db");
const logger = require("./config/log");


/** initialisation de l'api */

app.get("/", (req, res) => {
  res.send("Hello World!");
});

db.authenticate()
  .then(() => logger.info("Connexion à la BDD Ok "))
  .then(() => {
    app.listen(process.env.SERVER_PORT, () => {
      logger.info(`le seveur tourne sur le port d'Amsterdam ${process.env.SERVER_PORT}. ^^`);
    });
  })
  .catch((err) => console.log('Error DB', err));
