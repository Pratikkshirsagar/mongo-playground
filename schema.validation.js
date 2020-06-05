db.createCollecion('user', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'age', 'hobbies'],
      properties: {
        name: {
          bsonType: 'string',
          description: 'must be a string  and is required',
        },
        age: {
          bsonType: 'number',
          description: 'must be a number and is required',
        },
        hobbies: {
          bsonType: 'array',
          description: 'must be a array and is required',
        },
      },
    },
  },
});
