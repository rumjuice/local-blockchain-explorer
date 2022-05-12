# Blockchain Explorer

Explore and do transactions on local blockchain (hardhat)

### As part of Full Stack 2 Final Assignment

Author: **Ramdhani Rachmansyah -- 101391780**

George Brown College

#

## Instruction

- Make sure that your MongoDB instance is running
- run `yarn start` (this will run frontend, api, and hardhat node)

## Project features

1. List all transactions
2. List all nodes in the network
3. Send ETH to one of the nodes or address
4. View balance of wallet (can be connected to Metamask)
5. Project structured using Yarn workspace (mono-repo)

## Stack

### Front-end

- React TypeScript, ky, formik, Tailwind

### Back-end

- Node TypeScript, Express, Mongoose, Hardhat

---

### Notes

There are some changes in backend:

- Add list transaction route
- Ability to handle ultra long integer (wei)
- Adjust send transaction api
