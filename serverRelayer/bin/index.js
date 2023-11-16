"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const supabase_js_1 = require("@supabase/supabase-js");
const balanceChecker_1 = require("./balanceChecker");
const swr_1 = __importDefault(require("swr"));
dotenv.config();
const supabaseUrl = 'https://gledrdarxefnbcvmzytn.supabase.co';
const supabaseKey = (_a = process.env.SUPABASE_KEY) !== null && _a !== void 0 ? _a : "";
const supabase = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
// Create a single supabase client for interacting with your database
//const supabase = createClient(process.env.PROJECT_URL, process.env.ANON_PUBLIC_KEY)
main();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Replace '0xYourWalletAddress' with the actual Ethereum wallet address
        const { data: avaxBalance, isLoading: avaxLoading } = (0, swr_1.default)(balanceChecker_1.checkAvax);
        (0, swr_1.default)(balanceChecker_1.checkAvax, { refreshInterval: 10000 });
        const { data: ethBalance, isLoading: ethLoading } = (0, swr_1.default)(balanceChecker_1.checkEth);
        (0, swr_1.default)(balanceChecker_1.checkEth, { refreshInterval: 10000 });
        const { data: maticBalance, isLoading: maticLoading } = (0, swr_1.default)(balanceChecker_1.checkMatic);
        (0, swr_1.default)(balanceChecker_1.checkMatic, { refreshInterval: 10000 });
        const { data: arbBalance, isLoading: arbLoading } = (0, swr_1.default)(balanceChecker_1.checkArb);
        (0, swr_1.default)(balanceChecker_1.checkArb, { refreshInterval: 10000 });
        let { data: relayBalance_ARB, error } = yield supabase
            .from('relayBalance ARB')
            .select('id');
        const { data: d1, error: e1 } = yield supabase
            .from('relayBalance_ARB')
            .insert([
            { some_column: 'someValue', other_column: 'otherValue' },
        ])
            .select();
        console.log(relayBalance_ARB);
    });
}
