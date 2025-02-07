import Admin from "../models/AdminSchema.js";
import bcrypt from "bcryptjs";

const getAdmins = async (req, res) => {
  try {
    const admin = await Admin.find();
    return res.status(200).json(admin);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const createAdmin = async (req, res) => {
  try {
    const { password,username, usersecondname, email } = req.body; // passwordni ajratib olamiz
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = new Admin({
      username,
      usersecondname,
      email,
      password: hashedPassword, // Hashlangan parolni qo'shish
    });

    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.status(200).json(admin);
  } catch (error) {
    return res.status(400).json({ message: "Admin not found" });
  }
};

const updateAdminById = async (req, res) => {
  try {
    const admin = await Admin.findById(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    admin.name = req.body.name || admin.name;
    admin.email = req.body.email || admin.email;
    admin.password = req.body.password || admin.password;
    const updatedAdmin = await admin.save();
    res.status(200).json(updatedAdmin);
  } catch (error) {
    return res.status(400).json({ message: "Admin not found" });
  }
};


const deleteAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) return res.status(404).json({ message: "Admin not found" });
    res.status(204).json();
  } catch (error) {
    return res.status(400).json({ message: "Admin not found" });
  }
}

export { getAdmins, createAdmin, getAdminById, updateAdminById, deleteAdminById};
