import mongoose from "mongoose";
import colors from "colors";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {

        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}