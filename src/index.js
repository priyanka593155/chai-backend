// require ('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "../db"

dotenv.config()


connectDB()
.then(()=>{
  app.listen(process.env.PORT || 8000, ()=>{
    console.log(`server is running at port : ${process.env.PORT}`);
  })
})
.catch((err)=> {
  console.log("momodb connection failed !!!", err);
})























/*
initialise app 
import express from "express"
const app=express()

;(async()=>{
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    // adding listeners
    app.on("error", (error)=>{
        console.log("ERRR:",error )
        throw error
    })

    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("ERROR:", error)
    throw err
  }
})()
*/