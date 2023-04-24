/** Import des modules nucessaires */

const { Sequelize } = require("sequelize");

/** Connexion a la bdd  */

let db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false,
  }
);

/** Syncro des modèles  */

// sequelize.sync()

module.exports = db;
