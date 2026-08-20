const requestLogger = (req, res, next) => {
    const time = new Date().toISOString();

    console.log(
        `${req.method} ${req.path} ${time}`
    );

    next();
};

module.exports = requestLogger;