const express = require("express");
const app = express.Router();
const { User } = require("../db");

app.post("/", async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.send(newUser);
  } catch (ex) {
    console.log("Error adding a new user");
    next(ex);
  }
});

app.put("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    console.log("USER FROM API", user);
    res.send(await user.update(req.body));
  } catch (error) {
    console.log("Error updating user from api");
    next(error);
  }
});

app.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    res.send(user);
  } catch (ex) {
    console.log("Error getting a users from api");
    next(ex);
  }
});

app.get("/updateprofile", async (req, res, next) => {
  try {
    console.log("AUTHARIZATION", req.headers.authorization);
    const user = await User.findByToken(req.headers.authorization);
    console.log("USER FROM API", user);
    res.send(user);
  } catch (ex) {
    console.log("Error getting a users from api");
    next(ex);
  }
});

app.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (ex) {
    console.log("Error getting all users from api");
    next(ex);
  }
});

module.exports = app;
