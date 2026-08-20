const Restaurant = require('../models/Restaurant');

const getRestaurants = async (req, res) => {
    try {

        const restaurants = await Restaurant.find();

        res.status(200).json(restaurants);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch restaurants',
            error: error.message
        });

    }
};

const getRestaurantById = async (req, res) => {
    try {

        const restaurant = await Restaurant.findById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({
                message: 'Restaurant not found'
            });
        }

        res.status(200).json(restaurant);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch restaurant',
            error: error.message
        });

    }
};

const createRestaurant = async (req, res) => {
    try {

        const {
            name,
            city,
            address,
            cuisine,
            rating
        } = req.body;

        if (
            !name ||
            !city ||
            !address ||
            !cuisine ||
            rating === undefined
        ) {
            return res.status(400).json({
                message: 'All restaurant fields are required'
            });
        }

        const restaurant = await Restaurant.create({
            name,
            city,
            address,
            cuisine,
            rating
        });

        res.status(201).json({
            message: 'Restaurant created successfully',
            restaurant
        });

    } catch (error) {

        res.status(500).json({
            message: 'Failed to create restaurant',
            error: error.message
        });

    }
};

const updateRestaurant = async (req, res) => {
    try {

        const restaurant = await Restaurant.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!restaurant) {
            return res.status(404).json({
                message: 'Restaurant not found'
            });
        }

        res.status(200).json({
            message: 'Restaurant updated successfully',
            restaurant
        });

    } catch (error) {

        res.status(500).json({
            message: 'Failed to update restaurant',
            error: error.message
        });

    }
};

const deleteRestaurant = async (req, res) => {
    try {

        const restaurant = await Restaurant.findByIdAndDelete(
            req.params.id
        );

        if (!restaurant) {
            return res.status(404).json({
                message: 'Restaurant not found'
            });
        }

        res.status(200).json({
            message: 'Restaurant deleted successfully'
        });

    } catch (error) {

        res.status(500).json({
            message: 'Failed to delete restaurant',
            error: error.message
        });

    }
};

const getTopRestaurants = async (req, res) => {
    try {

        const restaurants = await Restaurant
            .find()
            .sort({ rating: -1 })
            .limit(5);

        res.status(200).json(restaurants);

    } catch (error) {

        res.status(500).json({
            message: 'Failed to fetch top restaurants',
            error: error.message
        });

    }
};

module.exports = {
    getRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    getTopRestaurants
};