const express = require('express')
const studentRouter = require('./student.router')
const router = express.Router() // use router by express

router.use( "/students", studentRouter)

module.exports = router
