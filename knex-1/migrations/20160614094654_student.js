
exports.up = function(knex, Promise) {
  return knex.schema.createTable("student", function (table) {
    table.increments();
    table.text("first_name");
    table.text("last_name");
    table.integer("age");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("student");
};
