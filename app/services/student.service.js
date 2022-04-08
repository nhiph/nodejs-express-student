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

const getListService = () => {
    if(studentList) return studentList
    return false
}

const getDetailService = (id) => {
    const index = studentList.findIndex(student => +(student.id) === +id)
    if(index !== -1) return studentList[index]
    return false
}

const postStudentService = (student) => {
    studentList = [...studentList, student]
    if(studentList) return student
    return false
}

const updateStudentService = (student) => {
    const { id: idRecieved } = student // boc tach id from  student.id & change name id => idRecieved
    const index = studentList.findIndex(student => +student.id === +idRecieved)
    if(index !== -1) {
        studentList[index] = student
        return studentList[index]
    }
    return false
}

const deleteStudentService = (id) => {
    studentList = studentList.filter(student => +student.id !== +id)
    const index = studentList.findIndex(student => +student.id === id)
    if(index !== -1) return true
    return false
}

module.exports = {
    getListService,
    getDetailService,
    postStudentService,
    updateStudentService,
    deleteStudentService
}