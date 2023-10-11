const mongoose  = require('mongoose');
const mongoURI = "mongodb+srv://tushar:tushar12345@university.lsle9c0.mongodb.net/test?retryWrites=true&w=majority"
mongoose.set('strictQuery', false);
const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    } )
}

module.exports = connectToMongo;