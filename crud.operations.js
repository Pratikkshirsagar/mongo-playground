// Inser a single doument into db
const insertOnedocument = async (collection) => {
  try {
    // document
    const doc = {
        name: "Amit Saha",
        age: 23,
        hobbies: [
          { title: "football", frequency: 3 },
          { title: "cricket", frequency: 2 },
        ],
        education: "Graduate",
        pointer: 6.7,
        living: "Thane",
        summery: "I love to Read and write",
      },
      // method to insert a doc
      result = await collection.insertOne(doc);

    // printing the output
    console.log(result.ops);
  } catch (error) {
    console.log(error);
  }
};

// Inserting many document into db
const InsertManyDocument = async (collection) => {
  try {
    // document
    const doc = [
      {
        name: "Akash Gangawane",
        age: 23,
        hobbies: ["football"],
        education: "Graduate",
        pointer: 6.7,
        living: "Ghansoli",
      },
      {
        name: "Akshay Madrikar",
        age: 22,
        hobbies: ["video games", "coding"],
        education: "Post Graduate",
        pointer: 7.5,
        living: "Airoli",
      },
      {
        name: "Pratik Kshirsagar",
        age: 24,
        hobbies: ["football", "coding"],
        education: "Post Graduate",
        pointer: 8.0,
        living: "Vashi",
      },
      {
        name: "Nikita Kshirsagar",
        age: 21,
        hobbies: ["painting", "cooking"],
        education: "Graduate",
        pointer: 6.2,
        living: "Airoli",
      },
      {
        name: "Ravi Paul",
        age: 26,
        hobbies: ["Bike riding", "coding"],
        education: "Graduate",
        pointer: 7,
        living: "Nerul",
      },
      {
        name: "Ronit Pawar",
        age: 24,
        hobbies: ["Photoshop"],
        education: "Graduate",
        pointer: 6.8,
        living: "Palava",
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

// Finding one document from collection
const findOnedocument = async (collection) => {
  try {
    const result = await collection.findOne({
      name: "Akash Gangawane",
      age: 25,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Finding  all documents from collection
const findAllDocument = async (collection) => {
  try {
    const result = await collection.find({}).toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Update one document from  collection
const updateOneDocument = async (collection) => {
  try {
    const result = await collection.updateOne(
      { age: 25 },
      { $set: { name: "Yash chauhan" } },
    );

    //log the result
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// update many document from collection
const updateManyDocument = async (collection) => {
  try {
    const result = await collection.updateMany(
      { hobbies: "soccer" },
      { $set: { hobbies: ["soccer"] } },
    );

    // log the result
    console.log(result.result);
  } catch (error) {
    console.log(error);
  }
};

// delete oen document from collection
const deleteOneDocument = async (collection) => {
  try {
    const result = await collection.deleteOne({ age: 24 });

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// deleting many documents from collection
const deleteManydocument = async (collection) => {
  try {
    const result = await collection.deleteMany({ hobbies: "soccer" });

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
