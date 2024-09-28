const mongoose = require("mongoose"); // Add this line
const { regex, transactionSchema: constants } = require("../../constants");
const { model, Schema } = mongoose; // Update to use mongoose

// Define the transaction schema
const transactionSchema = new Schema(
  {
    type: {
      type: String,
      enum: Object.values(constants.TRANSACTION_TYPE),
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      match: regex.TIME_REGEX,
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "category",
    },
    sum: {
      type: Number,
      required: true,
      min: constants.TRANSACTION_SUM.MIN,
      max: constants.TRANSACTION_SUM.MAX,
    },
    comment: {
      type: String,
      required: true,
      minlength: constants.TRANSACTION_COMMENT_LENGTH.MIN,
      maxlength: constants.TRANSACTION_COMMENT_LENGTH.MAX,
    },
    owner: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Check if the model already exists to avoid overwriting
const Transaction = mongoose.models.Transaction || model("Transaction", transactionSchema);

module.exports = {
  Transaction,
};
