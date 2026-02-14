import MenuItem from "../models/menuitem.js";

/**
 * @desc   
 * @route   POST /api/menu
 */
export const createMenuItem = async (req, res, next) => {
    try {
        const { title, price, category, description } = req.body;

        if (!title || !price) {
            res.status(400);
            throw new Error("Title and price are required");
        }

        const item = await MenuItem.create({
            user: req.user._id,
            title,
            price,
            category,
            description,
        });

        res.status(201).json(item);
    } catch (error) {
        next(error);
    }
};

/**
 * @desc   
 * @route   GET /api/menu
 */
export const getMyMenu = async (req, res, next) => {
    try {
        const items = await MenuItem.find({ user: req.user._id });
        res.status(200).json(items);
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    
 * @route   GET /api/menu/:id
 */
export const getMenuItemById = async (req, res, next) => {
    try {
        const item = await MenuItem.findById(req.params.id);

        if (!item) {
            res.status(404);
            throw new Error("Menu item not found");
        }

        if (item.user.toString() !== req.user._id.toString()) {
            res.status(403);
            throw new Error("Not authorized to view this item");
        }

        res.status(200).json(item);
    } catch (error) {
        next(error);
    }
};

/**
 * @desc    
 * @route   PUT /api/menu/:id
 */
export const updateMenuItem = async (req, res, next) => {
    try {
        const item = await MenuItem.findById(req.params.id);

        if (!item) {
            res.status(404);
            throw new Error("Menu item not found");
        }

        if (item.user.toString() !== req.user._id.toString()) {
            res.status(403);
            throw new Error("Not authorized to update this item");
        }

        item.title = req.body.title || item.title;
        item.price = req.body.price || item.price;
        item.category = req.body.category || item.category;
        item.description = req.body.description || item.description;

        const updatedItem = await item.save();
        res.status(200).json(updatedItem);
    } catch (error) {
        next(error);
    }
};

/**
 * @desc   
 * @route   DELETE /api/menu/:id
 */
export const deleteMenuItem = async (req, res, next) => {
    try {
        const item = await MenuItem.findById(req.params.id);

        if (!item) {
            res.status(404);
            throw new Error("Menu item not found");
        }

        if (item.user.toString() !== req.user._id.toString()) {
            res.status(403);
            throw new Error("Not authorized to delete this item");
        }

        await item.deleteOne();
        res.status(200).json({ message: "Menu item deleted successfully" });
    } catch (error) {
        next(error);
    }
};