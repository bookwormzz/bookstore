const conn = require('./conn');
const { STRING, UUID, UUIDV4 } = conn.Sequelize;

const Review = conn.define('review', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  review: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

module.exports = Review;