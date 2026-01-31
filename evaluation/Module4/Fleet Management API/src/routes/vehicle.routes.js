import express from "express";
import vehicleLimiter from "../middlewares/rateLimiter.middleware.js";
import{
    addVehicle,
    assignDriver
} from "../controllers/vehicle.controller.js"

const router=express.Router();

router.post("/add",vehicleLimiter,addVehicle);
router.post("/assign_driver/:vehicleId",assignDriver);

export default router;