const mongoose = require("mongoose");
const HighlightNoticeSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const HighlightNotice = mongoose.model(
  "HighlightNotice",
  HighlightNoticeSchema
);
module.exports = HighlightNotice;
