const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const ResultSchema = mongoose.Schema(
  {
    id: {
      type: String,
      ref: "Student",
    },
    examfee: {
      type: Number,
      required: true,
    },
    sessionfee: {
      type: Number,
      required: true,
    },
    monthlyfee: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StudentResult = mongoose.model("StudentResult", ResultSchema);
module.exports = StudentResult;
