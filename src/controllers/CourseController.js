import Course from "../models/CourseSchema.js";

const getCourse= async (req, res) => {
    try {
        const course = await Course.find();
        return res.status(200).json(course);        
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

const getCourseByCourseId = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({message: "Course not found"});
        return res.status(200).json(course);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
}

const createCourse= async (req, res) => {
    try {
        const course = await Course.create(req.body);
        return res.status(201).json(course);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

const updateCourse= async (req, res) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!course) return res.status(404).json({message: "Course not found"});
        return res.status(200).json(course);
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
}

const deleteCourse= async (req, res) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) return res.status(404).json({message: "Course not found"});
        return res.status(200).json({message: "Course deleted successfully"});
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
 }


export { getCourse, createCourse, updateCourse, getCourseByCourseId, deleteCourse};