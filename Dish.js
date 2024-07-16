import mongoose from "mongoose";
const schema = new mongoose.Schema({
    dishId: {
        type: String,
        unique: true,
        required: true
    },
    dishName: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        required: true
    }
});

const Dish = mongoose.model("Dish", schema);
export default Dish;