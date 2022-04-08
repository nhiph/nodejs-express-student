const express = require('express')
const { getStudentList, getStudentDetail, postStudent, updateStudent, deleteStudent } = require('../controllers/student.controller')
const { logGetList, logGetDetail } = require('../middlewares/logger/log-feature')
const studentRouter = express.Router() //  use router by express

studentRouter.use(express.json()) // transform req & res to json for implementing easily

// method.(url, (req, res, next) => {} middleware1, (req, res, next) => {} middleware2, .. , (req, res) => {} controller )

studentRouter.get('/', 
    logGetList, 
    getStudentList
)

studentRouter.get(
    '/:id', 
    logGetDetail, 
    ( req, res, next ) => {
        // this is middleware betwwen routers && controllers
        // run next() to run controller
        console.log('This is second middleware of get student detail');
        const { id } = req.params
        if(!id) return
        next(); // sau do chay parma 3 getStudentList
    }, 
    getStudentDetail
)

studentRouter.post('/', postStudent)

studentRouter.put('/:id', updateStudent)

studentRouter.delete('/:id', deleteStudent)

module.exports = studentRouter