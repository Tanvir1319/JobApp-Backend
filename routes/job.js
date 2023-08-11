const router = require("express").Router();
const jobController = require("../controllers/jobController");
const { verifyAndAuthorization , verifyToken,verifyAdmin} = require("../middleware/verifyToken");



// Post JOB 

router.post("/", verifyAdmin,  jobController.createJob);


// Update Job 
router.put("/:id", verifyAdmin,  jobController.updateJob);
// delete Job
router.delete("/:id", verifyAdmin,  jobController.deleteJob);

// Get Job 
router.get("/:id", jobController.getJob);

// Get Jobs 
router.get("/", verifyAdmin,  jobController.getAllJobs);
// Search Jobs
router.get("/search/:key", verifyAdmin,  jobController.searchJobs);











module.exports = router