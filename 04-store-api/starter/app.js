const express = require("express");
require('express-async-errors')
const connectDB = require("./db/connect.database");
require("dotenv").config();
const [url, router] = require("./routes/products.route");

const port = process.env.PORT || 3000;
const app = express();

//Middlewares
const errorHandler = require("./middlewares/error-handler.middleware");
const notFound = require("./middlewares/not-found.middleware");
const Logger = require("./middlewares/logger.middleware");

app.use(express.json());
app.use(Logger);

app.get("/", (req, res) => {
  res.sendFile(require("path").resolve(__dirname, "./public/index.html"));
});

app.use(url, router);

//Error middlewares
app.use(notFound);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(port, console.log(`Server is listening on por ${port}`));
  } catch (error) {
    console.error(error);
  }
};

start();
