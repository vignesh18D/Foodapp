import express from "express";
import Dish from "./Dish.js";
const router = express.Router();

//fetch
router.get('/', async(req, res) => {
    try {
        const dishes = await Dish.find();
        res.json(dishes);
    } catch (error) {
        res.status(500).send(error);
    }
});
//Toggle

router.put('/toggle/:id', async(req, res) => {
    try {
        const dish = await Dish.findById(req.params.id);
        dish.isPublished = !dish.isPublished;
        await dish.save();
        res.json(dish);
        res.send(dish);
    } catch (error) {
        res.status(500).send(error);
    }
});




export default router;