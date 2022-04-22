var express = require("express");
var router = express.Router();
const car = require("../controller/carController");

/* GET home page. */

router.get("/", car.getAllCar);
router.post("/create", car.addCAR);
router.put("/update/:id", car.updateCar);
router.delete("/delete/:id", car.deleteCar);
router.get("/search", car.getCar);

module.exports = router;