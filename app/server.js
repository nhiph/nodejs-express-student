const express = require('express')
const app = express()
const router = require('./routers/root.router')
const port = 3000

app.use(express.json()) // transform req & res to json for implementing easily

app.use(router)  // use router by express

// note: import express move above, define below

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})