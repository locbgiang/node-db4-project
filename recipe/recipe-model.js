const db = require(`../data/dbConnection`);

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes(){
    return db('recipes');
}

function getShoppingList(recipe_id){
    return db('recipe_ingredient')
    .join('ingredients', 'ingredients.id', '=', 'recipe_ingredient.ingredient')
    .where({recipe: recipe_id})
    .select('ingredients.name', 'recipe_ingredient.ammount');
}

function getInstructions(recipe_id){
    return db('instructions').where({recipe: recipe_id})
    .select('step');
}