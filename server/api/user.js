const express = require("express");
const app = express.Router();
const { User } = require("../db");

module.exports = app;

app.get("/", async (req, res, next) => {
  try {
    
  } catch (ex) {
    console.log("Error adding a new user");
    next(ex);
  }
});
