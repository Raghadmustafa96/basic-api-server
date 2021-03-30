'use strict';
const express = require('express');
const validator = require('../middleware/validator.js');
const Clothes = require('../models/clothes.js');
const clothes = new Clothes();
const router = express.Router();

router.get('/', getClothes);
router.get('/:id', validator, getClothesById);
router.post('/', createClothes);
router.put('/:id', validator, updateClothes);
router.delete('/:id', validator, deleteClothes);

function getClothes(req, res) {
  const response = clothes.read();
  res.json(response);
}

function getClothesById(req, res) {
  const response = clothes.read(req.params.id);
  res.json(response);
}

function createClothes(req, res) {
  const clothesObject = req.body;
  const response = clothes.create(clothesObject);
  res.status(201).json(response);
}

function updateClothes(req, res) {
  const clothesObject = req.body;
  const response = clothes.update(req.params.id, clothesObject);
  res.json(response);
}

function deleteClothes(req, res) {
  const response = clothes.delete(req.params.id);
  res.json(response);
}

module.exports = router;