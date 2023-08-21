import mongoose from "mongoose";
import { BlogType } from "../domain/schema";

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<BlogType>("Blog", BlogSchema);
