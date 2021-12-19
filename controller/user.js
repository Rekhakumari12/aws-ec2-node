const { validate, User } = require('../models/user')
const _ = require('lodash')

const getUser = async(req, res) => {
  res.send('hello')
}

const postUser = async(req, res) => {
  console.log(req.body)
  const { error } = validate(req.body)
  if(error) return res.status(400).send({ error: error.details[0].message})
  //if user alredy exist
  let user = await User.findOne({ email: req.body.email })
  if(user) return res.status(400).send({ error: "User already exist" })

  user = new User(_.pick(req.body, ['name', 'email']))
  await user.save()
  res.status(200).send({message:"registration successfull"})
}

module.exports.postUser = postUser
module.exports.getUser = getUser