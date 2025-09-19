// Get footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Static values from the HTML
const temperature = parseFloat(document.getElementById("temp").textContent); // °F
const windSpeed = parseFloat(document.getElementById("wind").textContent);   // mph

// Function to calculate wind chill (°F)
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    (0.6215 * tempF) -
    (35.75 * Math.pow(speedMph, 0.16)) +
    (0.4275 * tempF * Math.pow(speedMph, 0.16))
  );
}

// Check if conditions are valid before calculating
let windChillText = "N/A";
if (temperature <= 50 && windSpeed > 3) {
  const chill = calculateWindChill(temperature, windSpeed);
  windChillText = chill.toFixed(1) + " °F";
}

// Display result
document.getElementById("windchill").textContent = windChillText;

