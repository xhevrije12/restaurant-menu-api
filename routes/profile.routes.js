import express from "express";
import Profile from "../models/profile.js";

const router = express.Router();

// CREATE profile
router.post("/", async (req, res, next) => {
  try {
    const newProfile = await Profile.create(req.body);
    res.status(201).json(newProfile);
  } catch (error) {
    next(error);
  }
});

// GET all profiles
router.get("/", async (req, res, next) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body); // 👈 shtoje këtë
  try {
    const newProfile = await Profile.create(req.body);
    res.status(201).json(newProfile);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body); // 👈 shtoje këtë
  try {
    const newProfile = await Profile.create(req.body);
    res.status(201).json(newProfile);
  } catch (error) {
    next(error);
  }
});


router.post("/", async (req, res, next) => {
  console.log(req.body); // 👈 shtoje këtë
  try {
    const newProfile = await Profile.create(req.body);
    res.status(201).json(newProfile);
  } catch (error) {
    next(error);
  }
});


export default router;
