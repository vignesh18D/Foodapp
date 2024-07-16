import mongoose from "mongoose";
import Dish from "./Dish.js";

const dishes = [{
        dishId: '1',
        dishName: 'Jeera Rice',
        imageUrl: 'https://nosh-assignment.s3.ap-south-1.amazonaws.com/jeera-rice.jpg',
        isPublished: true
    },
    {
        dishId: '2',
        dishName: 'Paneer Tikka',
        imageUrl: 'https://nosh-assignment.s3.ap-south-1.amazonaws.com/paneer-tikka.jpg',
        isPublished: true
    },
    {
        dishId: '3',
        dishName: 'Rabdi',
        imageUrl: 'https://nosh-assignment.s3.ap-south-1.amazonaws.com/rabdi.jpg',
        isPublished: true
    },
    {
        dishId: '4',
        dishName: 'Chicken Biryani',
        imageUrl: 'https://nosh-assignment.s3.ap-south-1.amazonaws.com/chicken-biryani.jpg',
        isPublished: true
    },
    {
        dishId: '5',
        dishName: 'Alfredo Pasta',
        imageUrl: 'https://nosh-assignment.s3.ap-south-1.amazonaws.com/alfredo-pasta.jpg',
        isPublished: true
    }
];

mongoose.connect('mongodb://localhost:27017/foodapp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(async() => {
        await Dish.insertMany(dishes);
        console.log('Database Populated ');
        mongoose.connection.close();
    })
    .catch(error => console.log('error populating database:', error));