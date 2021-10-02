import express from "express";
import router from "./config/router.js";
import { connectDb } from "./db/helpers.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", router);

async function startServer() {
  try {
    await connectDb();
    console.log("🥼 Mongoose is connected!");
    app.listen(process.env.PORT, () =>
      console.log(`🥼 Dr. Backend listening on Port: ${process.env.PORT}`)
    );
  } catch (err) {
    console.log("🥼 Oh dear... something went wrong", err);
  }
}

startServer();
