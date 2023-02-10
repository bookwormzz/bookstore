const conn = require("./conn");
const { STRING, UUID, UUIDV4 } = conn.Sequelize;
const Review = require("./Review");

const Product = conn.define("product", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  author: {
    type: STRING,
    allowNull: false,
  },
  imageUrl: {
    type: STRING,
    defaultValue:
      "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg",
  },
  review: {
    type: STRING,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Product;
