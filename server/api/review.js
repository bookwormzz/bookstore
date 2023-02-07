const express = require('express');
const app = express.Router();
const { Product } = require('../db');
const Review = require('../db/Review');

module.exports = app;
// 'localhost:3000/api/reviews'

app.get('/', async(req, res, next)=> {
    try {
      const reviews = await Review.findAll();
      res.send(reviews);
    }
    catch(ex){
      next(ex);
    }
  });

app.post("/", async (req, res, next) => {
    try {
      console.log(req.body)
      res.status(201).send(await Review.create(req.body));
    } catch (e) {
      console.log(e);
    }
  });
