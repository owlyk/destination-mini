package utils;

function handleError(res, statusCode, message) {
    res.status(statusCode).json({ error: message });
}

module.exports = handleError;