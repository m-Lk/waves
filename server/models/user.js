const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SALT_I = 10;
require('dotenv').config();

const userSchema = mongoose.Schema({
    email: {
        type: String,
        require: true,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        require: true,
        minlength: 5
    },
    name: {
        type: String,
        require: true,
        maxlength: 100
    },
    lastname: {
        type: String,
        require: true,
        maxlength: 100
    },
    cart: {
        type: Array,
        default: []
    },
    history: {
        type: Array,
        default: []
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    }
}, {
    timestamps: true
});

// Hash the password
userSchema.pre('save', function(next) {
    // create the alias of this, here this will reference to userSchema not the function
    var user = this;

    bcrypt.genSalt(SALT_I, (err, salt) => {
        if(err) return next(err);

        if(user.isModified('password')) {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if(err) return next(err);
    
                user.password = hash;
                next();
    
            })
        }
        else {
            next();
        }
    })
})

userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        if(err) return cb(err);

        cb(null, isMatch)
    })
}

userSchema.methods.generateToken = function(cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(), process.env.SECRET)

    user.token = token;
    user.save((err, user) => {
        if(err) return cb(err);

        cb(null, user);
    })
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;

    //decode the token
    jwt.verify(token, process.env.SECRET, (err, decode) => {
        user.findOne({"_id":decode, "token": token}, (err, user) => {
            if(err) return cb(err);

            cb(null, user);
        })
    })
}

const User = mongoose.model('User', userSchema);

module.exports = { User }