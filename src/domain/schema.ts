import mongoose, { Document } from "mongoose";

export interface BlogType extends Document {
  title: string;
  content: string;
  author: mongoose.Schema.Types.ObjectId;
  tags: string[];
}

export interface UserType extends Document {
  hashed_password: string;
  email: string;
  date_of_birth: Date | null;
  phone: string;
  fullname: string;
  avatar: string;
  address: string;
  role: "admin" | "user";
}

export interface DataBlogType {
  title: string;
  content: string;
  tags: string[];
  author: string;
}

export interface DataUserType {
  _id?: string;
  hashed_password: string;
  email: string;
  date_of_birth: Date | null;
  phone: string;
  fullname: string;
  avatar: string;
  address: string;
  role: "admin" | "user";
}

export interface ResponseOutputSuccessType {
  data: any;
  status?: number;
}

export interface ResponseOutputFailedType extends ResponseOutputSuccessType {
  message: string;
}

export interface TokenType {
  access_token: string;
  token_type?: string;
  verify_token?: string | null;
}