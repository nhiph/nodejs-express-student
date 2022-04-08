const { getListService, getDetailService, postStudentService, updateStudentService, deleteStudentService } = require('../services/student.service')

const getStudentList = async (req, res) => {
    const studentList = await getListService()
    if(studentList) res.status(200).send(studentList)
    else res.status(404).send('Not found')
}

const getStudentDetail = async (req, res) => {
    const { id } = req.params
    const studentDetail = await getDetailService(id)
    if(studentDetail) res.status(200).send(studentDetail)
    else res.status(404).send('Not found')
}

const postStudent = async (req, res) => {
    const student = {...req.body }
    const newStudent = await postStudentService(student)
   if(newStudent) res.status(201).send(newStudent)
   else res.status(404).send('post failed')
}

const updateStudent = async (req, res) => {
    const { id } = req.params
    const student = {...req.body, id}
    const newStudent = await updateStudentService(student)
    if(newStudent) res.status(200).send(newStudent)
    else res.status(404).send('update failed')
    
}

const deleteStudent = async (req, res) => {
    const { id } = req.params
    const status = await deleteStudentService(id)
    if(status) res.status(200).send(`Delete student ${id} success`)
    else res.status(404).send(`Delete student ${id} failed, it is not existed`)
}

module.exports = {
    getStudentList,
    getStudentDetail,
    postStudent,
    updateStudent,
    deleteStudent
}