/** @format */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    phone_number: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    balance: { type: String, default: "" },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model("User", userSchema);

module.exports = User;

// https://github.com/christiannwamba/vue-auth-vuex/tree/master/src
