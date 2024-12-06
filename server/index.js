import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/user_route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import courseRoute from './routes/course_route.js'

const PORT=3000;
const app=express();

const DB_URL='mongodb://localhost:27017/learn';
mongoose.connect(DB_URL);
const conn=mongoose.connection;
conn.once('open',()=>{
    console.log('sucessfully database connected');
})
conn.on('error',()=>{
    console.log('error');
})

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
 origin:"http://localhost:5173",
 credentials:true
}))

//api
app.use("/api/v1/user",userRoute);
app.use("/api/v1/course",courseRoute);

app.listen(PORT,()=>{
    console.log(`server listen at port ${PORT}`);
})