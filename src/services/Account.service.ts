import accountRepo from "@repos/Account.repo";
import { utils } from "ethers";

/**
 * Get all accounts.
 *
 * @returns
 */
function getAccounts(): Promise<string[]> {
  return accountRepo.getAccounts();
}

/**
 * Add acc balance.
 *
 * @param address
 * @returns
 */
async function getBalance(address: string): Promise<string> {
  const balance = await accountRepo.getBalance(address);
  return `${utils.formatEther(balance)} ETH`;
}

export default {
  getAccounts,
  getBalance,
} as const;
