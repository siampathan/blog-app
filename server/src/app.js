import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "../routes/auth.js";
import postRoutes from "../routes/posts.js";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello Siam, Welcome to Express Server");
});

app.use(authRoutes);
app.use(postRoutes);

app.listen(PORT, () => {
  console.log("Server is Runing", PORT);
});
