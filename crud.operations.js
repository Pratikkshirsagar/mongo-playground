// Inser a single doument in to db
const inserdocument = async (db) => {
  try {
    const doc = { name: 'test' };
    const result = await db.insertOne(doc);
    console.log(result.ops);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  inserdocument,
};
