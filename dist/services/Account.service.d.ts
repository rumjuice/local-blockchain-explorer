declare function getAll(): Promise<string[]>;
declare function getBalance(address: string): Promise<string>;
declare const _default: {
    readonly getAll: typeof getAll;
    readonly getBalance: typeof getBalance;
};
export default _default;
