const knex = require('knex');

const config = require('../knexfile.js').development;
const db = knex(config);

const getDishes = () => db('dishes');
const getRecipes = () => db('recipes');
const addDish = dish => db('dishes').insert(dish);
const getDish = id => db('dishes').where({ id: Number(id) });
const addRecipe = recipe => db('recipes').insert(recipe);


module.exports = {
    getDishes,
    getRecipes,
    addDish,
    getDish,
    addRecipe
}