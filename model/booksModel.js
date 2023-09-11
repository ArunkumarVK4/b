const mongoose = require("mongoose");

const schema = mongoose.Schema;

const booksSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  author:{
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  available:{
    type: Boolean,
  },
  image:{
    type: String,
    required: true
  }
}, {
    timestamps: true
});


module.exports = mongoose.model("book", booksSchema)