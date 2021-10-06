const express=require('express')
const env=require("dotenv")
const mongoose=require('mongoose')
const app=express()

//routes
const authRoutes=require("./routes/auth")
const adminauthRoutes=require("./routes/admin/auth")

//environment variable 
env.config()

app.use(express.json())
app.use("/api",authRoutes)
app.use("/api",adminauthRoutes)

//mongodb connection
//mongodb+srv://admin:<password>@cluster0.valp4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.valp4.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(() =>{
    console.log("Database Connected")
})




app.listen(process.env.PORT,() =>{
    console.log(`Server is running on port ${process.env.PORT}`)
})