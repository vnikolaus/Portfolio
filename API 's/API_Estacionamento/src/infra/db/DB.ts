import { KlauzDB } from 'klauz-db';
import { Collection } from 'klauz-db/lib/Collection';

export class DB {
    private kz: KlauzDB

    constructor() {
        this.kz = new KlauzDB({
            path: './_collections'
        })
    }

    createCollection(name: string): Collection {
        const collection = this.kz.createCollection(name) as Collection
        return collection
    }
}