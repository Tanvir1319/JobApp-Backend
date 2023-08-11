const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyAndAuthorization , verifyToken,verifyAdmin} = require("../middleware/verifyToken");


// Update user 

router.put("/:id", verifyAndAuthorization,  userController.updateUser);
// delete user 
router.delete("/:id", verifyAndAuthorization,  userController.deleteUser);

// Get user 
router.get("/:id", verifyAndAuthorization,  userController.getUser);

// Get user 
router.get("/", verifyAdmin,  userController.getAllUser);











module.exports = router