// Code your solution in this file!
const ScuberHqBlock = 42
const blockSize = 264

function distanceFromHqInBlocks (currentBlock) {
    let distance;
    if (currentBlock > ScuberHqBlock) {
        distance = currentBlock - ScuberHqBlock
        return (distance)
    } else {
        distance = ScuberHqBlock - currentBlock
        return (distance)
    }
}

function distanceFromHqInFeet(currentBlock) {
    let distanceInFeet
    distanceInFeet = blockSize * distanceFromHqInBlocks(currentBlock)
    return distanceInFeet

}

function distanceTravelledInFeet (startBlock, endBlock) {
    let distance;
    if (startBlock > endBlock) {
        distance = startBlock - endBlock
        return (distance *= blockSize)
    } else {
        distance = endBlock - startBlock
        return (distance *= blockSize)
    }
}

function calculatesFarePrice (startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock)
    const freeDistance = 400
    let chargeDistance = distance - freeDistance
    let farRate = 25
    let chargeRate = 0.02
    let farStatement = "cannot travel that far"
    
    if (distance < 400) {
        return 0
    } else if (distance > 400 && distance < 2000) {
        return chargeDistance * chargeRate
    } else if (distance > 2000 && distance < 2500) {
        return farRate
    } else {
        return farStatement
    }
}