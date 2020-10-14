const dotenv = require("dotenv")
dotenv.config()
module.exports = {
  port: process.env.PORT,
  firebase: process.env.FIRBASE
}