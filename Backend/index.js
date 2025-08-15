import express from "express";
import mongoose from "mongoose";
import AuthRoutes from "./Routes/User.routes.js";
import VideoRoutes from "./Routes/Video.routes.js";
import CommentRoutes from "./Routes/Comment.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

var app = express();
var port = 3000;
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/auth", AuthRoutes);

app.use("/api", VideoRoutes);

app.use("/commentApi", CommentRoutes);

mongoose
  .connect(
    "mongodb+srv://mcxsinghshubham:Qnxk1ZohmRfs0yRY@cluster0.fn0rozr.mongodb.net/"
  )
  .then(() => console.log("MongoDB atlas connected"))
  .catch((err) => console.log("MongoDB connection is failed", err));

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
