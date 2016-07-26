
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('school').del(),

    // Inserts seed entries
    knex('school').insert({id: 1, school_name: 'galvanize', cohort: 25}),
    knex('school').insert({id: 2, school_name: 'turin', cohort: 26}),
    knex('school').insert({id: 3, school_name: 'code academy', cohort: 27})
  );
};
