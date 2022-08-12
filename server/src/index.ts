const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
import {Request, Response} from 'express'

const ConnectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://daoxuanloc:xuanloc123456789@mern-learn.5hng7uz.mongodb.net/mern-learn?retryWrites=true&w=majority` , {  
            useNewUrlParser : true,
            useUnifiedTopology : true,
        })

        console.log('ok')
    } catch (error) {
        console.log(error.message)
    }
}
ConnectDB()


dotenv.config()
const app = express()

app.get('/', (req : Request, res : Response) => {res.send('hello world')})



const PORT = 5000
app.listen(PORT , () => console.log(`server started on port ${PORT}`))

