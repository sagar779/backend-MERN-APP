const express = require("express");
const User = require("../modles/userModels");

const router = express.Router();


//Create
router.post("/", async(req,res) => {
    const {name, email,age,gender} = req.body;
    //const User = require("../modles/userModels");
    try {
      const userAdded = await User.create({
        name: name,
        email: email,
        age: age,
        gender: gender,
      });
      res.status(201).json(userAdded);
  
    } catch (error) {
      console.log(error);
      res.status(400).json({error:error.message});
    }
    
  });
  

  //GET
  router.get("/", async (req, res)=>{
    try {
      const showAll = await User.find();
      res.status(200).json(showAll);
  
    } catch (error) {
      console.log(error);
      res.status(500).json({error:error.message});
    } 
    
  });

  //Get Single User
  router.get("/:id",async (req,res) =>{
    const {id} = req.params;

    try {
      const getSinghleUser = await User.findById({ _id: id});
      if (getSinghleUser) {
        res.status(200).json(getSinghleUser);
      } else {
        res.status(404).json({ error: "User not found" });
      }
      
    } catch (error) {
      console.log(error);
      res.status(500).json({error:error.message});
      
    }

  });


  // Delete
  router.delete("/:id", async(req,res) => {
      const {id} = req.params;

    try {
      const deleteUser = await User.findByIdAndDelete({ _id:id});
      res.status(200).json(deleteUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({error:error.message});
    }
  });

  //Put/Patch
  router.patch("/:id", async(req,res) => {
    const {id} = req.params;
    const {name, email, age} = req.body;

  try {
    const updateUser = await User.findByIdAndUpdate(id, req.body,{
      new: true,
    });
    res.status(200).json(updateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:error.message});
  }
});
    
  module.exports = router;