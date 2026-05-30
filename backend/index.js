const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth.js") ;

const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");

const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3002;

//authentication
app.use("/api/users", authRoutes)
// app.use("/api/users/signup")
// app.use("/api/users/login")
// app.use(express.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({}); //empty { } means it will fetch everything from holdingsModel

  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({}); //empty { } means it will fetch everything from holdingsModel

  res.json(allPositions);
});


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed");
    console.error(err.message);
  });
