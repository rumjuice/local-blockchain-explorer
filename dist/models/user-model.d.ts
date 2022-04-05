export interface IUser {
    id: number;
    name: string;
    email: string;
}
declare function getNew(name: string, email: string): IUser;
declare function copy(user: IUser): IUser;
declare const _default: {
    new: typeof getNew;
    copy: typeof copy;
};
export default _default;
