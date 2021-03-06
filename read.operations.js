// Query selectors

// $eq $gt $gte $in $lt $lte $ne $nin

const equalTo = async (collection) => {
  try {
    const result = await collection.find({ pointer: { $eq: 7.5 } }).toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const greaterThan = async (collection) => {
  try {
    const result = await collection.find({ pointer: { $gt: 7 } }).toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const greaterThanEqualTo = async (collection) => {
  try {
    const result = await collection.find({ pointer: { $gte: 7 } }).toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const inOperater = async (collection) => {
  try {
    const result = await collection.find({ pointer: { $in: [7, 8] } })
      .toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const lessThan = async (collection) => {
  try {
    const result = await collection.find({ pointer: { $lt: 7 } }).toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const lessThanEqualTo = async (collection) => {
  try {
    const result = await collection.find({ pointer: { $lte: 7 } }).toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const notEqual = async (collection) => {
  try {
    const result = await collection.find({ pointer: { $ne: 7 } }).toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const notInOperation = async (collection) => {
  try {
    const result = await collection.find({ pointer: { $nin: [7, 8, 7.5] } })
      .toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// LOGICAL OPERATORS

// $and $not $nor $or

const andOperator = async (collection) => {
  try {
    const result = await collection.find(
      { $and: [{ pointer: { $eq: 7.5 } }, { living: "Airoli" }] },
    ).toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const notOperator = async (collection) => {
  try {
    const result = await collection.find({ pointer: { $not: { $gt: 7 } } })
      .toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const norOperator = async (collection) => {
  try {
    const result = await collection.find(
      { $nor: [{ pointer: 7.5 }, { living: "Airoli" }] },
    )
      .toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const orOperator = async (collection) => {
  try {
    const result = await collection.find(
      { $or: [{ pointer: 7.5 }, { living: "Airoli" }] },
    )
      .toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// ELEMENT OPERATORS

// $exists $type

const existOperator = async (collection) => {
  try {
    const result = await collection.find(
      { hobbies: { $exists: true, $eq: null } },
    ).toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const typeOperator = async (collection) => {
  try {
    const result = await collection.find(
      { hobbies: { $type: "null" } },
    ).toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// EVALUATION

const regexOperator = async (collection) => {
  try {
    const result = await collection.find({ summery: { $regex: /write/ } })
      .toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// ARRAY

const sizeOperator = async (collection) => {
  try {
    const result = await collection.find({ hobbies: { $size: 1 } })
      .toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const allOperator = async (collection) => {
  try {
    const result = await collection.find(
      { hobbies: { $all: ["football", "coding"] } },
    )
      .toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const elemMatchOperator = async (collection) => {
  try {
    const result = await collection.find(
      { hobbies: { $elemMatch: { title: "football", frequency: 3 } } },
    )
      .toArray();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
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
};
