const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    maxcount: {
      type: Number,
      // required: true,
    },
    phonenumber: {
      type: Number,
      required: true,
    },
    place:{ type: String, required: true },
    rentperday: {
      type: Number,
      required: true,
    },
    imageurls: [],
    place:{ type: String, required: true },
    currentbookings: [],
    type: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel;