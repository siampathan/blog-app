import express from "express";
import authRoutes from "../routes/auth.js";
//import userRoutes from "../routes/users.js";
import postRoutes from "../routes/posts.js";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Siam, Welcome to Express Server");
});

app.use(authRoutes);
//app.use(userRoutes);
app.use(postRoutes);

app.listen(PORT, () => {
  console.log("Server is Runing", PORT);
});
