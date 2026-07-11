import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();//to use jsonwebtoken etc from .env file

const app = express();//creating express function for creating application
//now app created now start adding features in it using "app.use"
app.use(cors());//middleware
app.use(express.json());//express cannot read JSON data from client so it converts it into javascript object using express.json and make them available fro req.body

app.get("/", (req, res) => {//route
    res.send("🚀 Singhal Foods API is running...");
});

export default app;