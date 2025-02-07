import express from 'express';
import {
  getAdmins,
  createAdmin,
  getAdminById,
  updateAdminById,
  deleteAdminById
} from "../controllers/AdminController.js";

const app = express();

app.get('/', getAdmins);
app.post('/', createAdmin);
app.get("/:id", getAdminById);
app.put("/:id", updateAdminById);
app.delete("/:id", deleteAdminById);


export default app;