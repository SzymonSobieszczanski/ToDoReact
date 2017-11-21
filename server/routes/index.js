const express = require('express');
const router = express.Router();
const socket = require('../socket');
const heroesService = require('../hero-service');

router.get('/heroes/:name', (req, res) => {
  
  heroesService.get(req, res);
});
router.get('/heroes', (req, res) => {
  
  heroesService.get(req, res);
});
router.put('/hero', (req, res) => {
  heroesService.create(req, res);
});

router.post('/hero', (req, res) => {
  heroesService.update(req, res);
});

router.post('/hero/:_id', (req, res) => {
  heroesService.completed(req, res);
});

router.delete('/hero/:_id', (req, res) => {
  heroesService.destroy(req, res);
});

router.get("/chat", (req, res) => {

  res.send({ response: "I am alive" }).status(200);
});

module.exports = router;
