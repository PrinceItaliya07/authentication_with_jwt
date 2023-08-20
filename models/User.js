import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({
  // _id: mongoose.Types.ObjectId,
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  tc: { type: Boolean, required: true }
})

// Model
const UserModel = mongoose.model("user", userSchema)

export default UserModel