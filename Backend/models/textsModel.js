const Client = require("../utils/db"); //import the db

//fetch all the data of text table from db
const getAllData = async () => {
  try {
    const query = "SELECT * FROM texts"; //query to fetch the data from db
    const result = await Client.query(query); //stores the result
    return result.row; //returns the value fetched
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { getAllData }; //export data fetched from db to controller
