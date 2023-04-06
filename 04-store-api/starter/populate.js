require("dotenv").config();

const jsonProduct = require("./products.json");
const Product = require("./models/product.model");
const connectDB = require("./db/connect.database");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    console.log("Connected...");
    await Product.deleteMany();
    await Product.create(jsonProduct).finally(console.log("Done!"));
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

start();
