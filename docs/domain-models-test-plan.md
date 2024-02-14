# Domain Models and Test Plan

# User Story 1

As an airport manager,

I want to have a representation of the airport’s maximum capacity

So that I know how many planes can be at the airport at any one time

# Domain Model

| Objects | Properties                 | Messages         | Outputs |
|---------|----------------------------|------------------|---------|
| Airport | airportMaxCapacity @Number | getMaxCapacity() | @Number |

# Test List

1. Test that airportMaxCapacity is equal to the returned number

----------------------------------------------------------------------------------------------

# User Story 2

As an airport manager,

I want to be able to override the airport’s maximum capacity

So that I can control the number of planes can be at the airport at any one time

# Domain Model

| Objects | Properties                 | Messages                            | Outputs     |
|---------|----------------------------|-------------------------------------|-------------|
| Airport | airportMaxCapacity @Number | changeAirportMaxCapacityTo(@Number) | @Void

# Test List

1. Test that airportMaxCapacity is overridden

‌--------------------------------------------------------------------------------------------------

# User Story 3

As an air traffic controller,

I want to be able to instruct a plane to land at an airport if the airport is not full and the plane is not already at the airport,

So that I can control the flow of planes at the airport


| Objects | Properties                     | Messages                    | Outputs  |
| ------- | -------------------------------| ----------------------------| ---------|
| Airport | planesAtAirport @Array[@Plane] | instructPlaneToLand(@Plane) | @Void    |
|         |                                | isAirportFull()             | @Boolean |
|         |                                | isPlaneAtAirport()          | @Boolean |
| Plane   | planeId @String                |                             |          |

# Test List

1. Test that instructPlaneToLand increases the length of planesAtAirport by 1
2. Test that the correct plane has been instructed to land
3. Test that planesAtAirport can handle multiple planes
4. Test that the correct planes are at the airport in cases of multiple planes landing
5. Test that instructPlaneToLand does not increase the length of planesAtAirport if isAirportFull is true
6. Test that instructPlaneToLand does not increase the length of planesAtAirport if isPlaneAtAirport is true
‌
‌--------------------------------------------------------------------------------------------------


# User Story 4

As an air traffic controller,

I want to be able to instruct a plane to take off from an airport as long as it is currently at the airport,

So that I control the flow of planes at the airport

# Domain Model


| Objects | Properties                     | Messages                       | Outputs  |
| ------- | -------------------------------| -------------------------------|----------|
| Airport | planesAtAirport @Array[@Plane] | instructPlaneToTakeOff(@Plane) | @Void    |
|         |                                | isPlaneAtAirport()             | @Boolean |
| Plane   | planeId @String                |                                |          |

# Test List

1. Test that instructPlaneToTakeOff decreases the length of planesAtAirport by 1
2. Test that instructPlaneToTakeOff instructs the correct plane to take off
3. Test that instructPlaneToTakeOff only increases the length of planesAtAirport if isPlaneAtAirport is true


