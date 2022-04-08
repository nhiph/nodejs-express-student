const checkEmpty = (req, res, next) => {
    const { fullName, age, numberClass } = req.body
    if(fullName && age && numberClass) next()
    else res.status(500).send('Fill in info')
}

const checkClassRange = (req, res, next) => {
    const { numberClass } = req.body
    if(+numberClass >= 1 && +numberClass <= 12) next()
    else res.status(500).send('numberClass must be from 1 to 12')
}

module.exports = {
    checkEmpty,
    checkClassRange
}