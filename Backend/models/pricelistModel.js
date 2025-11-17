const { Client } = require("../utils/db");

const listData = async () => {
    try{
    const query = "SELECT * FROM pricelist";
    const result = await Client.query(query); //stores the result
    return result.row; //returns the value fetched
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { listData }; //export data fetched from db to controller