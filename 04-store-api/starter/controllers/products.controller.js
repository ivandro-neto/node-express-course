const Product = require("../models/product.model");
const Data = require("../objs/data.objs");

const searchFilter = (obj) => {
  const { featured, company, name } = obj;
  const queryObj = {};

  if (featured) queryObj.featured = featured === "true" ? true : false;
  if (company) queryObj.company = company;
  if (name) queryObj.name = { $regex: name, $options: "i" };

  return queryObj;
};
const sorter = (signal) => {
  if (signal) return signal.split(",").join(" ");
};

const getAllProductStatic = async (req, res) => {
  const products = await Product.find();

  res.status(200).json(Data(products));
};

const finder = (req) => {
  let result = Product.find(searchFilter(req.query));
  if (req.query.sort !== undefined)
    result = result.sort(sorter(req.query.sort));

  if (req.query.fields !== undefined)
    result = result.select(sorter(req.query.fields));
  
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    const skip = (page - 1) * limit
    
    result.skip(skip).limit(limit)

  return result;
};

const getAllProducts = async (req, res) => {
  console.log(req.query);
  const products = await finder(req);

  res.status(200).json(Data(products));
};

const addNewProducts = async (req, res) => {
  const product = await Product.create(req.body);

  res.status(200).json(Data(product));
};
const updateProducts = async (req, res) => {
  res.status(200).json(Data());
};
const deleteProducts = async (req, res) => {
  res.status(200).json(Data());
};

module.exports = {
  getAllProducts,
  getAllProductStatic,
  addNewProducts,
  updateProducts,
  deleteProducts,
};
