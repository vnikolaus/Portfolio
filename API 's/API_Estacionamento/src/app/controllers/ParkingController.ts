import z from 'zod';
import { Config } from "../..";
import { CheckinCar } from "../useCases/CheckinCar";
import { CheckoutCar } from "../useCases/CheckoutCar";

const regex_plate = /[a-z]{3}[0-9]{1}[a-z0-9]{1}[0-9]{2}/i

export class ParkingController {
    exec({ app, parkingCollection }: Config) {
        app.on('post', '/checkin', (input) => {
            const { plate } = input.body
            if (!plate) throw Error('Plate is required')
            const plateSchema = z.string().regex(regex_plate, { message: 'Invalid plate' })
            const zodPlate = plateSchema.parse(plate) 
            const checkinCar = new CheckinCar(parkingCollection)
            const output = checkinCar.execute(zodPlate)
            return {
                status: 201,
                output
            }
        })
        app.on('post', '/checkout', (input) => {
            const { plate } = input.body
            if (!plate) throw Error('Plate is required')
            const plateSchema = z.string().regex(regex_plate, { message: 'Invalid plate' })
            const zodPlate = plateSchema.parse(plate) 
            const checkoutCar = new CheckoutCar(parkingCollection)
            const output = checkoutCar.execute(zodPlate)
            return {
                status: 200,
                output
            }
        })
    }
}