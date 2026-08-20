const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const requestLogger = require('./middleware/requestLogger');

const authRoutes = require('./routes/authRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const menuRoutes = require('./routes/menuRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.use(requestLogger);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch((error) => {
        console.log('MongoDB connection error:', error);
    });

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to Restaurant Management API'
    });
});

app.use('/', authRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/', menuRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});