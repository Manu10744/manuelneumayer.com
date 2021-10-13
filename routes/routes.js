const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

router.use(express.static('public'));
router.use(bodyParser.urlencoded({ extended: true }))

router.get("/", (req, res) => { 
    res.render("index.ejs"); 
});


module.exports = router;