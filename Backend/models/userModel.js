const Client = require("../utils/db"); //import the db

const userModel = { findByEmail: async(email) => {
  try {
    const result = await Client.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]); //fetch data from the database by email
    return result.rows[0]; //return if undefined
  } catch (err) {
    console.log(err.message);
    
  }
}
};
module.exports = userModel; // export the module
