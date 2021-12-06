const mongoose = require('mongoose');
require('dotenv').config()
const dbURL = process.env.DB
mongoose.connect(dbURL, {useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=> console.log("connection successfull.."))
  .catch((e) => console.log("error while connecting", e))