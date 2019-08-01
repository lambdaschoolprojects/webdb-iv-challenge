
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function() {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'bricks of ramen noodles'},
        {id: 2, name: 'cups of water'},
        {id: 3, name: 'packets of seasoning'},
          {id: 4, name: 'cups of milk'},
          {id: 5, name: 'boxes of instant pudding'},
          {id: 6, name: 'slices of cucumber'},
          {id: 7, name: 'teaspoons of vinegar'}
      ]);
    });
};
