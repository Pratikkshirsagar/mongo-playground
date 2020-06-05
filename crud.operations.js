// Inser a single doument in to db
const insertOnedocument = async (collection) => {
  try {
    // document
    const doc = {
      name: 'Akash Gangawane',
      age: 25,
      hobbies: ['football'],
    };

    // method to insert a doc
    const result = await collection.insertOne(doc);

    // printing the output
    console.log(result.ops);
  } catch (error) {
    console.log(error);
  }
};

const InsertManyDocument = async (collection) => {
  try {
    // document
    const doc = [
      {
        name: 'Akash Gangawane',
        age: 22,
        hobbies: ['football'],
      },
      {
        name: 'Akshay Madrikar',
        age: 23,
        hobbies: ['video games', 'coding'],
      },
      {
        name: 'Ankita Sharma',
        age: 24,
        hobbies: ['painting', 'cooking'],
      },
    ];

    // method to insert many documents
    const result = await collection.insertMany(doc);

    // printing the output
    console.log(result.ops);
  } catch (error) {
    console.log(error);
  }
};

const findOnedocument = async (collection) => {
  try {
    const result = await collection.findOne({
      name: 'Akash Gangawane',
      age: 25,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const findAllDocument = async (collection) => {
  try {
    const result = await collection.find({}).toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateOneDocument = async (collection) => {
  try {
    const result = await collection.updateOne(
      { age: 25 },
      { $set: { name: 'Yash chauhan' } }
    );

    //log the result
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateManyDocument = async (collection) => {
  try {
    const result = await collection.updateMany(
      { hobbies: 'soccer' },
      { $set: { hobbies: ['soccer'] } }
    );

    // log the result
    console.log(result.result);
  } catch (error) {
    console.log(error);
  }
};

const deleteOneDocument = async (collection) => {
  try {
    const result = await collection.deleteOne({ age: 24 });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const deleteManydocument = async (collection) => {
  try {
    const result = await collection.deleteMany({ hobbies: 'soccer' });

    // log the result
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  insertOnedocument,
  InsertManyDocument,
  findOnedocument,
  findAllDocument,
  updateOneDocument,
  updateManyDocument,
  deleteOneDocument,
  deleteManydocument,
};
