import express from "express";
import { 
    createMenuItem, 
    getMyMenu, 
    getMenuItemById, 
    updateMenuItem, 
    deleteMenuItem 
} from "../controllers/menu.controller.js"; 
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

// @route   POST /api/menu
// @desc    
router.post("/", protect, createMenuItem); 

// @route   GET /api/menu
// @desc    
router.get("/", protect, getMyMenu); 

// @route   GET /api/menu/:id
// @desc    
router.get("/:id", protect, getMenuItemById); 

// @route   PUT /api/menu/:id
// @desc    
router.put("/:id", protect, updateMenuItem); 

// @route   DELETE /api/menu/:id
// @desc    
router.delete("/:id", protect, deleteMenuItem); 

export default router;