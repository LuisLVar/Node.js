const MongoClient = require("mongodb").MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'confusion';

MongoClient.connect(url, (err, client) => {

    assert.strictEqual(err, null);

    console.log("Connected correctly to server");

    const db = client.db(dbname);
    const collection = db.collection('dishes');

    collection.insertOne(
        {
            "name": "Uthapizza",
            "description": "test"
        },
        (err, result) => {
            assert.strictEqual(err, null);
            console.log("After Insert: \n");
            console.log(result.ops);

            collection.find({}).toArray((err, docs) => {
                assert.strictEqual(err, null);
                console.log("Found: \n");
                console.log(docs);

                db.dropCollection('dishes', (errm, result) => {
                    assert.strictEqual(err, null);

                    client.close();
                });
            } );
        }
    )

});