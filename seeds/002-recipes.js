
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'ramen', dish_id: 1},
        {name: 'pudding', dish_id: 2},
        {name: 'cucumber salad', dish_id: 3}
      ]);
    });
};
