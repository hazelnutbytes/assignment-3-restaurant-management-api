const express = require('express');
const router = express.Router();

const authenticateToken = require('../middleware/authMiddleware');

const {
    getMenu,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem
} = require('../controllers/menuController');

router.get('/restaurants/:id/menu', getMenu);

router.post(
    '/restaurants/:id/menu',
    authenticateToken,
    addMenuItem
);

router.put(
    '/menu/:id',
    authenticateToken,
    updateMenuItem
);

router.delete(
    '/menu/:id',
    authenticateToken,
    deleteMenuItem
);

module.exports = router;
