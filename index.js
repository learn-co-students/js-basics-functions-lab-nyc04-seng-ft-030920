// Code your solution in this file!

function distanceFromHqInBlocks(number) {
    let blocks = 42 - number

    if (42 - number < 0) {
        return blocks * -1
    } else {
        return blocks
    }
}

function distanceFromHqInFeet(number) {
    let blocks = 42 - number

    if (42 - number < 0) {
        return blocks*-264
    } else {
        return blocks*264
    }
}

function distanceTravelledInFeet(start, destination) {
    let distanceTravelled = (destination - start) * 264
    
    if (destination - start < 0) {
        return distanceTravelled * -1
    } else {
        return distanceTravelled
    }
}

function calculatesFarePrice(start, destination) {
    // doesn't allow rides over 2500 ft
    // charges $25 for distances over 2000 ft
    // charges $0.02 per foot when total feet is between 400 – 2000
    // first 400 feet are free

    let distance = distanceTravelledInFeet(start, destination)
    
    if (destination - start < 0) {
        let distance = distance * -1
    }

    if (distance < 400) {
        return 0
    } else if (distance > 2000 && distance < 2500) {
        return 25
    } else if (distance > 400 && distance <= 2000) {
        let fare = 0.02 * (distance - 400)
        return fare
    } else {
        return 'cannot travel that far'
    }
}