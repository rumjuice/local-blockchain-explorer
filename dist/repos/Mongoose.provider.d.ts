declare function openDb(): Promise<Record<string, any>>;
declare function saveDb(db: Record<string, any>): Promise<void>;
declare const _default: {
    readonly openDb: typeof openDb;
    readonly saveDb: typeof saveDb;
};
export default _default;
