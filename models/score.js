const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  hits: Number,
  misses: Number,
  hitRatio: Number

 
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;