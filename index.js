// Returns the number of blocks from Scuber's headquarters (at block 42)
// to the pickup location (passed as someValue).
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42);
  }
  
  // Returns the number of feet from Scuber's headquarters to the pickup location.
  // One block equals 264 feet. This function uses distanceFromHqInBlocks().
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  
  // Calculates the number of feet a passenger travels given a starting block and a destination block.
  // It converts the block difference into feet (1 block = 264 feet).
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // Calculates the fare price for a ride between a starting block and a destination block.
  // Fare rules:
  // - First 400 feet are free.
  // - Between 400 and 2000 feet: charge 2 cents per foot for the distance beyond the first 400 feet.
  // - Between 2000 and 2500 feet: flat fare of $25.
  // - Above 2500 feet: return "cannot travel that far".
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }
  
  module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
  };
  