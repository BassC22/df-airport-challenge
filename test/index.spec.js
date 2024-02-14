import Airport from "../src/airport.js";
import Plane from "../src/plane.js";

import { assertEquals } from "./test-framework.js";

// User story 1, test 1
// Test that airportMaxCapacity is returned

let testName = "User story 1, test 1: Test that airportMaxCapacity is returned";

// Arrange
let airport = new Airport("Heathrow Airport", 50)
let expectedOutput = 50
let actualOutput, testResult;

// Act
actualOutput = airport.airportMaxCapacity;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);

// User story 2, test 1
// Test that airportMaxCapacity can be overridden

testName = "User story 2, test 1: Test that airportMaxCapacity can be overridden";

// Arrange
airport = new Airport("JFK", 75);
expectedOutput = 75;
actualOutput, testResult;

// Act
actualOutput = airport.airportMaxCapacity;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);


// User story 3, test 1
// Test that instructPlaneToLand increases the length of planesAtAirport by 1

testName = "User story 3, test 1: Test that instructPlaneToLand increases the length of planesAtAirport by 1";

// Arrange
airport = new Airport();
let plane = new Plane("Id1");
expectedOutput = 1;
actualOutput, testResult;

// Act
airport.instructPlaneToLand(plane);
actualOutput = airport.planesAtAirport.length;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);

// User story 3, test 2
// Test that the correct plane has been instructed to land

testName = "User story 3, test 2: Test that the correct plane has been instructed to land";

// Arrange
airport = new Airport();
plane = new Plane("Id2");
expectedOutput = "Id2"
actualOutput, testResult;

// Act
airport.instructPlaneToLand(plane);
actualOutput = airport.planesAtAirport[0].id;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);

// User story 3, test 3
// Test that planesAtAirport can handle multiple planes

testName = "User story 3, test 3: Test that planesAtAirport can handle multiple planes";

// Arrange
airport = new Airport();
let plane1 = new Plane("Id1");
let plane2 = new Plane("Id2");
expectedOutput = 2;
actualOutput, testResult;

// Act
airport.instructPlaneToLand(plane1);
airport.instructPlaneToLand(plane2);
actualOutput = airport.planesAtAirport.length;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);

// User story 3, test 4
// Test that the correct planes are at the airport in cases of multiple planes landing

testName = "User story 3, test 4: Test that the correct planes are at the airport in cases of multiple planes landing";

// Arrange
airport = new Airport();
plane1 = new Plane("Id1");
plane2 = new Plane("Id2");
expectedOutput = ["Id1", "Id2"];
actualOutput, testResult;

// Act
airport.instructPlaneToLand(plane1);
airport.instructPlaneToLand(plane2);
actualOutput = airport.planesAtAirport.map(plane => plane.id);

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
// The test evaluates to false due to memory location differences, however the output is correct
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);



// User story 3, test 5
// Test that instructPlaneToLand does not increase the length of planesAtAirport if isAirportFull is true

testName = "User story 3, test 5: Test that instructPlaneToLand does not increase the length of planesAtAirport if isAirportFull is true";

// Arrange
airport = new Airport();
plane = new Plane("Id1");
expectedOutput = 0;
actualOutput, testResult;

let isAirportFull = true;


// Act
airport.isAirportFull = isAirportFull;
airport.instructPlaneToLand(plane);
actualOutput = airport.planesAtAirport.length;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);

// User story 3, test 6

// Test that instructPlaneToLand does not increase the length of planesAtAirport if isPlaneAtAirport is true

testName = "User story 3, test 6: Test that instructPlaneToLand does not increase the length of planesAtAirport if isPlaneAtAirport is true";

// Arrange
airport = new Airport();
plane = new Plane("Id1");
expectedOutput = 0
actualOutput, testResult;

let isPlaneAtAirport =  true;

// Act
plane.isPlaneAtAirport = isPlaneAtAirport;
airport.instructPlaneToLand(plane);
actualOutput = airport.planesAtAirport.length;


// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);

// User story 4, test 1
// Test that instructPlaneToTakeOff decreases the length of planesAtAirport by 1

testName = "User story 4, test 1: test that instructPlaneToTakeOff decreases the length of planesAtAirport by 1";

// Arrange
airport = new Airport();
plane = new Plane("Id1");
airport.instructPlaneToLand(plane); // lands plane first so planesAtAirport increases to 1 first
expectedOutput = 0;
actualOutput, testResult;

// Act
// checks 1 has been added to planesAtAirport length
console.log("Before instructPlaneToTakeOff: planesAtAirport =", airport.planesAtAirport.length);

airport.instructPlaneToTakeOff(plane);
actualOutput = airport.planesAtAirport.length;


// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);

// User story 4, test 2
// Test that instructPlaneToTakeOff instructs the correct plane to take off

testName = "User story 4, test 2: Test that instructPlaneToTakeOff instructs the correct plane to take off";

// Arrange 
airport = new Airport();
plane1 = new Plane("Id1");
plane2 = new Plane("Id2");
expectedOutput = "Id2";
actualOutput, testResult;

// Act
// instruct planes to land first so they are at the airport
airport.instructPlaneToLand(plane1);
airport.instructPlaneToLand(plane2);
// instruct plane1 to take off, leaving plane2 at the airport
airport.instructPlaneToTakeOff(plane1);
actualOutput = airport.planesAtAirport.map(plane => plane.id); // After taking off, check which planes are left at the airport

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
// The test evaluates to false due to memory location differences, however the output is correct
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);


// User story 4, test 3
// Test that instructPlaneToTakeOff only decreases the length of planesAtAirport if isPlaneAtAirport is true

testName = "User story 4, test 3: Test that instructPlaneToTakeOff only increases the length of planesAtAirport if isPlaneAtAirport is true";

// Arrange
airport = new Airport();
plane = new Plane("Id1");
expectedOutput = 0
actualOutput, testResult;

// Act
// first land plane so planesAtAirport increases to 1
airport.instructPlaneToLand(plane);
// check 1 has been added to planesAtAirport length
console.log("Before instructPlaneToTakeOff: planesAtAirport =", airport.planesAtAirport.length);

plane.isPlaneAtAirport = true;

airport.instructPlaneToTakeOff(plane);
actualOutput = airport.planesAtAirport.length;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput}; actual: ${actualOutput}`);





 

