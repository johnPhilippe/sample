const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let recipeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  steps: {
    type: String,
    required: true
  },
  directions: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
}, {
  collection: 'recipe'
})
module.exports = mongoose.model('recipe', recipeSchema)