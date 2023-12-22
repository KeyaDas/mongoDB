const mongoose = require("mongoose");   
const connect = mongoose.connect("mongodb://localhost:27017/books");

connect.then(() => {
    console.log("Database connected Successfully");
})
.catch(() => {
    console.log("Database can not be connected");
});

const dataschema = new mongoose.Schema({
    bookname: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
});

//collection 
const collections = new mongoose.model("data", dataschema);

module.exports = collections;