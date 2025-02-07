import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import CourseRoute from "./routes/CourseRoute.js"
import AdminRoute from "./routes/AdminRoute.js"
import AuthRoutes from "./routes/AuthRoute.js"

dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/courses',CourseRoute)
app.use("/api/admin", AdminRoute);
app.use("/api/login", AuthRoutes)









const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
