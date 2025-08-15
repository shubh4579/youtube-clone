import express from "express";
import {
  addComment,
  deleteComment,
  editComment,
  getCommentByVideoId,
} from "../Controllers/Comment.controller.js";
import auth from "../Middleware/Authentication.middlware.js";
const router = express.Router();

router.post("/comment", auth, addComment);

router.get("/comment/:videoId", getCommentByVideoId);

router.put("/comment/:commentId", auth, editComment);

router.delete("/comment/:commentId", auth, deleteComment);

export default router;
