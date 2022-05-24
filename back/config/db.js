import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/bookMarket', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`Mongo connectet: ${conn.connection.host}`)
    } catch (error) {
        console.error(`error: ${error.message}`)
        process.exit(1)
    }
}