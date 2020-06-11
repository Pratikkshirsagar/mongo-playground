const updateOne = async (collection) => {
  try {
    const result = await collection.updateOne(
      { name: 'Amit Saha' },
      {
        $set: {
          hobbies: [
            { title: 'Sports', frequency: 3 },
            { title: 'Cooking', frequency: 2 },
            { title: 'Hiking', frequency: 1 },
          ],
        },
      }
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateMany = async (collection) => {
  try {
    const result = await collection.updateMany(
      { living: 'Airoli' },
      { $set: { summery: 'We love the area' } }
    );
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const incrementOperator = async (collection) => {
  try {
    const result = await collection.updateOne(
      { name: 'Pratik Kshirsagar' },
      { $inc: { age: 1 } }
    );
    console.log(result.message.documents);
  } catch (error) {
    console.log(error);
  }
};

const decrementOperator = async (collection) => {
  try {
    const result = await collection.updateOne(
      { name: 'Pratik Kshirsagar' },
      { $inc: { age: -4 } }
    );
    console.log(result.message.documents);
  } catch (error) {
    console.log(error);
  }
};

const unsetOperator = async (collection) => {
  try {
    const result = await collection.updateOne(
      { name: 'Nikita Kshirsagar' },
      { $unset: { summery: '' } }
    );
    console.log(result.message.documents);
  } catch (error) {
    console.log(error);
  }
};

const renameOperator = async (collection) => {
  try {
    const result = await collection.updateMany(
      {},
      { $rename: { summery: 'description' } }
    );
    console.log(result.message.documents);
  } catch (error) {
    console.log(error);
  }
};

const upsertdocument = async (collection) => {
  try {
    const result = await collection.updateOne(
      { name: 'Maria' },
      {
        $set: {
          age: 21,
          hobbies: ['cooking', 'reading'],
          education: 'Graduate',
        },
      },
      { upsert: true }
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateArrayDocument = async (collection) => {
  try {
    const result = await collection.updateMany(
      { hobbies: { $elemMatch: { title: 'Sports' } } },
      { $set: { 'hobbies.$.highfrequency': true } }
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const updateAllArrayDocument = async (collection) => {
  try {
    const result = await collection.updateMany(
      { name: 'Amit Saha' },
      { $inc: { 'hobbies.$[].frequency': 2 } }
    );

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updateOne,
  updateMany,
  incrementOperator,
  decrementOperator,
  unsetOperator,
  renameOperator,
  upsertdocument,
  updateArrayDocument,
  updateAllArrayDocument,
};
