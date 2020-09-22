// foodmodel.js

var mongoose = require("mongoose");

var foodSchema = mongoose.Schema(
  {
    // กำหนด ชื่อและชนิดของ document เรา

    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    email: {
        type: String
      },
    phone: {
        type: String
      },
    username: {
        type: String
      },
    password: {
        type: String
      },
  },
  {
    // Create collection in MongoDB
    collection: "USERS"
  }
);

// collection default "users"
var Food = mongoose.model("users", foodSchema);
module.exports = Food;