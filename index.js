import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const PORT = 5000;

const DB_URL =
  "mongodb+srv://user:user@cluster0.ilbawax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.json());
app.use(express.static("static"));
app.use(fileUpload({}));
app.use("/api", router);

// app.get("/", (req, res) => {
//   //   console.log(req.query.test);
//   console.log(req.body);
//   res.status(200).json("SErver Workin");
// });

async function startApp() {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (error) {
    console.log(error);
  }
}

startApp();
