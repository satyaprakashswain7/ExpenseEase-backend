//pwd: NOsVrIfgSVSjQMhF
import express,{ Express } from "express"
import mongoose from "mongoose"
import financialRecordRouter from "./routes/financial-records"
import cors from "cors"

require('dotenv').config()
const app: Express = express()
const port = process.env.VITE_PORT  || 3000

app.use(cors({
    origin: '*',
    methods: "POST",
}))

app.use(express.json())

const mongoURI: string = process.env.VITE_MONGO_URI || ''
mongoose.connect(mongoURI)
.then(() => console.log("connected to MongoDB succesfully"))
.catch((err) => console.error("failed ",err))

app.use("/financial-records",financialRecordRouter)

app.listen(port,() => {
    console.log(`server connected to ${port}`);
    
})
