const express = require('express')
const messageRouter = require('./message/router')
const cors = require('cors')

const app = express()

const port = process.env.PORT || 4000
  
function onListen () {
  console.log(`listening on : ${port}`)
}
const corsMiddleware = cors()

const jsonMiddleware = express
  .json()

app.use(corsMiddleware);
app.use(jsonMiddleware);
app.use(messageRouter);



app.listen(port, onListen)