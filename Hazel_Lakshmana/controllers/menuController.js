const MenuItem = require('../models/MenuItem');

const getMenu = async (req, res) => {
    try {

        const menu = await MenuItem.find({
            restaurantId: req.params.id
        });

        res.status(200).json(menu);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch menu',
            error: error.message
        });

    }
};

const addMenuItem = async (req, res) => {
    try {

        const {
            name,
            price,
            isAvailable
        } = req.body;

        if (!name || price === undefined) {
            return res.status(400).json({
                message: 'Name and price are required'
            });
        }

        const menuItem = await MenuItem.create({
            restaurantId: req.params.id,
            name,
            price,
            isAvailable
        });

        res.status(201).json({
            message: 'Menu item added successfully',
            menuItem
        });

    } catch (error) {

        res.status(500).json({
            message: 'Failed to add menu item',
            error: error.message
        });

    }
};

const updateMenuItem = async (req, res) => {
    try {

        const menuItem = await MenuItem.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!menuItem) {
            return res.status(404).json({
                message: 'Menu item not found'
            });
        }

        res.status(200).json({
            message: 'Menu item updated successfully',
            menuItem
        });

    } catch (error) {

        res.status(500).json({
            message: 'Failed to update menu item',
            error: error.message
        });

    }
};

const deleteMenuItem = async (req, res) => {
    try {

        const menuItem = await MenuItem.findByIdAndDelete(
            req.params.id
        );

        if (!menuItem) {
            return res.status(404).json({
                message: 'Menu item not found'
            });
        }

        res.status(200).json({
            message: 'Menu item deleted successfully'
        });

    } catch (error) {

        res.status(500).json({
            message: 'Menu item deleted successfully'
        });

    }
};

module.exports = {
    getMenu,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem
};
