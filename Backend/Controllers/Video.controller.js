import Video from "../Models/Video.model.js";

export const uploadVideo = async (req, res) => {
  try {
    const { title, description, videoLink, videoType, thumbnail } = req.body;
    const videoUpload = new Video({
      user: req.user._id,
      title,
      description,
      videoLink,
      videoType,
      thumbnail,
    });
    await videoUpload.save();
    res.status(201).json({
      success: "true",
      videoUpload,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getAllVideo = async (req, res) => {
  try {
    const videos = await Video.find().populate(
      "user",
      "channelName userName profilePic createdAt"
    );
    res.status(201).json({
      success: "true",
      videos: videos,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getVideoById = async (req, res) => {
  try {
    let { id } = req.params;
    const video = await Video.findById(id).populate(
      "user",
      "channelName userName profilePic createdAt"
    );
    res.status(201).json({
      success: "true",
      video: video,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getAllVideoByUserID = async (req, res) => {
  try {
    let { userId } = req.params;
    const video = await Video.find({ user: userId }).populate(
      "user",
      "channelName userName profilePic createdAt about"
    );
    res.status(201).json({
      success: "true",
      video: video,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const likeVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const video = await Video.findById(id);
    if (!video) return res.status(404).json({ error: "Video not found" });

    // If already liked → remove like (toggle off)
    if (video.likes.includes(userId)) {
      video.likes = video.likes.filter(
        (uid) => uid.toString() !== userId.toString()
      );
    } else {
      // Add like
      video.likes.push(userId);
      // Remove dislike if present
      video.dislikes = video.dislikes.filter(
        (uid) => uid.toString() !== userId.toString()
      );
    }

    await video.save();
    res.status(200).json({
      message: "Like status updated",
      likeCount: video.likes.length,
      dislikeCount: video.dislikes.length,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const dislikeVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const video = await Video.findById(id);
    if (!video) return res.status(404).json({ error: "Video not found" });

    // If already disliked → remove dislike (toggle off)
    if (video.dislikes.includes(userId)) {
      video.dislikes = video.dislikes.filter(
        (uid) => uid.toString() !== userId.toString()
      );
    } else {
      // Add dislike
      video.dislikes.push(userId);
      // Remove like if present
      video.likes = video.likes.filter(
        (uid) => uid.toString() !== userId.toString()
      );
    }

    console.log("Before save:", video.likes, video.dislikes);
    await video.save();
    console.log("After save:", video.likes, video.dislikes);
    res.status(200).json({
      message: "Dislike status updated",
      likeCount: video.likes.length,
      dislikeCount: video.dislikes.length,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
