
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('student').del(),

    // Inserts seed entries
    knex('student').insert({id: 1, first_name: 'Ray', last_name: 'Koren', age: 33}),
    knex('student').insert({id: 2, first_name: 'Marin', last_name: 'Johnson', age: 23}),
    knex('student').insert({id: 3, first_name: 'Russ', last_name: 'Fisher', age: 24})
  );
};
