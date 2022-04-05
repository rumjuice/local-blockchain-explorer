import { utils } from "ethers";
import provider from "./Blockchain.provider";

/**
 * Get all accounts.
 *
 * @returns string[]
 */
async function getAccounts(): Promise<string[]> {
  return await provider.listAccounts();
}

/**
 * Get all accounts.
 *
 * @returns string[]
 */
async function getBalance(address: string): Promise<string> {
  const balance = await provider.getBalance(address);
  return `${utils.formatEther(balance)} ETH`;
}

/**
 * See if a user with the given id exists.
 *
 * @param id
 */
// async function persists(id: number): Promise<boolean> {
//   const db = await orm.openDb();
//   for (const user of db.users) {
//     if (user.id === id) {
//       return true;
//     }
//   }
//   return false;
// }

/**
 * Add one user.
 *
 * @param user
 * @returns
 */
// async function add(user: IUser): Promise<void> {
//   const db = await orm.openDb();
//   user.id = getRandomInt();
//   db.users.push(user);
//   return orm.saveDb(db);
// }

/**
 * Update a user.
 *
 * @param user
 * @returns
 */
// async function update(user: IUser): Promise<void> {
//   const db = await orm.openDb();
//   for (let i = 0; i < db.users.length; i++) {
//     if (db.users[i].id === user.id) {
//       db.users[i] = user;
//       return orm.saveDb(db);
//     }
//   }
// }

/**
 * Delete one user.
 *
 * @param id
 * @returns
 */
// async function deleteOne(id: number): Promise<void> {
//   const db = await orm.openDb();
//   for (let i = 0; i < db.users.length; i++) {
//     if (db.users[i].id === id) {
//       db.users.splice(i, 1);
//       return orm.saveDb(db);
//     }
//   }
// }

// Export default
export default {
  getAccounts,
  getBalance,
  //   delete: deleteOne,
} as const;
