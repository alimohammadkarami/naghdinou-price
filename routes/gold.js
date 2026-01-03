const express = require('express')
const Gold_router = express.Router();
const pairs = require("../Controller/prices")
Gold_router.use(express.json());

Gold_router.get("/Xau",pairs.XAU)
Gold_router.get("/18ayar",pairs.tala_18ayar)
Gold_router.get("/emmami",pairs.sekke_emmam)
Gold_router.get("/abshode",pairs.abshode)
Gold_router.get("/seke-emmam",pairs.sekke_emmam)
Gold_router.get("/bahar-azadi",pairs.sekke_bahar)
Gold_router.get("/nim_sekke",pairs.nim_sekke)
Gold_router.get("/rob_sekke",pairs.rob_sekke)
Gold_router.get("/sekke-gerami",pairs.sekke_gerami)

module.exports= Gold_router