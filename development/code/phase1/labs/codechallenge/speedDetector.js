//  Speed Detector
// This program checks a driver's speed against the speed limit
// - If the speed is less than or equal to 70 → return "Ok"
// - Otherwise, calculate demerit points: 1 point for every 5 km/s above 70
// - If points exceed 12 → return "License suspended"

function speedDetector(speed) {
  // Define the speed limit
  const speedLimit = 70;

  // Define the distance above the speed limit that equals 1 demerit point
  const kmPerDemerit = 5;

  // Case 1: If speed is within or below the limit
  if (speed <= speedLimit) {
    return "Ok"; // Driver is safe
  }

  // Case 2: Speed is above the limit
  else {
    // Calculate demerit points
    // Formula: (speed - limit) / 5 → floor() ensures whole number of points
    const points = Math.floor((speed - speedLimit) / kmPerDemerit);

    // If driver has more than 12 points → license suspended
    if (points > 12) {
      return "License suspended";
    }

    // Otherwise, return the total number of points
    else {
      return `Points: ${points}`;
    }
  }
}

// Example runs (testing the function with different speeds)
console.log(speedDetector(80)); // Expected output: Points: 2
console.log(speedDetector(135)); // Expected output: License suspended
console.log(speedDetector(70)); // Expected output: Ok
