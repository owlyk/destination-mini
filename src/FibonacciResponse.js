package src;

export function formatResponse(status, data) {
    if (status === 'success') {
        return {
            status: 'success',
            data: data
        };
    } else {
        return {
            status: 'error',
            message: data
        };
    }
}