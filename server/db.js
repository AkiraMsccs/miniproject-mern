const mongoose = require("mongoose");


var mongoURL = "mongodb+srv://The_Prem:Prem7736@cluster0.qdta5.mongodb.net/hotelbooking?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

connection.on("connected", () => {
  console.log("Mongo DB Connection Successful");
});

module.exports = mongoose;
