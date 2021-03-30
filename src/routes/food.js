'use strict';
const express = require('express');
const validator = require('../middleware/validator.js');
const Food = require('../models/food.js');
const food = new Food();
const router = express.Router();

router.get('/', getFood);
router.get('/:id', validator, getFoodById);
router.post('/', createFood);
router.put('/:id', validator, updateFood);
router.delete('/:id', validator, deleteFood);

function getFood(req, res) {
  const response = food.read();
  res.json(response);
}

function getFoodById(req, res) {
  const response = food.read(req.params.id);
  res.json(response);
}

function createFood(req, res) {
  const foodObject = req.body;
  const response = food.create(foodObject);
  res.status(201).json(response);
}

function updateFood(req, res) {
  const foodObject = req.body;
  const response = food.update(req.params.id, foodObject);
  res.json(response);
}

function deleteFood(req, res) {
  const response = food.delete(req.params.id);
  res.json(response);
}

module.exports = router;