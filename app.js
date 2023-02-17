const express = require("express");
const taskRouter = require("./routes/TaskRoutes");

const app = express();

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/CRUD",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);

//middleware
app.use(express.json());
app.use("/api/tasks", taskRouter);
 
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
 
module.exports = app;