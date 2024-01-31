
const mongoose = require('mongoose');

const  MONGO_URI = "mongodb+srv://food_App:food123@cluster0.wzjyk5u.mongodb.net/gofood?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);

const connectionToDB = async()=>{

    try { 
        const {connection}= await mongoose.connect(MONGO_URI || `mongodb://127.0.0.1:27017/Food_App`
        );
    
        if(connection){
            console.log(`Connected to mongodb ${connection.host}`);

            const  fetch_data =await mongoose.connection.db.collection("listings");
            fetch_data.find({}).toArray(function(err,data){
              if(err) console.log(err);
              
              else console.log(data);
                


              
            })
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
        
    }
}

module.exports = connectionToDB;


