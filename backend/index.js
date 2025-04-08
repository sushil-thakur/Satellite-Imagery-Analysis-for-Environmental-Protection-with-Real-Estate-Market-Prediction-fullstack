import express from "express";
import dbConnect from "./db.connection.js";

import cors from "cors";
// backend app
const app = express();

// to make app understand json
app.use(express.json());
app.use(cors());

// database connection
dbConnect();



// network port
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});