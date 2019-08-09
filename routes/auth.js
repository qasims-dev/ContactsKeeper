const express = require("express");
const router = express.Router();

//@router GET /api/auth
//@desc Get logged in user
//@access private
router.get("/",(req,res)=>{
res.send("Get logged in user")
});

//@router POST /api/auth
//@desc Auth user & get token
//@access private
router.post("/",(req,res)=>{
    res.send("Log in a user")
    });

module.exports= router;