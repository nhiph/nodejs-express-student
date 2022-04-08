const logGetList = ( req, res, next ) => {
    // this is middleware betwwen routers && controllers
    // run next() to run controller
    console.log('This is first middleware of get student list');
    next(); // sau do chay parma 3 getStudentList
}

const logGetDetail = ( req, res, next ) => {
// this is middleware betwwen routers && controllers
    // run next() to run controller
    console.log('This is first middleware of get student detail');
    next(); // sau do chay parma 3 getStudentList
}

module.exports = {
    logGetList,
    logGetDetail
}