const text = require("../models/textsModel");

const getData = async (req, res) => {
  //function to  fetch data from model
  try {
    const rows = await text.getAllData(); //fetch data from the model and store in rows variable
    const en = {}; //store english texts
    const sen = {}; //store swedish texts

    rows.forEach((row) => {
      en[row.key] = row.en_text;
      sen[row.key] = row.se_text;
    });

    res.json({ en, sen });
  } catch (err) {
    res.status(500).json({ message: "Error fetching texts" });
  }
};

module.exports = { getData };
