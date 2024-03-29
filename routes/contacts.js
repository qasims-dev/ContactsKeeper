const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const User = require("../models/User");
const Contact = require("../models/Contact");

//@router GET /api/contacts
//@desc Get all your contacts
//@access private
router.get("/", auth, async (req, res) => {
  //res.send("Get all your contacts");
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });

    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//@router POST /api/contacts
//@desc Add New Contact
//@access private
router.post(
  "/",
  [
    auth,
    [
      check("name", "Name is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    //res.send("Add contact");

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

//@router PUT /api/contacts/:id
//@desc Update Contact
//@access private
router.put("/:id", (req, res) => {
  res.send("Update Contact");
});

//@router DELETE /api/contacts/:id
//@desc Delete Contact
//@access private
router.delete("/:id", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;
