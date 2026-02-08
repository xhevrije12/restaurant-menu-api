// models/profile.js
import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
  // shto fusha të tjera që të duhen
}, { timestamps: true });

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
