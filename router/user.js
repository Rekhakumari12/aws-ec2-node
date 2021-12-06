const express = require('express')
const router = express.Router()
const  { getUser, postUser } = require('../controller/user')

router.get('/users', getUser)
router.post('/users', postUser)
router.get('/users/:id', getUser)

module.exports = router