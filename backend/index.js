const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/db");
const router = require("./routes/allroutes");
const cookieParser = require("cookie-parser");

//Parser
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));

//router
app.use("/api", router);

//connect database then server running
const PORT = 8080 || process.env.PORT;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("successfully connected to MongoDB");
    console.log(`The Server is Successfully run at ${PORT}`);
  });
});
