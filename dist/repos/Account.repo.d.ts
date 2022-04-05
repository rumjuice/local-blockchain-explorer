declare function getAccounts(): Promise<string[]>;
declare function getBalance(address: string): Promise<string>;
declare const _default: {
    readonly getAccounts: typeof getAccounts;
    readonly getBalance: typeof getBalance;
};
export default _default;
