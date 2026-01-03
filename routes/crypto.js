const express = require('express')
const crypto_router = express.Router();
const pairs = require("../Controller/prices")
crypto_router.use(express.json());

crypto_router.get("/usdt" , pairs.tether);
crypto_router.get("/btc" , pairs.bitcoin);
crypto_router.get("/eth" , pairs.eth);
crypto_router.get("/sol" , pairs.solana);
crypto_router.get("/xrp" , pairs.ripple);
crypto_router.get("/trx" , pairs.tron);
crypto_router.get("/uni" , pairs.uni);

module.exports = crypto_router;


