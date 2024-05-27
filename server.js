const express = require("express")
 
const server = express()
 
server.all("/", (req, res) => {
  res.send("PS-Bot is running!")
})
 
function keepAlive() {
  server.listen(3000, () => {
    console.log("PS-Bot is ready.")
  })
}
 
module.exports = keepAlive