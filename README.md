# naghdinou-prices

## Description
this is an api that provides prices with seperated routes for using in the front-end
i develop it to practice creating api and consume it for my web-traning project "naghdinou"
with this api you can receive some cureencies price(popular ones in iran) , gold prices(such as 18ayar , abshode , sekke_emmai ,....) and some crypto-currencies(again popular ones)
i progress this with express and node.js
first i tried to receive prices for may projects front by fetch api in the projects script.js file but then i realized that my api key will be shown an its not secure so i decided to advance an api for it 

-alimohammd-karami(chamgordani)

## Technologies
- Node.js
- Express.js
- Axios
- dotenv


## Project Structure

naghdinou-price/
│
├── app.js
├── controllers/
│   └── prices.js
│
├── routes/
│   ├── currencies.routes.js
│   ├── gold.routes.js
│   └── crypto.routes.js
│
├── .env
├── .gitignore
├── package.json
└── README.md

- app.js: the main file and server optimizations
- controllers: logics
- routes: seperated routes(gold,currencies and crypto prices have distinct routes as it clear in the main file(app.js))
## instalition

first install npm :
  npm install
then:
  npm i nodemon 
  npm i express
  npm i axios
  npm i dotenv

## env 

create an env file and set this variables in it :
APP_PORT = 5530
api_key =free4fCRCDH8CRazTchzCrpUROsh64C4

## project runnig 

after insalling requirements just type 'npm start' in terminal
server runnig on this : http://localhost:5530||3000

## routes

"/prices/gold/Xau"
"/prices/gold/18ayar"
"/prices/gold/emmami"
"/prices/gold/abshode"
"/prices/gold/seke-emmam"
"/prices/gold/bahar-azadi"
"/prices/gold/nim_sekke"
"/prices/gold/rob_sekke"
"/prices/gold/sekke-gerami"
-----------------------------------
"/prices/currencies/US-Dollar"
"/prices/currencies/UK-Pound"
"/prices/currencies/Euro"
"/prices/currencies/UAE-Dirham"
"/prices/currencies/Harat-dollar"
-----------------------------------
"/prices/crypto/usdt"
"/prices/crypto/btc"
"/prices/crypto/eth"
"/prices/crypto/sol"
"/prices/crypto/xrp"
"/prices/crypto/trx"
"/prices/crypto/uni"
-----------------------------------
## example respones
GET http://localhost:5530/prices/gold/seke-emmam

Respones = "۱۵۱٬۰۰۰ میلیون تومان"
##

its my first exprience of writing a readme file 
i hope i hadend have 
I hope it doesn’t have any  grammar mistakes
