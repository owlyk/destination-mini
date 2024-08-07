package src;

function displayErrorMessage(errorMessage) {
    console.log(errorMessage);
    window.location.href = 'usage.html?error=' + encodeURIComponent(errorMessage);
}