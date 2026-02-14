import express from "express";
import Profile from "../models/profile.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

/**
 * CREATE profile (vetëm 1 herë)
 * POST /api/profile
 */
router.post("/", protect, async (req, res) => {
  const { name, email, age } = req.body;

  const profileExists = await Profile.findOne({ user: req.user._id });
  if (profileExists) {
    return res.status(400).json({ message: "Profile already exists" });
  }

  const profile = await Profile.create({
    user: req.user._id,
    name,
    email,
    age,
  });

  res.status(201).json(profile);
});

/**
 * GET my profile
 * GET /api/profile/me
 */
router.get("/me", protect, async (req, res) => {
  const profile = await Profile.findOne({ user: req.user._id });

  if (!profile) {
    return res.status(404).json({ message: "Profile not found" });
  }

  res.json(profile);
});

/**
 * UPDATE my profile
 * PUT /api/profile/me
 */
router.put("/me", protect, async (req, res) => {
  const { name, email, age } = req.body;

  const profile = await Profile.findOne({ user: req.user._id });

  if (!profile) {
    return res.status(404).json({ message: "Profile not found" });
  }

  profile.name = name || profile.name;
  profile.email = email || profile.email;
  profile.age = age || profile.age;

  const updatedProfile = await profile.save();
  res.json(updatedProfile);
});

export default router;
