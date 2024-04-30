import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

import authRoutes from "../routes/auth.js";
import postRoutes from "../routes/posts.js";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.get("/", (req, res) => {
  res.send("Hello Siam, Welcome to Express Server");
});

app.use(authRoutes);
app.use(postRoutes);

app.listen(PORT, () => {
  console.log("Server is Runing", PORT);
});
