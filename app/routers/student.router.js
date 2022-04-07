const express = require('express')
const studentRouter = express.Router() //  use router by express

let studentList = [
    {
        "id": 1,
        "fullName": "Nguyen Van A",
        "age": 18,
        "numberClass": 12
    },
    {
        "id": 2,
        "fullName": "Nguyen Van B",
        "age": 16,
        "numberClass": 10
    },
    {
        "id": 3,
        "fullName": "Nguyen Van C",
        "age": 17,
        "numberClass": 11
    },
    {
        "id": 4,
        "fullName": "Nguyen Van D",
        "age": 15,
        "numberClass": 9
    }
]

// method.(url, () => {} controller )

studentRouter.get('/', (req, res) => {
    res.status(200).send(studentList)
})

studentRouter.get('/:id', (req, res) => {
    const { id } = req.params
    const index = studentList.findIndex(student => +(student.id) === +id)
    if(index !== -1) {
        res.status(200).send(studentList[index])
    } else {
        res.send('Not found!')
    }
})

studentRouter.post('/', (req, res) => {
    const student = {...req.body, id: Math.random()}
    console.log('student', student);
    studentList = [...studentList, student] // studentList.push(student)
    res.status(201).send(student)
})

studentRouter.put('/:id', (req, res) => {
    const { id } = req.params
    const student = {...req.body, id}
    const index = studentList.findIndex(student => +student.id === +id)
    if(index !== -1) {
        studentList[index] = student
        res.status(200).send('Update student')
    } else {
        res.status(400).send('fAILED NOT FOUND ID')
    }
})

studentRouter.delete('/:id', (req, res) => {
    const { id } = req.params
    studentList = studentList.filter(student => +student.id !== +id)
    res.status(200).send(`Delete student ${id} success`)
})

module.exports = studentRouter