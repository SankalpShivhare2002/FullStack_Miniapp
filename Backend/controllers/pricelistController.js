const priceList = require("../models/pricelistModel"); //import price list model

const getPriceList = async (req, res) => {
  //function to retrieve data from model
  try {
    const list = await priceList.listData(); // awaiting response to fetch data
    res.json({ status: true, list });
  } catch (err) {
    res
      .status(500)
      .json({ status: false, message: "Error fetching price list" });
  }
};

module.exports = { getPriceList };