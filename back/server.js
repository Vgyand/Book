import express from "express";
import morgan from "morgan";
import dotenv from 'dotenv'
import colors from 'colors'


/* Config */
import { connectDB } from "./config/db.js";

/*import routes*/
import userRoutes from './routes/userRoutes.js'

connectDB()

dotenv.config()

const app = express()

if (process.env.NODE_ENV === "development") app.use(morgan('dev'))

app.use(express.json())

app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server run in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))