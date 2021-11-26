function cors(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "https://dusan-forum-frontend.herokuapp.com")
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    res.header("Access-Control-Expose-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');

    next()
}

module.exports = cors