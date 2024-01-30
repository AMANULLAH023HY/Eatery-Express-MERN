
const mongoose = require('mongoose');

const  MONGO_URI = "mongodb+srv://amanaullah23:aman123@mern-estate.8ursw1g.mongodb.net/?retryWrites=true&w=majority";

mongoose.set('strictQuery', false);

const connectionToDB = async()=>{

    try { 
        const {connection}= await mongoose.connect(MONGO_URI || `mongodb://127.0.0.1:27017/Weather`
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


