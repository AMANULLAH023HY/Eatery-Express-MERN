// const mongoose = require('mongoose');

// // connect the DB 

// const mongoURI = "mongodb+srv://amana170829:aman@@@123@cluster0.wzjyk5u.mongodb.net/?retryWrites=true&w=majority";

// const mongoDB = async () => {
//     await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
//         if (err)
         
//              console.log("---", err);
             
//         else {
//             console.log("connected");
//         }
//     });
// }

// module.exports = mongoDB;











const mongoose = require('mongoose');


// MongoDB connection string
const mongoURI = 'mongodb+srv://amana170829:aman@@@123@cluster0.wzjyk5u.mongodb.net/?retryWrites=true&w=majority';

async function connectToMongoDB() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// connectToMongoDB();
module.exports = connectToMongoDB;


