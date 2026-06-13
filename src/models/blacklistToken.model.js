const mongoose = require('mongoose')

const blackListSchema = new mongoose.Schema({
    token:{
        type:String,
        required:true
    }
})

const blackListModel = mongoose.model('blacklistToken',blackListSchema)

module.exports = blackListModel