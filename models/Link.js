const mongoose = require('mongoose')

const LinkSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now },
    description: String,
    url: String
}, {timestamps: true})

module.exports = mongoose.model("Link", LinkSchema);
