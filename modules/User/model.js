const mongoose = require( 'mongoose' )

const MODEL_NAME = 'User'
const _schema = {
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    enum: [
      'teacher', 
      'student'
    ] 
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}
const schema = new mongoose.Schema( _schema )
const Model = mongoose.model( MODEL_NAME, schema )

module.exports = Model
