var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const drinkSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  image: {
    type: String,
    required: true,
    unique: true
  },
  history: {
    type: String
  },
  cocktailType: {
    type: String,
    required: true
  },
  ingredients: [{
    quantity: {
      type: String,
      required: true
    },
    type: {
      type: String,
      lowercase: true,
      trim: true
    },
    name: {
      type: String,
      required: true
    }
  }],
  garnish: String,
  glass: String,
  steps: [{
    type: String,
    required: true
  }],
  flavor: [{
    type: String
  }],
  baseSpirit: [{
    type: String,
    required: true
  }],
  served: [{
    type: String
  }],
  preperation: {
    type: String,
    required: true
  },
  strength: String
});

module.exports = mongoose.model('Cocktail', drinkSchema);
