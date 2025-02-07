import Admin from "../models/AdminSchema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // 1️⃣ Admin mavjudligini tekshiramiz
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ message: "Admin topilmadi" });
    }

    // 2️⃣ Parolni tekshiramiz
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Noto‘g‘ri parol" });
    }

    // 3️⃣ Muhim: `process.env.JWT_SECRET` borligini tekshirish
    if (!process.env.JWT_SECRET) {
      return res
        .status(500)
        .json({
          message: "Server sozlamalarida xatolik bor (JWT_SECRET yo‘q)",
        });
    }

    // 4️⃣ Token yaratamiz
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // 5️⃣ Javobni qaytaramiz (AdminSchema ga moslashtirildi)
    return res.status(200).json({
      token,
      user: {
        _id: admin._id,
        username: admin.username,
        usersecondname: admin.usersecondname,
        email: admin.email,
        image: admin.image, // Agar mavjud bo‘lsa
        createdAt: admin.createdAt,
      },
    });
  } catch (error) {
    console.error("Login xatosi:", error);
    return res.status(500).json({ message: "Serverda xatolik yuz berdi" });
  }
};

export { login };
