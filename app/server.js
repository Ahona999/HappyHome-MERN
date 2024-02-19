const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require('body-parser'); 
const port = process.env.PORT || 5000;
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

app.use(cors()); 
app.use(bodyParser.json()); 

const MONGO_URL = "mongodb://127.0.0.1:27017/happyhome";

main()
.then(()=> {
    console.log("Succesfully connected to DB")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));


//Home
app.get("/Home", (req,res) => {
    res.send("Welcome to HappyHome")
});

//Index Route
app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  });

//Show Route
app.get("/listings/:id", async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
});

// app.get("/testing", async (req, res) => {
//     let sampleListing = new Listing ({
//         title: "96, Winchester Street OY 43J",
//         description: "Contemporary elements and traditional features, offering both comfort and style.",
//         price: 600,
//         location: "Notting Hill, London",
//         country: "UK"
//     });

//     await sampleListing.save();
//     console.log("sample saved");
//     res.send("Success")
// })

// app.get('/api/data', (req, res) => {
//     const data = 
//     res.json(data);
// });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

