const mongoose = require("mongoose");

const userData = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    message: {
        type: String
    }
})

const User = mongoose.model("User", userData);
module.exports = User;
