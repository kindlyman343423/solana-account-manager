import { SolanaAccountManager } from './SolanaAccountManager';

describe('SolanaAccountManager', () => {
    let manager: SolanaAccountManager;

    beforeEach(() => {
        manager = new SolanaAccountManager("https://api.mainnet-beta.solana.com");
    });

    it('fetches tokens correctly', async () => {
        const tokens = await manager.fetchTokens("DummyPublicKey");
        expect(tokens.length).toBeGreaterThan(0);
    });

    it('compares balances correctly', async () => {
        const result = await manager.compareBalances("PublicKey1", "PublicKey2");
        expect(result.account1Only).toBeDefined();
        expect(result.account2Only).toBeDefined();
        expect(result.commonTokens).toBeDefined();
    });
});
