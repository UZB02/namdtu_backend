import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
     },
     description:{
        type:String,
        required:true
     },
     price:{
        type:Number,
        required:true
     },
     teacher:{
        type:String,
        required:true
     },
     image:{
        type:String,
        required:false
     },
     createdAt:{
        type:Date,
        default:Date.now()
     },
     updatedAt:{
        type:Date
     }
});

const Course=mongoose.model('Course',courseSchema);

export default Course;