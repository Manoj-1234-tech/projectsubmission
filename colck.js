// Get references to the clock hands
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

function updateClock() {
    // Get the current time
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Calculate the angles for each hand
    const secondAngle = seconds * 6; // 360 degrees / 60 seconds
    const minuteAngle = (minutes + seconds / 60) * 6; // 360 degrees / 60 minutes
    const hourAngle = (hours % 12 + minutes / 60 + seconds / 3600) * 30; // 360 degrees / 12 hours

    // Apply the rotations
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    hourHand.style.transform = `rotate(${hourAngle}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to set the correct time immediately on load
updateClock();
