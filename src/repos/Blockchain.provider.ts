import { providers, Wallet } from "ethers";
import { BytesLike } from "ethers/lib/utils";

// Connect to blockchain on localhost:8545
const provider = new providers.JsonRpcProvider();

// Setup wallet to sign transaction
// Private key is taken from the first account on the hardhat
const wallet = new Wallet(process.env.PRIVATE_KEY as BytesLike, provider);

export { provider, wallet };
