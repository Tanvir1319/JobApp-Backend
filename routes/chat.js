const router = require("express").Router();
const {verifyAdmin,verifyToken } = require("../middleware/verifyToken");
const chatController = require("../controllers/chatController");

// CREATE CHAT
router.post("/",verifyAdmin,chatController.accessChat);



// Get Chats
router.get("/",verifyAdmin,chatController.getChat);

module.exports = router;