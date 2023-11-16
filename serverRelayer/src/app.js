import * as dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";
import { checkArb, checkAvax, checkEth, checkMatic } from "./balanceChecker.js";
import fs from "fs";
import { addMaticBalance } from "./crud.js";
import { addArbBalance } from "./crud.js";
import { addEthBalance } from "./crud.js";
import { addAvaxBalance } from "./crud.js";
dotenv.config();

// Create a single supabase client for interacting with your database
//const supabase = createClient(process.env.PROJECT_URL, process.env.ANON_PUBLIC_KEY)
main();
async function main() {
  // Replace '0xYourWalletAddress' with the actual Ethereum wallet address


  checkDB()
  setInterval(checkDB, 3000);

}


async function checkDB(){

  const avaxBalance = await checkAvax();
  const ethBalance = await checkEth();
  const arbBalance = await checkArb();
  const maticBalance = await checkMatic();

console.log("yessss")

const avaxBalPath = "../data/avaxBalance.json"
const ethBalPath = "../data/ethBalance.json"
const maticBalPath = "../data/maticBalance.json"
const arbBalPath = "../data/arbBalance.json"
const avaxDB = readFile(avaxBalPath)
const ethDB = readFile(ethBalPath)
const maticDB = readFile(maticBalPath)
const arbDB = readFile(arbBalPath)

  if (
    Number(avaxBalance) !== Number(avaxDB[avaxDB.length - 1].nativeBalance) 
  ) {
    //console.log(Date().toString())
    addAvaxBalance(
      "../data/avaxBalance.json",
      avaxDB.length + 1,
      Number(avaxBalance),
      new Date().toISOString()
    );
  }

if(Number(ethBalance) !== Number(ethDB[ethDB.length - 1].nativeBalance)) {
    //console.log(Date().toString())
    addEthBalance(
      "../data/ethBalance.json",
      ethDB.length + 1,
      Number(ethBalance),
      new Date().toISOString()
    );
  }
 console.log( Number(arbBalance))
 if (Number(arbBalance) !== Number(arbDB[arbDB.length - 1].nativeBalance)) {
    //console.log(Date().toString())
    addArbBalance(
      "../data/arbBalance.json",
      arbDB.length + 1,
      Number(arbBalance),
      new Date().toISOString()
    );
  }

   if (Number(maticBalance) !== Number(maticDB[maticDB.length - 1].nativeBalance)) {
    //console.log(Date().toString())
    addMaticBalance(
      "../data/maticBalance.json",
      maticDB.length + 1,
      Number(maticBalance),
      new Date().toISOString()
    );
  
}
}

const readFile = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};