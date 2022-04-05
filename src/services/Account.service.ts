import accountRepo from "@repos/Account.repo";
import { utils } from "ethers";

/**
 * Get all accounts.
 *
 * @returns
 */
function getAll(): Promise<string[]> {
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

/**
 * Update one user.
 *
 * @param user
 * @returns
 */
// async function updateOne(user: IUser): Promise<void> {
//   const persists = await userRepo.persists(user.id);
//   if (!persists) {
//     throw new UserNotFoundError();
//   }
//   return userRepo.update(user);
// }

/**
 * Delete a user by their id.
 *
 * @param id
 * @returns
 */
// async function deleteOne(id: number): Promise<void> {
//   const persists = await userRepo.persists(id);
//   if (!persists) {
//     throw new UserNotFoundError();
//   }
//   return userRepo.delete(id);
// }

// Export default
export default {
  getAll,
  getBalance,
  //   delete: deleteOne,
} as const;
