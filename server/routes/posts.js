import express from "express";
import {
  addPost,
  deletePost,
  getPost,
  getPosts,
  updatePost,
} from "../controller/post.js";

const router = express.Router();

router.get("/post", getPosts);
router.get("/post/:id", getPost);
router.post("/post", addPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

export default router;
