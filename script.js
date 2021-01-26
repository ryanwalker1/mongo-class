const mongodb = require('mongodb');
const MongoClient= mongodb.MongoClient;
const connectionStr= 'mongodb://localhost:27017';
const client = new MongoClient(connectionStr);
client.connect(function(err) {const db= client.db('testdb');
const people = db.collection('people');

people.insertOne({ 'name': 'Pavel' }, (err, result) => {
    people.find({ name: 'Pavel' }).toArray((err, data) => {
    console.log(data);
    });
    });
    });