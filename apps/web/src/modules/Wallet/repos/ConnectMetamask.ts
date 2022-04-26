import {providers, utils} from 'ethers';
import {Account} from '../Types';

async function connectMetamask(): Promise<Account> {
  // A Web3Provider wraps a standard Web3 provider, which is
  // what MetaMask injects as window.ethereum into each page
  const provider = new providers.Web3Provider(window.ethereum);

  // MetaMask requires requesting permission to connect users accounts
  await provider.send('eth_requestAccounts', []);

  // The MetaMask plugin also allows signing transactions to
  // send ether and pay to change state within the blockchain.
  // For this, you need the account signer...
  const signer = provider.getSigner();
  const address = await signer.getAddress();
  const balance = utils.formatEther(await signer.getBalance());

  return {address, balance};
}
export default connectMetamask;
