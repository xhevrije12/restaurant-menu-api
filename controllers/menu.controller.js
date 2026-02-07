import Menu from "../models/menuitem.js";

// CREATE menu item
export const createMenu = async (req, res, next) => {
  try {
    const { name, price, description } = req.body;
    if (!name || !price) {
      return res.status(400).json({ success: false, message: "Name and price required" });
    }

    const menu = await Menu.create({
      name,
      price,
      description: description || "",
      user: req.user // lidhja me user
    });

    res.status(201).json(menu);
  } catch (err) {
    next(err);
  }
};

// READ all menu items for user
export const getMenu = async (req, res, next) => {
  try {
    const menu = await Menu.find({ user: req.user });
    res.status(200).json(menu);
  } catch (err) {
    next(err);
  }
};

// UPDATE menu item
export const updateMenu = async (req, res, next) => {
  try {
    console.log("REQ.USER:", req.user);
    console.log("PARAMS.ID:", req.params.id);

    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).json({ success: false, message: "Menu item not found" });
    }

    if (menu.user.toString() !== req.user) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    Object.assign(menu, req.body);
    await menu.save();

    res.status(200).json({ success: true, data: menu });
  } catch (err) {
    next(err);
  }
};

// DELETE menu item
export const deleteMenu = async (req, res, next) => {
  try {
    const menu = await Menu.findById(req.params.id);
    if (!menu) {
      return res.status(404).json({ success: false, message: "Menu item not found" });
    }

    if (menu.user.toString() !== req.user) {
      return res.status(403).json({ success: false, message: "Not authorized" });
    }

    await menu.remove();
    res.status(200).json({ success: true, message: "Menu item deleted successfully" });
  } catch (err) {
    next(err);
  }
};
