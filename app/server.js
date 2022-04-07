const express = require('express')
const app = express()
const router = require('./routers/root.router')
const port = 3000

app.use(router)  // use router by express

app.use(express.json()) // transform req & res to json for implementing easily

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})