
exports.up = async function(knex) {
    // dishes table
  await knex.schema.createTable('dishes', tbl => {
      tbl.increments('id');
      tbl.string('name').unique().notNullable();
  });

  // recipes table
    await knex.schema.createTable('recipes', tbl => {
       tbl.increments('id');
       tbl.string('name').unique().notNullable();
       tbl.integer('dish_id')
           .references('id')
           .inTable('dishes')
           .onDelete('CASCADE')
           .unique()
           .notNullable();
    });

    // ingredients table
    await knex.schema.createTable('ingredients', tbl => {
        tbl.increments('id');
        tbl.string('name').unique().notNullable();
    });

    // recipe_ingredients table
    await knex.schema.createTable('recipe_ingredients', tbl => {
        tbl.increments('id');
        tbl.integer('recipe_id')
            .references('id')
            .inTable('recipes')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.integer('ingredient_id')
            .references('id')
            .inTable('ingredients')
            .notNullable()
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl.float('quantity').notNullable();
    })
};

exports.down = function(knex, Promise) {
  
};
