const { Student } = require('../model/index')

const getListService = async () => {
    const studentList = await Student.findAll()
    if(studentList) return studentList
    return false
}

const getDetailService = async (id) => {
    const student = await Student.findOne({
        where: {
            id
        }
    })
    if(student) return student
    return false
}

const postStudentService = async (student) => {
    const newStudent = await Student.create(student)
    return newStudent
}

const updateStudentService = async (student) => {
    const { id: idRecieved } = student // boc tach id from  student.id & change name id => idRecieved
    const studentUpdate = await getDetailService(idRecieved)
    
    if(studentUpdate) {
        studentUpdate.fullName = student.fullName
        studentUpdate.age = student.age
        studentUpdate.numberClass = student.numberClass
        const studentUpdated = await studentUpdate.save()
        return studentUpdated
    }
    return false
}

const deleteStudentService = async (id) => {
    const studentDelete = await getDetailService(id)
    if(studentDelete) {
        await Student.destroy({
            where: {
                id
            }
        })
        return studentDelete
    }
    return false
    
}

module.exports = {
    getListService,
    getDetailService,
    postStudentService,
    updateStudentService,
    deleteStudentService
}