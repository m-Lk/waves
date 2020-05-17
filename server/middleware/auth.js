const { User } = require('./../models/user');


let auth = (req, res, next) => {
    //check the token is right
    let token = req.cookies.w_auth;

    User.findByToken(token, (err, user) => {
        if(err) throw err;

        if(!user) return res.json({
            isAuth: false,
            error: true
        });

        req.token = token;
        //attach user info
        req.user = user;
        next();

    })


}

module.exports = { auth }