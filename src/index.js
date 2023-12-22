const express = require('express');
const pasth = require("path");
const bcrypt = require("bcrypt");
const collections = require("./config")

const app = express();
//convert data into json 
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("view engine", 'ejs');
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("signup");
})

app.post("/signup", async (req, res) => {
    const alldata = {
        bookname: req.body.bookname,
        author: req.body.author,
        genre: req.body.genre,
        rating: req.body.rating
    }

    try {
        const bookdata = await collections.insertMany(alldata);
        console.log(bookdata);
        res.status(201).json({ message: "Book added successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to add book" });
    }

    // const bookdata = await collection.insertMany([alldata]);
    // console.log(bookdata);
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server running on port: `+ port);

})