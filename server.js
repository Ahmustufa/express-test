import express, { json } from "express";
import router from "./routes/countries.js";


const PORT = 3000;
const app = express();

app.use("/countries",router);


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
