const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

console.log(process.env.MONGO_URI);

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio Platform API Running");
});

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => {
    console.log("MongoDB Error:");
    console.log(err.message);
});

const authRoutes = require("./routes/authRoutes");

app.use("/api/auth",authRoutes);

const userRoutes =
require("./routes/userRoutes");

app.use("/api/user",userRoutes);

const projectRoutes =
require("./routes/projectRoutes");

app.use(
"/api/projects",
projectRoutes
);