import mongoose from 'mongoose';
import { BlogType } from '../domain/schema';

const UserSchema = new mongoose.Schema(
  {
    hashed_password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    date_of_birth: {
      type: String,
      default: false,
    },
    phone: {
      type: String,
      index: true,
    },
    fullname: {
      type: String,
      trim: true,
    },
    avatar: {
      type: String,
    },
    address: {
      type: String,
      trim: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<BlogType>("User", UserSchema);
