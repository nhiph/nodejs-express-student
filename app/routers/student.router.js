const express = require('express')
const { getStudentList, getStudentDetail, postStudent, updateStudent, deleteStudent } = require('../controllers/student.controller')
const studentRouter = express.Router() //  use router by express

studentRouter.use(express.json()) // transform req & res to json for implementing easily

// method.(url, () => {} controller )

studentRouter.get('/', getStudentList)

studentRouter.get('/:id', getStudentDetail)

studentRouter.post('/', postStudent)

studentRouter.put('/:id', updateStudent)

studentRouter.delete('/:id', deleteStudent)

module.exports = studentRouter