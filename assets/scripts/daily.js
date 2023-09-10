
// Get the current day of the week (0 = Sunday, 1 = Monday, ...)
const currentDate = new Date();
const currentDay = currentDate.getDay(); // Returns a number (0-6)

// Define an array of day names corresponding to your HTML file names
const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// Relative path to the HTML files
const htmlFilePath = `assets/html/${dayNames[currentDay]}.html`;

// Load the content for the current day
fetch(htmlFilePath)
    .then(response => response.text())
    .then(data => {
        document.getElementById('dailyContent').innerHTML = data;
    });
