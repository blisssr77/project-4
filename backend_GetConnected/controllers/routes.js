const router = require("express").Router()
const userCtrl = require("./userCtrl")
const studentCtrl = require("./studentCtrl")
const freelancerCtrl = require("./freelancerCtrl")
const upload = require("../middleware/upload")
const { verifyToken } = require("../middleware/verifyToken")

// user routes
router.post("/auth/loginsignup", userCtrl.signup)
router.post("/auth/signup", userCtrl.signup)
router.post("/auth/login", userCtrl.login)
router.get("/user", userCtrl.getUser)

// Placed under auth endpoints because we want to protect all other routes
router.use(verifyToken)

// student routes
router.get('/students', studentCtrl.getStudents);
router.post('/students', upload, studentCtrl.createStudent);
// router.post('/students', upload, studentCtrl.createStudent);
router.put('/students/:id', studentCtrl.updateStudent);
router.delete('/students/:id', studentCtrl.deleteStudent);

// Freelancer Routes below
router.get('/freelancers', freelancerCtrl.getFreelancers);
router.post('/freelancers', upload, freelancerCtrl.createFreelancer);
router.put('/freelancers/:id', freelancerCtrl.updateFreelancer);
router.delete('/freelancers/:id', freelancerCtrl.deleteFreelancer);
// router.post('/freelancers', verifyToken, upload.single('photo'), freelancerCtrl.createFreelancer);





module.exports = router;