package src;

function createResponse(success, data, message) {
    return {
        success: success,
        data: data,
        message: message
    };
}