const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const signInSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: { type: String, required: true },
  password: { type: String, required: true },
  loggedin: {type: Boolean, default: true}

 
});

const SignIn = mongoose.model("SignIn", signInSchema);

module.exports = SignIn;