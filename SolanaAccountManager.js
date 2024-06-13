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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolanaAccountManager = void 0;
const web3_js_1 = require("@solana/web3.js");
class SolanaAccountManager {
    constructor(clusterUrl) {
        this.connection = new web3_js_1.Connection(clusterUrl, 'confirmed');
    }
    fetchTokens(publicKey) {
        return __awaiter(this, void 0, void 0, function* () {
            // Mocking token retrieval for example purposes
            // Replace this with actual Solana API calls in production
            return [
                { name: "TokenA", balance: Math.floor(Math.random() * 100) },
                { name: "TokenB", balance: Math.floor(Math.random() * 100) }
            ];
        });
    }
    compareBalances(account1, account2) {
        return __awaiter(this, void 0, void 0, function* () {
            const tokens1 = yield this.fetchTokens(account1);
            const tokens2 = yield this.fetchTokens(account2);
            const account1Only = tokens1.filter(t1 => !tokens2.some(t2 => t2.name === t1.name));
            const account2Only = tokens2.filter(t2 => !tokens1.some(t1 => t1.name === t2.name));
            const commonTokens = tokens1.filter(t1 => tokens2.some(t2 => t2.name === t1.name && t2.balance === t1.balance));
            return { account1Only, account2Only, commonTokens };
        });
    }
}
exports.SolanaAccountManager = SolanaAccountManager;
