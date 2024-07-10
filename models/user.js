const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    id: { type: String, default: () => Date.now().toString() }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
