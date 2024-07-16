import express from 'express';
import dotenv from 'dotenv';
import connection from './database/Data.js';
import dishRoute from './Router.js';
import Dish from "./Dish.js";
import mongoose from 'mongoose';
import cors from 'cors';
//Using Routes

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();

connection();
app.use(cors())
app.use(express.json());
app.use('/api/dishes', dishRoute);

app.get('/', (req, res) => {

    try {
        res.send('<h1>Hello world</h1>')
    } catch (error) {
        console.log(error)
    }

})

app.listen(port, () => {
    console.log("server is running in " + port)
    connection();


})