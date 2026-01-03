const express = require('express')
const currencies_router = express.Router();
const pairs = require("../Controller/prices")
currencies_router.use(express.json());

currencies_router.get("/US-Dollar" ,pairs.US_Dollar)
currencies_router.get("/UK-Pound" , pairs.UK_Pound)
currencies_router.get("/Euro" , pairs.Euro)
currencies_router.get("/UAE-Dirham",pairs.UAE_dirham)
currencies_router.get("/Harat-dollar",pairs.Harat_dollar)
module.exports = currencies_router;