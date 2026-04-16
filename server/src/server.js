// import files & packages
import app from "./app.js";
import dotenv from "dotenv";

// config env variables
dotenv.config();

// initialize port
const port = process.env.PORT || 5000;

// start & listen the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
