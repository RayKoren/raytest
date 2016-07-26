exports.up = function(knex, Promise) {
  return knex.schema.createTable("school", function (table) {
    table.increments();
    table.text("school_name");
    table.integer("cohort");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("school");
};
