const Data = (prod) => {
  const data = {
    status: "success",
    data: prod,
    nbHits: prod.length,
  };

  return data;
};

module.exports = Data;
