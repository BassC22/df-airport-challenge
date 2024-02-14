

class Airport {
    airportName;
    airportMaxCapacity;
    planesAtAirport;
    isAirportFull;


    constructor(airportName, airportMaxCapacity) {
        this.airportName = airportName;
        this.airportMaxCapacity = airportMaxCapacity;
        this.planesAtAirport = []
        this.isAirportFull = false;

    }


    instructPlaneToLand = (plane) => {
        if (this.isAirportFull || plane.isPlaneAtAirport) {
            return;
    
        }
        this.planesAtAirport.push(plane);

}

    instructPlaneToTakeOff = plane => {
        let indexOfPlane = this.planesAtAirport.indexOf(plane);
        if(indexOfPlane !==-1) {
            this.planesAtAirport.splice(indexOfPlane, 1);
        }
    }

}

export default Airport;
