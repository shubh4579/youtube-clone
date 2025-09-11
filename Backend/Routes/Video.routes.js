import express from "express";
import {
  dislikeVideo,
  getAllVideo,
  getAllVideoByUserID,
  getVideoById,
  likeVideo,
  uploadVideo,
} from "../Controllers/Video.controller.js";
import auth from "../Middleware/Authentication.middlware.js";

const router = express.Router();

router.post("/video", auth, uploadVideo);

router.get("/allVideo", getAllVideo);

router.get("/getVideoById/:id", getVideoById);

router.get("/:userId/channel", getAllVideoByUserID);

router.post("/:id/like", auth, likeVideo);

router.post("/:id/dislike", auth, dislikeVideo);

export default router;
