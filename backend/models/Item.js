const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create items Schema & model
const Item = new Schema({
  name: {
    type: String,
    required: [true, 'Name of the item is required']
  },
  expiration: {
    type: String,
    required: [true, 'Expiration date is required']
  },
  quantity: Number,
  freezer: {
    type: Boolean,
    default: false
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }
})
module.exports = mongoose.model('Item', Item)
