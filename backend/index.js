// setup express backend with mongodb connection
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// create express server
const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
// middleware
app.use(cors(corsOptions));
app.use(express.json());

// require and use routes
const todosRouter = require("./routes/todos");
app.use("/todos", todosRouter);

// start server

mongoose
  .connect(process.env.ATLAS_URI)
  .then(() =>
    app.listen(port, () =>
      console.log(`Server is running on port: ${port} and connected to MongoDB`)
    )
  )
  .catch((err) => console.log(err));
