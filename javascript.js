function openLoginPage(url) {
    window.open(url, '_blank'); // Open the URL in a new tab
}

// Event listeners for the buttons
document.getElementById('button1').addEventListener('click', function() {
    openLoginPage('buyer.html'); // Replace with your BUYER login page URL
});

document.getElementById('button2').addEventListener('click', function() {
    openLoginPage('OPTIONS.html'); // Replace with your SELLER login page URL
});