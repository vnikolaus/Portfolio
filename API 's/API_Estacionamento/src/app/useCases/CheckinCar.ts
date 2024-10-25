import { randomUUID } from "crypto";
import { ParkingCollection } from "../collections/ParkingCollection";

export enum ParkedStatus {
    OPEN = 'open',
    CLOSED = 'closed'
}

export type ParkedCar = {
    id: string,
    plate: string,
    checkin: Date,
    checkout: Date,
    total: number,
    status: number
}

export class CheckinCar {
    constructor(private readonly parkingCollection: ParkingCollection) {}

    execute(plate: string) {
        const [plateAlreadyParked] = this.parkingCollection.find<ParkedCar>({
            where: obj => obj.plate === plate,
            hideInfo: ['_zid']
        })
        if (plateAlreadyParked) throw Error('Plate already parked')
        const parkedCar: ParkedCar = {
            id: randomUUID(),
            plate,
            checkin: new Date(),
            checkout: null,
            total: null,
            status: ParkedStatus.OPEN
        }
        this.parkingCollection.add(parkedCar)
        return parkedCar
    }
}