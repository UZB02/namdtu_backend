import mongoose from "mongoose";

const adminSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    usersecondname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;