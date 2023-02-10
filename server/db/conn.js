const Sequelize = require("sequelize");
const config = {};

if (process.env.QUIET) {
  config.logging = false;
}

const conn = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5431/bookstore_db",
  config
);
module.exports = conn;
