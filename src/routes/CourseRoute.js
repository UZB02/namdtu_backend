import express from 'express';
import { getCourse, createCourse, updateCourse, getCourseByCourseId, deleteCourse } from '../controllers/CourseController.js';

const app = express();

app.get('/', getCourse);
app.post('/', createCourse);
app.put('/:id', updateCourse);
app.get('/:id', getCourseByCourseId);
app.delete('/:id', deleteCourse);

export default app