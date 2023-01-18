import express from "express";
import data from "../data/countries.json" assert { type: "json" };

const router = express.Router();

const countriesData = JSON.stringify(data);

router.get("/", (req, res) => {
  res.send(countriesData);
});

export default router;
