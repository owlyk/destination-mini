package src;

function handleError(res, message) {
    res.status(400).json({ error: message });
}

module.exports = handleError;