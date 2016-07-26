
exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', function(table ){
    table.increments();
    table.integer('user_id').unsigned().references('user.id');
    table.text('title');
    table.text('content');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('post');
};
