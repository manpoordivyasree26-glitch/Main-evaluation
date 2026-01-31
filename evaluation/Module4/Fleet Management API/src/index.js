import express from "express";
import dotenv from "dotenv";

import logger from "./middlewares/logger.middleware";
import notFound from "./middlewares/notFound.middleware";
import userRoutes from "./routes/user.routes";
import vehicleRoutes from "./routes/vehicle.routes";
import tripRoutes from "./routes/trip.routes";
import analytics from "./routes/analytics.routes";


const app=express();
app.use(express.json());
app.use(logger);

app.use("/users",userRoutes);
app.use("/vehicles",vehicleRoutes);
app.use("/trips",tripRoutes);
app.use("/analytics",analyticsRoutes);

app.use(notFound);
app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})