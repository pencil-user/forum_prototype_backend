function cors(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://dusan-forum-frontend.herokuapp.com")
    //res.header("Access-Control-Allow-Origin", "http://localhost:3000/")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
}

module.exports = cors