import mongoose from 'mongoose'
const Schema = mongoose.Schema


const UserSchema = new Schema ({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
        unique :false,
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
    
})

module.exports = mongoose.model('users',UserSchema)
