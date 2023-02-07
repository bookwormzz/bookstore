const conn = require('./conn');
const { STRING, UUID, UUIDV4 } = conn.Sequelize;
const Review = require('./Review')

const Product = conn.define('product', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  review: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
});

module.exports = Product;


