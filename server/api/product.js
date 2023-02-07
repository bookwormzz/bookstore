const express = require('express');
const app = express.Router();
const { Product } = require('../db');
const Review = require('../db/Review');

module.exports = app;
// 'localhost:3000/api/products'

app.get('/', async(req, res, next)=> {
    try {
      const product = await Product.findAll({
        include: Review
      });
      res.send(product);
    }
    catch(ex){
      next(ex);
    }
  });

  app.get('/:id', async(req, res, next)=> {
    try {
      const product = await Product.findByPk(req.params.id, {
        include: Review
      });
      res.send(product);
    }
    catch(ex){
      next(ex);
    }
  });

app.post("/", async (req, res, next) => {
    try {
      console.log(req.body)
      res.status(201).send(await Product.create(req.body));
    } catch (e) {
      console.log(e);
    }
  });

app.delete("/:id", async (req, res, next) => {
    try {
      const prodToDestroy = await Product.findByPk(req.params.id);
      await prodToDestroy.destroy();
      res.send(prodToDestroy);
    } catch (error) {
      next(error);
    }
  });

app.put('/:id', async (req, res, next) => {
    try {
      const prodToUpdate = await Product.findByPk(req.params.id);
      res.send(await Product.update(req.body));
    } catch (error) {
      next(error);
    }
  });