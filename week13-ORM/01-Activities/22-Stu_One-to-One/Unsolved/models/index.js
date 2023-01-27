const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  // Answer: This "cascades" the delete to also delete within library card table matching reader reader_id. (has one and belongsTo matter).
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
// Answer: Exports updated Library card table
module.exports = { Reader, LibraryCard };
