const terms_text = require("../models/termsModel");

const translation = async (req, res) => {
  //function to  fetch data from model
  try {
    const rows = await terms_text.translate_terms(); //fetch data from the model and store in rows variable
    const en = {}; //empty object to store english texts
    const se = {}; //empty object to store swedish texts

    rows.forEach((row) => {  //forEach loop to traverse in the rows array to retrieve data
      en[row.key] = row.en_text;
      se[row.key] = row.se_text;
    });
    
    res.json({ en, se });
    console.log(res);
  } catch (err) {
    res.status(500).json({ message: "Error fetching texts" });
  }
};

module.exports = { translation };
