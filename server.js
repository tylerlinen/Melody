require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();


mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true })
const db = mongoose.connection
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected To Database"));

app.use(express.json())

const melodyRouter = require("./routes/melodys")
app.use("/melodys", melodyRouter)


app.listen(3000, () => console.log("Server Started"));
