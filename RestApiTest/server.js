const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectDatabase");
const routers = require("./routers");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
const path = require("path");

dotenv.config({ path: "./config/env/config.env" });

// mongo
connectDatabase();

const app = express();

app.use(express.json())

const PORT = process.env.PORT;

app.use("/api", routers);

app.get("/", (req, res) => {
  res.send("hello world ");
});

// ERROR HANDLING
app.use(customErrorHandler);

app.use(express.static(path.join(__dirname,"public")));

app.listen(PORT, () => {
  console.log(`started on ${PORT} : ${process.env.NODE_ENV}`);
});
