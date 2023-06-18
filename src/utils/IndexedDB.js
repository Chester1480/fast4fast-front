import { openDB, deleteDB, wrap, unwrap } from 'idb';


export async function putData(storeName,tableName,key,data) {
    const dbPromise = openDB(storeName, 3, {
        upgrade(db) {
            db.createObjectStore(tableName);
        },
    });
    return (await dbPromise).put(tableName, data, key);
}

export async function getData(storeName,tableName,key) {
    const dbPromise = openDB(storeName, 3, {
        upgrade(db) {
            db.createObjectStore(tableName);
        },
    });
    return (await dbPromise).get(tableName, key);
}

export async function getAllkeys(storeName,tableName) {
    const dbPromise = openDB(storeName, 3, {
        upgrade(db) {
            db.createObjectStore(tableName);
        },
    });
    return (await dbPromise).getAllKeys(tableName);
}

export async function delKeyData(storeName,tableName,key) {
    const dbPromise = openDB(storeName, 3, {
        upgrade(db) {
            db.createObjectStore(tableName);
        },
    });
    return (await dbPromise).delete(tableName, key);
}

export async function clearData(storeName, tableName) {
    const dbPromise = openDB(storeName, 3, {
        upgrade(db) {
            db.createObjectStore(tableName);
        },
    });
    return (await dbPromise).clear(tableName);
}

export async function getStorageInfo(){
    navigator.storage.estimate().then((estimate) => {
        console.log('總配額', Math.round(estimate.quota * 0.000001) + ' MB')
        console.log('已使用', Math.round(estimate.usage * 0.000001) + ' MB');
    });
}