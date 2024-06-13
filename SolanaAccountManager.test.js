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
const SolanaAccountManager_1 = require("./SolanaAccountManager");
describe('SolanaAccountManager', () => {
    let manager;
    beforeEach(() => {
        manager = new SolanaAccountManager_1.SolanaAccountManager("https://api.mainnet-beta.solana.com");
    });
    it('fetches tokens correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const tokens = yield manager.fetchTokens("DummyPublicKey");
        expect(tokens.length).toBeGreaterThan(0);
    }));
    it('compares balances correctly', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield manager.compareBalances("PublicKey1", "PublicKey2");
        expect(result.account1Only).toBeDefined();
        expect(result.account2Only).toBeDefined();
        expect(result.commonTokens).toBeDefined();
    }));
});
