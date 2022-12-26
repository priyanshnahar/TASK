const mongoose = require("mongoose");

const MONGO_DB_URL = "mongodb+srv://user:654987@cluster0.w9v8fyk.mongodb.net/?retryWrites=true&w=majority"
const connectToDB = async () => {
   mongoose.connect(MONGO_DB_URL,(err) => {
    if (err) throw err;
    console.log("Connected to MongoDB Database");
   });
};

module.exports = connectToDB;