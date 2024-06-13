import { SolanaAccountManager } from './SolanaAccountManager';

async function main() {
    const manager = new SolanaAccountManager("https://api.mainnet-beta.solana.com");

    const publicKey1 = "YourPublicKey1";
    const publicKey2 = "YourPublicKey2";

    const comparison = await manager.compareBalances(publicKey1, publicKey2);

    console.log("Unique to Account 1:", comparison.account1Only);
    console.log("Unique to Account 2:", comparison.account2Only);
    console.log("Common Tokens:", comparison.commonTokens);
}

main();
