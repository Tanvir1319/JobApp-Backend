const router = require("express").Router();
const bookmarkController = require("../controllers/bookmarkController");
const mongoose = require('mongoose');

// CREATE BOOKMARKS
//router.post("/", bookmarkController.createBookmark);


 //DELETE BOOKMARKS

//router.delete("/:id", verifyToken, bookmarkController.deleteBookmark);


 //GET BOOKMARKS
//router.get("/:userId", bookmarkController.getBookmarks);



//module.exports = router






const BookMarkSchema = new mongoose.Schema({
 job: {type: String, required: true},
 userId: {type: String, required: true},
 title: {type: String, required: true},
 imageUrl: {type: String, required: true},
 company: {type: String, required: true},
 location: {type: String, required: true}
},
{timestamps: true}
);

module.exports =mongoose.model ("Bookmark",BookMarkSchema);