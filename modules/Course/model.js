const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MODEL_NAME = 'Course'
const _schema = {
  name: {
    type: String,
    required: true,
    unique: true
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    validate: {
      validator: function (id) {

        const User = require('../User/model')

        const query = {
          _id: id,
          type: 'teacher'
        }

        return User.find(query)
          .then((data) => {
            if (data.length == 0) {
              return false
            }
            return true
          })
          .catch((err) => {
            console.log("erro:"+ err);
            return false
          })
      },
      message: '{VALUE} is not a valid teacher!'
    },
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book',
    required: true
  }],
  students: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }]
}
const schema = new mongoose.Schema(_schema)
const Model = mongoose.model(MODEL_NAME, schema)

module.exports = Model
