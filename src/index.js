

import Plane from "../src/plane.js";
import Airport from "../src/airport.js";

// create a plane
console.log("Create a plane");
let plane = new Plane("Id1");
console.log(plane);
console.log("---------------------------------------------");

// create an airport
console.log("Create an airport");
let airport = new Airport("Heathrow Airport", 20);
console.log(`New airport created: ${airport.airportName}`);
console.log("---------------------------------------------");


// display maximum airport capacity
console.log("Display maximum airport capacity");
console.log(`The airport's maximum capacity is: ${airport.airportMaxCapacity}`);
console.log("---------------------------------------------");

// override maximum airport capacity
console.log("Override maximum airport capacity");
airport.airportMaxCapacity = 30
console.log(`The airport's maximum capacity has been changed to ${airport.airportMaxCapacity}`);
console.log("---------------------------------------------");

// display new maximum airport capacity
console.log("Display new maximum airport capacity");
console.log(`The airport's new maximum capacity is: ${airport.airportMaxCapacity}`);
console.log("---------------------------------------------");

// display number of planes currently at the airport
console.log("The airport is empty");
console.log(airport.planesAtAirport);
console.log("---------------------------------------------");
