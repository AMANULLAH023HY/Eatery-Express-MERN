


















const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://food_App:food123@cluster0.wzjyk5u.mongodb.net/gofood?retryWrites=true&w=majority";

const connectionToDB = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI || `mongodb://127.0.0.1:27017/Food_App`);

    if (connection) {
      console.log(`Connected to MongoDB: ${connection.host}`);

      // Access the collection directly
      const food_items = mongoose.connection.collection("food_items");

      // Fetch data using the find method
      const data = await food_items.find({}).toArray();

      // Access another collection
      const foodCategory = mongoose.connection.collection("foodCategory");

      // Fetch data from the second collection
      const catData = await foodCategory.find({}).toArray();


      // Store data in global variables
      global.food_items = data;
      global.foodCategory = catData;
    }
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectionToDB;





