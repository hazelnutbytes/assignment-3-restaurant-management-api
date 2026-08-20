const express = require('express');
const router = express.Router();

const authenticateToken = require('../middleware/authMiddleware');

const {
    getRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    getTopRestaurants
} = require('../controllers/restaurantController');

router.get('/', getRestaurants);

router.get('/top', getTopRestaurants);

router.get('/:id', getRestaurantById);

router.post('/', authenticateToken, createRestaurant);

router.put('/:id', authenticateToken, updateRestaurant);

router.delete('/:id', authenticateToken, deleteRestaurant);

module.exports = router;