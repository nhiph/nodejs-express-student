const { Sequelize } = require('sequelize') // import class Sequelize and create new instance of class
const { HOST, USER, PASSWORD, DB, DIALECT } = require('../configs/db.config')
const { createStudentModal } = require('./student.model')

const sequelize = new Sequelize(DB, USER, PASSWORD, {
    host: HOST,
    dialect: DIALECT
})

const Student = createStudentModal(sequelize)
// export Student for service proceed data and return to controller

module.exports = {
    sequelize,
    Student
}