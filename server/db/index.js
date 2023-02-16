const conn = require("./conn");
const User = require("./User");
const Product = require("./Product");
const Order = require("./Order");
const LineItem = require("./LineItem");
const Review = require("./Review");
const axios = require("axios");

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);
Review.belongsTo(Product);
Product.hasMany(Review);

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const response = await axios.get(
    "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=40"
  );
  const books = response.data.items;

  books.forEach((book) => {
    if (book.volumeInfo.authors) {
      Product.create({
        name: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        description: book.volumeInfo.description,
        publishedDate: book.volumeInfo.publishedDate,
        pageCount: book.volumeInfo.pageCount,
        imageUrl: book.volumeInfo.imageLinks.smallThumbnail,
      });
    }
  });

  const [moe, lucy, larry, mocking, gatsby, invisible, ethyl] =
    await Promise.all([
      User.create({
        username: "moe",
        password: "123",
        address: "324 East 72nd, NY",
        email: "moe@gmail.com",
        imageUrl:
          "https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/960x0.jpg?format=jpg&width=960",
        userType: "customer",
      }),
      User.create({
        username: "lucy",
        password: "123",
        address: "312 East 80th, NY",
        email: "lucy@gmail.com",
        imageUrl:
          "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=nKwkA392",
        userType: "customer",
      }),
      User.create({
        username: "larry",
        password: "123",
        address: "1586 Broadway, NY",
        email: "larry@gmail.com",
        imageUrl:
          "https://www.discoverwalks.com/blog/wp-content/uploads/2021/10/mohamed_salah_2018.jpg",
        userType: "customer",
      }),

      Product.create({
        name: "To Kill a Mockingbird",
        author: "Harper Lee",
        imageUrl:
          "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
        review: "Great product",
      }),
      Product.create({
        name: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        imageUrl:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_hr.jpg",
        review: "Great product",
      }),
      Product.create({
        name: "Invisible Man",
        author: "Ralph Ellison",
        imageUrl:
          "https://media1.popsugar-assets.com/files/thumbor/AjQtItaIFeoRw5ewJnI8m8YVs9I/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/02/06/226/n/47009714/tmp_qzqaia_a90f1014e4320940_the_invisible_man_book.jpg",
        review: "Great product",
      }),
      User.create({ username: "ethyl", password: "123", userType: "admin" }),
    ]);

  // create submitted orders
  const [order1, order2] = await Promise.all([
    Order.create({ isCart: false, userId: ethyl.id }),
    Order.create({ isCart: false, userId: ethyl.id }),
  ]);

  const [line1, line2, line3] = await Promise.all([
    LineItem.create({ quantity: 1, productId: mocking.id, orderId: order1.id }),
    LineItem.create({ quantity: 5, productId: gatsby.id, orderId: order1.id }),
    LineItem.create({
      quantity: 3,
      productId: invisible.id,
      orderId: order2.id,
    }),
  ]);

  const cart = await ethyl.getCart();
  await ethyl.addToCart({ product: invisible, quantity: 3 });
  await ethyl.addToCart({ product: gatsby, quantity: 2 });

  await Review.create({
    review: "looks great!",
    productId: mocking.dataValues.id,
  });
  await Review.create({
    review: "looks amazinnggggg!",
    productId: gatsby.dataValues.id,
  });
  await Review.create({
    review: "looks amaeessziiing!",
    productId: invisible.dataValues.id,
  });
  return {
    users: {
      moe,
      lucy,
      larry,
    },
    products: {
      mocking,
      gatsby,
      invisible,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
  Product,
};
