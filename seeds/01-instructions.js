
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipe: 1, step: '1. Mix water with flour'},
        {recipe: 1, step: '2. Add some egg'},
        {recipe: 1, step: "3. Add sugar"},
        {recipe: 2, step: "1. Mix water with flour"},
        {recipe: 2, step: "2. Add fruit"},
        {recipe: 2, step: "3. Bake"},
        {recipe: 3, step: "1. Mix flour with water"},
        {recipe: 3, step: "2. Bake"},
      ]);
    });
};
