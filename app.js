const express = require('express')
const app = express();
const cors = require("cors")
const axios = require('axios')
const currencies_router = require('./routes/currencies')
const Gold_router = require('./routes/gold');
const crypto_router = require('./routes/crypto')
require('dotenv').config();
app.use(express.json());
app.use(cors());
const port = process.env.APP_PORT || 3000;
app.listen(port,()=>{
 console.log(`server running on  ${port}`)
})
app.use("/prices/currencies",currencies_router)
app.use("/prices/gold",Gold_router)
app.use("/prices/crypto" , crypto_router);

