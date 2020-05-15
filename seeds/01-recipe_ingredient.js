
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredient').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredient').insert([
        {recipe:1, ingredient: 1, ammount: 2},
        {recipe:1, ingredient: 2, ammount: 1},
        {recipe:1, ingredient: 5, ammount: 2},
        {recipe:1, ingredient: 3, ammount: 3},
        {recipe:2, ingredient: 1, ammount: 1},
        {recipe:2, ingredient: 2, ammount: 1},
        {recipe:2, ingredient: 4, ammount: 4},
        {recipe:3, ingredient: 1, ammount: 5},
        {recipe:3, ingredient: 2, ammount: 3},
      ]);
    });
};
