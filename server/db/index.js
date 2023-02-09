const conn = require("./conn");
const User = require("./User");
const Product = require("./Product");
const Order = require("./Order");
const LineItem = require("./LineItem");

Order.belongsTo(User);
LineItem.belongsTo(Order);
Order.hasMany(LineItem);
LineItem.belongsTo(Product);

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [moe, lucy, larry, foo, bar, bazz, ethyl] = await Promise.all([
    User.create({
      username: "moe",
      password: "123",
      address: "324 East 72nd, NY",
      email: "moe@gmail.com",
      imageUrl:
        "https://imageio.forbes.com/specials-images/imageserve/5f64397931669e167fc57eaf/960x0.jpg?format=jpg&width=960",
    }),
    User.create({
      username: "lucy",
      password: "123",
      address: "312 East 80th, NY",
      email: "lucy@gmail.com",
      imageUrl:
        "https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2017-09/shutterstock_243101992.jpg?itok=nKwkA392",
    }),
    User.create({
      username: "larry",
      password: "123",
      address: "1586 Broadway, NY",
      email: "larry@gmail.com",
      imageUrl:
        "https://www.discoverwalks.com/blog/wp-content/uploads/2021/10/mohamed_salah_2018.jpg",
    }),
    Product.create({ name: "foo", review: "Great product" }),
    Product.create({ name: "bar", review: "Great product" }),
    Product.create({ name: "bazz", review: "Great product" }),
    User.create({ username: "ethyl", password: "123" }),
  ]);

  const cart = await ethyl.getCart();
  await ethyl.addToCart({ product: bazz, quantity: 3 });
  await ethyl.addToCart({ product: foo, quantity: 2 });

  // create submitted orders
  const [order1, order2] = await Promise.all([
    Order.create({ isCart: false, userId: ethyl.id }),
    Order.create({ isCart: false, userId: ethyl.id }),
  ]);

  const [line1, line2, line3] = await Promise.all([
    LineItem.create({ quantity: 1, productId: foo.id, orderId: order1.id }),
    LineItem.create({ quantity: 5, productId: bar.id, orderId: order1.id }),
    LineItem.create({ quantity: 3, productId: bazz.id, orderId: order2.id }),
  ]);

  return {
    users: {
      moe,
      lucy,
      larry,
    },
    products: {
      foo,
      bar,
      bazz,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
  Product,
};
