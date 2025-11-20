const {Client} = require("@neondatabase/serverless")
require('dotenv').config();

const db_connect = new Client({ connectionString: process.env.DATABASE_URL });
db_connect.connect().then(()=>{
    console.log("Database Connected")
    }).catch((err)=>{
    console.log(`Database not connected: ${err.message}`);
});

module.exports = db_connect;
