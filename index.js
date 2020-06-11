const {
  insertOnedocument,
  InsertManyDocument,
  findOnedocument,
  findAllDocument,
  updateOneDocument,
  updateManyDocument,
  deleteOneDocument,
  deleteManydocument,
} = require('./crud.operations');

const {
  equalTo,
  greaterThan,
  greaterThanEqualTo,
  inOperater,
  lessThan,
  lessThanEqualTo,
  notEqual,
  notInOperation,
  andOperator,
  notOperator,
  norOperator,
  orOperator,
  existOperator,
  typeOperator,
  regexOperator,
  sizeOperator,
  allOperator,
  elemMatchOperator,
} = require('./read.operations');

const {
  updateOne,
  updateMany,
  incrementOperator,
  decrementOperator,
  unsetOperator,
  renameOperator,
  upsertdocument,
  updateArrayDocument,
  updateAllArrayDocument,
} = require('./update.operations');

const MongoClient = require('mongodb').MongoClient;

// Conection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'testproject';

const connectToDatabase = async () => {
  try {
    const client = await MongoClient.connect(url, { useNewUrlParser: true });
    const db = client.db(dbName);
    const collection = db.collection('user');

    // invoking the function
    findOnedocument(collection);

    client.close();
  } catch (error) {
    console.log(error);
  }
};

connectToDatabase();
