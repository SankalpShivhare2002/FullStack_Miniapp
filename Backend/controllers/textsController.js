const text = require("../models/textsModel");

const getData = async (req, res) => {
  //function to  fetch data from model
  try {
    const rows = await text.getAllData(); //fetch data from the model and store in rows variable
    const en = {}; //store english texts
    const se = {}; //store swedish texts

    rows.forEach((row) => {
      en[row.key] = row.en_text;
      se[row.key] = row.se_text;
    });

    res.json({ en, se });
  } catch (err) {
    res.status(500).json({ message: "Error fetching texts" });
  }
};

module.exports = { getData };
