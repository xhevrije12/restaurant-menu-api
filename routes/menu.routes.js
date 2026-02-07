import express from "express";
import { createMenu, getMenu, updateMenu, deleteMenu } from "../controllers/menu.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createMenu);       // CREATE
router.get("/", protect, getMenu);           // READ
router.put("/:id", protect, updateMenu);     // UPDATE
router.patch("/:id", protect, updateMenu);   // UPDATE me PATCH
router.delete("/:id", protect, deleteMenu);  // DELETE

export default router;
