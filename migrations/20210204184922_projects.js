
exports.up = function(knex) {
  return knex.schema.createTable("projects", function(table) {
    table.string("id").primary()
    table.string("title")
    table.timestamps()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects")
};
