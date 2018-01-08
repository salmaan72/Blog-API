var mongoose = require('mongoose');

var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var blogSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  _author: {
    type: Schema.ObjectId,
    ref: 'userModel'
  },
  content: {
    type: String,
    required: true
  }
});

var blogModel = mongoose.model('blogModel',blogSchema);

module.exports = blogModel;
