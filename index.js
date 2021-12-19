const express = require("express")
const user = require('./router/user')
const { urlencoded } = require("express")
const cors = require('cors')
//required connectiong
require('./db/conn')

//creating app
const app = express()

//Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
//linking to routers
app.use('/api',user)

const port = process.env.PORT||3030
app.listen(port, () => {
  console.log(`connected to ${port}`)
})