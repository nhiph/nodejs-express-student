const { DataTypes } = require('sequelize')

const createStudentModal = (sequelize) => {
    return sequelize.define('Student', {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        numberClass: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
        },
        {
            timestamps: false // drop column createdAt and updatedAt in db
        }
    )
}

module.exports = {
    createStudentModal
}


