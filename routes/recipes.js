const express = require('express');

const db = require('../data/index');
const router = express.Router();

router.get('/',  async  (req, res) => {
    const recipes = await db.getRecipes();
    res.json(recipes);
});

module.exports = router;