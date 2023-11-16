"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkArb = exports.checkMatic = exports.checkEth = exports.checkAvax = void 0;
const const_1 = require("./const");
const const_2 = require("./const");
const const_3 = require("./const");
const const_4 = require("./const");
const const_5 = require("./const");
const ethers_1 = __importDefault(require("ethers"));
function checkAvax() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const provider = new ethers_1.default.JsonRpcProvider(const_5.avaxProvider);
            const balance = yield provider.getBalance(const_4.walletAddress);
        }
        catch (error) {
            console.error("Error checking balance:", error);
        }
    });
}
exports.checkAvax = checkAvax;
function checkEth() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const provider = new ethers_1.default.JsonRpcProvider(const_1.ethereumProvider);
            const balance = yield provider.getBalance(const_4.walletAddress);
        }
        catch (error) {
            console.error("Error checking balance:", error);
        }
    });
}
exports.checkEth = checkEth;
function checkMatic() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const provider = new ethers_1.default.JsonRpcProvider(const_2.maticProvider);
            const balance = yield provider.getBalance(const_4.walletAddress);
        }
        catch (error) {
            console.error("Error checking balance:", error);
        }
    });
}
exports.checkMatic = checkMatic;
function checkArb() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const provider = new ethers_1.default.JsonRpcProvider(const_3.arbitrumProvider);
            const balance = yield provider.getBalance(const_4.walletAddress);
        }
        catch (error) {
            console.error("Error checking balance:", error);
        }
    });
}
exports.checkArb = checkArb;
