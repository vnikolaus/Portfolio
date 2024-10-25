import { ParkingCollection } from "../collections/ParkingCollection";
import { CalculateTotal } from "./CalculateTotal";
import { ParkedCar, ParkedStatus } from "./CheckinCar";

export class CheckoutCar {
    constructor(private readonly parkingCollection: ParkingCollection) {}

    execute(plate: string) {
        const parkedCar = this.parkingCollection.find<ParkedCar>({
            where: obj => obj.plate === plate,
            hideInfo: ['_zid']
        })[0] as ParkedCar
        if (!parkedCar) throw Error('Plate is not parked')
        const checkin = new Date(parkedCar.checkin), checkout = new Date()
        const calculateTotal = new CalculateTotal()
        const total = calculateTotal.execute(checkin, checkout)
        if (total === null) throw Error('Error calculating the total')
        const output: ParkedCar = {
            ...parkedCar,
            checkout,
            total,
            status: ParkedStatus.CLOSED
        }
        this.parkingCollection.delete<ParkedCar>({
            where: (obj) => obj.plate === plate
        })
        return output
    }
}