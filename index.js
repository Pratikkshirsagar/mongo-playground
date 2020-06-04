const { inserdocument } = require('./crud.operations');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Conection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'testproject';

const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const collection = db.collection('testCollection');

    inserdocument(collection);

    client.close();
  } catch (error) {
    console.log(error);
  }
};

connectToDatabase();
