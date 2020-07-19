import mongoose from "mongoose";

let transactionSchema = mongoose.Schema({
  description: String,
  value: Number,
  category: String,
  year: Number,
  month: Number,
  day: Number,
  yearMonth: String,
  yearMonthDay: String,
  type: String,
});

const transactionModel = mongoose.model("transaction", transactionSchema);

export default transactionModel;
