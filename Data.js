import mongoose from "mongoose"
const connection = async() => {
    try {
        await mongoose.connect(process.env.DB);
        console.log("Database Connected")
    } catch (error) {
        console.log(error);
    }
}
export default connection;