// Calling Dependencies
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20

    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20

    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,

    },
    username: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20

    },
    contactNumber: {
        type: String
    },
    hash_password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: 'user'
    },
    profilePicture: {
        type: String
    }
}, {
    timestamps: true
});

userSchema.virtual('password').set(function (password) {
    this.hash_password = bcrypt.hashSync(password, 12)
});

userSchema.virtual('fullName').get(function () {
    return `${this.firstName}${this.lastName}`
})

userSchema.methods = {
    authenticate: function (password) {
        return bcrypt.compareSync(password, this.hash_password)
    }
}

module.exports = mongoose.model('User', userSchema)