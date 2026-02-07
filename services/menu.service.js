import MenuItem from "../models/menuitem.js";

export const createMenuItem = async (data, userId) => {
  return await MenuItem.create({ ...data, user: userId });
};

export const getMenuItems = async (userId) => {
  return await MenuItem.find({ user: userId });
};
