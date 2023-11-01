import express from 'express';
import Colors from 'colors';
import dotenv from 'dotenv';

//configure env
dotenv.config();

//rest object
const app = express();

//rest api
app.get('/',(req,res)=>{
    res.send( "<h1>Welcome to ShopXperience</h1>");
});

//PORT
const PORT= process.env.PORT || 8080;

//run listen (for running app)
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
});