const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

const cors = require("cors");
app.use(cors());
const userRouter = require("./Routes/userRoutes");


mongoose.connect( process.env.URI)
.then(()=>{
        console.log(" connected sucessfully");
        app.listen(process.env.PORT || 8000, (err) => {
            if(err) console.log(err);
            console.log("running Sucessfully at",process.env.PORT);
        });
})
.catch((error) =>{
        console.log("error",error);
});

app.use(userRouter);


