const router = require("express").Router();
const {verifyAdmin,verifyToken } = require("../middleware/verifyToken");
const bookmarkController = require("../controllers/bookmarkController");

// Create Bookmark
router.post("/",verifyAdmin,bookmarkController.createBookmark);

// Delete Bookmark
router.delete("/:id",bookmarkController.deleteBookmark);

// Get Bookmark
router.get("/:userId",bookmarkController.getBookmarks);

module.exports = router;