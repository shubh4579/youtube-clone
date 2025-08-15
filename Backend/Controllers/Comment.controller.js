import Comment from "../Models/Comment.model.js";

export const addComment = async (req, res) => {
  try {
    let { video, message } = req.body;
    const comment = new Comment({
      user: req.user._id,
      video,
      message,
    });
    await comment.save();
    res.status(201).json({
      success: "true",
      comment,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getCommentByVideoId = async (req, res) => {
  try {
    const { videoId } = req.params;
    const comments = await Comment.find({ video: videoId }).populate(
      "user",
      "user channelName profilePic userName createdAt"
    );
    res.status(201).json({
      message: "Success",
      comments,
    });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Edit comment
export const editComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    const { message } = req.body;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // Check if logged-in user is the owner
    if (comment.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ error: "Unauthorized to edit this comment" });
    }

    comment.message = message || comment.message;
    await comment.save();

    res.status(200).json({ message: "Comment updated successfully", comment });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// Delete comment
export const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    // Check if logged-in user is the owner
    if (comment.user.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ error: "Unauthorized to delete this comment" });
    }

    await comment.deleteOne();

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};
