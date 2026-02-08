import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
}, { timestamps: true });

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
