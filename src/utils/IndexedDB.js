import { openDB, deleteDB, wrap, unwrap } from 'idb';

export function test(){
    async function doDatabaseStuff() {
        const db = await openDB();
    }
}