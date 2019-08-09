const express = require("express");
const router = express.Router();

//@router GET /api/contacts
//@desc Get all your contacts
//@access private
router.get("/",(req,res)=>{
    res.send("Get all your contacts")
    });

//@router POST /api/contacts
//@desc Add New Contact
//@access private
router.post("/",(req,res)=>{
    res.send("Add contact")
    });

//@router PUT /api/contacts/:id
//@desc Update Contact
//@access private
router.put("/:id",(req,res)=>{
    res.send("Update Contact")
    });

//@router DELETE /api/contacts/:id
//@desc Delete Contact
//@access private
router.delete("/:id",(req,res)=>{
    res.send("Delete Contact")
    });

    module.exports= router;