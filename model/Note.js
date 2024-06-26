const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  created_at: { type: String, required: true },
  modified_at: { type: String },
  userId: { type: String, required: true },
});

module.exports = mongoose.model("Note", noteSchema);
