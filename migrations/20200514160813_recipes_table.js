
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', recipes=>{
        recipes.increments();
        recipes.string('name', 255).notNullable();
    })

    .createTable('instructions', instructions=>{
        instructions.increments();
        instructions.integer('recipe').unsigned().notNullable().references('recipes.id').onUpdate('CASCADE').onDelete('RESTRICT');
        instructions.string('step', 255).notNullable();
    })

    .createTable('ingredients', ingredients=>{
        ingredients.increments();
        ingredients.string('name', 255).notNullable();
    })

    .createTable('recipe_ingredient', recipeIngredient=>{
        recipeIngredient.increments();

        recipeIngredient.integer('recipe').unsigned().notNullable().references('recipes.id').onUpdate('CASCADE').onDelete('RESTRICT');
        recipeIngredient.integer('ingredient').unsigned().notNullable().references('ingredients.id').onUpdate('CASCADE').onDelete('RESTRICT');
        recipeIngredient.float('ammount').notNullable();
    })
};

exports.down = function(knex) {
  
};
