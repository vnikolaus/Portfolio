import { ParkingCollection } from "./app/collections/ParkingCollection";
import { ParkingController } from "./app/controllers/ParkingController";
import { DB } from "./infra/db/DB";
import { ExpressAdapter } from "./infra/server/ExpressAdapter";

export type Config = {
    app: ExpressAdapter,
    parkingCollection: ParkingCollection
}

async function main() {
    const db = new DB()
    const app = new ExpressAdapter()
    app.connect()
    const config: Config = {
        app,
        parkingCollection: db.createCollection('parking')
    }
    const parkingController = new ParkingController()
    parkingController.exec(config)
}

main()