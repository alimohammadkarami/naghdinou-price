const express = require('express')
const app = express();
const axios = require('axios')
require('dotenv').config();
app.use(express.json());

   const US_Dollar =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "usd_sell"
        }
    })
    const price = data.data["usd_sell"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice)
 }
   const UK_Pound =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "gbp"
        }
    })
    const price = data.data["gbp"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice)
 }
   const Euro =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "eur"
        }
    })
    const price = data.data["eur"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice)
 }
   const UAE_dirham =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "aed"
        }
    })
    const price = data.data["aed"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice)
 }
   const Harat_dollar =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "harat_naghdi_buy"
        }
    })
    const price = data.data["harat_naghdi_buy"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice)
 }
   const XAU =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "usd_xau"
        }
    })
    const price = data.data["usd_xau"].value
    const formattedPrice = new Intl.NumberFormat('en-IR').format(price);
    res.json(formattedPrice)
 }
   const tala_18ayar =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "18ayar"
        }
    })
    const price = data.data["18ayar"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice)
 }
   const abshode =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "abshodeh"
        }
    })
    const price = data.data["abshodeh"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice + "میلیون تومان")
 }
   const sekke_emmam =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "sekkeh"
        }
    })
    const price = data.data["sekkeh"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+" میلیون تومان")
 }
   const sekke_bahar =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "bahar"
        }
    })
    const price = data.data["bahar"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+" میلیون تومان")
 }
   const nim_sekke =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "nim"
        }
    })
    const price = data.data["nim"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+" میلیون تومان")
 }
   const rob_sekke =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "rob"
        }
    })
    const price = data.data["rob"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+" میلیون تومان")
 }
   const sekke_gerami =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "gerami"
        }
    })
    const price = data.data["gerami"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+" میلیون تومان")
 }
   const tether =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "usdt"
        }
    })
    const price = data.data["usdt"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+"  تومان")
 }
   const bitcoin =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "btc"
        }
    })
    const price = data.data["btc"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+"  تومان")
 }
   const eth =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "eth"
        }
    })
    const price = data.data["eth"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+"  تومان")
 }
   const solana =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "sol"
        }
    })
    const price = data.data["sol"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+"  تومان")
 }
   const ripple =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "xrp"
        }
    })
    const price = data.data["xrp"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+"  تومان")
 }
   const tron =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "trx"
        }
    })
    const price = data.data["trx"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+"  تومان")
 }
   const uni =async (req,res)=>{
   const data = await axios.get("http://api.navasan.tech/latest",{
        params : {
           api_key : process.env.api_key,
           item: "uni"
        }
    })
    const price = data.data["uni"].value
    const formattedPrice = new Intl.NumberFormat('fa-IR').format(price);
    res.json(formattedPrice+"  تومان")
 }
 module.exports ={ 
    US_Dollar,
    UK_Pound,
    Euro,
    UAE_dirham,
    Harat_dollar,
    XAU,
    tala_18ayar,
    abshode,
    sekke_emmam,
    sekke_bahar,
    nim_sekke,
    rob_sekke,
    sekke_gerami,
    tether,
    bitcoin,
    eth,
    solana,
    ripple,
    tron,
    uni
 }