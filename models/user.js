const mongoose = require('mongoose')
const joi = require('joi')

const userSchema = mongoose.Schema({
  name: { type: String, required:true },
  email: { type: String,  required:true }
}, { timestamps:true })

const User = mongoose.model('users', userSchema)

function validateUser(user){
  const schema = joi.object({
    name: joi.string().min(3).max(255).required(),
    email: joi.string().email().min(3).max(255).required(),
  })
  return schema.validate(user)
}

module.exports.User = User;
module.exports.validate = validateUser;