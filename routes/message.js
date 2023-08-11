const router = require("express").Router();
const {verifyAdmin,verifyToken } = require("../middleware/verifyToken");
const messageController = require("../controllers/messageController");

// Send Message 
router.post("/",verifyAdmin,messageController.sendMessage);



// Get All Message
router.get("/:id",messageController.getAllMessage);

module.exports = router;