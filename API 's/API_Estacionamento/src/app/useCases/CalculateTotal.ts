enum ParkingRules {
    TOLERANCE = 0.3,
    FIRST_HOUR = 20,
    ADDITIONAL_HOURS = 7
}

export class CalculateTotal {
    execute(checkin: Date, checkout: Date) {
        const entrance = checkin.getTime(), exit = checkout.getTime()
        const permanence = Math.abs((entrance - exit) / (1000 * 60 * 60))
        const hours = Math.abs(parseInt(permanence))
        let total = null
        if (permanence <= ParkingRules.TOLERANCE) {
            total = 0
        } else if (hours === 0 && permanence > ParkingRules.TOLERANCE) {
            total = 10
        } else {
            let i = 0
            do {
                total += (i === 0) ? ParkingRules.FIRST_HOUR : ParkingRules.ADDITIONAL_HOURS
                i++
            } while (i < hours);
        }
        return total
    }
}