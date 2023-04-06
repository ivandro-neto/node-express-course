const logger = (req, res, next) => {
  const { method, url } = req;
  const time = new Date();

  console.log([method, url, time].join(" "));

  next();
};

module.exports = logger;
